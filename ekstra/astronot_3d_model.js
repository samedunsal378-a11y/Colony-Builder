// =====================================================================================
// MARS: Colony Builder v1.42 – ASTRONOT 3D MODEL KODU (oyundan birebir alıntı)
// Oyun motoru WebGL'de her karede üçgen listesi (V: konumlar, C: renkler) üretir.
// Ölçek: 1 birim = 1 metre. Model yerel koordinatlarda çizilir (ayak y=0, kalça 0.9, omuz 1.56,
// kask merkezi 1.85), sonra body() dönüşümüyle oyuncunun konumuna, yönüne ve eğimine taşınır.
// Bağımlılıklar (oyunun geri kalanında tanımlı): V, C dizileri, SUN (güneş yönü), settings,
// DETAIL_MUL, hash2(), cross(), inInterior(), toGlow(), octa(), cube(), oyuncu durum değişkenleri
// (player, faceYaw, walkPhase, runBlend, isMoving, jAir, jLand, actT, slp, suitLevel, SUIT_MAX ...).
// =====================================================================================

// -------------------------------------------------------------------------------------
// 1) TEMEL ÇİZİM YARDIMCILARI (üçgen, dörtgen, kutu, dönüşümlü kutu)
// -------------------------------------------------------------------------------------
function tri(a,b,c,col){for(const p of [a,b,c]){V.push(...p);C.push(...col);}}
function quad(a,b,c,d,col){tri(a,b,c,col);tri(a,c,d,col);}
function cube(x,y,z,sx,sy,sz,color, shadeMul=1){
  const x0=x-sx/2,x1=x+sx/2,y0=y,y1=y+sy,z0=z-sz/2,z1=z+sz/2;
  // more realistic face shading (top brightest, bottom darkest, sides vary)
  const shades=[0.72,0.88,0.78,0.95,1.05,0.55].map(v=>v*shadeMul);
  const faces=[
    [[x0,y0,z0],[x1,y0,z0],[x1,y1,z0],[x0,y1,z0]], // back
    [[x1,y0,z1],[x0,y0,z1],[x0,y1,z1],[x1,y1,z1]], // front
    [[x0,y0,z1],[x0,y0,z0],[x0,y1,z0],[x0,y1,z1]], // left
    [[x1,y0,z0],[x1,y0,z1],[x1,y1,z1],[x1,y1,z0]], // right
    [[x0,y1,z0],[x1,y1,z0],[x1,y1,z1],[x0,y1,z1]], // top
    [[x0,y0,z1],[x1,y0,z1],[x1,y0,z0],[x0,y0,z0]]  // bottom
  ];
  faces.forEach((f,i)=>quad(...f,color.map(v=>Math.min(1,v*shades[i]))));
}

function vtx(Va,Ca,p,c){Va.push(p[0],p[1],p[2]);Ca.push(c[0],c[1],c[2]);}
function cubeX(cx,cy,cz,sx,sy,sz,col,xf){
  const x0=cx-sx/2,x1=cx+sx/2,y0=cy,y1=cy+sy,z0=cz-sz/2,z1=cz+sz/2,sh=[.72,.88,.78,.95,1.05,.55];
  [[[x0,y0,z0],[x1,y0,z0],[x1,y1,z0],[x0,y1,z0]],[[x1,y0,z1],[x0,y0,z1],[x0,y1,z1],[x1,y1,z1]],[[x0,y0,z1],[x0,y0,z0],[x0,y1,z0],[x0,y1,z1]],
   [[x1,y0,z0],[x1,y0,z1],[x1,y1,z1],[x1,y1,z0]],[[x0,y1,z0],[x1,y1,z0],[x1,y1,z1],[x0,y1,z1]],[[x0,y0,z1],[x1,y0,z1],[x1,y0,z0],[x0,y0,z0]]]
  .forEach((f,i)=>quad(...f.map(xf),col.map(v=>Math.min(1,v*sh[i]))));
}

