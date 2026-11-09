var jd=0,yu=1,tp=2;var ta=1,ep=2,Jr=3,Bn=0,ui=1,zn=2,ir=0,Ls=1,$r=2,Su=3,Mu=4,ip=5;var nr=100,np=101,sp=102,rp=103,op=104,ap=200,lp=201,cp=202,hp=203,bu=204,Tu=205,up=206,fp=207,dp=208,pp=209,mp=210,gp=211,_p=212,xp=213,vp=214,Sl=0,Ml=1,bl=2,Vr=3,Tl=4,wl=5,El=6,Al=7,wu=0,yp=1,Sp=2,kn=0,Eu=1,Au=2,Cu=3,Ru=4,Pu=5,Iu=6,Lu=7;var Du=300,sr=301,Kr=302,ac=303,lc=304,Cl=1e3,Un=1001,Rl=1002,ai=1003,Mp=1004;var ea=1005;var Pi=1006,cc=1007;var rs=1008;var sn=1009,Nu=1010,Uu=1011,Qr=1012,hc=1013,Cn=1014,Rn=1015,Pn=1016,uc=1017,fc=1018,rr=1020,Ou=35902,Fu=35899,Bu=1021,zu=1022,In=1023,ns=1026,os=1027,ku=1028,dc=1029,Ds=1030,pc=1031;var mc=1033,ia=33776,na=33777,sa=33778,ra=33779,gc=35840,_c=35841,xc=35842,vc=35843,yc=36196,Sc=37492,Mc=37496,bc=37488,Tc=37489,oa=37490,wc=37491,Ec=37808,Ac=37809,Cc=37810,Rc=37811,Pc=37812,Ic=37813,Lc=37814,Dc=37815,Nc=37816,Uc=37817,Oc=37818,Fc=37819,Bc=37820,zc=37821,kc=36492,Vc=36494,Gc=36495,Hc=36283,Wc=36284,aa=36285,Xc=36286;var Lo=2300,Pl=2301,vl=2302,du=2303,pu=2400,mu=2401,gu=2402;var bp=3200;var Vu=0,Tp=1,as="",Qi="srgb",Do="srgb-linear",No="linear",pe="srgb";var yl=7680;var wp=519,Ep=512,Ap=513,Cp=514,Gu=515,Rp=516,Pp=517,Hu=518,Wu=519,Ip=35044;var Xu="300 es",pn=2e3,Uo=2001;function R_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function P_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Oo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Lp(){let s=Oo("canvas");return s.style.display="block",s}var Ad={},Gr=null;function qu(...s){let t="THREE."+s.shift();Gr?Gr("log",t,...s):console.log(t,...s)}function Dp(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Bt(...s){s=Dp(s);let t="THREE."+s.shift();if(Gr)Gr("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function kt(...s){s=Dp(s);let t="THREE."+s.shift();if(Gr)Gr("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ro(...s){let t=s.join(" ");t in Ad||(Ad[t]=!0,Bt(...s))}function Np(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Up={[Sl]:Sl,[bl]:El,[Tl]:Tl,[Vr]:wl,[Ml]:Ml,[El]:bl,[Al]:Al,[wl]:Vr},On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}},xi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Hh=Math.PI/180,Il=180/Math.PI;function la(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xi[s&255]+xi[s>>8&255]+xi[s>>16&255]+xi[s>>24&255]+"-"+xi[t&255]+xi[t>>8&255]+"-"+xi[t>>16&15|64]+xi[t>>24&255]+"-"+xi[e&63|128]+xi[e>>8&255]+"-"+xi[e>>16&255]+xi[e>>24&255]+xi[i&255]+xi[i>>8&255]+xi[i>>16&255]+xi[i>>24&255]).toLowerCase()}function jt(s,t,e){return Math.max(t,Math.min(e,s))}function I_(s,t){return(s%t+t)%t}function Wh(s,t,e){return(1-e)*s+e*t}function Op(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Yu(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function L_(s,t){if(t.constructor===Float32Array)return s;let e=Yu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function D_(s,t){if(t.constructor===Float32Array)return s;let e=Yu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var zt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fn=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*_;m<0&&(u=-u,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),w=Math.sin(y);g=Math.sin(g*y)/w,a=Math.sin(a*y)/w,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+_*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+_*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),d=a(r/2),u=l(i/2),f=l(n/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-n)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=n+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xh.copy(this).projectOnVector(t),this.sub(Xh)}reflect(t){return this.sub(Xh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xh=new k,Cd=new Fn,Gt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,n,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],_=n[0],m=n[3],g=n[6],y=n[1],w=n[4],v=n[7],S=n[2],E=n[5],x=n[8];return r[0]=o*_+a*y+l*S,r[3]=o*m+a*w+l*E,r[6]=o*g+a*v+l*x,r[1]=c*_+h*y+d*S,r[4]=c*m+h*w+d*E,r[7]=c*g+h*v+d*x,r[2]=u*_+f*y+p*S,r[5]=u*m+f*w+p*E,r[8]=u*g+f*v+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+i*u+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=d*_,t[1]=(n*c-h*i)*_,t[2]=(a*i-n*o)*_,t[3]=u*_,t[4]=(h*e-n*l)*_,t[5]=(n*r-a*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ro("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qh.makeScale(t,e)),this}rotate(t){return Ro("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qh.makeRotation(-t)),this}translate(t,e){return Ro("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},qh=new Gt,Rd=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pd=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function N_(){let s={enabled:!0,workingColorSpace:Do,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(n.r=is(n.r),n.g=is(n.g),n.b=is(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(n.r=kr(n.r),n.g=kr(n.g),n.b=kr(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===as?No:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Do]:{primaries:t,whitePoint:i,transfer:No,toXYZ:Rd,fromXYZ:Pd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qi},outputColorSpaceConfig:{drawingBufferColorSpace:Qi}},[Qi]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:Rd,fromXYZ:Pd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qi}}}),s}var ie=N_();function is(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function kr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ar,Ll=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ar===void 0&&(Ar=Oo("canvas")),Ar.width=t.width,Ar.height=t.height;let n=Ar.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Ar}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Oo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=is(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(is(e[i]/255)*255):e[i]=is(e[i]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},U_=0,Hr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=la(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Yh(n[o].image)):r.push(Yh(n[o]))}else r=Yh(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function Yh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ll.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}var O_=0,Zh=new k,ki=class s extends On{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=Un,n=Un,r=Pi,o=rs,a=In,l=sn,c=s.DEFAULT_ANISOTROPY,h=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=la(),this.name="",this.source=new Hr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Zh).x}get height(){return this.source.getSize(Zh).y}get depth(){return this.source.getSize(Zh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Du)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cl:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case Rl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cl:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case Rl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ki.DEFAULT_IMAGE=null;ki.DEFAULT_MAPPING=Du;ki.DEFAULT_ANISOTROPY=1;var Ie=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(f+1)/2,S=(g+1)/2,E=(h+u)/4,x=(d+_)/4,M=(p+m)/4;return w>v&&w>S?w<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(w),n=E/i,r=x/i):v>S?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=E/n,r=M/n):S<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(S),i=x/r,n=M/r),this.set(i,n,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dl=class extends On{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new ki({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Pi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Hr(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ji=class extends Dl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Fo=class extends ki{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ai,this.minFilter=ai,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nl=class extends ki{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ai,this.minFilter=ai,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ce=class s{static{this.prototype.isMatrix4=!0}constructor(t,e,i,n,r,o,a,l,c,h,d,u,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,d,u,f,p,_,m)}set(t,e,i,n,r,o,a,l,c,h,d,u,f,p,_,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/Cr.setFromMatrixColumn(t,0).length(),r=1/Cr.setFromMatrixColumn(t,1).length(),o=1/Cr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(F_,t,B_)}lookAt(t,e,i){let n=this.elements;return $i.subVectors(t,e),$i.lengthSq()===0&&($i.z=1),$i.normalize(),ys.crossVectors(i,$i),ys.lengthSq()===0&&(Math.abs(i.z)===1?$i.x+=1e-4:$i.z+=1e-4,$i.normalize(),ys.crossVectors(i,$i)),ys.normalize(),Ka.crossVectors($i,ys),n[0]=ys.x,n[4]=Ka.x,n[8]=$i.x,n[1]=ys.y,n[5]=Ka.y,n[9]=$i.y,n[2]=ys.z,n[6]=Ka.z,n[10]=$i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],_=i[6],m=i[10],g=i[14],y=i[3],w=i[7],v=i[11],S=i[15],E=n[0],x=n[4],M=n[8],P=n[12],A=n[1],L=n[5],D=n[9],B=n[13],I=n[2],z=n[6],H=n[10],O=n[14],Q=n[3],W=n[7],R=n[11],$=n[15];return r[0]=o*E+a*A+l*I+c*Q,r[4]=o*x+a*L+l*z+c*W,r[8]=o*M+a*D+l*H+c*R,r[12]=o*P+a*B+l*O+c*$,r[1]=h*E+d*A+u*I+f*Q,r[5]=h*x+d*L+u*z+f*W,r[9]=h*M+d*D+u*H+f*R,r[13]=h*P+d*B+u*O+f*$,r[2]=p*E+_*A+m*I+g*Q,r[6]=p*x+_*L+m*z+g*W,r[10]=p*M+_*D+m*H+g*R,r[14]=p*P+_*B+m*O+g*$,r[3]=y*E+w*A+v*I+S*Q,r[7]=y*x+w*L+v*z+S*W,r[11]=y*M+w*D+v*H+S*R,r[15]=y*P+w*B+v*O+S*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],_=t[7],m=t[11],g=t[15],y=l*f-c*u,w=a*f-c*d,v=a*u-l*d,S=o*f-c*h,E=o*u-l*h,x=o*d-a*h;return e*(_*y-m*w+g*v)-i*(p*y-m*S+g*E)+n*(p*w-_*S+g*x)-r*(p*v-_*E+m*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+n*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],_=t[13],m=t[14],g=t[15],y=e*a-i*o,w=e*l-n*o,v=e*c-r*o,S=i*l-n*a,E=i*c-r*a,x=n*c-r*l,M=h*_-d*p,P=h*m-u*p,A=h*g-f*p,L=d*m-u*_,D=d*g-f*_,B=u*g-f*m,I=y*B-w*D+v*L+S*A-E*P+x*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/I;return t[0]=(a*B-l*D+c*L)*z,t[1]=(n*D-i*B-r*L)*z,t[2]=(_*x-m*E+g*S)*z,t[3]=(u*E-d*x-f*S)*z,t[4]=(l*A-o*B-c*P)*z,t[5]=(e*B-n*A+r*P)*z,t[6]=(m*v-p*x-g*w)*z,t[7]=(h*x-u*v+f*w)*z,t[8]=(o*D-a*A+c*M)*z,t[9]=(i*A-e*D-r*M)*z,t[10]=(p*E-_*v+g*y)*z,t[11]=(d*v-h*E-f*y)*z,t[12]=(a*P-o*L-l*M)*z,t[13]=(e*L-i*P+n*M)*z,t[14]=(_*w-p*S-m*y)*z,t[15]=(h*S-d*w+u*y)*z,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,_=o*h,m=o*d,g=a*d,y=l*c,w=l*h,v=l*d,S=i.x,E=i.y,x=i.z;return n[0]=(1-(_+g))*S,n[1]=(f+v)*S,n[2]=(p-w)*S,n[3]=0,n[4]=(f-v)*E,n[5]=(1-(u+g))*E,n[6]=(m+y)*E,n[7]=0,n[8]=(p+w)*x,n[9]=(m-y)*x,n[10]=(1-(u+_))*x,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Cr.set(n[0],n[1],n[2]).length(),a=Cr.set(n[4],n[5],n[6]).length(),l=Cr.set(n[8],n[9],n[10]).length();r<0&&(o=-o),Tn.copy(this);let c=1/o,h=1/a,d=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,e.setFromRotationMatrix(Tn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,n,r,o,a=pn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===pn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Uo)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=pn,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-n),u=-(e+t)/(e-t),f=-(i+n)/(i-n),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===pn)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Uo)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Cr=new k,Tn=new Ce,F_=new k(0,0,0),B_=new k(1,1,1),ys=new k,Ka=new k,$i=new k,Id=new Ce,Ld=new Fn,Es=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Id.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Id,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ld.setFromEuler(this),this.setFromQuaternion(Ld,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Es.DEFAULT_ORDER="XYZ";var Bo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},z_=0,Dd=new k,Rr=new Fn,$n=new Ce,Qa=new k,wo=new k,k_=new k,V_=new Fn,Nd=new k(1,0,0),Ud=new k(0,1,0),Od=new k(0,0,1),Fd={type:"added"},G_={type:"removed"},Pr={type:"childadded",child:null},Jh={type:"childremoved",child:null},tn=class s extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=la(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new k,e=new Es,i=new Fn,n=new k(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Gt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rr.setFromAxisAngle(t,e),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(t,e){return Rr.setFromAxisAngle(t,e),this.quaternion.premultiply(Rr),this}rotateX(t){return this.rotateOnAxis(Nd,t)}rotateY(t){return this.rotateOnAxis(Ud,t)}rotateZ(t){return this.rotateOnAxis(Od,t)}translateOnAxis(t,e){return Dd.copy(t).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nd,t)}translateY(t){return this.translateOnAxis(Ud,t)}translateZ(t){return this.translateOnAxis(Od,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Qa.copy(t):Qa.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(wo,Qa,this.up):$n.lookAt(Qa,wo,this.up),this.quaternion.setFromRotationMatrix($n),n&&($n.extractRotation(n.matrixWorld),Rr.setFromRotationMatrix($n),this.quaternion.premultiply(Rr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fd),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(G_),Jh.child=t,this.dispatchEvent(Jh),Jh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fd),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,t,k_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,V_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new k(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var es=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},H_={type:"move"},Wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(H_)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new es;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},ja={h:0,s:0,l:0};function $h(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ne=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ie.workingColorSpace){if(t=I_(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=$h(o,r,t+1/3),this.g=$h(o,r,t),this.b=$h(o,r,t-1/3)}return ie.colorSpaceToWorking(this,n),this}setStyle(t,e=Qi){function i(r){r!==void 0&&parseFloat(r)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qi){let i=Fp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qi){return ie.workingToColorSpace(vi.copy(this),t),Math.round(jt(vi.r*255,0,255))*65536+Math.round(jt(vi.g*255,0,255))*256+Math.round(jt(vi.b*255,0,255))}getHexString(t=Qi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(vi.copy(this),e);let i=vi.r,n=vi.g,r=vi.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(vi.copy(this),e),t.r=vi.r,t.g=vi.g,t.b=vi.b,t}getStyle(t=Qi){ie.workingToColorSpace(vi.copy(this),t);let e=vi.r,i=vi.g,n=vi.b;return t!==Qi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ss),this.setHSL(Ss.h+t,Ss.s+e,Ss.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ss),t.getHSL(ja);let i=Wh(Ss.h,ja.h,e),n=Wh(Ss.s,ja.s,e),r=Wh(Ss.l,ja.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vi=new ne;ne.NAMES=Fp;var zo=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Es,this.environmentIntensity=1,this.environmentRotation=new Es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},wn=new k,Kn=new k,Kh=new k,Qn=new k,Ir=new k,Lr=new k,Bd=new k,Qh=new k,jh=new k,tu=new k,eu=new Ie,iu=new Ie,nu=new Ie,ws=class s{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),wn.subVectors(t,e),n.cross(wn);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){wn.subVectors(n,e),Kn.subVectors(i,e),Kh.subVectors(t,e);let o=wn.dot(wn),a=wn.dot(Kn),l=wn.dot(Kh),c=Kn.dot(Kn),h=Kn.dot(Kh),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return eu.setScalar(0),iu.setScalar(0),nu.setScalar(0),eu.fromBufferAttribute(t,e),iu.fromBufferAttribute(t,i),nu.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(eu,r.x),o.addScaledVector(iu,r.y),o.addScaledVector(nu,r.z),o}static isFrontFacing(t,e,i,n){return wn.subVectors(i,e),Kn.subVectors(t,e),wn.cross(Kn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),wn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,o,a;Ir.subVectors(n,i),Lr.subVectors(r,i),Qh.subVectors(t,i);let l=Ir.dot(Qh),c=Lr.dot(Qh);if(l<=0&&c<=0)return e.copy(i);jh.subVectors(t,n);let h=Ir.dot(jh),d=Lr.dot(jh);if(h>=0&&d<=h)return e.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(i).addScaledVector(Ir,o);tu.subVectors(t,r);let f=Ir.dot(tu),p=Lr.dot(tu);if(p>=0&&f<=p)return e.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(Lr,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Bd.subVectors(r,n),a=(d-h)/(d-h+(f-p)),e.copy(n).addScaledVector(Bd,a);let g=1/(m+_+u);return o=_*g,a=u*g,e.copy(i).addScaledVector(Ir,o).addScaledVector(Lr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},As=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tl.copy(i.boundingBox)),tl.applyMatrix4(t.matrixWorld),this.union(tl)}let n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Eo),el.subVectors(this.max,Eo),Dr.subVectors(t.a,Eo),Nr.subVectors(t.b,Eo),Ur.subVectors(t.c,Eo),Ms.subVectors(Nr,Dr),bs.subVectors(Ur,Nr),$s.subVectors(Dr,Ur);let e=[0,-Ms.z,Ms.y,0,-bs.z,bs.y,0,-$s.z,$s.y,Ms.z,0,-Ms.x,bs.z,0,-bs.x,$s.z,0,-$s.x,-Ms.y,Ms.x,0,-bs.y,bs.x,0,-$s.y,$s.x,0];return!su(e,Dr,Nr,Ur,el)||(e=[1,0,0,0,1,0,0,0,1],!su(e,Dr,Nr,Ur,el))?!1:(il.crossVectors(Ms,bs),e=[il.x,il.y,il.z],su(e,Dr,Nr,Ur,el))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},jn=[new k,new k,new k,new k,new k,new k,new k,new k],En=new k,tl=new As,Dr=new k,Nr=new k,Ur=new k,Ms=new k,bs=new k,$s=new k,Eo=new k,el=new k,il=new k,Ks=new k;function su(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){Ks.fromArray(s,r);let a=n.x*Math.abs(Ks.x)+n.y*Math.abs(Ks.y)+n.z*Math.abs(Ks.z),l=t.dot(Ks),c=e.dot(Ks),h=i.dot(Ks);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ze=new k,nl=new zt,W_=0,mn=class extends On{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:W_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ip,this.updateRanges=[],this.gpuType=Rn,this.version=0,this._normalizationScale=t!==void 0?Yu(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)nl.fromBufferAttribute(this,e),nl.applyMatrix3(t),this.setXY(e,nl.x,nl.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):L_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):D_(t,this.array)}};var ko=class extends mn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Vo=class extends mn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var oi=class extends mn{constructor(t,e,i){super(new Float32Array(t),e,i)}},X_=new As,Ao=new k,ru=new k,tr=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):X_.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ao.subVectors(t,this.center);let e=Ao.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ao,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ru.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ao.copy(t.center).add(ru)),this.expandByPoint(Ao.copy(t.center).sub(ru))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},q_=0,dn=new Ce,ou=new tn,Or=new k,Ki=new As,Co=new As,ri=new k,en=class s extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=la(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(R_(t)?Vo:ko)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,i){return dn.makeTranslation(t,e,i),this.applyMatrix4(dn),this}scale(t,e,i){return dn.makeScale(t,e,i),this.applyMatrix4(dn),this}lookAt(t){return ou.lookAt(t),ou.updateMatrix(),this.applyMatrix4(ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oi(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];Ki.setFromBufferAttribute(r),this.morphTargetsRelative?(ri.addVectors(this.boundingBox.min,Ki.min),this.boundingBox.expandByPoint(ri),ri.addVectors(this.boundingBox.max,Ki.max),this.boundingBox.expandByPoint(ri)):(this.boundingBox.expandByPoint(Ki.min),this.boundingBox.expandByPoint(Ki.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let i=this.boundingSphere.center;if(Ki.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Co.setFromBufferAttribute(a),this.morphTargetsRelative?(ri.addVectors(Ki.min,Co.min),Ki.expandByPoint(ri),ri.addVectors(Ki.max,Co.max),Ki.expandByPoint(ri)):(Ki.expandByPoint(Co.min),Ki.expandByPoint(Co.max))}Ki.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)ri.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(ri));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ri.fromBufferAttribute(a,c),l&&(Or.fromBufferAttribute(t,c),ri.add(Or)),n=Math.max(n,i.distanceToSquared(ri))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new mn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)a[P]=new k,l[P]=new k;let h=new k,d=new k,u=new k,f=new zt,p=new zt,_=new zt,m=new k,g=new k;function y(P,A,L){c[P]=c[A]=c[L]=1,h.fromBufferAttribute(i,P),d.fromBufferAttribute(i,A),u.fromBufferAttribute(i,L),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,A),_.fromBufferAttribute(r,L),d.sub(h),u.sub(h),p.sub(f),_.sub(f);let D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(m.copy(d).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(D),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(D),a[P].add(m),a[A].add(m),a[L].add(m),l[P].add(g),l[A].add(g),l[L].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,A=w.length;P<A;++P){let L=w[P],D=L.start,B=L.count;for(let I=D,z=D+B;I<z;I+=3)y(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let v=new k,S=new k,E=new k,x=new k;function M(P){E.fromBufferAttribute(n,P),x.copy(E);let A=a[P];v.copy(A),v.sub(E.multiplyScalar(E.dot(A))).normalize(),S.crossVectors(x,A);let D=S.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,D)}for(let P=0,A=i.count;P<A;++P)c[P]&&M(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,d=new k;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);n.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ri.fromBufferAttribute(t,e),ri.normalize(),t.setXYZ(e,ri.x,ri.y,ri.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new mn(u,h,d)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var au=new k,Y_=new k,Z_=new Gt,An=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=au.subVectors(i,e).cross(Y_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(au),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Z_.getNormalMatrix(t),n=this.coplanarPoint(au).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},J_=0,Cs=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=la(),this.name="",this.type="Material",this.blending=Ls,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bu,this.blendDst=Tu,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yl,this.stencilZFail=yl,this.stencilZPass=yl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ne().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new An().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new zt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ts=new k,lu=new k,sl=new k,rl=new k,Go=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ts)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ts.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ts.copy(this.origin).addScaledVector(this.direction,e),ts.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){lu.copy(t).add(e).multiplyScalar(.5),sl.copy(e).sub(t).normalize(),rl.copy(this.origin).sub(lu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(sl),a=rl.dot(this.direction),l=-rl.dot(sl),c=rl.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(lu).addScaledVector(sl,u),f}intersectSphere(t,e){if(t.radius<0)return null;ts.subVectors(t.center,this.origin);let i=ts.dot(this.direction),n=ts.dot(ts)-i*i,r=t.radius*t.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ts)!==null}intersectTriangle(t,e,i,n,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,_=e.y-o.y,m=e.z-o.z,g=i.x-o.x,y=i.y-o.y,w=i.z-o.z,v=Math.abs(l),S=Math.abs(c),E=Math.abs(h),x,M,P,A,L,D,B,I,z,H,O,Q;if(v>=S&&v>=E?(P=l,D=d,z=p,Q=g,l>=0?(x=c,M=h,A=u,L=f,B=_,I=m,H=y,O=w):(x=h,M=c,A=f,L=u,B=m,I=_,H=w,O=y)):S>=E?(P=c,D=u,z=_,Q=y,c>=0?(x=h,M=l,A=f,L=d,B=m,I=p,H=w,O=g):(x=l,M=h,A=d,L=f,B=p,I=m,H=g,O=w)):(P=h,D=f,z=m,Q=w,h>=0?(x=l,M=c,A=d,L=u,B=p,I=_,H=g,O=y):(x=c,M=l,A=u,L=d,B=_,I=p,H=y,O=g)),P===0)return null;let W=x/P,R=M/P,$=1/P,xt=A-W*D,Et=L-R*D,Y=B-W*z,ot=I-R*z,vt=H-W*Q,bt=O-R*Q,mt=vt*ot-bt*Y,Nt=xt*bt-Et*vt,ge=Y*Et-ot*xt;if(n){if(mt<0||Nt<0||ge<0)return null}else if((mt<0||Nt<0||ge<0)&&(mt>0||Nt>0||ge>0))return null;let At=mt+Nt+ge;if(At===0)return null;let Ht=$*(mt*D+Nt*z+ge*Q);return(At>0?Ht<0:Ht>0)?null:this.at(Ht/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ul=class extends Cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Es,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},zd=new Ce,Qs=new Go,ol=new tr,kd=new k,al=new k,ll=new k,cl=new k,cu=new k,hl=new k,Vd=new k,ul=new k,Ii=class extends tn{constructor(t=new en,e=new Ul){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(r&&a){hl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(cu.fromBufferAttribute(d,t),o?hl.addScaledVector(cu,h):hl.addScaledVector(cu.sub(e),h))}e.add(hl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ol.copy(i.boundingSphere),ol.applyMatrix4(r),Qs.copy(t.ray).recast(t.near),!(ol.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(ol,kd)===null||Qs.origin.distanceToSquared(kd)>(t.far-t.near)**2))&&(zd.copy(r).invert(),Qs.copy(t.ray).applyMatrix4(zd),!(i.boundingBox!==null&&Qs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Qs)))}_computeIntersections(t,e,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,S=w;v<S;v+=3){let E=a.getX(v),x=a.getX(v+1),M=a.getX(v+2);n=fl(this,g,t,i,c,h,d,E,x,M),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let y=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);n=fl(this,o,t,i,c,h,d,y,w,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,S=w;v<S;v+=3){let E=v,x=v+1,M=v+2;n=fl(this,g,t,i,c,h,d,E,x,M),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let y=m,w=m+1,v=m+2;n=fl(this,o,t,i,c,h,d,y,w,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function $_(s,t,e,i,n,r,o,a){let l;if(t.side===ui?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===Bn,a),l===null)return null;ul.copy(a),ul.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ul);return c<e.near||c>e.far?null:{distance:c,point:ul.clone(),object:s}}function fl(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,al),s.getVertexPosition(l,ll),s.getVertexPosition(c,cl);let h=$_(s,t,e,i,al,ll,cl,Vd);if(h){let d=new k;ws.getBarycoord(Vd,al,ll,cl,d),n&&(h.uv=ws.getInterpolatedAttribute(n,a,l,c,d,new zt)),r&&(h.uv1=ws.getInterpolatedAttribute(r,a,l,c,d,new zt)),o&&(h.normal=ws.getInterpolatedAttribute(o,a,l,c,d,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new k,materialIndex:0};ws.getNormal(al,ll,cl,u.normal),h.face=u,h.barycoord=d}return h}var Ol=class extends ki{constructor(t=null,e=1,i=1,n,r,o,a,l,c=ai,h=ai,d,u){super(null,o,a,l,c,h,n,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var js=new tr,K_=new zt(.5,.5),dl=new k,er=class{constructor(t=new An,e=new An,i=new An,n=new An,r=new An,o=new An){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=pn,i=!1){let n=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],_=r[9],m=r[10],g=r[11],y=r[12],w=r[13],v=r[14],S=r[15];if(n[0].setComponents(c-o,f-h,g-p,S-y).normalize(),n[1].setComponents(c+o,f+h,g+p,S+y).normalize(),n[2].setComponents(c+a,f+d,g+_,S+w).normalize(),n[3].setComponents(c-a,f-d,g-_,S-w).normalize(),i)n[4].setComponents(l,u,m,v).normalize(),n[5].setComponents(c-l,f-u,g-m,S-v).normalize();else if(n[4].setComponents(c-l,f-u,g-m,S-v).normalize(),e===pn)n[5].setComponents(c+l,f+u,g+m,S+v).normalize();else if(e===Uo)n[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),js.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),js.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(t){js.center.set(0,0,0);let e=K_.distanceTo(t.center);return js.radius=.7071067811865476+e,js.applyMatrix4(t.matrixWorld),this.intersectsSphere(js)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(dl.x=n.normal.x>0?t.max.x:t.min.x,dl.y=n.normal.y>0?t.max.y:t.min.y,dl.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(dl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Gd=new Ce,Fl=class s{constructor(){this.coordinateSystem=pn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){let r=e[n];Gd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new er),i[n].setFromProjectionMatrix(Gd,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new er),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Xr=class extends Cs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hd=new Ce,_u=new Go,pl=new tr,ml=new k,Ho=class extends tn{constructor(t=new en,e=new Xr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(n),pl.radius+=r,t.ray.intersectsSphere(pl)===!1)return;Hd.copy(n).invert(),_u.copy(t.ray).applyMatrix4(Hd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,_=f;p<_;p++){let m=c.getX(p);ml.fromBufferAttribute(d,m),Wd(ml,m,l,n,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,_=f;p<_;p++)ml.fromBufferAttribute(d,p),Wd(ml,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wd(s,t,e,i,n,r,o){let a=_u.distanceSqToPoint(s);if(a<e){let l=new k;_u.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Wo=class extends ki{constructor(t=[],e=sr,i,n,r,o,a,l,c,h){super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var ss=class extends ki{constructor(t,e,i=Cn,n,r,o,a=ai,l=ai,c,h=ns,d=1){if(h!==ns&&h!==os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Xo=class extends ss{constructor(t,e=Cn,i=sr,n,r,o=ai,a=ai,l,c=ns){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},qo=class extends ki{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},qr=class s extends en{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,n,o,2),p("x","z","y",1,-1,t,i,-e,n,o,3),p("x","y","z",1,-1,t,e,i,n,r,4),p("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new oi(c,3)),this.setAttribute("normal",new oi(h,3)),this.setAttribute("uv",new oi(d,2));function p(_,m,g,y,w,v,S,E,x,M,P){let A=v/x,L=S/M,D=v/2,B=S/2,I=E/2,z=x+1,H=M+1,O=0,Q=0,W=new k;for(let R=0;R<H;R++){let $=R*L-B;for(let xt=0;xt<z;xt++){let Et=xt*A-D;W[_]=Et*y,W[m]=$*w,W[g]=I,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[g]=E>0?1:-1,h.push(W.x,W.y,W.z),d.push(xt/x),d.push(1-R/M),O+=1}}for(let R=0;R<M;R++)for(let $=0;$<x;$++){let xt=u+$+z*R,Et=u+$+z*(R+1),Y=u+($+1)+z*(R+1),ot=u+($+1)+z*R;l.push(xt,Et,ot),l.push(Et,Y,ot),Q+=6}a.addGroup(f,Q,P),f+=Q,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Bt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let h=i[n],u=i[n+1]-h,f=(o-h)/u;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new zt:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new k,n=[],r=[],o=[],a=new k,l=new Ce;for(let f=0;f<=t;f++){let p=f/t;n[f]=this.getTangentAt(p,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(jt(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(jt(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),o[p].crossVectors(n[p],r[p])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Yo=class extends Vi{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new zt){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Bl=class extends Yo{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zu(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,n(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+i*a}}}var Xd=new k,qd=new k,hu=new Zu,uu=new Zu,fu=new Zu,zl=class extends Vi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new k){let i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(qd.subVectors(n[0],n[1]).add(n[0]),c=qd);let d=n[a%r],u=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(Xd.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Xd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),hu.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,_,m),uu.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,_,m),fu.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(hu.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),uu.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),fu.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(hu.calc(l),uu.calc(l),fu.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new k().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Yd(s,t,e,i,n){let r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function Q_(s,t){let e=1-s;return e*e*t}function j_(s,t){return 2*(1-s)*s*t}function t0(s,t){return s*s*t}function Po(s,t,e,i){return Q_(s,t)+j_(s,e)+t0(s,i)}function e0(s,t){let e=1-s;return e*e*e*t}function i0(s,t){let e=1-s;return 3*e*e*s*t}function n0(s,t){return 3*(1-s)*s*s*t}function s0(s,t){return s*s*s*t}function Io(s,t,e,i,n){return e0(s,t)+i0(s,e)+n0(s,i)+s0(s,n)}var kl=class extends Vi{constructor(t=new zt,e=new zt,i=new zt,n=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new zt){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Io(t,n.x,r.x,o.x,a.x),Io(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vl=class extends Vi{constructor(t=new k,e=new k,i=new k,n=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new k){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Io(t,n.x,r.x,o.x,a.x),Io(t,n.y,r.y,o.y,a.y),Io(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Gl=class extends Vi{constructor(t=new zt,e=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new zt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hl=class extends Vi{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wl=class extends Vi{constructor(t=new zt,e=new zt,i=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new zt){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(Po(t,n.x,r.x,o.x),Po(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zo=class extends Vi{constructor(t=new k,e=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new k){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(Po(t,n.x,r.x,o.x),Po(t,n.y,r.y,o.y),Po(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xl=class extends Vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new zt){let i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],d=n[o>n.length-3?n.length-1:o+2];return i.set(Yd(a,l.x,c.x,h.x,d.x),Yd(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new zt().fromArray(n))}return this}},r0=Object.freeze({__proto__:null,ArcCurve:Bl,CatmullRomCurve3:zl,CubicBezierCurve:kl,CubicBezierCurve3:Vl,EllipseCurve:Yo,LineCurve:Gl,LineCurve3:Hl,QuadraticBezierCurve:Wl,QuadraticBezierCurve3:Zo,SplineCurve:Xl});var Jo=class s extends en{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let y=g*u-o;for(let w=0;w<c;w++){let v=w*d-r;p.push(v,-y,0),_.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let w=y+c*g,v=y+c*(g+1),S=y+1+c*(g+1),E=y+1+c*g;f.push(w,v,E),f.push(v,S,E)}this.setIndex(f),this.setAttribute("position",new oi(p,3)),this.setAttribute("normal",new oi(_,3)),this.setAttribute("uv",new oi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var $o=class s extends en{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],d=[],u=new k,f=new k,p=new k;for(let _=0;_<=i;_++){let m=o+_/i*a;for(let g=0;g<=n;g++){let y=g/n*r;f.x=(t+e*Math.cos(m))*Math.cos(y),f.y=(t+e*Math.cos(m))*Math.sin(y),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/n),d.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=n;m++){let g=(n+1)*_+m-1,y=(n+1)*(_-1)+m-1,w=(n+1)*(_-1)+m,v=(n+1)*_+m;l.push(g,y,v),l.push(y,w,v)}this.setIndex(l),this.setAttribute("position",new oi(c,3)),this.setAttribute("normal",new oi(h,3)),this.setAttribute("uv",new oi(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Yr=class s extends en{constructor(t=new Zo(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new k,l=new k,c=new zt,h=new k,d=[],u=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new oi(d,3)),this.setAttribute("normal",new oi(u,3)),this.setAttribute("uv",new oi(f,2));function _(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),y(),g()}function m(w){h=t.getPointAt(w/e,h);let v=o.normals[w],S=o.binormals[w];for(let E=0;E<=n;E++){let x=E/n*Math.PI*2,M=Math.sin(x),P=-Math.cos(x);l.x=P*v.x+M*S.x,l.y=P*v.y+M*S.y,l.z=P*v.z+M*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let w=1;w<=e;w++)for(let v=1;v<=n;v++){let S=(n+1)*(w-1)+(v-1),E=(n+1)*w+(v-1),x=(n+1)*w+v,M=(n+1)*(w-1)+v;p.push(S,E,M),p.push(E,x,M)}}function y(){for(let w=0;w<=e;w++)for(let v=0;v<=n;v++)c.x=w/e,c.y=v/n,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new r0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function or(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];if(Zd(n))n.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Zd(n[0])){let r=[];for(let o=0,a=n.length;o<a;o++)r[o]=n[o].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function yi(s){let t={};for(let e=0;e<s.length;e++){let i=or(s[e]);for(let n in i)t[n]=i[n]}return t}function Zd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function o0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ju(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var Bp={clone:or,merge:yi},a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends Cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=l0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=or(t.uniforms),this.uniformsGroups=o0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new ne().setHex(n.value);break;case"v2":this.uniforms[i].value=new zt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new k().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Ie().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Gt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Ce().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ql=class extends gn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Yl=class extends Cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Zl=class extends Cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Fr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function gl(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Rs=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let o=0;o!==n;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Jl=class extends Rs{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pu,endingEnd:pu}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,o=t+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case mu:r=t,a=2*e-i;break;case gu:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case mu:o=t,l=2*i-e;break;case gu:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),_=p*p,m=_*p,g=-u*m+2*u*_-u*p,y=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*p+1,w=(-1-f)*m+(1.5+f)*_+.5*p,v=f*m-f*_;for(let S=0;S!==a;++S)r[S]=g*o[h+S]+y*o[c+S]+w*o[l+S]+v*o[d+S];return r}},$l=class extends Rs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Kl=class extends Rs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Ql=class extends Rs{interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-e)/(n-e),_=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*p;return r}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=f*u+p*2,y=d[g],w=d[g+1],v=t*u+p*2,S=h[v],E=h[v+1],x=h0(i,e,y,S,n);r[p]=zp(x,_,w,E,m)}return r}};function zp(s,t,e,i,n){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*i+s*s*s*n}function c0(s,t,e,i,n){let r=1-s;return 3*r*r*(e-t)+6*r*s*(i-e)+3*s*s*(n-i)}function h0(s,t,e,i,n){let r=(s-t)/(n-t);for(let o=0;o<8;o++){let a=zp(r,t,e,i,n)-s;if(Math.abs(a)<1e-10)break;let l=c0(r,t,e,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var nn=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fr(e,this.TimeBufferType),this.values=Fr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Fr(t.times,Array),values:Fr(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),gl(t.settings)&&(i.settings={inTangents:Fr(t.settings.inTangents,Array),outTangents:Fr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ql(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Lo:e=this.InterpolantFactoryMethodDiscrete;break;case Pl:e=this.InterpolantFactoryMethodLinear;break;case vl:e=this.InterpolantFactoryMethodSmooth;break;case du:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Bt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lo;case this.InterpolantFactoryMethodLinear:return Pl;case this.InterpolantFactoryMethodSmooth:return vl;case this.InterpolantFactoryMethodBezier:return du}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;gl(this.settings)&&(Jd(this.settings.inTangents,t),Jd(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;gl(this.settings)&&($d(this.settings.inTangents,t),$d(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&P_(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===vl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){let _=e[d+p];if(_!==e[u+p]||_!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,gl(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Jd(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]+=t}function $d(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]*=t}nn.prototype.ValueTypeName="";nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=Pl;var Ps=class extends nn{constructor(t,e,i){super(t,e,i)}};Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=Lo;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var jl=class extends nn{constructor(t,e,i,n){super(t,e,i,n)}};jl.prototype.ValueTypeName="color";var tc=class extends nn{constructor(t,e,i,n){super(t,e,i,n)}};tc.prototype.ValueTypeName="number";var ec=class extends Rs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)Fn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ko=class extends nn{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new ec(this.times,this.values,this.getValueSize(),t)}};Ko.prototype.ValueTypeName="quaternion";Ko.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends nn{constructor(t,e,i){super(t,e,i)}};Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=Lo;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var ic=class extends nn{constructor(t,e,i,n){super(t,e,i,n)}};ic.prototype.ValueTypeName="vector";var nc=class{constructor(t,e,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kp=new nc,sc=class{constructor(t){this.manager=t!==void 0?t:kp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};sc.DEFAULT_MATERIAL_NAME="__DEFAULT";var _l=new k,xl=new Fn,Nn=new k,Qo=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_l,xl,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_l,xl,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(_l,xl,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_l,xl,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ts=new k,Kd=new zt,Qd=new zt,Ri=class extends Qo{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Il*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Il*2*Math.atan(Math.tan(Hh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ts.x,Ts.y).multiplyScalar(-t/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ts.x,Ts.y).multiplyScalar(-t/Ts.z)}getViewSize(t,e){return this.getViewBounds(t,Kd,Qd),e.subVectors(Qd,Kd)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Hh*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var rc=class extends Qo{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Br=-90,zr=1,Zr=class extends tn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ri(Br,zr,t,e);n.layers=this.layers,this.add(n);let r=new Ri(Br,zr,t,e);r.layers=this.layers,this.add(r);let o=new Ri(Br,zr,t,e);o.layers=this.layers,this.add(o);let a=new Ri(Br,zr,t,e);a.layers=this.layers,this.add(a);let l=new Ri(Br,zr,t,e);l.layers=this.layers,this.add(l);let c=new Ri(Br,zr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===pn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Uo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=_,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},oc=class extends Ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var $u="\\[\\]\\.:\\/",u0=new RegExp("["+$u+"]","g"),Ku="[^"+$u+"]",f0="[^"+$u.replace("\\.","")+"]",d0=/((?:WC+[\/:])*)/.source.replace("WC",Ku),p0=/(WCOD+)?/.source.replace("WCOD",f0),m0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ku),g0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ku),_0=new RegExp("^"+d0+p0+m0+g0+"$"),x0=["material","materials","bones","map"],xu=class{constructor(t,e,i){let n=i||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},we=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(u0,"")}static parseTrackName(t){let e=_0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);x0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=xu;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bT=new Float32Array(1);var jo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Bt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var vu=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};function Qu(s,t,e,i){let n=v0(i);switch(e){case Bu:return s*t;case ku:return s*t/n.components*n.byteLength;case dc:return s*t/n.components*n.byteLength;case Ds:return s*t*2/n.components*n.byteLength;case pc:return s*t*2/n.components*n.byteLength;case zu:return s*t*3/n.components*n.byteLength;case In:return s*t*4/n.components*n.byteLength;case mc:return s*t*4/n.components*n.byteLength;case ia:case na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case sa:case ra:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _c:case vc:return Math.max(s,16)*Math.max(t,8)/4;case gc:case xc:return Math.max(s,8)*Math.max(t,8)/2;case yc:case Sc:case bc:case Tc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Mc:case oa:case wc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ec:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Nc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Fc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Bc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case zc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case kc:case Vc:case Gc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Hc:case Wc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case aa:case Xc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function v0(s){switch(s){case sn:case Nu:return{byteLength:1,components:1};case Qr:case Uu:case Pn:return{byteLength:2,components:1};case uc:case fc:return{byteLength:2,components:4};case Cn:case hc:case Rn:return{byteLength:4,components:1};case Ou:case Fu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function lm(){let s=null,t=!1,e=null,i=null;function n(r,o){i=s.requestAnimationFrame(n),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function S0(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var M0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,R0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,I0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,U0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,O0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,X0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,q0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ax=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,dx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bx=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ix=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ux=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$x=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Kx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ev=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ov=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tv=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ev=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$v=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:M0,alphahash_pars_fragment:b0,alphamap_fragment:T0,alphamap_pars_fragment:w0,alphatest_fragment:E0,alphatest_pars_fragment:A0,aomap_fragment:C0,aomap_pars_fragment:R0,batching_pars_vertex:P0,batching_vertex:I0,begin_vertex:L0,beginnormal_vertex:D0,bsdfs:N0,iridescence_fragment:U0,bumpmap_pars_fragment:O0,clipping_planes_fragment:F0,clipping_planes_pars_fragment:B0,clipping_planes_pars_vertex:z0,clipping_planes_vertex:k0,color_fragment:V0,color_pars_fragment:G0,color_pars_vertex:H0,color_vertex:W0,common:X0,defaultnormal_vertex:q0,displacementmap_pars_vertex:Y0,displacementmap_vertex:Z0,emissivemap_fragment:J0,emissivemap_pars_fragment:$0,colorspace_fragment:K0,colorspace_pars_fragment:Q0,envmap_fragment:j0,envmap_common_pars_fragment:tx,envmap_pars_fragment:ex,envmap_pars_vertex:ix,envmap_physical_pars_fragment:dx,envmap_vertex:nx,fog_vertex:sx,fog_pars_vertex:rx,fog_fragment:ox,fog_pars_fragment:ax,gradientmap_pars_fragment:lx,lightmap_pars_fragment:cx,lights_lambert_fragment:hx,lights_lambert_pars_fragment:ux,lights_pars_begin:fx,lights_toon_fragment:px,lights_toon_pars_fragment:mx,lights_phong_fragment:gx,lights_phong_pars_fragment:_x,lights_physical_fragment:xx,lights_physical_pars_fragment:vx,lights_fragment_begin:yx,lights_fragment_maps:Sx,lights_fragment_end:Mx,lightprobes_pars_fragment:bx,logdepthbuf_fragment:Tx,logdepthbuf_pars_fragment:wx,logdepthbuf_pars_vertex:Ex,logdepthbuf_vertex:Ax,map_fragment:Cx,map_pars_fragment:Rx,map_particle_fragment:Px,map_particle_pars_fragment:Ix,metalnessmap_fragment:Lx,metalnessmap_pars_fragment:Dx,morphinstance_vertex:Nx,morphcolor_vertex:Ux,morphnormal_vertex:Ox,morphtarget_pars_vertex:Fx,morphtarget_vertex:Bx,normal_fragment_begin:zx,normal_fragment_maps:kx,normal_pars_fragment:Vx,normal_pars_vertex:Gx,normal_vertex:Hx,normalmap_pars_fragment:Wx,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:qx,clearcoat_pars_fragment:Yx,iridescence_pars_fragment:Zx,opaque_fragment:Jx,packing:$x,premultiplied_alpha_fragment:Kx,project_vertex:Qx,dithering_fragment:jx,dithering_pars_fragment:tv,roughnessmap_fragment:ev,roughnessmap_pars_fragment:iv,shadowmap_pars_fragment:nv,shadowmap_pars_vertex:sv,shadowmap_vertex:rv,shadowmask_pars_fragment:ov,skinbase_vertex:av,skinning_pars_vertex:lv,skinning_vertex:cv,skinnormal_vertex:hv,specularmap_fragment:uv,specularmap_pars_fragment:fv,tonemapping_fragment:dv,tonemapping_pars_fragment:pv,transmission_fragment:mv,transmission_pars_fragment:gv,uv_pars_fragment:_v,uv_pars_vertex:xv,uv_vertex:vv,worldpos_vertex:yv,background_vert:Sv,background_frag:Mv,backgroundCube_vert:bv,backgroundCube_frag:Tv,cube_vert:wv,cube_frag:Ev,depth_vert:Av,depth_frag:Cv,distance_vert:Rv,distance_frag:Pv,equirect_vert:Iv,equirect_frag:Lv,linedashed_vert:Dv,linedashed_frag:Nv,meshbasic_vert:Uv,meshbasic_frag:Ov,meshlambert_vert:Fv,meshlambert_frag:Bv,meshmatcap_vert:zv,meshmatcap_frag:kv,meshnormal_vert:Vv,meshnormal_frag:Gv,meshphong_vert:Hv,meshphong_frag:Wv,meshphysical_vert:Xv,meshphysical_frag:qv,meshtoon_vert:Yv,meshtoon_frag:Zv,points_vert:Jv,points_frag:$v,shadow_vert:Kv,shadow_frag:Qv,sprite_vert:jv,sprite_frag:ty},Mt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Gn={basic:{uniforms:yi([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:yi([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ne(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:yi([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:yi([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:yi([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new ne(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:yi([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:yi([Mt.points,Mt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:yi([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:yi([Mt.common,Mt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:yi([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:yi([Mt.sprite,Mt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:yi([Mt.common,Mt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:yi([Mt.lights,Mt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Gn.physical={uniforms:yi([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var qc={r:0,b:0,g:0},ey=new Ce,cm=new Gt;cm.set(-1,0,0,0,1,0,0,0,1);function iy(s,t,e,i,n,r){let o=new ne(0),a=n===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let v=y.backgroundBlurriness>0;w=t.get(w,v)}return w}function p(y){let w=!1,v=f(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),w=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(y,w){let v=f(w);v&&v.isCubeTexture?(c===void 0&&(c=new Ii(new qr(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:or(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ey.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cm),c.material.toneMapped=ie.getTransfer(v.colorSpace)!==pe,(h!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ii(new Jo(2,2),new gn({name:"BackgroundMaterial",uniforms:or(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ie.getTransfer(v.colorSpace)!==pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(qc,Ju(s)),e.buffers.color.setClear(qc.r,qc.g,qc.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:_,dispose:g}}function ny(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null),r=n,o=!1;function a(L,D,B,I,z){let H=!1,O=d(L,I,B,D);r!==O&&(r=O,c(r.object)),H=f(L,I,B,z),H&&p(L,I,B,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(L,D,B,I),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function d(L,D,B,I){let z=I.wireframe===!0,H=i[D.id];H===void 0&&(H={},i[D.id]=H);let O=L.isInstancedMesh===!0?L.id:0,Q=H[O];Q===void 0&&(Q={},H[O]=Q);let W=Q[B.id];W===void 0&&(W={},Q[B.id]=W);let R=W[z];return R===void 0&&(R=u(l()),W[z]=R),R}function u(L){let D=[],B=[],I=[];for(let z=0;z<e;z++)D[z]=0,B[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,D,B,I){let z=r.attributes,H=D.attributes,O=0,Q=B.getAttributes();for(let W in Q)if(Q[W].location>=0){let $=z[W],xt=H[W];if(xt===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(xt=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(xt=L.instanceColor)),$===void 0||$.attribute!==xt||xt&&$.data!==xt.data)return!0;O++}return r.attributesNum!==O||r.index!==I}function p(L,D,B,I){let z={},H=D.attributes,O=0,Q=B.getAttributes();for(let W in Q)if(Q[W].location>=0){let $=H[W];$===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&($=L.instanceColor));let xt={};xt.attribute=$,$&&$.data&&(xt.data=$.data),z[W]=xt,O++}r.attributes=z,r.attributesNum=O,r.index=I}function _(){let L=r.newAttributes;for(let D=0,B=L.length;D<B;D++)L[D]=0}function m(L){g(L,0)}function g(L,D){let B=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;B[L]=1,I[L]===0&&(s.enableVertexAttribArray(L),I[L]=1),z[L]!==D&&(s.vertexAttribDivisor(L,D),z[L]=D)}function y(){let L=r.newAttributes,D=r.enabledAttributes;for(let B=0,I=D.length;B<I;B++)D[B]!==L[B]&&(s.disableVertexAttribArray(B),D[B]=0)}function w(L,D,B,I,z,H,O){O===!0?s.vertexAttribIPointer(L,D,B,z,H):s.vertexAttribPointer(L,D,B,I,z,H)}function v(L,D,B,I){_();let z=I.attributes,H=B.getAttributes(),O=D.defaultAttributeValues;for(let Q in H){let W=H[Q];if(W.location>=0){let R=z[Q];if(R===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(R=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(R=L.instanceColor)),R!==void 0){let $=R.normalized,xt=R.itemSize,Et=t.get(R);if(Et===void 0)continue;let Y=Et.buffer,ot=Et.type,vt=Et.bytesPerElement,bt=ot===s.INT||ot===s.UNSIGNED_INT||R.gpuType===hc;if(R.isInterleavedBufferAttribute){let mt=R.data,Nt=mt.isInterleavedBuffer===!0?mt.stride:mt.itemSize,ge=R.offset;if(mt.isInstancedInterleavedBuffer||mt.isInstancedBufferAttribute){for(let At=0;At<W.locationSize;At++)g(W.location+At,mt.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let At=0;At<W.locationSize;At++)m(W.location+At);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let At=0;At<W.locationSize;At++)w(W.location+At,xt/W.locationSize,ot,$,Nt*vt,(ge+xt/W.locationSize*At)*vt,bt)}else{if(R.isInstancedBufferAttribute){for(let mt=0;mt<W.locationSize;mt++)g(W.location+mt,R.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let mt=0;mt<W.locationSize;mt++)m(W.location+mt);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let mt=0;mt<W.locationSize;mt++)w(W.location+mt,xt/W.locationSize,ot,$,xt*vt,xt/W.locationSize*mt*vt,bt)}}else if(O!==void 0){let $=O[Q];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(W.location,$);break;case 3:s.vertexAttrib3fv(W.location,$);break;case 4:s.vertexAttrib4fv(W.location,$);break;default:s.vertexAttrib1fv(W.location,$)}}}}y()}function S(){P();for(let L in i){let D=i[L];for(let B in D){let I=D[B];for(let z in I){let H=I[z];for(let O in H)h(H[O].object),delete H[O];delete I[z]}}delete i[L]}}function E(L){if(i[L.id]===void 0)return;let D=i[L.id];for(let B in D){let I=D[B];for(let z in I){let H=I[z];for(let O in H)h(H[O].object),delete H[O];delete I[z]}}delete i[L.id]}function x(L){for(let D in i){let B=i[D];for(let I in B){let z=B[I];if(z[L.id]===void 0)continue;let H=z[L.id];for(let O in H)h(H[O].object),delete H[O];delete z[L.id]}}}function M(L){for(let D in i){let B=i[D],I=L.isInstancedMesh===!0?L.id:0,z=B[I];if(z!==void 0){for(let H in z){let O=z[H];for(let Q in O)h(O[Q].object),delete O[Q];delete z[H]}delete B[I],Object.keys(B).length===0&&delete i[D]}}}function P(){A(),o=!0,r!==n&&(r=n,c(r.object))}function A(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:P,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function sy(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ry(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(x){return!(x!==In&&i.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let M=x===Pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==sn&&x!==Rn&&!M&&i.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Bt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Bt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:v,maxSamples:S,samples:E}}function oy(s){let t=this,e=null,i=0,n=!1,r=!1,o=new An,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!n||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,w=y*4,v=g.clippingState||null;l.value=v,v=h(p,u,w,f);for(let S=0;S!==w;++S)v[S]=e[S];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,p){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=f+_*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,v=f;w!==_;++w,v+=4)o.copy(d[w]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var ua=class extends ji{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Wo(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new qr(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ui,blending:ir});r.uniforms.tEquirect.value=e;let o=new Ii(n,r),a=e.minFilter;return e.minFilter===rs&&(e.minFilter=Pi),new Zr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}},Vp=256,ay=3,ly=20,hm=256,um=16,cy=3,hy=new k,uy=new ne,Zc=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Zr(1,10,null),this._boxMesh=new Ii(new qr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){let{size:o=256,position:a=hy}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(uy));let m=new Zr(i,n,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Vp,Op(t))}_fromTexture(t,e){t.mapping===sr||t.mapping===Kr?this._setSize(t.image.length===0?Vp:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Gp(t,!1,!1),i=Math.log2(t)-ay;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Gp(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===sr||t.mapping===Kr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wp()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Hp()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=fy(),this._integrationMaterial=dy());let e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/um);for(let o=0;o<=i;o++){let a=s.lodToRoughness(o,i);if(o>i-cy)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(hm*Math.pow(a,4)))+.5:0;n.roughness.value=a,n.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=py());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(r,0,i)}};function Gp(s,t,e){return new ua(s,{minFilter:rs,generateMipmaps:t,type:Pn,colorSpace:Do,depthBuffer:e})}function fa(s,t,e){return new gn({name:s,uniforms:t,vertexShader:Yt.cube_vert,fragmentShader:e,side:ui,blending:ir,depthTest:!1,depthWrite:!1})}function fy(){return fa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${hm}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function dy(){return fa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:um}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function py(){return fa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ly}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Hp(){return fa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Wp(){return fa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function my(s){let t=new WeakMap,e=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ac||f===lc)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new ua(p.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===ac||f===lc,_=f===sr||f===Kr;if(p||_){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new Zc(s)),m=p?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new Zc(s)),m=p?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===ac?u.mapping=sr:f===lc&&(u.mapping=Kr),u}function l(u){let f=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function gy(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Ro("WebGLRenderer: "+i+" extension not supported."),n}}}function _y(s,t,e,i){let n={},r=new WeakMap,o=new FinalizationRegistry(p=>delete n[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete n[p.id],o.unregister(p);let _=r.get(p);_&&(t.remove(_),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,_){return n[_.id]!==void 0||(_.addEventListener("dispose",a),n[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function h(p){let _=p.attributes;for(let m in _)t.update(_[m],s.ARRAY_BUFFER)}function d(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=_!==null?_.array.length:m.array.length/3-1,w=m.count>=65535?Vo:ko,v=new w(Math.ceil(y/3)*6,1),S=v.array;if(_!==null){let x=_.array;g=_.version;for(let M=0,P=0;M<y;M+=3){let A=x[M+0],L=x[M+1],D=x[M+2];S[P++]=A,S[P++]=L,S[P++]=L,S[P++]=D,S[P++]=D,S[P++]=A}}else{g=m.version;for(let x=0,M=0;x<y;x+=3){let P=x+0,A=x+1,L=x+2;S[M++]=P,S[M++]=A,S[M++]=A,S[M++]=L,S[M++]=L,S[M++]=P}}v.version=g;let E=r.get(p);E&&t.remove(E),r.set(p,v)}function u(p){let _=r.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in n){let _=n[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function xy(s,t,e){let i;function n(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(i,u,r,d*o),e.update(u,i,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(i,u,r,d*o,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];e.update(_,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function vy(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:kt("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function yy(s,t,e){let i=new WeakMap,n=new Ie;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let P=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),_===!0&&(w=3);let v=a.attributes.position.count*w,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*S*4*d),x=new Fo(E,v,S,d);x.type=Rn,x.needsUpdate=!0;let M=w*4;for(let A=0;A<d;A++){let L=m[A],D=g[A],B=y[A],I=v*S*4*A;for(let z=0;z<L.count;z++){let H=z*M;f===!0&&(n.fromBufferAttribute(L,z),E[I+H+0]=n.x,E[I+H+1]=n.y,E[I+H+2]=n.z,E[I+H+3]=0),p===!0&&(n.fromBufferAttribute(D,z),E[I+H+4]=n.x,E[I+H+5]=n.y,E[I+H+6]=n.z,E[I+H+7]=0),_===!0&&(n.fromBufferAttribute(B,z),E[I+H+8]=n.x,E[I+H+9]=n.y,E[I+H+10]=n.z,E[I+H+11]=B.itemSize===4?n.w:1)}}u={count:d,texture:x,size:new zt(v,S)},i.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Sy(s,t,e,i,n){let r=new WeakMap;function o(c){let h=n.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var My={[Eu]:"LINEAR_TONE_MAPPING",[Au]:"REINHARD_TONE_MAPPING",[Cu]:"CINEON_TONE_MAPPING",[Ru]:"ACES_FILMIC_TONE_MAPPING",[Iu]:"AGX_TONE_MAPPING",[Lu]:"NEUTRAL_TONE_MAPPING",[Pu]:"CUSTOM_TONE_MAPPING"};function by(s,t,e,i,n,r){let o=new ji(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new en;h.setAttribute("position",new oi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new oi([0,2,0,0,2,0],2));let d=new ql({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ii(h,d),f=new rc(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,y=null,w=[],v=!1;this.setSize=function(S,E){o.setSize(S,E),a!==null&&a.setSize(S,E),l!==null&&l.setSize(S,E);for(let x=0;x<w.length;x++){let M=w[x];M.setSize&&M.setSize(S,E)}},this.setEffects=function(S){w=S,v=w.length>0&&w[0].isRenderPass===!0;let E=o.width,x=o.height;w.length>0&&a===null&&(a=new ji(E,x,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),l=new ji(E,x,{type:Pn,depthBuffer:!1,stencilBuffer:!1}));let M=n===!0&&w.some(P=>P.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new ss(E,x),r===!0&&(c.format=os,c.type=rr)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let P=0;P<w.length;P++){let A=w[P];A.setSize&&A.setSize(E,x),M&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(S,E){if(m||S.toneMapping===kn&&w.length===0)return!1;if(y=E,E!==null){let x=E.width,M=E.height;(o.width!==x||o.height!==M)&&this.setSize(x,M)}return v===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=kn,!0},this.hasRenderPass=function(){return v},this.end=function(S,E){S.toneMapping=g,m=!0;let x=o,M=a;for(let P=0;P<w.length;P++){let A=w[P];A.enabled!==!1&&(A.render(S,M,x,E),A.needsSwap!==!1&&(x=M,M=M===a?l:a))}if(p!==S.outputColorSpace||_!==S.toneMapping){p=S.outputColorSpace,_=S.toneMapping,d.defines={},ie.getTransfer(p)===pe&&(d.defines.SRGB_TRANSFER="");let P=My[_];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,S.setRenderTarget(y),S.render(u,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var fm=new ki,dm=new ss(1,1),pm=new Xo(1),mm=new Fo,gm=new Nl,_m=new Wo,Xp=[],qp=[],Yp=new Float32Array(16),Zp=new Float32Array(9),Jp=new Float32Array(4);function to(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=Xp[n];if(r===void 0&&(r=new Float32Array(n),Xp[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ti(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ei(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function $c(s,t){let e=qp[t];e===void 0&&(e=new Int32Array(t),qp[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Ty(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function wy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ti(e,t))return;s.uniform2fv(this.addr,t),ei(e,t)}}function Ey(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ti(e,t))return;s.uniform3fv(this.addr,t),ei(e,t)}}function Ay(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ti(e,t))return;s.uniform4fv(this.addr,t),ei(e,t)}}function Cy(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ti(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ei(e,t)}else{if(ti(e,i))return;Jp.set(i),s.uniformMatrix2fv(this.addr,!1,Jp),ei(e,i)}}function Ry(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ti(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ei(e,t)}else{if(ti(e,i))return;Zp.set(i),s.uniformMatrix3fv(this.addr,!1,Zp),ei(e,i)}}function Py(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ti(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ei(e,t)}else{if(ti(e,i))return;Yp.set(i),s.uniformMatrix4fv(this.addr,!1,Yp),ei(e,i)}}function Iy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ly(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ti(e,t))return;s.uniform2iv(this.addr,t),ei(e,t)}}function Dy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ti(e,t))return;s.uniform3iv(this.addr,t),ei(e,t)}}function Ny(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ti(e,t))return;s.uniform4iv(this.addr,t),ei(e,t)}}function Uy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Oy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ti(e,t))return;s.uniform2uiv(this.addr,t),ei(e,t)}}function Fy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ti(e,t))return;s.uniform3uiv(this.addr,t),ei(e,t)}}function By(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ti(e,t))return;s.uniform4uiv(this.addr,t),ei(e,t)}}function Kc(s){return s.version===0&&(s.compareFunction=Wu,s.needsUpdate=!0),s}function zy(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=Kc(dm):r=fm,e.setTexture2D(t||r,n)}function ky(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||gm,n)}function Vy(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Kc(pm):r=_m,e.setTextureCube(t||r,n)}function Gy(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||mm,n)}function Hy(s){switch(s){case 5126:return Ty;case 35664:return wy;case 35665:return Ey;case 35666:return Ay;case 35674:return Cy;case 35675:return Ry;case 35676:return Py;case 5124:case 35670:return Iy;case 35667:case 35671:return Ly;case 35668:case 35672:return Dy;case 35669:case 35673:return Ny;case 5125:return Uy;case 36294:return Oy;case 36295:return Fy;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return zy;case 35679:case 36299:case 36307:return ky;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return Gy}}function Wy(s,t){s.uniform1fv(this.addr,t)}function Xy(s,t){let e=to(t,this.size,2);s.uniform2fv(this.addr,e)}function qy(s,t){let e=to(t,this.size,3);s.uniform3fv(this.addr,e)}function Yy(s,t){let e=to(t,this.size,4);s.uniform4fv(this.addr,e)}function Zy(s,t){let e=to(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Jy(s,t){let e=to(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function $y(s,t){let e=to(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ky(s,t){s.uniform1iv(this.addr,t)}function Qy(s,t){s.uniform2iv(this.addr,t)}function jy(s,t){s.uniform3iv(this.addr,t)}function tS(s,t){s.uniform4iv(this.addr,t)}function eS(s,t){s.uniform1uiv(this.addr,t)}function iS(s,t){s.uniform2uiv(this.addr,t)}function nS(s,t){s.uniform3uiv(this.addr,t)}function sS(s,t){s.uniform4uiv(this.addr,t)}function rS(s,t,e){let i=this.cache,n=t.length,r=$c(e,n);ti(i,r)||(s.uniform1iv(this.addr,r),ei(i,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Kc(dm):o=fm;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,r[a])}function oS(s,t,e){let i=this.cache,n=t.length,r=$c(e,n);ti(i,r)||(s.uniform1iv(this.addr,r),ei(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||gm,r[o])}function aS(s,t,e){let i=this.cache,n=t.length,r=$c(e,n);ti(i,r)||(s.uniform1iv(this.addr,r),ei(i,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Kc(pm):o=_m;for(let a=0;a!==n;++a)e.setTextureCube(t[a]||o,r[a])}function lS(s,t,e){let i=this.cache,n=t.length,r=$c(e,n);ti(i,r)||(s.uniform1iv(this.addr,r),ei(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||mm,r[o])}function cS(s){switch(s){case 5126:return Wy;case 35664:return Xy;case 35665:return qy;case 35666:return Yy;case 35674:return Zy;case 35675:return Jy;case 35676:return $y;case 5124:case 35670:return Ky;case 35667:case 35671:return Qy;case 35668:case 35672:return jy;case 35669:case 35673:return tS;case 5125:return eS;case 36294:return iS;case 36295:return nS;case 36296:return sS;case 35678:case 36198:case 36298:case 36306:case 35682:return rS;case 35679:case 36299:case 36307:return oS;case 35680:case 36300:case 36308:case 36293:return aS;case 36289:case 36303:case 36311:case 36292:return lS}}var ef=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Hy(e.type)}},nf=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cS(e.type)}},sf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(t,e[a.id],i)}}},ju=/(\w+)(\])?(\[|\.)?/g;function $p(s,t){s.seq.push(t),s.map[t.id]=t}function hS(s,t,e){let i=s.name,n=i.length;for(ju.lastIndex=0;;){let r=ju.exec(i),o=ju.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){$p(e,c===void 0?new ef(a,s,t):new nf(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new sf(a),$p(e,d)),e=d}}}var jr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);hS(a,l,this)}let n=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):r.push(o);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function Kp(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var uS=37297,fS=0;function dS(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Qp=new Gt;function pS(s){ie._getMatrix(Qp,ie.workingColorSpace,s);let t=`mat3( ${Qp.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case No:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function jp(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+dS(s.getShaderSource(t),a)}else return r}function mS(s,t){let e=pS(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var gS={[Eu]:"Linear",[Au]:"Reinhard",[Cu]:"Cineon",[Ru]:"ACESFilmic",[Iu]:"AgX",[Lu]:"Neutral",[Pu]:"Custom"};function _S(s,t){let e=gS[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Yc=new k;function xS(){ie.getLuminanceCoefficients(Yc);let s=Yc.x.toFixed(4),t=Yc.y.toFixed(4),e=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function yS(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function SS(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ha(s){return s!==""}function tm(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function em(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var MS=/^[ \t]*#include +<([\w\d./]+)>/gm;function rf(s){return s.replace(MS,bS)}function bS(s,t){let e=Yt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return rf(e)}var TS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function im(s){return s.replace(TS,wS)}function wS(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function nm(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var ES={[ta]:"SHADOWMAP_TYPE_PCF",[Jr]:"SHADOWMAP_TYPE_VSM"};function AS(s){return ES[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var CS={[Kr]:"ENVMAP_MODE_REFRACTION"};function RS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":CS[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var PS={[wu]:"ENVMAP_BLENDING_MULTIPLY",[yp]:"ENVMAP_BLENDING_MIX",[Sp]:"ENVMAP_BLENDING_ADD"};function IS(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":PS[s.combine]||"ENVMAP_BLENDING_NONE"}function LS(s,t,e,i){let n=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=AS(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=RS(e),d=IS(e),u=vS(e),f=yS(r),p=n.createProgram(),_,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ha).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ha).join(`
`),m.length>0&&(m+=`
`)):(_=[nm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),m=[nm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==kn?_S("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,mS("linearToOutputTexel",e.outputColorSpace),xS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ha).join(`
`)),o=rf(o),o=tm(o,e),o=em(o,e),a=rf(a),a=tm(a,e),a=em(a,e),o=im(o),a=im(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+_+o,w=g+m+a,v=Kp(n,n.VERTEX_SHADER,y),S=Kp(n,n.FRAGMENT_SHADER,w);n.attachShader(p,v),n.attachShader(p,S),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function E(A){if(s.debug.checkShaderErrors){let L=n.getProgramInfoLog(p)||"",D=n.getShaderInfoLog(v)||"",B=n.getShaderInfoLog(S)||"",I=L.trim(),z=D.trim(),H=B.trim(),O=!0,Q=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,v,S);else{let W=jp(n,v,"vertex"),R=jp(n,S,"fragment");kt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+W+`
`+R)}else I!==""?Bt("WebGLProgram: Program Info Log:",I):(z===""||H==="")&&(Q=!1);Q&&(A.diagnostics={runnable:O,programLog:I,vertexShader:{log:z,prefix:_},fragmentShader:{log:H,prefix:m}})}n.deleteShader(v),n.deleteShader(S),x=new jr(n,p),M=SS(n,p)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(p,uS)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fS++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=S,this}var DS=0,of=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new af(t),e.set(t,i)),i}},af=class{constructor(t){this.id=DS++,this.code=t,this.usedTimes=0}};function NS(s){return s===Ds||s===oa||s===aa}function US(s,t,e,i,n,r){let o=new Bo,a=new of,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,M,P,A,L,D){let B=A.fog,I=L.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=t.get(x.envMap||z,H),Q=u[x.type],W=i.precision;x.precision!==null&&(W=i.getMaxPrecision(x.precision),W!==x.precision&&Bt("WebGLProgram.getParameters:",x.precision,"not supported, using",W,"instead."));let R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,$=R!==void 0?R.length:0,xt=0;I.morphAttributes.position!==void 0&&(xt=1),I.morphAttributes.normal!==void 0&&(xt=2),I.morphAttributes.color!==void 0&&(xt=3);let Et,Y,ot,vt;if(Q){let it=Gn[Q];Et=it.vertexShader,Y=it.fragmentShader}else{Et=x.vertexShader,Y=x.fragmentShader;let it=a.getVertexShaderStage(x),Tt=a.getFragmentShaderStage(x);a.update(x,it,Tt),ot=it.id,vt=Tt.id}let bt=s.getRenderTarget(),mt=s.state.buffers.depth.getReversed(),Nt=L.isInstancedMesh===!0,ge=L.isBatchedMesh===!0,At=!!x.map,Ht=!!x.matcap,Lt=!!O,Ot=Lt&&O.isPMREMTexture===!0,ce=!!x.aoMap,oe=!!x.lightMap,J=!!x.bumpMap&&x.wireframe===!1,Kt=!!x.normalMap,We=!!x.displacementMap,ve=!!x.emissiveMap,se=!!x.metalnessMap,Oe=!!x.roughnessMap,Ge=x.anisotropy>0,F=x.clearcoat>0,ue=x.diffuseRoughness>0,ae=x.dispersion>0,Vt=x.retroreflectivity>0,ut=x.iridescence>0,he=x.sheen>0,Dt=x.transmission>0,Ft=Ge&&!!x.anisotropyMap,C=F&&!!x.clearcoatMap,b=F&&!!x.clearcoatNormalMap,G=F&&!!x.clearcoatRoughnessMap,rt=ue&&!!x.diffuseRoughnessMap,nt=ut&&!!x.iridescenceMap,ht=ut&&!!x.iridescenceThicknessMap,gt=he&&!!x.sheenColorMap,X=he&&!!x.sheenRoughnessMap,tt=!!x.specularMap,ct=!!x.specularColorMap,N=!!x.specularIntensityMap,j=Dt&&!!x.transmissionMap,K=Dt&&!!x.thicknessMap,ft=!!x.gradientMap,lt=!!x.alphaMap,dt=x.alphaTest>0,at=!!x.alphaHash,pt=!!x.extensions,st=kn;x.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(st=s.toneMapping);let et=Ot?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,_t={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Et,fragmentShader:Y,defines:x.defines,customVertexShaderID:ot,customFragmentShaderID:vt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:W,batching:ge,batchingColor:ge&&L._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&L.instanceColor!==null,instancingMorph:Nt&&L.morphTexture!==null,outputColorSpace:bt===null?s.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:At,matcap:Ht,envMap:Lt,envMapMode:Lt&&O.mapping,envMapPMREM:Ot,envMapMaxLod:Ot?et.length-1:null,envMapSize:Ot?et[0].width:null,aoMap:ce,lightMap:oe,bumpMap:J,normalMap:Kt,displacementMap:We,emissiveMap:ve,normalMapObjectSpace:Kt&&x.normalMapType===Tp,normalMapTangentSpace:Kt&&x.normalMapType===Vu,packedNormalMap:Kt&&x.normalMapType===Vu&&NS(x.normalMap.format),metalnessMap:se,roughnessMap:Oe,anisotropy:Ge,anisotropyMap:Ft,clearcoat:F,clearcoatMap:C,clearcoatNormalMap:b,clearcoatRoughnessMap:G,diffuseRoughness:ue,diffuseRoughnessMap:rt,dispersion:ae,retroreflection:Vt,iridescence:ut,iridescenceMap:nt,iridescenceThicknessMap:ht,sheen:he,sheenColorMap:gt,sheenRoughnessMap:X,specularMap:tt,specularColorMap:ct,specularIntensityMap:N,transmission:Dt,transmissionMap:j,thicknessMap:K,gradientMap:ft,opaque:x.transparent===!1&&x.blending===Ls&&x.alphaToCoverage===!1,alphaMap:lt,alphaTest:dt,alphaHash:at,combine:x.combine,mapUv:At&&f(x.map.channel),aoMapUv:ce&&f(x.aoMap.channel),lightMapUv:oe&&f(x.lightMap.channel),bumpMapUv:J&&f(x.bumpMap.channel),normalMapUv:Kt&&f(x.normalMap.channel),displacementMapUv:We&&f(x.displacementMap.channel),emissiveMapUv:ve&&f(x.emissiveMap.channel),metalnessMapUv:se&&f(x.metalnessMap.channel),roughnessMapUv:Oe&&f(x.roughnessMap.channel),anisotropyMapUv:Ft&&f(x.anisotropyMap.channel),clearcoatMapUv:C&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:rt&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:X&&f(x.sheenRoughnessMap.channel),specularMapUv:tt&&f(x.specularMap.channel),specularColorMapUv:ct&&f(x.specularColorMap.channel),specularIntensityMapUv:N&&f(x.specularIntensityMap.channel),transmissionMapUv:j&&f(x.transmissionMap.channel),thicknessMapUv:K&&f(x.thicknessMap.channel),alphaMapUv:lt&&f(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Kt||Ge),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(At||lt),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Kt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:mt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:xt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.filter(it=>it.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:At&&x.map.isVideoTexture===!0&&ie.getTransfer(x.map.colorSpace)===pe,decodeVideoTextureEmissive:ve&&x.emissiveMap.isVideoTexture===!0&&ie.getTransfer(x.emissiveMap.colorSpace)===pe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===zn,flipSided:x.side===ui,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:pt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&x.extensions.multiDraw===!0||ge)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return _t.vertexUv1s=l.has(1),_t.vertexUv2s=l.has(2),_t.vertexUv3s=l.has(3),l.clear(),_t}function _(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(m(M,x),g(M,x),M.push(s.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function m(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function g(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let M=u[x.type],P;if(M){let A=Gn[M];P=Bp.clone(A.uniforms)}else P=x.uniforms;return P}function w(x,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new LS(s,M,x,n),c.push(P),h.set(M,P)),P}function v(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:y,acquireProgram:w,releaseProgram:v,releaseShaderCache:S,programs:c,dispose:E}}function OS(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function FS(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function sm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function rm(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,_,m,g){let y=s[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},s[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=p,y.materialVariant=o(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=m,y.group=g),t++,y}function l(u,f,p,_,m,g,y){y.reversedDepth===!0&&(m=-m);let w=a(u,f,p,_,m,g);p.transmission>0?i.push(w):p.transparent===!0?n.push(w):e.push(w)}function c(u,f,p,_,m,g){let y=a(u,f,p,_,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?n.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||FS),i.length>1&&i.sort(f||sm),n.length>1&&n.sort(f||sm)}function d(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:d,sort:h}}function BS(){let s=new WeakMap;function t(i,n){let r=s.get(i),o;return r===void 0?(o=new rm,s.set(i,[o])):n>=r.length?(o=new rm,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function zS(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new ne};break;case"SpotLight":e={position:new k,direction:new k,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new k,halfWidth:new k,halfHeight:new k};break}return s[t.id]=e,e}}}function kS(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var VS=0;function GS(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function HS(s){let t=new zS,e=kS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let n=new k,r=new Ce,o=new Ce;function a(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,y=0,w=0,v=0,S=0,E=0,x=0,M=0,P=0,A=0;c.sort(GS);for(let D=0,B=c.length;D<B;D++){let I=c[D],z=I.color,H=I.intensity,O=I.distance,Q=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ds?Q=I.shadow.map.texture:Q=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=z.r*H,d+=z.g*H,u+=z.b*H;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],H);A++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,$=e.get(I);$.shadowIntensity=R.intensity,$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),i.sunShadow[p]=$,i.sunShadowMap[p]=Q;let xt=R.getViewportCount();for(let Et=0;Et<xt;Et++)i.sunShadowMatrix[_+Et]=R.getMatrix(Et),i.sunShadowCascade[_+Et]=R._cascadeData[Et];_+=xt,p++}i.sun[f]=W,f++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,$=e.get(I);$.shadowIntensity=R.intensity,$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,i.directionalShadow[m]=$,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=I.shadow.matrix,S++}i.directional[m]=W,m++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(z).multiplyScalar(H),W.distance=O,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[y]=W;let R=I.shadow;if(I.map&&(i.spotLightMap[M]=I.map,M++,R.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[y]=R.matrix,I.castShadow){let $=e.get(I);$.shadowIntensity=R.intensity,$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,i.spotShadow[y]=$,i.spotShadowMap[y]=Q,x++}y++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(z).multiplyScalar(H),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[w]=W,w++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let R=I.shadow,$=e.get(I);$.shadowIntensity=R.intensity,$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,$.shadowCameraNear=R.camera.near,$.shadowCameraFar=R.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=I.shadow.matrix,E++}i.point[g]=W,g++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(H),W.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[v]=W,v++}}w>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let L=i.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==w||L.hemiLength!==v||L.numSunShadows!==p||L.numDirectionalShadows!==S||L.numPointShadows!==E||L.numSpotShadows!==x||L.numSpotMaps!==M||L.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=m,i.spot.length=y,i.rectArea.length=w,i.point.length=g,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+M-P,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=A,L.sunLength=f,L.directionalLength=m,L.pointLength=g,L.spotLength=y,L.rectAreaLength=w,L.hemiLength=v,L.numSunShadows=p,L.numDirectionalShadows=S,L.numPointShadows=E,L.numSpotShadows=x,L.numSpotMaps=M,L.numLightProbes=A,i.version=VS++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){let v=c[y];if(v.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(g),u++}else if(v.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function om(s){let t=new HS(s),e=[],i=[],n=[];function r(d){h.camera=d,e.length=0,i.length=0,n.length=0}function o(d){d.isLightProbeGrid?n.push(d):e.push(d)}function a(d){i.push(d)}function l(){t.setup(e),n.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function WS(s){let t=new WeakMap;function e(n,r=0){let o=t.get(n),a;return o===void 0?(a=new om(s),t.set(n,[a])):r>=o.length?(a=new om(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var XS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,YS=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],ZS=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],am=new Ce,ca=new k,tf=new k;function JS(s,t,e){let i=new er,n=new zt,r=new zt,o=new Ie,a=new Yl,l=new Zl,c={},h=e.maxTextureSize,d={[Bn]:ui,[ui]:Bn,[zn]:zn},u=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:XS,fragmentShader:qS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new en;p.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ii(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ta;let g=this.type;this.render=function(E,x,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===ep&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ta);let P=s.getRenderTarget(),A=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),D=s.state;D.setBlending(ir),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=g!==this.type;B&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=E.length;I<z;I++){let H=E[I],O=H.shadow;if(O===void 0){Bt("WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;n.copy(O.mapSize);let Q=O.getFrameExtents();n.multiply(Q),r.copy(O.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/Q.x),n.x=r.x*Q.x,O.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/Q.y),n.y=r.y*Q.y,O.mapSize.y=r.y));let W=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||B===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Jr){if(H.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new ji(n.x,n.y,{format:Ds,type:Pn,minFilter:Pi,magFilter:Pi,generateMipmaps:!1}),O.map.texture.name=H.name+".shadowMap",O.map.depthTexture=new ss(n.x,n.y,Rn),O.map.depthTexture.name=H.name+".shadowMapDepth",O.map.depthTexture.format=ns,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ai,O.map.depthTexture.magFilter=ai}else H.isPointLight?(O.map=new ua(n.x),O.map.depthTexture=new Xo(n.x,Cn)):(O.map=new ji(n.x,n.y),O.map.depthTexture=new ss(n.x,n.y,Cn)),O.map.depthTexture.name=H.name+".shadowMap",O.map.depthTexture.format=ns,this.type===ta?(O.map.depthTexture.compareFunction=W?Hu:Gu,O.map.depthTexture.minFilter=Pi,O.map.depthTexture.magFilter=Pi):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ai,O.map.depthTexture.magFilter=ai);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==n.x||O.map.height!==n.y)&&O.map.setSize(n.x,n.y);let R=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();H.isPointLight!==!0&&O.updateMatrices(H,M);let $=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:M.layers;for(let xt=0;xt<R;xt++){let Et=O.getCamera(xt);if(H.isPointLight){let Y=O.camera,ot=O.matrix,vt=H.distance||Y.far;vt!==Y.far&&(Y.far=vt,Y.updateProjectionMatrix()),ca.setFromMatrixPosition(H.matrixWorld),Y.position.copy(ca),tf.copy(Y.position),tf.add(YS[xt]),Y.up.copy(ZS[xt]),Y.lookAt(tf),Y.updateMatrixWorld(),ot.makeTranslation(-ca.x,-ca.y,-ca.z),am.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),O._frustum.setFromProjectionMatrix(am,Y.coordinateSystem,Y.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,xt),s.clear();else{xt===0&&(s.setRenderTarget(O.map),s.clear());let Y=O.getViewport(xt);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),D.viewport(o)}i=O.getFrustum(xt),v(x,M,Et,H,$,this.type)}O.isPointLightShadow!==!0&&this.type===Jr&&y(O,M),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(P,A,L)};function y(E,x){let M=t.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new ji(n.x,n.y,{format:Ds,type:Pn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(x,null,M,u,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(x,null,M,f,_,null)}function w(E,x,M,P){let A=null,L=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)A=L;else if(A=M.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=A.uuid,B=x.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let z=I[B];z===void 0&&(z=A.clone(),I[B]=z,x.addEventListener("dispose",S)),A=z}if(A.visible=x.visible,A.wireframe=x.wireframe,P===Jr?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:d[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=s.properties.get(A);D.light=M}return A}function v(E,x,M,P,A,L){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Jr)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let I=t.update(E),z=E.material;if(Array.isArray(z)){let H=I.groups;for(let O=0,Q=H.length;O<Q;O++){let W=H[O],R=z[W.materialIndex];if(R&&R.visible){let $=w(E,R,P,L);E.onBeforeShadow(s,E,x,M,I,$,W),s.renderBufferDirect(M,null,I,$,E,W),E.onAfterShadow(s,E,x,M,I,$,W)}}}else if(z.visible){let H=w(E,z,P,L);E.onBeforeShadow(s,E,x,M,I,H,null),s.renderBufferDirect(M,null,I,H,E,null),E.onAfterShadow(s,E,x,M,I,H,null)}}let B=E.children;for(let I=0,z=B.length;I<z;I++)v(B[I],x,M,P,A,L)}function S(E){E.target.removeEventListener("dispose",S);for(let M in c){let P=c[M],A=E.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function $S(s,t){function e(){let N=!1,j=new Ie,K=null,ft=new Ie(0,0,0,0);return{setMask:function(lt){K!==lt&&!N&&(s.colorMask(lt,lt,lt,lt),K=lt)},setLocked:function(lt){N=lt},setClear:function(lt,dt,at,pt,st){st===!0&&(lt*=pt,dt*=pt,at*=pt),j.set(lt,dt,at,pt),ft.equals(j)===!1&&(s.clearColor(lt,dt,at,pt),ft.copy(j))},reset:function(){N=!1,K=null,ft.set(-1,0,0,0)}}}function i(){let N=!1,j=!1,K=null,ft=null,lt=null;return{setReversed:function(dt){if(j!==dt){let at=t.get("EXT_clip_control");dt?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),j=dt;let pt=lt;lt=null,this.setClear(pt)}},getReversed:function(){return j},setTest:function(dt){dt?mt(s.DEPTH_TEST):Nt(s.DEPTH_TEST)},setMask:function(dt){K!==dt&&!N&&(s.depthMask(dt),K=dt)},setFunc:function(dt){if(j&&(dt=Up[dt]),ft!==dt){switch(dt){case Sl:s.depthFunc(s.NEVER);break;case Ml:s.depthFunc(s.ALWAYS);break;case bl:s.depthFunc(s.LESS);break;case Vr:s.depthFunc(s.LEQUAL);break;case Tl:s.depthFunc(s.EQUAL);break;case wl:s.depthFunc(s.GEQUAL);break;case El:s.depthFunc(s.GREATER);break;case Al:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ft=dt}},setLocked:function(dt){N=dt},setClear:function(dt){lt!==dt&&(lt=dt,j&&(dt=1-dt),s.clearDepth(dt))},reset:function(){N=!1,K=null,ft=null,lt=null,j=!1}}}function n(){let N=!1,j=null,K=null,ft=null,lt=null,dt=null,at=null,pt=null,st=null;return{setTest:function(et){N||(et?mt(s.STENCIL_TEST):Nt(s.STENCIL_TEST))},setMask:function(et){j!==et&&!N&&(s.stencilMask(et),j=et)},setFunc:function(et,_t,it){(K!==et||ft!==_t||lt!==it)&&(s.stencilFunc(et,_t,it),K=et,ft=_t,lt=it)},setOp:function(et,_t,it){(dt!==et||at!==_t||pt!==it)&&(s.stencilOp(et,_t,it),dt=et,at=_t,pt=it)},setLocked:function(et){N=et},setClear:function(et){st!==et&&(s.clearStencil(et),st=et)},reset:function(){N=!1,j=null,K=null,ft=null,lt=null,dt=null,at=null,pt=null,st=null}}}let r=new e,o=new i,a=new n,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,y=null,w=null,v=null,S=null,E=null,x=null,M=new ne(0,0,0),P=0,A=!1,L=null,D=null,B=null,I=null,z=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Q=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=Q>=2);let R=null,$={},xt=s.getParameter(s.SCISSOR_BOX),Et=s.getParameter(s.VIEWPORT),Y=new Ie().fromArray(xt),ot=new Ie().fromArray(Et);function vt(N,j,K,ft){let lt=new Uint8Array(4),dt=s.createTexture();s.bindTexture(N,dt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<K;at++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,ft,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(j+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return dt}let bt={};bt[s.TEXTURE_2D]=vt(s.TEXTURE_2D,s.TEXTURE_2D,1),bt[s.TEXTURE_CUBE_MAP]=vt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[s.TEXTURE_2D_ARRAY]=vt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),bt[s.TEXTURE_3D]=vt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(s.DEPTH_TEST),o.setFunc(Vr),J(!1),Kt(yu),mt(s.CULL_FACE),ce(ir);function mt(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Nt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function ge(N,j){return u[N]!==j?(s.bindFramebuffer(N,j),u[N]=j,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=j),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=j),!0):!1}function At(N,j){let K=p,ft=!1;if(N){K=f.get(j),K===void 0&&(K=[],f.set(j,K));let lt=N.textures;if(K.length!==lt.length||K[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,at=lt.length;dt<at;dt++)K[dt]=s.COLOR_ATTACHMENT0+dt;K.length=lt.length,ft=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,ft=!0);ft&&s.drawBuffers(K)}function Ht(N){return _!==N?(s.useProgram(N),_=N,!0):!1}let Lt={[nr]:s.FUNC_ADD,[np]:s.FUNC_SUBTRACT,[sp]:s.FUNC_REVERSE_SUBTRACT};Lt[rp]=s.MIN,Lt[op]=s.MAX;let Ot={[ap]:s.ZERO,[lp]:s.ONE,[cp]:s.SRC_COLOR,[bu]:s.SRC_ALPHA,[mp]:s.SRC_ALPHA_SATURATE,[dp]:s.DST_COLOR,[up]:s.DST_ALPHA,[hp]:s.ONE_MINUS_SRC_COLOR,[Tu]:s.ONE_MINUS_SRC_ALPHA,[pp]:s.ONE_MINUS_DST_COLOR,[fp]:s.ONE_MINUS_DST_ALPHA,[gp]:s.CONSTANT_COLOR,[_p]:s.ONE_MINUS_CONSTANT_COLOR,[xp]:s.CONSTANT_ALPHA,[vp]:s.ONE_MINUS_CONSTANT_ALPHA};function ce(N,j,K,ft,lt,dt,at,pt,st,et){if(N===ir){m===!0&&(Nt(s.BLEND),m=!1);return}if(m===!1&&(mt(s.BLEND),m=!0),N!==ip){if(N!==g||et!==A){if((y!==nr||S!==nr)&&(s.blendEquation(s.FUNC_ADD),y=nr,S=nr),et)switch(N){case Ls:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $r:s.blendFunc(s.ONE,s.ONE);break;case Su:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:kt("WebGLState: Invalid blending: ",N);break}else switch(N){case Ls:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $r:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Su:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mu:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",N);break}w=null,v=null,E=null,x=null,M.set(0,0,0),P=0,g=N,A=et}return}lt=lt||j,dt=dt||K,at=at||ft,(j!==y||lt!==S)&&(s.blendEquationSeparate(Lt[j],Lt[lt]),y=j,S=lt),(K!==w||ft!==v||dt!==E||at!==x)&&(s.blendFuncSeparate(Ot[K],Ot[ft],Ot[dt],Ot[at]),w=K,v=ft,E=dt,x=at),(pt.equals(M)===!1||st!==P)&&(s.blendColor(pt.r,pt.g,pt.b,st),M.copy(pt),P=st),g=N,A=!1}function oe(N,j){N.side===zn?Nt(s.CULL_FACE):mt(s.CULL_FACE);let K=N.side===ui;j&&(K=!K),J(K),N.blending===Ls&&N.transparent===!1?ce(ir):ce(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let ft=N.stencilWrite;a.setTest(ft),ft&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ve(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?mt(s.SAMPLE_ALPHA_TO_COVERAGE):Nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function J(N){L!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),L=N)}function Kt(N){N!==jd?(mt(s.CULL_FACE),N!==D&&(N===yu?s.cullFace(s.BACK):N===tp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Nt(s.CULL_FACE),D=N}function We(N){N!==B&&(O&&s.lineWidth(N),B=N)}function ve(N,j,K){N?(mt(s.POLYGON_OFFSET_FILL),(I!==j||z!==K)&&(I=j,z=K,o.getReversed()&&(j=-j,K=-K),s.polygonOffset(j,K))):Nt(s.POLYGON_OFFSET_FILL)}function se(N){N?mt(s.SCISSOR_TEST):Nt(s.SCISSOR_TEST)}function Oe(N){N===void 0&&(N=s.TEXTURE0+H-1),R!==N&&(s.activeTexture(N),R=N)}function Ge(N,j,K){K===void 0&&(R===null?K=s.TEXTURE0+H-1:K=R);let ft=$[K];ft===void 0&&(ft={type:void 0,texture:void 0},$[K]=ft),(ft.type!==N||ft.texture!==j)&&(R!==K&&(s.activeTexture(K),R=K),s.bindTexture(N,j||bt[N]),ft.type=N,ft.texture=j)}function F(){let N=$[R];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ue(){try{s.compressedTexImage2D(...arguments)}catch(N){kt("WebGLState:",N)}}function ae(){try{s.compressedTexImage3D(...arguments)}catch(N){kt("WebGLState:",N)}}function Vt(){try{s.texSubImage2D(...arguments)}catch(N){kt("WebGLState:",N)}}function ut(){try{s.texSubImage3D(...arguments)}catch(N){kt("WebGLState:",N)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(N){kt("WebGLState:",N)}}function Dt(){try{s.compressedTexSubImage3D(...arguments)}catch(N){kt("WebGLState:",N)}}function Ft(){try{s.texStorage2D(...arguments)}catch(N){kt("WebGLState:",N)}}function C(){try{s.texStorage3D(...arguments)}catch(N){kt("WebGLState:",N)}}function b(){try{s.texImage2D(...arguments)}catch(N){kt("WebGLState:",N)}}function G(){try{s.texImage3D(...arguments)}catch(N){kt("WebGLState:",N)}}function rt(N){return d[N]!==void 0?d[N]:s.getParameter(N)}function nt(N,j){d[N]!==j&&(s.pixelStorei(N,j),d[N]=j)}function ht(N){Y.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Y.copy(N))}function gt(N){ot.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),ot.copy(N))}function X(N,j){let K=c.get(j);K===void 0&&(K=new WeakMap,c.set(j,K));let ft=K.get(N);ft===void 0&&(ft=s.getUniformBlockIndex(j,N.name),s.uniformBlockBinding(j,ft,ft),K.set(N,ft))}function tt(N,j,K){let lt=c.get(j).get(N);l[lt]!==K&&(s.bindBufferBase(s.UNIFORM_BUFFER,lt,K),l[lt]=K)}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,$={},u={},l={},f=new WeakMap,p=[],_=null,m=!1,g=null,y=null,w=null,v=null,S=null,E=null,x=null,M=new ne(0,0,0),P=0,A=!1,L=null,D=null,B=null,I=null,z=null,Y.set(0,0,s.canvas.width,s.canvas.height),ot.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:mt,disable:Nt,bindFramebuffer:ge,drawBuffers:At,useProgram:Ht,setBlending:ce,setMaterial:oe,setFlipSided:J,setCullFace:Kt,setLineWidth:We,setPolygonOffset:ve,setScissorTest:se,activeTexture:Oe,bindTexture:Ge,unbindTexture:F,compressedTexImage2D:ue,compressedTexImage3D:ae,texImage2D:b,texImage3D:G,pixelStorei:nt,getParameter:rt,updateUBOMapping:X,uniformBlockBinding:tt,texStorage2D:Ft,texStorage3D:C,texSubImage2D:Vt,texSubImage3D:ut,compressedTexSubImage2D:he,compressedTexSubImage3D:Dt,scissor:ht,viewport:gt,reset:ct}}function KS(s,t,e,i,n,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,_=new FinalizationRegistry(C=>p.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return m?new OffscreenCanvas(C,b):Oo("canvas")}function y(C,b,G){let rt=1,nt=Ft(C);if((nt.width>G||nt.height>G)&&(rt=G/Math.max(nt.width,nt.height)),rt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ht=Math.floor(rt*nt.width),gt=Math.floor(rt*nt.height);u===void 0&&(u=g(ht,gt));let X=b?g(ht,gt):u;return X.width=ht,X.height=gt,X.getContext("2d").drawImage(C,0,0,ht,gt),Bt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+ht+"x"+gt+")."),X}else return"data"in C&&Bt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function w(C){return C.generateMipmaps}function v(C){s.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(C,b,G,rt,nt,ht=!1){if(C!==null){if(s[C]!==void 0)return s[C];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let gt;rt&&(gt=t.get("EXT_texture_norm16"),gt||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=b;if(b===s.RED&&(G===s.FLOAT&&(X=s.R32F),G===s.HALF_FLOAT&&(X=s.R16F),G===s.UNSIGNED_BYTE&&(X=s.R8),G===s.UNSIGNED_SHORT&&gt&&(X=gt.R16_EXT),G===s.SHORT&&gt&&(X=gt.R16_SNORM_EXT)),b===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(X=s.R8UI),G===s.UNSIGNED_SHORT&&(X=s.R16UI),G===s.UNSIGNED_INT&&(X=s.R32UI),G===s.BYTE&&(X=s.R8I),G===s.SHORT&&(X=s.R16I),G===s.INT&&(X=s.R32I)),b===s.RG&&(G===s.FLOAT&&(X=s.RG32F),G===s.HALF_FLOAT&&(X=s.RG16F),G===s.UNSIGNED_BYTE&&(X=s.RG8),G===s.UNSIGNED_SHORT&&gt&&(X=gt.RG16_EXT),G===s.SHORT&&gt&&(X=gt.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(X=s.RG8UI),G===s.UNSIGNED_SHORT&&(X=s.RG16UI),G===s.UNSIGNED_INT&&(X=s.RG32UI),G===s.BYTE&&(X=s.RG8I),G===s.SHORT&&(X=s.RG16I),G===s.INT&&(X=s.RG32I)),b===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(X=s.RGB8UI),G===s.UNSIGNED_SHORT&&(X=s.RGB16UI),G===s.UNSIGNED_INT&&(X=s.RGB32UI),G===s.BYTE&&(X=s.RGB8I),G===s.SHORT&&(X=s.RGB16I),G===s.INT&&(X=s.RGB32I)),b===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),G===s.UNSIGNED_INT&&(X=s.RGBA32UI),G===s.BYTE&&(X=s.RGBA8I),G===s.SHORT&&(X=s.RGBA16I),G===s.INT&&(X=s.RGBA32I)),b===s.RGB&&(G===s.UNSIGNED_SHORT&&gt&&(X=gt.RGB16_EXT),G===s.SHORT&&gt&&(X=gt.RGB16_SNORM_EXT),G===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),b===s.RGBA){let tt=ht?No:ie.getTransfer(nt);G===s.FLOAT&&(X=s.RGBA32F),G===s.HALF_FLOAT&&(X=s.RGBA16F),G===s.UNSIGNED_BYTE&&(X=tt===pe?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT&&gt&&(X=gt.RGBA16_EXT),G===s.SHORT&&gt&&(X=gt.RGBA16_SNORM_EXT),G===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function x(C,b){let G;return C?b===null||b===Cn||b===rr?G=s.DEPTH24_STENCIL8:b===Rn?G=s.DEPTH32F_STENCIL8:b===Qr&&(G=s.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Cn||b===rr?G=s.DEPTH_COMPONENT24:b===Rn?G=s.DEPTH_COMPONENT32F:b===Qr&&(G=s.DEPTH_COMPONENT16),G}function M(C,b){return w(C)===!0||C.isFramebufferTexture&&C.minFilter!==ai&&C.minFilter!==Pi?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function P(C){let b=new WeakRef(C);i.get(C).__ref=b,p.add(b),_.register(C,b,b)}function A(C){let b=i.get(C).__ref;b!==void 0&&(p.delete(b),_.unregister(b))}function L(C){B(C.target)}function D(C){I(C.target)}function B(C){C.removeEventListener("dispose",L),A(C),H(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function I(C){C.removeEventListener("dispose",D),A(C),Q(C)}function z(){for(let C of p){let b=C.deref();b!==void 0&&(b.isRenderTarget===!0?I(b):B(b))}p.clear(),d.clear()}function H(C){let b=i.get(C);if(b.__webglInit===void 0)return;let G=C.source,rt=f.get(G);if(rt){let nt=rt[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&O(C),Object.keys(rt).length===0&&f.delete(G)}i.remove(C)}function O(C){let b=i.get(C);s.deleteTexture(b.__webglTexture);let G=C.source,rt=f.get(G);delete rt[b.__cacheKey],o.memory.textures--}function Q(C){let b=i.get(C);b.__depthDisposeCallback&&b.__depthDisposeCallback();let G=C.depthTexture;if(G&&G.renderTarget===C&&B(G),C.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(b.__webglFramebuffer[nt]))for(let ht=0;ht<b.__webglFramebuffer[nt].length;ht++)s.deleteFramebuffer(b.__webglFramebuffer[nt][ht]);else s.deleteFramebuffer(b.__webglFramebuffer[nt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[nt])}else{if(Array.isArray(b.__webglFramebuffer))for(let nt=0;nt<b.__webglFramebuffer.length;nt++)s.deleteFramebuffer(b.__webglFramebuffer[nt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let nt=0;nt<b.__webglColorRenderbuffer.length;nt++)b.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[nt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let rt=C.textures;for(let nt=0,ht=rt.length;nt<ht;nt++){let gt=i.get(rt[nt]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),i.remove(rt[nt])}i.remove(C)}let W=0;function R(){W=0}function $(){return W}function xt(C){W=C}function Et(){let C=W;return C>=n.maxTextures&&Bt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+n.maxTextures),W+=1,C}function Y(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.mipmapsAutoUpdate),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function ot(C,b){let G=i.get(C);if(C.isVideoTexture&&he(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let rt=C.image;if(rt===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(G,C,b);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+b)}function vt(C,b){let G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){oe(G,C,b);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+b)}function bt(C,b){let G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){oe(G,C,b);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+b)}function mt(C,b){let G=i.get(C);if(C.version>0&&G.__version!==C.version){J(G,C,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+b)}let Nt={[Cl]:s.REPEAT,[Un]:s.CLAMP_TO_EDGE,[Rl]:s.MIRRORED_REPEAT},ge={[ai]:s.NEAREST,[Mp]:s.NEAREST_MIPMAP_NEAREST,[ea]:s.NEAREST_MIPMAP_LINEAR,[Pi]:s.LINEAR,[cc]:s.LINEAR_MIPMAP_NEAREST,[rs]:s.LINEAR_MIPMAP_LINEAR},At={[Ep]:s.NEVER,[Wu]:s.ALWAYS,[Ap]:s.LESS,[Gu]:s.LEQUAL,[Cp]:s.EQUAL,[Hu]:s.GEQUAL,[Rp]:s.GREATER,[Pp]:s.NOTEQUAL};function Ht(C,b){if(b.type===Rn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Pi||b.magFilter===cc||b.magFilter===ea||b.magFilter===rs||b.minFilter===Pi||b.minFilter===cc||b.minFilter===ea||b.minFilter===rs)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Nt[b.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Nt[b.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Nt[b.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ge[b.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ge[b.minFilter]),b.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,At[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ai||b.minFilter!==ea&&b.minFilter!==rs||b.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Lt(C,b){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",L),P(b));let rt=b.source,nt=f.get(rt);nt===void 0&&(nt={},f.set(rt,nt));let ht=Y(b);if(ht!==C.__cacheKey){nt[ht]===void 0&&(nt[ht]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),nt[ht].usedTimes++;let gt=nt[C.__cacheKey];gt!==void 0&&(nt[C.__cacheKey].usedTimes--,gt.usedTimes===0&&O(b)),C.__cacheKey=ht,C.__webglTexture=nt[ht].texture}return G}function Ot(C,b,G){return Math.floor(Math.floor(C/G)/b)}function ce(C,b,G,rt){let ht=C.updateRanges;if(ht.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,G,rt,b.data);else{ht.sort((N,j)=>N.start-j.start);let gt=0;for(let N=1;N<ht.length;N++){let j=ht[gt],K=ht[N],ft=j.start+j.count,lt=Ot(K.start,b.width,4),dt=Ot(j.start,b.width,4);K.start<=ft+1&&lt===dt&&Ot(K.start+K.count-1,b.width,4)===lt?j.count=Math.max(j.count,K.start+K.count-j.start):(++gt,ht[gt]=K)}ht.length=gt+1;let X=e.getParameter(s.UNPACK_ROW_LENGTH),tt=e.getParameter(s.UNPACK_SKIP_PIXELS),ct=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let N=0,j=ht.length;N<j;N++){let K=ht[N],ft=Math.floor(K.start/4),lt=Math.ceil(K.count/4),dt=ft%b.width,at=Math.floor(ft/b.width),pt=lt,st=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(s.UNPACK_SKIP_ROWS,at),e.texSubImage2D(s.TEXTURE_2D,0,dt,at,pt,st,G,rt,b.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,X),e.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ct)}}function oe(C,b,G){let rt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(rt=s.TEXTURE_3D);let nt=Lt(C,b),ht=b.source;e.bindTexture(rt,C.__webglTexture,s.TEXTURE0+G);let gt=i.get(ht);if(ht.version!==gt.__version||nt===!0){if(e.activeTexture(s.TEXTURE0+G),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let st=ie.getPrimaries(ie.workingColorSpace),et=b.colorSpace===as?null:ie.getPrimaries(b.colorSpace),_t=b.colorSpace===as||st===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let tt=y(b.image,!1,n.maxTextureSize);tt=Dt(b,tt);let ct=r.convert(b.format,b.colorSpace),N=r.convert(b.type),j=E(b.internalFormat,ct,N,b.normalized,b.colorSpace,b.isVideoTexture);Ht(rt,b);let K,ft=b.mipmaps,lt=b.isVideoTexture!==!0,dt=gt.__version===void 0||nt===!0,at=ht.dataReady,pt=M(b,tt);if(b.isDepthTexture)j=x(b.format===os,b.type),dt&&(lt?e.texStorage2D(s.TEXTURE_2D,1,j,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,j,tt.width,tt.height,0,ct,N,null));else if(b.isDataTexture)if(ft.length>0){lt&&dt&&e.texStorage2D(s.TEXTURE_2D,pt,j,ft[0].width,ft[0].height);for(let st=0,et=ft.length;st<et;st++)K=ft[st],lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,K.width,K.height,ct,N,K.data):e.texImage2D(s.TEXTURE_2D,st,j,K.width,K.height,0,ct,N,K.data);b.generateMipmaps=!1}else lt?(dt&&e.texStorage2D(s.TEXTURE_2D,pt,j,tt.width,tt.height),at&&ce(b,tt,ct,N)):e.texImage2D(s.TEXTURE_2D,0,j,tt.width,tt.height,0,ct,N,tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){lt&&dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,j,ft[0].width,ft[0].height,tt.depth);for(let st=0,et=ft.length;st<et;st++)if(K=ft[st],b.format!==In)if(ct!==null)if(lt){if(at)if(b.layerUpdates.size>0){let _t=Qu(K.width,K.height,b.format,b.type);for(let it of b.layerUpdates){let Tt=K.data.subarray(it*_t/K.data.BYTES_PER_ELEMENT,(it+1)*_t/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,it,K.width,K.height,1,ct,Tt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,K.width,K.height,tt.depth,ct,K.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,j,K.width,K.height,tt.depth,0,K.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?at&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,K.width,K.height,tt.depth,ct,N,K.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,j,K.width,K.height,tt.depth,0,ct,N,K.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{lt&&dt&&e.texStorage2D(s.TEXTURE_2D,pt,j,ft[0].width,ft[0].height);for(let st=0,et=ft.length;st<et;st++)K=ft[st],b.format!==In?ct!==null?lt?at&&e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,K.width,K.height,ct,K.data):e.compressedTexImage2D(s.TEXTURE_2D,st,j,K.width,K.height,0,K.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,K.width,K.height,ct,N,K.data):e.texImage2D(s.TEXTURE_2D,st,j,K.width,K.height,0,ct,N,K.data)}else if(b.isDataArrayTexture)if(lt){if(dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,j,tt.width,tt.height,tt.depth),at)if(b.layerUpdates.size>0){let st=Qu(tt.width,tt.height,b.format,b.type);for(let et of b.layerUpdates){let _t=tt.data.subarray(et*st/tt.data.BYTES_PER_ELEMENT,(et+1)*st/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,tt.width,tt.height,1,ct,N,_t)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ct,N,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,j,tt.width,tt.height,tt.depth,0,ct,N,tt.data);else if(b.isData3DTexture)lt?(dt&&e.texStorage3D(s.TEXTURE_3D,pt,j,tt.width,tt.height,tt.depth),at&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ct,N,tt.data)):e.texImage3D(s.TEXTURE_3D,0,j,tt.width,tt.height,tt.depth,0,ct,N,tt.data);else if(b.isFramebufferTexture){if(dt)if(lt)e.texStorage2D(s.TEXTURE_2D,pt,j,tt.width,tt.height);else{let st=tt.width,et=tt.height;for(let _t=0;_t<pt;_t++)e.texImage2D(s.TEXTURE_2D,_t,j,st,et,0,ct,N,null),st>>=1,et>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){let st=s.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),tt.parentNode!==st){st.appendChild(tt),d.add(b),st.onpaint=et=>{let _t=et.changedElements;for(let it of d)_t.includes(it.image)&&(it.needsUpdate=!0)},st.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,tt);else{let _t=s.RGBA,it=s.RGBA,Tt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,_t,it,Tt,tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ft.length>0){if(lt&&dt){let st=Ft(ft[0]);e.texStorage2D(s.TEXTURE_2D,pt,j,st.width,st.height)}for(let st=0,et=ft.length;st<et;st++)K=ft[st],lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,ct,N,K):e.texImage2D(s.TEXTURE_2D,st,j,ct,N,K);b.generateMipmaps=!1}else if(lt){if(dt){let st=Ft(tt);e.texStorage2D(s.TEXTURE_2D,pt,j,st.width,st.height)}at&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,N,tt)}else e.texImage2D(s.TEXTURE_2D,0,j,ct,N,tt);w(b)&&b.mipmapsAutoUpdate===!0&&v(rt),gt.__version=ht.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function J(C,b,G){if(b.image.length!==6)return;let rt=Lt(C,b),nt=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+G);let ht=i.get(nt);if(nt.version!==ht.__version||rt===!0){e.activeTexture(s.TEXTURE0+G);let gt=ie.getPrimaries(ie.workingColorSpace),X=b.colorSpace===as?null:ie.getPrimaries(b.colorSpace),tt=b.colorSpace===as||gt===X?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ct=b.isCompressedTexture||b.image[0].isCompressedTexture,N=b.image[0]&&b.image[0].isDataTexture,j=[];for(let it=0;it<6;it++)!ct&&!N?j[it]=y(b.image[it],!0,n.maxCubemapSize):j[it]=N?b.image[it].image:b.image[it],j[it]=Dt(b,j[it]);let K=j[0],ft=r.convert(b.format,b.colorSpace),lt=r.convert(b.type),dt=E(b.internalFormat,ft,lt,b.normalized,b.colorSpace),at=b.isVideoTexture!==!0,pt=ht.__version===void 0||rt===!0,st=nt.dataReady,et=M(b,K);Ht(s.TEXTURE_CUBE_MAP,b);let _t;if(b.isDepthTexture){if(dt=x(b.format===os,b.type),pt)if(at)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,dt,K.width,K.height);else for(let it=0;it<6;it++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,dt,K.width,K.height,0,ft,lt,null)}else if(ct){at&&pt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,et,dt,K.width,K.height);for(let it=0;it<6;it++){_t=j[it].mipmaps;for(let Tt=0;Tt<_t.length;Tt++){let Qt=_t[Tt];b.format!==In?ft!==null?at?st&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt,0,0,Qt.width,Qt.height,ft,Qt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt,dt,Qt.width,Qt.height,0,Qt.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt,0,0,Qt.width,Qt.height,ft,lt,Qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt,dt,Qt.width,Qt.height,0,ft,lt,Qt.data)}}}else{if(_t=b.mipmaps,at&&pt){_t.length>0&&et++;let it=Ft(j[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,et,dt,it.width,it.height)}for(let it=0;it<6;it++)if(N){at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,j[it].width,j[it].height,ft,lt,j[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,dt,j[it].width,j[it].height,0,ft,lt,j[it].data);for(let Tt=0;Tt<_t.length;Tt++){let Wt=_t[Tt].image[it].image;at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt+1,0,0,Wt.width,Wt.height,ft,lt,Wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt+1,dt,Wt.width,Wt.height,0,ft,lt,Wt.data)}}else{at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,ft,lt,j[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,dt,ft,lt,j[it]);for(let Tt=0;Tt<_t.length;Tt++){let Qt=_t[Tt];at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt+1,0,0,ft,lt,Qt.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt+1,dt,ft,lt,Qt.image[it])}}}w(b)&&b.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),ht.__version=nt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Kt(C,b,G,rt,nt,ht){let gt=r.convert(G.format,G.colorSpace),X=r.convert(G.type),tt=E(G.internalFormat,gt,X,G.normalized,G.colorSpace),ct=i.get(b),N=i.get(G);if(N.__renderTarget=b,!ct.__hasExternalTextures){let j=Math.max(1,b.width>>ht),K=Math.max(1,b.height>>ht);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,ht,tt,j,K,b.depth,0,gt,X,null):e.texImage2D(nt,ht,tt,j,K,0,gt,X,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),ut(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,nt,N.__webglTexture,0,Vt(b)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,nt,N.__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function We(C,b,G){if(s.bindRenderbuffer(s.RENDERBUFFER,C),b.depthBuffer){let rt=b.depthTexture,nt=rt&&rt.isDepthTexture?rt.type:null,ht=x(b.stencilBuffer,nt),gt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ut(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt(b),ht,b.width,b.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt(b),ht,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ht,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,C)}else{let rt=b.textures;for(let nt=0;nt<rt.length;nt++){let ht=rt[nt],gt=r.convert(ht.format,ht.colorSpace),X=r.convert(ht.type),tt=E(ht.internalFormat,gt,X,ht.normalized,ht.colorSpace);ut(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt(b),tt,b.width,b.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt(b),tt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,tt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ve(C,b,G){let rt=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=i.get(b.depthTexture);nt.__renderTarget=b;let ht=rt?b.depthTexture.image[0]:b.depthTexture.image;(!nt.__webglTexture||ht.width!==b.width||ht.height!==b.height)&&(ht.width=b.width,ht.height=b.height,b.depthTexture.needsUpdate=!0),rt?mt(b.depthTexture,0):ot(b.depthTexture,0);let gt=nt.__webglTexture,X=Vt(b),tt=rt?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,ct=b.depthTexture.format===os?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===ns)ut(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,tt,gt,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,ct,tt,gt,0);else if(b.depthTexture.format===os)ut(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,tt,gt,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,ct,tt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(C){let b=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let rt=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),rt){let nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,rt.removeEventListener("dispose",nt)};rt.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=rt}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let rt=0;rt<6;rt++)ve(b.__webglFramebuffer[rt],C,rt);else C.texture.mipmaps.length>0?ve(b.__webglFramebuffer[0],C,0):ve(b.__webglFramebuffer,C,0);else if(G){b.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[rt]),b.__webglDepthbuffer[rt]===void 0)b.__webglDepthbuffer[rt]=s.createRenderbuffer(),We(b.__webglDepthbuffer[rt],C,!1);else{let nt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer[rt];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,ht)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),We(b.__webglDepthbuffer,C,!1);else{let nt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,ht)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(C,b,G){let rt=i.get(C);b!==void 0&&Kt(rt.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&se(C)}function Ge(C){let b=C.texture,G=i.get(C),rt=i.get(b);C.addEventListener("dispose",D),P(C);let nt=C.textures,ht=C.isWebGLCubeRenderTarget===!0,gt=nt.length>1;if(gt||(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=b.version,o.memory.textures++),ht){G.__webglFramebuffer=[];for(let X=0;X<6;X++)if(b.mipmaps.length>0){G.__webglFramebuffer[X]=[];for(let tt=0;tt<b.mipmaps.length;tt++)G.__webglFramebuffer[X][tt]=s.createFramebuffer()}else G.__webglFramebuffer[X]=s.createFramebuffer()}else{if(b.mipmaps.length>0){G.__webglFramebuffer=[];for(let X=0;X<b.mipmaps.length;X++)G.__webglFramebuffer[X]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(gt)for(let X=0,tt=nt.length;X<tt;X++){let ct=i.get(nt[X]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&ut(C)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let X=0;X<nt.length;X++){let tt=nt[X];G.__webglColorRenderbuffer[X]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[X]);let ct=r.convert(tt.format,tt.colorSpace),N=r.convert(tt.type),j=E(tt.internalFormat,ct,N,tt.normalized,tt.colorSpace,C.isXRRenderTarget===!0),K=Vt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,K,j,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+X,s.RENDERBUFFER,G.__webglColorRenderbuffer[X])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),We(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,b);for(let X=0;X<6;X++)if(b.mipmaps.length>0)for(let tt=0;tt<b.mipmaps.length;tt++)Kt(G.__webglFramebuffer[X][tt],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+X,tt);else Kt(G.__webglFramebuffer[X],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);w(b)?v(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let X=0,tt=nt.length;X<tt;X++){let ct=nt[X],N=i.get(ct),j=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,N.__webglTexture),Ht(j,ct),Kt(G.__webglFramebuffer,C,ct,s.COLOR_ATTACHMENT0+X,j,0),w(ct)&&v(j)}e.unbindTexture()}else{let X=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(X=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(X,rt.__webglTexture),Ht(X,b),b.mipmaps.length>0)for(let tt=0;tt<b.mipmaps.length;tt++)Kt(G.__webglFramebuffer[tt],C,b,s.COLOR_ATTACHMENT0,X,tt);else Kt(G.__webglFramebuffer,C,b,s.COLOR_ATTACHMENT0,X,0);w(b)?v(X):b.mipmaps.length>0&&s.texParameteri(X,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&se(C)}function F(C){let b=C.textures;for(let G=0,rt=b.length;G<rt;G++){let nt=b[G];if(w(nt)&&nt.mipmapsAutoUpdate===!0){let ht=S(C),gt=i.get(nt).__webglTexture;e.bindTexture(ht,gt),v(ht),e.unbindTexture()}}}let ue=[];function ae(C){if(C.samples>0){if(ut(C)===!1){let b=C.textures,G=C.width,rt=C.height,nt=s.COLOR_BUFFER_BIT,ht=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=i.get(C),X=b.length>1;if(X)for(let ct=0;ct<b.length;ct++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ct=0;ct<b.length;ct++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),X){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[ct]);let N=i.get(b[ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,N,0)}s.blitFramebuffer(0,0,G,rt,0,0,G,rt,nt,s.NEAREST),l===!0&&(ue.length=0,ue.push(s.COLOR_ATTACHMENT0+ct),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&ue.push(ht),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),X)for(let ct=0;ct<b.length;ct++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,gt.__webglColorRenderbuffer[ct]);let N=i.get(b[ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,N,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let b=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Vt(C){return Math.min(n.maxSamples,C.samples)}function ut(C){let b=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function he(C){let b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Dt(C,b){let G=C.colorSpace,rt=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Do&&G!==as&&(ie.getTransfer(G)===pe?(rt!==In||nt!==sn)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",G)),b}function Ft(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Et,this.resetTextureUnits=R,this.getTextureUnits=$,this.setTextureUnits=xt,this.setTexture2D=ot,this.setTexture2DArray=vt,this.setTexture3D=bt,this.setTextureCube=mt,this.rebindTextures=Oe,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Kt,this.useMultisampledRTT=ut,this.dispose=z}function QS(s,t){function e(i,n=as){let r,o=ie.getTransfer(n);if(i===sn)return s.UNSIGNED_BYTE;if(i===uc)return s.UNSIGNED_SHORT_4_4_4_4;if(i===fc)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Ou)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Fu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nu)return s.BYTE;if(i===Uu)return s.SHORT;if(i===Qr)return s.UNSIGNED_SHORT;if(i===hc)return s.INT;if(i===Cn)return s.UNSIGNED_INT;if(i===Rn)return s.FLOAT;if(i===Pn)return s.HALF_FLOAT;if(i===Bu)return s.ALPHA;if(i===zu)return s.RGB;if(i===In)return s.RGBA;if(i===ns)return s.DEPTH_COMPONENT;if(i===os)return s.DEPTH_STENCIL;if(i===ku)return s.RED;if(i===dc)return s.RED_INTEGER;if(i===Ds)return s.RG;if(i===pc)return s.RG_INTEGER;if(i===mc)return s.RGBA_INTEGER;if(i===ia||i===na||i===sa||i===ra)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gc||i===_c||i===xc||i===vc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yc||i===Sc||i===Mc||i===bc||i===Tc||i===oa||i===wc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===yc||i===Sc)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Mc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===bc)return r.COMPRESSED_R11_EAC;if(i===Tc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===oa)return r.COMPRESSED_RG11_EAC;if(i===wc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ec||i===Ac||i===Cc||i===Rc||i===Pc||i===Ic||i===Lc||i===Dc||i===Nc||i===Uc||i===Oc||i===Fc||i===Bc||i===zc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ec)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ac)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ic)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kc||i===Vc||i===Gc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===kc)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hc||i===Wc||i===aa||i===Xc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Hc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rr?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var jS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,lf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new qo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new gn({vertexShader:jS,fragmentShader:tM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ii(new Jo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cf=class extends On{constructor(t,e){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,_=typeof XRWebGLBinding<"u",m=new lf,g={},y=e.getContextAttributes(),w=null,v=null,S=[],E=[],x=new zt,M=null,P=null,A=new Ri;A.viewport=new Ie;let L=new Ri;L.viewport=new Ie;let D=[A,L],B=new oc,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ot=S[Y];return ot===void 0&&(ot=new Wr,S[Y]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Y){let ot=S[Y];return ot===void 0&&(ot=new Wr,S[Y]=ot),ot.getGripSpace()},this.getHand=function(Y){let ot=S[Y];return ot===void 0&&(ot=new Wr,S[Y]=ot),ot.getHandSpace()};function H(Y){let ot=E.indexOf(Y.inputSource);if(ot===-1)return;let vt=S[ot];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,c||o),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){n.removeEventListener("select",H),n.removeEventListener("selectstart",H),n.removeEventListener("selectend",H),n.removeEventListener("squeeze",H),n.removeEventListener("squeezestart",H),n.removeEventListener("squeezeend",H),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<S.length;Y++){let ot=E[Y];ot!==null&&(E[Y]=null,S[Y].disconnect(ot))}I=null,z=null,m.reset();for(let Y in g)delete g[Y];if(t.setRenderTarget(w),f=null,u=null,d=null,n=null,v=null,Et.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(x.width,x.height,!1),P!==null){let Y=P.camera;Y.fov=P.fov,Y.zoom=P.zoom,Y.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(w=t.getRenderTarget(),n.addEventListener("select",H),n.addEventListener("selectstart",H),n.addEventListener("selectend",H),n.addEventListener("squeeze",H),n.addEventListener("squeezestart",H),n.addEventListener("squeezeend",H),n.addEventListener("end",O),n.addEventListener("inputsourceschange",Q),y.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,bt=null,mt=null;y.depth&&(mt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=y.stencil?os:ns,bt=y.stencil?rr:Cn);let Nt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Nt),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new ji(u.textureWidth,u.textureHeight,{format:In,type:sn,depthTexture:new ss(u.textureWidth,u.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,vt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ji(f.framebufferWidth,f.framebufferHeight,{format:In,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Et.setContext(n),Et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(Y){for(let ot=0;ot<Y.removed.length;ot++){let vt=Y.removed[ot],bt=E.indexOf(vt);bt>=0&&(E[bt]=null,S[bt].disconnect(vt))}for(let ot=0;ot<Y.added.length;ot++){let vt=Y.added[ot],bt=E.indexOf(vt);if(bt===-1){for(let Nt=0;Nt<S.length;Nt++)if(Nt>=E.length){E.push(vt),bt=Nt;break}else if(E[Nt]===null){E[Nt]=vt,bt=Nt;break}if(bt===-1)break}let mt=S[bt];mt&&mt.connect(vt)}}function W(Y,ot){ot===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ot.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let ot=Y.near,vt=Y.far;m.texture!==null&&(m.depthNear>0&&(ot=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),B.near=L.near=A.near=ot,B.far=L.far=A.far=vt,(I!==B.near||z!==B.far)&&(n.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,z=B.far),B.layers.mask=Y.layers.mask|6,A.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;let bt=Y.parent,mt=B.cameras;W(B,bt);for(let Nt=0;Nt<mt.length;Nt++)W(mt[Nt],bt);B.projectionMatrix.copy(A.projectionMatrix),B.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&Y.isPerspectiveCamera&&(P={camera:Y,fov:Y.fov,zoom:Y.zoom}),R(Y,B,bt)};function R(Y,ot,vt){vt===null?Y.matrix.copy(ot.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ot.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ot.projectionMatrix),Y.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Il*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Y){return g[Y]};let $=null;function xt(Y,ot){if(h=ot.getViewerPose(c||o),p=ot,h!==null){let vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let bt=!1;vt.length!==B.cameras.length&&(B.cameras.length=0,bt=!0);for(let At=0;At<vt.length;At++){let Ht=vt[At],Lt=null;if(f!==null)Lt=f.getViewport(Ht);else{let ce=d.getViewSubImage(u,Ht);Lt=ce.viewport,At===0&&(t.setRenderTargetTextures(v,ce.colorTexture,ce.depthStencilTexture),t.setRenderTarget(v))}let Ot=D[At];Ot===void 0&&(Ot=new Ri,Ot.layers.enable(At),Ot.viewport=new Ie,D[At]=Ot),Ot.matrix.fromArray(Ht.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(Ht.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),At===0&&(B.matrix.copy(Ot.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),bt===!0&&B.cameras.push(Ot)}let mt=n.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let At=d.getDepthInformation(vt[0]);At&&At.isValid&&At.texture&&m.init(At,n.renderState)}if(mt&&mt.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let At=0;At<vt.length;At++){let Ht=vt[At].camera;if(Ht){let Lt=g[Ht];Lt||(Lt=new qo,g[Ht]=Lt);let Ot=d.getCameraImage(Ht);Lt.sourceTexture=Ot}}}}for(let vt=0;vt<S.length;vt++){let bt=E[vt],mt=S[vt];bt!==null&&mt!==void 0&&mt.update(bt,ot,c||o)}$&&$(Y,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),p=null}let Et=new lm;Et.setAnimationLoop(xt),this.setAnimationLoop=function(Y){$=Y},this.dispose=function(){}}},eM=new Ce,xm=new Gt;xm.set(-1,0,0,0,1,0,0,0,1);function iM(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Ju(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,y,w,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===ui&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===ui&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=t.get(g),w=y.envMap,v=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(eM.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(xm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=w*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ui&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function nM(s,t,e,i){let n={},r={};function o(y,w){let v=w.program;i.uniformBlockBinding(y,v,n[y.id])}function a(y,w){let v=n[y.id];v===void 0&&(p(y),v=l(y),n[y.id]=v,y.addEventListener("dispose",m));let S=w.program;i.updateUBOMapping(y,S);let E=t.render.frame;r[y.id]!==E&&(c(y),r[y.id]=E)}function l(y){let w=s.createBuffer(),v=y.__size,S=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,v,S),s.bindBuffer(s.UNIFORM_BUFFER,null),w}function c(y){let w=n[y.id],v=y.uniforms,S=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let E=0,x=v.length;E<x;E++){let M=v[E];if(Array.isArray(M))for(let P=0,A=M.length;P<A;P++)h(M[P],E,P,S);else h(M,E,0,S)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,w,v,S){if(u(y,w,v,S)===!0){let E=y.__offset,x=y.value;if(Array.isArray(x)){let M=0;for(let P=0;P<x.length;P++){let A=x[P],L=_(A,!0);d(A,y.__data,M),M+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,y.__data)}}function d(y,w,v){typeof y=="number"||typeof y=="boolean"?w[v]=y:y.isMatrix3?(w[v]=y.elements[0],w[v+1]=y.elements[1],w[v+2]=y.elements[2],w[v+3]=0,w[v+4]=y.elements[3],w[v+5]=y.elements[4],w[v+6]=y.elements[5],w[v+7]=0,w[v+8]=y.elements[6],w[v+9]=y.elements[7],w[v+10]=y.elements[8],w[v+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-v),v):y.toArray(w,v)}function u(y,w,v,S){let E=y.value,x=w+"_"+v;if(Array.isArray(E)){S[x]===void 0&&(S[x]=[]);let M=S[x],P=!1;for(let A=0;A<E.length;A++)f(E[A],M,A)===!0&&(P=!0);return P}return f(E,S,x)}function f(y,w,v){if(w[v]===void 0)return typeof y=="number"||typeof y=="boolean"?w[v]=y:ArrayBuffer.isView(y)?w[v]=y.slice():w[v]=y.clone(),!0;{let S=w[v];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return w[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(S.equals(y)===!1)return S.copy(y),!0}}return!1}function p(y){let w=y.uniforms,v=0,S=16;for(let x=0,M=w.length;x<M;x++){let P=Array.isArray(w[x])?w[x]:[w[x]];for(let A=0,L=P.length;A<L;A++){let D=P[A],B=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(w[x])||Array.isArray(D.value),z=v;for(let O=0,Q=B.length;O<Q;O++){let W=B[O],R=_(W,I),$=v%S,xt=$%R.boundary,Et=$+xt;v+=xt,Et!==0&&S-Et<R.storage&&(v+=S-Et),O===0&&(z=v),v+=R.storage}let H=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new H((v-z)/Float32Array.BYTES_PER_ELEMENT),D.__offset=z}}let E=v%S;return E>0&&(v+=S-E),y.__size=v,y.__cache={},this}function _(y,w){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(y){let w=y.target;w.removeEventListener("dispose",m),s.deleteBuffer(n[w.id]),delete n[w.id],delete r[w.id]}function g(){for(let y in n)s.deleteBuffer(n[y]);n={},r={}}return{bind:o,update:a,dispose:g}}var sM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vn=null;function rM(){return Vn===null&&(Vn=new Ol(sM,16,16,Ds,Pn),Vn.name="DFG_LUT",Vn.minFilter=Pi,Vn.magFilter=Pi,Vn.wrapS=Un,Vn.wrapT=Un,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}var Jc=class{constructor(t={}){let{canvas:e=Lp(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=sn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let _=f,m=new Set([mc,pc,dc]),g=new Set([sn,Cn,Qr,rr,uc,fc]),y=new Uint32Array(4),w=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},S=null,E=null,x=[],M=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,D=null,B=null,I=null,z=null;this._outputColorSpace=Qi;let H=0,O=0,Q=null,W=-1,R=null,$=new Ie,xt=new Ie,Et=null,Y=new ne(0),ot=0,vt=e.width,bt=e.height,mt=1,Nt=null,ge=null,At=new Ie(0,0,vt,bt),Ht=new Ie(0,0,vt,bt),Lt=!1,Ot=new er,ce=new Fl,oe=!1,J=!1,Kt=new Ce,We=new k,ve=new Ie,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function Ge(){return Q===null?mt:1}let F=i;function ue(T,U){return e.getContext(T,U)}let ae,Vt,ut,he,Dt,Ft,C,b,G,rt,nt,ht,gt,X,tt,ct,N,j,K,ft,lt,dt,at;try{let T={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",it,!1),F===null){let U="webgl2";if(F=ue(U,T),F===null)throw ue(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pt()}catch(T){throw e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",it,!1),kt("WebGLRenderer: "+T.message),T}function pt(){ae=new gy(F),ae.init(),lt=new QS(F,ae),Vt=new ry(F,ae,t,lt),ut=new $S(F,ae),Vt.reversedDepthBuffer&&u&&ut.buffers.depth.setReversed(!0),B=F.createFramebuffer(),I=F.createFramebuffer(),z=F.createFramebuffer(),he=new vy(F),Dt=new OS,Ft=new KS(F,ae,ut,Dt,Vt,lt,he),C=new my(A),b=new S0(F),dt=new ny(F,b),G=new _y(F,b,he,dt),rt=new Sy(F,G,b,dt,he),j=new yy(F,Vt,Ft),tt=new oy(Dt),nt=new US(A,C,ae,Vt,dt,tt),ht=new iM(A,Dt),gt=new BS,X=new WS(ae),N=new iy(A,C,ut,rt,p,l),ct=new JS(A,rt,Vt),at=new nM(F,he,Vt,ut),K=new sy(F,ae,he),ft=new xy(F,ae,he),he.programs=nt.programs,A.capabilities=Vt,A.extensions=ae,A.properties=Dt,A.renderLists=gt,A.shadowMap=ct,A.state=ut,A.info=he}_!==sn&&(P=new by(_,e.width,e.height,a,n,r));let st=new cf(A,F);this.xr=st,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=ae.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ae.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(T){T!==void 0&&(mt=T,this.setSize(vt,bt,!1))},this.getSize=function(T){return T.set(vt,bt)},this.setSize=function(T,U,Z=!0){if(st.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=T,bt=U,e.width=Math.floor(T*mt),e.height=Math.floor(U*mt),Z===!0&&(e.style.width=T+"px",e.style.height=U+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(vt*mt,bt*mt).floor()},this.setDrawingBufferSize=function(T,U,Z){vt=T,bt=U,mt=Z,e.width=Math.floor(T*Z),e.height=Math.floor(U*Z),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(_===sn){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy($)},this.getViewport=function(T){return T.copy(At)},this.setViewport=function(T,U,Z,V){T.isVector4?At.set(T.x,T.y,T.z,T.w):At.set(T,U,Z,V),ut.viewport($.copy(At).multiplyScalar(Ge()).round())},this.getScissor=function(T){return T.copy(Ht)},this.setScissor=function(T,U,Z,V){T.isVector4?Ht.set(T.x,T.y,T.z,T.w):Ht.set(T,U,Z,V),ut.scissor(xt.copy(Ht).multiplyScalar(Ge()).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(T){ut.setScissorTest(Lt=T)},this.setOpaqueSort=function(T){Nt=T},this.setTransparentSort=function(T){ge=T},this.getClearColor=function(T){return T.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,Z=!0){let V=0;if(T){let q=!1;if(Q!==null){let St=Q.texture.format;q=m.has(St)}if(q){let St=Q.texture.type,Rt=g.has(St),yt=N.getClearColor(),wt=N.getClearAlpha(),Ut=yt.r,Xt=yt.g,te=yt.b;Rt?(y[0]=Ut,y[1]=Xt,y[2]=te,y[3]=wt,F.clearBufferuiv(F.COLOR,0,y)):(w[0]=Ut,w[1]=Xt,w[2]=te,w[3]=wt,F.clearBufferiv(F.COLOR,0,w))}else V|=F.COLOR_BUFFER_BIT}U&&(V|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",it,!1),N.dispose(),gt.dispose(),X.dispose(),Ft.dispose(),Dt.dispose(),C.dispose(),rt.dispose(),G.dispose(),dt.dispose(),at.dispose(),nt.dispose(),st.dispose(),st.removeEventListener("sessionstart",ye),st.removeEventListener("sessionend",de),Ke.stop()};function et(T){T.preventDefault(),qu("WebGLRenderer: Context Lost."),L=!0}function _t(){qu("WebGLRenderer: Context Restored."),L=!1;let T=he.autoReset,U=ct.enabled,Z=ct.autoUpdate,V=ct.needsUpdate,q=ct.type;pt(),he.autoReset=T,ct.enabled=U,ct.autoUpdate=Z,ct.needsUpdate=V,ct.type=q}function it(T){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Tt(T){let U=T.target;U.removeEventListener("dispose",Tt),Qt(U)}function Qt(T){Wt(T),Dt.remove(T)}function Wt(T){let U=Dt.get(T).programs;U!==void 0&&(U.forEach(function(Z){nt.releaseProgram(Z)}),T.isShaderMaterial&&nt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,Z,V,q,St){U===null&&(U=se);let Rt=q.isMesh&&q.matrixWorld.determinantAffine()<0,yt=fn(T,U,Z,V,q);ut.setMaterial(V,Rt);let wt=Z.index,Ut=1;if(V.wireframe===!0){if(wt=G.getWireframeAttribute(Z),wt===void 0)return;Ut=2}let Xt=Z.drawRange,te=Z.attributes.position,Pt=Xt.start*Ut,ee=(Xt.start+Xt.count)*Ut;St!==null&&(Pt=Math.max(Pt,St.start*Ut),ee=Math.min(ee,(St.start+St.count)*Ut)),wt!==null?(Pt=Math.max(Pt,0),ee=Math.min(ee,wt.count)):te!=null&&(Pt=Math.max(Pt,0),ee=Math.min(ee,te.count));let Ye=ee-Pt;if(Ye<0||Ye===1/0)return;dt.setup(q,V,yt,Z,wt);let Te,Me=K;if(wt!==null&&(Te=b.get(wt),Me=ft,Me.setIndex(Te)),q.isMesh)V.wireframe===!0?(ut.setLineWidth(V.wireframeLinewidth*Ge()),Me.setMode(F.LINES)):Me.setMode(F.TRIANGLES);else if(q.isLine){let gi=V.linewidth;gi===void 0&&(gi=1),ut.setLineWidth(gi*Ge()),q.isLineSegments?Me.setMode(F.LINES):q.isLineLoop?Me.setMode(F.LINE_LOOP):Me.setMode(F.LINE_STRIP)}else q.isPoints?Me.setMode(F.POINTS):q.isSprite&&Me.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))Me.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let gi=q._multiDrawStarts,It=q._multiDrawCounts,Ci=q._multiDrawCount,fe=wt?b.get(wt).bytesPerElement:1,Zs=Dt.get(V).currentProgram.getUniforms();for(let _i=0;_i<Ci;_i++)Zs.setValue(F,"_gl_DrawID",_i),Me.render(gi[_i]/fe,It[_i])}else if(q.isInstancedMesh)Me.renderInstances(Pt,Ye,q.count);else if(Z.isInstancedBufferGeometry){let gi=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,It=Math.min(Z.instanceCount,gi);Me.renderInstances(Pt,Ye,It)}else Me.render(Pt,Ye)};function Ee(T,U,Z,V){D!==null&&T.isNodeMaterial&&D.setObject(V,T),oe===!0&&tt.setState(T,Z,!1),T.transparent===!0&&T.side===zn&&T.forceSinglePass===!1?(T.side=ui,T.needsUpdate=!0,Ji(T,U,V),T.side=Bn,T.needsUpdate=!0,Ji(T,U,V),T.side=zn):Ji(T,U,V)}this.compile=function(T,U,Z=null){Z===null&&(Z=T),D!==null&&D.renderStart(T,U,Z),E=X.get(Z),E.init(U),M.push(E),Z.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),T!==Z&&T.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),J=this.localClippingEnabled,oe=tt.init(this.clippingPlanes,J),oe===!0&&tt.setGlobalState(this.clippingPlanes,U),D!==null&&ct.render(E.state.shadowsArray,Z,U);let V=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let St=q.material;if(St)if(Array.isArray(St))for(let Rt=0;Rt<St.length;Rt++){let yt=St[Rt];Ee(yt,Z,U,q),V.add(yt)}else Ee(St,Z,U,q),V.add(St)}),E=M.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(T,U,Z=null){let V=this.compile(T,U,Z);return new Promise(q=>{function St(){if(V.forEach(function(Rt){let wt=Dt.get(Rt).currentProgram;(wt===void 0||wt.isReady())&&V.delete(Rt)}),V.size===0){q(T);return}setTimeout(St,10)}ae.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Xe=null;function Ae(T){Xe&&Xe(T)}function ye(){Ke.stop()}function de(){Ke.start()}let Ke=new lm;Ke.setAnimationLoop(Ae),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(T){Xe=T,st.setAnimationLoop(T),T===null?Ke.stop():Ke.start()},st.addEventListener("sessionstart",ye),st.addEventListener("sessionend",de),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(T,U);let Z=st.enabled===!0&&st.isPresenting===!0,V=P!==null&&(Q===null||Z)&&P.begin(A,Q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(U),U=st.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,U,Q),E=X.get(T,M.length),E.init(U),E.state.textureUnits=Ft.getTextureUnits(),M.push(E),Kt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ce.setFromArrayCamera(U):Ot.setFromProjectionMatrix(Kt,pn,U.reversedDepth),J=this.localClippingEnabled,oe=tt.init(this.clippingPlanes,J),S=gt.get(T,x.length),S.init(),x.push(S),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let Rt=A.xr.getDepthSensingMesh();Rt!==null&&Se(Rt,U,-1/0,A.sortObjects)}Se(T,U,0,A.sortObjects),S.finish(),D!==null&&D.updateLights(E.state.lightsArray),A.sortObjects===!0&&S.sort(Nt,ge),Oe=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Oe&&N.addToRenderList(S,T),this.info.autoReset===!0&&this.info.reset(),oe===!0&&tt.beginShadows();let q=E.state.shadowsArray;if(ct.render(q,T,U),oe===!0&&tt.endShadows(),(V&&P.hasRenderPass())===!1){let Rt=S.opaque,yt=S.transmissive;if(E.setupLights(),U.isArrayCamera){let wt=U.cameras;if(yt.length>0)for(let Ut=0,Xt=wt.length;Ut<Xt;Ut++){let te=wt[Ut];Zi(Rt,yt,T,te)}Oe&&N.render(T);for(let Ut=0,Xt=wt.length;Ut<Xt;Ut++){let te=wt[Ut];mi(S,T,te,te.viewport)}}else yt.length>0&&Zi(Rt,yt,T,U),Oe&&N.render(T),mi(S,T,U)}Q!==null&&O===0&&(Ft.updateMultisampleRenderTarget(Q),Ft.updateRenderTargetMipmap(Q)),V&&P.end(A),T.isScene===!0&&T.onAfterRender(A,T,U),dt.resetDefaultState(),W=-1,R=null,M.pop(),M.length>0?(E=M[M.length-1],Ft.setTextureUnits(E.state.textureUnits),oe===!0&&tt.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?S=x[x.length-1]:S=null,D!==null&&D.renderEnd()};function Se(T,U,Z,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){let Rt=U.isArrayCamera?ce:Ot;if(!T.frustumCulled||T.intersectsFrustum(Rt)){V&&ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Kt);let yt=rt.update(T),wt=T.material;wt.visible&&S.push(T,yt,wt,Z,ve.z,null,U)}}else if(T.isMesh||T.isLine||T.isPoints){let Rt=U.isArrayCamera?ce:Ot;if(!T.frustumCulled||T.intersectsFrustum(Rt)){let yt=rt.update(T),wt=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ve.copy(T.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),ve.copy(yt.boundingSphere.center)),ve.applyMatrix4(T.matrixWorld).applyMatrix4(Kt)),Array.isArray(wt)){let Ut=yt.groups;for(let Xt=0,te=Ut.length;Xt<te;Xt++){let Pt=Ut[Xt],ee=wt[Pt.materialIndex];ee&&ee.visible&&S.push(T,yt,ee,Z,ve.z,Pt,U)}}else wt.visible&&S.push(T,yt,wt,Z,ve.z,null,U)}}}let St=T.children;for(let Rt=0,yt=St.length;Rt<yt;Rt++)Se(St[Rt],U,Z,V)}function mi(T,U,Z,V){let{opaque:q,transmissive:St,transparent:Rt}=T;E.setupLightsView(Z),oe===!0&&tt.setGlobalState(A.clippingPlanes,Z),V&&ut.viewport($.copy(V)),q.length>0&&Fe(q,U,Z),St.length>0&&Fe(St,U,Z),Rt.length>0&&Fe(Rt,U,Z),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Zi(T,U,Z,V){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let Pt=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new ji(1,1,{generateMipmaps:!0,type:Pt?Pn:sn,minFilter:rs,samples:Math.max(4,Vt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let St=E.state.transmissionRenderTarget[V.id],Rt=V.viewport||$;St.setSize(Rt.z*A.transmissionResolutionScale,Rt.w*A.transmissionResolutionScale);let yt=A.getRenderTarget(),wt=A.getActiveCubeFace(),Ut=A.getActiveMipmapLevel();A.setRenderTarget(St),A.getClearColor(Y),ot=A.getClearAlpha(),ot<1&&A.setClearColor(16777215,.5),A.clear(),Oe&&N.render(Z);let Xt=A.toneMapping;A.toneMapping=kn;let te=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),oe===!0&&tt.setGlobalState(A.clippingPlanes,V),Fe(T,Z,V),Ft.updateMultisampleRenderTarget(St),Ft.updateRenderTargetMipmap(St),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ee=0,Ye=U.length;ee<Ye;ee++){let Te=U[ee],{object:Me,geometry:gi,material:It,group:Ci}=Te;if(It.side===zn&&Me.layers.test(V.layers)){let fe=It.side;It.side=ui,It.needsUpdate=!0,qe(Me,Z,V,gi,It,Ci),It.side=fe,It.needsUpdate=!0,Pt=!0}}Pt===!0&&(Ft.updateMultisampleRenderTarget(St),Ft.updateRenderTargetMipmap(St))}A.setRenderTarget(yt,wt,Ut),A.setClearColor(Y,ot),te!==void 0&&(V.viewport=te),A.toneMapping=Xt}function Fe(T,U,Z){let V=U.isScene===!0?U.overrideMaterial:null;for(let q=0,St=T.length;q<St;q++){let Rt=T[q],{object:yt,geometry:wt,group:Ut}=Rt,Xt=Rt.material;Xt.allowOverride===!0&&V!==null&&(Xt=V),yt.layers.test(Z.layers)&&qe(yt,U,Z,wt,Xt,Ut)}}function qe(T,U,Z,V,q,St){D!==null&&q.isNodeMaterial&&D.setObject(T,q),T.onBeforeRender(A,U,Z,V,q,St),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(A,U,Z,V,T,St),q.transparent===!0&&q.side===zn&&q.forceSinglePass===!1?(q.side=ui,q.needsUpdate=!0,A.renderBufferDirect(Z,U,V,q,T,St),q.side=Bn,q.needsUpdate=!0,A.renderBufferDirect(Z,U,V,q,T,St),q.side=zn):A.renderBufferDirect(Z,U,V,q,T,St),T.onAfterRender(A,U,Z,V,q,St)}function Qe(T){let U=0;for(let Z of T)Z.texture!==null&&U++;return U}function Ji(T,U,Z){U.isScene!==!0&&(U=se);let V=Dt.get(T),q=E.state.lights,St=E.state.shadowsArray,Rt=q.state.version,yt=nt.getParameters(T,q.state,St,U,Z,E.state.lightProbeGridArray),wt=nt.getProgramCacheKey(yt),Ut=V.programs;V.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let Xt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;V.envMap=C.get(T.envMap||V.environment,Xt),V.envMapRotation=V.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ut===void 0&&(T.addEventListener("dispose",Tt),Ut=new Map,V.programs=Ut,V.programVariants=new Map);let te=Ut.get(wt);if(te!==void 0){if(V.currentProgram===te&&V.lightsStateVersion===Rt)return Be(T,yt),te}else yt.uniforms=nt.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,Z,yt),T.onBeforeCompile(yt,A),te=nt.acquireProgram(yt,wt),Ut.set(wt,te),V.uniforms=yt.uniforms;let Pt=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pt.clippingPlanes=tt.uniform),Be(T,yt),V.needsLights=Ja(T),V.lightsStateVersion=Rt,V.needsLights&&(Pt.ambientLightColor.value=q.state.ambient,Pt.lightProbe.value=q.state.probe,Pt.sunLights.value=q.state.sun,Pt.sunLightShadows.value=q.state.sunShadow,Pt.directionalLights.value=q.state.directional,Pt.directionalLightShadows.value=q.state.directionalShadow,Pt.spotLights.value=q.state.spot,Pt.spotLightShadows.value=q.state.spotShadow,Pt.rectAreaLights.value=q.state.rectArea,Pt.ltc_1.value=q.state.rectAreaLTC1,Pt.ltc_2.value=q.state.rectAreaLTC2,Pt.pointLights.value=q.state.point,Pt.pointLightShadows.value=q.state.pointShadow,Pt.hemisphereLights.value=q.state.hemi,Pt.sunShadowMatrix.value=q.state.sunShadowMatrix,Pt.sunShadowCascade.value=q.state.sunShadowCascade,Pt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Pt.spotLightMatrix.value=q.state.spotLightMatrix,Pt.spotLightMap.value=q.state.spotLightMap,Pt.pointShadowMatrix.value=q.state.pointShadowMatrix),V.numLightProbeGrids=Qe(E.state.lightProbeGridArray),V.currentProgram=te,V.uniformsList=null,te}function Er(T,U,Z,V,q){let St=Dt.get(T),Rt=St.currentProgram.id+","+V+","+q,yt=St.programVariants.get(Rt);return yt===void 0?(yt=Ji(T,U,Z),St.programVariants.set(Rt,yt)):(St.currentProgram=yt,St.uniformsList=null,St.outputColorSpace=V,St.toneMapping=q),yt}function je(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=jr.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Be(T,U){let Z=Dt.get(T);Z.outputColorSpace=U.outputColorSpace,Z.batching=U.batching,Z.batchingColor=U.batchingColor,Z.instancing=U.instancing,Z.instancingColor=U.instancingColor,Z.instancingMorph=U.instancingMorph,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function fn(T,U,Z,V,q){U.isScene!==!0&&(U=se),Ft.resetTextureUnits();let St=U.fog,Rt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,yt=Q===null?A.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ie.workingColorSpace,wt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ut=C.get(V.envMap||Rt,wt),Xt=V.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,te=!!Z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pt=!!Z.morphAttributes.position,ee=!!Z.morphAttributes.normal,Ye=!!Z.morphAttributes.color,Te=kn;V.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Te=A.toneMapping);let Me=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,gi=Me!==void 0?Me.length:0,It=Dt.get(V),Ci=E.state.lights;if(oe===!0&&(J===!0||T!==R)){let Pe=T===R&&V.id===W;tt.setState(V,T,Pe)}let fe=!1,Zs=!1;V.version===It.__version?It.needsLights&&It.lightsStateVersion!==Ci.state.version||q.isBatchedMesh&&It.batching===!1||!q.isBatchedMesh&&It.batching===!0||q.isBatchedMesh&&It.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&It.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&It.instancing===!1||!q.isInstancedMesh&&It.instancing===!0||q.isSkinnedMesh&&It.skinning===!1||!q.isSkinnedMesh&&It.skinning===!0||q.isInstancedMesh&&It.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&It.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&It.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&It.instancingMorph===!1&&q.morphTexture!==null||It.envMap!==Ut||V.fog===!0&&It.fog!==St||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==tt.numPlanes||It.numIntersection!==tt.numIntersection)||It.vertexAlphas!==Xt||It.vertexTangents!==te||It.morphTargets!==Pt||It.morphNormals!==ee||It.morphColors!==Ye||It.morphTargetsCount!==gi||It.numLightProbeGrids!==Qe(E.state.lightProbeGridArray)?fe=!0:(It.outputColorSpace!==yt||It.toneMapping!==Te)&&(Zs=!0):(fe=!0,It.__version=V.version);let _i=It.currentProgram;(fe===!0||Zs===!0)&&(_i=Zs===!0?Er(V,U,q,yt,Te):Ji(V,U,q),D&&V.isNodeMaterial&&D.onUpdateProgram(V,_i,It));let $a=!1,vs=!1,Js=!1,le=_i.getUniforms(),hi=It.uniforms;if(ut.useProgram(_i.program)&&($a=!0,vs=!0,Js=!0),V.id!==W&&(W=V.id,vs=!0),$a||R!==T){ut.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),le.setValue(F,"projectionMatrix",T.projectionMatrix),le.setValue(F,"viewMatrix",T.matrixWorldInverse);let si=le.map.cameraPosition;si!==void 0&&si.setValue(F,We.setFromMatrixPosition(T.matrixWorld)),Vt.logarithmicDepthBuffer&&le.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&le.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),R!==T&&(R=T,vs=!0,Js=!0)}if(It.needsLights&&(Ci.state.sunShadowMap.length>0&&le.setValue(F,"sunShadowMap",Ci.state.sunShadowMap,Ft),Ci.state.directionalShadowMap.length>0&&le.setValue(F,"directionalShadowMap",Ci.state.directionalShadowMap,Ft),Ci.state.spotShadowMap.length>0&&le.setValue(F,"spotShadowMap",Ci.state.spotShadowMap,Ft),Ci.state.pointShadowMap.length>0&&le.setValue(F,"pointShadowMap",Ci.state.pointShadowMap,Ft)),q.isSkinnedMesh){le.setOptional(F,q,"bindMatrix"),le.setOptional(F,q,"bindMatrixInverse");let Pe=q.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),le.setValue(F,"boneTexture",Pe.boneTexture,Ft))}q.isBatchedMesh&&(le.setOptional(F,q,"batchingTexture"),le.setValue(F,"batchingTexture",q._matricesTexture,Ft),le.setOptional(F,q,"batchingIdTexture"),le.setValue(F,"batchingIdTexture",q._indirectTexture,Ft),le.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&le.setValue(F,"batchingColorTexture",q._colorsTexture,Ft));let bn=Z.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&j.update(q,Z,_i),(vs||It.receiveShadow!==q.receiveShadow)&&(It.receiveShadow=q.receiveShadow,le.setValue(F,"receiveShadow",q.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(hi.envMapIntensity.value=U.environmentIntensity),hi.dfgLUT!==void 0&&(hi.dfgLUT.value=rM()),vs){if(le.setValue(F,"toneMappingExposure",A.toneMappingExposure),It.needsLights&&To(hi,Js),St&&V.fog===!0&&ht.refreshFogUniforms(hi,St),ht.refreshMaterialUniforms(hi,V,mt,bt,E.state.transmissionRenderTarget[T.id]),It.needsLights&&It.numLightProbeGrids>0){let Pe=v,si=0;for(let Jn of E.state.lightProbeGridArray)Jn.texture!==null&&(Pe.textures[si]=Jn.texture,Pe.min[si]=Jn.boundingBox.min,Pe.max[si]=Jn.boundingBox.max,Pe.resolution[si]=Jn.resolution,si++);for(let Jn in Pe)Pe[Jn].length=si;hi.probesSH.value=Pe.textures,hi.probesMin.value=Pe.min,hi.probesMax.value=Pe.max,hi.probesResolution.value=Pe.resolution}jr.upload(F,je(It),hi,Ft)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(jr.upload(F,je(It),hi,Ft),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&le.setValue(F,"center",q.center),le.setValue(F,"modelViewMatrix",q.modelViewMatrix),le.setValue(F,"normalMatrix",q.normalMatrix),le.setValue(F,"modelMatrix",q.matrixWorld),V.uniformsGroups!==void 0){let Pe=V.uniformsGroups;for(let si=0,Jn=Pe.length;si<Jn;si++){let Ed=Pe[si];at.update(Ed,_i),at.bind(Ed,_i)}}return _i}function To(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Ja(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(T,U,Z){let V=Dt.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Dt.get(T.texture).__webglTexture=U,Dt.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let Z=Dt.get(T);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,Z=0){Q=T,H=U,O=Z;let V=null,q=!1,St=!1;if(T){let yt=Dt.get(T);if(yt.__useDefaultFramebuffer!==void 0){ut.bindFramebuffer(F.FRAMEBUFFER,yt.__webglFramebuffer),$.copy(T.viewport),xt.copy(T.scissor),Et=T.scissorTest,ut.viewport($),ut.scissor(xt),ut.setScissorTest(Et),W=-1;return}else if(yt.__webglFramebuffer===void 0)Ft.setupRenderTarget(T);else if(yt.__hasExternalTextures)Ft.rebindTextures(T,Dt.get(T.texture).__webglTexture,Dt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Xt=T.depthTexture;if(yt.__boundDepthTexture!==Xt){if(Xt!==null&&Dt.has(Xt)&&(T.width!==Xt.image.width||T.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(T)}}let wt=T.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(St=!0);let Ut=Dt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?V=Ut[U][Z]:V=Ut[U],q=!0):T.samples>0&&Ft.useMultisampledRTT(T)===!1?V=Dt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ut)?V=Ut[Z]:V=Ut,$.copy(T.viewport),xt.copy(T.scissor),Et=T.scissorTest}else $.copy(At).multiplyScalar(mt).floor(),xt.copy(Ht).multiplyScalar(mt).floor(),Et=Lt;if(Z!==0&&(V=B),ut.bindFramebuffer(F.FRAMEBUFFER,V)&&ut.drawBuffers(T,V),ut.viewport($),ut.scissor(xt),ut.setScissorTest(Et),q){let yt=Dt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,Z)}else if(St){let yt=U;for(let wt=0;wt<T.textures.length;wt++){let Ut=Dt.get(T.textures[wt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+wt,Ut.__webglTexture,Z,yt)}}else if(T!==null&&Z!==0){let yt=Dt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,yt.__webglTexture,Z)}W=-1};function xs(T){let U=Dt.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=Vt.textureFormatReadable(T.format),U.__typeReadable=Vt.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,Z,V,q,St,Rt,yt=0){if(!(T&&T.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Dt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(wt=wt[Rt],Array.isArray(wt)&&(wt=wt[0])),wt){ut.bindFramebuffer(F.FRAMEBUFFER,wt);try{let Ut=T.textures[yt],Xt=Ut.format,te=Ut.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt);let Pt=xs(Ut);if(Pt.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&Z>=0&&Z<=T.height-q&&F.readPixels(U,Z,V,q,lt.convert(Xt),lt.convert(te),St)}finally{let Ut=Q!==null?Dt.get(Q).__webglFramebuffer:null;ut.bindFramebuffer(F.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(T,U,Z,V,q,St,Rt,yt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Dt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(wt=wt[Rt],Array.isArray(wt)&&(wt=wt[0])),wt)if(U>=0&&U<=T.width-V&&Z>=0&&Z<=T.height-q){ut.bindFramebuffer(F.FRAMEBUFFER,wt);let Ut=T.textures[yt],Xt=Ut.format,te=Ut.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt);let Pt=xs(Ut);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.bufferData(F.PIXEL_PACK_BUFFER,St.byteLength,F.STREAM_READ),F.readPixels(U,Z,V,q,lt.convert(Xt),lt.convert(te),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ye=Q!==null?Dt.get(Q).__webglFramebuffer:null;ut.bindFramebuffer(F.FRAMEBUFFER,Ye);let Te=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Np(F,Te,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,St),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ee),F.deleteSync(Te),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,Z=0){let V=Math.pow(2,-Z),q=Math.floor(T.image.width*V),St=Math.floor(T.image.height*V),Rt=U!==null?U.x:0,yt=U!==null?U.y:0;Ft.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,Rt,yt,q,St),ut.unbindTexture()},this.copyTextureToTexture=function(T,U,Z=null,V=null,q=0,St=0){let Rt,yt,wt,Ut,Xt,te,Pt,ee,Ye,Te=T.isCompressedTexture?T.mipmaps[St]:T.image;if(Z!==null)Rt=Z.max.x-Z.min.x,yt=Z.max.y-Z.min.y,wt=Z.isBox3?Z.max.z-Z.min.z:1,Ut=Z.min.x,Xt=Z.min.y,te=Z.isBox3?Z.min.z:0;else{let le=Math.pow(2,-q);Rt=Math.floor(Te.width*le),yt=Math.floor(Te.height*le),T.isDataArrayTexture?wt=Te.depth:T.isData3DTexture?wt=Math.floor(Te.depth*le):wt=1,Ut=0,Xt=0,te=0}V!==null?(Pt=V.x,ee=V.y,Ye=V.z):(Pt=0,ee=0,Ye=0);let Me=lt.convert(U.format),gi=lt.convert(U.type),It;U.isData3DTexture?(Ft.setTexture3D(U,0),It=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ft.setTexture2DArray(U,0),It=F.TEXTURE_2D_ARRAY):(Ft.setTexture2D(U,0),It=F.TEXTURE_2D),ut.activeTexture(F.TEXTURE0),ut.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),ut.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ut.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Ci=ut.getParameter(F.UNPACK_ROW_LENGTH),fe=ut.getParameter(F.UNPACK_IMAGE_HEIGHT),Zs=ut.getParameter(F.UNPACK_SKIP_PIXELS),_i=ut.getParameter(F.UNPACK_SKIP_ROWS),$a=ut.getParameter(F.UNPACK_SKIP_IMAGES);ut.pixelStorei(F.UNPACK_ROW_LENGTH,Te.width),ut.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Te.height),ut.pixelStorei(F.UNPACK_SKIP_PIXELS,Ut),ut.pixelStorei(F.UNPACK_SKIP_ROWS,Xt),ut.pixelStorei(F.UNPACK_SKIP_IMAGES,te);let vs=T.isDataArrayTexture||T.isData3DTexture,Js=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let le=Dt.get(T),hi=Dt.get(U),bn=Dt.get(le.__renderTarget),Pe=Dt.get(hi.__renderTarget);ut.bindFramebuffer(F.READ_FRAMEBUFFER,bn.__webglFramebuffer),ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let si=0;si<wt;si++)vs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dt.get(T).__webglTexture,q,te+si),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dt.get(U).__webglTexture,St,Ye+si)),F.blitFramebuffer(Ut,Xt,Ut+Rt,Xt+yt,Pt,ee,Pt+Rt,ee+yt,F.DEPTH_BUFFER_BIT,F.NEAREST);ut.bindFramebuffer(F.READ_FRAMEBUFFER,null),ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||Dt.has(T)){let le=Dt.get(T),hi=Dt.get(U);ut.bindFramebuffer(F.READ_FRAMEBUFFER,I),ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let bn=0;bn<wt;bn++)vs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,le.__webglTexture,q,te+bn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,le.__webglTexture,q),Js?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,hi.__webglTexture,St,Ye+bn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,hi.__webglTexture,St),q!==0?F.blitFramebuffer(Ut,Xt,Ut+Rt,Xt+yt,Pt,ee,Pt+Rt,ee+yt,F.COLOR_BUFFER_BIT,F.NEAREST):Js?F.copyTexSubImage3D(It,St,Pt,ee,Ye+bn,Ut,Xt,Rt,yt):F.copyTexSubImage2D(It,St,Pt,ee,Ut,Xt,Rt,yt);ut.bindFramebuffer(F.READ_FRAMEBUFFER,null),ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Js?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(It,St,Pt,ee,Ye,Rt,yt,wt,Me,gi,Te.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(It,St,Pt,ee,Ye,Rt,yt,wt,Me,Te.data):F.texSubImage3D(It,St,Pt,ee,Ye,Rt,yt,wt,Me,gi,Te):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,St,Pt,ee,Rt,yt,Me,gi,Te.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,St,Pt,ee,Te.width,Te.height,Me,Te.data):F.texSubImage2D(F.TEXTURE_2D,St,Pt,ee,Rt,yt,Me,gi,Te);ut.pixelStorei(F.UNPACK_ROW_LENGTH,Ci),ut.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fe),ut.pixelStorei(F.UNPACK_SKIP_PIXELS,Zs),ut.pixelStorei(F.UNPACK_SKIP_ROWS,_i),ut.pixelStorei(F.UNPACK_SKIP_IMAGES,$a),St===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(It),ut.unbindTexture()},this.initRenderTarget=function(T){Dt.get(T).__webglFramebuffer===void 0&&Ft.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ft.setTextureCube(T,0):T.isData3DTexture?Ft.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ft.setTexture2DArray(T,0):Ft.setTexture2D(T,0),ut.unbindTexture()},this.resetState=function(){H=0,O=0,Q=null,ut.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};function ls(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Am(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var Xi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},xa={duration:.5,overwrite:!1,delay:0},wf,fi,Re,xn=1e8,xe=1/xn,_f=Math.PI*2,aM=_f/4,lM=0,Cm=Math.sqrt,cM=Math.cos,hM=Math.sin,ii=function(t){return typeof t=="string"},ze=function(t){return typeof t=="function"},hs=function(t){return typeof t=="number"},ch=function(t){return typeof t>"u"},Xn=function(t){return typeof t=="object"},Wi=function(t){return t!==!1},Ef=function(){return typeof window<"u"},Qc=function(t){return ze(t)||ii(t)},Rm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Mi=Array.isArray,uM=/random\([^)]+\)/g,fM=/,\s*/g,vm=/(?:-?\.?\d|\.)+/gi,Af=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,hf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Cf=/[+-]=-?[.\d]+/,dM=/[^,'"\[\]\s]+/gi,pM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,De,Hn,xf,Rf,on={},ih={},Pm,Im=function(t){return(ih=io(t,on))&&bi},hh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},va=function(t,e){return!e&&console.warn(t)},Lm=function(t,e){return t&&(on[t]=e)&&ih&&(ih[t]=e)||on},ya=function(){return 0},mM={suppressEvents:!0,isStart:!0,kill:!1},jc={suppressEvents:!0,kill:!1},gM={suppressEvents:!0},Pf={},Us=[],vf={},Dm,Gi={},uf={},ym=30,th=[],If="",Lf=function(t){var e=t[0],i,n;if(Xn(e)||ze(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=th.length;n--&&!th[n].targetTest(e););i=th[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new Of(t[n],i)))||t.splice(n,1);return t},Os=function(t){return t._gsap||Lf(vn(t))[0]._gsap},Df=function(t,e,i){return(i=t[e])&&ze(i)?t[e]():ch(i)&&t.getAttribute&&t.getAttribute(e)||i},Li=function(t,e){return(t=t.split(",")).forEach(e)||t},ke=function(t){return Math.round(t*1e5)/1e5||0},Le=function(t){return Math.round(t*1e7)/1e7||0},ur=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},_M=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},nh=function(){var t=Us.length,e=Us.slice(0),i,n;for(vf={},Us.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Nf=function(t){return!!(t._initted||t._startAt||t.add)},Nm=function(t,e,i,n){Us.length&&!fi&&nh(),t.render(e,i,n||!!(fi&&e<0&&Nf(t))),Us.length&&!fi&&nh()},Um=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(dM).length<2?e:ii(t)?t.trim():t},Om=function(t){return t},an=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},xM=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},io=function(t,e){for(var i in e)t[i]=e[i];return t},Sm=function s(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Xn(e[i])?s(t[i]||(t[i]={}),e[i]):e[i]);return t},sh=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},ma=function(t){var e=t.parent||De,i=t.keyframes?xM(Mi(t.keyframes)):an;if(Wi(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},vM=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},Fm=function(t,e,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=t[n],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=o,e.parent=e._dp=t,e},uh=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=e._prev,o=e._next;r?r._next=o:t[i]===e&&(t[i]=o),o?o._prev=r:t[n]===e&&(t[n]=r),e._next=e._prev=e.parent=null},Fs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ar=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},yM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},yf=function(t,e,i,n){return t._startAt&&(fi?t._startAt.revert(jc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},SM=function s(t){return!t||t._ts&&s(t.parent)},Mm=function(t){return t._repeat?no(t._tTime,t=t.duration()+t._rDelay)*t:0},no=function(t,e){var i=Math.floor(t=Le(t/e));return t&&i===t?i-1:i},rh=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},fh=function(t){return t._end=Le(t._start+(t._tDur/Math.abs(t._ts||t._rts||xe)||0))},dh=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Le(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),fh(t),i._dirty||ar(i,t)),t},Bm=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=rh(t.rawTime(),e),(!e._dur||Ta(0,e.totalDuration(),i)-e._tTime>xe)&&e.render(i,!0)),ar(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-xe}},Wn=function(t,e,i,n){return e.parent&&Fs(e),e._start=Le((hs(i)?i:!i&&oh(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:i||t!==De?_n(t,i,e):t._time)+e._delay),e._end=Le(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Fm(t,e,"_first","_last",t._sort?"_start":0),oh(e)||(t._recent=e),n||Bm(t,e),t._ts<0&&dh(t,t._tTime),t},zm=function(t,e){return(on.ScrollTrigger||hh("scrollTrigger",e))&&on.ScrollTrigger.create(e,t)},km=function(t,e,i,n,r){if(zf(t,e,r),!t._initted)return 1;if(!i&&t._pt&&!fi&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Dm!==Hi.frame)return Us.push(t),t._lazy=[r,n],1},MM=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},oh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},bM=function(t,e,i,n){var r=t.ratio,o=e<0||!e&&(!t._start&&MM(t)&&!(!t._initted&&oh(t))||(t._ts<0||t._dp._ts<0)&&!oh(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Ta(0,t._tDur,e),h=no(l,a),t._yoyo&&h&1&&(o=1-o),h!==no(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||fi||n||t._zTime===xe||!e&&t._zTime){if(!t._initted&&km(t,e,n,i,l))return;for(d=t._zTime,t._zTime=e||(i?xe:0),i||(i=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&yf(t,e,i,!0),t._onUpdate&&!i&&rn(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&rn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Fs(t,1),!i&&!fi&&(rn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},TM=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},so=function(t,e,i,n){var r=t._repeat,o=Le(e)||0,a=t._tTime/t._tDur;return a&&!n&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Le(o*(r+1)+t._rDelay*r):o,a>0&&!n&&dh(t,t._tTime=t._tDur*a),t.parent&&fh(t),i||ar(t.parent,t),t},bm=function(t){return t instanceof Si?ar(t):so(t,t._dur)},wM={_start:0,endTime:ya,totalDuration:ya},_n=function s(t,e,i){var n=t.labels,r=t._recent||wM,o=t.duration()>=xn?r.endTime(!1):t._dur,a,l,c;return ii(e)&&(isNaN(e)||e in n)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:i).totalDuration()/100:1)):a<0?(e in n||(n[e]=o),n[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&i&&(l=l/100*(Mi(i)?i[0]:i).totalDuration()),a>1?s(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},ga=function(t,e,i){var n=hs(e[1]),r=(n?2:1)+(t<2?0:1),o=e[r],a,l;if(n&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Wi(l.vars.inherit)&&l.parent;o.immediateRender=Wi(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new He(e[0],o,e[r+1])},Bs=function(t,e){return t||t===0?e(t):e},Ta=function(t,e,i){return i<t?t:i>e?e:i},di=function(t,e){return!ii(t)||!(e=pM.exec(t))?"":e[1]},EM=function(t,e,i){return Bs(i,function(n){return Ta(t,e,n)})},Sf=[].slice,Vm=function(t,e){return t&&Xn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Xn(t[0]))&&!t.nodeType&&t!==Hn},AM=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var r;return ii(n)&&!e||Vm(n,1)?(r=i).push.apply(r,vn(n)):i.push(n)})||i},vn=function(t,e,i){return Re&&!e&&Re.selector?Re.selector(t):ii(t)&&!i&&(xf||!ro())?Sf.call((e||Rf).querySelectorAll(t),0):Mi(t)?AM(t,i):Vm(t)?Sf.call(t,0):t?[t]:[]},Mf=function(t){return t=vn(t)[0]||va("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return vn(e,i.querySelectorAll?i:i===t?va("Invalid scope")||Rf.createElement("div"):t)}},Gm=function(t){return t.sort(function(){return .5-Math.random()})},Hm=function(t){if(ze(t))return t;var e=Xn(t)?t:{each:t},i=lr(e.ease),n=e.from||0,r=parseFloat(e.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=e.axis,h=n,d=n;return ii(n)?h=d={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(h=n[0],d=n[1]),function(u,f,p){var _=(p||e).length,m=o[_],g,y,w,v,S,E,x,M,P;if(!m){if(P=e.grid==="auto"?0:(e.grid||[1,xn])[1],!P){for(x=-xn;x<(x=p[P++].getBoundingClientRect().left)&&P<_;);P<_&&P--}for(m=o[_]=[],g=l?Math.min(P,_)*h-.5:n%P,y=P===xn?0:l?_*d/P-.5:n/P|0,x=0,M=xn,E=0;E<_;E++)w=E%P-g,v=y-(E/P|0),m[E]=S=c?Math.abs(c==="y"?v:w):Cm(w*w+v*v),S>x&&(x=S),S<M&&(M=S);n==="random"&&Gm(m),m.max=x-M,m.min=M,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(P>_?_-1:c?c==="y"?_/P:P:Math.max(P,_/P))||0)*(n==="edges"?-1:1),m.b=_<0?r-_:r,m.u=di(e.amount||e.each)||0,i=i&&_<0?kM(i):i}return _=(m[u]-m.min)/m.max||0,Le(m.b+(i?i(_):_)*m.v)+m.u}},bf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=Le(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(hs(i)?0:di(i))}},Wm=function(t,e){var i=Mi(t),n,r;return!i&&Xn(t)&&(n=i=t.radius||xn,t.values?(t=vn(t.values),(r=!hs(t[0]))&&(n*=n)):t=bf(t.increment)),Bs(e,i?ze(t)?function(o){return r=t(o),Math.abs(r-o)<=n?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=xn,h=0,d=t.length,u,f;d--;)r?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!n||c<=n?t[h]:o,r||h===o||hs(o)?h:h+di(o)}:bf(t))},Xm=function(t,e,i,n){return Bs(Mi(t)?!e:i===!0?!!(i=0):!n,function(){return Mi(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},CM=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(r,o){return o(r)},n)}},RM=function(t,e){return function(i){return t(parseFloat(i))+(e||di(i))}},PM=function(t,e,i){return Ym(t,e,0,1,i)},qm=function(t,e,i){return Bs(i,function(n){return t[~~e(n)]})},IM=function s(t,e,i){var n=e-t;return Mi(t)?qm(t,s(0,t.length),e):Bs(i,function(r){return(n+(r-t)%n)%n+t})},LM=function s(t,e,i){var n=e-t,r=n*2;return Mi(t)?qm(t,s(0,t.length-1),e):Bs(i,function(o){return o=(r+(o-t)%r)%r||0,t+(o>n?r-o:o)})},oo=function(t){return t.replace(uM,function(e){var i=e.indexOf("[")+1,n=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(fM);return Xm(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},Ym=function(t,e,i,n,r){var o=e-t,a=n-i;return Bs(r,function(l){return i+((l-t)/o*a||0)})},DM=function s(t,e,i,n){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=ii(t),a={},l,c,h,d,u;if(i===!0&&(n=1)&&(i=null),o)t={p:t},e={p:e};else if(Mi(t)&&!Mi(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(p){p*=d;var _=Math.min(u,~~p);return h[_](p-_)},i=e}else n||(t=io(Mi(t)?[]:{},t));if(!h){for(l in e)Ff.call(a,t,l,"get",e[l]);r=function(p){return Gf(p,a)||(o?t.p:t)}}}return Bs(i,r)},Tm=function(t,e,i){var n=t.labels,r=xn,o,a,l;for(o in n)a=n[o]-e,a<0==!!i&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},rn=function(t,e,i){var n=t.vars,r=n[e],o=Re,a=t._ctx,l,c,h;if(r)return l=n[e+"Params"],c=n.callbackScope||t,i&&Us.length&&nh(),a&&(Re=a),h=l?r.apply(c,l):r.call(c),Re=o,h},da=function(t){return Fs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!fi),t.progress()<1&&rn(t,"onInterrupt"),t},eo,Zm=[],Jm=function(t){if(t)if(t=!t.name&&t.default||t,Ef()||t.headless){var e=t.name,i=ze(t),n=e&&!i&&t.init?function(){this._props=[]}:t,r={init:ya,render:Gf,add:Ff,kill:$M,modifier:JM,rawVars:0},o={targetTest:0,get:0,getSetter:ph,aliases:{},register:0};if(ro(),t!==n){if(Gi[e])return;an(n,an(sh(t,r),o)),io(n.prototype,io(r,sh(t,o))),Gi[n.prop=e]=n,t.targetTest&&(th.push(n),Pf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Lm(e,n),t.register&&t.register(bi,n,Di)}else Zm.push(t)},be=255,pa={aqua:[0,be,be],lime:[0,be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,be],navy:[0,0,128],white:[be,be,be],olive:[128,128,0],yellow:[be,be,0],orange:[be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[be,0,0],pink:[be,192,203],cyan:[0,be,be],transparent:[be,be,be,0]},ff=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*be+.5|0},$m=function(t,e,i){var n=t?hs(t)?[t>>16,t>>8&be,t&be]:0:pa.black,r,o,a,l,c,h,d,u,f,p;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),pa[t])n=pa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&be,n&be,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&be,t&be]}else if(t.substr(0,3)==="hsl"){if(n=p=t.match(vm),!e)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,n.length>3&&(n[3]*=1),n[0]=ff(l+1/3,r,o),n[1]=ff(l,r,o),n[2]=ff(l-1/3,r,o);else if(~t.indexOf("="))return n=t.match(Af),i&&n.length<4&&(n[3]=1),n}else n=t.match(vm)||pa.transparent;n=n.map(Number)}return e&&!p&&(r=n[0]/be,o=n[1]/be,a=n[2]/be,d=Math.max(r,o,a),u=Math.min(r,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===r?(o-a)/f+(o<a?6:0):d===o?(a-r)/f+2:(r-o)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},Km=function(t){var e=[],i=[],n=-1;return t.split(cs).forEach(function(r){var o=r.match(hr)||[];e.push.apply(e,o),i.push(n+=o.length+1)}),e.c=i,e},wm=function(t,e,i){var n="",r=(t+n).match(cs),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(u){return(u=$m(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),i&&(h=Km(t),l=i.c,l.join(n)!==h.c.join(n)))for(c=t.replace(cs,"1").split(hr),d=c.length-1;a<d;a++)n+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:i).shift());if(!c)for(c=t.split(cs),d=c.length-1;a<d;a++)n+=c[a]+r[a];return n+c[d]},cs=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in pa)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),NM=/hsl[a]?\(/,Uf=function(t){var e=t.join(" "),i;if(cs.lastIndex=0,cs.test(e))return i=NM.test(e),t[1]=wm(t[1],i),t[0]=wm(t[0],i,Km(t[1])),!0},Sa,Hi=(function(){var s=Date.now,t=500,e=33,i=s(),n=i,r=1e3/240,o=r,a=[],l,c,h,d,u,f,p=function _(m){var g=s()-n,y=m===!0,w,v,S,E;if((g>t||g<0)&&(i+=g-e),n+=g,S=n-i,w=S-o,(w>0||y)&&(E=++d.frame,u=S-d.time*1e3,d.time=S=S/1e3,o+=w+(w>=r?0:r-w),v=1),y||(l=c(_)),v)for(f=0;f<a.length;f++)a[f](S,u,E,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Pm&&(!xf&&Ef()&&(Hn=xf=window,Rf=Hn.document||{},on.gsap=bi,(Hn.gsapVersions||(Hn.gsapVersions=[])).push(bi.version),Im(ih||Hn.GreenSockGlobals||!Hn.gsap&&Hn||{}),Zm.forEach(Jm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Sa=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Sa=0,c=ya},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){r=1e3/(m||240),o=d.time*1e3+r},add:function(m,g,y){var w=g?function(v,S,E,x){m(v,S,E,x),d.remove(w)}:m;return d.remove(m),a[y?"unshift":"push"](w),ro(),w},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),ro=function(){return!Sa&&Hi.wake()},re={},UM=/^[\d.\-M][\d.\-,\s]/,OM=/["']/g,FM=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],r=1,o=i.length,a,l,c;r<o;r++)l=i[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[n]=isNaN(c)?c.replace(OM,"").trim():+c,n=l.substr(a+1).trim();return e},BM=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},zM=function(t){var e=(t+"").split("("),i=re[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[FM(e[1])]:BM(t).split(",").map(Um)):re._CE&&UM.test(t)?re._CE("",t):i},kM=function(t){return function(e){return 1-t(1-e)}},lr=function(t,e){return t&&(ze(t)?t:re[t]||zM(t))||e},fr=function(t,e,i,n){i===void 0&&(i=function(l){return 1-e(1-l)}),n===void 0&&(n=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:i,easeInOut:n},o;return Li(t,function(a){re[a]=on[a]=r,re[o=a.toLowerCase()]=i;for(var l in r)re[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=re[a+"."+l]=r[l]}),r},Qm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},df=function s(t,e,i){var n=e>=1?e:1,r=(i||(t?.3:.45))/(e<1?e:1),o=r/_f*(Math.asin(1/n)||0),a=function(h){return h===1?1:n*Math.pow(2,-10*h)*hM((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Qm(a);return r=_f/r,l.config=function(c,h){return s(t,c,h)},l},pf=function s(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},n=t==="out"?i:t==="in"?function(r){return 1-i(1-r)}:Qm(i);return n.config=function(r){return s(t,r)},n};Li("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;fr(s+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});re.Linear.easeNone=re.none=re.Linear.easeIn;fr("Elastic",df("in"),df("out"),df());(function(s,t){var e=1/t,i=2*e,n=2.5*e,r=function(a){return a<e?s*a*a:a<i?s*Math.pow(a-1.5/t,2)+.75:a<n?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};fr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);fr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});fr("Circ",function(s){return-(Cm(1-s*s)-1)});fr("Sine",function(s){return s===1?1:-cM(s*aM)+1});fr("Back",pf("in"),pf("out"),pf());re.SteppedEase=re.steps=on.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),r=e?1:0,o=1-xe;return function(a){return((n*Ta(0,o,a)|0)+r)*i}}};xa.ease=re["quad.out"];Li("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return If+=s+","+s+"Params,"});var Of=function(t,e){this.id=lM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Df,this.set=e?e.getSetter:ph},Ma=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,so(this,+e.duration,1,1),this.data=e.data,Re&&(this._ctx=Re,Re.data.push(this)),Sa||Hi.wake()}var t=s.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,so(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(ro(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(dh(this,i),!r._dp||r.parent||Bm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Wn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===xe||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Nm(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Mm(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Mm(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?no(this._tTime,r)+1:1},t.timeScale=function(i,n){if(!arguments.length)return this._rts===-xe?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?rh(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+i||0,this._ts=this._ps||i===-xe?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(Ta(-Math.abs(this._delay),a,r),n!==!1),fh(this),yM(this)},t.paused=function(i){if(!arguments.length)return this._ps;if(this._ps!==i)if(this._ps=i,i)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{ro(),this._ts=this._rts;var n=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==xe,o;if(r)for(this._tTime-=xe,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=n+xe){r=!1;break}o=o._next}this.totalTime(n,r)}return this},t.startTime=function(i){if(arguments.length){this._start=Le(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Wn(n,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Wi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?rh(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=gM);var n=fi;return fi=i,Nf(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),fi=n,this},t.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,bm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,bm(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(_n(this,i),Wi(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Wi(n)),this._dur||(this._zTime=-xe),this},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-xe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-xe,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-xe)},t.eventCallback=function(i,n,r){var o=this.vars;return arguments.length>1?(n?(o[i]=n,r&&(o[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},t.then=function(i){var n=this,r=n._prom;return new Promise(function(o){var a=ze(i)?i:Om,l=function(){var h=n.then;n.then=null,r&&r(),ze(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=h),o(a),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},t.kill=function(){da(this)},s})();an(Ma.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xe,_prom:0,_ps:!1,_rts:1});var Si=(function(s){Am(t,s);function t(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=Wi(i.sortChildren),De&&Wn(i.parent||De,ls(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&zm(ls(r),i.scrollTrigger),r}var e=t.prototype;return e.to=function(n,r,o){return ga(0,arguments,this),this},e.from=function(n,r,o){return ga(1,arguments,this),this},e.fromTo=function(n,r,o,a){return ga(2,arguments,this),this},e.set=function(n,r,o){return r.duration=0,r.parent=this,ma(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new He(n,r,_n(this,o),1),this},e.call=function(n,r,o){return Wn(this,He.delayedCall(0,n,r),o)},e.staggerTo=function(n,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new He(n,o,_n(this,l)),this},e.staggerFrom=function(n,r,o,a,l,c,h){return o.runBackwards=1,ma(o).immediateRender=Wi(o.immediateRender),this.staggerTo(n,r,o,a,l,c,h)},e.staggerFromTo=function(n,r,o,a,l,c,h,d){return a.startAt=o,ma(a).immediateRender=Wi(a.immediateRender),this.staggerTo(n,r,a,l,c,h,d)},e.render=function(n,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:Le(n),d=this._zTime<0!=n<0&&(this._initted||!c),u,f,p,_,m,g,y,w,v,S,E,x;if(this!==De&&h>l&&n>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,n+=this._time-a),u=h,v=this._start,w=this._ts,g=!w,d&&(c||(a=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,r,o);if(u=Le(h%m),h===l?(_=this._repeat,u=c):(S=Le(h/m),_=~~S,_&&_===S&&(u=c,_--),u>c&&(u=c)),S=no(this._tTime,m),!a&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),E&&_&1&&(u=c-u,x=1),_!==S&&!this._lock){var M=E&&S&1,P=M===(E&&_&1);if(_<S&&(M=!M),a=M?0:h%c?c:h,this._lock=1,this.render(a||(x?0:Le(_*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&rn(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,S=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=M?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=TM(this,Le(a),Le(u)),y&&(h-=u-(u=y._start))),this._tTime=h,this._time=u,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&h&&c&&!r&&!S&&(rn(this,"onStart"),this._tTime!==h))return this;if(u>=a&&n>=0)for(f=this._first;f;){if(p=f._next,(f._act||u>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,r,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,o),u!==this._time||!this._ts&&!g){y=0,p&&(h+=this._zTime=-xe);break}}f=p}else{f=this._last;for(var A=n<0?n:u;f;){if(p=f._prev,(f._act||A<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,r,o);if(f.render(f._ts>0?(A-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(A-f._start)*f._ts,r,o||fi&&Nf(f)),u!==this._time||!this._ts&&!g){y=0,p&&(h+=this._zTime=A?-xe:xe);break}}f=p}}if(y&&!r&&(this.pause(),y.render(u>=a?0:-xe)._zTime=u>=a?1:-1,this._ts))return this._start=v,fh(this),this.render(n,r,o);this._onUpdate&&!r&&rn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Fs(this,1),!r&&!(n<0&&!a)&&(h||a||!l)&&(rn(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,r){var o=this;if(hs(r)||(r=_n(this,r,n)),!(n instanceof Ma)){if(Mi(n))return n.forEach(function(a){return o.add(a,r)}),this;if(ii(n))return this.addLabel(n,r);if(ze(n))n=He.delayedCall(0,n);else return this}return this!==n?Wn(this,n,r):this},e.getChildren=function(n,r,o,a){n===void 0&&(n=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-xn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof He?r&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(n){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===n)return r[o]},e.remove=function(n){return ii(n)?this.removeLabel(n):ze(n)?this.killTweensOf(n):(n.parent===this&&uh(this,n),n===this._recent&&(this._recent=this._last),ar(this))},e.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Le(Hi.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},e.addLabel=function(n,r){return this.labels[n]=_n(this,r),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,r,o){var a=He.delayedCall(0,r||ya,o);return a.data="isPause",this._hasPause=1,Wn(this,a,_n(this,n))},e.removePause=function(n){var r=this._first;for(n=_n(this,n);r;)r._start===n&&r.data==="isPause"&&Fs(r),r=r._next},e.killTweensOf=function(n,r,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)Ns!==a[l]&&a[l].kill(n,r);return this},e.getTweensOf=function(n,r){for(var o=[],a=vn(n),l=this._first,c=hs(r),h;l;)l instanceof He?_M(l._targets,a)&&(c?(!Ns||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(n,r){r=r||{};var o=this,a=_n(o,n),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,p=He.to(o,an({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||xe,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&so(p,m,0,1).render(p._time,!0,!0),f=1}h&&h.apply(p,d||[])}},r));return u?p.render(0):p},e.tweenFromTo=function(n,r,o){return this.tweenTo(r,an({startAt:{time:_n(this,n)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),Tm(this,_n(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),Tm(this,_n(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+xe)},e.shiftChildren=function(n,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(n=Le(n);a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=n);return ar(this)},e.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),ar(this)},e.totalDuration=function(n){var r=0,o=this,a=o._last,l=xn,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Wn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Le(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;so(o,o===De&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(n){if(De._ts&&(Nm(De,rh(n,De)),Dm=Hi.frame),Hi.frame>=ym){ym+=Xi.autoSleep||120;var r=De._first;if((!r||!r._ts)&&Xi.autoSleep&&Hi._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Hi.sleep()}}},t})(Ma);an(Si.prototype,{_lock:0,_hasPause:0,_forcing:0});var VM=function(t,e,i,n,r,o,a){var l=new Di(this._pt,t,e,0,1,Vf,null,r),c=0,h=0,d,u,f,p,_,m,g,y;for(l.b=i,l.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=oo(n)),o&&(y=[i,n],o(y,t,e),i=y[0],n=y[1]),u=i.match(hf)||[];d=hf.exec(n);)p=d[0],_=n.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),p!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:p.charAt(1)==="="?ur(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=hf.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(Cf.test(n)||g)&&(l.e=0),this._pt=l,l},Ff=function(t,e,i,n,r,o,a,l,c,h){ze(n)&&(n=n(r||0,t,o));var d=t[e],u=i!=="get"?i:ze(d)?c?t[e.indexOf("set")||!ze(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=ze(d)?c?qM:tg:kf,p;if(ii(n)&&(~n.indexOf("random(")&&(n=oo(n)),n.charAt(1)==="="&&(p=ur(u,n)+(di(u)||0),(p||p===0)&&(n=p))),!h||u!==n||Tf)return!isNaN(u*n)&&n!==""?(p=new Di(this._pt,t,e,+u||0,n-(u||0),typeof d=="boolean"?ZM:eg,0,f),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!d&&!(e in t)&&hh(e,n),VM.call(this,t,e,u,n,f,l||Xi.stringFilter,c))},GM=function(t,e,i,n,r){if(ze(t)&&(t=_a(t,r,e,i,n)),!Xn(t)||t.style&&t.nodeType||Mi(t)||Rm(t))return ii(t)?_a(t,r,e,i,n):t;var o={},a;for(a in t)o[a]=_a(t[a],r,e,i,n);return o},Bf=function(t,e,i,n,r,o){var a,l,c,h;if(Gi[t]&&(a=new Gi[t]).init(r,a.rawVars?e[t]:GM(e[t],n,r,o,i),i,n,o)!==!1&&(i._pt=l=new Di(i._pt,r,t,0,1,a.render,a,0,a.priority),i!==eo))for(c=i._ptLookup[i._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Ns,Tf,zf=function s(t,e,i){var n=t.vars,r=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,d=n.yoyoEase,u=n.keyframes,f=n.autoRevert,p=t._dur,_=t._startAt,m=t._targets,g=t.parent,y=g&&g.data==="nested"?g.vars.targets:m,w=t._overwrite==="auto"&&!wf,v=t.timeline,S=n.easeReverse||d,E,x,M,P,A,L,D,B,I,z,H,O,Q;if(v&&(!u||!r)&&(r="none"),t._ease=lr(r,xa.ease),t._rEase=S&&(lr(S)||t._ease),t._from=!v&&!!n.runBackwards,t._from&&(t.ratio=1),!v||u&&!n.stagger){if(B=m[0]?Os(m[0]).harness:0,O=B&&n[B.prop],E=sh(n,Pf),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&p?jc:mM),_._lazy=0),o){if(Fs(t._startAt=He.set(m,an({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Wi(l),startAt:null,delay:0,onUpdate:c&&function(){return rn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(fi||!a&&!f)&&t._startAt.revert(jc),a&&p&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(h&&p&&!_){if(e&&(a=!1),M=an({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Wi(l),immediateRender:a,stagger:0,parent:g},E),O&&(M[B.prop]=O),Fs(t._startAt=He.set(m,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(fi?t._startAt.revert(jc):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,xe,xe);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Wi(l)||l&&!p,x=0;x<m.length;x++){if(A=m[x],D=A._gsap||Lf(m)[x]._gsap,t._ptLookup[x]=z={},vf[D.id]&&Us.length&&nh(),H=y===m?x:y.indexOf(A),B&&(I=new B).init(A,O||E,t,H,y)!==!1&&(t._pt=P=new Di(t._pt,A,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(W){z[W]=P}),I.priority&&(L=1)),!B||O)for(M in E)Gi[M]&&(I=Bf(M,E,t,H,A,y))?I.priority&&(L=1):z[M]=P=Ff.call(t,A,M,"get",E[M],H,y,0,n.stringFilter);t._op&&t._op[x]&&t.kill(A,t._op[x]),w&&t._pt&&(Ns=t,De.killTweensOf(A,z,t.globalTime(e)),Q=!t.parent,Ns=0),t._pt&&l&&(vf[D.id]=1)}L&&Hf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Q,u&&e<=0&&v.render(xn,!0,!0)},HM=function(t,e,i,n,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Tf=1,t.vars[e]="+=0",zf(t,a),Tf=0,l?va(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(n||n===0)&&!r?n:h.s+(n||0)+o*h.c,h.c=i-h.s,d.e&&(d.e=ke(i)+di(d.e)),d.b&&(d.b=h.s+di(d.b))},WM=function(t,e){var i=t[0]?Os(t[0]).harness:0,n=i&&i.aliases,r,o,a,l;if(!n)return e;r=io({},e);for(o in n)if(o in r)for(l=n[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},XM=function(t,e,i,n){var r=e.ease||n||"power1.inOut",o,a;if(Mi(e))a=i[t]||(i[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},_a=function(t,e,i,n,r){return ze(t)?t.call(e,i,n,r):ii(t)&&~t.indexOf("random(")?oo(t):t},ah=If+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",jm={};Li(ah+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return jm[s]=1});ah=ah.split(",");var He=(function(s){Am(t,s);function t(i,n,r,o){var a;typeof n=="number"&&(r.duration=n,n=r,r=null),a=s.call(this,o?n:ma(n))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=n.parent||De,y=(Mi(i)||Rm(i)?hs(i[0]):"length"in n)?[i]:vn(i),w,v,S,E,x,M,P,A;if(a._targets=y.length?Lf(y):va("GSAP target "+i+" not found. https://gsap.com",!Xi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||u||Qc(c)||Qc(h)){n=a.vars;var L=n.easeReverse||n.yoyoEase;if(w=a.timeline=new Si({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:y}),w.kill(),w.parent=w._dp=ls(a),w._start=0,u||Qc(c)||Qc(h)){if(E=y.length,P=u&&Hm(u),Xn(u))for(x in u)~ah.indexOf(x)&&(A||(A={}),A[x]=u[x]);for(v=0;v<E;v++)S=sh(n,jm),S.stagger=0,L&&(S.easeReverse=L),A&&io(S,A),M=y[v],S.duration=+_a(c,ls(a),v,M,y),S.delay=(+_a(h,ls(a),v,M,y)||0)-a._delay,!u&&E===1&&S.delay&&(a._delay=h=S.delay,a._start+=h,S.delay=0),w.to(M,S,P?P(v,M,y):0),w._ease=re.none;w.duration()?c=h=0:a.timeline=0}else if(p){ma(an(w.vars.defaults,{ease:"none"})),w._ease=lr(p.ease||n.ease||"none");var D=0,B,I,z;if(Mi(p))p.forEach(function(H){return w.to(y,H,">")}),w.duration();else{S={};for(x in p)x==="ease"||x==="easeEach"||XM(x,p[x],S,p.easeEach);for(x in S)for(B=S[x].sort(function(H,O){return H.t-O.t}),D=0,v=0;v<B.length;v++)I=B[v],z={ease:I.e,duration:(I.t-(v?B[v-1].t:0))/100*c},z[x]=I.v,w.to(y,z,D),D+=z.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||a.duration(c=w.duration())}else a.timeline=0;return f===!0&&!wf&&(Ns=ls(a),De.killTweensOf(y),Ns=0),Wn(g,ls(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(d||!c&&!p&&a._start===Le(g._time)&&Wi(d)&&SM(ls(a))&&g.data!=="nested")&&(a._tTime=-xe,a.render(Math.max(0,-h)||0)),m&&zm(ls(a),m),a}var e=t.prototype;return e.render=function(n,r,o){var a=this._time,l=this._tDur,c=this._dur,h=n<0,d=n>l-xe&&!h?l:n<xe?0:n,u,f,p,_,m,g,y,w;if(!c)bM(this,n,r,o);else if(d!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,w=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+n,r,o);if(u=Le(d%_),d===l?(p=this._repeat,u=c):(m=Le(d/_),p=~~m,p&&p===m?(u=c,p--):u>c&&(u=c)),g=this._yoyo&&p&1,g&&(u=c-u),m=no(this._tTime,_),u===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Le(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(km(this,h?n:u,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(n,r,o)}if(this._rEase){var v=u<a;if(v!==this._inv){var S=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=S?(v?-1:1)/S:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(u/c);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!m&&(rn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;w&&w.render(n<0?n:w._dur*w._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(h&&yf(this,n,r,o),rn(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&rn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&yf(this,n,!0,!0),(n||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Fs(this,1),!r&&!(h&&!a)&&(d||a||g)&&(rn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},e.resetTo=function(n,r,o,a,l){Sa||Hi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||zf(this,c),h=this._ease(c/this._dur),HM(this,n,r,o,a,h,c,l)?this.resetTo(n,r,o,a,1):(dh(this,0),this.parent||Fm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?da(this):this.scrollTrigger&&this.scrollTrigger.kill(!!fi),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Ns&&Ns.vars.overwrite!==!0)._first||da(this),this.parent&&o!==this.timeline.totalDuration()&&so(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?vn(n):a,c=this._ptLookup,h=this._pt,d,u,f,p,_,m,g;if((!r||r==="all")&&vM(a,l))return r==="all"&&(this._pt=0),da(this);for(d=this._op=this._op||[],r!=="all"&&(ii(r)&&(_={},Li(r,function(y){return _[y]=1}),r=_),r=WM(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],r==="all"?(d[g]=r,p=u,f={}):(f=d[g]=d[g]||{},p=r);for(_ in p)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&uh(this,m,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&da(this),this},t.to=function(n,r){return new t(n,r,arguments[2])},t.from=function(n,r){return ga(1,arguments)},t.delayedCall=function(n,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(n,r,o){return ga(2,arguments)},t.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(n,r)},t.killTweensOf=function(n,r,o){return De.killTweensOf(n,r,o)},t})(Ma);an(He.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Li("staggerTo,staggerFrom,staggerFromTo",function(s){He[s]=function(){var t=new Si,e=Sf.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var kf=function(t,e,i){return t[e]=i},tg=function(t,e,i){return t[e](i)},qM=function(t,e,i,n){return t[e](n.fp,i)},YM=function(t,e,i){return t.setAttribute(e,i)},ph=function(t,e){return ze(t[e])?tg:ch(t[e])&&t.setAttribute?YM:kf},eg=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ZM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Vf=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},Gf=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},JM=function(t,e,i,n){for(var r=this._pt,o;r;)o=r._next,r.p===n&&r.modifier(t,e,i),r=o},$M=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?uh(this,e,"_pt"):e.dep||(i=1),e=n;return!i},KM=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},Hf=function(t){for(var e=t._pt,i,n,r,o;e;){for(i=e._next,n=r;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:o)?e._prev._next=e:r=e,(e._next=n)?n._prev=e:o=e,e=i}t._pt=r},Di=(function(){function s(e,i,n,r,o,a,l,c,h){this.t=i,this.s=r,this.c=o,this.p=n,this.r=a||eg,this.d=l||this,this.set=c||kf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=KM,this.m=i,this.mt=r,this.tween=n},s})();Li(If+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Pf[s]=1});on.TweenMax=on.TweenLite=He;on.TimelineLite=on.TimelineMax=Si;De=new Si({sortChildren:!1,defaults:xa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xi.stringFilter=Uf;var cr=[],eh={},QM=[],Em=0,jM=0,mf=function(t){return(eh[t]||QM).map(function(e){return e()})},ba=function(){var t=Date.now(),e=[];t-Em>2&&(mf("matchMediaInit"),cr.forEach(function(i){var n=i.queries,r=i.conditions,o,a,l,c;for(a in n)o=Hn.matchMedia(n[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(i.revert(),l&&e.push(i))}),mf("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Em=t,mf("matchMedia"))},ig=(function(){function s(e,i){this.selector=i&&Mf(i),this.data=[],this._r=[],this.isReverted=!1,this.id=jM++,e&&this.add(e)}var t=s.prototype;return t.add=function(i,n,r){ze(i)&&(r=n,n=i,i=ze);var o=this,a=function(){var c=Re,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=Mf(r)),Re=o,d=n.apply(o,arguments),ze(d)&&o._r.push(d),Re=c,o.selector=h,o.isReverted=!1,d};return o.last=a,i===ze?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var n=Re;Re=null,i(this),Re=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof He&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var r=this;if(i?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof Si?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof He)&&c.revert&&c.revert(i);r._r.forEach(function(h){return h(i,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n){for(var o=cr.length;o--;)cr[o].id===this.id&&cr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(ba):a.removeEventListener("change",ba)}),this._mqs=null}},t.revert=function(i){this.kill(i||{})},s})(),tb=(function(){function s(e){this.contexts=[],this.scope=e,Re&&Re.data.push(this)}var t=s.prototype;return t.add=function(i,n,r){Xn(i)||(i={matches:i});var o=new ig(0,r||this.scope),a=o.conditions={},l,c,h;Re&&!o.selector&&(o.selector=Re.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?h=1:(l=Hn.matchMedia(i[c]),l&&(cr.indexOf(o)<0&&cr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(ba):l.addEventListener("change",ba),(o._mqs||(o._mqs=[])).push(l)));return h&&n(o,function(d){return o.add(null,d)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s})(),lh={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return Jm(n)})},timeline:function(t){return new Si(t)},getTweensOf:function(t,e){return De.getTweensOf(t,e)},getProperty:function(t,e,i,n){ii(t)&&(t=vn(t)[0]);var r=Os(t||{}).get,o=i?Om:Um;return i==="native"&&(i=""),t&&(e?o((Gi[e]&&Gi[e].get||r)(t,e,i,n)):function(a,l,c){return o((Gi[a]&&Gi[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,i){if(t=vn(t),t.length>1){var n=t.map(function(h){return bi.quickSetter(h,e,i)}),r=n.length;return function(h){for(var d=r;d--;)n[d](h)}}t=t[0]||{};var o=Gi[e],a=Os(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;eo._pt=0,d.init(t,i?h+i:h,eo,0,[t]),d.render(1,d),eo._pt&&Gf(1,eo)}:a.set(t,l);return o?c:function(h){return c(t,l,i?h+i:h,a,1)}},quickTo:function(t,e,i){var n,r=bi.to(t,an((n={},n[e]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return De.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=lr(t.ease,xa.ease)),Sm(xa,t||{})},config:function(t){return Sm(Xi,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,r=t.defaults,o=t.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!Gi[a]&&!on[a]&&va(e+" effect requires "+a+" plugin.")}),uf[e]=function(a,l,c){return i(vn(a),an(l||{},r),c)},o&&(Si.prototype[e]=function(a,l,c){return this.add(uf[e](a,Xn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){re[t]=lr(e)},parseEase:function(t,e){return arguments.length?lr(t,e):re},getById:function(t){return De.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Si(t),n,r;for(i.smoothChildTiming=Wi(t.smoothChildTiming),De.remove(i),i._dp=0,i._time=i._tTime=De._time,n=De._first;n;)r=n._next,(e||!(!n._dur&&n instanceof He&&n.vars.onComplete===n._targets[0]))&&Wn(i,n,n._start-n._delay),n=r;return Wn(De,i,0),i},context:function(t,e){return t?new ig(t,e):Re},matchMedia:function(t){return new tb(t)},matchMediaRefresh:function(){return cr.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||ba()},addEventListener:function(t,e){var i=eh[t]||(eh[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=eh[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:IM,wrapYoyo:LM,distribute:Hm,random:Xm,snap:Wm,normalize:PM,getUnit:di,clamp:EM,splitColor:$m,toArray:vn,selector:Mf,mapRange:Ym,pipe:CM,unitize:RM,interpolate:DM,shuffle:Gm},install:Im,effects:uf,ticker:Hi,updateRoot:Si.updateRoot,plugins:Gi,globalTimeline:De,core:{PropTween:Di,globals:Lm,Tween:He,Timeline:Si,Animation:Ma,getCache:Os,_removeLinkedListItem:uh,reverting:function(){return fi},context:function(t){return t&&Re&&(Re.data.push(t),t._ctx=Re),Re},suppressOverwrites:function(t){return wf=t}}};Li("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return lh[s]=He[s]});Hi.add(Si.updateRoot);eo=lh.to({},{duration:0});var eb=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},ib=function(t,e){var i=t._targets,n,r,o;for(n in e)for(r=i.length;r--;)o=t._ptLookup[r][n],o&&(o=o.d)&&(o._pt&&(o=eb(o,n)),o&&o.modifier&&o.modifier(e[n],t,i[r],n))},gf=function(t,e){return{name:t,headless:1,rawVars:1,init:function(n,r,o){o._onInit=function(a){var l,c;if(ii(r)&&(l={},Li(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}ib(a,r)}}}},bi=lh.registerPlugin({name:"attr",init:function(t,e,i,n,r){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],n,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)fi?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},gf("roundProps",bf),gf("modifiers"),gf("snap",Wm))||lh;He.version=Si.version=bi.version="3.15.1";Pm=1;Ef()&&ro();var nb=re.Power0,sb=re.Power1,rb=re.Power2,ob=re.Power3,ab=re.Power4,lb=re.Linear,cb=re.Quad,hb=re.Cubic,ub=re.Quart,fb=re.Quint,db=re.Strong,pb=re.Elastic,mb=re.Back,gb=re.SteppedEase,_b=re.Bounce,xb=re.Sine,vb=re.Expo,yb=re.Circ;var ng,zs,lo,Jf,gr,Sb,sg,$f,Mb=function(){return typeof window<"u"},fs={},mr=180/Math.PI,co=Math.PI/180,ao=Math.atan2,rg=1e8,Kf=/([A-Z])/g,bb=/(left|right|width|margin|padding|x)/i,Tb=/[\s,\(]\S/,qn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Xf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},wb=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Eb=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ab=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Cb=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},dg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},pg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Rb=function(t,e,i){return t.style[e]=i},Pb=function(t,e,i){return t.style.setProperty(e,i)},Ib=function(t,e,i){return t._gsap[e]=i},Lb=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Db=function(t,e,i,n,r){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(r,o)},Nb=function(t,e,i,n,r){var o=t._gsap;o[e]=i,o.renderTransform(r,o)},Ne="transform",qi=Ne+"Origin",Ub=function s(t,e){var i=this,n=this.target,r=n.style,o=n._gsap;if(t in fs&&r){if(this.tfm=this.tfm||{},t!=="transform")t=qn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=us(n,a)}):this.tfm[t]=o.x?o[t]:us(n,t),t===qi&&(this.tfm.zOrigin=o.zOrigin);else return qn.transform.split(",").forEach(function(a){return s.call(i,a,e)});if(this.props.indexOf(Ne)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(qi,e,"")),t=Ne}(r||e)&&this.props.push(t,e,r[t])},mg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Ob=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?i[t[r]]=t[r+2]:i.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Kf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=$f(),(!r||!r.isStart)&&!i[Ne]&&(mg(i),n.zOrigin&&i[qi]&&(i[qi]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},gg=function(t,e){var i={target:t,props:[],revert:Ob,save:Ub};return t._gsap||bi.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(n){return i.save(n)}),i},_g,qf=function(t,e){var i=zs.createElementNS?zs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):zs.createElement(t);return i&&i.style?i:zs.createElement(t)},ln=function s(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(Kf,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&s(t,ho(e)||e,1)||""},og="O,Moz,ms,Ms,Webkit".split(","),ho=function(t,e,i){var n=e||gr,r=n.style,o=5;if(t in r&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(og[o]+t in r););return o<0?null:(o===3?"ms":o>=0?og[o]:"")+t},Yf=function(){Mb()&&window.document&&(ng=window,zs=ng.document,lo=zs.documentElement,gr=qf("div")||{style:{}},Sb=qf("div"),Ne=ho(Ne),qi=Ne+"Origin",gr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_g=!!ho("perspective"),$f=bi.core.reverting,Jf=1)},ag=function(t){var e=t.ownerSVGElement,i=qf("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0),r;n.style.display="block",i.appendChild(n),lo.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),lo.removeChild(i),r},lg=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},xg=function(t){var e,i;try{e=t.getBBox()}catch{e=ag(t),i=1}return e&&(e.width||e.height)||i||(e=ag(t)),e&&!e.width&&!e.x&&!e.y?{x:+lg(t,["x","cx","x1"])||0,y:+lg(t,["y","cy","y1"])||0,width:0,height:0}:e},vg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&xg(t))},Vs=function(t,e){if(e){var i=t.style,n;e in fs&&e!==qi&&(e=Ne),i.removeProperty?(n=e.substr(0,2),(n==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(n==="--"?e:e.replace(Kf,"-$1").toLowerCase())):i.removeAttribute(e)}},ks=function(t,e,i,n,r,o){var a=new Di(t._pt,e,i,0,1,o?pg:dg);return t._pt=a,a.b=n,a.e=r,t._props.push(i),a},cg={deg:1,rad:1,turn:1},Fb={grid:1,flex:1},Gs=function s(t,e,i,n){var r=parseFloat(i)||0,o=(i+"").trim().substr((r+"").length)||"px",a=gr.style,l=bb.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=n==="px",f=n==="%",p,_,m,g;if(n===o||!r||cg[n]||cg[o])return r;if(o!=="px"&&!u&&(r=s(t,e,i,"px")),g=t.getCTM&&vg(t),(f||o==="%")&&(fs[e]||~e.indexOf("adius")))return p=g?t.getBBox()[l?"width":"height"]:t[h],ke(f?r/p*d:r/100*p);if(a[l?"width":"height"]=d+(u?o:n),_=n!=="rem"&&~e.indexOf("adius")||n==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===zs||!_.appendChild)&&(_=zs.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Hi.time&&!m.uncache)return ke(r/m.width*d);if(f&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=d+n,p=t[h],y?t.style[e]=y:Vs(t,e)}else(f||o==="%")&&!Fb[ln(_,"display")]&&(a.position=ln(t,"position")),_===t&&(a.position="static"),_.appendChild(gr),p=gr[h],_.removeChild(gr),a.position="absolute";return l&&f&&(m=Os(_),m.time=Hi.time,m.width=_[h]),ke(u?p*r/d:p&&r?d/p*r:0)},us=function(t,e,i,n){var r;return Jf||Yf(),e in qn&&e!=="transform"&&(e=qn[e],~e.indexOf(",")&&(e=e.split(",")[0])),fs[e]&&e!=="transform"?(r=Aa(t,n),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:gh(ln(t,qi))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=mh[e]&&mh[e](t,e,i)||ln(t,e)||Df(t,e)||(e==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Gs(t,e,r,i)+i:r},Bb=function(t,e,i,n){if(!i||i==="none"){var r=ho(e,t,1),o=r&&ln(t,r,1);o&&o!==i?(e=r,i=o):e==="borderColor"&&(i=ln(t,"borderTopColor"))}var a=new Di(this._pt,t.style,e,0,1,Vf),l=0,c=0,h,d,u,f,p,_,m,g,y,w,v,S;if(a.b=i,a.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=ln(t,n.substring(4,n.indexOf(")")))),n==="auto"&&(_=t.style[e],t.style[e]=n,n=ln(t,e)||n,_?t.style[e]=_:Vs(t,e)),h=[i,n],Uf(h),i=h[0],n=h[1],u=i.match(hr)||[],S=n.match(hr)||[],S.length){for(;d=hr.exec(n);)m=d[0],y=n.substring(l,d.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),m!==(_=u[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),m.charAt(1)==="="&&(m=ur(f,m)+v),g=parseFloat(m),w=m.substr((g+"").length),l=hr.lastIndex-w.length,w||(w=w||Xi.units[e]||v,l===n.length&&(n+=w,a.e+=w)),v!==w&&(f=Gs(t,e,_,w)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:f,c:g-f,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=e==="display"&&n==="none"?pg:dg;return Cf.test(n)&&(a.e=0),this._pt=a,a},hg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},zb=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=hg[i]||i,e[1]=hg[n]||n,e.join(" ")},kb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,r=e.u,o=i._gsap,a,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],fs[a]&&(l=1,a=a==="transformOrigin"?qi:Ne),Vs(i,a);l&&(Vs(i,Ne),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Aa(i,1),o.uncache=1,mg(n)))}},mh={clearProps:function(t,e,i,n,r){if(r.data!=="isFromStart"){var o=t._pt=new Di(t._pt,e,i,0,0,kb);return o.u=n,o.pr=-10,o.tween=r,t._props.push(i),1}}},Ea=[1,0,0,1,0,0],yg={},Sg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ug=function(t){var e=ln(t,Ne);return Sg(e)?Ea:e.substr(7).match(Af).map(ke)},Qf=function(t,e){var i=t._gsap||Os(t),n=t.style,r=ug(t),o,a,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ea:r):(r===Ea&&!t.offsetParent&&t!==lo&&!i.svg&&(l=n.display,n.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,lo.appendChild(t)),r=ug(t),l?n.display=l:Vs(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):lo.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Zf=function(t,e,i,n,r,o){var a=t._gsap,l=r||Qf(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],p=l[1],_=l[2],m=l[3],g=l[4],y=l[5],w=e.split(" "),v=parseFloat(w[0])||0,S=parseFloat(w[1])||0,E,x,M,P;i?l!==Ea&&(x=f*m-p*_)&&(M=v*(m/x)+S*(-_/x)+(_*y-m*g)/x,P=v*(-p/x)+S*(f/x)-(f*y-p*g)/x,v=M,S=P):(E=xg(t),v=E.x+(~w[0].indexOf("%")?v/100*E.width:v),S=E.y+(~(w[1]||w[0]).indexOf("%")?S/100*E.height:S)),n||n!==!1&&a.smooth?(g=v-c,y=S-h,a.xOffset=d+(g*f+y*_)-g,a.yOffset=u+(g*p+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=S,a.smooth=!!n,a.origin=e,a.originIsAbsolute=!!i,t.style[qi]="0px 0px",o&&(ks(o,a,"xOrigin",c,v),ks(o,a,"yOrigin",h,S),ks(o,a,"xOffset",d,a.xOffset),ks(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+S)},Aa=function(t,e){var i=t._gsap||new Of(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,r=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ln(t,qi)||"0",h,d,u,f,p,_,m,g,y,w,v,S,E,x,M,P,A,L,D,B,I,z,H,O,Q,W,R,$,xt,Et,Y,ot;return h=d=u=_=m=g=y=w=v=0,f=p=1,i.svg=!!(t.getCTM&&vg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[Ne]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ne]!=="none"?l[Ne]:"")),n.scale=n.rotate=n.translate="none"),x=Qf(t,i.svg),i.svg&&(i.uncache?(Q=t.getBBox(),c=i.xOrigin-Q.x+"px "+(i.yOrigin-Q.y)+"px",O=""):O=!e&&t.getAttribute("data-svg-origin"),Zf(t,O||c,!!O||i.originIsAbsolute,i.smooth!==!1,x)),S=i.xOrigin||0,E=i.yOrigin||0,x!==Ea&&(L=x[0],D=x[1],B=x[2],I=x[3],h=z=x[4],d=H=x[5],x.length===6?(f=Math.sqrt(L*L+D*D),p=Math.sqrt(I*I+B*B),_=L||D?ao(D,L)*mr:0,y=B||I?ao(B,I)*mr+_:0,y&&(p*=Math.abs(Math.cos(y*co))),i.svg&&(h-=S-(S*L+E*B),d-=E-(S*D+E*I))):(ot=x[6],Et=x[7],R=x[8],$=x[9],xt=x[10],Y=x[11],h=x[12],d=x[13],u=x[14],M=ao(ot,xt),m=M*mr,M&&(P=Math.cos(-M),A=Math.sin(-M),O=z*P+R*A,Q=H*P+$*A,W=ot*P+xt*A,R=z*-A+R*P,$=H*-A+$*P,xt=ot*-A+xt*P,Y=Et*-A+Y*P,z=O,H=Q,ot=W),M=ao(-B,xt),g=M*mr,M&&(P=Math.cos(-M),A=Math.sin(-M),O=L*P-R*A,Q=D*P-$*A,W=B*P-xt*A,Y=I*A+Y*P,L=O,D=Q,B=W),M=ao(D,L),_=M*mr,M&&(P=Math.cos(M),A=Math.sin(M),O=L*P+D*A,Q=z*P+H*A,D=D*P-L*A,H=H*P-z*A,L=O,z=Q),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),f=ke(Math.sqrt(L*L+D*D+B*B)),p=ke(Math.sqrt(H*H+ot*ot)),M=ao(z,H),y=Math.abs(M)>2e-4?M*mr:0,v=Y?1/(Y<0?-Y:Y):0),i.svg&&(O=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Sg(ln(t,Ne)),O&&t.setAttribute("transform",O))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(f*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),e=e||i.uncache,i.x=h-((i.xPercent=h&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=u+o,i.scaleX=ke(f),i.scaleY=ke(p),i.rotation=ke(_)+a,i.rotationX=ke(m)+a,i.rotationY=ke(g)+a,i.skewX=y+a,i.skewY=w+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(n[qi]=gh(c)),i.xOffset=i.yOffset=0,i.force3D=Xi.force3D,i.renderTransform=i.svg?Gb:_g?Mg:Vb,i.uncache=0,i},gh=function(t){return(t=t.split(" "))[0]+" "+t[1]},Wf=function(t,e,i){var n=di(e);return ke(parseFloat(e)+parseFloat(Gs(t,"x",i+"px",n)))+n},Vb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Mg(t,e)},dr="0deg",wa="0px",pr=") ",Mg=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,h=i.rotationY,d=i.rotationX,u=i.skewX,f=i.skewY,p=i.scaleX,_=i.scaleY,m=i.transformPerspective,g=i.force3D,y=i.target,w=i.zOrigin,v="",S=g==="auto"&&t&&t!==1||g===!0;if(w&&(d!==dr||h!==dr)){var E=parseFloat(h)*co,x=Math.sin(E),M=Math.cos(E),P;E=parseFloat(d)*co,P=Math.cos(E),o=Wf(y,o,x*P*-w),a=Wf(y,a,-Math.sin(E)*-w),l=Wf(y,l,M*P*-w+w)}m!==wa&&(v+="perspective("+m+pr),(n||r)&&(v+="translate("+n+"%, "+r+"%) "),(S||o!==wa||a!==wa||l!==wa)&&(v+=l!==wa||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+pr),c!==dr&&(v+="rotate("+c+pr),h!==dr&&(v+="rotateY("+h+pr),d!==dr&&(v+="rotateX("+d+pr),(u!==dr||f!==dr)&&(v+="skew("+u+", "+f+pr),(p!==1||_!==1)&&(v+="scale("+p+", "+_+pr),y.style[Ne]=v||"translate(0, 0)"},Gb=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,h=i.skewY,d=i.scaleX,u=i.scaleY,f=i.target,p=i.xOrigin,_=i.yOrigin,m=i.xOffset,g=i.yOffset,y=i.forceCSS,w=parseFloat(o),v=parseFloat(a),S,E,x,M,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=co,c*=co,S=Math.cos(l)*d,E=Math.sin(l)*d,x=Math.sin(l-c)*-u,M=Math.cos(l-c)*u,c&&(h*=co,P=Math.tan(c-h),P=Math.sqrt(1+P*P),x*=P,M*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),S*=P,E*=P)),S=ke(S),E=ke(E),x=ke(x),M=ke(M)):(S=d,M=u,E=x=0),(w&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(w=Gs(f,"x",o,"px"),v=Gs(f,"y",a,"px")),(p||_||m||g)&&(w=ke(w+p-(p*S+_*x)+m),v=ke(v+_-(p*E+_*M)+g)),(n||r)&&(P=f.getBBox(),w=ke(w+n/100*P.width),v=ke(v+r/100*P.height)),P="matrix("+S+","+E+","+x+","+M+","+w+","+v+")",f.setAttribute("transform",P),y&&(f.style[Ne]=P)},Hb=function(t,e,i,n,r){var o=360,a=ii(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?mr:1),c=l-n,h=n+c+"deg",d,u;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*rg)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*rg)%o-~~(c/o)*o)),t._pt=u=new Di(t._pt,e,i,n,c,wb),u.e=h,u.u="deg",t._props.push(i),u},fg=function(t,e){for(var i in e)t[i]=e[i];return t},Wb=function(t,e,i){var n=fg({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,h,d,u,f,p;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ne]=e,a=Aa(i,1),Vs(i,Ne),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Ne],o[Ne]=e,a=Aa(i,1),o[Ne]=c);for(l in fs)c=n[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=di(c),p=di(h),d=f!==p?Gs(i,l,c,p):parseFloat(c),u=parseFloat(h),t._pt=new Di(t._pt,a,l,d,u-d,Xf),t._pt.u=p||0,t._props.push(l));fg(a,n)};Li("padding,margin,Width,Radius",function(s,t){var e="Top",i="Right",n="Bottom",r="Left",o=(t<3?[e,i,n,r]:[e+r,e+i,n+i,n+r]).map(function(a){return t<2?s+a:"border"+a+s});mh[t>1?"border"+s:s]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(p){return us(a,p,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(p,_){return f[p]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var jf={name:"css",register:Yf,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,r){var o=this._props,a=t.style,l=i.vars.startAt,c,h,d,u,f,p,_,m,g,y,w,v,S,E,x,M,P;Jf||Yf(),this.styles=this.styles||gg(t),M=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Gi[_]&&Bf(_,e,i,n,t,r)))){if(f=typeof h,p=mh[_],f==="function"&&(h=h.call(i,n,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=oo(h)),p)p(this,t,_,h,i)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",cs.lastIndex=0,cs.test(c)||(m=di(c),g=di(h),g?m!==g&&(c=Gs(t,_,c,g)+g):m&&(h+=m)),this.add(a,"setProperty",c,h,n,r,0,0,_),o.push(_),M.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,n,t,r):l[_],ii(c)&&~c.indexOf("random(")&&(c=oo(c)),di(c+"")||c==="auto"||(c+=Xi.units[_]||di(us(t,_))||""),(c+"").charAt(1)==="="&&(c=us(t,_))):c=us(t,_),u=parseFloat(c),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),d=parseFloat(h),_ in qn&&(_==="autoAlpha"&&(u===1&&us(t,"visibility")==="hidden"&&d&&(u=0),M.push("visibility",0,a.visibility),ks(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=qn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),w=_ in fs,w){if(this.styles.save(_),P=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=ln(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=t.style.perspective;t.style.perspective=h,h=ln(t,"perspective"),A?t.style.perspective=A:Vs(t,"perspective")}d=parseFloat(h)}if(v||(S=t._gsap,S.renderTransform&&!e.parseTransform||Aa(t,e.parseTransform),E=e.smoothOrigin!==!1&&S.smooth,v=this._pt=new Di(this._pt,a,Ne,0,1,S.renderTransform,S,0,-1),v.dep=1),_==="scale")this._pt=new Di(this._pt,S,"scaleY",S.scaleY,(y?ur(S.scaleY,y+d):d)-S.scaleY||0,Xf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){M.push(qi,0,a[qi]),h=zb(h),S.svg?Zf(t,h,0,E,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==S.zOrigin&&ks(this,S,"zOrigin",S.zOrigin,g),ks(this,a,_,gh(c),gh(h)));continue}else if(_==="svgOrigin"){Zf(t,h,1,E,0,this);continue}else if(_ in yg){Hb(this,S,_,u,y?ur(u,y+h):h);continue}else if(_==="smoothOrigin"){ks(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){Wb(this,h,t);continue}}else _ in a||(_=ho(_)||_);if(w||(d||d===0)&&(u||u===0)&&!Tb.test(h)&&_ in a)m=(c+"").substr((u+"").length),d||(d=0),g=di(h)||(_ in Xi.units?Xi.units[_]:m),m!==g&&(u=Gs(t,_,c,g)),this._pt=new Di(this._pt,w?S:a,_,u,(y?ur(u,y+d):d)-u,!w&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?Cb:Xf),this._pt.u=g||0,w&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=Ab):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Eb);else if(_ in a)Bb.call(this,t,_,c,y?y+h:h);else if(_ in t)this.add(t,_,c||t[_],y?y+h:h,n,r);else if(_!=="parseTransform"){hh(_,h);continue}w||(_ in a?M.push(_,0,a[_]):typeof t[_]=="function"?M.push(_,2,t[_]()):M.push(_,1,c||t[_])),o.push(_)}}x&&Hf(this)},render:function(t,e){if(e.tween._time||!$f())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:us,aliases:qn,getSetter:function(t,e,i){var n=qn[e];return n&&n.indexOf(",")<0&&(e=n),e in fs&&e!==qi&&(t._gsap.x||us(t,"x"))?i&&sg===i?e==="scale"?Lb:Ib:(sg=i||{})&&(e==="scale"?Db:Nb):t.style&&!ch(t.style[e])?Rb:~e.indexOf("-")?Pb:ph(t,e)},core:{_removeProperty:Vs,_getMatrix:Qf}};bi.utils.checkPrefix=ho;bi.core.getStyleSaver=gg;(function(s,t,e,i){var n=Li(s+","+t+","+e,function(r){fs[r]=1});Li(t,function(r){Xi.units[r]="deg",yg[r]=1}),qn[n[13]]=s+","+t,Li(i,function(r){var o=r.split(":");qn[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Li("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Xi.units[s]="px"});bi.registerPlugin(jf);var Ue=bi.registerPlugin(jf)||bi,sA=Ue.core.Tween;function bg(s,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function Xb(s,t,e){return t&&bg(s.prototype,t),e&&bg(s,e),s}var pi,vh,qb,Yi,Hs,Ws,fo,wg,_r,po,Eg,ds,Ln,Ag,Cg=function(){return pi||typeof window<"u"&&(pi=window.gsap)&&pi.registerPlugin&&pi},Rg=1,uo=[],Zt=[],Dn=[],Ra=Date.now,td=function(t,e){return e},Yb=function(){var t=po.core,e=t.bridge||{},i=t._scrollers,n=t._proxies;i.push.apply(i,Zt),n.push.apply(n,Dn),Zt=i,Dn=n,td=function(o,a){return e[o](a)}},ms=function(t,e){return~Dn.indexOf(t)&&Dn[Dn.indexOf(t)+1][e]},Pa=function(t){return!!~Eg.indexOf(t)},Ui=function(t,e,i,n,r){return t.addEventListener(e,i,{passive:n!==!1,capture:!!r})},Ni=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},_h="scrollLeft",xh="scrollTop",ed=function(){return ds&&ds.isPressed||Zt.cache++},yh=function(t,e){var i=function n(r){if(r||r===0){Rg&&Yi.history.scrollRestoration!=="manual"&&(Yi.history.scrollRestoration="manual");var o=ds&&ds.isPressed;r=n.v=Math.round(r)||(ds&&ds.iOS?1:0),t(r),n.cacheID=Zt.cache,o&&td("ss",r)}else(e||Zt.cache!==n.cacheID||td("ref"))&&(n.cacheID=Zt.cache,n.v=t());return n.v+n.offset};return i.offset=0,t&&i},Ti={s:_h,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:yh(function(s){return arguments.length?Yi.scrollTo(s,Je.sc()):Yi.pageXOffset||Hs[_h]||Ws[_h]||fo[_h]||0})},Je={s:xh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ti,sc:yh(function(s){return arguments.length?Yi.scrollTo(Ti.sc(),s):Yi.pageYOffset||Hs[xh]||Ws[xh]||fo[xh]||0})},Oi=function(t,e){return(e&&e._ctx&&e._ctx.selector||pi.utils.toArray)(t)[0]||(typeof t=="string"&&pi.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Zb=function(t,e){for(var i=e.length;i--;)if(e[i]===t||e[i].contains(t))return!0;return!1},ps=function(t,e){var i=e.s,n=e.sc;Pa(t)&&(t=Hs.scrollingElement||Ws);var r=Zt.indexOf(t),o=n===Je.sc?1:2;!~r&&(r=Zt.push(t)-1),Zt[r+o]||Ui(t,"scroll",ed);var a=Zt[r+o],l=a||(Zt[r+o]=yh(ms(t,i),!0)||(Pa(t)?n:yh(function(c){return arguments.length?t[i]=c:t[i]})));return l.target=t,a||(l.smooth=pi.getProperty(t,"scrollBehavior")==="smooth"),l},Sh=function(t,e,i){var n=t,r=t,o=Ra(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,_){var m=Ra();_||m-o>l?(r=n,n=p,a=o,o=m):i?n+=p:n=r+(p-r)/(m-a)*(o-a)},d=function(){r=n=i?0:n,a=o=0},u=function(p){var _=a,m=r,g=Ra();return(p||p===0)&&p!==n&&h(p),o===a||g-a>c?0:(n+(i?m:-m))/((i?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},Ca=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Tg=function(t){var e=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(i)?e:i},Pg=function(){po=pi.core.globals().ScrollTrigger,po&&po.core&&Yb()},Ig=function(t){return pi=t||Cg(),!vh&&pi&&typeof document<"u"&&document.body&&(Yi=window,Hs=document,Ws=Hs.documentElement,fo=Hs.body,Eg=[Yi,Hs,Ws,fo],qb=pi.utils.clamp,Ag=pi.core.context||function(){},_r="onpointerenter"in fo?"pointer":"mouse",wg=Ve.isTouch=Yi.matchMedia&&Yi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Yi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ln=Ve.eventTypes=("ontouchstart"in Ws?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ws?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Rg=0},500),vh=1),po||Pg(),vh};Ti.op=Je;Zt.cache=0;var Ve=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(i){vh||Ig(pi)||console.warn("Please gsap.registerPlugin(Observer)"),po||Pg();var n=i.tolerance,r=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,h=i.preventDefault,d=i.onStop,u=i.onStopDelay,f=i.ignore,p=i.wheelSpeed,_=i.event,m=i.onDragStart,g=i.onDragEnd,y=i.onDrag,w=i.onPress,v=i.onRelease,S=i.onRight,E=i.onLeft,x=i.onUp,M=i.onDown,P=i.onChangeX,A=i.onChangeY,L=i.onChange,D=i.onToggleX,B=i.onToggleY,I=i.onHover,z=i.onHoverEnd,H=i.onMove,O=i.ignoreCheck,Q=i.isNormalizer,W=i.onGestureStart,R=i.onGestureEnd,$=i.onWheel,xt=i.onEnable,Et=i.onDisable,Y=i.onClick,ot=i.scrollSpeed,vt=i.capture,bt=i.allowClicks,mt=i.lockAxis,Nt=i.onLockAxis;this.target=a=Oi(a)||Ws,this.vars=i,f&&(f=pi.utils.toArray(f)),n=n||1e-9,r=r||0,p=p||1,ot=ot||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Yi.getComputedStyle(fo).lineHeight)||22);var ge,At,Ht,Lt,Ot,ce,oe,J=this,Kt=0,We=0,ve=i.passive||!h&&i.passive!==!1,se=ps(a,Ti),Oe=ps(a,Je),Ge=se(),F=Oe(),ue=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ln[0]==="pointerdown",ae=Pa(a),Vt=a.ownerDocument||Hs,ut=[0,0,0],he=[0,0,0],Dt=0,Ft=function(){return Dt=Ra()},C=function(pt,st){return(J.event=pt)&&f&&Zb(pt.target,f)||st&&ue&&pt.pointerType!=="touch"||O&&O(pt,st)},b=function(){J._vx.reset(),J._vy.reset(),At.pause(),d&&d(J)},G=function(){var pt=J.deltaX=Tg(ut),st=J.deltaY=Tg(he),et=Math.abs(pt)>=n,_t=Math.abs(st)>=n;L&&(et||_t)&&L(J,pt,st,ut,he),et&&(S&&J.deltaX>0&&S(J),E&&J.deltaX<0&&E(J),P&&P(J),D&&J.deltaX<0!=Kt<0&&D(J),Kt=J.deltaX,ut[0]=ut[1]=ut[2]=0),_t&&(M&&J.deltaY>0&&M(J),x&&J.deltaY<0&&x(J),A&&A(J),B&&J.deltaY<0!=We<0&&B(J),We=J.deltaY,he[0]=he[1]=he[2]=0),(Lt||Ht)&&(H&&H(J),Ht&&(m&&Ht===1&&m(J),y&&y(J),Ht=0),Lt=!1),ce&&!(ce=!1)&&Nt&&Nt(J),Ot&&($(J),Ot=!1),ge=0},rt=function(pt,st,et){ut[et]+=pt,he[et]+=st,J._vx.update(pt),J._vy.update(st),c?ge||(ge=requestAnimationFrame(G)):G()},nt=function(pt,st){mt&&!oe&&(J.axis=oe=Math.abs(pt)>Math.abs(st)?"x":"y",ce=!0),oe!=="y"&&(ut[2]+=pt,J._vx.update(pt,!0)),oe!=="x"&&(he[2]+=st,J._vy.update(st,!0)),c?ge||(ge=requestAnimationFrame(G)):G()},ht=function(pt){if(!C(pt,1)){pt=Ca(pt,h);var st=pt.clientX,et=pt.clientY,_t=st-J.x,it=et-J.y,Tt=J.isDragging;J.x=st,J.y=et,(Tt||(_t||it)&&(Math.abs(J.startX-st)>=r||Math.abs(J.startY-et)>=r))&&(Ht||(Ht=Tt?2:1),Tt||(J.isDragging=!0),nt(_t,it))}},gt=J.onPress=function(at){C(at,1)||at&&at.button||(J.axis=oe=null,At.pause(),J.isPressed=!0,at=Ca(at),Kt=We=0,J.startX=J.x=at.clientX,J.startY=J.y=at.clientY,J._vx.reset(),J._vy.reset(),Ui(Q?a:Vt,Ln[1],ht,ve,!0),J.deltaX=J.deltaY=0,w&&w(J))},X=J.onRelease=function(at){if(!C(at,1)){Ni(Q?a:Vt,Ln[1],ht,!0);var pt=!isNaN(J.y-J.startY),st=J.isDragging,et=st&&(Math.abs(J.x-J.startX)>3||Math.abs(J.y-J.startY)>3),_t=Ca(at);!et&&pt&&(J._vx.reset(),J._vy.reset(),h&&bt&&pi.delayedCall(.08,function(){if(Ra()-Dt>300&&!at.defaultPrevented){if(at.target.click)at.target.click();else if(Vt.createEvent){var it=Vt.createEvent("MouseEvents");it.initMouseEvent("click",!0,!0,Yi,1,_t.screenX,_t.screenY,_t.clientX,_t.clientY,!1,!1,!1,!1,0,null),at.target.dispatchEvent(it)}}})),J.isDragging=J.isGesturing=J.isPressed=!1,d&&st&&!Q&&At.restart(!0),Ht&&G(),g&&st&&g(J),v&&v(J,et)}},tt=function(pt){return pt.touches&&pt.touches.length>1&&(J.isGesturing=!0)&&W(pt,J.isDragging)},ct=function(){return(J.isGesturing=!1)||R(J)},N=function(pt){if(!C(pt)){var st=se(),et=Oe();rt((st-Ge)*ot,(et-F)*ot,1),Ge=st,F=et,d&&At.restart(!0)}},j=function(pt){if(!C(pt)){pt=Ca(pt,h),$&&(Ot=!0);var st=(pt.deltaMode===1?l:pt.deltaMode===2?Yi.innerHeight:1)*p;rt(pt.deltaX*st,pt.deltaY*st,0),d&&!Q&&At.restart(!0)}},K=function(pt){if(!C(pt)){var st=pt.clientX,et=pt.clientY,_t=st-J.x,it=et-J.y;J.x=st,J.y=et,Lt=!0,d&&At.restart(!0),(_t||it)&&nt(_t,it)}},ft=function(pt){J.event=pt,I(J)},lt=function(pt){J.event=pt,z(J)},dt=function(pt){return C(pt)||Ca(pt,h)&&Y(J)};At=J._dc=pi.delayedCall(u||.25,b).pause(),J.deltaX=J.deltaY=0,J._vx=Sh(0,50,!0),J._vy=Sh(0,50,!0),J.scrollX=se,J.scrollY=Oe,J.isDragging=J.isGesturing=J.isPressed=!1,Ag(this),J.enable=function(at){return J.isEnabled||(Ui(ae?Vt:a,"scroll",ed),o.indexOf("scroll")>=0&&Ui(ae?Vt:a,"scroll",N,ve,vt),o.indexOf("wheel")>=0&&Ui(a,"wheel",j,ve,vt),(o.indexOf("touch")>=0&&wg||o.indexOf("pointer")>=0)&&(Ui(a,Ln[0],gt,ve,vt),Ui(Vt,Ln[2],X),Ui(Vt,Ln[3],X),bt&&Ui(a,"click",Ft,!0,!0),Y&&Ui(a,"click",dt),W&&Ui(Vt,"gesturestart",tt),R&&Ui(Vt,"gestureend",ct),I&&Ui(a,_r+"enter",ft),z&&Ui(a,_r+"leave",lt),H&&Ui(a,_r+"move",K)),J.isEnabled=!0,J.isDragging=J.isGesturing=J.isPressed=Lt=Ht=!1,J._vx.reset(),J._vy.reset(),Ge=se(),F=Oe(),at&&at.type&&gt(at),xt&&xt(J)),J},J.disable=function(){J.isEnabled&&(uo.filter(function(at){return at!==J&&Pa(at.target)}).length||Ni(ae?Vt:a,"scroll",ed),J.isPressed&&(J._vx.reset(),J._vy.reset(),Ni(Q?a:Vt,Ln[1],ht,!0)),Ni(ae?Vt:a,"scroll",N,vt),Ni(a,"wheel",j,vt),Ni(a,Ln[0],gt,vt),Ni(Vt,Ln[2],X),Ni(Vt,Ln[3],X),Ni(a,"click",Ft,!0),Ni(a,"click",dt),Ni(Vt,"gesturestart",tt),Ni(Vt,"gestureend",ct),Ni(a,_r+"enter",ft),Ni(a,_r+"leave",lt),Ni(a,_r+"move",K),J.isEnabled=J.isPressed=J.isDragging=!1,Et&&Et(J))},J.kill=J.revert=function(){J.disable();var at=uo.indexOf(J);at>=0&&uo.splice(at,1),ds===J&&(ds=0)},uo.push(J),Q&&Pa(a)&&(ds=J),J.enable(_)},Xb(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Ve.version="3.15.1";Ve.create=function(s){return new Ve(s)};Ve.register=Ig;Ve.getAll=function(){return uo.slice()};Ve.getById=function(s){return uo.filter(function(t){return t.vars.id===s})[0]};Cg()&&pi.registerPlugin(Ve);var Ct,xo,$t,_e,un,me,md,Fh,Ha,Fa,La,Mh,wi,kh,ld,Bi,Lg,Dg,vo,Jg,id,$g,Fi,cd,Kg,Qg,Xs,hd,gd,yo,_d,qs,ud,nd,bh=1,Ei=Date.now,sd=Ei(),Mn=0,Da=0,Ng=function(t,e,i){var n=hn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+e+"Clamp"]=n,n?t.substr(6,t.length-7):t},Ug=function(t,e){return e&&(!hn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Jb=function s(){return Da&&requestAnimationFrame(s)},Og=function(){return kh=1},Fg=function(){return kh=0},Yn=function(t){return t},Na=function(t){return Math.round(t*1e5)/1e5||0},jg=function(){return typeof window<"u"},t_=function(){return Ct||jg()&&(Ct=window.gsap)&&Ct.registerPlugin&&Ct},br=function(t){return!!~md.indexOf(t)},e_=function(t){return(t==="Height"?_d:$t["inner"+t])||un["client"+t]||me["client"+t]},i_=function(t){return ms(t,"getBoundingClientRect")||(br(t)?function(){return Oh.width=$t.innerWidth,Oh.height=_d,Oh}:function(){return gs(t)})},$b=function(t,e,i){var n=i.d,r=i.d2,o=i.a;return(o=ms(t,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(e?e_(r):t["client"+r])||0}},Kb=function(t,e){return!e||~Dn.indexOf(t)?i_(t):function(){return Oh}},Zn=function(t,e){var i=e.s,n=e.d2,r=e.d,o=e.a;return Math.max(0,(i="scroll"+n)&&(o=ms(t,i))?o()-i_(t)()[r]:br(t)?(un[i]||me[i])-e_(n):t[i]-t["offset"+n])},Th=function(t,e){for(var i=0;i<vo.length;i+=3)(!e||~e.indexOf(vo[i+1]))&&t(vo[i],vo[i+1],vo[i+2])},hn=function(t){return typeof t=="string"},Ai=function(t){return typeof t=="function"},Ua=function(t){return typeof t=="number"},xr=function(t){return typeof t=="object"},Ia=function(t,e,i){return t&&t.progress(e?0:1)&&i&&t.pause()},mo=function(t,e,i){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t,i)}):e(t,i);n&&n.totalTime&&(t.callbackAnimation=n)}},go=Math.abs,n_="left",s_="top",xd="right",vd="bottom",yr="width",Sr="height",Ba="Right",za="Left",ka="Top",Va="Bottom",$e="padding",yn="margin",Mo="Width",yd="Height",ni="px",Sn=function(t){return $t.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Qb=function(t){var e=Sn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Bg=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},gs=function(t,e){var i=e&&Sn(t)[ld]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ct.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),n},Bh=function(t,e){var i=e.d2;return t["offset"+i]||t["client"+i]||0},r_=function(t){var e=[],i=t.labels,n=t.duration(),r;for(r in i)e.push(i[r]/n);return e},jb=function(t){return function(e){return Ct.utils.snap(r_(t),e)}},Sd=function(t){var e=Ct.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(n,r){return n-r});return i?function(n,r,o){o===void 0&&(o=.001);var a;if(!r)return e(n);if(r>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,r,o){o===void 0&&(o=.001);var a=e(n);return!r||Math.abs(a-n)<o||a-n<0==r<0?a:e(r<0?n-t:n+t)}},tT=function(t){return function(e,i){return Sd(r_(t))(e,i.direction)}},wh=function(t,e,i,n){return i.split(",").forEach(function(r){return t(e,r,n)})},ci=function(t,e,i,n,r){return t.addEventListener(e,i,{passive:!n,capture:!!r})},li=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},Eh=function(t,e,i){i=i&&i.wheelHandler,i&&(t(e,"wheel",i),t(e,"touchmove",i))},zg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ah={toggleActions:"play",anticipatePin:0},zh={top:0,left:0,center:.5,bottom:1,right:1},Lh=function(t,e){if(hn(t)){var i=t.indexOf("="),n=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(n*=e/100),t=t.substr(0,i-1)),t=n+(t in zh?zh[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Ch=function(t,e,i,n,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,u=r.indent,f=r.fontWeight,p=_e.createElement("div"),_=br(i)||ms(i,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,g=_?me:i.tagName==="IFRAME"?i.contentDocument.body:i,y=t.indexOf("start")!==-1,w=y?c:h,v="border-color:"+w+";font-size:"+d+";color:"+w+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(n===Je?xd:vd)+":"+(o+parseFloat(u))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=y,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=v,p.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+n.op.d2],Dh(p,0,n,y),p},Dh=function(t,e,i,n){var r={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];t._isFlipped=n,r[i.a+"Percent"]=n?-100:0,r[i.a]=n?"1px":0,r["border"+o+Mo]=1,r["border"+a+Mo]=0,r[i.p]=e+"px",Ct.set(t,r)},Jt=[],fd={},Wa,kg=function(){return Ei()-Mn>34&&(Wa||(Wa=requestAnimationFrame(_s)))},_o=function(){(!Fi||!Fi.isPressed||Fi.startX>me.clientWidth)&&(Zt.cache++,Fi?Wa||(Wa=requestAnimationFrame(_s)):_s(),Mn||wr("scrollStart"),Mn=Ei())},rd=function(){Qg=$t.innerWidth,Kg=$t.innerHeight},Oa=function(t){Zt.cache++,(t===!0||!wi&&!$g&&!_e.fullscreenElement&&!_e.webkitFullscreenElement&&(!cd||Qg!==$t.innerWidth||Math.abs($t.innerHeight-Kg)>$t.innerHeight*.25))&&Fh.restart(!0)},Tr={},eT=[],o_=function s(){return li(qt,"scrollEnd",s)||vr(!0)},wr=function(t){return Tr[t]&&Tr[t].map(function(e){return e()})||eT},cn=[],a_=function(t){for(var e=0;e<cn.length;e+=5)(!t||cn[e+4]&&cn[e+4].query===t)&&(cn[e].style.cssText=cn[e+1],cn[e].getBBox&&cn[e].setAttribute("transform",cn[e+2]||""),cn[e+3].uncache=1)},l_=function(){Zt.cache++,Zt.forEach(function(t){return Ai(t)&&(t.rec=t())})},Md=function(t,e){var i;for(Bi=0;Bi<Jt.length;Bi++)i=Jt[Bi],i&&(!e||i._ctx===e)&&(t?i.kill(1):i.revert(!0,!0));qs=!0,e&&a_(e),e||wr("revert")},c_=function(t,e){Zt.cache++,(e||!zi)&&Zt.forEach(function(i){return Ai(i)&&i.cacheID++&&(i.rec=0)}),hn(t)&&(gd=t,$t.history.scrollRestoration!==t&&($t.history.scrollRestoration=t))},zi,Mr=0,Vg,iT=function(){if(Vg!==Mr){var t=Vg=Mr;requestAnimationFrame(function(){return t===Mr&&vr(!0)})}},h_=function(){me.appendChild(yo),_d=!Fi&&yo.offsetHeight||$t.innerHeight,me.removeChild(yo)},Gg=function(t){return Ha(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},vr=function(t,e){if(un=_e.documentElement,me=_e.body,md=[$t,_e,un,me],Mn&&!t&&!qs){ci(qt,"scrollEnd",o_);return}h_(),zi=qt.isRefreshing=!0,qs||l_();var i=wr("refreshInit");Jg&&qt.sort(),e||Md(),Zt.forEach(function(n){Ai(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),Jt.slice(0).forEach(function(n){return n.refresh()}),qs=!1,Jt.forEach(function(n){if(n._subPinOffset&&n.pin){var r=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[r];n.revert(!0,1),n.adjustPinSpacing(n.pin[r]-o),n.refresh()}}),ud=1,Gg(!0),Jt.forEach(function(n){var r=Zn(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>r,a=n._startClamp&&n.start>=r;(o||a)&&n.setPositions(a?r-1:n.start,o?Math.max(a?r:n.start+1,r):n.end,!0)}),Gg(!1),ud=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),Zt.forEach(function(n){Ai(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),c_(gd,1),Fh.pause(),Mr++,zi=2,_s(2),Jt.forEach(function(n){return Ai(n.vars.onRefresh)&&n.vars.onRefresh(n)}),zi=qt.isRefreshing=!1,wr("refresh")},dd=0,Nh=1,Ga,_s=function(t){if(t===2||!zi&&!qs){qt.isUpdating=!0,Ga&&Ga.update(0);var e=Jt.length,i=Ei(),n=i-sd>=50,r=e&&Jt[0].scroll();if(Nh=dd>r?-1:1,zi||(dd=r),n&&(Mn&&!kh&&i-Mn>200&&(Mn=0,wr("scrollEnd")),La=sd,sd=i),Nh<0){for(Bi=e;Bi-- >0;)Jt[Bi]&&Jt[Bi].update(0,n);Nh=1}else for(Bi=0;Bi<e;Bi++)Jt[Bi]&&Jt[Bi].update(0,n);qt.isUpdating=!1}Wa=0},pd=[n_,s_,vd,xd,yn+Va,yn+Ba,yn+ka,yn+za,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Uh=pd.concat([yr,Sr,"boxSizing","max"+Mo,"max"+yd,"position",yn,$e,$e+ka,$e+Ba,$e+Va,$e+za]),nT=function(t,e,i){So(i);var n=t._gsap;if(n.spacerIsNative)So(n.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},od=function(t,e,i,n){if(!t._gsap.swappedIn){for(var r=pd.length,o=e.style,a=t.style,l;r--;)l=pd[r],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[vd]=a[xd]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[yr]=Bh(t,Ti)+ni,o[Sr]=Bh(t,Je)+ni,o[$e]=a[yn]=a[s_]=a[n_]="0",So(n),a[yr]=a["max"+Mo]=i[yr],a[Sr]=a["max"+yd]=i[Sr],a[$e]=i[$e],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},sT=/([A-Z])/g,So=function(t){if(t){var e=t.t.style,i=t.length,n=0,r,o;for((t.t._gsap||Ct.core.getCache(t.t)).uncache=1;n<i;n+=2)o=t[n+1],r=t[n],o?e[r]=o:e[r]&&e.removeProperty(r.replace(sT,"-$1").toLowerCase())}},Rh=function(t){for(var e=Uh.length,i=t.style,n=[],r=0;r<e;r++)n.push(Uh[r],i[Uh[r]]);return n.t=t,n},rT=function(t,e,i){for(var n=[],r=t.length,o=i?8:0,a;o<r;o+=2)a=t[o],n.push(a,a in e?e[a]:t[o+1]);return n.t=t.t,n},Oh={left:0,top:0},Hg=function(t,e,i,n,r,o,a,l,c,h,d,u,f,p){Ai(t)&&(t=t(l)),hn(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?Lh("0"+t.substr(3),i):0));var _=f?f.time():0,m,g,y;if(f&&f.seek(0),isNaN(t)||(t=+t),Ua(t))f&&(t=Ct.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&Dh(a,i,n,!0);else{Ai(e)&&(e=e(l));var w=(t||"0").split(" "),v,S,E,x;y=Oi(e,l)||me,v=gs(y)||{},(!v||!v.left&&!v.top)&&Sn(y).display==="none"&&(x=y.style.display,y.style.display="block",v=gs(y),x?y.style.display=x:y.style.removeProperty("display")),S=Lh(w[0],v[n.d]),E=Lh(w[1]||"0",i),t=v[n.p]-c[n.p]-h+S+r-E,a&&Dh(a,E,n,i-E<20||a._isStart&&E>20),i-=i-E}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var M=t+i,P=o._isStart;m="scroll"+n.d2,Dh(o,M,n,P&&M>20||!P&&(d?Math.max(me[m],un[m]):o.parentNode[m])<=M+1),d&&(c=gs(a),d&&(o.style[n.op.p]=c[n.op.p]-n.op.m-o._offset+ni))}return f&&y&&(m=gs(y),f.seek(u),g=gs(y),f._caScrollDist=m[n.p]-g[n.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},oT=/(webkit|moz|length|cssText|inset)/i,Wg=function(t,e,i,n){if(t.parentNode!==e){var r=t.style,o,a;if(e===me){t._stOrig=r.cssText,a=Sn(t);for(o in a)!+o&&!oT.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=i,r.left=n}else r.cssText=t._stOrig;Ct.core.getCache(t).uncache=1,e.appendChild(t)}},u_=function(t,e,i){var n=e,r=n;return function(o){var a=Math.round(t());return a!==n&&a!==r&&Math.abs(a-n)>3&&Math.abs(a-r)>3&&(o=a,i&&i()),r=n,n=Math.round(o),n}},Ph=function(t,e,i){var n={};n[e.p]="+="+i,Ct.set(t,n)},Xg=function(t,e){var i=ps(t,e),n="_scroll"+e.p2,r=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,p={};c=c||i();var _=u_(i,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[n]=a,l.inherit=!1,l.modifiers=p,p[n]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){Zt.cache++,o.tween&&_s()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Ct.to(t,l),u};return t[n]=i,i.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},ci(t,"wheel",i.wheelHandler),qt.isTouch&&ci(t,"touchmove",i.wheelHandler),r},qt=(function(){function s(e,i){xo||s.register(Ct)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),hd(this),this.init(e,i)}var t=s.prototype;return t.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Da){this.update=this.refresh=this.kill=Yn;return}i=Bg(hn(i)||Ua(i)||i.nodeType?{trigger:i}:i,Ah);var r=i,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,u=r.trigger,f=r.pin,p=r.pinSpacing,_=r.invalidateOnRefresh,m=r.anticipatePin,g=r.onScrubComplete,y=r.onSnapComplete,w=r.once,v=r.snap,S=r.pinReparent,E=r.pinSpacer,x=r.containerAnimation,M=r.fastScrollEnd,P=r.preventOverlaps,A=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Ti:Je,L=!d&&d!==0,D=Oi(i.scroller||$t),B=Ct.core.getCache(D),I=br(D),z=("pinType"in i?i.pinType:ms(D,"pinType")||I&&"fixed")==="fixed",H=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],O=L&&i.toggleActions.split(" "),Q="markers"in i?i.markers:Ah.markers,W=I?0:parseFloat(Sn(D)["border"+A.p2+Mo])||0,R=this,$=i.onRefreshInit&&function(){return i.onRefreshInit(R)},xt=$b(D,I,A),Et=Kb(D,I),Y=0,ot=0,vt=0,bt=ps(D,A),mt,Nt,ge,At,Ht,Lt,Ot,ce,oe,J,Kt,We,ve,se,Oe,Ge,F,ue,ae,Vt,ut,he,Dt,Ft,C,b,G,rt,nt,ht,gt,X,tt,ct,N,j,K,ft,lt;if(R._startClamp=R._endClamp=!1,R._dir=A,m*=45,R.scroller=D,R.scroll=x?x.time.bind(x):bt,At=bt(),qs&&bt.rec==null&&(bt.rec=At),R.vars=i,n=n||i.animation,"refreshPriority"in i&&(Jg=1,i.refreshPriority===-9999&&(Ga=R)),B.tweenScroll=B.tweenScroll||{top:Xg(D,Je),left:Xg(D,Ti)},R.tweenTo=mt=B.tweenScroll[A.p],R.scrubDuration=function(et){tt=Ua(et)&&et,tt?X?X.duration(et):X=Ct.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:tt,paused:!0,onComplete:function(){return g&&g(R)}}):(X&&X.progress(1).kill(),X=0)},n&&(n.vars.lazy=!1,n._initted&&!R.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),R.animation=n.pause(),n.scrollTrigger=R,R.scrubDuration(d),ht=0,l||(l=n.vars.id)),v&&((!xr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in me.style&&Ct.set(I?[me,un]:D,{scrollBehavior:"auto"}),Zt.forEach(function(et){return Ai(et)&&et.target===(I?_e.scrollingElement||un:D)&&(et.smooth=!1)}),ge=Ai(v.snapTo)?v.snapTo:v.snapTo==="labels"?jb(n):v.snapTo==="labelsDirectional"?tT(n):v.directional!==!1?function(et,_t){return Sd(v.snapTo)(et,Ei()-ot<500?0:_t.direction)}:Ct.utils.snap(v.snapTo),ct=v.duration||{min:.1,max:2},ct=xr(ct)?Fa(ct.min,ct.max):Fa(ct,ct),N=Ct.delayedCall(v.delay||tt/2||.1,function(){var et=bt(),_t=Ei()-ot<500,it=mt.tween;if((_t||Math.abs(R.getVelocity())<10)&&!it&&!kh&&Y!==et){var Tt=(et-Lt)/se,Qt=n&&!L?n.totalProgress():Tt,Wt=_t?0:(Qt-gt)/(Ei()-La)*1e3||0,Ee=Ct.utils.clamp(-Tt,1-Tt,go(Wt/2)*Wt/.185),Xe=Tt+(v.inertia===!1?0:Ee),Ae,ye,de=v,Ke=de.onStart,Se=de.onInterrupt,mi=de.onComplete;if(Ae=ge(Xe,R),Ua(Ae)||(Ae=Xe),ye=Math.max(0,Math.round(Lt+Ae*se)),et<=Ot&&et>=Lt&&ye!==et){if(it&&!it._initted&&it.data<=go(ye-et))return;v.inertia===!1&&(Ee=Ae-Tt),mt(ye,{duration:ct(go(Math.max(go(Xe-Qt),go(Ae-Qt))*.185/Wt/.05||0)),ease:v.ease||"power3",data:go(ye-et),onInterrupt:function(){return N.restart(!0)&&Se&&mo(R,Se)},onComplete:function(){R.update(),Y=bt(),n&&!L&&(X?X.resetTo("totalProgress",Ae,n._tTime/n._tDur):n.progress(Ae)),ht=gt=n&&!L?n.totalProgress():R.progress,y&&y(R),mi&&mo(R,mi)}},et,Ee*se,ye-et-Ee*se),Ke&&mo(R,Ke,mt.tween)}}else R.isActive&&Y!==et&&N.restart(!0)}).pause()),l&&(fd[l]=R),u=R.trigger=Oi(u||f!==!0&&f),lt=u&&u._gsap&&u._gsap.stRevert,lt&&(lt=lt(R)),f=f===!0?u:Oi(f),hn(a)&&(a={targets:u,className:a}),f&&(p===!1||p===yn||(p=!p&&f.parentNode&&f.parentNode.style&&Sn(f.parentNode).display==="flex"?!1:$e),R.pin=f,Nt=Ct.core.getCache(f),Nt.spacer?Oe=Nt.pinState:(E&&(E=Oi(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Nt.spacerIsNative=!!E,E&&(Nt.spacerState=Rh(E))),Nt.spacer=ue=E||_e.createElement("div"),ue.classList.add("pin-spacer"),l&&ue.classList.add("pin-spacer-"+l),Nt.pinState=Oe=Rh(f)),i.force3D!==!1&&Ct.set(f,{force3D:!0}),R.spacer=ue=Nt.spacer,nt=Sn(f),Ft=nt[p+A.os2],Vt=Ct.getProperty(f),ut=Ct.quickSetter(f,A.a,ni),od(f,ue,nt),F=Rh(f)),Q){We=xr(Q)?Bg(Q,zg):zg,J=Ch("scroller-start",l,D,A,We,0),Kt=Ch("scroller-end",l,D,A,We,0,J),ae=J["offset"+A.op.d2];var dt=Oi(ms(D,"content")||D);ce=this.markerStart=Ch("start",l,dt,A,We,ae,0,x),oe=this.markerEnd=Ch("end",l,dt,A,We,ae,0,x),x&&(ft=Ct.quickSetter([ce,oe],A.a,ni)),!z&&!(Dn.length&&ms(D,"fixedMarkers")===!0)&&(Qb(I?me:D),Ct.set([J,Kt],{force3D:!0}),b=Ct.quickSetter(J,A.a,ni),rt=Ct.quickSetter(Kt,A.a,ni))}if(x){var at=x.vars.onUpdate,pt=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){R.update(0,0,1),at&&at.apply(x,pt||[])})}if(R.previous=function(){return Jt[Jt.indexOf(R)-1]},R.next=function(){return Jt[Jt.indexOf(R)+1]},R.revert=function(et,_t){if(!_t)return R.kill(!0);var it=et!==!1||!R.enabled,Tt=wi;it!==R.isReverted&&(it&&(j=Math.max(bt(),R.scroll.rec||0),vt=R.progress,K=n&&n.progress()),ce&&[ce,oe,J,Kt].forEach(function(Qt){return Qt.style.display=it?"none":"block"}),it&&(wi=R,R.update(it)),f&&(!S||!R.isActive)&&(it?nT(f,ue,Oe):od(f,ue,Sn(f),C)),it||R.update(it),wi=Tt,R.isReverted=it)},R.refresh=function(et,_t,it,Tt){if(!((wi||!R.enabled)&&!_t)){if(f&&et&&Mn){ci(s,"scrollEnd",o_);return}!zi&&$&&$(R),wi=R,mt.tween&&!it&&(mt.tween.kill(),mt.tween=0),X&&X.pause(),_&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(V){return V.vars.immediateRender&&V.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Qt=xt(),Wt=Et(),Ee=x?x.duration():Zn(D,A),Xe=se<=.01||!se,Ae=0,ye=Tt||0,de=xr(it)?it.end:i.end,Ke=i.endTrigger||u,Se=xr(it)?it.start:i.start||(i.start===0||!u?0:f?"0 0":"0 100%"),mi=R.pinnedContainer=i.pinnedContainer&&Oi(i.pinnedContainer,R),Zi=u&&Math.max(0,Jt.indexOf(R))||0,Fe=Zi,qe,Qe,Ji,Er,je,Be,fn,To,Ja,xs,T,U,Z;for(Q&&xr(it)&&(U=Ct.getProperty(J,A.p),Z=Ct.getProperty(Kt,A.p));Fe-- >0;)Be=Jt[Fe],Be.end||Be.refresh(0,1)||(wi=R),fn=Be.pin,fn&&(fn===u||fn===f||fn===mi)&&!Be.isReverted&&(xs||(xs=[]),xs.unshift(Be),Be.revert(!0,!0)),Be!==Jt[Fe]&&(Zi--,Fe--);for(Ai(Se)&&(Se=Se(R)),Se=Ng(Se,"start",R),Lt=Hg(Se,u,Qt,A,bt(),ce,J,R,Wt,W,z,Ee,x,R._startClamp&&"_startClamp")||(f?-.001:0),Ai(de)&&(de=de(R)),hn(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=(hn(Se)?Se.split(" ")[0]:"")+de:(Ae=Lh(de.substr(2),Qt),de=hn(Se)?Se:(x?Ct.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,Lt):Lt)+Ae,Ke=u)),de=Ng(de,"end",R),Ot=Math.max(Lt,Hg(de||(Ke?"100% 0":Ee),Ke,Qt,A,bt()+Ae,oe,Kt,R,Wt,W,z,Ee,x,R._endClamp&&"_endClamp"))||-.001,Ae=0,Fe=Zi;Fe--;)Be=Jt[Fe]||{},fn=Be.pin,fn&&Be.start-Be._pinPush<=Lt&&!x&&Be.end>0&&(qe=Be.end-(R._startClamp?Math.max(0,Be.start):Be.start),(fn===u&&Be.start-Be._pinPush<Lt||fn===mi)&&isNaN(Se)&&(Ae+=qe*(1-Be.progress)),fn===f&&(ye+=qe));if(Lt+=Ae,Ot+=Ae,R._startClamp&&(R._startClamp+=Ae),R._endClamp&&!zi&&(R._endClamp=Ot||-.001,Ot=Math.min(Ot,Zn(D,A))),se=Ot-Lt||(Lt-=.01)&&.001,Xe&&(vt=Ct.utils.clamp(0,1,Ct.utils.normalize(Lt,Ot,j))),R._pinPush=ye,ce&&Ae&&(qe={},qe[A.a]="+="+Ae,mi&&(qe[A.p]="-="+bt()),Ct.set([ce,oe],qe)),f&&!(ud&&R.end>=Zn(D,A)))qe=Sn(f),Er=A===Je,Ji=bt(),he=parseFloat(Vt(A.a))+ye,!Ee&&Ot>1&&(T=(I?_e.scrollingElement||un:D).style,T={style:T,value:T["overflow"+A.a.toUpperCase()]},I&&Sn(me)["overflow"+A.a.toUpperCase()]!=="scroll"&&(T.style["overflow"+A.a.toUpperCase()]="scroll")),od(f,ue,qe),F=Rh(f),Qe=gs(f,!0),To=z&&ps(D,Er?Ti:Je)(),p?(C=[p+A.os2,se+ye+ni],C.t=ue,Fe=p===$e?Bh(f,A)+se+ye:0,Fe&&(C.push(A.d,Fe+ni),ue.style.flexBasis!=="auto"&&(ue.style.flexBasis=Fe+ni)),So(C),mi&&Jt.forEach(function(V){V.pin===mi&&V.vars.pinSpacing!==!1&&(V._subPinOffset=!0)}),z&&bt(j)):(Fe=Bh(f,A),Fe&&ue.style.flexBasis!=="auto"&&(ue.style.flexBasis=Fe+ni)),z&&(je={top:Qe.top+(Er?Ji-Lt:To)+ni,left:Qe.left+(Er?To:Ji-Lt)+ni,boxSizing:"border-box",position:"fixed"},je[yr]=je["max"+Mo]=Math.ceil(Qe.width)+ni,je[Sr]=je["max"+yd]=Math.ceil(Qe.height)+ni,je[yn]=je[yn+ka]=je[yn+Ba]=je[yn+Va]=je[yn+za]="0",je[$e]=qe[$e],je[$e+ka]=qe[$e+ka],je[$e+Ba]=qe[$e+Ba],je[$e+Va]=qe[$e+Va],je[$e+za]=qe[$e+za],Ge=rT(Oe,je,S),zi&&bt(0)),n?(Ja=n._initted,id(1),n.render(n.duration(),!0,!0),Dt=Vt(A.a)-he+se+ye,G=Math.abs(se-Dt)>1,z&&G&&Ge.splice(Ge.length-2,2),n.render(0,!0,!0),Ja||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),id(0)):Dt=se,T&&(T.value?T.style["overflow"+A.a.toUpperCase()]=T.value:T.style.removeProperty("overflow-"+A.a));else if(u&&bt()&&!x)for(Qe=u.parentNode;Qe&&Qe!==me;)Qe._pinOffset&&(Lt-=Qe._pinOffset,Ot-=Qe._pinOffset),Qe=Qe.parentNode;xs&&xs.forEach(function(V){return V.revert(!1,!0)}),R.start=Lt,R.end=Ot,At=Ht=zi?j:bt(),!x&&!zi&&!qs&&(At<j&&bt(j),R.scroll.rec=0),R.revert(!1,!0),ot=Ei(),N&&(Y=-1,N.restart(!0)),wi=0,n&&L&&(n._initted||K)&&n.progress()!==K&&n.progress(K||0,!0).render(n.time(),!0,!0),(Xe||vt!==R.progress||x||_||n&&!n._initted)&&(n&&!L&&(n._initted||vt||n.vars.immediateRender!==!1)&&n.totalProgress(x&&Lt<-.001&&!vt?Ct.utils.normalize(Lt,Ot,0):vt,!0),R.progress=Xe||(At-Lt)/se===vt?0:vt),f&&p&&(ue._pinOffset=Math.round(R.progress*Dt)),X&&X.invalidate(),isNaN(U)||(U-=Ct.getProperty(J,A.p),Z-=Ct.getProperty(Kt,A.p),Ph(J,A,U),Ph(ce,A,U-(Tt||0)),Ph(Kt,A,Z),Ph(oe,A,Z-(Tt||0))),Xe&&!zi&&R.update(),h&&!zi&&!ve&&(ve=!0,h(R),ve=!1)}},R.getVelocity=function(){return(bt()-Ht)/(Ei()-La)*1e3||0},R.endAnimation=function(){Ia(R.callbackAnimation),n&&(X?X.progress(1):n.paused()?L||Ia(n,R.direction<0,1):Ia(n,n.reversed()))},R.labelToScroll=function(et){return n&&n.labels&&(Lt||R.refresh()||Lt)+n.labels[et]/n.duration()*se||0},R.getTrailing=function(et){var _t=Jt.indexOf(R),it=R.direction>0?Jt.slice(0,_t).reverse():Jt.slice(_t+1);return(hn(et)?it.filter(function(Tt){return Tt.vars.preventOverlaps===et}):it).filter(function(Tt){return R.direction>0?Tt.end<=Lt:Tt.start>=Ot})},R.update=function(et,_t,it){if(!(x&&!it&&!et)){var Tt=zi===!0?j:R.scroll(),Qt=et?0:(Tt-Lt)/se,Wt=Qt<0?0:Qt>1?1:Qt||0,Ee=R.progress,Xe,Ae,ye,de,Ke,Se,mi,Zi;if(_t&&(Ht=At,At=x?bt():Tt,v&&(gt=ht,ht=n&&!L?n.totalProgress():Wt)),m&&f&&!wi&&!bh&&Mn&&(!Wt&&Lt<Tt+(Tt-Ht)/(Ei()-La)*m?Wt=1e-4:Wt===1&&Ot>Tt+(Tt-Ht)/(Ei()-La)*m&&(Wt=.9999)),Wt!==Ee&&R.enabled){if(Xe=R.isActive=!!Wt&&Wt<1,Ae=!!Ee&&Ee<1,Se=Xe!==Ae,Ke=Se||!!Wt!=!!Ee,R.direction=Wt>Ee?1:-1,R.progress=Wt,Ke&&!wi&&(ye=Wt&&!Ee?0:Wt===1?1:Ee===1?2:3,L&&(de=!Se&&O[ye+1]!=="none"&&O[ye+1]||O[ye],Zi=n&&(de==="complete"||de==="reset"||de in n))),P&&(Se||Zi)&&(Zi||d||!n)&&(Ai(P)?P(R):R.getTrailing(P).forEach(function(Ji){return Ji.endAnimation()})),L||(X&&!wi&&!bh?(X._dp._time-X._start!==X._time&&X.render(X._dp._time-X._start),X.resetTo?X.resetTo("totalProgress",Wt,n._tTime/n._tDur):(X.vars.totalProgress=Wt,X.invalidate().restart())):n&&n.totalProgress(Wt,!!(wi&&(ot||et)))),f){if(et&&p&&(ue.style[p+A.os2]=Ft),!z)ut(Na(he+Dt*Wt));else if(Ke){if(mi=!et&&Wt>Ee&&Ot+1>Tt&&Tt+1>=Zn(D,A),S)if(!et&&(Xe||mi)){var Fe=gs(f,!0),qe=Tt-Lt;Wg(f,me,Fe.top+(A===Je?qe:0)+ni,Fe.left+(A===Je?0:qe)+ni)}else Wg(f,ue);So(Xe||mi?Ge:F),G&&Wt<1&&Xe||ut(he+(Wt===1&&!mi?Dt:0))}}v&&!mt.tween&&!wi&&!bh&&N.restart(!0),a&&(Se||w&&Wt&&(Wt<1||!nd))&&Ha(a.targets).forEach(function(Ji){return Ji.classList[Xe||w?"add":"remove"](a.className)}),o&&!L&&!et&&o(R),Ke&&!wi?(L&&(Zi&&(de==="complete"?n.pause().totalProgress(1):de==="reset"?n.restart(!0).pause():de==="restart"?n.restart(!0):n[de]()),o&&o(R)),(Se||!nd)&&(c&&Se&&mo(R,c),H[ye]&&mo(R,H[ye]),w&&(Wt===1?R.kill(!1,1):H[ye]=0),Se||(ye=Wt===1?1:3,H[ye]&&mo(R,H[ye]))),M&&!Xe&&Math.abs(R.getVelocity())>(Ua(M)?M:2500)&&(Ia(R.callbackAnimation),X?X.progress(1):Ia(n,de==="reverse"?1:!Wt,1))):L&&o&&!wi&&o(R)}if(rt){var Qe=x?Tt/x.duration()*(x._caScrollDist||0):Tt;b(Qe+(J._isFlipped?1:0)),rt(Qe)}ft&&ft(-Tt/x.duration()*(x._caScrollDist||0))}},R.enable=function(et,_t){R.enabled||(R.enabled=!0,ci(D,"resize",Oa),I||ci(D,"scroll",_o),$&&ci(s,"refreshInit",$),et!==!1&&(R.progress=vt=0,At=Ht=Y=bt()),_t!==!1&&R.refresh())},R.getTween=function(et){return et&&mt?mt.tween:X},R.setPositions=function(et,_t,it,Tt){if(x){var Qt=x.scrollTrigger,Wt=x.duration(),Ee=Qt.end-Qt.start;et=Qt.start+Ee*et/Wt,_t=Qt.start+Ee*_t/Wt}R.refresh(!1,!1,{start:Ug(et,it&&!!R._startClamp),end:Ug(_t,it&&!!R._endClamp)},Tt),R.update()},R.adjustPinSpacing=function(et){if(C&&et){var _t=C.indexOf(A.d)+1;C[_t]=parseFloat(C[_t])+et+ni,C[1]=parseFloat(C[1])+et+ni,So(C)}},R.disable=function(et,_t){if(et!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,_t||X&&X.pause(),j=0,Nt&&(Nt.uncache=1),$&&li(s,"refreshInit",$),N&&(N.pause(),mt.tween&&mt.tween.kill()&&(mt.tween=0)),!I)){for(var it=Jt.length;it--;)if(Jt[it].scroller===D&&Jt[it]!==R)return;li(D,"resize",Oa),I||li(D,"scroll",_o)}},R.kill=function(et,_t){R.disable(et,_t),X&&!_t&&X.kill(),l&&delete fd[l];var it=Jt.indexOf(R);it>=0&&Jt.splice(it,1),it===Bi&&Nh>0&&Bi--,it=0,Jt.forEach(function(Tt){return Tt.scroller===R.scroller&&(it=1)}),it||zi||qs||(R.scroll.rec=0),n&&(n.scrollTrigger=null,et&&n.revert({kill:!1}),_t||n.kill()),ce&&[ce,oe,J,Kt].forEach(function(Tt){return Tt.parentNode&&Tt.parentNode.removeChild(Tt)}),Ga===R&&(Ga=0),f&&(Nt&&(Nt.uncache=1),it=0,Jt.forEach(function(Tt){return Tt.pin===f&&it++}),it||(Nt.spacer=0)),i.onKill&&i.onKill(R)},Jt.push(R),R.enable(!1,!1),lt&&lt(R),n&&n.add&&!se){var st=R.update;R.update=function(){R.update=st,Zt.cache++,Lt||Ot||R.refresh()},Ct.delayedCall(.01,R.update),se=.01,Lt=Ot=0}else R.refresh();f&&iT()},s.register=function(i){return xo||(Ct=i||t_(),jg()&&window.document&&s.enable(),xo=Da),xo},s.defaults=function(i){if(i)for(var n in i)Ah[n]=i[n];return Ah},s.disable=function(i,n){Da=0,Jt.forEach(function(o){return o[n?"kill":"disable"](i)}),li($t,"wheel",_o),li(_e,"scroll",_o),clearInterval(Mh),li(_e,"touchcancel",Yn),li(me,"touchstart",Yn),wh(li,_e,"pointerdown,touchstart,mousedown",Og),wh(li,_e,"pointerup,touchend,mouseup",Fg),Fh.kill(),Th(li);for(var r=0;r<Zt.length;r+=3)Eh(li,Zt[r],Zt[r+1]),Eh(li,Zt[r],Zt[r+2])},s.enable=function(){if($t=window,_e=document,un=_e.documentElement,me=_e.body,Ct){if(Ha=Ct.utils.toArray,Fa=Ct.utils.clamp,hd=Ct.core.context||Yn,id=Ct.core.suppressOverwrites||Yn,gd=$t.history.scrollRestoration||"auto",dd=$t.pageYOffset||0,Ct.core.globals("ScrollTrigger",s),me){Da=1,yo=document.createElement("div"),yo.style.height="100vh",yo.style.position="absolute",h_(),Jb(),Ve.register(Ct),s.isTouch=Ve.isTouch,Xs=Ve.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),cd=Ve.isTouch===1,ci($t,"wheel",_o),md=[$t,_e,un,me],Ct.matchMedia?(s.matchMedia=function(h){var d=Ct.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Ct.addEventListener("matchMediaInit",function(){l_(),Md()}),Ct.addEventListener("matchMediaRevert",function(){return a_()}),Ct.addEventListener("matchMedia",function(){vr(0,1),wr("matchMedia")}),Ct.matchMedia().add("(orientation: portrait)",function(){return rd(),rd})):console.warn("Requires GSAP 3.11.0 or later"),rd(),ci(_e,"scroll",_o);var i=me.hasAttribute("style"),n=me.style,r=n.borderTopStyle,o=Ct.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=gs(me),Je.m=Math.round(a.top+Je.sc())||0,Ti.m=Math.round(a.left+Ti.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),i||(me.setAttribute("style",""),me.removeAttribute("style")),Mh=setInterval(kg,250),Ct.delayedCall(.5,function(){return bh=0}),ci(_e,"touchcancel",Yn),ci(me,"touchstart",Yn),wh(ci,_e,"pointerdown,touchstart,mousedown",Og),wh(ci,_e,"pointerup,touchend,mouseup",Fg),ld=Ct.utils.checkPrefix("transform"),Uh.push(ld),xo=Ei(),Fh=Ct.delayedCall(.2,vr).pause(),vo=[_e,"visibilitychange",function(){var h=$t.innerWidth,d=$t.innerHeight;_e.hidden?(Lg=h,Dg=d):(Lg!==h||Dg!==d)&&Oa()},_e,"DOMContentLoaded",vr,$t,"load",vr,$t,"resize",Oa],Th(ci),Jt.forEach(function(h){return h.enable(0,1)}),l=0;l<Zt.length;l+=3)Eh(li,Zt[l],Zt[l+1]),Eh(li,Zt[l],Zt[l+2])}else if(_e){var c=function h(){s.enable(),_e.removeEventListener("DOMContentLoaded",h)};_e.addEventListener("DOMContentLoaded",c)}}},s.config=function(i){"limitCallbacks"in i&&(nd=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(Mh)||(Mh=n)&&setInterval(kg,n),"ignoreMobileResize"in i&&(cd=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Th(li)||Th(ci,i.autoRefreshEvents||"none"),$g=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,n){var r=Oi(i),o=Zt.indexOf(r),a=br(r);~o&&Zt.splice(o,a?6:2),n&&(a?Dn.unshift($t,n,me,n,un,n):Dn.unshift(r,n))},s.clearMatchMedia=function(i){Jt.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},s.isInViewport=function(i,n,r){var o=(hn(i)?Oi(i):i).getBoundingClientRect(),a=o[r?yr:Sr]*n||0;return r?o.right-a>0&&o.left+a<$t.innerWidth:o.bottom-a>0&&o.top+a<$t.innerHeight},s.positionInViewport=function(i,n,r){hn(i)&&(i=Oi(i));var o=i.getBoundingClientRect(),a=o[r?yr:Sr],l=n==null?a/2:n in zh?zh[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return r?(o.left+l)/$t.innerWidth:(o.top+l)/$t.innerHeight},s.killAll=function(i){if(Jt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),i!==!0){var n=Tr.killAll||[];Tr={},n.forEach(function(r){return r()})}},s})();qt.version="3.15.1";qt.saveStyles=function(s){return s?Ha(s).forEach(function(t){if(t&&t.style){var e=cn.indexOf(t);e>=0&&cn.splice(e,5),cn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ct.core.getCache(t),hd())}}):cn};qt.revert=function(s,t){return Md(!s,t)};qt.create=function(s,t){return new qt(s,t)};qt.refresh=function(s){return s?Oa(!0):(xo||qt.register())&&vr(!0)};qt.update=function(s){return++Zt.cache&&_s(s===!0?2:0)};qt.clearScrollMemory=c_;qt.maxScroll=function(s,t){return Zn(s,t?Ti:Je)};qt.getScrollFunc=function(s,t){return ps(Oi(s),t?Ti:Je)};qt.getById=function(s){return fd[s]};qt.getAll=function(){return Jt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};qt.isScrolling=function(){return!!Mn};qt.snapDirectional=Sd;qt.addEventListener=function(s,t){var e=Tr[s]||(Tr[s]=[]);~e.indexOf(t)||e.push(t)};qt.removeEventListener=function(s,t){var e=Tr[s],i=e&&e.indexOf(t);i>=0&&e.splice(i,1)};qt.batch=function(s,t){var e=[],i={},n=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Ct.delayedCall(n,function(){h(d,u),d=[],u=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),u.push(p),r<=d.length&&f.progress(1)}},a;for(a in t)i[a]=a.substr(0,2)==="on"&&Ai(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Ai(r)&&(r=r(),ci(qt,"refresh",function(){return r=t.batchMax()})),Ha(s).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,e.push(qt.create(c))}),e};var qg=function(t,e,i,n){return e>n?t(n):e<0&&t(0),i>n?(n-e)/(i-e):i<0?e/(e-i):1},ad=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ve.isTouch?" pinch-zoom":""):"none",t===un&&s(me,e)},Ih={auto:1,scroll:1},aT=function(t){var e=t.event,i=t.target,n=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Ct.core.getCache(r),a=Ei(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==me&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Ih[(l=Sn(r)).overflowY]||Ih[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==i&&!br(r)&&(Ih[(l=Sn(r)).overflowY]||Ih[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},f_=function(t,e,i,n){return Ve.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:n=n&&aT,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&ci(_e,Ve.eventTypes[0],Zg,!1,!0)},onDisable:function(){return li(_e,Ve.eventTypes[0],Zg,!0)}})},lT=/(input|label|select|textarea)/i,Yg,Zg=function(t){var e=lT.test(t.target.tagName);(e||Yg)&&(t._gsapAllow=!0,Yg=e)},cT=function(t){xr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,i=e.normalizeScrollX,n=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=Oi(t.target)||un,h=Ct.core.globals().ScrollSmoother,d=h&&h.get(),u=Xs&&(t.content&&Oi(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=ps(c,Je),p=ps(c,Ti),_=1,m=(Ve.isTouch&&$t.visualViewport?$t.visualViewport.scale*$t.visualViewport.width:$t.outerWidth)/$t.innerWidth,g=0,y=Ai(n)?function(){return n(a)}:function(){return n||2.8},w,v,S=f_(c,t.type,!0,r),E=function(){return v=!1},x=Yn,M=Yn,P=function(){l=Zn(c,Je),M=Fa(Xs?1:0,l),i&&(x=Fa(0,Zn(c,Ti))),w=Mr},A=function(){u._gsap.y=Na(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},L=function(){if(v){requestAnimationFrame(E);var Q=Na(a.deltaY/2),W=M(f.v-Q);if(u&&W!==f.v+f.offset){f.offset=W-f.v;var R=Na((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",f.cacheID=Zt.cache,_s()}return!0}f.offset&&A(),v=!0},D,B,I,z,H=function(){P(),D.isActive()&&D.vars.scrollY>l&&(f()>l?D.progress(1)&&f(l):D.resetTo("scrollY",l))};return u&&Ct.set(u,{y:"+=0"}),t.ignoreCheck=function(O){return Xs&&O.type==="touchmove"&&L(O)||_>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},t.onPress=function(){v=!1;var O=_;_=Na(($t.visualViewport&&$t.visualViewport.scale||1)/m),D.pause(),O!==_&&ad(c,_>1.01?!0:i?!1:"x"),B=p(),I=f(),P(),w=Mr},t.onRelease=t.onGestureStart=function(O,Q){if(f.offset&&A(),!Q)z.restart(!0);else{Zt.cache++;var W=y(),R,$;i&&(R=p(),$=R+W*.05*-O.velocityX/.227,W*=qg(p,R,$,Zn(c,Ti)),D.vars.scrollX=x($)),R=f(),$=R+W*.05*-O.velocityY/.227,W*=qg(f,R,$,Zn(c,Je)),D.vars.scrollY=M($),D.invalidate().duration(W).play(.01),(Xs&&D.vars.scrollY>=l||R>=l-1)&&Ct.to({},{onUpdate:H,duration:W})}o&&o(O)},t.onWheel=function(){D._ts&&D.pause(),Ei()-g>1e3&&(w=0,g=Ei())},t.onChange=function(O,Q,W,R,$){if(Mr!==w&&P(),Q&&i&&p(x(R[2]===Q?B+(O.startX-O.x):p()+Q-R[1])),W){f.offset&&A();var xt=$[2]===W,Et=xt?I+O.startY-O.y:f()+W-$[1],Y=M(Et);xt&&Et!==Y&&(I+=Y-Et),f(Y)}(W||Q)&&_s()},t.onEnable=function(){ad(c,i?!1:"x"),qt.addEventListener("refresh",H),ci($t,"resize",H),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),S.enable()},t.onDisable=function(){ad(c,!0),li($t,"resize",H),qt.removeEventListener("refresh",H),S.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ve(t),a.iOS=Xs,Xs&&!f()&&f(1),Xs&&Ct.ticker.add(Yn),z=a._dc,D=Ct.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:u_(f,f(),function(){return D.pause()})},onUpdate:_s,onComplete:z.vars.onComplete}),a};qt.sort=function(s){if(Ai(s))return Jt.sort(s);var t=$t.pageYOffset||0;return qt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+$t.innerHeight}),Jt.sort(s||function(e,i){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};qt.observe=function(s){return new Ve(s)};qt.normalizeScroll=function(s){if(typeof s>"u")return Fi;if(s===!0&&Fi)return Fi.enable();if(s===!1){Fi&&Fi.kill(),Fi=s;return}var t=s instanceof Ve?s:cT(s);return Fi&&Fi.target===t.target&&Fi.kill(),br(t.target)&&(Fi=t),t};qt.core={_getVelocityProp:Sh,_inputObserver:f_,_scrollers:Zt,_proxies:Dn,bridge:{ss:function(){Mn||wr("scrollStart"),Mn=Ei()},ref:function(){return wi}}};t_()&&Ct.registerPlugin(qt);var Xa,qa,d_=typeof Symbol=="function"?Symbol():"_split",Td,hT=()=>Td||Za.register(window.gsap),p_=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Ya=s=>s?typeof s=="string"?Ya(document.querySelectorAll(s)):"length"in s?Array.from(s).reduce((t,e)=>(typeof e=="string"?t.push(...Ya(e)):t.push(e),t),[]):[s]:[],m_=s=>Ya(s).filter(t=>t&&t.nodeType===1),Vh=[],bd=function(){},uT={add:s=>s()},fT=/\s+/g,g_=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Gh={left:0,top:0,width:0,height:0},dT=(s,t)=>{for(;++t<s.length&&s[t]===Gh;);return s[t]||Gh},__=({element:s,html:t,ariaL:e,ariaH:i})=>{s.innerHTML=t,e?s.setAttribute("aria-label",e):s.removeAttribute("aria-label"),i?s.setAttribute("aria-hidden",i):s.removeAttribute("aria-hidden")},x_=(s,t)=>{if(t){let e=new Set(s.join("").match(t)||Vh),i=s.length,n,r,o,a;if(e.size)for(;--i>-1;){r=s[i];for(o of e)if(o.startsWith(r)&&o.length>r.length){for(n=0,a=r;o.startsWith(a+=s[i+ ++n])&&a.length<o.length;);if(n&&a.length===o.length){s[i]=o,s.splice(i+1,n);break}}}}return s},v_=s=>window.getComputedStyle(s).display==="inline"&&(s.style.display="inline-block"),bo=(s,t,e)=>t.insertBefore(typeof s=="string"?document.createTextNode(s):s,e),wd=(s,t,e)=>{let i=t[s+"sClass"]||"",{tag:n="div",aria:r="auto",propIndex:o=!1}=t,a=s==="line"?"block":"inline-block",l=i.indexOf("++")>-1,c=h=>{let d=document.createElement(n),u=e.length+1;return i&&(d.className=i+(l?" "+i+u:"")),o&&d.style.setProperty("--"+s,u+""),r!=="none"&&d.setAttribute("aria-hidden","true"),n!=="span"&&(d.style.position="relative",d.style.display=a),d.textContent=h,e.push(d),d};return l&&(i=i.replace("++","")),c.collection=e,c},pT=(s,t,e,i)=>{let n=wd("line",e,i),r=window.getComputedStyle(s).textAlign||"left";return(o,a)=>{let l=n("");for(l.style.textAlign=r,s.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},y_=(s,t,e,i,n,r,o,a,l,c)=>{var h;let d=Array.from(s.childNodes),u=0,{wordDelimiter:f,reduceWhiteSpace:p=!0,prepareText:_}=t,m=s.getBoundingClientRect(),g=m,y=!p&&window.getComputedStyle(s).whiteSpace.substring(0,3)==="pre",w=r&&c&&window.getComputedStyle(s).direction==="rtl",v=0,S=e.collection,E,x,M,P,A,L,D,B,I,z,H,O,Q,W,R,$,xt,Et;for(typeof f=="object"?(M=f.delimiter||f,x=f.replaceWith||""):x=f===""?"":f||" ",E=x!==" ";u<d.length;u++)if(P=d[u],P.nodeType===3){for(R=P.textContent||"",p?R=R.replace(fT," "):y&&(R=R.replace(/\n/g,x+`
`)),_&&(R=_(R,s)),P.textContent=R,A=x||M?R.split(M||x):R.match(a)||Vh,xt=A[A.length-1],B=E?xt.slice(-1)===" ":!xt,xt||A.pop(),g=m,D=E?A[0].charAt(0)===" ":!A[0],D&&bo(" ",s,P),A[0]||A.shift(),x_(A,l),r&&c||(P.textContent=""),I=1;I<=A.length;I++)if($=A[I-1],!p&&y&&$.charAt(0)===`
`&&((h=P.previousSibling)==null||h.remove(),bo(document.createElement("br"),s,P),$=$.slice(1)),!p&&$==="")bo(x,s,P);else if($===" ")s.insertBefore(document.createTextNode(" "),P);else{if(E&&$.charAt(0)===" "&&bo(" ",s,P),v&&I===1&&!D&&S.indexOf(v.parentNode)>-1?(L=S[S.length-1],L.appendChild(document.createTextNode(i?"":$))):(L=e(i?"":$),bo(L,s,P),v&&I===1&&!D&&L.insertBefore(v,L.firstChild)),i){if(H=p_?x_([...p_.segment($)].map(Y=>Y.segment),l):$.match(a)||Vh,l){let Y=$.match(l);Y&&Y.some(ot=>H.indexOf(ot)<0)&&(H=$.match(a)||Vh)}for(Et=0;Et<H.length;Et++)L.appendChild(H[Et]===" "?document.createTextNode(" "):i(H[Et]))}if(r&&c){if(R=P.textContent=R.substring($.length+1,R.length),z=L.getBoundingClientRect(),z.top>g.top&&(w?z.left>=g.left:z.left<=g.left)){for(O=s.cloneNode(),Q=s.childNodes[0];Q&&Q!==L;)W=Q,Q=Q.nextSibling,O.appendChild(W);s.parentNode.insertBefore(O,s),n&&v_(O)}g=z}(I<A.length||B)&&bo(I>=A.length?" ":E&&$.slice(-1)===" "?" "+x:x,s,P)}s.removeChild(P),v=0}else P.nodeType===1&&(o&&o.indexOf(P)>-1?(S.indexOf(P.previousSibling)>-1&&S[S.length-1].appendChild(P),v=P):(y_(P,t,e,i,n,r,o,a,l,!0),v=0),n&&v_(P))},S_=class M_{constructor(t,e){this.isSplit=!1,hT(),this.elements=m_(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(r=>{var o;e.overwrite!==!1&&((o=r[d_])==null||o._data.orig.filter(({element:a})=>a===r).forEach(__)),r[d_]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let i=[],n=()=>{let r=i.length,o;for(;r--;){o=i[r];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:i,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(n,200)})},bd(this),this.split(e)}split(t){return(this._ctx||uT).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:i="auto",deepSlice:n=!0,smartWrap:r,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=e.indexOf("lines")>-1,d=e.indexOf("chars")>-1,u=e.indexOf("words")>-1,f=d&&!u&&!h,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=p?new RegExp(p.source+"|"+g_.source,"gu"):g_,m=!!t.ignore&&m_(t.ignore),{orig:g,animTime:y,obs:w}=this._data,v;(d||u||h)&&(this.elements.forEach((S,E)=>{g[E]={element:S,html:S.innerHTML,ariaL:S.getAttribute("aria-label"),ariaH:S.getAttribute("aria-hidden")},i==="auto"?S.setAttribute("aria-label",(S.textContent||"").trim()):i==="hidden"&&S.setAttribute("aria-hidden","true");let x=[],M=[],P=[],A=d?wd("char",t,x):null,L=wd("word",t,M),D,B,I,z;if(y_(S,t,L,A,f,n&&(h||f),m,_,p,!1),h){let H=Ya(S.childNodes),O=pT(S,H,t,P),Q,W=[],R=0,$=window.getComputedStyle(S).direction==="rtl",xt=H.map(ot=>ot.nodeType===1?ot.getBoundingClientRect():Gh),Et=Gh,Y;for(D=0;D<H.length;D++)Q=H[D],Q.nodeType===1&&(Q.nodeName==="BR"?((!D||H[D-1].nodeName!=="BR")&&(W.push(Q),O(R,D+1)),R=D+1,Et=dT(xt,D)):(Y=xt[D],D&&Y.top>Et.top&&($?Y.left+Y.width>Et.left+1:Y.left<Et.left+Et.width-1)&&(O(R,D),R=D),Et=Y));R<D&&O(R,D),W.forEach(ot=>{var vt;return(vt=ot.parentNode)==null?void 0:vt.removeChild(ot)})}if(!u){for(D=0;D<M.length;D++)if(B=M[D],d||!B.nextSibling||B.nextSibling.nodeType!==3)if(r&&!h){for(I=document.createElement("span"),I.style.whiteSpace="nowrap";B.firstChild;)I.appendChild(B.firstChild);B.replaceWith(I)}else B.replaceWith(...B.childNodes);else z=B.nextSibling,z&&z.nodeType===3&&(z.textContent=(B.textContent||"")+(z.textContent||""),B.remove());M.length=0,S.normalize()}this.lines.push(...P),this.words.push(...M),this.chars.push(...x)}),c&&this[c]&&this.masks.push(...this[c].map(S=>{let E=S.cloneNode();return S.replaceWith(E),E.appendChild(S),S.className&&(E.className=S.className.trim().split(" ").map(x=>x+"-mask").join(" ")),E.style.overflow="clip",E.style.verticalAlign="top",E}))),this.isSplit=!0,qa&&h&&a&&qa.addEventListener("loadingdone",this._split),(v=o&&o(this))&&v.totalTime&&(this._data.anim=y?v.totalTime(y):v),h&&a&&this.elements.forEach((S,E)=>{g[E].width=S.offsetWidth,w&&w.observe(S)})}),this}kill(){let{obs:t,t:e}=this._data;t&&t.disconnect(),clearTimeout(e),qa?.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:i,anim:n}=this._data;this.kill(),i.forEach(__),this.chars.length=this.words.length=this.lines.length=i.length=this.masks.length=0,this.isSplit=!1,n&&(this._data.animTime=n.totalTime(),n.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new M_(t,e)}static register(t){Xa=Xa||t||window.gsap,Xa&&(Ya=Xa.utils.toArray,bd=Xa.core.context||bd),!Td&&window.innerWidth>0&&(qa=document.fonts,Td=!0)}};S_.version="3.15.1";var Za=S_;var b_="1.3.27";function E_(s,t,e){return Math.max(s,Math.min(t,e))}function mT(s,t,e){return(1-e)*s+e*t}function gT(s,t,e,i){return mT(s,t,1-Math.exp(-e*i))}function _T(s,t){return(s%t+t)%t}var xT=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let e=E_(0,this.currentTime/this.duration,1);t=e>=1;let i=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=gT(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:i,easing:n,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function vT(s,t){let e;return function(...i){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,i)},t)}}var yT=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(s,t,{autoResize:e=!0,debounce:i=250}={}){this.wrapper=s,this.content=t,e&&(this.debouncedResize=vT(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},A_=class{events={};emit(s,...t){let e=this.events[s]||[];for(let i=0,n=e.length;i<n;i++)e[i]?.(...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{this.events[s]=this.events[s]?.filter(e=>t!==e)}}off(s,t){this.events[s]=this.events[s]?.filter(e=>t!==e)}destroy(){this.events={}}},ST=100/6,Ys={passive:!1};function T_(s,t){return s===1?ST:s===2?t:1}var MT=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new A_;constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ys),this.element.addEventListener("touchstart",this.onTouchStart,Ys),this.element.addEventListener("touchmove",this.onTouchMove,Ys),this.element.addEventListener("touchend",this.onTouchEnd,Ys)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ys),this.element.removeEventListener("touchstart",this.onTouchStart,Ys),this.element.removeEventListener("touchmove",this.onTouchMove,Ys),this.element.removeEventListener("touchend",this.onTouchEnd,Ys)}onTouchStart=s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})};onTouchMove=s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,i=-(t-this.touchStart.x)*this.options.touchMultiplier,n=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:s})};onTouchEnd=s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})};onWheel=s=>{let{deltaX:t,deltaY:e,deltaMode:i}=s,n=T_(i,this.window.width),r=T_(i,this.window.height);t*=n,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},w_=s=>Math.min(1,1.001-2**(-10*s)),C_=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new xT;emitter=new A_;dimensions;virtualScroll;constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:m,virtualScroll:g,overscroll:y=!0,autoRaf:w=!1,anchors:v=!1,autoToggle:S=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:x=!1,naiveDimensions:M=x,stopInertiaOnNavigate:P=!1,respectReducedMotion:A=!0}={}){window.lenisVersion=b_,window.lenis||(window.lenis={}),window.lenis.version=b_,d==="horizontal"&&(window.lenis.horizontal=!0),n===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=w_:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:i,syncTouch:n,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:p,autoResize:_,prevent:m,virtualScroll:g,overscroll:y,autoRaf:w,anchors:v,autoToggle:S,allowNestedScroll:E,naiveDimensions:M,stopInertiaOnNavigate:P,respectReducedMotion:A},this.dimensions=new yT(s,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new MT(e,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}onScrollEnd=s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()};setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}onClick=s=>{let t=s.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),e=new URL(window.location.href);if(this.options.anchors){let i=t.find(n=>e.host===n.host&&e.pathname===n.pathname&&n.hash);if(i){let n=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(i.hash);this.scrollTo(r,n);return}}if(this.options.stopInertiaOnNavigate&&t.some(i=>e.host===i.host&&e.pathname!==i.pathname)){this.reset();return}};onPointerDown=s=>{s.button===1&&this.reset()};isTouchOnSelectionHandle(s){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=s.targetTouches[0]??s.changedTouches[0];if(!e)return!1;let i=t.getRangeAt(0).getClientRects();if(i.length===0)return!1;let n=i[0],r=i[i.length-1],o=40,a=Math.hypot(e.clientX-n.left,e.clientY-n.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}onVirtualScroll=s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:i}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:i}),i.ctrlKey||i.lenisStopPropagation)return;let n=i.type.includes("touch"),r=i.type.includes("wheel");if(n&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&n&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||n&&p.hasAttribute?.("data-lenis-prevent-touch")||r&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();let u=n&&this.options.syncTouch,f=n&&i.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(s,{offset:t=0,immediate:e=!1,lock:i=!1,programmatic:n=!0,lerp:r=n?this.options.lerp:void 0,duration:o=n?this.options.duration:void 0,easing:a=n?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(n?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=s,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(p=u),p){if(this.options.wrapper!==window){let v=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?v.left:v.top}let _=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),y=getComputedStyle(this.rootElement),w=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(w)?0:w)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;let p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=E_(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=w_:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:r,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),n&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){let i=Date.now();s._lenis||(s._lenis={});let n=s._lenis,r,o,a,l,c,h,d,u,f,p;if(i-(n.time??0)>2e3){n.time=Date.now();let E=window.getComputedStyle(s);if(n.computedStyle=E,r=["auto","overlay","scroll"].includes(E.overflowX),o=["auto","overlay","scroll"].includes(E.overflowY),c=["auto"].includes(E.overscrollBehaviorX),h=["auto"].includes(E.overscrollBehaviorY),n.hasOverflowX=r,n.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,u=s.scrollHeight,f=s.clientWidth,p=s.clientHeight,a=d>f,l=u>p,n.isScrollableX=a,n.isScrollableY=l,n.scrollWidth=d,n.scrollHeight=u,n.clientWidth=f,n.clientHeight=p,n.hasOverscrollBehaviorX=c,n.hasOverscrollBehaviorY=h}else a=n.isScrollableX,l=n.isScrollableY,r=n.hasOverflowX,o=n.hasOverflowY,d=n.scrollWidth,u=n.scrollHeight,f=n.clientWidth,p=n.clientHeight,c=n.hasOverscrollBehaviorX,h=n.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,g,y,w,v,S;if(_==="horizontal")m=Math.round(s.scrollLeft),g=d-f,y=t,w=r,v=a,S=c;else if(_==="vertical")m=Math.round(s.scrollTop),g=u-p,y=e,w=o,v=l,S=h;else return!1;return!S&&(m>=g||m<=0)?!0:(y>0?m<g:m>0)&&w&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?_T(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};Ue.registerPlugin(qt,Za);function yA(){window.__h2&&(window.__h2(),window.__h2=null);let s=matchMedia("(prefers-reduced-motion: reduce)").matches,t=[],e=null;if(!s){e=new C_({duration:1.15,smoothWheel:!0}),e.on("scroll",qt.update);let a=l=>e.raf(l*1e3);Ue.ticker.add(a),Ue.ticker.lagSmoothing(0),t.push(()=>{Ue.ticker.remove(a),e.destroy()}),document.querySelectorAll('a[href^="#"]').forEach(l=>l.addEventListener("click",c=>{let h=l.getAttribute("href");h.length>1&&document.querySelector(h)&&(c.preventDefault(),e.scrollTo(h,{offset:-20}))}))}let i=document.getElementById("h2-canvas"),n=0,r;if(i){r=new Jc({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"}),r.setPixelRatio(Math.min(devicePixelRatio,2));let a=new zo,l=new Ri(38,1,.1,100);l.position.set(0,0,9);let c=new es;a.add(c);class h extends Vi{getPoint(D,B=new k){let I=D*Math.PI*2,z=1+Math.sin(I)**2;return B.set(3.1*Math.cos(I)/z,1.7*Math.sin(I)*Math.cos(I)/z-.35,.55*Math.sin(2*I)*.7)}}let d=(L,D)=>new gn({transparent:!0,depthWrite:!1,blending:L?$r:Ls,side:L?ui:Bn,uniforms:{uT:{value:0},uA:{value:L?.35:1},uC:{value:new ne("#c4ff2e")}},vertexShader:"varying vec3 vN;varying vec3 vV;varying vec2 vU;void main(){vU=uv;vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vV=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}",fragmentShader:"uniform float uT;uniform float uA;uniform vec3 uC;varying vec3 vN;varying vec3 vV;varying vec2 vU;void main(){float f=pow(1.-abs(dot(normalize(vN),normalize(vV))),2.2);float s=smoothstep(.55,1.,sin(vU.x*60.-uT*2.2)*.5+.5);vec3 base=uC*(.35+.9*f);vec3 col=base+vec3(.9,1.,.6)*s*.35+vec3(1.)*pow(f,5.)*.6;gl_FragColor=vec4(col,uA*(.55+.45*f));}"}),u=new Ii(new Yr(new h,320,.3,36,!0),d(!1)),f=new Ii(new Yr(new h,160,.62,20,!0),d(!0)),p=new $o(.5,.12,24,64),_=new Ii(p,d(!1)),m=new Ii(p,d(!1));_.position.set(-1.45,1.9,0),m.position.set(1.45,1.9,0),c.add(f,u,_,m);let g=1400,y=new Float32Array(g*3);for(let L=0;L<g;L++)y.set([(Math.random()-.5)*22,(Math.random()-.5)*12,(Math.random()-.5)*10-2],L*3);let w=new en;w.setAttribute("position",new mn(y,3));let v=new Ho(w,new Xr({color:"#c4ff2e",size:.028,transparent:!0,opacity:.55,depthWrite:!1,blending:$r}));a.add(v);let S={mx:0,my:0,sx:0,sy:0,scroll:0,vis:!0},E=()=>{let L=i.clientWidth,D=i.clientHeight;r.setSize(L,D,!1),l.aspect=L/D;let B=L>900;c.position.set(B?3.7:0,B?-.2:2.2,0);let I=B?.8:Math.min(.62,L/640);c.scale.setScalar(I),l.updateProjectionMatrix()};E(),addEventListener("resize",E),t.push(()=>removeEventListener("resize",E));let x=L=>{S.mx=L.clientX/innerWidth-.5,S.my=L.clientY/innerHeight-.5};addEventListener("pointermove",x,{passive:!0}),t.push(()=>removeEventListener("pointermove",x));let M=new IntersectionObserver(([L])=>S.vis=L.isIntersecting);M.observe(i),t.push(()=>M.disconnect());let P=new jo,A=()=>{if(n=requestAnimationFrame(A),!S.vis)return;let L=P.getElapsedTime();S.sx+=(S.mx-S.sx)*.05,S.sy+=(S.my-S.sy)*.05,[u,f,_,m].forEach(D=>D.material.uniforms.uT.value=L),c.rotation.y=Math.sin(L*.35)*.35+S.sx*.9+S.scroll*Math.PI*1.2,c.rotation.x=S.sy*.5+S.scroll*.4,c.rotation.z=Math.sin(L*.25)*.05,c.position.y+=((i.clientWidth>900?-.2:2.2)+Math.sin(L*.8)*.12-c.position.y)*.05,v.rotation.y=L*.02+S.scroll*.8,v.position.y=S.scroll*3,r.render(a,l)};s?(A(),cancelAnimationFrame(n)):A(),qt.create({trigger:"#hero",start:"top top",end:"bottom top",scrub:!0,onUpdate:L=>S.scroll=L.progress}),t.push(()=>{cancelAnimationFrame(n),r.dispose(),u.geometry.dispose(),f.geometry.dispose(),p.dispose()})}let o=Ue.context(()=>{let a=document.querySelector(".h2-split");if(a&&!s){let d=Za.create(a,{type:"lines,words",mask:"lines",linesClass:"h2-line"});Ue.from(d.words,{yPercent:115,duration:1.3,ease:"expo.out",stagger:.07,delay:.15}),Ue.from(".h2-eyebrow,.h2-lead,.h2-actions,.h2-hint",{y:30,opacity:0,duration:1.1,ease:"expo.out",stagger:.12,delay:.7})}s||Ue.to(".h2-hero-copy",{yPercent:-18,opacity:0,ease:"none",scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom 20%",scrub:!0}});let l=document.querySelector(".h2-words");if(l){let d=Za.create(l,{type:"words"});s?Ue.set(d.words,{opacity:1}):Ue.fromTo(d.words,{opacity:.14},{opacity:1,ease:"none",stagger:.5,scrollTrigger:{trigger:l,start:"top 78%",end:"bottom 45%",scrub:!0}})}document.querySelectorAll(".h2-title,.h2-giant").forEach(d=>{s||Ue.from(d,{y:70,opacity:0,filter:"blur(12px)",duration:1.2,ease:"expo.out",scrollTrigger:{trigger:d,start:"top 85%"}})}),document.querySelectorAll(".h2-label").forEach(d=>{s||Ue.from(d,{x:-24,opacity:0,duration:1,ease:"expo.out",scrollTrigger:{trigger:d,start:"top 92%"}})});let c=Ue.utils.toArray(".h2-card");c.forEach((d,u)=>{s||u===c.length-1||Ue.to(d.querySelector(".h2-card-in"),{scale:.92-(c.length-u)*.01,opacity:.45,filter:"blur(3px)",ease:"none",scrollTrigger:{trigger:c[u+1],start:"top 82%",end:"top 18%",scrub:!0}})}),Ue.matchMedia().add("(min-width: 861px) and (prefers-reduced-motion: no-preference)",()=>{[".h2-process",".h2-work"].forEach(d=>{let u=document.querySelector(d);if(!u)return;let f=u.querySelector(".h2-track"),p=u.querySelector(".h2-bar i"),_=()=>Math.max(0,f.scrollWidth-innerWidth+parseFloat(getComputedStyle(f).paddingLeft)*0+80);Ue.to(f,{x:()=>-_(),ease:"none",scrollTrigger:{trigger:u,start:"top top",end:()=>"+="+_(),pin:u.querySelector(".h2-pin"),scrub:.6,invalidateOnRefresh:!0,anticipatePin:1,onUpdate:m=>{p&&(p.style.transform=`scaleX(${m.progress})`)}}}),u.querySelectorAll(".h2-step,.h2-project").forEach(m=>{Ue.from(m,{opacity:.25,scale:.94,ease:"none",scrollTrigger:{trigger:m,containerAnimation:null,start:"left 100%",toggleActions:"play none none none"}})})})}),document.querySelectorAll(".h2-shot").forEach(d=>{let u=d.querySelector("img");d.addEventListener("pointermove",f=>{let p=d.getBoundingClientRect();Ue.to(u,{x:(f.clientX-p.left-p.width/2)*.03,y:(f.clientY-p.top-p.height/2)*.03,scale:1.06,duration:.8,ease:"power3.out"})}),d.addEventListener("pointerleave",()=>Ue.to(u,{x:0,y:0,scale:1,duration:.9,ease:"power3.out"}))}),document.querySelectorAll(".h2-actions .button,.h2-ghost").forEach(d=>{d.addEventListener("pointermove",u=>{let f=d.getBoundingClientRect();Ue.to(d,{x:(u.clientX-f.left-f.width/2)*.25,y:(u.clientY-f.top-f.height/2)*.35,duration:.5,ease:"power3.out"})}),d.addEventListener("pointerleave",()=>Ue.to(d,{x:0,y:0,duration:.7,ease:"elastic.out(1,.5)"}))})});setTimeout(()=>qt.refresh(),600),addEventListener("load",()=>qt.refresh()),window.__h2=()=>{o.revert(),qt.getAll().forEach(a=>a.kill()),t.forEach(a=>{try{a()}catch{}}),cancelAnimationFrame(n)}}export{yA as mountHome2};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/SplitText.js:
  (*!
   * SplitText 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle
  *)
*/
