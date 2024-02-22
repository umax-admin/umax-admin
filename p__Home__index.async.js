"use strict";var we=Object.getOwnPropertySymbols;var gt=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable;var Re=(U,W)=>{var p={};for(var j in U)gt.call(U,j)&&W.indexOf(j)<0&&(p[j]=U[j]);if(U!=null&&we)for(var j of we(U))W.indexOf(j)<0&&yt.call(U,j)&&(p[j]=U[j]);return p};(self.webpackChunk=self.webpackChunk||[]).push([[371],{75765:function(U,W,p){p.r(W),p.d(W,{default:function(){return et}});var j=p(97857),ee=p.n(j),Ne=p(5574),le=p.n(Ne),Ie=p(61842),B=p(12094),M=p(33495),ze=p(49606),He=p(87462),O=p(67294),n=p(99477),Ue=Object.defineProperty,Ye=(l,m,b)=>m in l?Ue(l,m,{enumerable:!0,configurable:!0,writable:!0,value:b}):l[m]=b,a=(l,m,b)=>(Ye(l,typeof m!="symbol"?m+"":m,b),b);const J=new n.Ray,ce=new n.Plane,Ve=Math.cos(70*(Math.PI/180)),ue=(l,m)=>(l%m+m)%m;class Fe extends n.EventDispatcher{constructor(m,b){super(),a(this,"object"),a(this,"domElement"),a(this,"enabled",!0),a(this,"target",new n.Vector3),a(this,"minDistance",0),a(this,"maxDistance",1/0),a(this,"minZoom",0),a(this,"maxZoom",1/0),a(this,"minPolarAngle",0),a(this,"maxPolarAngle",Math.PI),a(this,"minAzimuthAngle",-1/0),a(this,"maxAzimuthAngle",1/0),a(this,"enableDamping",!1),a(this,"dampingFactor",.05),a(this,"enableZoom",!0),a(this,"zoomSpeed",1),a(this,"enableRotate",!0),a(this,"rotateSpeed",1),a(this,"enablePan",!0),a(this,"panSpeed",1),a(this,"screenSpacePanning",!0),a(this,"keyPanSpeed",7),a(this,"zoomToCursor",!1),a(this,"autoRotate",!1),a(this,"autoRotateSpeed",2),a(this,"reverseOrbit",!1),a(this,"reverseHorizontalOrbit",!1),a(this,"reverseVerticalOrbit",!1),a(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),a(this,"mouseButtons",{LEFT:n.MOUSE.ROTATE,MIDDLE:n.MOUSE.DOLLY,RIGHT:n.MOUSE.PAN}),a(this,"touches",{ONE:n.TOUCH.ROTATE,TWO:n.TOUCH.DOLLY_PAN}),a(this,"target0"),a(this,"position0"),a(this,"zoom0"),a(this,"_domElementKeyEvents",null),a(this,"getPolarAngle"),a(this,"getAzimuthalAngle"),a(this,"setPolarAngle"),a(this,"setAzimuthalAngle"),a(this,"getDistance"),a(this,"listenToKeyEvents"),a(this,"stopListenToKeyEvents"),a(this,"saveState"),a(this,"reset"),a(this,"update"),a(this,"connect"),a(this,"dispose"),this.object=m,this.domElement=b,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>u.phi,this.getAzimuthalAngle=()=>u.theta,this.setPolarAngle=t=>{let o=ue(t,2*Math.PI),i=u.phi;i<0&&(i+=2*Math.PI),o<0&&(o+=2*Math.PI);let d=Math.abs(o-i);2*Math.PI-d<d&&(o<i?o+=2*Math.PI:i+=2*Math.PI),f.phi=o-i,e.update()},this.setAzimuthalAngle=t=>{let o=ue(t,2*Math.PI),i=u.theta;i<0&&(i+=2*Math.PI),o<0&&(o+=2*Math.PI);let d=Math.abs(o-i);2*Math.PI-d<d&&(o<i?o+=2*Math.PI:i+=2*Math.PI),f.theta=o-i,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=t=>{t.addEventListener("keydown",se),this._domElementKeyEvents=t},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",se),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(P),e.update(),c=s.NONE},this.update=(()=>{const t=new n.Vector3,o=new n.Vector3(0,1,0),i=new n.Quaternion().setFromUnitVectors(m.up,o),d=i.clone().invert(),E=new n.Vector3,I=new n.Quaternion,k=2*Math.PI;return function(){const Se=e.object.position;i.setFromUnitVectors(m.up,o),d.copy(i).invert(),t.copy(Se).sub(e.target),t.applyQuaternion(i),u.setFromVector3(t),e.autoRotate&&c===s.NONE&&te(tt()),e.enableDamping?(u.theta+=f.theta*e.dampingFactor,u.phi+=f.phi*e.dampingFactor):(u.theta+=f.theta,u.phi+=f.phi);let z=e.minAzimuthAngle,H=e.maxAzimuthAngle;isFinite(z)&&isFinite(H)&&(z<-Math.PI?z+=k:z>Math.PI&&(z-=k),H<-Math.PI?H+=k:H>Math.PI&&(H-=k),z<=H?u.theta=Math.max(z,Math.min(H,u.theta)):u.theta=u.theta>(z+H)/2?Math.max(z,u.theta):Math.min(H,u.theta)),u.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,u.phi)),u.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(x,e.dampingFactor):e.target.add(x),e.zoomToCursor&&X||e.object.isOrthographicCamera?u.radius=ne(u.radius):u.radius=ne(u.radius*v),t.setFromSpherical(u),t.applyQuaternion(d),Se.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(f.theta*=1-e.dampingFactor,f.phi*=1-e.dampingFactor,x.multiplyScalar(1-e.dampingFactor)):(f.set(0,0,0),x.set(0,0,0));let q=!1;if(e.zoomToCursor&&X){let G=null;if(e.object instanceof n.PerspectiveCamera&&e.object.isPerspectiveCamera){const Q=t.length();G=ne(Q*v);const _=Q-G;e.object.position.addScaledVector(y,_),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const Q=new n.Vector3(h.x,h.y,0);Q.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/v)),e.object.updateProjectionMatrix(),q=!0;const _=new n.Vector3(h.x,h.y,0);_.unproject(e.object),e.object.position.sub(_).add(Q),e.object.updateMatrixWorld(),G=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;G!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(G).add(e.object.position):(J.origin.copy(e.object.position),J.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(J.direction))<Ve?m.lookAt(e.target):(ce.setFromNormalAndCoplanarPoint(e.object.up,e.target),J.intersectPlane(ce,e.target))))}else e.object instanceof n.OrthographicCamera&&e.object.isOrthographicCamera&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/v)),e.object.updateProjectionMatrix(),q=!0);return v=1,X=!1,q||E.distanceToSquared(e.object.position)>Y||8*(1-I.dot(e.object.quaternion))>Y?(e.dispatchEvent(P),E.copy(e.object.position),I.copy(e.object.quaternion),q=!1,!0):!1}})(),this.connect=t=>{t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),e.domElement=t,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",Ce),e.domElement.addEventListener("pointerdown",Me),e.domElement.addEventListener("pointercancel",Ae),e.domElement.addEventListener("wheel",xe)},this.dispose=()=>{var t,o,i,d,E,I;(t=e.domElement)==null||t.removeEventListener("contextmenu",Ce),(o=e.domElement)==null||o.removeEventListener("pointerdown",Me),(i=e.domElement)==null||i.removeEventListener("pointercancel",Ae),(d=e.domElement)==null||d.removeEventListener("wheel",xe),(E=e.domElement)==null||E.ownerDocument.removeEventListener("pointermove",ae),(I=e.domElement)==null||I.ownerDocument.removeEventListener("pointerup",ie),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",se)};const e=this,P={type:"change"},T={type:"start"},A={type:"end"},s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=s.NONE;const Y=1e-6,u=new n.Spherical,f=new n.Spherical;let v=1;const x=new n.Vector3,D=new n.Vector2,S=new n.Vector2,V=new n.Vector2,w=new n.Vector2,C=new n.Vector2,F=new n.Vector2,Z=new n.Vector2,R=new n.Vector2,N=new n.Vector2,y=new n.Vector3,h=new n.Vector2;let X=!1;const r=[],L={};function tt(){return 2*Math.PI/60/60*e.autoRotateSpeed}function $(){return Math.pow(.95,e.zoomSpeed)}function te(t){e.reverseOrbit||e.reverseHorizontalOrbit?f.theta+=t:f.theta-=t}function he(t){e.reverseOrbit||e.reverseVerticalOrbit?f.phi+=t:f.phi-=t}const me=(()=>{const t=new n.Vector3;return function(i,d){t.setFromMatrixColumn(d,0),t.multiplyScalar(-i),x.add(t)}})(),fe=(()=>{const t=new n.Vector3;return function(i,d){e.screenSpacePanning===!0?t.setFromMatrixColumn(d,1):(t.setFromMatrixColumn(d,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(i),x.add(t)}})(),K=(()=>{const t=new n.Vector3;return function(i,d){const E=e.domElement;if(E&&e.object instanceof n.PerspectiveCamera&&e.object.isPerspectiveCamera){const I=e.object.position;t.copy(I).sub(e.target);let k=t.length();k*=Math.tan(e.object.fov/2*Math.PI/180),me(2*i*k/E.clientHeight,e.object.matrix),fe(2*d*k/E.clientHeight,e.object.matrix)}else E&&e.object instanceof n.OrthographicCamera&&e.object.isOrthographicCamera?(me(i*(e.object.right-e.object.left)/e.object.zoom/E.clientWidth,e.object.matrix),fe(d*(e.object.top-e.object.bottom)/e.object.zoom/E.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function oe(t){e.object instanceof n.PerspectiveCamera&&e.object.isPerspectiveCamera||e.object instanceof n.OrthographicCamera&&e.object.isOrthographicCamera?v/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function pe(t){e.object instanceof n.PerspectiveCamera&&e.object.isPerspectiveCamera||e.object instanceof n.OrthographicCamera&&e.object.isOrthographicCamera?v*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function be(t){if(!e.zoomToCursor||!e.domElement)return;X=!0;const o=e.domElement.getBoundingClientRect(),i=t.clientX-o.left,d=t.clientY-o.top,E=o.width,I=o.height;h.x=i/E*2-1,h.y=-(d/I)*2+1,y.set(h.x,h.y,1).unproject(e.object).sub(e.object.position).normalize()}function ne(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function ge(t){D.set(t.clientX,t.clientY)}function ot(t){be(t),Z.set(t.clientX,t.clientY)}function ye(t){w.set(t.clientX,t.clientY)}function nt(t){S.set(t.clientX,t.clientY),V.subVectors(S,D).multiplyScalar(e.rotateSpeed);const o=e.domElement;o&&(te(2*Math.PI*V.x/o.clientHeight),he(2*Math.PI*V.y/o.clientHeight)),D.copy(S),e.update()}function at(t){R.set(t.clientX,t.clientY),N.subVectors(R,Z),N.y>0?oe($()):N.y<0&&pe($()),Z.copy(R),e.update()}function it(t){C.set(t.clientX,t.clientY),F.subVectors(C,w).multiplyScalar(e.panSpeed),K(F.x,F.y),w.copy(C),e.update()}function st(t){be(t),t.deltaY<0?pe($()):t.deltaY>0&&oe($()),e.update()}function rt(t){let o=!1;switch(t.code){case e.keys.UP:K(0,e.keyPanSpeed),o=!0;break;case e.keys.BOTTOM:K(0,-e.keyPanSpeed),o=!0;break;case e.keys.LEFT:K(e.keyPanSpeed,0),o=!0;break;case e.keys.RIGHT:K(-e.keyPanSpeed,0),o=!0;break}o&&(t.preventDefault(),e.update())}function Ee(){if(r.length==1)D.set(r[0].pageX,r[0].pageY);else{const t=.5*(r[0].pageX+r[1].pageX),o=.5*(r[0].pageY+r[1].pageY);D.set(t,o)}}function Oe(){if(r.length==1)w.set(r[0].pageX,r[0].pageY);else{const t=.5*(r[0].pageX+r[1].pageX),o=.5*(r[0].pageY+r[1].pageY);w.set(t,o)}}function Pe(){const t=r[0].pageX-r[1].pageX,o=r[0].pageY-r[1].pageY,i=Math.sqrt(t*t+o*o);Z.set(0,i)}function lt(){e.enableZoom&&Pe(),e.enablePan&&Oe()}function ct(){e.enableZoom&&Pe(),e.enableRotate&&Ee()}function Te(t){if(r.length==1)S.set(t.pageX,t.pageY);else{const i=re(t),d=.5*(t.pageX+i.x),E=.5*(t.pageY+i.y);S.set(d,E)}V.subVectors(S,D).multiplyScalar(e.rotateSpeed);const o=e.domElement;o&&(te(2*Math.PI*V.x/o.clientHeight),he(2*Math.PI*V.y/o.clientHeight)),D.copy(S)}function ve(t){if(r.length==1)C.set(t.pageX,t.pageY);else{const o=re(t),i=.5*(t.pageX+o.x),d=.5*(t.pageY+o.y);C.set(i,d)}F.subVectors(C,w).multiplyScalar(e.panSpeed),K(F.x,F.y),w.copy(C)}function je(t){const o=re(t),i=t.pageX-o.x,d=t.pageY-o.y,E=Math.sqrt(i*i+d*d);R.set(0,E),N.set(0,Math.pow(R.y/Z.y,e.zoomSpeed)),oe(N.y),Z.copy(R)}function ut(t){e.enableZoom&&je(t),e.enablePan&&ve(t)}function dt(t){e.enableZoom&&je(t),e.enableRotate&&Te(t)}function Me(t){var o,i;e.enabled!==!1&&(r.length===0&&((o=e.domElement)==null||o.ownerDocument.addEventListener("pointermove",ae),(i=e.domElement)==null||i.ownerDocument.addEventListener("pointerup",ie)),bt(t),t.pointerType==="touch"?ft(t):ht(t))}function ae(t){e.enabled!==!1&&(t.pointerType==="touch"?pt(t):mt(t))}function ie(t){var o,i,d;Le(t),r.length===0&&((o=e.domElement)==null||o.releasePointerCapture(t.pointerId),(i=e.domElement)==null||i.ownerDocument.removeEventListener("pointermove",ae),(d=e.domElement)==null||d.ownerDocument.removeEventListener("pointerup",ie)),e.dispatchEvent(A),c=s.NONE}function Ae(t){Le(t)}function ht(t){let o;switch(t.button){case 0:o=e.mouseButtons.LEFT;break;case 1:o=e.mouseButtons.MIDDLE;break;case 2:o=e.mouseButtons.RIGHT;break;default:o=-1}switch(o){case n.MOUSE.DOLLY:if(e.enableZoom===!1)return;ot(t),c=s.DOLLY;break;case n.MOUSE.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;ye(t),c=s.PAN}else{if(e.enableRotate===!1)return;ge(t),c=s.ROTATE}break;case n.MOUSE.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;ge(t),c=s.ROTATE}else{if(e.enablePan===!1)return;ye(t),c=s.PAN}break;default:c=s.NONE}c!==s.NONE&&e.dispatchEvent(T)}function mt(t){if(e.enabled!==!1)switch(c){case s.ROTATE:if(e.enableRotate===!1)return;nt(t);break;case s.DOLLY:if(e.enableZoom===!1)return;at(t);break;case s.PAN:if(e.enablePan===!1)return;it(t);break}}function xe(t){e.enabled===!1||e.enableZoom===!1||c!==s.NONE&&c!==s.ROTATE||(t.preventDefault(),e.dispatchEvent(T),st(t),e.dispatchEvent(A))}function se(t){e.enabled===!1||e.enablePan===!1||rt(t)}function ft(t){switch(De(t),r.length){case 1:switch(e.touches.ONE){case n.TOUCH.ROTATE:if(e.enableRotate===!1)return;Ee(),c=s.TOUCH_ROTATE;break;case n.TOUCH.PAN:if(e.enablePan===!1)return;Oe(),c=s.TOUCH_PAN;break;default:c=s.NONE}break;case 2:switch(e.touches.TWO){case n.TOUCH.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;lt(),c=s.TOUCH_DOLLY_PAN;break;case n.TOUCH.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;ct(),c=s.TOUCH_DOLLY_ROTATE;break;default:c=s.NONE}break;default:c=s.NONE}c!==s.NONE&&e.dispatchEvent(T)}function pt(t){switch(De(t),c){case s.TOUCH_ROTATE:if(e.enableRotate===!1)return;Te(t),e.update();break;case s.TOUCH_PAN:if(e.enablePan===!1)return;ve(t),e.update();break;case s.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;ut(t),e.update();break;case s.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;dt(t),e.update();break;default:c=s.NONE}}function Ce(t){e.enabled!==!1&&t.preventDefault()}function bt(t){r.push(t)}function Le(t){delete L[t.pointerId];for(let o=0;o<r.length;o++)if(r[o].pointerId==t.pointerId){r.splice(o,1);return}}function De(t){let o=L[t.pointerId];o===void 0&&(o=new n.Vector2,L[t.pointerId]=o),o.set(t.pageX,t.pageY)}function re(t){const o=t.pointerId===r[0].pointerId?r[1]:r[0];return L[o.pointerId]}b!==void 0&&this.connect(b),this.update()}}class Et extends null{constructor(m,b){super(m,b),this.screenSpacePanning=!1,this.mouseButtons.LEFT=MOUSE.PAN,this.mouseButtons.RIGHT=MOUSE.ROTATE,this.touches.ONE=TOUCH.PAN,this.touches.TWO=TOUCH.DOLLY_ROTATE}}const Ze=O.forwardRef((f,u)=>{var v=f,{makeDefault:l,camera:m,regress:b,domElement:e,enableDamping:P=!0,keyEvents:T=!1,onChange:A,onStart:s,onEnd:c}=v,Y=Re(v,["makeDefault","camera","regress","domElement","enableDamping","keyEvents","onChange","onStart","onEnd"]);const x=(0,M.z)(h=>h.invalidate),D=(0,M.z)(h=>h.camera),S=(0,M.z)(h=>h.gl),V=(0,M.z)(h=>h.events),w=(0,M.z)(h=>h.setEvents),C=(0,M.z)(h=>h.set),F=(0,M.z)(h=>h.get),Z=(0,M.z)(h=>h.performance),R=m||D,N=e||V.connected||S.domElement,y=O.useMemo(()=>new Fe(R),[R]);return(0,M.A)(()=>{y.enabled&&y.update()},-1),O.useEffect(()=>(T&&y.connect(T===!0?N:T),y.connect(N),()=>void y.dispose()),[T,N,b,y,x]),O.useEffect(()=>{const h=L=>{x(),b&&Z.regress(),A&&A(L)},X=L=>{s&&s(L)},r=L=>{c&&c(L)};return y.addEventListener("change",h),y.addEventListener("start",X),y.addEventListener("end",r),()=>{y.removeEventListener("start",X),y.removeEventListener("end",r),y.removeEventListener("change",h)}},[A,s,c,y,x,w]),O.useEffect(()=>{if(l){const h=F().controls;return C({controls:y}),()=>C({controls:h})}},[l,y]),O.createElement("primitive",(0,He.Z)({ref:u,object:y,enableDamping:P},Y))});var ke=p(62230),Xe=p(11924),Be=p(79360),Ke=p(24770),We=p(79642),Ge=function(l,m){var b={};for(var e in l)Object.prototype.hasOwnProperty.call(l,e)&&m.indexOf(e)<0&&(b[e]=l[e]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,e=Object.getOwnPropertySymbols(l);P<e.length;P++)m.indexOf(e[P])<0&&Object.prototype.propertyIsEnumerable.call(l,e[P])&&(b[e[P]]=l[e[P]]);return b},Qe=(0,O.forwardRef)(function(l,m){var b=l.chartRef,e=l.style,P=e===void 0?{height:"inherit"}:e,T=l.className,A=l.loading,s=l.loadingTemplate,c=l.errorTemplate,Y=Ge(l,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),u=(0,Xe.Z)(ke.sg,Y),f=u.chart,v=u.container;return(0,O.useEffect)(function(){(0,Be.J)(b,f.current)},[f.current]),(0,O.useImperativeHandle)(m,function(){return{getChart:function(){return f.current}}}),O.createElement(Ke.Z,{errorTemplate:c},A&&O.createElement(We.Z,{loadingTemplate:s,theme:l.theme}),O.createElement("div",{className:T,style:P,ref:v}))}),Je=Qe,g=p(85893),$e=[{type:"\u5BB6\u5177\u5BB6\u7535",sales:38},{type:"\u7CAE\u6CB9\u526F\u98DF",sales:52},{type:"\u751F\u9C9C\u6C34\u679C",sales:61},{type:"\u7F8E\u5BB9\u6D17\u62A4",sales:145},{type:"\u6BCD\u5A74\u7528\u54C1",sales:48},{type:"\u8FDB\u53E3\u98DF\u54C1",sales:38},{type:"\u98DF\u54C1\u996E\u6599",sales:38},{type:"\u5BB6\u5EAD\u6E05\u6D01",sales:38}],qe={data:$e,xField:"type",yField:"sales",label:{position:"middle",style:{fill:"#FFFFFF",opacity:.6}},xAxis:{label:{autoHide:!0,autoRotate:!1}},meta:{type:{alias:"\u7C7B\u522B"},sales:{alias:"\u9500\u552E\u989D"}}};function de(l){var m=(0,O.useRef)(),b=(0,O.useState)(!1),e=le()(b,2),P=e[0],T=e[1],A=(0,O.useState)(!1),s=le()(A,2),c=s[0],Y=s[1];return(0,M.A)(function(u,f){return m.current.rotation.x+=f}),(0,g.jsxs)("mesh",ee()(ee()({},l),{},{ref:m,scale:c?1.5:1,onClick:function(f){return Y(!c)},onPointerOver:function(f){return f.stopPropagation(),T(!0)},onPointerOut:function(f){return T(!1)},children:[(0,g.jsx)("boxGeometry",{args:[1,1,1]}),(0,g.jsx)("meshStandardMaterial",{color:P?"red":"orange"})]}))}var _e=function(){return(0,g.jsxs)(Ie._z,{ghost:!0,children:[(0,g.jsxs)(B.Z,{gutter:16,style:{marginBlockStart:16},children:[(0,g.jsx)(B.Z,{bordered:!0,title:"\u603B\u9500\u552E\u989D",children:"Auto"}),(0,g.jsx)(B.Z,{title:"\u8BA2\u5355\u91CF",bordered:!0,children:"Auto"}),(0,g.jsx)(B.Z,{title:"\u603B\u91D1\u989D",bordered:!0,children:"Auto"})]}),(0,g.jsx)("div",{children:(0,g.jsx)(B.Z,{children:(0,g.jsxs)(ze.Xz,{children:[(0,g.jsx)("ambientLight",{intensity:.5}),(0,g.jsx)("spotLight",{position:[10,10,10],angle:.15,penumbra:1}),(0,g.jsx)("pointLight",{position:[-10,-10,-10]}),(0,g.jsx)(de,{position:[-1.2,0,0]}),(0,g.jsx)(de,{position:[1.2,0,0]}),(0,g.jsx)(Ze,{})]})})}),(0,g.jsx)("div",{children:(0,g.jsx)(B.Z,{title:"\u9500\u552E\u7C7B\u578B",children:(0,g.jsx)(Je,ee()({},qe))})})]})},et=_e}}]);