// -------------------------------------------------------------------------------------
// 2) YUVARLAK PRİMİTİFLER (elipsoid/küre, silindir/koni, kapsül) – yumuşak gölgeleme
// -------------------------------------------------------------------------------------
// ===== v1.40: yuvarlak (eğri) primitifler – köşe normalleriyle yumuşak gölgeleme =====
const LIN=(()=>{const v=[.35,.85,.4],l=Math.hypot(...v);return v.map(q=>q/l);})();
function shadeN(col,n){
  const L=(typeof inInterior==='function'&&inInterior())?LIN:SUN, d=n[0]*L[0]+n[1]*L[1]+n[2]*L[2];
  const k=.46+.6*Math.max(0,d)+.12*Math.max(0,n[1])+.06*Math.pow(Math.max(0,1-Math.abs(d)),3);
  return [Math.min(1,col[0]*k),Math.min(1,col[1]*k),Math.min(1,col[2]*k)];
}
function nrm3(a){const l=Math.hypot(a[0],a[1],a[2])||1;return [a[0]/l,a[1]/l,a[2]/l];}
function xfN(xf,p,n){ if(!xf) return [p,n]; const q=xf(p), e=xf([p[0]+n[0]*.02,p[1]+n[1]*.02,p[2]+n[2]*.02]); return [q,nrm3([e[0]-q[0],e[1]-q[1],e[2]-q[2]])]; }
function gridMesh(G){   // G[j][i] = [p, c]
  for(let j=0;j<G.length-1;j++) for(let i=0;i<G[j].length-1;i++){
    const a=G[j][i],b=G[j][i+1],c=G[j+1][i+1],d=G[j+1][i];
    vtx(V,C,a[0],a[1]);vtx(V,C,b[0],b[1]);vtx(V,C,c[0],c[1]);
    vtx(V,C,a[0],a[1]);vtx(V,C,c[0],c[1]);vtx(V,C,d[0],d[1]);
  }
}
function detK(){return DETAIL_MUL[(settings.detail||2)-1];}
// elipsoid (küre): opsiyonel xf dönüşümü ve gürültü (taşlar için)
function ellip(cx,cy,cz,rx,ry,rz,col,xf,nu,nv,lump,seed,half){
  nu=Math.max(5,Math.round((nu||14)*detK())); nv=Math.max(3,Math.round((nv||9)*detK()));
  const G=[], j1=half?Math.ceil(nv/2):nv;
  for(let j=0;j<=j1;j++){const th=j/nv*Math.PI,st=Math.sin(th),ct=Math.cos(th),row=[];
    for(let i=0;i<=nu;i++){const ph=(i%nu)/nu*6.2832,lx=st*Math.cos(ph),ly=ct,lz=st*Math.sin(ph);
      let m=1; if(lump) m=1+lump*(hash2(i%nu+(seed||0)*7.3,j+(seed||0)*3.1)-.5)*(j===0||j===nv?0:1);
      const p=[cx+lx*rx*m,cy+ly*ry*m,cz+lz*rz*m], n=nrm3([lx/rx,ly/ry,lz/rz]);
      const r=xfN(xf,p,n); row.push([r[0],shadeN(col,r[1])]);}
    G.push(row);}
  gridMesh(G);
}
// eksen boyunca silindir/koni (p0→p1), kapaklı
function cylA(p0,p1,r0,r1,col,xf,n,cap){
  n=Math.max(5,Math.round((n||12)*detK()));
  const a=nrm3([p1[0]-p0[0],p1[1]-p0[1],p1[2]-p0[2]]), ref=Math.abs(a[1])<.9?[0,1,0]:[1,0,0];
  const u=nrm3(cross(a,ref)), w=cross(a,u), G=[[],[]];
  for(let i=0;i<=n;i++){const t=(i%n)/n*6.2832,c=Math.cos(t),s=Math.sin(t),d=[u[0]*c+w[0]*s,u[1]*c+w[1]*s,u[2]*c+w[2]*s];
    const A=xfN(xf,[p0[0]+d[0]*r0,p0[1]+d[1]*r0,p0[2]+d[2]*r0],d), B=xfN(xf,[p1[0]+d[0]*r1,p1[1]+d[1]*r1,p1[2]+d[2]*r1],d);
    G[0].push([A[0],shadeN(col,A[1])]); G[1].push([B[0],shadeN(col,B[1])]);}
  gridMesh(G);
  if(cap){for(const [pp,rr,sg] of [[p0,r0,-1],[p1,r1,1]]){ if(rr<=0) continue;
    const cn=xfN(xf,pp,[a[0]*sg,a[1]*sg,a[2]*sg]), cc=shadeN(col,cn[1]);
    for(let i=0;i<n;i++){const t0=i/n*6.2832,t1=(i+1)/n*6.2832;
      const q0=xfN(xf,[pp[0]+(u[0]*Math.cos(t0)+w[0]*Math.sin(t0))*rr,pp[1]+(u[1]*Math.cos(t0)+w[1]*Math.sin(t0))*rr,pp[2]+(u[2]*Math.cos(t0)+w[2]*Math.sin(t0))*rr],a)[0];
      const q1=xfN(xf,[pp[0]+(u[0]*Math.cos(t1)+w[0]*Math.sin(t1))*rr,pp[1]+(u[1]*Math.cos(t1)+w[1]*Math.sin(t1))*rr,pp[2]+(u[2]*Math.cos(t1)+w[2]*Math.sin(t1))*rr],a)[0];
      vtx(V,C,cn[0],cc);vtx(V,C,q0,cc);vtx(V,C,q1,cc);}}}
}
function capsule(p0,p1,r,col,xf,n){cylA(p0,p1,r,r,col,xf,n||10,false); ellip(p0[0],p0[1],p0[2],r,r,r,col,xf,n||10,6); ellip(p1[0],p1[1],p1[2],r,r,r,col,xf,n||10,6);}

// -------------------------------------------------------------------------------------
// 3) ASTRONOT MODELİ – person() (EVA kostümü, kask, vizör, PLSS, eklemler, yürüme/koşma/zıplama/uyku animasyonu)
// -------------------------------------------------------------------------------------
function person(){
  // v1.40: gerçekçi, yuvarlak hatlı EVA kostümü (xEMU benzeri): kapsül uzuvlar, eklem halkaları, baloncuk kask + altın vizör, PLSS sırt çantası
  if(trip||fpView) return;
  const px=player.x,pz=player.z,gy=restY(),S=.82,hipY=.9,run=runBlend,mv=isMoving?1:0,ph=walkPhase,jA=jAir,jL=jLand;
  const sw=Math.sin(ph)*(.55+.5*run)*mv, bob=Math.abs(Math.cos(ph))*(.05+.05*run)*mv*S;
  const sleepK=(slp.on&&slp.bed&&!slp.bed.upright)?Math.min(1,slp.t*1.6):0, ease=Math.max(1-Math.pow(1-deadK(),3),sleepK*.9), ang=.03+.3*run*mv-ease*1.5+Math.sin(gameTime*1.6)*.012;
  const cf=Math.cos(faceYaw),sf=Math.sin(faceYaw),ca=Math.cos(ang),sa=Math.sin(ang),drop=(hipY-.4)*ease;
  const body=p=>{let x=p[0]*S,y=(p[1]-hipY)*S,z=p[2]*S;const yy=y*ca-z*sa;z=y*sa+z*ca;y=yy+(hipY-drop)*S+bob-jL*.12;return [px+x*cf+z*sf,gy+y+.05,pz-x*sf+z*cf];};
  const rot=(p,pv,ax)=>{let x=p[0]-pv[0],y=p[1]-pv[1],z=p[2]-pv[2];const c=Math.cos(ax),s2=Math.sin(ax);const yy=y*c-z*s2;z=y*s2+z*c;return [x+pv[0],yy+pv[1],z+pv[2]];};
  const W=[.94,.93,.9],Wd=[.8,.79,.76],RS=[.78,.2,.18],BL=[.2,.35,.7],GR=[.42,.43,.47],DK=[.16,.16,.19],GOLD=[.95,.74,.28],MT=[.7,.72,.76],id=body;
  for(const sd of [-1,1]){
    const L=p=>body(rot(p,[sd*.17,hipY,0],sd*sw+ease*sd*.15-jA*.55));
    capsule([sd*.16,.82,0],[sd*.17,.5,.02],.135,W,L,10);                     // uyluk
    cylA([sd*.17,.47,.02],[sd*.17,.53,.02],.15,.15,sd<0?RS:BL,L,10,false);    // diz halkası (renkli şerit)
    capsule([sd*.17,.46,.02],[sd*.17,.17,0],.12,W,L,10);                      // baldır
    ellip(sd*.17,.09,.06,.14,.1,.22,GR,L,10,6);                               // bot
    cubeX(sd*.17,0,.06,.24,.04,.42,DK,L);                                     // taban
    const mine=(sd>0&&actT>0), sa2=mine?-(.9+.7*Math.sin(actT*14)):-sd*sw*.9-ease*.4-jA*2.3, eb=-(mine?1.1:(.2+.85*run)*(mv?1:.3))-jA*.35;
    const AX=.43;   // kol ekseni gövdeye yakın: omuz eklemi gövdenin içine oturur, kollar ayrık durmaz
    const A=p=>body(rot(p,[sd*AX,1.56,0],sa2)), F=p=>body(rot(rot(p,[sd*AX,1.3,0],eb),[sd*AX,1.56,0],sa2));
    ellip(sd*.3,1.5,0,.16,.13,.2,W,id,10,7);                                  // gövde tarafı omuz yatağı (sabit)
    ellip(sd*.4,1.53,0,.17,.16,.18,W,A,10,7);                                 // omuz eklemi (kolla döner, gövdeye gömülü)
    cylA([sd*.36,1.53,0],[sd*.46,1.53,0],.15,.15,sd<0?RS:BL,A,10,false);      // omuz yatağı halkası
    capsule([sd*.42,1.48,0],[sd*AX,1.32,0],.12,W,A,10);                       // üst kol
    cylA([sd*AX,1.28,0],[sd*AX,1.34,0],.13,.13,MT,F,10,false);                // dirsek yatağı
    capsule([sd*AX,1.27,0],[sd*AX,1.0,0],.11,Wd,F,10);                        // ön kol
    cylA([sd*AX,.94,0],[sd*AX,.99,0],.115,.115,MT,F,10,false);                // bilek bağlantısı
    ellip(sd*AX,.87,.01,.095,.11,.08,GR,F,8,6);                               // eldiven
    if(sd>0) heldModel(p=>F([p[0]-(.5-AX),p[1],p[2]]));
  }
  ellip(0,.88,0,.33,.16,.23,W,id,12,7);                                       // kalça (brief)
  cylA([0,.98,0],[0,1.04,0],.31,.31,MT,id,14,false);                          // bel yatağı
  ellip(0,1.22,0,.37,.38,.25,W,id,14,9);                                      // gövde (sert üst gövde)
  ellip(0,1.45,0,.42,.17,.26,W,id,14,8);                                      // omuz kuşağı: gövdeyi omuz eklemlerine bağlar
  if(suitLevel>=SUIT_MAX){ cylA([0,1.03,0],[0,1.07,0],.32,.32,[.95,.78,.3],id,14,false); ellip(.2,1.36,.19,.06,.06,.02,[1,.85,.3],id,8,4); }   // seviye 6: altın şerit
  cubeX(0,1.1,.2,.36,.2,.12,DK,id); cubeX(-.1,1.24,.25,.05,.04,.03,[.9,.25,.2],id); cubeX(.1,1.24,.25,.05,.04,.03,[.25,.9,.4],id);   // göğüs kontrol modülü (DCM)
  ellip(-.2,1.36,.19,.06,.06,.02,[.95,.5,.15],id,8,4);                        // görev arması
  cubeX(0,.86,-.38,.58,.72,.28,Wd,id); cylA([-.29,1.58,-.38],[.29,1.58,-.38],.14,.14,Wd,id,10,true);   // PLSS sırt çantası
  cubeX(.22,1.62,-.42,.04,.3,.04,GR,id);                                     // anten
  cylA([0,1.56,0],[0,1.66,0],.2,.2,MT,id,14,false);                          // boyun halkası
  ellip(0,1.85,0,.27,.28,.27,[.96,.96,.95],id,16,11);                        // kask kabuğu
  ellip(0,1.83,.09,.23,.2,.22,GOLD,id,16,10);                               // altın güneş vizörü (öne taşar)
  ellip(-.06,1.92,.24,.05,.03,.02,[1,.97,.85],id,8,4);                        // vizör parlaması
  for(const sd of[-1,1]) cylA([sd*.27,1.88,.02],[sd*.27,1.88,.14],.035,.035,DK,id,8,true);   // kask lambaları
  toGlow(()=>{for(const sd of[-1,1]){const q=body([sd*.27,1.88,.15]); octa(q[0],q[1],q[2],.035,isNight()?[1,.95,.75]:[.4,.38,.3]);}});
}

// -------------------------------------------------------------------------------------
// 4) ELDEKİ ALET – heldModel()
// -------------------------------------------------------------------------------------
function heldModel(F){   // sağ elde tutulan alet; F: sağ kolun dönüşümü, el yaklaşık (0.5, 0.86, 0)
  const hl=curHeld(); if(!hl) return;
  const WD=[.6,.45,.3], MT=[.72,.74,.78], GR=[.26,.27,.31], OR=[.96,.5,.12];
  if(hl==='pickaxe'){
    cubeX(.5,.56,.02,.05,.56,.05,WD,F); cubeX(.5,.27,.02,.38,.06,.07,MT,F); cubeX(.5,.27,.02,.06,.12,.09,MT,F);
  }else if(hl==='shovel'){
    cubeX(.5,.56,.02,.05,.56,.05,WD,F); cubeX(.5,.25,.02,.24,.28,.04,MT,F);
  }else if(hl==='scanner'){
    cubeX(.5,.8,.12,.22,.16,.1,GR,F); cubeX(.5,.8,.18,.07,.05,.02,[.2,.9,.4],F); cubeX(.5,.98,.12,.02,.22,.02,GR,F); cubeX(.5,1.1,.12,.05,.05,.05,OR,F);
  }
}

// -------------------------------------------------------------------------------------
// 5) BİRİNCİ ŞAHIS UZUVLAR – fpLimbs()
// -------------------------------------------------------------------------------------
function fpLimbs(){
  // birinci şahıs: aşağı bakınca bacaklar, botlar ve kollar görünür (yürürken salınır, zıplarken toplanır)
  if(trip||dead||slp.on) return;
  const gy=restY()-jLand*.08;
  const rx=Math.cos(yaw), rz=-Math.sin(yaw), fx=-Math.sin(yaw), fz=-Math.cos(yaw);
  const sw=Math.sin(walkPhase)*.22*(isMoving?1:0), tuck=jAir*.22, ay=gy+.9+jAir*.18;
  const Pn=[.2,.24,.36], Bt=[.1,.1,.12], Su=[.9,.9,.92], Gl=[.55,.56,.6];
  for(const s of[-1,1]){
    const ph=s<0?sw:-sw;
    const lx=player.x+rx*s*.2+fx*(ph+tuck), lz=player.z+rz*s*.2+fz*(ph+tuck);
    cube(lx,gy,lz,.2,.84,.22,Pn);
    cube(lx+fx*.03,gy,lz+fz*.03,.22,.12,.3,Bt);
    const ax=player.x+rx*s*.36-fx*ph*.6, az=player.z+rz*s*.36-fz*ph*.6;
    cube(ax,ay,az,.16,.6,.16,Su);
    cube(ax+fx*.05,ay-.06,az+fz*.05,.15,.14,.15,Gl);
  }
}

// -------------------------------------------------------------------------------------
// 6) DİĞER OYUNCULARIN ASTRONOT MODELİ – drawRemotePlayers()
// -------------------------------------------------------------------------------------
function drawRemotePlayers(){
  if(!COOP.on||trip) return;
  const pl=placeNow(); if(pl===5) return;   // çadırlar farklı yerlerde; çadır içi gösterilmez
  for(const p of COOP.players){
    if(p.w!==world||p.pl!==pl) continue;
    if(Math.hypot(p.x-player.x,p.z-player.z)>60) continue;
    // v1.42: diğer oyuncular da yuvarlak hatlı uzay kostümüyle; omuz/diz şeritleri oyuncu numarasının rengi
    const gy=remoteGroundY(p), c=COOP_PAL[((p.slot||1)-1)%COOP_PAL.length], S=.82;
    const ph=(p.mv?gameTime*9.5:0)+(p.id.charCodeAt(0)), sw=p.mv?Math.sin(ph)*.5:0, bob=p.mv?Math.abs(Math.cos(ph))*.04:0;
    const cf=Math.cos(p.fy||0), sf=Math.sin(p.fy||0);
    const B=q=>{const x=q[0]*S,y=q[1]*S+bob,z=q[2]*S;return [p.x+x*cf+z*sf,gy+y+.05,p.z-x*sf+z*cf];};
    const rot=(q,pv,ax)=>{const x=q[0]-pv[0],y=q[1]-pv[1],z=q[2]-pv[2],cc=Math.cos(ax),ss=Math.sin(ax);return [x+pv[0],y*cc-z*ss+pv[1],y*ss+z*cc+pv[2]];};
    const W=[.94,.93,.9],Wd=[.8,.79,.76],GR=[.42,.43,.47],MT=[.7,.72,.76],GOLD=[.95,.74,.28];
    for(const sd of[-1,1]){
      const Lg=q=>B(rot(q,[sd*.17,.9,0],sd*sw)), Ar=q=>B(rot(q,[sd*.43,1.56,0],-sd*sw*.9));
      capsule([sd*.16,.82,0],[sd*.17,.18,.02],.13,W,Lg,8); cylA([sd*.17,.47,.02],[sd*.17,.53,.02],.15,.15,c,Lg,8,false); ellip(sd*.17,.09,.06,.14,.1,.22,GR,Lg,8,5);
      ellip(sd*.3,1.5,0,.16,.13,.2,W,B,8,6); ellip(sd*.4,1.53,0,.17,.16,.18,W,Ar,8,6); cylA([sd*.36,1.53,0],[sd*.46,1.53,0],.15,.15,c,Ar,8,false);
      capsule([sd*.42,1.48,0],[sd*.43,1.0,0],.115,Wd,Ar,8); ellip(sd*.43,.87,.01,.095,.11,.08,GR,Ar,7,5);
    }
    ellip(0,.88,0,.33,.16,.23,W,B,10,6); ellip(0,1.22,0,.37,.38,.25,W,B,12,8); ellip(0,1.45,0,.42,.17,.26,W,B,12,7);
    cubeX(0,.86,-.38,.58,.72,.28,Wd,B); cubeX(0,1.1,.2,.36,.2,.12,c.map(v=>v*.6),B);
    cylA([0,1.56,0],[0,1.66,0],.2,.2,MT,B,12,false); ellip(0,1.85,0,.27,.28,.27,[.96,.96,.95],B,14,9); ellip(0,1.83,.09,.23,.2,.22,GOLD,B,14,9);
    if(p.tk) toGlow(()=>{const q=B([.22,1.62,-.42]); octa(q[0],q[1]+.25,q[2],.06,[1,.25,.15]);});   // konuşurken sırt antenindeki ışık yanar
  }
}
