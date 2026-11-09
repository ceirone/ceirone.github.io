var ip=0,bu=1,np=2;var ia=1,sp=2,$r=3,Bn=0,fi=1,zn=2,nr=0,Ds=1,Kr=2,Tu=3,wu=4,rp=5;var sr=100,op=101,ap=102,lp=103,cp=104,hp=200,up=201,fp=202,dp=203,Eu=204,Au=205,pp=206,mp=207,gp=208,_p=209,xp=210,vp=211,yp=212,Sp=213,Mp=214,bl=0,Tl=1,wl=2,Gr=3,El=4,Al=5,Cl=6,Rl=7,Cu=0,bp=1,Tp=2,kn=0,Ru=1,Pu=2,Iu=3,Lu=4,Du=5,Nu=6,Uu=7;var Ou=300,rr=301,Qr=302,hc=303,uc=304,Pl=1e3,Un=1001,Il=1002,li=1003,wp=1004;var na=1005;var Ii=1006,fc=1007;var rs=1008;var sn=1009,Fu=1010,Bu=1011,jr=1012,dc=1013,Cn=1014,Rn=1015,Pn=1016,pc=1017,mc=1018,or=1020,zu=35902,ku=35899,Vu=1021,Gu=1022,In=1023,ns=1026,os=1027,Hu=1028,gc=1029,Ns=1030,_c=1031;var xc=1033,sa=33776,ra=33777,oa=33778,aa=33779,vc=35840,yc=35841,Sc=35842,Mc=35843,bc=36196,Tc=37492,wc=37496,Ec=37488,Ac=37489,la=37490,Cc=37491,Rc=37808,Pc=37809,Ic=37810,Lc=37811,Dc=37812,Nc=37813,Uc=37814,Oc=37815,Fc=37816,Bc=37817,zc=37818,kc=37819,Vc=37820,Gc=37821,Hc=36492,Wc=36494,Xc=36495,qc=36283,Yc=36284,ca=36285,Zc=36286;var Do=2300,Ll=2301,Sl=2302,gu=2303,_u=2400,xu=2401,vu=2402;var Ep=3200;var Wu=0,Ap=1,as="",ji="srgb",No="srgb-linear",Uo="linear",pe="srgb";var Ml=7680;var Cp=519,Rp=512,Pp=513,Ip=514,Xu=515,Lp=516,Dp=517,qu=518,Yu=519,Np=35044;var Zu="300 es",pn=2e3,Oo=2001;function L_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function D_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Fo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Up(){let s=Fo("canvas");return s.style.display="block",s}var Pd={},Hr=null;function Ju(...s){let t="THREE."+s.shift();Hr?Hr("log",t,...s):console.log(t,...s)}function Op(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function zt(...s){s=Op(s);let t="THREE."+s.shift();if(Hr)Hr("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function kt(...s){s=Op(s);let t="THREE."+s.shift();if(Hr)Hr("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Po(...s){let t=s.join(" ");t in Pd||(Pd[t]=!0,zt(...s))}function Fp(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Bp={[bl]:bl,[wl]:Cl,[El]:El,[Gr]:Al,[Tl]:Tl,[Cl]:wl,[Rl]:Rl,[Al]:Gr},On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}},vi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var qh=Math.PI/180,Dl=180/Math.PI;function ha(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vi[s&255]+vi[s>>8&255]+vi[s>>16&255]+vi[s>>24&255]+"-"+vi[t&255]+vi[t>>8&255]+"-"+vi[t>>16&15|64]+vi[t>>24&255]+"-"+vi[e&63|128]+vi[e>>8&255]+"-"+vi[e>>16&255]+vi[e>>24&255]+vi[i&255]+vi[i>>8&255]+vi[i>>16&255]+vi[i>>24&255]).toLowerCase()}function jt(s,t,e){return Math.max(t,Math.min(e,s))}function N_(s,t){return(s%t+t)%t}function Yh(s,t,e){return(1-e)*s+e*t}function zp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $u(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function U_(s,t){if(t.constructor===Float32Array)return s;let e=$u(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function O_(s,t){if(t.constructor===Float32Array)return s;let e=$u(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var Ft=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fn=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),M=Math.sin(y);g=Math.sin(g*y)/M,a=Math.sin(a*y)/M,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),d=a(r/2),u=l(i/2),f=l(n/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-n)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Id.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Id.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=n+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Zh.copy(this).projectOnVector(t),this.sub(Zh)}reflect(t){return this.sub(Zh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zh=new B,Id=new Fn,Gt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,n,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],x=n[0],m=n[3],g=n[6],y=n[1],M=n[4],v=n[7],b=n[2],T=n[5],_=n[8];return r[0]=o*x+a*y+l*b,r[3]=o*m+a*M+l*T,r[6]=o*g+a*v+l*_,r[1]=c*x+h*y+d*b,r[4]=c*m+h*M+d*T,r[7]=c*g+h*v+d*_,r[2]=u*x+f*y+p*b,r[5]=u*m+f*M+p*T,r[8]=u*g+f*v+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+i*u+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(n*c-h*i)*x,t[2]=(a*i-n*o)*x,t[3]=u*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Po("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jh.makeScale(t,e)),this}rotate(t){return Po("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jh.makeRotation(-t)),this}translate(t,e){return Po("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jh=new Gt,Ld=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dd=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F_(){let s={enabled:!0,workingColorSpace:No,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(n.r=is(n.r),n.g=is(n.g),n.b=is(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(n.r=Vr(n.r),n.g=Vr(n.g),n.b=Vr(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===as?Uo:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[No]:{primaries:t,whitePoint:i,transfer:Uo,toXYZ:Ld,fromXYZ:Dd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ji},outputColorSpaceConfig:{drawingBufferColorSpace:ji}},[ji]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:Ld,fromXYZ:Dd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ji}}}),s}var ie=F_();function is(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Cr,Nl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Cr===void 0&&(Cr=Fo("canvas")),Cr.width=t.width,Cr.height=t.height;let n=Cr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Cr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=is(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(is(e[i]/255)*255):e[i]=is(e[i]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},B_=0,Wr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=ha(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push($h(n[o].image)):r.push($h(n[o]))}else r=$h(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function $h(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Nl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var z_=0,Kh=new B,Vi=class s extends On{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=Un,n=Un,r=Ii,o=rs,a=In,l=sn,c=s.DEFAULT_ANISOTROPY,h=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=ha(),this.name="",this.source=new Wr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Kh).x}get height(){return this.source.getSize(Kh).y}get depth(){return this.source.getSize(Kh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ou)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pl:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case Il:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pl:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case Il:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Vi.DEFAULT_IMAGE=null;Vi.DEFAULT_MAPPING=Ou;Vi.DEFAULT_ANISOTROPY=1;var Le=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(f+1)/2,b=(g+1)/2,T=(h+u)/4,_=(d+x)/4,S=(p+m)/4;return M>v&&M>b?M<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(M),n=T/i,r=_/i):v>b?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=T/n,r=S/n):b<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),i=_/r,n=S/r),this.set(i,n,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ul=class extends On{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Vi({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ii,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Wr(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends Ul{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Bo=class extends Vi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=li,this.minFilter=li,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ol=class extends Vi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=li,this.minFilter=li,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ce=class s{static{this.prototype.isMatrix4=!0}constructor(t,e,i,n,r,o,a,l,c,h,d,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,d,u,f,p,x,m)}set(t,e,i,n,r,o,a,l,c,h,d,u,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/Rr.setFromMatrixColumn(t,0).length(),r=1/Rr.setFromMatrixColumn(t,1).length(),o=1/Rr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(k_,t,V_)}lookAt(t,e,i){let n=this.elements;return Ki.subVectors(t,e),Ki.lengthSq()===0&&(Ki.z=1),Ki.normalize(),ys.crossVectors(i,Ki),ys.lengthSq()===0&&(Math.abs(i.z)===1?Ki.x+=1e-4:Ki.z+=1e-4,Ki.normalize(),ys.crossVectors(i,Ki)),ys.normalize(),ja.crossVectors(Ki,ys),n[0]=ys.x,n[4]=ja.x,n[8]=Ki.x,n[1]=ys.y,n[5]=ja.y,n[9]=Ki.y,n[2]=ys.z,n[6]=ja.z,n[10]=Ki.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],x=i[6],m=i[10],g=i[14],y=i[3],M=i[7],v=i[11],b=i[15],T=n[0],_=n[4],S=n[8],C=n[12],A=n[1],N=n[5],I=n[9],k=n[13],L=n[2],z=n[6],V=n[10],O=n[14],Q=n[3],W=n[7],P=n[11],$=n[15];return r[0]=o*T+a*A+l*L+c*Q,r[4]=o*_+a*N+l*z+c*W,r[8]=o*S+a*I+l*V+c*P,r[12]=o*C+a*k+l*O+c*$,r[1]=h*T+d*A+u*L+f*Q,r[5]=h*_+d*N+u*z+f*W,r[9]=h*S+d*I+u*V+f*P,r[13]=h*C+d*k+u*O+f*$,r[2]=p*T+x*A+m*L+g*Q,r[6]=p*_+x*N+m*z+g*W,r[10]=p*S+x*I+m*V+g*P,r[14]=p*C+x*k+m*O+g*$,r[3]=y*T+M*A+v*L+b*Q,r[7]=y*_+M*N+v*z+b*W,r[11]=y*S+M*I+v*V+b*P,r[15]=y*C+M*k+v*O+b*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],y=l*f-c*u,M=a*f-c*d,v=a*u-l*d,b=o*f-c*h,T=o*u-l*h,_=o*d-a*h;return e*(x*y-m*M+g*v)-i*(p*y-m*b+g*T)+n*(p*M-x*b+g*_)-r*(p*v-x*T+m*_)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+n*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],y=e*a-i*o,M=e*l-n*o,v=e*c-r*o,b=i*l-n*a,T=i*c-r*a,_=n*c-r*l,S=h*x-d*p,C=h*m-u*p,A=h*g-f*p,N=d*m-u*x,I=d*g-f*x,k=u*g-f*m,L=y*k-M*I+v*N+b*A-T*C+_*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/L;return t[0]=(a*k-l*I+c*N)*z,t[1]=(n*I-i*k-r*N)*z,t[2]=(x*_-m*T+g*b)*z,t[3]=(u*T-d*_-f*b)*z,t[4]=(l*A-o*k-c*C)*z,t[5]=(e*k-n*A+r*C)*z,t[6]=(m*v-p*_-g*M)*z,t[7]=(h*_-u*v+f*M)*z,t[8]=(o*I-a*A+c*S)*z,t[9]=(i*A-e*I-r*S)*z,t[10]=(p*T-x*v+g*y)*z,t[11]=(d*v-h*T-f*y)*z,t[12]=(a*C-o*N-l*S)*z,t[13]=(e*N-i*C+n*S)*z,t[14]=(x*M-p*b-m*y)*z,t[15]=(h*b-d*M+u*y)*z,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,x=o*h,m=o*d,g=a*d,y=l*c,M=l*h,v=l*d,b=i.x,T=i.y,_=i.z;return n[0]=(1-(x+g))*b,n[1]=(f+v)*b,n[2]=(p-M)*b,n[3]=0,n[4]=(f-v)*T,n[5]=(1-(u+g))*T,n[6]=(m+y)*T,n[7]=0,n[8]=(p+M)*_,n[9]=(m-y)*_,n[10]=(1-(u+x))*_,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Rr.set(n[0],n[1],n[2]).length(),a=Rr.set(n[4],n[5],n[6]).length(),l=Rr.set(n[8],n[9],n[10]).length();r<0&&(o=-o),Tn.copy(this);let c=1/o,h=1/a,d=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,e.setFromRotationMatrix(Tn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,n,r,o,a=pn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===pn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Oo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=pn,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-n),u=-(e+t)/(e-t),f=-(i+n)/(i-n),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===pn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Oo)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Rr=new B,Tn=new Ce,k_=new B(0,0,0),V_=new B(1,1,1),ys=new B,ja=new B,Ki=new B,Nd=new Ce,Ud=new Fn,Es=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Nd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ud.setFromEuler(this),this.setFromQuaternion(Ud,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Es.DEFAULT_ORDER="XYZ";var zo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},G_=0,Od=new B,Pr=new Fn,$n=new Ce,tl=new B,Eo=new B,H_=new B,W_=new Fn,Fd=new B(1,0,0),Bd=new B(0,1,0),zd=new B(0,0,1),kd={type:"added"},X_={type:"removed"},Ir={type:"childadded",child:null},Qh={type:"childremoved",child:null},en=class s extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new B,e=new Es,i=new Fn,n=new B(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Gt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pr.setFromAxisAngle(t,e),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(t,e){return Pr.setFromAxisAngle(t,e),this.quaternion.premultiply(Pr),this}rotateX(t){return this.rotateOnAxis(Fd,t)}rotateY(t){return this.rotateOnAxis(Bd,t)}rotateZ(t){return this.rotateOnAxis(zd,t)}translateOnAxis(t,e){return Od.copy(t).applyQuaternion(this.quaternion),this.position.add(Od.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fd,t)}translateY(t){return this.translateOnAxis(Bd,t)}translateZ(t){return this.translateOnAxis(zd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?tl.copy(t):tl.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Eo,tl,this.up):$n.lookAt(tl,Eo,this.up),this.quaternion.setFromRotationMatrix($n),n&&($n.extractRotation(n.matrixWorld),Pr.setFromRotationMatrix($n),this.quaternion.premultiply(Pr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kd),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(X_),Qh.child=t,this.dispatchEvent(Qh),Qh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kd),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,t,H_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,W_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};en.DEFAULT_UP=new B(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var es=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},q_={type:"move"},Xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(q_)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new es;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},el={h:0,s:0,l:0};function jh(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ne=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ji){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ie.workingColorSpace){if(t=N_(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=jh(o,r,t+1/3),this.g=jh(o,r,t),this.b=jh(o,r,t-1/3)}return ie.colorSpaceToWorking(this,n),this}setStyle(t,e=ji){function i(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ji){let i=kp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}copyLinearToSRGB(t){return this.r=Vr(t.r),this.g=Vr(t.g),this.b=Vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ji){return ie.workingToColorSpace(yi.copy(this),t),Math.round(jt(yi.r*255,0,255))*65536+Math.round(jt(yi.g*255,0,255))*256+Math.round(jt(yi.b*255,0,255))}getHexString(t=ji){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(yi.copy(this),e);let i=yi.r,n=yi.g,r=yi.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(yi.copy(this),e),t.r=yi.r,t.g=yi.g,t.b=yi.b,t}getStyle(t=ji){ie.workingToColorSpace(yi.copy(this),t);let e=yi.r,i=yi.g,n=yi.b;return t!==ji?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ss),this.setHSL(Ss.h+t,Ss.s+e,Ss.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ss),t.getHSL(el);let i=Yh(Ss.h,el.h,e),n=Yh(Ss.s,el.s,e),r=Yh(Ss.l,el.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yi=new ne;ne.NAMES=kp;var ko=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Es,this.environmentIntensity=1,this.environmentRotation=new Es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},wn=new B,Kn=new B,tu=new B,Qn=new B,Lr=new B,Dr=new B,Vd=new B,eu=new B,iu=new B,nu=new B,su=new Le,ru=new Le,ou=new Le,ws=class s{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),wn.subVectors(t,e),n.cross(wn);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){wn.subVectors(n,e),Kn.subVectors(i,e),tu.subVectors(t,e);let o=wn.dot(wn),a=wn.dot(Kn),l=wn.dot(tu),c=Kn.dot(Kn),h=Kn.dot(tu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return su.setScalar(0),ru.setScalar(0),ou.setScalar(0),su.fromBufferAttribute(t,e),ru.fromBufferAttribute(t,i),ou.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(su,r.x),o.addScaledVector(ru,r.y),o.addScaledVector(ou,r.z),o}static isFrontFacing(t,e,i,n){return wn.subVectors(i,e),Kn.subVectors(t,e),wn.cross(Kn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),wn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,o,a;Lr.subVectors(n,i),Dr.subVectors(r,i),eu.subVectors(t,i);let l=Lr.dot(eu),c=Dr.dot(eu);if(l<=0&&c<=0)return e.copy(i);iu.subVectors(t,n);let h=Lr.dot(iu),d=Dr.dot(iu);if(h>=0&&d<=h)return e.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(i).addScaledVector(Lr,o);nu.subVectors(t,r);let f=Lr.dot(nu),p=Dr.dot(nu);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(Dr,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Vd.subVectors(r,n),a=(d-h)/(d-h+(f-p)),e.copy(n).addScaledVector(Vd,a);let g=1/(m+x+u);return o=x*g,a=u*g,e.copy(i).addScaledVector(Lr,o).addScaledVector(Dr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},As=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),il.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),il.copy(i.boundingBox)),il.applyMatrix4(t.matrixWorld),this.union(il)}let n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ao),nl.subVectors(this.max,Ao),Nr.subVectors(t.a,Ao),Ur.subVectors(t.b,Ao),Or.subVectors(t.c,Ao),Ms.subVectors(Ur,Nr),bs.subVectors(Or,Ur),Ks.subVectors(Nr,Or);let e=[0,-Ms.z,Ms.y,0,-bs.z,bs.y,0,-Ks.z,Ks.y,Ms.z,0,-Ms.x,bs.z,0,-bs.x,Ks.z,0,-Ks.x,-Ms.y,Ms.x,0,-bs.y,bs.x,0,-Ks.y,Ks.x,0];return!au(e,Nr,Ur,Or,nl)||(e=[1,0,0,0,1,0,0,0,1],!au(e,Nr,Ur,Or,nl))?!1:(sl.crossVectors(Ms,bs),e=[sl.x,sl.y,sl.z],au(e,Nr,Ur,Or,nl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},jn=[new B,new B,new B,new B,new B,new B,new B,new B],En=new B,il=new As,Nr=new B,Ur=new B,Or=new B,Ms=new B,bs=new B,Ks=new B,Ao=new B,nl=new B,sl=new B,Qs=new B;function au(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){Qs.fromArray(s,r);let a=n.x*Math.abs(Qs.x)+n.y*Math.abs(Qs.y)+n.z*Math.abs(Qs.z),l=t.dot(Qs),c=e.dot(Qs),h=i.dot(Qs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Je=new B,rl=new Ft,Y_=0,mn=class extends On{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Y_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Np,this.updateRanges=[],this.gpuType=Rn,this.version=0,this._normalizationScale=t!==void 0?$u(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)rl.fromBufferAttribute(this,e),rl.applyMatrix3(t),this.setXY(e,rl.x,rl.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):U_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):O_(t,this.array)}};var Vo=class extends mn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Go=class extends mn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Re=class extends mn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Z_=new As,Co=new B,lu=new B,er=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Z_.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Co.subVectors(t,this.center);let e=Co.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Co,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Co.copy(t.center).add(lu)),this.expandByPoint(Co.copy(t.center).sub(lu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},J_=0,dn=new Ce,cu=new en,Fr=new B,Qi=new As,Ro=new As,ai=new B,Li=class s extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(L_(t)?Go:Vo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,i){return dn.makeTranslation(t,e,i),this.applyMatrix4(dn),this}scale(t,e,i){return dn.makeScale(t,e,i),this.applyMatrix4(dn),this}lookAt(t){return cu.lookAt(t),cu.updateMatrix(),this.applyMatrix4(cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Re(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];Qi.setFromBufferAttribute(r),this.morphTargetsRelative?(ai.addVectors(this.boundingBox.min,Qi.min),this.boundingBox.expandByPoint(ai),ai.addVectors(this.boundingBox.max,Qi.max),this.boundingBox.expandByPoint(ai)):(this.boundingBox.expandByPoint(Qi.min),this.boundingBox.expandByPoint(Qi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let i=this.boundingSphere.center;if(Qi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(ai.addVectors(Qi.min,Ro.min),Qi.expandByPoint(ai),ai.addVectors(Qi.max,Ro.max),Qi.expandByPoint(ai)):(Qi.expandByPoint(Ro.min),Qi.expandByPoint(Ro.max))}Qi.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)ai.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(ai));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ai.fromBufferAttribute(a,c),l&&(Fr.fromBufferAttribute(t,c),ai.add(Fr)),n=Math.max(n,i.distanceToSquared(ai))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new mn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let C=0;C<i.count;C++)a[C]=new B,l[C]=new B;let h=new B,d=new B,u=new B,f=new Ft,p=new Ft,x=new Ft,m=new B,g=new B;function y(C,A,N){c[C]=c[A]=c[N]=1,h.fromBufferAttribute(i,C),d.fromBufferAttribute(i,A),u.fromBufferAttribute(i,N),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,A),x.fromBufferAttribute(r,N),d.sub(h),u.sub(h),p.sub(f),x.sub(f);let I=1/(p.x*x.y-x.x*p.y);isFinite(I)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(I),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(I),a[C].add(m),a[A].add(m),a[N].add(m),l[C].add(g),l[A].add(g),l[N].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,A=M.length;C<A;++C){let N=M[C],I=N.start,k=N.count;for(let L=I,z=I+k;L<z;L+=3)y(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let v=new B,b=new B,T=new B,_=new B;function S(C){T.fromBufferAttribute(n,C),_.copy(T);let A=a[C];v.copy(A),v.sub(T.multiplyScalar(T.dot(A))).normalize(),b.crossVectors(_,A);let I=b.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,I)}for(let C=0,A=i.count;C<A;++C)c[C]&&S(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,d=new B;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);n.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ai.fromBufferAttribute(t,e),ai.normalize(),t.setXYZ(e,ai.x,ai.y,ai.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new mn(u,h,d)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var hu=new B,$_=new B,K_=new Gt,An=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=hu.subVectors(i,e).cross($_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(hu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||K_.getNormalMatrix(t),n=this.coplanarPoint(hu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Q_=0,Cs=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=ha(),this.name="",this.type="Material",this.blending=Ds,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eu,this.blendDst=Au,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ml,this.stencilZFail=Ml,this.stencilZPass=Ml,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ne().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new An().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ft().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ts=new B,uu=new B,ol=new B,al=new B,Ho=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ts)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ts.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ts.copy(this.origin).addScaledVector(this.direction,e),ts.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){uu.copy(t).add(e).multiplyScalar(.5),ol.copy(e).sub(t).normalize(),al.copy(this.origin).sub(uu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ol),a=al.dot(this.direction),l=-al.dot(ol),c=al.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(uu).addScaledVector(ol,u),f}intersectSphere(t,e){if(t.radius<0)return null;ts.subVectors(t.center,this.origin);let i=ts.dot(this.direction),n=ts.dot(ts)-i*i,r=t.radius*t.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ts)!==null}intersectTriangle(t,e,i,n,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=i.x-o.x,y=i.y-o.y,M=i.z-o.z,v=Math.abs(l),b=Math.abs(c),T=Math.abs(h),_,S,C,A,N,I,k,L,z,V,O,Q;if(v>=b&&v>=T?(C=l,I=d,z=p,Q=g,l>=0?(_=c,S=h,A=u,N=f,k=x,L=m,V=y,O=M):(_=h,S=c,A=f,N=u,k=m,L=x,V=M,O=y)):b>=T?(C=c,I=u,z=x,Q=y,c>=0?(_=h,S=l,A=f,N=d,k=m,L=p,V=M,O=g):(_=l,S=h,A=d,N=f,k=p,L=m,V=g,O=M)):(C=h,I=f,z=m,Q=M,h>=0?(_=l,S=c,A=d,N=u,k=p,L=x,V=g,O=y):(_=c,S=l,A=u,N=d,k=x,L=p,V=y,O=g)),C===0)return null;let W=_/C,P=S/C,$=1/C,xt=A-W*I,Et=N-P*I,Y=k-W*z,ot=L-P*z,vt=V-W*Q,bt=O-P*Q,mt=vt*ot-bt*Y,Nt=xt*bt-Et*vt,ge=Y*Et-ot*xt;if(n){if(mt<0||Nt<0||ge<0)return null}else if((mt<0||Nt<0||ge<0)&&(mt>0||Nt>0||ge>0))return null;let At=mt+Nt+ge;if(At===0)return null;let Ht=$*(mt*I+Nt*z+ge*Q);return(At>0?Ht<0:Ht>0)?null:this.at(Ht/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fl=class extends Cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Es,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gd=new Ce,js=new Ho,ll=new er,Hd=new B,cl=new B,hl=new B,ul=new B,fu=new B,fl=new B,Wd=new B,dl=new B,ei=class extends en{constructor(t=new Li,e=new Fl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(r&&a){fl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(fu.fromBufferAttribute(d,t),o?fl.addScaledVector(fu,h):fl.addScaledVector(fu.sub(e),h))}e.add(fl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(r),js.copy(t.ray).recast(t.near),!(ll.containsPoint(js.origin)===!1&&(js.intersectSphere(ll,Hd)===null||js.origin.distanceToSquared(Hd)>(t.far-t.near)**2))&&(Gd.copy(r).invert(),js.copy(t.ray).applyMatrix4(Gd),!(i.boundingBox!==null&&js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,js)))}_computeIntersections(t,e,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,b=M;v<b;v+=3){let T=a.getX(v),_=a.getX(v+1),S=a.getX(v+2);n=pl(this,g,t,i,c,h,d,T,_,S),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);n=pl(this,o,t,i,c,h,d,y,M,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,b=M;v<b;v+=3){let T=v,_=v+1,S=v+2;n=pl(this,g,t,i,c,h,d,T,_,S),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=m,M=m+1,v=m+2;n=pl(this,o,t,i,c,h,d,y,M,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function j_(s,t,e,i,n,r,o,a){let l;if(t.side===fi?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===Bn,a),l===null)return null;dl.copy(a),dl.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(dl);return c<e.near||c>e.far?null:{distance:c,point:dl.clone(),object:s}}function pl(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,cl),s.getVertexPosition(l,hl),s.getVertexPosition(c,ul);let h=j_(s,t,e,i,cl,hl,ul,Wd);if(h){let d=new B;ws.getBarycoord(Wd,cl,hl,ul,d),n&&(h.uv=ws.getInterpolatedAttribute(n,a,l,c,d,new Ft)),r&&(h.uv1=ws.getInterpolatedAttribute(r,a,l,c,d,new Ft)),o&&(h.normal=ws.getInterpolatedAttribute(o,a,l,c,d,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new B,materialIndex:0};ws.getNormal(cl,hl,ul,u.normal),h.face=u,h.barycoord=d}return h}var Bl=class extends Vi{constructor(t=null,e=1,i=1,n,r,o,a,l,c=li,h=li,d,u){super(null,o,a,l,c,h,n,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tr=new er,t0=new Ft(.5,.5),ml=new B,ir=class{constructor(t=new An,e=new An,i=new An,n=new An,r=new An,o=new An){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=pn,i=!1){let n=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],M=r[13],v=r[14],b=r[15];if(n[0].setComponents(c-o,f-h,g-p,b-y).normalize(),n[1].setComponents(c+o,f+h,g+p,b+y).normalize(),n[2].setComponents(c+a,f+d,g+x,b+M).normalize(),n[3].setComponents(c-a,f-d,g-x,b-M).normalize(),i)n[4].setComponents(l,u,m,v).normalize(),n[5].setComponents(c-l,f-u,g-m,b-v).normalize();else if(n[4].setComponents(c-l,f-u,g-m,b-v).normalize(),e===pn)n[5].setComponents(c+l,f+u,g+m,b+v).normalize();else if(e===Oo)n[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(t){tr.center.set(0,0,0);let e=t0.distanceTo(t.center);return tr.radius=.7071067811865476+e,tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(ml.x=n.normal.x>0?t.max.x:t.min.x,ml.y=n.normal.y>0?t.max.y:t.min.y,ml.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(ml)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xd=new Ce,zl=class s{constructor(){this.coordinateSystem=pn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){let r=e[n];Xd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new ir),i[n].setFromProjectionMatrix(Xd,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new ir),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new s().copy(this)}};var qr=class extends Cs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qd=new Ce,yu=new Ho,gl=new er,_l=new B,Wo=class extends en{constructor(t=new Li,e=new qr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(n),gl.radius+=r,t.ray.intersectsSphere(gl)===!1)return;qd.copy(n).invert(),yu.copy(t.ray).applyMatrix4(qd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,x=f;p<x;p++){let m=c.getX(p);_l.fromBufferAttribute(d,m),Yd(_l,m,l,n,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,x=f;p<x;p++)_l.fromBufferAttribute(d,p),Yd(_l,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yd(s,t,e,i,n,r,o){let a=yu.distanceSqToPoint(s);if(a<e){let l=new B;yu.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Xo=class extends Vi{constructor(t=[],e=rr,i,n,r,o,a,l,c,h){super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var ss=class extends Vi{constructor(t,e,i=Cn,n,r,o,a=li,l=li,c,h=ns,d=1){if(h!==ns&&h!==os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},qo=class extends ss{constructor(t,e=Cn,i=rr,n,r,o=li,a=li,l,c=ns){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Yo=class extends Vi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Yr=class s extends Li{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,n,o,2),p("x","z","y",1,-1,t,i,-e,n,o,3),p("x","y","z",1,-1,t,e,i,n,r,4),p("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(d,2));function p(x,m,g,y,M,v,b,T,_,S,C){let A=v/_,N=b/S,I=v/2,k=b/2,L=T/2,z=_+1,V=S+1,O=0,Q=0,W=new B;for(let P=0;P<V;P++){let $=P*N-k;for(let xt=0;xt<z;xt++){let Et=xt*A-I;W[x]=Et*y,W[m]=$*M,W[g]=L,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[g]=T>0?1:-1,h.push(W.x,W.y,W.z),d.push(xt/_),d.push(1-P/S),O+=1}}for(let P=0;P<S;P++)for(let $=0;$<_;$++){let xt=u+$+z*P,Et=u+$+z*(P+1),Y=u+($+1)+z*(P+1),ot=u+($+1)+z*P;l.push(xt,Et,ot),l.push(Et,Y,ot),Q+=6}a.addGroup(f,Q,C),f+=Q,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var kl=class s extends Li{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(r.slice(),3)),this.setAttribute("uv",new Re(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let M=new B,v=new B,b=new B;for(let T=0;T<e.length;T+=3)f(e[T+0],M),f(e[T+1],v),f(e[T+2],b),l(M,v,b,y)}function l(y,M,v,b){let T=b+1,_=[];for(let S=0;S<=T;S++){_[S]=[];let C=y.clone().lerp(v,S/T),A=M.clone().lerp(v,S/T),N=T-S;for(let I=0;I<=N;I++)I===0&&S===T?_[S][I]=C:_[S][I]=C.clone().lerp(A,I/N)}for(let S=0;S<T;S++)for(let C=0;C<2*(T-S)-1;C++){let A=Math.floor(C/2);C%2===0?(u(_[S][A+1]),u(_[S+1][A]),u(_[S][A])):(u(_[S][A+1]),u(_[S+1][A+1]),u(_[S+1][A]))}}function c(y){let M=new B;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(y),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){let y=new B;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let v=m(y)/2/Math.PI+.5,b=g(y)/Math.PI+.5;o.push(v,1-b)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){let M=o[y+0],v=o[y+2],b=o[y+4],T=Math.max(M,v,b),_=Math.min(M,v,b);T>.9&&_<.1&&(M<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,M){let v=y*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function p(){let y=new B,M=new B,v=new B,b=new B,T=new Ft,_=new Ft,S=new Ft;for(let C=0,A=0;C<r.length;C+=9,A+=6){y.set(r[C+0],r[C+1],r[C+2]),M.set(r[C+3],r[C+4],r[C+5]),v.set(r[C+6],r[C+7],r[C+8]),T.set(o[A+0],o[A+1]),_.set(o[A+2],o[A+3]),S.set(o[A+4],o[A+5]),b.copy(y).add(M).add(v).divideScalar(3);let N=m(b);x(T,A+0,y,N),x(_,A+2,M,N),x(S,A+4,v,N)}}function x(y,M,v,b){b<0&&y.x===1&&(o[M]=y.x-1),v.x===0&&v.z===0&&(o[M]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var Gi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let h=i[n],u=i[n+1]-h,f=(o-h)/u;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new Ft:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new B,n=[],r=[],o=[],a=new B,l=new Ce;for(let f=0;f<=t;f++){let p=f/t;n[f]=this.getTangentAt(p,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(jt(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(jt(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),o[p].crossVectors(n[p],r[p])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Zo=class extends Gi{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ft){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Vl=class extends Zo{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ku(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,n(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+i*a}}}var Zd=new B,Jd=new B,du=new Ku,pu=new Ku,mu=new Ku,Gl=class extends Gi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new B){let i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(Jd.subVectors(n[0],n[1]).add(n[0]),c=Jd);let d=n[a%r],u=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(Zd.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Zd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),du.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,m),pu.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,m),mu.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(du.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),pu.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),mu.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(du.calc(l),pu.calc(l),mu.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new B().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function $d(s,t,e,i,n){let r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function e0(s,t){let e=1-s;return e*e*t}function i0(s,t){return 2*(1-s)*s*t}function n0(s,t){return s*s*t}function Io(s,t,e,i){return e0(s,t)+i0(s,e)+n0(s,i)}function s0(s,t){let e=1-s;return e*e*e*t}function r0(s,t){let e=1-s;return 3*e*e*s*t}function o0(s,t){return 3*(1-s)*s*s*t}function a0(s,t){return s*s*s*t}function Lo(s,t,e,i,n){return s0(s,t)+r0(s,e)+o0(s,i)+a0(s,n)}var Hl=class extends Gi{constructor(t=new Ft,e=new Ft,i=new Ft,n=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new Ft){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Lo(t,n.x,r.x,o.x,a.x),Lo(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wl=class extends Gi{constructor(t=new B,e=new B,i=new B,n=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new B){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Lo(t,n.x,r.x,o.x,a.x),Lo(t,n.y,r.y,o.y,a.y),Lo(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xl=class extends Gi{constructor(t=new Ft,e=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ft){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ql=class extends Gi{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yl=class extends Gi{constructor(t=new Ft,e=new Ft,i=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ft){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(Io(t,n.x,r.x,o.x),Io(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jo=class extends Gi{constructor(t=new B,e=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new B){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(Io(t,n.x,r.x,o.x),Io(t,n.y,r.y,o.y),Io(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zl=class extends Gi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ft){let i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],d=n[o>n.length-3?n.length-1:o+2];return i.set($d(a,l.x,c.x,h.x,d.x),$d(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new Ft().fromArray(n))}return this}},l0=Object.freeze({__proto__:null,ArcCurve:Vl,CatmullRomCurve3:Gl,CubicBezierCurve:Hl,CubicBezierCurve3:Wl,EllipseCurve:Zo,LineCurve:Xl,LineCurve3:ql,QuadraticBezierCurve:Yl,QuadraticBezierCurve3:Jo,SplineCurve:Zl});var $o=class s extends kl{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Ko=class s extends Li{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*u-o;for(let M=0;M<c;M++){let v=M*d-r;p.push(v,-y,0),x.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let M=y+c*g,v=y+c*(g+1),b=y+1+c*(g+1),T=y+1+c*g;f.push(M,v,T),f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Rs=class s extends Li{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],d=[],u=new B,f=new B,p=new B;for(let x=0;x<=i;x++){let m=o+x/i*a;for(let g=0;g<=n;g++){let y=g/n*r;f.x=(t+e*Math.cos(m))*Math.cos(y),f.y=(t+e*Math.cos(m))*Math.sin(y),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/n),d.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=n;m++){let g=(n+1)*x+m-1,y=(n+1)*(x-1)+m-1,M=(n+1)*(x-1)+m,v=(n+1)*x+m;l.push(g,y,v),l.push(y,M,v)}this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Qo=class s extends Li{constructor(t=1,e=.4,i=64,n=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:i,radialSegments:n,p:r,q:o},i=Math.floor(i),n=Math.floor(n);let a=[],l=[],c=[],h=[],d=new B,u=new B,f=new B,p=new B,x=new B,m=new B,g=new B;for(let M=0;M<=i;++M){let v=M/i*r*Math.PI*2;y(v,r,o,t,f),y(v+.01,r,o,t,p),m.subVectors(p,f),g.addVectors(p,f),x.crossVectors(m,g),g.crossVectors(x,m),x.normalize(),g.normalize();for(let b=0;b<=n;++b){let T=b/n*Math.PI*2,_=-e*Math.cos(T),S=e*Math.sin(T);d.x=f.x+(_*g.x+S*x.x),d.y=f.y+(_*g.y+S*x.y),d.z=f.z+(_*g.z+S*x.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(M/i),h.push(b/n)}}for(let M=1;M<=i;M++)for(let v=1;v<=n;v++){let b=(n+1)*(M-1)+(v-1),T=(n+1)*M+(v-1),_=(n+1)*M+v,S=(n+1)*(M-1)+v;a.push(b,T,S),a.push(T,_,S)}this.setIndex(a),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2));function y(M,v,b,T,_){let S=Math.cos(M),C=Math.sin(M),A=b/v*M,N=Math.cos(A);_.x=T*(2+N)*.5*S,_.y=T*(2+N)*C*.5,_.z=T*Math.sin(A)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Zr=class s extends Li{constructor(t=new Jo(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new B,l=new B,c=new Ft,h=new B,d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Re(d,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(f,2));function x(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),y(),g()}function m(M){h=t.getPointAt(M/e,h);let v=o.normals[M],b=o.binormals[M];for(let T=0;T<=n;T++){let _=T/n*Math.PI*2,S=Math.sin(_),C=-Math.cos(_);l.x=C*v.x+S*b.x,l.y=C*v.y+S*b.y,l.z=C*v.z+S*b.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let M=1;M<=e;M++)for(let v=1;v<=n;v++){let b=(n+1)*(M-1)+(v-1),T=(n+1)*M+(v-1),_=(n+1)*M+v,S=(n+1)*(M-1)+v;p.push(b,T,S),p.push(T,_,S)}}function y(){for(let M=0;M<=e;M++)for(let v=0;v<=n;v++)c.x=M/e,c.y=v/n,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new l0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ar(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];if(Kd(n))n.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Kd(n[0])){let r=[];for(let o=0,a=n.length;o<a;o++)r[o]=n[o].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function Si(s){let t={};for(let e=0;e<s.length;e++){let i=ar(s[e]);for(let n in i)t[n]=i[n]}return t}function Kd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function c0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Qu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var Vp={clone:ar,merge:Si},h0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends Cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h0,this.fragmentShader=u0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=c0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new ne().setHex(n.value);break;case"v2":this.uniforms[i].value=new Ft().fromArray(n.value);break;case"v3":this.uniforms[i].value=new B().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Le().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Gt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Ce().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Jl=class extends gn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var $l=class extends Cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ep,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Kl=class extends Cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Br(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function xl(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Ps=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let o=0;o!==n;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ql=class extends Ps{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_u,endingEnd:_u}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,o=t+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case xu:r=t,a=2*e-i;break;case vu:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case xu:o=t,l=2*i-e;break;case vu:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,y=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,M=(-1-f)*m+(1.5+f)*x+.5*p,v=f*m-f*x;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+y*o[c+b]+M*o[l+b]+v*o[d+b];return r}},jl=class extends Ps{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},tc=class extends Ps{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},ec=class extends Ps{interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-e)/(n-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*u+p*2,y=d[g],M=d[g+1],v=t*u+p*2,b=h[v],T=h[v+1],_=d0(i,e,y,b,n);r[p]=Gp(_,x,M,T,m)}return r}};function Gp(s,t,e,i,n){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*i+s*s*s*n}function f0(s,t,e,i,n){let r=1-s;return 3*r*r*(e-t)+6*r*s*(i-e)+3*s*s*(n-i)}function d0(s,t,e,i,n){let r=(s-t)/(n-t);for(let o=0;o<8;o++){let a=Gp(r,t,e,i,n)-s;if(Math.abs(a)<1e-10)break;let l=f0(r,t,e,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var nn=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Br(e,this.TimeBufferType),this.values=Br(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Br(t.times,Array),values:Br(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),xl(t.settings)&&(i.settings={inTangents:Br(t.settings.inTangents,Array),outTangents:Br(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ec(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Do:e=this.InterpolantFactoryMethodDiscrete;break;case Ll:e=this.InterpolantFactoryMethodLinear;break;case Sl:e=this.InterpolantFactoryMethodSmooth;break;case gu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Do;case this.InterpolantFactoryMethodLinear:return Ll;case this.InterpolantFactoryMethodSmooth:return Sl;case this.InterpolantFactoryMethodBezier:return gu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;xl(this.settings)&&(Qd(this.settings.inTangents,t),Qd(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;xl(this.settings)&&(jd(this.settings.inTangents,t),jd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&D_(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Sl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,xl(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Qd(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]+=t}function jd(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]*=t}nn.prototype.ValueTypeName="";nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=Ll;var Is=class extends nn{constructor(t,e,i){super(t,e,i)}};Is.prototype.ValueTypeName="bool";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=Do;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var ic=class extends nn{constructor(t,e,i,n){super(t,e,i,n)}};ic.prototype.ValueTypeName="color";var nc=class extends nn{constructor(t,e,i,n){super(t,e,i,n)}};nc.prototype.ValueTypeName="number";var sc=class extends Ps{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)Fn.slerpFlat(r,0,o,c-a,o,c,l);return r}},jo=class extends nn{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new sc(this.times,this.values,this.getValueSize(),t)}};jo.prototype.ValueTypeName="quaternion";jo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ls=class extends nn{constructor(t,e,i){super(t,e,i)}};Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=Do;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends nn{constructor(t,e,i,n){super(t,e,i,n)}};rc.prototype.ValueTypeName="vector";var oc=class{constructor(t,e,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hp=new oc,ac=class{constructor(t){this.manager=t!==void 0?t:Hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ac.DEFAULT_MATERIAL_NAME="__DEFAULT";var vl=new B,yl=new Fn,Nn=new B,ta=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(vl,yl,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vl,yl,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(vl,yl,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vl,yl,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ts=new B,tp=new Ft,ep=new Ft,Pi=class extends ta{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Dl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dl*2*Math.atan(Math.tan(qh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ts.x,Ts.y).multiplyScalar(-t/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ts.x,Ts.y).multiplyScalar(-t/Ts.z)}getViewSize(t,e){return this.getViewBounds(t,tp,ep),e.subVectors(ep,tp)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qh*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var lc=class extends ta{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var zr=-90,kr=1,Jr=class extends en{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Pi(zr,kr,t,e);n.layers=this.layers,this.add(n);let r=new Pi(zr,kr,t,e);r.layers=this.layers,this.add(r);let o=new Pi(zr,kr,t,e);o.layers=this.layers,this.add(o);let a=new Pi(zr,kr,t,e);a.layers=this.layers,this.add(a);let l=new Pi(zr,kr,t,e);l.layers=this.layers,this.add(l);let c=new Pi(zr,kr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===pn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},cc=class extends Pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ju="\\[\\]\\.:\\/",p0=new RegExp("["+ju+"]","g"),tf="[^"+ju+"]",m0="[^"+ju.replace("\\.","")+"]",g0=/((?:WC+[\/:])*)/.source.replace("WC",tf),_0=/(WCOD+)?/.source.replace("WCOD",m0),x0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tf),v0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tf),y0=new RegExp("^"+g0+_0+x0+v0+"$"),S0=["material","materials","bones","map"],Su=class{constructor(t,e,i){let n=i||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},we=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(p0,"")}static parseTrackName(t){let e=y0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);S0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Su;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ET=new Float32Array(1);var ea=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,zt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Mu=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};function ef(s,t,e,i){let n=M0(i);switch(e){case Vu:return s*t;case Hu:return s*t/n.components*n.byteLength;case gc:return s*t/n.components*n.byteLength;case Ns:return s*t*2/n.components*n.byteLength;case _c:return s*t*2/n.components*n.byteLength;case Gu:return s*t*3/n.components*n.byteLength;case In:return s*t*4/n.components*n.byteLength;case xc:return s*t*4/n.components*n.byteLength;case sa:case ra:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case oa:case aa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yc:case Mc:return Math.max(s,16)*Math.max(t,8)/4;case vc:case Sc:return Math.max(s,8)*Math.max(t,8)/2;case bc:case Tc:case Ec:case Ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wc:case la:case Cc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Fc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case zc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case kc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Gc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Hc:case Wc:case Xc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case qc:case Yc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ca:case Zc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function M0(s){switch(s){case sn:case Fu:return{byteLength:1,components:1};case jr:case Bu:case Pn:return{byteLength:2,components:1};case pc:case mc:return{byteLength:2,components:4};case Cn:case dc:case Rn:return{byteLength:4,components:1};case zu:case ku:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function um(){let s=null,t=!1,e=null,i=null;function n(r,o){i=s.requestAnimationFrame(n),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function T0(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var w0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E0=`#ifdef USE_ALPHAHASH
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
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I0=`#ifdef USE_AOMAP
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
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
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
#endif`,N0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B0=`#ifdef USE_IRIDESCENCE
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
#endif`,z0=`#ifdef USE_BUMPMAP
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Z0=`#define PI 3.141592653589793
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
} // validated`,J0=`vec3 transformedNormal = objectNormal;
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
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ex=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ix=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ux=`#ifdef USE_GRADIENTMAP
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
}`,fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,gx=`#ifdef USE_ENVMAP
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
#endif`,_x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sx=`PhysicalMaterial material;
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
#endif`,Mx=`uniform sampler2D dfgLUT;
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
}`,bx=`
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
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
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
#endif`,wx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ex=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Ax=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ix=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nx=`#if defined( USE_POINTS_UV )
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
#endif`,Ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bx=`#if defined( USE_MORPHCOLORS )
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
#endif`,zx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`#ifdef USE_MORPHTARGETS
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
#endif`,Vx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yx=`#ifdef USE_NORMALMAP
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
#endif`,Zx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ev=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ov=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,av=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cv=`float getShadowMask() {
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
}`,hv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uv=`#ifdef USE_SKINNING
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
#endif`,fv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dv=`#ifdef USE_SKINNING
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
#endif`,pv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_v=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xv=`#ifdef USE_TRANSMISSION
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
#endif`,vv=`#ifdef USE_TRANSMISSION
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
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wv=`uniform sampler2D t2D;
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
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Av=`uniform float backgroundBlurriness;
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
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pv=`#include <common>
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
}`,Iv=`#if DEPTH_PACKING == 3200
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
}`,Lv=`#define DISTANCE
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
}`,Dv=`#define DISTANCE
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
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`uniform float scale;
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
}`,Fv=`uniform vec3 diffuse;
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
}`,Bv=`#include <common>
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
}`,zv=`uniform vec3 diffuse;
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
}`,kv=`#define LAMBERT
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
}`,Vv=`#define LAMBERT
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
}`,Gv=`#define MATCAP
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
}`,Hv=`#define MATCAP
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
}`,Wv=`#define NORMAL
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
}`,Xv=`#define NORMAL
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
}`,qv=`#define PHONG
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
}`,Yv=`#define PHONG
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
}`,Zv=`#define STANDARD
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
}`,Jv=`#define STANDARD
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
}`,$v=`#define TOON
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
}`,Kv=`#define TOON
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
}`,Qv=`uniform float size;
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
}`,jv=`uniform vec3 diffuse;
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
}`,ty=`#include <common>
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
}`,ey=`uniform vec3 color;
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
}`,iy=`uniform float rotation;
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
}`,ny=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:w0,alphahash_pars_fragment:E0,alphamap_fragment:A0,alphamap_pars_fragment:C0,alphatest_fragment:R0,alphatest_pars_fragment:P0,aomap_fragment:I0,aomap_pars_fragment:L0,batching_pars_vertex:D0,batching_vertex:N0,begin_vertex:U0,beginnormal_vertex:O0,bsdfs:F0,iridescence_fragment:B0,bumpmap_pars_fragment:z0,clipping_planes_fragment:k0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:G0,clipping_planes_vertex:H0,color_fragment:W0,color_pars_fragment:X0,color_pars_vertex:q0,color_vertex:Y0,common:Z0,defaultnormal_vertex:J0,displacementmap_pars_vertex:$0,displacementmap_vertex:K0,emissivemap_fragment:Q0,emissivemap_pars_fragment:j0,colorspace_fragment:tx,colorspace_pars_fragment:ex,envmap_fragment:ix,envmap_common_pars_fragment:nx,envmap_pars_fragment:sx,envmap_pars_vertex:rx,envmap_physical_pars_fragment:gx,envmap_vertex:ox,fog_vertex:ax,fog_pars_vertex:lx,fog_fragment:cx,fog_pars_fragment:hx,gradientmap_pars_fragment:ux,lightmap_pars_fragment:fx,lights_lambert_fragment:dx,lights_lambert_pars_fragment:px,lights_pars_begin:mx,lights_toon_fragment:_x,lights_toon_pars_fragment:xx,lights_phong_fragment:vx,lights_phong_pars_fragment:yx,lights_physical_fragment:Sx,lights_physical_pars_fragment:Mx,lights_fragment_begin:bx,lights_fragment_maps:Tx,lights_fragment_end:wx,lightprobes_pars_fragment:Ex,logdepthbuf_fragment:Ax,logdepthbuf_pars_fragment:Cx,logdepthbuf_pars_vertex:Rx,logdepthbuf_vertex:Px,map_fragment:Ix,map_pars_fragment:Lx,map_particle_fragment:Dx,map_particle_pars_fragment:Nx,metalnessmap_fragment:Ux,metalnessmap_pars_fragment:Ox,morphinstance_vertex:Fx,morphcolor_vertex:Bx,morphnormal_vertex:zx,morphtarget_pars_vertex:kx,morphtarget_vertex:Vx,normal_fragment_begin:Gx,normal_fragment_maps:Hx,normal_pars_fragment:Wx,normal_pars_vertex:Xx,normal_vertex:qx,normalmap_pars_fragment:Yx,clearcoat_normal_fragment_begin:Zx,clearcoat_normal_fragment_maps:Jx,clearcoat_pars_fragment:$x,iridescence_pars_fragment:Kx,opaque_fragment:Qx,packing:jx,premultiplied_alpha_fragment:tv,project_vertex:ev,dithering_fragment:iv,dithering_pars_fragment:nv,roughnessmap_fragment:sv,roughnessmap_pars_fragment:rv,shadowmap_pars_fragment:ov,shadowmap_pars_vertex:av,shadowmap_vertex:lv,shadowmask_pars_fragment:cv,skinbase_vertex:hv,skinning_pars_vertex:uv,skinning_vertex:fv,skinnormal_vertex:dv,specularmap_fragment:pv,specularmap_pars_fragment:mv,tonemapping_fragment:gv,tonemapping_pars_fragment:_v,transmission_fragment:xv,transmission_pars_fragment:vv,uv_pars_fragment:yv,uv_pars_vertex:Sv,uv_vertex:Mv,worldpos_vertex:bv,background_vert:Tv,background_frag:wv,backgroundCube_vert:Ev,backgroundCube_frag:Av,cube_vert:Cv,cube_frag:Rv,depth_vert:Pv,depth_frag:Iv,distance_vert:Lv,distance_frag:Dv,equirect_vert:Nv,equirect_frag:Uv,linedashed_vert:Ov,linedashed_frag:Fv,meshbasic_vert:Bv,meshbasic_frag:zv,meshlambert_vert:kv,meshlambert_frag:Vv,meshmatcap_vert:Gv,meshmatcap_frag:Hv,meshnormal_vert:Wv,meshnormal_frag:Xv,meshphong_vert:qv,meshphong_frag:Yv,meshphysical_vert:Zv,meshphysical_frag:Jv,meshtoon_vert:$v,meshtoon_frag:Kv,points_vert:Qv,points_frag:jv,shadow_vert:ty,shadow_frag:ey,sprite_vert:iy,sprite_frag:ny},Mt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Gn={basic:{uniforms:Si([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Si([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ne(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Si([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Si([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Si([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new ne(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Si([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Si([Mt.points,Mt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Si([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Si([Mt.common,Mt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Si([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Si([Mt.sprite,Mt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:Si([Mt.common,Mt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:Si([Mt.lights,Mt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Gn.physical={uniforms:Si([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var Jc={r:0,b:0,g:0},sy=new Ce,fm=new Gt;fm.set(-1,0,0,0,1,0,0,0,1);function ry(s,t,e,i,n,r){let o=new ne(0),a=n===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let v=y.backgroundBlurriness>0;M=t.get(M,v)}return M}function p(y){let M=!1,v=f(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),M=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(y,M){let v=f(M);v&&v.isCubeTexture?(c===void 0&&(c=new ei(new Yr(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:ar(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sy.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fm),c.material.toneMapped=ie.getTransfer(v.colorSpace)!==pe,(h!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ei(new Ko(2,2),new gn({name:"BackgroundMaterial",uniforms:ar(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ie.getTransfer(v.colorSpace)!==pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(Jc,Qu(s)),e.buffers.color.setClear(Jc.r,Jc.g,Jc.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function oy(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null),r=n,o=!1;function a(N,I,k,L,z){let V=!1,O=d(N,L,k,I);r!==O&&(r=O,c(r.object)),V=f(N,L,k,z),V&&p(N,L,k,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(N,I,k,L),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function d(N,I,k,L){let z=L.wireframe===!0,V=i[I.id];V===void 0&&(V={},i[I.id]=V);let O=N.isInstancedMesh===!0?N.id:0,Q=V[O];Q===void 0&&(Q={},V[O]=Q);let W=Q[k.id];W===void 0&&(W={},Q[k.id]=W);let P=W[z];return P===void 0&&(P=u(l()),W[z]=P),P}function u(N){let I=[],k=[],L=[];for(let z=0;z<e;z++)I[z]=0,k[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:L,object:N,attributes:{},index:null}}function f(N,I,k,L){let z=r.attributes,V=I.attributes,O=0,Q=k.getAttributes();for(let W in Q)if(Q[W].location>=0){let $=z[W],xt=V[W];if(xt===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(xt=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(xt=N.instanceColor)),$===void 0||$.attribute!==xt||xt&&$.data!==xt.data)return!0;O++}return r.attributesNum!==O||r.index!==L}function p(N,I,k,L){let z={},V=I.attributes,O=0,Q=k.getAttributes();for(let W in Q)if(Q[W].location>=0){let $=V[W];$===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&($=N.instanceColor));let xt={};xt.attribute=$,$&&$.data&&(xt.data=$.data),z[W]=xt,O++}r.attributes=z,r.attributesNum=O,r.index=L}function x(){let N=r.newAttributes;for(let I=0,k=N.length;I<k;I++)N[I]=0}function m(N){g(N,0)}function g(N,I){let k=r.newAttributes,L=r.enabledAttributes,z=r.attributeDivisors;k[N]=1,L[N]===0&&(s.enableVertexAttribArray(N),L[N]=1),z[N]!==I&&(s.vertexAttribDivisor(N,I),z[N]=I)}function y(){let N=r.newAttributes,I=r.enabledAttributes;for(let k=0,L=I.length;k<L;k++)I[k]!==N[k]&&(s.disableVertexAttribArray(k),I[k]=0)}function M(N,I,k,L,z,V,O){O===!0?s.vertexAttribIPointer(N,I,k,z,V):s.vertexAttribPointer(N,I,k,L,z,V)}function v(N,I,k,L){x();let z=L.attributes,V=k.getAttributes(),O=I.defaultAttributeValues;for(let Q in V){let W=V[Q];if(W.location>=0){let P=z[Q];if(P===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(P=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(P=N.instanceColor)),P!==void 0){let $=P.normalized,xt=P.itemSize,Et=t.get(P);if(Et===void 0)continue;let Y=Et.buffer,ot=Et.type,vt=Et.bytesPerElement,bt=ot===s.INT||ot===s.UNSIGNED_INT||P.gpuType===dc;if(P.isInterleavedBufferAttribute){let mt=P.data,Nt=mt.isInterleavedBuffer===!0?mt.stride:mt.itemSize,ge=P.offset;if(mt.isInstancedInterleavedBuffer||mt.isInstancedBufferAttribute){for(let At=0;At<W.locationSize;At++)g(W.location+At,mt.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let At=0;At<W.locationSize;At++)m(W.location+At);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let At=0;At<W.locationSize;At++)M(W.location+At,xt/W.locationSize,ot,$,Nt*vt,(ge+xt/W.locationSize*At)*vt,bt)}else{if(P.isInstancedBufferAttribute){for(let mt=0;mt<W.locationSize;mt++)g(W.location+mt,P.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let mt=0;mt<W.locationSize;mt++)m(W.location+mt);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let mt=0;mt<W.locationSize;mt++)M(W.location+mt,xt/W.locationSize,ot,$,xt*vt,xt/W.locationSize*mt*vt,bt)}}else if(O!==void 0){let $=O[Q];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(W.location,$);break;case 3:s.vertexAttrib3fv(W.location,$);break;case 4:s.vertexAttrib4fv(W.location,$);break;default:s.vertexAttrib1fv(W.location,$)}}}}y()}function b(){C();for(let N in i){let I=i[N];for(let k in I){let L=I[k];for(let z in L){let V=L[z];for(let O in V)h(V[O].object),delete V[O];delete L[z]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;let I=i[N.id];for(let k in I){let L=I[k];for(let z in L){let V=L[z];for(let O in V)h(V[O].object),delete V[O];delete L[z]}}delete i[N.id]}function _(N){for(let I in i){let k=i[I];for(let L in k){let z=k[L];if(z[N.id]===void 0)continue;let V=z[N.id];for(let O in V)h(V[O].object),delete V[O];delete z[N.id]}}}function S(N){for(let I in i){let k=i[I],L=N.isInstancedMesh===!0?N.id:0,z=k[L];if(z!==void 0){for(let V in z){let O=z[V];for(let Q in O)h(O[Q].object),delete O[Q];delete z[V]}delete k[L],Object.keys(k).length===0&&delete i[I]}}}function C(){A(),o=!0,r!==n&&(r=n,c(r.object))}function A(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:C,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function ay(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ly(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(_){return!(_!==In&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let S=_===Pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==sn&&_!==Rn&&!S&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,maxSamples:b,samples:T}}function cy(s){let t=this,e=null,i=0,n=!1,r=!1,o=new An,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!n||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,M=y*4,v=g.clippingState||null;l.value=v,v=h(p,u,M,f);for(let b=0;b!==M;++b)v[b]=e[b];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,v=f;M!==x;++M,v+=4)o.copy(d[M]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var da=class extends tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Xo(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Yr(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fi,blending:nr});r.uniforms.tEquirect.value=e;let o=new ei(n,r),a=e.minFilter;return e.minFilter===rs&&(e.minFilter=Ii),new Jr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}},Wp=256,hy=3,uy=20,dm=256,pm=16,fy=3,dy=new B,py=new ne,Kc=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Jr(1,10,null),this._boxMesh=new ei(new Yr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){let{size:o=256,position:a=dy}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(py));let m=new Jr(i,n,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Wp,zp(t))}_fromTexture(t,e){t.mapping===rr||t.mapping===Qr?this._setSize(t.image.length===0?Wp:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Xp(t,!1,!1),i=Math.log2(t)-hy;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Xp(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===rr||t.mapping===Qr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yp()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=qp()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=my(),this._integrationMaterial=gy());let e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/pm);for(let o=0;o<=i;o++){let a=s.lodToRoughness(o,i);if(o>i-fy)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(dm*Math.pow(a,4)))+.5:0;n.roughness.value=a,n.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=_y());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(r,0,i)}};function Xp(s,t,e){return new da(s,{minFilter:rs,generateMipmaps:t,type:Pn,colorSpace:No,depthBuffer:e})}function pa(s,t,e){return new gn({name:s,uniforms:t,vertexShader:Yt.cube_vert,fragmentShader:e,side:fi,blending:nr,depthTest:!1,depthWrite:!1})}function my(){return pa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${dm}u

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
	`)}function gy(){return pa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:pm}},`

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
	`)}function _y(){return pa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${uy}
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
	`)}function qp(){return pa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Yp(){return pa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function xy(s){let t=new WeakMap,e=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===hc||f===uc)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new da(p.height);return x.fromEquirectangularTexture(s,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===hc||f===uc,x=f===rr||f===Qr;if(p||x){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new Kc(s)),m=p?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new Kc(s)),m=p?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===hc?u.mapping=rr:f===uc&&(u.mapping=Qr),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function vy(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Po("WebGLRenderer: "+i+" extension not supported."),n}}}function yy(s,t,e,i){let n={},r=new WeakMap,o=new FinalizationRegistry(p=>delete n[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete n[p.id],o.unregister(p);let x=r.get(p);x&&(t.remove(x),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return n[x.id]!==void 0||(x.addEventListener("dispose",a),n[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)t.update(x[m],s.ARRAY_BUFFER)}function d(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=x!==null?x.array.length:m.array.length/3-1,M=m.count>=65535?Go:Vo,v=new M(Math.ceil(y/3)*6,1),b=v.array;if(x!==null){let _=x.array;g=x.version;for(let S=0,C=0;S<y;S+=3){let A=_[S+0],N=_[S+1],I=_[S+2];b[C++]=A,b[C++]=N,b[C++]=N,b[C++]=I,b[C++]=I,b[C++]=A}}else{g=m.version;for(let _=0,S=0;_<y;_+=3){let C=_+0,A=_+1,N=_+2;b[S++]=C,b[S++]=A,b[S++]=A,b[S++]=N,b[S++]=N,b[S++]=C}}v.version=g;let T=r.get(p);T&&t.remove(T),r.set(p,v)}function u(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in n){let x=n[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Sy(s,t,e){let i;function n(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(i,u,r,d*o),e.update(u,i,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(i,u,r,d*o,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function My(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:kt("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function by(s,t,e){let i=new WeakMap,n=new Le;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let C=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*b*4*d),_=new Bo(T,v,b,d);_.type=Rn,_.needsUpdate=!0;let S=M*4;for(let A=0;A<d;A++){let N=m[A],I=g[A],k=y[A],L=v*b*4*A;for(let z=0;z<N.count;z++){let V=z*S;f===!0&&(n.fromBufferAttribute(N,z),T[L+V+0]=n.x,T[L+V+1]=n.y,T[L+V+2]=n.z,T[L+V+3]=0),p===!0&&(n.fromBufferAttribute(I,z),T[L+V+4]=n.x,T[L+V+5]=n.y,T[L+V+6]=n.z,T[L+V+7]=0),x===!0&&(n.fromBufferAttribute(k,z),T[L+V+8]=n.x,T[L+V+9]=n.y,T[L+V+10]=n.z,T[L+V+11]=k.itemSize===4?n.w:1)}}u={count:d,texture:_,size:new Ft(v,b)},i.set(a,u),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Ty(s,t,e,i,n){let r=new WeakMap;function o(c){let h=n.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var wy={[Ru]:"LINEAR_TONE_MAPPING",[Pu]:"REINHARD_TONE_MAPPING",[Iu]:"CINEON_TONE_MAPPING",[Lu]:"ACES_FILMIC_TONE_MAPPING",[Nu]:"AGX_TONE_MAPPING",[Uu]:"NEUTRAL_TONE_MAPPING",[Du]:"CUSTOM_TONE_MAPPING"};function Ey(s,t,e,i,n,r){let o=new tn(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Li;h.setAttribute("position",new Re([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Re([0,2,0,0,2,0],2));let d=new Jl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ei(h,d),f=new lc(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,y=null,M=[],v=!1;this.setSize=function(b,T){o.setSize(b,T),a!==null&&a.setSize(b,T),l!==null&&l.setSize(b,T);for(let _=0;_<M.length;_++){let S=M[_];S.setSize&&S.setSize(b,T)}},this.setEffects=function(b){M=b,v=M.length>0&&M[0].isRenderPass===!0;let T=o.width,_=o.height;M.length>0&&a===null&&(a=new tn(T,_,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),l=new tn(T,_,{type:Pn,depthBuffer:!1,stencilBuffer:!1}));let S=n===!0&&M.some(C=>C.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new ss(T,_),r===!0&&(c.format=os,c.type=or)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let C=0;C<M.length;C++){let A=M[C];A.setSize&&A.setSize(T,_),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(b,T){if(m||b.toneMapping===kn&&M.length===0)return!1;if(y=T,T!==null){let _=T.width,S=T.height;(o.width!==_||o.height!==S)&&this.setSize(_,S)}return v===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=kn,!0},this.hasRenderPass=function(){return v},this.end=function(b,T){b.toneMapping=g,m=!0;let _=o,S=a;for(let C=0;C<M.length;C++){let A=M[C];A.enabled!==!1&&(A.render(b,S,_,T),A.needsSwap!==!1&&(_=S,S=S===a?l:a))}if(p!==b.outputColorSpace||x!==b.toneMapping){p=b.outputColorSpace,x=b.toneMapping,d.defines={},ie.getTransfer(p)===pe&&(d.defines.SRGB_TRANSFER="");let C=wy[x];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(y),b.render(u,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var mm=new Vi,gm=new ss(1,1),_m=new qo(1),xm=new Bo,vm=new Ol,ym=new Xo,Zp=[],Jp=[],$p=new Float32Array(16),Kp=new Float32Array(9),Qp=new Float32Array(4);function eo(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=Zp[n];if(r===void 0&&(r=new Float32Array(n),Zp[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ii(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ni(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function jc(s,t){let e=Jp[t];e===void 0&&(e=new Int32Array(t),Jp[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Ay(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Cy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ii(e,t))return;s.uniform2fv(this.addr,t),ni(e,t)}}function Ry(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ii(e,t))return;s.uniform3fv(this.addr,t),ni(e,t)}}function Py(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ii(e,t))return;s.uniform4fv(this.addr,t),ni(e,t)}}function Iy(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ii(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ni(e,t)}else{if(ii(e,i))return;Qp.set(i),s.uniformMatrix2fv(this.addr,!1,Qp),ni(e,i)}}function Ly(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ii(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ni(e,t)}else{if(ii(e,i))return;Kp.set(i),s.uniformMatrix3fv(this.addr,!1,Kp),ni(e,i)}}function Dy(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ii(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ni(e,t)}else{if(ii(e,i))return;$p.set(i),s.uniformMatrix4fv(this.addr,!1,$p),ni(e,i)}}function Ny(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Uy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ii(e,t))return;s.uniform2iv(this.addr,t),ni(e,t)}}function Oy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ii(e,t))return;s.uniform3iv(this.addr,t),ni(e,t)}}function Fy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ii(e,t))return;s.uniform4iv(this.addr,t),ni(e,t)}}function By(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function zy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ii(e,t))return;s.uniform2uiv(this.addr,t),ni(e,t)}}function ky(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ii(e,t))return;s.uniform3uiv(this.addr,t),ni(e,t)}}function Vy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ii(e,t))return;s.uniform4uiv(this.addr,t),ni(e,t)}}function th(s){return s.version===0&&(s.compareFunction=Yu,s.needsUpdate=!0),s}function Gy(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=th(gm):r=mm,e.setTexture2D(t||r,n)}function Hy(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||vm,n)}function Wy(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=th(_m):r=ym,e.setTextureCube(t||r,n)}function Xy(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||xm,n)}function qy(s){switch(s){case 5126:return Ay;case 35664:return Cy;case 35665:return Ry;case 35666:return Py;case 35674:return Iy;case 35675:return Ly;case 35676:return Dy;case 5124:case 35670:return Ny;case 35667:case 35671:return Uy;case 35668:case 35672:return Oy;case 35669:case 35673:return Fy;case 5125:return By;case 36294:return zy;case 36295:return ky;case 36296:return Vy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return Wy;case 36289:case 36303:case 36311:case 36292:return Xy}}function Yy(s,t){s.uniform1fv(this.addr,t)}function Zy(s,t){let e=eo(t,this.size,2);s.uniform2fv(this.addr,e)}function Jy(s,t){let e=eo(t,this.size,3);s.uniform3fv(this.addr,e)}function $y(s,t){let e=eo(t,this.size,4);s.uniform4fv(this.addr,e)}function Ky(s,t){let e=eo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Qy(s,t){let e=eo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function jy(s,t){let e=eo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function tS(s,t){s.uniform1iv(this.addr,t)}function eS(s,t){s.uniform2iv(this.addr,t)}function iS(s,t){s.uniform3iv(this.addr,t)}function nS(s,t){s.uniform4iv(this.addr,t)}function sS(s,t){s.uniform1uiv(this.addr,t)}function rS(s,t){s.uniform2uiv(this.addr,t)}function oS(s,t){s.uniform3uiv(this.addr,t)}function aS(s,t){s.uniform4uiv(this.addr,t)}function lS(s,t,e){let i=this.cache,n=t.length,r=jc(e,n);ii(i,r)||(s.uniform1iv(this.addr,r),ni(i,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=th(gm):o=mm;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,r[a])}function cS(s,t,e){let i=this.cache,n=t.length,r=jc(e,n);ii(i,r)||(s.uniform1iv(this.addr,r),ni(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||vm,r[o])}function hS(s,t,e){let i=this.cache,n=t.length,r=jc(e,n);ii(i,r)||(s.uniform1iv(this.addr,r),ni(i,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=th(_m):o=ym;for(let a=0;a!==n;++a)e.setTextureCube(t[a]||o,r[a])}function uS(s,t,e){let i=this.cache,n=t.length,r=jc(e,n);ii(i,r)||(s.uniform1iv(this.addr,r),ni(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||xm,r[o])}function fS(s){switch(s){case 5126:return Yy;case 35664:return Zy;case 35665:return Jy;case 35666:return $y;case 35674:return Ky;case 35675:return Qy;case 35676:return jy;case 5124:case 35670:return tS;case 35667:case 35671:return eS;case 35668:case 35672:return iS;case 35669:case 35673:return nS;case 5125:return sS;case 36294:return rS;case 36295:return oS;case 36296:return aS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return cS;case 35680:case 36300:case 36308:case 36293:return hS;case 36289:case 36303:case 36311:case 36292:return uS}}var rf=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=qy(e.type)}},of=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fS(e.type)}},af=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(t,e[a.id],i)}}},nf=/(\w+)(\])?(\[|\.)?/g;function jp(s,t){s.seq.push(t),s.map[t.id]=t}function dS(s,t,e){let i=s.name,n=i.length;for(nf.lastIndex=0;;){let r=nf.exec(i),o=nf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){jp(e,c===void 0?new rf(a,s,t):new of(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new af(a),jp(e,d)),e=d}}}var to=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);dS(a,l,this)}let n=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):r.push(o);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function tm(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var pS=37297,mS=0;function gS(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var em=new Gt;function _S(s){ie._getMatrix(em,ie.workingColorSpace,s);let t=`mat3( ${em.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case Uo:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function im(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+gS(s.getShaderSource(t),a)}else return r}function xS(s,t){let e=_S(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var vS={[Ru]:"Linear",[Pu]:"Reinhard",[Iu]:"Cineon",[Lu]:"ACESFilmic",[Nu]:"AgX",[Uu]:"Neutral",[Du]:"Custom"};function yS(s,t){let e=vS[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $c=new B;function SS(){ie.getLuminanceCoefficients($c);let s=$c.x.toFixed(4),t=$c.y.toFixed(4),e=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function bS(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function TS(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function fa(s){return s!==""}function nm(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function sm(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wS=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(s){return s.replace(wS,ES)}function ES(s,t){let e=Yt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return lf(e)}var AS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rm(s){return s.replace(AS,CS)}function CS(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function om(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var RS={[ia]:"SHADOWMAP_TYPE_PCF",[$r]:"SHADOWMAP_TYPE_VSM"};function PS(s){return RS[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var IS={[Qr]:"ENVMAP_MODE_REFRACTION"};function LS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":IS[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var DS={[Cu]:"ENVMAP_BLENDING_MULTIPLY",[bp]:"ENVMAP_BLENDING_MIX",[Tp]:"ENVMAP_BLENDING_ADD"};function NS(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":DS[s.combine]||"ENVMAP_BLENDING_NONE"}function US(s,t,e,i){let n=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=PS(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=LS(e),d=NS(e),u=MS(e),f=bS(r),p=n.createProgram(),x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(fa).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(fa).join(`
`),m.length>0&&(m+=`
`)):(x=[om(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),m=[om(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==kn?yS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,xS("linearToOutputTexel",e.outputColorSpace),SS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fa).join(`
`)),o=lf(o),o=nm(o,e),o=sm(o,e),a=lf(a),a=nm(a,e),a=sm(a,e),o=rm(o),a=rm(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+x+o,M=g+m+a,v=tm(n,n.VERTEX_SHADER,y),b=tm(n,n.FRAGMENT_SHADER,M);n.attachShader(p,v),n.attachShader(p,b),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function T(A){if(s.debug.checkShaderErrors){let N=n.getProgramInfoLog(p)||"",I=n.getShaderInfoLog(v)||"",k=n.getShaderInfoLog(b)||"",L=N.trim(),z=I.trim(),V=k.trim(),O=!0,Q=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,v,b);else{let W=im(n,v,"vertex"),P=im(n,b,"fragment");kt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+W+`
`+P)}else L!==""?zt("WebGLProgram: Program Info Log:",L):(z===""||V==="")&&(Q=!1);Q&&(A.diagnostics={runnable:O,programLog:L,vertexShader:{log:z,prefix:x},fragmentShader:{log:V,prefix:m}})}n.deleteShader(v),n.deleteShader(b),_=new to(n,p),S=TS(n,p)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(p,pS)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mS++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=b,this}var OS=0,cf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new hf(t),e.set(t,i)),i}},hf=class{constructor(t){this.id=OS++,this.code=t,this.usedTimes=0}};function FS(s){return s===Ns||s===la||s===ca}function BS(s,t,e,i,n,r){let o=new zo,a=new cf,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,S,C,A,N,I){let k=A.fog,L=N.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=t.get(_.envMap||z,V),Q=u[_.type],W=i.precision;_.precision!==null&&(W=i.getMaxPrecision(_.precision),W!==_.precision&&zt("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let P=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,$=P!==void 0?P.length:0,xt=0;L.morphAttributes.position!==void 0&&(xt=1),L.morphAttributes.normal!==void 0&&(xt=2),L.morphAttributes.color!==void 0&&(xt=3);let Et,Y,ot,vt;if(Q){let it=Gn[Q];Et=it.vertexShader,Y=it.fragmentShader}else{Et=_.vertexShader,Y=_.fragmentShader;let it=a.getVertexShaderStage(_),Tt=a.getFragmentShaderStage(_);a.update(_,it,Tt),ot=it.id,vt=Tt.id}let bt=s.getRenderTarget(),mt=s.state.buffers.depth.getReversed(),Nt=N.isInstancedMesh===!0,ge=N.isBatchedMesh===!0,At=!!_.map,Ht=!!_.matcap,Lt=!!O,Ot=Lt&&O.isPMREMTexture===!0,ce=!!_.aoMap,oe=!!_.lightMap,J=!!_.bumpMap&&_.wireframe===!1,Kt=!!_.normalMap,Xe=!!_.displacementMap,ve=!!_.emissiveMap,se=!!_.metalnessMap,Fe=!!_.roughnessMap,He=_.anisotropy>0,F=_.clearcoat>0,ue=_.diffuseRoughness>0,ae=_.dispersion>0,Vt=_.retroreflectivity>0,ut=_.iridescence>0,he=_.sheen>0,Dt=_.transmission>0,Bt=He&&!!_.anisotropyMap,R=F&&!!_.clearcoatMap,w=F&&!!_.clearcoatNormalMap,H=F&&!!_.clearcoatRoughnessMap,rt=ue&&!!_.diffuseRoughnessMap,nt=ut&&!!_.iridescenceMap,ht=ut&&!!_.iridescenceThicknessMap,gt=he&&!!_.sheenColorMap,X=he&&!!_.sheenRoughnessMap,tt=!!_.specularMap,ct=!!_.specularColorMap,D=!!_.specularIntensityMap,j=Dt&&!!_.transmissionMap,K=Dt&&!!_.thicknessMap,ft=!!_.gradientMap,lt=!!_.alphaMap,dt=_.alphaTest>0,at=!!_.alphaHash,pt=!!_.extensions,st=kn;_.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(st=s.toneMapping);let et=Ot?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,_t={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Et,fragmentShader:Y,defines:_.defines,customVertexShaderID:ot,customFragmentShaderID:vt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:ge,batchingColor:ge&&N._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&N.instanceColor!==null,instancingMorph:Nt&&N.morphTexture!==null,outputColorSpace:bt===null?s.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:At,matcap:Ht,envMap:Lt,envMapMode:Lt&&O.mapping,envMapPMREM:Ot,envMapMaxLod:Ot?et.length-1:null,envMapSize:Ot?et[0].width:null,aoMap:ce,lightMap:oe,bumpMap:J,normalMap:Kt,displacementMap:Xe,emissiveMap:ve,normalMapObjectSpace:Kt&&_.normalMapType===Ap,normalMapTangentSpace:Kt&&_.normalMapType===Wu,packedNormalMap:Kt&&_.normalMapType===Wu&&FS(_.normalMap.format),metalnessMap:se,roughnessMap:Fe,anisotropy:He,anisotropyMap:Bt,clearcoat:F,clearcoatMap:R,clearcoatNormalMap:w,clearcoatRoughnessMap:H,diffuseRoughness:ue,diffuseRoughnessMap:rt,dispersion:ae,retroreflection:Vt,iridescence:ut,iridescenceMap:nt,iridescenceThicknessMap:ht,sheen:he,sheenColorMap:gt,sheenRoughnessMap:X,specularMap:tt,specularColorMap:ct,specularIntensityMap:D,transmission:Dt,transmissionMap:j,thicknessMap:K,gradientMap:ft,opaque:_.transparent===!1&&_.blending===Ds&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:dt,alphaHash:at,combine:_.combine,mapUv:At&&f(_.map.channel),aoMapUv:ce&&f(_.aoMap.channel),lightMapUv:oe&&f(_.lightMap.channel),bumpMapUv:J&&f(_.bumpMap.channel),normalMapUv:Kt&&f(_.normalMap.channel),displacementMapUv:Xe&&f(_.displacementMap.channel),emissiveMapUv:ve&&f(_.emissiveMap.channel),metalnessMapUv:se&&f(_.metalnessMap.channel),roughnessMapUv:Fe&&f(_.roughnessMap.channel),anisotropyMapUv:Bt&&f(_.anisotropyMap.channel),clearcoatMapUv:R&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:rt&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:X&&f(_.sheenRoughnessMap.channel),specularMapUv:tt&&f(_.specularMap.channel),specularColorMapUv:ct&&f(_.specularColorMap.channel),specularIntensityMapUv:D&&f(_.specularIntensityMap.channel),transmissionMapUv:j&&f(_.transmissionMap.channel),thicknessMapUv:K&&f(_.thicknessMap.channel),alphaMapUv:lt&&f(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Kt||He),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(At||lt),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&Kt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:mt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:xt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:I.filter(it=>it.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:At&&_.map.isVideoTexture===!0&&ie.getTransfer(_.map.colorSpace)===pe,decodeVideoTextureEmissive:ve&&_.emissiveMap.isVideoTexture===!0&&ie.getTransfer(_.emissiveMap.colorSpace)===pe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===zn,flipSided:_.side===fi,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&_.extensions.multiDraw===!0||ge)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return _t.vertexUv1s=l.has(1),_t.vertexUv2s=l.has(2),_t.vertexUv3s=l.has(3),l.clear(),_t}function x(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)S.push(C),S.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(m(S,_),g(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function g(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let S=u[_.type],C;if(S){let A=Gn[S];C=Vp.clone(A.uniforms)}else C=_.uniforms;return C}function M(_,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new US(s,S,_,n),c.push(C),h.set(S,C)),C}function v(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:y,acquireProgram:M,releaseProgram:v,releaseShaderCache:b,programs:c,dispose:T}}function zS(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function kS(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function am(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function lm(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,m,g){let y=s[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},s[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=p,y.materialVariant=o(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=m,y.group=g),t++,y}function l(u,f,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let M=a(u,f,p,x,m,g);p.transmission>0?i.push(M):p.transparent===!0?n.push(M):e.push(M)}function c(u,f,p,x,m,g){let y=a(u,f,p,x,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?n.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||kS),i.length>1&&i.sort(f||am),n.length>1&&n.sort(f||am)}function d(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:d,sort:h}}function VS(){let s=new WeakMap;function t(i,n){let r=s.get(i),o;return r===void 0?(o=new lm,s.set(i,[o])):n>=r.length?(o=new lm,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function GS(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new ne};break;case"SpotLight":e={position:new B,direction:new B,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new B,halfWidth:new B,halfHeight:new B};break}return s[t.id]=e,e}}}function HS(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var WS=0;function XS(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function qS(s){let t=new GS,e=HS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let n=new B,r=new Ce,o=new Ce;function a(c){let h=0,d=0,u=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,y=0,M=0,v=0,b=0,T=0,_=0,S=0,C=0,A=0;c.sort(XS);for(let I=0,k=c.length;I<k;I++){let L=c[I],z=L.color,V=L.intensity,O=L.distance,Q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ns?Q=L.shadow.map.texture:Q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=z.r*V,d+=z.g*V,u+=z.b*V;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],V);A++}else if(L.isSunLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let P=L.shadow,$=e.get(L);$.shadowIntensity=P.intensity,$.shadowBias=P.bias,$.shadowNormalBias=P.normalBias,$.shadowRadius=P.radius,$.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),i.sunShadow[p]=$,i.sunShadowMap[p]=Q;let xt=P.getViewportCount();for(let Et=0;Et<xt;Et++)i.sunShadowMatrix[x+Et]=P.getMatrix(Et),i.sunShadowCascade[x+Et]=P._cascadeData[Et];x+=xt,p++}i.sun[f]=W,f++}else if(L.isDirectionalLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let P=L.shadow,$=e.get(L);$.shadowIntensity=P.intensity,$.shadowBias=P.bias,$.shadowNormalBias=P.normalBias,$.shadowRadius=P.radius,$.shadowMapSize=P.mapSize,i.directionalShadow[m]=$,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=L.shadow.matrix,b++}i.directional[m]=W,m++}else if(L.isSpotLight){let W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(z).multiplyScalar(V),W.distance=O,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[y]=W;let P=L.shadow;if(L.map&&(i.spotLightMap[S]=L.map,S++,P.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[y]=P.matrix,L.castShadow){let $=e.get(L);$.shadowIntensity=P.intensity,$.shadowBias=P.bias,$.shadowNormalBias=P.normalBias,$.shadowRadius=P.radius,$.shadowMapSize=P.mapSize,i.spotShadow[y]=$,i.spotShadowMap[y]=Q,_++}y++}else if(L.isRectAreaLight){let W=t.get(L);W.color.copy(z).multiplyScalar(V),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=W,M++}else if(L.isPointLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let P=L.shadow,$=e.get(L);$.shadowIntensity=P.intensity,$.shadowBias=P.bias,$.shadowNormalBias=P.normalBias,$.shadowRadius=P.radius,$.shadowMapSize=P.mapSize,$.shadowCameraNear=P.camera.near,$.shadowCameraFar=P.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=L.shadow.matrix,T++}i.point[g]=W,g++}else if(L.isHemisphereLight){let W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(V),W.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[v]=W,v++}}M>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let N=i.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==g||N.spotLength!==y||N.rectAreaLength!==M||N.hemiLength!==v||N.numSunShadows!==p||N.numDirectionalShadows!==b||N.numPointShadows!==T||N.numSpotShadows!==_||N.numSpotMaps!==S||N.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=m,i.spot.length=y,i.rectArea.length=M,i.point.length=g,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+S-C,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,N.sunLength=f,N.directionalLength=m,N.pointLength=g,N.spotLength=y,N.rectAreaLength=M,N.hemiLength=v,N.numSunShadows=p,N.numDirectionalShadows=b,N.numPointShadows=T,N.numSpotShadows=_,N.numSpotMaps=S,N.numLightProbes=A,i.version=WS++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let v=c[y];if(v.isSunLight){let b=i.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(g),u++}else if(v.isSpotLight){let b=i.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let b=i.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function cm(s){let t=new qS(s),e=[],i=[],n=[];function r(d){h.camera=d,e.length=0,i.length=0,n.length=0}function o(d){d.isLightProbeGrid?n.push(d):e.push(d)}function a(d){i.push(d)}function l(){t.setup(e),n.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function YS(s){let t=new WeakMap;function e(n,r=0){let o=t.get(n),a;return o===void 0?(a=new cm(s),t.set(n,[a])):r>=o.length?(a=new cm(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var ZS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JS=`uniform sampler2D shadow_pass;
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
}`,$S=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],KS=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],hm=new Ce,ua=new B,sf=new B;function QS(s,t,e){let i=new ir,n=new Ft,r=new Ft,o=new Le,a=new $l,l=new Kl,c={},h=e.maxTextureSize,d={[Bn]:fi,[fi]:Bn,[zn]:zn},u=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:ZS,fragmentShader:JS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Li;p.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ei(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ia;let g=this.type;this.render=function(T,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===sp&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ia);let C=s.getRenderTarget(),A=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),I=s.state;I.setBlending(nr),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let k=g!==this.type;k&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=T.length;L<z;L++){let V=T[L],O=V.shadow;if(O===void 0){zt("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;n.copy(O.mapSize);let Q=O.getFrameExtents();n.multiply(Q),r.copy(O.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/Q.x),n.x=r.x*Q.x,O.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/Q.y),n.y=r.y*Q.y,O.mapSize.y=r.y));let W=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||k===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===$r){if(V.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new tn(n.x,n.y,{format:Ns,type:Pn,minFilter:Ii,magFilter:Ii,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new ss(n.x,n.y,Rn),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=ns,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=li,O.map.depthTexture.magFilter=li}else V.isPointLight?(O.map=new da(n.x),O.map.depthTexture=new qo(n.x,Cn)):(O.map=new tn(n.x,n.y),O.map.depthTexture=new ss(n.x,n.y,Cn)),O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=ns,this.type===ia?(O.map.depthTexture.compareFunction=W?qu:Xu,O.map.depthTexture.minFilter=Ii,O.map.depthTexture.magFilter=Ii):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=li,O.map.depthTexture.magFilter=li);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==n.x||O.map.height!==n.y)&&O.map.setSize(n.x,n.y);let P=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();V.isPointLight!==!0&&O.updateMatrices(V,S);let $=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:S.layers;for(let xt=0;xt<P;xt++){let Et=O.getCamera(xt);if(V.isPointLight){let Y=O.camera,ot=O.matrix,vt=V.distance||Y.far;vt!==Y.far&&(Y.far=vt,Y.updateProjectionMatrix()),ua.setFromMatrixPosition(V.matrixWorld),Y.position.copy(ua),sf.copy(Y.position),sf.add($S[xt]),Y.up.copy(KS[xt]),Y.lookAt(sf),Y.updateMatrixWorld(),ot.makeTranslation(-ua.x,-ua.y,-ua.z),hm.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),O._frustum.setFromProjectionMatrix(hm,Y.coordinateSystem,Y.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,xt),s.clear();else{xt===0&&(s.setRenderTarget(O.map),s.clear());let Y=O.getViewport(xt);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),I.viewport(o)}i=O.getFrustum(xt),v(_,S,Et,V,$,this.type)}O.isPointLightShadow!==!0&&this.type===$r&&y(O,S),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(C,A,N)};function y(T,_){let S=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new tn(n.x,n.y,{format:Ns,type:Pn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(_,null,S,u,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(_,null,S,f,x,null)}function M(T,_,S,C){let A=null,N=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)A=N;else if(A=S.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let I=A.uuid,k=_.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let z=L[k];z===void 0&&(z=A.clone(),L[k]=z,_.addEventListener("dispose",b)),A=z}if(A.visible=_.visible,A.wireframe=_.wireframe,C===$r?A.side=_.shadowSide!==null?_.shadowSide:_.side:A.side=_.shadowSide!==null?_.shadowSide:d[_.side],A.alphaMap=_.alphaMap,A.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,A.map=_.map,A.clipShadows=_.clipShadows,A.clippingPlanes=_.clippingPlanes,A.clipIntersection=_.clipIntersection,A.displacementMap=_.displacementMap,A.displacementScale=_.displacementScale,A.displacementBias=_.displacementBias,A.wireframeLinewidth=_.wireframeLinewidth,A.linewidth=_.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let I=s.properties.get(A);I.light=S}return A}function v(T,_,S,C,A,N){if(T.visible===!1)return;if(T.layers.test(A)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===$r)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let L=t.update(T),z=T.material;if(Array.isArray(z)){let V=L.groups;for(let O=0,Q=V.length;O<Q;O++){let W=V[O],P=z[W.materialIndex];if(P&&P.visible){let $=M(T,P,C,N);T.onBeforeShadow(s,T,_,S,L,$,W),s.renderBufferDirect(S,null,L,$,T,W),T.onAfterShadow(s,T,_,S,L,$,W)}}}else if(z.visible){let V=M(T,z,C,N);T.onBeforeShadow(s,T,_,S,L,V,null),s.renderBufferDirect(S,null,L,V,T,null),T.onAfterShadow(s,T,_,S,L,V,null)}}let k=T.children;for(let L=0,z=k.length;L<z;L++)v(k[L],_,S,C,A,N)}function b(T){T.target.removeEventListener("dispose",b);for(let S in c){let C=c[S],A=T.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function jS(s,t){function e(){let D=!1,j=new Le,K=null,ft=new Le(0,0,0,0);return{setMask:function(lt){K!==lt&&!D&&(s.colorMask(lt,lt,lt,lt),K=lt)},setLocked:function(lt){D=lt},setClear:function(lt,dt,at,pt,st){st===!0&&(lt*=pt,dt*=pt,at*=pt),j.set(lt,dt,at,pt),ft.equals(j)===!1&&(s.clearColor(lt,dt,at,pt),ft.copy(j))},reset:function(){D=!1,K=null,ft.set(-1,0,0,0)}}}function i(){let D=!1,j=!1,K=null,ft=null,lt=null;return{setReversed:function(dt){if(j!==dt){let at=t.get("EXT_clip_control");dt?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),j=dt;let pt=lt;lt=null,this.setClear(pt)}},getReversed:function(){return j},setTest:function(dt){dt?mt(s.DEPTH_TEST):Nt(s.DEPTH_TEST)},setMask:function(dt){K!==dt&&!D&&(s.depthMask(dt),K=dt)},setFunc:function(dt){if(j&&(dt=Bp[dt]),ft!==dt){switch(dt){case bl:s.depthFunc(s.NEVER);break;case Tl:s.depthFunc(s.ALWAYS);break;case wl:s.depthFunc(s.LESS);break;case Gr:s.depthFunc(s.LEQUAL);break;case El:s.depthFunc(s.EQUAL);break;case Al:s.depthFunc(s.GEQUAL);break;case Cl:s.depthFunc(s.GREATER);break;case Rl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ft=dt}},setLocked:function(dt){D=dt},setClear:function(dt){lt!==dt&&(lt=dt,j&&(dt=1-dt),s.clearDepth(dt))},reset:function(){D=!1,K=null,ft=null,lt=null,j=!1}}}function n(){let D=!1,j=null,K=null,ft=null,lt=null,dt=null,at=null,pt=null,st=null;return{setTest:function(et){D||(et?mt(s.STENCIL_TEST):Nt(s.STENCIL_TEST))},setMask:function(et){j!==et&&!D&&(s.stencilMask(et),j=et)},setFunc:function(et,_t,it){(K!==et||ft!==_t||lt!==it)&&(s.stencilFunc(et,_t,it),K=et,ft=_t,lt=it)},setOp:function(et,_t,it){(dt!==et||at!==_t||pt!==it)&&(s.stencilOp(et,_t,it),dt=et,at=_t,pt=it)},setLocked:function(et){D=et},setClear:function(et){st!==et&&(s.clearStencil(et),st=et)},reset:function(){D=!1,j=null,K=null,ft=null,lt=null,dt=null,at=null,pt=null,st=null}}}let r=new e,o=new i,a=new n,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,M=null,v=null,b=null,T=null,_=null,S=new ne(0,0,0),C=0,A=!1,N=null,I=null,k=null,L=null,z=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Q=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=Q>=2);let P=null,$={},xt=s.getParameter(s.SCISSOR_BOX),Et=s.getParameter(s.VIEWPORT),Y=new Le().fromArray(xt),ot=new Le().fromArray(Et);function vt(D,j,K,ft){let lt=new Uint8Array(4),dt=s.createTexture();s.bindTexture(D,dt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<K;at++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,ft,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(j+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return dt}let bt={};bt[s.TEXTURE_2D]=vt(s.TEXTURE_2D,s.TEXTURE_2D,1),bt[s.TEXTURE_CUBE_MAP]=vt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[s.TEXTURE_2D_ARRAY]=vt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),bt[s.TEXTURE_3D]=vt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(s.DEPTH_TEST),o.setFunc(Gr),J(!1),Kt(bu),mt(s.CULL_FACE),ce(nr);function mt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Nt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function ge(D,j){return u[D]!==j?(s.bindFramebuffer(D,j),u[D]=j,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=j),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=j),!0):!1}function At(D,j){let K=p,ft=!1;if(D){K=f.get(j),K===void 0&&(K=[],f.set(j,K));let lt=D.textures;if(K.length!==lt.length||K[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,at=lt.length;dt<at;dt++)K[dt]=s.COLOR_ATTACHMENT0+dt;K.length=lt.length,ft=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,ft=!0);ft&&s.drawBuffers(K)}function Ht(D){return x!==D?(s.useProgram(D),x=D,!0):!1}let Lt={[sr]:s.FUNC_ADD,[op]:s.FUNC_SUBTRACT,[ap]:s.FUNC_REVERSE_SUBTRACT};Lt[lp]=s.MIN,Lt[cp]=s.MAX;let Ot={[hp]:s.ZERO,[up]:s.ONE,[fp]:s.SRC_COLOR,[Eu]:s.SRC_ALPHA,[xp]:s.SRC_ALPHA_SATURATE,[gp]:s.DST_COLOR,[pp]:s.DST_ALPHA,[dp]:s.ONE_MINUS_SRC_COLOR,[Au]:s.ONE_MINUS_SRC_ALPHA,[_p]:s.ONE_MINUS_DST_COLOR,[mp]:s.ONE_MINUS_DST_ALPHA,[vp]:s.CONSTANT_COLOR,[yp]:s.ONE_MINUS_CONSTANT_COLOR,[Sp]:s.CONSTANT_ALPHA,[Mp]:s.ONE_MINUS_CONSTANT_ALPHA};function ce(D,j,K,ft,lt,dt,at,pt,st,et){if(D===nr){m===!0&&(Nt(s.BLEND),m=!1);return}if(m===!1&&(mt(s.BLEND),m=!0),D!==rp){if(D!==g||et!==A){if((y!==sr||b!==sr)&&(s.blendEquation(s.FUNC_ADD),y=sr,b=sr),et)switch(D){case Ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kr:s.blendFunc(s.ONE,s.ONE);break;case Tu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:kt("WebGLState: Invalid blending: ",D);break}else switch(D){case Ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Tu:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wu:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",D);break}M=null,v=null,T=null,_=null,S.set(0,0,0),C=0,g=D,A=et}return}lt=lt||j,dt=dt||K,at=at||ft,(j!==y||lt!==b)&&(s.blendEquationSeparate(Lt[j],Lt[lt]),y=j,b=lt),(K!==M||ft!==v||dt!==T||at!==_)&&(s.blendFuncSeparate(Ot[K],Ot[ft],Ot[dt],Ot[at]),M=K,v=ft,T=dt,_=at),(pt.equals(S)===!1||st!==C)&&(s.blendColor(pt.r,pt.g,pt.b,st),S.copy(pt),C=st),g=D,A=!1}function oe(D,j){D.side===zn?Nt(s.CULL_FACE):mt(s.CULL_FACE);let K=D.side===fi;j&&(K=!K),J(K),D.blending===Ds&&D.transparent===!1?ce(nr):ce(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let ft=D.stencilWrite;a.setTest(ft),ft&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ve(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?mt(s.SAMPLE_ALPHA_TO_COVERAGE):Nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function J(D){N!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),N=D)}function Kt(D){D!==ip?(mt(s.CULL_FACE),D!==I&&(D===bu?s.cullFace(s.BACK):D===np?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Nt(s.CULL_FACE),I=D}function Xe(D){D!==k&&(O&&s.lineWidth(D),k=D)}function ve(D,j,K){D?(mt(s.POLYGON_OFFSET_FILL),(L!==j||z!==K)&&(L=j,z=K,o.getReversed()&&(j=-j,K=-K),s.polygonOffset(j,K))):Nt(s.POLYGON_OFFSET_FILL)}function se(D){D?mt(s.SCISSOR_TEST):Nt(s.SCISSOR_TEST)}function Fe(D){D===void 0&&(D=s.TEXTURE0+V-1),P!==D&&(s.activeTexture(D),P=D)}function He(D,j,K){K===void 0&&(P===null?K=s.TEXTURE0+V-1:K=P);let ft=$[K];ft===void 0&&(ft={type:void 0,texture:void 0},$[K]=ft),(ft.type!==D||ft.texture!==j)&&(P!==K&&(s.activeTexture(K),P=K),s.bindTexture(D,j||bt[D]),ft.type=D,ft.texture=j)}function F(){let D=$[P];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ue(){try{s.compressedTexImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function ae(){try{s.compressedTexImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function Vt(){try{s.texSubImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function ut(){try{s.texSubImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function Dt(){try{s.compressedTexSubImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function Bt(){try{s.texStorage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function R(){try{s.texStorage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function w(){try{s.texImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function H(){try{s.texImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function rt(D){return d[D]!==void 0?d[D]:s.getParameter(D)}function nt(D,j){d[D]!==j&&(s.pixelStorei(D,j),d[D]=j)}function ht(D){Y.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Y.copy(D))}function gt(D){ot.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),ot.copy(D))}function X(D,j){let K=c.get(j);K===void 0&&(K=new WeakMap,c.set(j,K));let ft=K.get(D);ft===void 0&&(ft=s.getUniformBlockIndex(j,D.name),s.uniformBlockBinding(j,ft,ft),K.set(D,ft))}function tt(D,j,K){let lt=c.get(j).get(D);l[lt]!==K&&(s.bindBufferBase(s.UNIFORM_BUFFER,lt,K),l[lt]=K)}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},P=null,$={},u={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,M=null,v=null,b=null,T=null,_=null,S=new ne(0,0,0),C=0,A=!1,N=null,I=null,k=null,L=null,z=null,Y.set(0,0,s.canvas.width,s.canvas.height),ot.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:mt,disable:Nt,bindFramebuffer:ge,drawBuffers:At,useProgram:Ht,setBlending:ce,setMaterial:oe,setFlipSided:J,setCullFace:Kt,setLineWidth:Xe,setPolygonOffset:ve,setScissorTest:se,activeTexture:Fe,bindTexture:He,unbindTexture:F,compressedTexImage2D:ue,compressedTexImage3D:ae,texImage2D:w,texImage3D:H,pixelStorei:nt,getParameter:rt,updateUBOMapping:X,uniformBlockBinding:tt,texStorage2D:Bt,texStorage3D:R,texSubImage2D:Vt,texSubImage3D:ut,compressedTexSubImage2D:he,compressedTexSubImage3D:Dt,scissor:ht,viewport:gt,reset:ct}}function tM(s,t,e,i,n,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,x=new FinalizationRegistry(R=>p.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return m?new OffscreenCanvas(R,w):Fo("canvas")}function y(R,w,H){let rt=1,nt=Bt(R);if((nt.width>H||nt.height>H)&&(rt=H/Math.max(nt.width,nt.height)),rt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ht=Math.floor(rt*nt.width),gt=Math.floor(rt*nt.height);u===void 0&&(u=g(ht,gt));let X=w?g(ht,gt):u;return X.width=ht,X.height=gt,X.getContext("2d").drawImage(R,0,0,ht,gt),zt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+ht+"x"+gt+")."),X}else return"data"in R&&zt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function M(R){return R.generateMipmaps}function v(R){s.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(R,w,H,rt,nt,ht=!1){if(R!==null){if(s[R]!==void 0)return s[R];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let gt;rt&&(gt=t.get("EXT_texture_norm16"),gt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=w;if(w===s.RED&&(H===s.FLOAT&&(X=s.R32F),H===s.HALF_FLOAT&&(X=s.R16F),H===s.UNSIGNED_BYTE&&(X=s.R8),H===s.UNSIGNED_SHORT&&gt&&(X=gt.R16_EXT),H===s.SHORT&&gt&&(X=gt.R16_SNORM_EXT)),w===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(X=s.R8UI),H===s.UNSIGNED_SHORT&&(X=s.R16UI),H===s.UNSIGNED_INT&&(X=s.R32UI),H===s.BYTE&&(X=s.R8I),H===s.SHORT&&(X=s.R16I),H===s.INT&&(X=s.R32I)),w===s.RG&&(H===s.FLOAT&&(X=s.RG32F),H===s.HALF_FLOAT&&(X=s.RG16F),H===s.UNSIGNED_BYTE&&(X=s.RG8),H===s.UNSIGNED_SHORT&&gt&&(X=gt.RG16_EXT),H===s.SHORT&&gt&&(X=gt.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(X=s.RG8UI),H===s.UNSIGNED_SHORT&&(X=s.RG16UI),H===s.UNSIGNED_INT&&(X=s.RG32UI),H===s.BYTE&&(X=s.RG8I),H===s.SHORT&&(X=s.RG16I),H===s.INT&&(X=s.RG32I)),w===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(X=s.RGB8UI),H===s.UNSIGNED_SHORT&&(X=s.RGB16UI),H===s.UNSIGNED_INT&&(X=s.RGB32UI),H===s.BYTE&&(X=s.RGB8I),H===s.SHORT&&(X=s.RGB16I),H===s.INT&&(X=s.RGB32I)),w===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),H===s.UNSIGNED_INT&&(X=s.RGBA32UI),H===s.BYTE&&(X=s.RGBA8I),H===s.SHORT&&(X=s.RGBA16I),H===s.INT&&(X=s.RGBA32I)),w===s.RGB&&(H===s.UNSIGNED_SHORT&&gt&&(X=gt.RGB16_EXT),H===s.SHORT&&gt&&(X=gt.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),w===s.RGBA){let tt=ht?Uo:ie.getTransfer(nt);H===s.FLOAT&&(X=s.RGBA32F),H===s.HALF_FLOAT&&(X=s.RGBA16F),H===s.UNSIGNED_BYTE&&(X=tt===pe?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&gt&&(X=gt.RGBA16_EXT),H===s.SHORT&&gt&&(X=gt.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function _(R,w){let H;return R?w===null||w===Cn||w===or?H=s.DEPTH24_STENCIL8:w===Rn?H=s.DEPTH32F_STENCIL8:w===jr&&(H=s.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Cn||w===or?H=s.DEPTH_COMPONENT24:w===Rn?H=s.DEPTH_COMPONENT32F:w===jr&&(H=s.DEPTH_COMPONENT16),H}function S(R,w){return M(R)===!0||R.isFramebufferTexture&&R.minFilter!==li&&R.minFilter!==Ii?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function C(R){let w=new WeakRef(R);i.get(R).__ref=w,p.add(w),x.register(R,w,w)}function A(R){let w=i.get(R).__ref;w!==void 0&&(p.delete(w),x.unregister(w))}function N(R){k(R.target)}function I(R){L(R.target)}function k(R){R.removeEventListener("dispose",N),A(R),V(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function L(R){R.removeEventListener("dispose",I),A(R),Q(R)}function z(){for(let R of p){let w=R.deref();w!==void 0&&(w.isRenderTarget===!0?L(w):k(w))}p.clear(),d.clear()}function V(R){let w=i.get(R);if(w.__webglInit===void 0)return;let H=R.source,rt=f.get(H);if(rt){let nt=rt[w.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&O(R),Object.keys(rt).length===0&&f.delete(H)}i.remove(R)}function O(R){let w=i.get(R);s.deleteTexture(w.__webglTexture);let H=R.source,rt=f.get(H);delete rt[w.__cacheKey],o.memory.textures--}function Q(R){let w=i.get(R);w.__depthDisposeCallback&&w.__depthDisposeCallback();let H=R.depthTexture;if(H&&H.renderTarget===R&&k(H),R.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(w.__webglFramebuffer[nt]))for(let ht=0;ht<w.__webglFramebuffer[nt].length;ht++)s.deleteFramebuffer(w.__webglFramebuffer[nt][ht]);else s.deleteFramebuffer(w.__webglFramebuffer[nt]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[nt])}else{if(Array.isArray(w.__webglFramebuffer))for(let nt=0;nt<w.__webglFramebuffer.length;nt++)s.deleteFramebuffer(w.__webglFramebuffer[nt]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let nt=0;nt<w.__webglColorRenderbuffer.length;nt++)w.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[nt]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let rt=R.textures;for(let nt=0,ht=rt.length;nt<ht;nt++){let gt=i.get(rt[nt]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),i.remove(rt[nt])}i.remove(R)}let W=0;function P(){W=0}function $(){return W}function xt(R){W=R}function Et(){let R=W;return R>=n.maxTextures&&zt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+n.maxTextures),W+=1,R}function Y(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.mipmapsAutoUpdate),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function ot(R,w){let H=i.get(R);if(R.isVideoTexture&&he(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){let rt=R.image;if(rt===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(H,R,w);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+w)}function vt(R,w){let H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){oe(H,R,w);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+w)}function bt(R,w){let H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){oe(H,R,w);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+w)}function mt(R,w){let H=i.get(R);if(R.version>0&&H.__version!==R.version){J(H,R,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+w)}let Nt={[Pl]:s.REPEAT,[Un]:s.CLAMP_TO_EDGE,[Il]:s.MIRRORED_REPEAT},ge={[li]:s.NEAREST,[wp]:s.NEAREST_MIPMAP_NEAREST,[na]:s.NEAREST_MIPMAP_LINEAR,[Ii]:s.LINEAR,[fc]:s.LINEAR_MIPMAP_NEAREST,[rs]:s.LINEAR_MIPMAP_LINEAR},At={[Rp]:s.NEVER,[Yu]:s.ALWAYS,[Pp]:s.LESS,[Xu]:s.LEQUAL,[Ip]:s.EQUAL,[qu]:s.GEQUAL,[Lp]:s.GREATER,[Dp]:s.NOTEQUAL};function Ht(R,w){if(w.type===Rn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ii||w.magFilter===fc||w.magFilter===na||w.magFilter===rs||w.minFilter===Ii||w.minFilter===fc||w.minFilter===na||w.minFilter===rs)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Nt[w.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Nt[w.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Nt[w.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ge[w.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ge[w.minFilter]),w.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,At[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===li||w.minFilter!==na&&w.minFilter!==rs||w.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Lt(R,w){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",N),C(w));let rt=w.source,nt=f.get(rt);nt===void 0&&(nt={},f.set(rt,nt));let ht=Y(w);if(ht!==R.__cacheKey){nt[ht]===void 0&&(nt[ht]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),nt[ht].usedTimes++;let gt=nt[R.__cacheKey];gt!==void 0&&(nt[R.__cacheKey].usedTimes--,gt.usedTimes===0&&O(w)),R.__cacheKey=ht,R.__webglTexture=nt[ht].texture}return H}function Ot(R,w,H){return Math.floor(Math.floor(R/H)/w)}function ce(R,w,H,rt){let ht=R.updateRanges;if(ht.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,H,rt,w.data);else{ht.sort((D,j)=>D.start-j.start);let gt=0;for(let D=1;D<ht.length;D++){let j=ht[gt],K=ht[D],ft=j.start+j.count,lt=Ot(K.start,w.width,4),dt=Ot(j.start,w.width,4);K.start<=ft+1&&lt===dt&&Ot(K.start+K.count-1,w.width,4)===lt?j.count=Math.max(j.count,K.start+K.count-j.start):(++gt,ht[gt]=K)}ht.length=gt+1;let X=e.getParameter(s.UNPACK_ROW_LENGTH),tt=e.getParameter(s.UNPACK_SKIP_PIXELS),ct=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let D=0,j=ht.length;D<j;D++){let K=ht[D],ft=Math.floor(K.start/4),lt=Math.ceil(K.count/4),dt=ft%w.width,at=Math.floor(ft/w.width),pt=lt,st=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(s.UNPACK_SKIP_ROWS,at),e.texSubImage2D(s.TEXTURE_2D,0,dt,at,pt,st,H,rt,w.data)}R.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,X),e.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ct)}}function oe(R,w,H){let rt=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(rt=s.TEXTURE_3D);let nt=Lt(R,w),ht=w.source;e.bindTexture(rt,R.__webglTexture,s.TEXTURE0+H);let gt=i.get(ht);if(ht.version!==gt.__version||nt===!0){if(e.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let st=ie.getPrimaries(ie.workingColorSpace),et=w.colorSpace===as?null:ie.getPrimaries(w.colorSpace),_t=w.colorSpace===as||st===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let tt=y(w.image,!1,n.maxTextureSize);tt=Dt(w,tt);let ct=r.convert(w.format,w.colorSpace),D=r.convert(w.type),j=T(w.internalFormat,ct,D,w.normalized,w.colorSpace,w.isVideoTexture);Ht(rt,w);let K,ft=w.mipmaps,lt=w.isVideoTexture!==!0,dt=gt.__version===void 0||nt===!0,at=ht.dataReady,pt=S(w,tt);if(w.isDepthTexture)j=_(w.format===os,w.type),dt&&(lt?e.texStorage2D(s.TEXTURE_2D,1,j,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,j,tt.width,tt.height,0,ct,D,null));else if(w.isDataTexture)if(ft.length>0){lt&&dt&&e.texStorage2D(s.TEXTURE_2D,pt,j,ft[0].width,ft[0].height);for(let st=0,et=ft.length;st<et;st++)K=ft[st],lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,K.width,K.height,ct,D,K.data):e.texImage2D(s.TEXTURE_2D,st,j,K.width,K.height,0,ct,D,K.data);w.generateMipmaps=!1}else lt?(dt&&e.texStorage2D(s.TEXTURE_2D,pt,j,tt.width,tt.height),at&&ce(w,tt,ct,D)):e.texImage2D(s.TEXTURE_2D,0,j,tt.width,tt.height,0,ct,D,tt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){lt&&dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,j,ft[0].width,ft[0].height,tt.depth);for(let st=0,et=ft.length;st<et;st++)if(K=ft[st],w.format!==In)if(ct!==null)if(lt){if(at)if(w.layerUpdates.size>0){let _t=ef(K.width,K.height,w.format,w.type);for(let it of w.layerUpdates){let Tt=K.data.subarray(it*_t/K.data.BYTES_PER_ELEMENT,(it+1)*_t/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,it,K.width,K.height,1,ct,Tt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,K.width,K.height,tt.depth,ct,K.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,j,K.width,K.height,tt.depth,0,K.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?at&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,K.width,K.height,tt.depth,ct,D,K.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,j,K.width,K.height,tt.depth,0,ct,D,K.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{lt&&dt&&e.texStorage2D(s.TEXTURE_2D,pt,j,ft[0].width,ft[0].height);for(let st=0,et=ft.length;st<et;st++)K=ft[st],w.format!==In?ct!==null?lt?at&&e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,K.width,K.height,ct,K.data):e.compressedTexImage2D(s.TEXTURE_2D,st,j,K.width,K.height,0,K.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,K.width,K.height,ct,D,K.data):e.texImage2D(s.TEXTURE_2D,st,j,K.width,K.height,0,ct,D,K.data)}else if(w.isDataArrayTexture)if(lt){if(dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,j,tt.width,tt.height,tt.depth),at)if(w.layerUpdates.size>0){let st=ef(tt.width,tt.height,w.format,w.type);for(let et of w.layerUpdates){let _t=tt.data.subarray(et*st/tt.data.BYTES_PER_ELEMENT,(et+1)*st/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,tt.width,tt.height,1,ct,D,_t)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ct,D,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,j,tt.width,tt.height,tt.depth,0,ct,D,tt.data);else if(w.isData3DTexture)lt?(dt&&e.texStorage3D(s.TEXTURE_3D,pt,j,tt.width,tt.height,tt.depth),at&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ct,D,tt.data)):e.texImage3D(s.TEXTURE_3D,0,j,tt.width,tt.height,tt.depth,0,ct,D,tt.data);else if(w.isFramebufferTexture){if(dt)if(lt)e.texStorage2D(s.TEXTURE_2D,pt,j,tt.width,tt.height);else{let st=tt.width,et=tt.height;for(let _t=0;_t<pt;_t++)e.texImage2D(s.TEXTURE_2D,_t,j,st,et,0,ct,D,null),st>>=1,et>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){let st=s.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),tt.parentNode!==st){st.appendChild(tt),d.add(w),st.onpaint=et=>{let _t=et.changedElements;for(let it of d)_t.includes(it.image)&&(it.needsUpdate=!0)},st.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,tt);else{let _t=s.RGBA,it=s.RGBA,Tt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,_t,it,Tt,tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ft.length>0){if(lt&&dt){let st=Bt(ft[0]);e.texStorage2D(s.TEXTURE_2D,pt,j,st.width,st.height)}for(let st=0,et=ft.length;st<et;st++)K=ft[st],lt?at&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,ct,D,K):e.texImage2D(s.TEXTURE_2D,st,j,ct,D,K);w.generateMipmaps=!1}else if(lt){if(dt){let st=Bt(tt);e.texStorage2D(s.TEXTURE_2D,pt,j,st.width,st.height)}at&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,D,tt)}else e.texImage2D(s.TEXTURE_2D,0,j,ct,D,tt);M(w)&&w.mipmapsAutoUpdate===!0&&v(rt),gt.__version=ht.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function J(R,w,H){if(w.image.length!==6)return;let rt=Lt(R,w),nt=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+H);let ht=i.get(nt);if(nt.version!==ht.__version||rt===!0){e.activeTexture(s.TEXTURE0+H);let gt=ie.getPrimaries(ie.workingColorSpace),X=w.colorSpace===as?null:ie.getPrimaries(w.colorSpace),tt=w.colorSpace===as||gt===X?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ct=w.isCompressedTexture||w.image[0].isCompressedTexture,D=w.image[0]&&w.image[0].isDataTexture,j=[];for(let it=0;it<6;it++)!ct&&!D?j[it]=y(w.image[it],!0,n.maxCubemapSize):j[it]=D?w.image[it].image:w.image[it],j[it]=Dt(w,j[it]);let K=j[0],ft=r.convert(w.format,w.colorSpace),lt=r.convert(w.type),dt=T(w.internalFormat,ft,lt,w.normalized,w.colorSpace),at=w.isVideoTexture!==!0,pt=ht.__version===void 0||rt===!0,st=nt.dataReady,et=S(w,K);Ht(s.TEXTURE_CUBE_MAP,w);let _t;if(w.isDepthTexture){if(dt=_(w.format===os,w.type),pt)if(at)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,dt,K.width,K.height);else for(let it=0;it<6;it++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,dt,K.width,K.height,0,ft,lt,null)}else if(ct){at&&pt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,et,dt,K.width,K.height);for(let it=0;it<6;it++){_t=j[it].mipmaps;for(let Tt=0;Tt<_t.length;Tt++){let Qt=_t[Tt];w.format!==In?ft!==null?at?st&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt,0,0,Qt.width,Qt.height,ft,Qt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt,dt,Qt.width,Qt.height,0,Qt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt,0,0,Qt.width,Qt.height,ft,lt,Qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt,dt,Qt.width,Qt.height,0,ft,lt,Qt.data)}}}else{if(_t=w.mipmaps,at&&pt){_t.length>0&&et++;let it=Bt(j[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,et,dt,it.width,it.height)}for(let it=0;it<6;it++)if(D){at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,j[it].width,j[it].height,ft,lt,j[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,dt,j[it].width,j[it].height,0,ft,lt,j[it].data);for(let Tt=0;Tt<_t.length;Tt++){let Wt=_t[Tt].image[it].image;at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt+1,0,0,Wt.width,Wt.height,ft,lt,Wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt+1,dt,Wt.width,Wt.height,0,ft,lt,Wt.data)}}else{at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,ft,lt,j[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,dt,ft,lt,j[it]);for(let Tt=0;Tt<_t.length;Tt++){let Qt=_t[Tt];at?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt+1,0,0,ft,lt,Qt.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Tt+1,dt,ft,lt,Qt.image[it])}}}M(w)&&w.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),ht.__version=nt.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Kt(R,w,H,rt,nt,ht){let gt=r.convert(H.format,H.colorSpace),X=r.convert(H.type),tt=T(H.internalFormat,gt,X,H.normalized,H.colorSpace),ct=i.get(w),D=i.get(H);if(D.__renderTarget=w,!ct.__hasExternalTextures){let j=Math.max(1,w.width>>ht),K=Math.max(1,w.height>>ht);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,ht,tt,j,K,w.depth,0,gt,X,null):e.texImage2D(nt,ht,tt,j,K,0,gt,X,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),ut(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,nt,D.__webglTexture,0,Vt(w)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,nt,D.__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(R,w,H){if(s.bindRenderbuffer(s.RENDERBUFFER,R),w.depthBuffer){let rt=w.depthTexture,nt=rt&&rt.isDepthTexture?rt.type:null,ht=_(w.stencilBuffer,nt),gt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ut(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt(w),ht,w.width,w.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt(w),ht,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ht,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,R)}else{let rt=w.textures;for(let nt=0;nt<rt.length;nt++){let ht=rt[nt],gt=r.convert(ht.format,ht.colorSpace),X=r.convert(ht.type),tt=T(ht.internalFormat,gt,X,ht.normalized,ht.colorSpace);ut(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt(w),tt,w.width,w.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt(w),tt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,tt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ve(R,w,H){let rt=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=i.get(w.depthTexture);nt.__renderTarget=w;let ht=rt?w.depthTexture.image[0]:w.depthTexture.image;(!nt.__webglTexture||ht.width!==w.width||ht.height!==w.height)&&(ht.width=w.width,ht.height=w.height,w.depthTexture.needsUpdate=!0),rt?mt(w.depthTexture,0):ot(w.depthTexture,0);let gt=nt.__webglTexture,X=Vt(w),tt=rt?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,ct=w.depthTexture.format===os?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===ns)ut(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,tt,gt,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,ct,tt,gt,0);else if(w.depthTexture.format===os)ut(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,tt,gt,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,ct,tt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(R){let w=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let rt=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),rt){let nt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,rt.removeEventListener("dispose",nt)};rt.addEventListener("dispose",nt),w.__depthDisposeCallback=nt}w.__boundDepthTexture=rt}if(R.depthTexture&&!w.__autoAllocateDepthBuffer)if(H)for(let rt=0;rt<6;rt++)ve(w.__webglFramebuffer[rt],R,rt);else R.texture.mipmaps.length>0?ve(w.__webglFramebuffer[0],R,0):ve(w.__webglFramebuffer,R,0);else if(H){w.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[rt]),w.__webglDepthbuffer[rt]===void 0)w.__webglDepthbuffer[rt]=s.createRenderbuffer(),Xe(w.__webglDepthbuffer[rt],R,!1);else{let nt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=w.__webglDepthbuffer[rt];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,ht)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Xe(w.__webglDepthbuffer,R,!1);else{let nt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,ht)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(R,w,H){let rt=i.get(R);w!==void 0&&Kt(rt.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&se(R)}function He(R){let w=R.texture,H=i.get(R),rt=i.get(w);R.addEventListener("dispose",I),C(R);let nt=R.textures,ht=R.isWebGLCubeRenderTarget===!0,gt=nt.length>1;if(gt||(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=w.version,o.memory.textures++),ht){H.__webglFramebuffer=[];for(let X=0;X<6;X++)if(w.mipmaps.length>0){H.__webglFramebuffer[X]=[];for(let tt=0;tt<w.mipmaps.length;tt++)H.__webglFramebuffer[X][tt]=s.createFramebuffer()}else H.__webglFramebuffer[X]=s.createFramebuffer()}else{if(w.mipmaps.length>0){H.__webglFramebuffer=[];for(let X=0;X<w.mipmaps.length;X++)H.__webglFramebuffer[X]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(gt)for(let X=0,tt=nt.length;X<tt;X++){let ct=i.get(nt[X]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&ut(R)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let X=0;X<nt.length;X++){let tt=nt[X];H.__webglColorRenderbuffer[X]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[X]);let ct=r.convert(tt.format,tt.colorSpace),D=r.convert(tt.type),j=T(tt.internalFormat,ct,D,tt.normalized,tt.colorSpace,R.isXRRenderTarget===!0),K=Vt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,K,j,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+X,s.RENDERBUFFER,H.__webglColorRenderbuffer[X])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,w);for(let X=0;X<6;X++)if(w.mipmaps.length>0)for(let tt=0;tt<w.mipmaps.length;tt++)Kt(H.__webglFramebuffer[X][tt],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+X,tt);else Kt(H.__webglFramebuffer[X],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);M(w)?v(s.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let X=0,tt=nt.length;X<tt;X++){let ct=nt[X],D=i.get(ct),j=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,D.__webglTexture),Ht(j,ct),Kt(H.__webglFramebuffer,R,ct,s.COLOR_ATTACHMENT0+X,j,0),M(ct)&&v(j)}e.unbindTexture()}else{let X=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(X=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(X,rt.__webglTexture),Ht(X,w),w.mipmaps.length>0)for(let tt=0;tt<w.mipmaps.length;tt++)Kt(H.__webglFramebuffer[tt],R,w,s.COLOR_ATTACHMENT0,X,tt);else Kt(H.__webglFramebuffer,R,w,s.COLOR_ATTACHMENT0,X,0);M(w)?v(X):w.mipmaps.length>0&&s.texParameteri(X,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&se(R)}function F(R){let w=R.textures;for(let H=0,rt=w.length;H<rt;H++){let nt=w[H];if(M(nt)&&nt.mipmapsAutoUpdate===!0){let ht=b(R),gt=i.get(nt).__webglTexture;e.bindTexture(ht,gt),v(ht),e.unbindTexture()}}}let ue=[];function ae(R){if(R.samples>0){if(ut(R)===!1){let w=R.textures,H=R.width,rt=R.height,nt=s.COLOR_BUFFER_BIT,ht=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=i.get(R),X=w.length>1;if(X)for(let ct=0;ct<w.length;ct++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ct=0;ct<w.length;ct++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),X){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[ct]);let D=i.get(w[ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,D,0)}s.blitFramebuffer(0,0,H,rt,0,0,H,rt,nt,s.NEAREST),l===!0&&(ue.length=0,ue.push(s.COLOR_ATTACHMENT0+ct),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&ue.push(ht),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),X)for(let ct=0;ct<w.length;ct++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,gt.__webglColorRenderbuffer[ct]);let D=i.get(w[ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,D,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let w=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Vt(R){return Math.min(n.maxSamples,R.samples)}function ut(R){let w=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function he(R){let w=o.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function Dt(R,w){let H=R.colorSpace,rt=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==No&&H!==as&&(ie.getTransfer(H)===pe?(rt!==In||nt!==sn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",H)),w}function Bt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Et,this.resetTextureUnits=P,this.getTextureUnits=$,this.setTextureUnits=xt,this.setTexture2D=ot,this.setTexture2DArray=vt,this.setTexture3D=bt,this.setTextureCube=mt,this.rebindTextures=Fe,this.setupRenderTarget=He,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Kt,this.useMultisampledRTT=ut,this.dispose=z}function eM(s,t){function e(i,n=as){let r,o=ie.getTransfer(n);if(i===sn)return s.UNSIGNED_BYTE;if(i===pc)return s.UNSIGNED_SHORT_4_4_4_4;if(i===mc)return s.UNSIGNED_SHORT_5_5_5_1;if(i===zu)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===ku)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fu)return s.BYTE;if(i===Bu)return s.SHORT;if(i===jr)return s.UNSIGNED_SHORT;if(i===dc)return s.INT;if(i===Cn)return s.UNSIGNED_INT;if(i===Rn)return s.FLOAT;if(i===Pn)return s.HALF_FLOAT;if(i===Vu)return s.ALPHA;if(i===Gu)return s.RGB;if(i===In)return s.RGBA;if(i===ns)return s.DEPTH_COMPONENT;if(i===os)return s.DEPTH_STENCIL;if(i===Hu)return s.RED;if(i===gc)return s.RED_INTEGER;if(i===Ns)return s.RG;if(i===_c)return s.RG_INTEGER;if(i===xc)return s.RGBA_INTEGER;if(i===sa||i===ra||i===oa||i===aa)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vc||i===yc||i===Sc||i===Mc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===vc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bc||i===Tc||i===wc||i===Ec||i===Ac||i===la||i===Cc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bc||i===Tc)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ec)return r.COMPRESSED_R11_EAC;if(i===Ac)return r.COMPRESSED_SIGNED_R11_EAC;if(i===la)return r.COMPRESSED_RG11_EAC;if(i===Cc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Rc||i===Pc||i===Ic||i===Lc||i===Dc||i===Nc||i===Uc||i===Oc||i===Fc||i===Bc||i===zc||i===kc||i===Vc||i===Gc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Rc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ic)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hc||i===Wc||i===Xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Hc)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qc||i===Yc||i===ca||i===Zc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===qc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===or?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var iM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nM=`
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

}`,uf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Yo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new gn({vertexShader:iM,fragmentShader:nM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ei(new Ko(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ff=class extends On{constructor(t,e){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new uf,g={},y=e.getContextAttributes(),M=null,v=null,b=[],T=[],_=new Ft,S=null,C=null,A=new Pi;A.viewport=new Le;let N=new Pi;N.viewport=new Le;let I=[A,N],k=new cc,L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ot=b[Y];return ot===void 0&&(ot=new Xr,b[Y]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Y){let ot=b[Y];return ot===void 0&&(ot=new Xr,b[Y]=ot),ot.getGripSpace()},this.getHand=function(Y){let ot=b[Y];return ot===void 0&&(ot=new Xr,b[Y]=ot),ot.getHandSpace()};function V(Y){let ot=T.indexOf(Y.inputSource);if(ot===-1)return;let vt=b[ot];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,c||o),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<b.length;Y++){let ot=T[Y];ot!==null&&(T[Y]=null,b[Y].disconnect(ot))}L=null,z=null,m.reset();for(let Y in g)delete g[Y];if(t.setRenderTarget(M),f=null,u=null,d=null,n=null,v=null,Et.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(_.width,_.height,!1),C!==null){let Y=C.camera;Y.fov=C.fov,Y.zoom=C.zoom,Y.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(M=t.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",O),n.addEventListener("inputsourceschange",Q),y.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,bt=null,mt=null;y.depth&&(mt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=y.stencil?os:ns,bt=y.stencil?or:Cn);let Nt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Nt),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new tn(u.textureWidth,u.textureHeight,{format:In,type:sn,depthTexture:new ss(u.textureWidth,u.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,vt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new tn(f.framebufferWidth,f.framebufferHeight,{format:In,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Et.setContext(n),Et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(Y){for(let ot=0;ot<Y.removed.length;ot++){let vt=Y.removed[ot],bt=T.indexOf(vt);bt>=0&&(T[bt]=null,b[bt].disconnect(vt))}for(let ot=0;ot<Y.added.length;ot++){let vt=Y.added[ot],bt=T.indexOf(vt);if(bt===-1){for(let Nt=0;Nt<b.length;Nt++)if(Nt>=T.length){T.push(vt),bt=Nt;break}else if(T[Nt]===null){T[Nt]=vt,bt=Nt;break}if(bt===-1)break}let mt=b[bt];mt&&mt.connect(vt)}}function W(Y,ot){ot===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ot.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let ot=Y.near,vt=Y.far;m.texture!==null&&(m.depthNear>0&&(ot=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),k.near=N.near=A.near=ot,k.far=N.far=A.far=vt,(L!==k.near||z!==k.far)&&(n.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,z=k.far),k.layers.mask=Y.layers.mask|6,A.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;let bt=Y.parent,mt=k.cameras;W(k,bt);for(let Nt=0;Nt<mt.length;Nt++)W(mt[Nt],bt);k.projectionMatrix.copy(A.projectionMatrix),k.projectionMatrixInverse.copy(A.projectionMatrixInverse),C===null&&Y.isPerspectiveCamera&&(C={camera:Y,fov:Y.fov,zoom:Y.zoom}),P(Y,k,bt)};function P(Y,ot,vt){vt===null?Y.matrix.copy(ot.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ot.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ot.projectionMatrix),Y.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Dl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Y){return g[Y]};let $=null;function xt(Y,ot){if(h=ot.getViewerPose(c||o),p=ot,h!==null){let vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let bt=!1;vt.length!==k.cameras.length&&(k.cameras.length=0,bt=!0);for(let At=0;At<vt.length;At++){let Ht=vt[At],Lt=null;if(f!==null)Lt=f.getViewport(Ht);else{let ce=d.getViewSubImage(u,Ht);Lt=ce.viewport,At===0&&(t.setRenderTargetTextures(v,ce.colorTexture,ce.depthStencilTexture),t.setRenderTarget(v))}let Ot=I[At];Ot===void 0&&(Ot=new Pi,Ot.layers.enable(At),Ot.viewport=new Le,I[At]=Ot),Ot.matrix.fromArray(Ht.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(Ht.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),At===0&&(k.matrix.copy(Ot.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),bt===!0&&k.cameras.push(Ot)}let mt=n.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let At=d.getDepthInformation(vt[0]);At&&At.isValid&&At.texture&&m.init(At,n.renderState)}if(mt&&mt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let At=0;At<vt.length;At++){let Ht=vt[At].camera;if(Ht){let Lt=g[Ht];Lt||(Lt=new Yo,g[Ht]=Lt);let Ot=d.getCameraImage(Ht);Lt.sourceTexture=Ot}}}}for(let vt=0;vt<b.length;vt++){let bt=T[vt],mt=b[vt];bt!==null&&mt!==void 0&&mt.update(bt,ot,c||o)}$&&$(Y,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),p=null}let Et=new um;Et.setAnimationLoop(xt),this.setAnimationLoop=function(Y){$=Y},this.dispose=function(){}}},sM=new Ce,Sm=new Gt;Sm.set(-1,0,0,0,1,0,0,0,1);function rM(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Qu(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,y,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===fi&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===fi&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=t.get(g),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(sM.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Sm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=M*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===fi&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function oM(s,t,e,i){let n={},r={};function o(y,M){let v=M.program;i.uniformBlockBinding(y,v,n[y.id])}function a(y,M){let v=n[y.id];v===void 0&&(p(y),v=l(y),n[y.id]=v,y.addEventListener("dispose",m));let b=M.program;i.updateUBOMapping(y,b);let T=t.render.frame;r[y.id]!==T&&(c(y),r[y.id]=T)}function l(y){let M=s.createBuffer(),v=y.__size,b=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,v,b),s.bindBuffer(s.UNIFORM_BUFFER,null),M}function c(y){let M=n[y.id],v=y.uniforms,b=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let T=0,_=v.length;T<_;T++){let S=v[T];if(Array.isArray(S))for(let C=0,A=S.length;C<A;C++)h(S[C],T,C,b);else h(S,T,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,M,v,b){if(u(y,M,v,b)===!0){let T=y.__offset,_=y.value;if(Array.isArray(_)){let S=0;for(let C=0;C<_.length;C++){let A=_[C],N=x(A,!0);d(A,y.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,y.__data)}}function d(y,M,v){typeof y=="number"||typeof y=="boolean"?M[v]=y:y.isMatrix3?(M[v]=y.elements[0],M[v+1]=y.elements[1],M[v+2]=y.elements[2],M[v+3]=0,M[v+4]=y.elements[3],M[v+5]=y.elements[4],M[v+6]=y.elements[5],M[v+7]=0,M[v+8]=y.elements[6],M[v+9]=y.elements[7],M[v+10]=y.elements[8],M[v+11]=0):ArrayBuffer.isView(y)?M.set(y.subarray(0,M.length-v),v):y.toArray(M,v)}function u(y,M,v,b){let T=y.value,_=M+"_"+v;if(Array.isArray(T)){b[_]===void 0&&(b[_]=[]);let S=b[_],C=!1;for(let A=0;A<T.length;A++)f(T[A],S,A)===!0&&(C=!0);return C}return f(T,b,_)}function f(y,M,v){if(M[v]===void 0)return typeof y=="number"||typeof y=="boolean"?M[v]=y:ArrayBuffer.isView(y)?M[v]=y.slice():M[v]=y.clone(),!0;{let b=M[v];if(typeof y=="number"||typeof y=="boolean"){if(b!==y)return M[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(b.equals(y)===!1)return b.copy(y),!0}}return!1}function p(y){let M=y.uniforms,v=0,b=16;for(let _=0,S=M.length;_<S;_++){let C=Array.isArray(M[_])?M[_]:[M[_]];for(let A=0,N=C.length;A<N;A++){let I=C[A],k=Array.isArray(I.value)?I.value:[I.value],L=Array.isArray(M[_])||Array.isArray(I.value),z=v;for(let O=0,Q=k.length;O<Q;O++){let W=k[O],P=x(W,L),$=v%b,xt=$%P.boundary,Et=$+xt;v+=xt,Et!==0&&b-Et<P.storage&&(v+=b-Et),O===0&&(z=v),v+=P.storage}let V=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new V((v-z)/Float32Array.BYTES_PER_ELEMENT),I.__offset=z}}let T=v%b;return T>0&&(v+=b-T),y.__size=v,y.__cache={},this}function x(y,M){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",y),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(y){let M=y.target;M.removeEventListener("dispose",m),s.deleteBuffer(n[M.id]),delete n[M.id],delete r[M.id]}function g(){for(let y in n)s.deleteBuffer(n[y]);n={},r={}}return{bind:o,update:a,dispose:g}}var aM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vn=null;function lM(){return Vn===null&&(Vn=new Bl(aM,16,16,Ns,Pn),Vn.name="DFG_LUT",Vn.minFilter=Ii,Vn.magFilter=Ii,Vn.wrapS=Un,Vn.wrapT=Un,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}var Qc=class{constructor(t={}){let{canvas:e=Up(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=sn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=f,m=new Set([xc,_c,gc]),g=new Set([sn,Cn,jr,or,pc,mc]),y=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},b=null,T=null,_=[],S=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,N=!1,I=null,k=null,L=null,z=null;this._outputColorSpace=ji;let V=0,O=0,Q=null,W=-1,P=null,$=new Le,xt=new Le,Et=null,Y=new ne(0),ot=0,vt=e.width,bt=e.height,mt=1,Nt=null,ge=null,At=new Le(0,0,vt,bt),Ht=new Le(0,0,vt,bt),Lt=!1,Ot=new ir,ce=new zl,oe=!1,J=!1,Kt=new Ce,Xe=new B,ve=new Le,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function He(){return Q===null?mt:1}let F=i;function ue(E,U){return e.getContext(E,U)}let ae,Vt,ut,he,Dt,Bt,R,w,H,rt,nt,ht,gt,X,tt,ct,D,j,K,ft,lt,dt,at;try{let E={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",it,!1),F===null){let U="webgl2";if(F=ue(U,E),F===null)throw ue(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pt()}catch(E){throw e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",it,!1),kt("WebGLRenderer: "+E.message),E}function pt(){ae=new vy(F),ae.init(),lt=new eM(F,ae),Vt=new ly(F,ae,t,lt),ut=new jS(F,ae),Vt.reversedDepthBuffer&&u&&ut.buffers.depth.setReversed(!0),k=F.createFramebuffer(),L=F.createFramebuffer(),z=F.createFramebuffer(),he=new My(F),Dt=new zS,Bt=new tM(F,ae,ut,Dt,Vt,lt,he),R=new xy(A),w=new T0(F),dt=new oy(F,w),H=new yy(F,w,he,dt),rt=new Ty(F,H,w,dt,he),j=new by(F,Vt,Bt),tt=new cy(Dt),nt=new BS(A,R,ae,Vt,dt,tt),ht=new rM(A,Dt),gt=new VS,X=new YS(ae),D=new ry(A,R,ut,rt,p,l),ct=new QS(A,rt,Vt),at=new oM(F,he,Vt,ut),K=new ay(F,ae,he),ft=new Sy(F,ae,he),he.programs=nt.programs,A.capabilities=Vt,A.extensions=ae,A.properties=Dt,A.renderLists=gt,A.shadowMap=ct,A.state=ut,A.info=he}x!==sn&&(C=new Ey(x,e.width,e.height,a,n,r));let st=new ff(A,F);this.xr=st,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=ae.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ae.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(E){E!==void 0&&(mt=E,this.setSize(vt,bt,!1))},this.getSize=function(E){return E.set(vt,bt)},this.setSize=function(E,U,Z=!0){if(st.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=E,bt=U,e.width=Math.floor(E*mt),e.height=Math.floor(U*mt),Z===!0&&(e.style.width=E+"px",e.style.height=U+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(vt*mt,bt*mt).floor()},this.setDrawingBufferSize=function(E,U,Z){vt=E,bt=U,mt=Z,e.width=Math.floor(E*Z),e.height=Math.floor(U*Z),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(x===sn){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy($)},this.getViewport=function(E){return E.copy(At)},this.setViewport=function(E,U,Z,G){E.isVector4?At.set(E.x,E.y,E.z,E.w):At.set(E,U,Z,G),ut.viewport($.copy(At).multiplyScalar(He()).round())},this.getScissor=function(E){return E.copy(Ht)},this.setScissor=function(E,U,Z,G){E.isVector4?Ht.set(E.x,E.y,E.z,E.w):Ht.set(E,U,Z,G),ut.scissor(xt.copy(Ht).multiplyScalar(He()).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(E){ut.setScissorTest(Lt=E)},this.setOpaqueSort=function(E){Nt=E},this.setTransparentSort=function(E){ge=E},this.getClearColor=function(E){return E.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,Z=!0){let G=0;if(E){let q=!1;if(Q!==null){let St=Q.texture.format;q=m.has(St)}if(q){let St=Q.texture.type,Rt=g.has(St),yt=D.getClearColor(),wt=D.getClearAlpha(),Ut=yt.r,Xt=yt.g,te=yt.b;Rt?(y[0]=Ut,y[1]=Xt,y[2]=te,y[3]=wt,F.clearBufferuiv(F.COLOR,0,y)):(M[0]=Ut,M[1]=Xt,M[2]=te,M[3]=wt,F.clearBufferiv(F.COLOR,0,M))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",it,!1),D.dispose(),gt.dispose(),X.dispose(),Bt.dispose(),Dt.dispose(),R.dispose(),rt.dispose(),H.dispose(),dt.dispose(),at.dispose(),nt.dispose(),st.dispose(),st.removeEventListener("sessionstart",ye),st.removeEventListener("sessionend",de),Qe.stop()};function et(E){E.preventDefault(),Ju("WebGLRenderer: Context Lost."),N=!0}function _t(){Ju("WebGLRenderer: Context Restored."),N=!1;let E=he.autoReset,U=ct.enabled,Z=ct.autoUpdate,G=ct.needsUpdate,q=ct.type;pt(),he.autoReset=E,ct.enabled=U,ct.autoUpdate=Z,ct.needsUpdate=G,ct.type=q}function it(E){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Tt(E){let U=E.target;U.removeEventListener("dispose",Tt),Qt(U)}function Qt(E){Wt(E),Dt.remove(E)}function Wt(E){let U=Dt.get(E).programs;U!==void 0&&(U.forEach(function(Z){nt.releaseProgram(Z)}),E.isShaderMaterial&&nt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,Z,G,q,St){U===null&&(U=se);let Rt=q.isMesh&&q.matrixWorld.determinantAffine()<0,yt=fn(E,U,Z,G,q);ut.setMaterial(G,Rt);let wt=Z.index,Ut=1;if(G.wireframe===!0){if(wt=H.getWireframeAttribute(Z),wt===void 0)return;Ut=2}let Xt=Z.drawRange,te=Z.attributes.position,Pt=Xt.start*Ut,ee=(Xt.start+Xt.count)*Ut;St!==null&&(Pt=Math.max(Pt,St.start*Ut),ee=Math.min(ee,(St.start+St.count)*Ut)),wt!==null?(Pt=Math.max(Pt,0),ee=Math.min(ee,wt.count)):te!=null&&(Pt=Math.max(Pt,0),ee=Math.min(ee,te.count));let Ze=ee-Pt;if(Ze<0||Ze===1/0)return;dt.setup(q,G,yt,Z,wt);let Te,Me=K;if(wt!==null&&(Te=w.get(wt),Me=ft,Me.setIndex(Te)),q.isMesh)G.wireframe===!0?(ut.setLineWidth(G.wireframeLinewidth*He()),Me.setMode(F.LINES)):Me.setMode(F.TRIANGLES);else if(q.isLine){let _i=G.linewidth;_i===void 0&&(_i=1),ut.setLineWidth(_i*He()),q.isLineSegments?Me.setMode(F.LINES):q.isLineLoop?Me.setMode(F.LINE_LOOP):Me.setMode(F.LINE_STRIP)}else q.isPoints?Me.setMode(F.POINTS):q.isSprite&&Me.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))Me.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let _i=q._multiDrawStarts,It=q._multiDrawCounts,Ri=q._multiDrawCount,fe=wt?w.get(wt).bytesPerElement:1,Js=Dt.get(G).currentProgram.getUniforms();for(let xi=0;xi<Ri;xi++)Js.setValue(F,"_gl_DrawID",xi),Me.render(_i[xi]/fe,It[xi])}else if(q.isInstancedMesh)Me.renderInstances(Pt,Ze,q.count);else if(Z.isInstancedBufferGeometry){let _i=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,It=Math.min(Z.instanceCount,_i);Me.renderInstances(Pt,Ze,It)}else Me.render(Pt,Ze)};function Ee(E,U,Z,G){I!==null&&E.isNodeMaterial&&I.setObject(G,E),oe===!0&&tt.setState(E,Z,!1),E.transparent===!0&&E.side===zn&&E.forceSinglePass===!1?(E.side=fi,E.needsUpdate=!0,$i(E,U,G),E.side=Bn,E.needsUpdate=!0,$i(E,U,G),E.side=zn):$i(E,U,G)}this.compile=function(E,U,Z=null){Z===null&&(Z=E),I!==null&&I.renderStart(E,U,Z),T=X.get(Z),T.init(U),S.push(T),Z.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(T.pushLight(q),q.castShadow&&T.pushShadow(q))}),E!==Z&&E.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(T.pushLight(q),q.castShadow&&T.pushShadow(q))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),J=this.localClippingEnabled,oe=tt.init(this.clippingPlanes,J),oe===!0&&tt.setGlobalState(this.clippingPlanes,U),I!==null&&ct.render(T.state.shadowsArray,Z,U);let G=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let St=q.material;if(St)if(Array.isArray(St))for(let Rt=0;Rt<St.length;Rt++){let yt=St[Rt];Ee(yt,Z,U,q),G.add(yt)}else Ee(St,Z,U,q),G.add(St)}),T=S.pop(),I!==null&&I.renderEnd(),G},this.compileAsync=function(E,U,Z=null){let G=this.compile(E,U,Z);return new Promise(q=>{function St(){if(G.forEach(function(Rt){let wt=Dt.get(Rt).currentProgram;(wt===void 0||wt.isReady())&&G.delete(Rt)}),G.size===0){q(E);return}setTimeout(St,10)}ae.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let qe=null;function Ae(E){qe&&qe(E)}function ye(){Qe.stop()}function de(){Qe.start()}let Qe=new um;Qe.setAnimationLoop(Ae),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(E){qe=E,st.setAnimationLoop(E),E===null?Qe.stop():Qe.start()},st.addEventListener("sessionstart",ye),st.addEventListener("sessionend",de),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;I!==null&&I.renderStart(E,U);let Z=st.enabled===!0&&st.isPresenting===!0,G=C!==null&&(Q===null||Z)&&C.begin(A,Q);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(U),U=st.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,U,Q),T=X.get(E,S.length),T.init(U),T.state.textureUnits=Bt.getTextureUnits(),S.push(T),Kt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ce.setFromArrayCamera(U):Ot.setFromProjectionMatrix(Kt,pn,U.reversedDepth),J=this.localClippingEnabled,oe=tt.init(this.clippingPlanes,J),b=gt.get(E,_.length),b.init(),_.push(b),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let Rt=A.xr.getDepthSensingMesh();Rt!==null&&Se(Rt,U,-1/0,A.sortObjects)}Se(E,U,0,A.sortObjects),b.finish(),I!==null&&I.updateLights(T.state.lightsArray),A.sortObjects===!0&&b.sort(Nt,ge),Fe=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Fe&&D.addToRenderList(b,E),this.info.autoReset===!0&&this.info.reset(),oe===!0&&tt.beginShadows();let q=T.state.shadowsArray;if(ct.render(q,E,U),oe===!0&&tt.endShadows(),(G&&C.hasRenderPass())===!1){let Rt=b.opaque,yt=b.transmissive;if(T.setupLights(),U.isArrayCamera){let wt=U.cameras;if(yt.length>0)for(let Ut=0,Xt=wt.length;Ut<Xt;Ut++){let te=wt[Ut];Ji(Rt,yt,E,te)}Fe&&D.render(E);for(let Ut=0,Xt=wt.length;Ut<Xt;Ut++){let te=wt[Ut];gi(b,E,te,te.viewport)}}else yt.length>0&&Ji(Rt,yt,E,U),Fe&&D.render(E),gi(b,E,U)}Q!==null&&O===0&&(Bt.updateMultisampleRenderTarget(Q),Bt.updateRenderTargetMipmap(Q)),G&&C.end(A),E.isScene===!0&&E.onAfterRender(A,E,U),dt.resetDefaultState(),W=-1,P=null,S.pop(),S.length>0?(T=S[S.length-1],Bt.setTextureUnits(T.state.textureUnits),oe===!0&&tt.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,I!==null&&I.renderEnd()};function Se(E,U,Z,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){let Rt=U.isArrayCamera?ce:Ot;if(!E.frustumCulled||E.intersectsFrustum(Rt)){G&&ve.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Kt);let yt=rt.update(E),wt=E.material;wt.visible&&b.push(E,yt,wt,Z,ve.z,null,U)}}else if(E.isMesh||E.isLine||E.isPoints){let Rt=U.isArrayCamera?ce:Ot;if(!E.frustumCulled||E.intersectsFrustum(Rt)){let yt=rt.update(E),wt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ve.copy(E.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),ve.copy(yt.boundingSphere.center)),ve.applyMatrix4(E.matrixWorld).applyMatrix4(Kt)),Array.isArray(wt)){let Ut=yt.groups;for(let Xt=0,te=Ut.length;Xt<te;Xt++){let Pt=Ut[Xt],ee=wt[Pt.materialIndex];ee&&ee.visible&&b.push(E,yt,ee,Z,ve.z,Pt,U)}}else wt.visible&&b.push(E,yt,wt,Z,ve.z,null,U)}}}let St=E.children;for(let Rt=0,yt=St.length;Rt<yt;Rt++)Se(St[Rt],U,Z,G)}function gi(E,U,Z,G){let{opaque:q,transmissive:St,transparent:Rt}=E;T.setupLightsView(Z),oe===!0&&tt.setGlobalState(A.clippingPlanes,Z),G&&ut.viewport($.copy(G)),q.length>0&&Be(q,U,Z),St.length>0&&Be(St,U,Z),Rt.length>0&&Be(Rt,U,Z),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Ji(E,U,Z,G){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){let Pt=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new tn(1,1,{generateMipmaps:!0,type:Pt?Pn:sn,minFilter:rs,samples:Math.max(4,Vt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let St=T.state.transmissionRenderTarget[G.id],Rt=G.viewport||$;St.setSize(Rt.z*A.transmissionResolutionScale,Rt.w*A.transmissionResolutionScale);let yt=A.getRenderTarget(),wt=A.getActiveCubeFace(),Ut=A.getActiveMipmapLevel();A.setRenderTarget(St),A.getClearColor(Y),ot=A.getClearAlpha(),ot<1&&A.setClearColor(16777215,.5),A.clear(),Fe&&D.render(Z);let Xt=A.toneMapping;A.toneMapping=kn;let te=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),oe===!0&&tt.setGlobalState(A.clippingPlanes,G),Be(E,Z,G),Bt.updateMultisampleRenderTarget(St),Bt.updateRenderTargetMipmap(St),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ee=0,Ze=U.length;ee<Ze;ee++){let Te=U[ee],{object:Me,geometry:_i,material:It,group:Ri}=Te;if(It.side===zn&&Me.layers.test(G.layers)){let fe=It.side;It.side=fi,It.needsUpdate=!0,Ye(Me,Z,G,_i,It,Ri),It.side=fe,It.needsUpdate=!0,Pt=!0}}Pt===!0&&(Bt.updateMultisampleRenderTarget(St),Bt.updateRenderTargetMipmap(St))}A.setRenderTarget(yt,wt,Ut),A.setClearColor(Y,ot),te!==void 0&&(G.viewport=te),A.toneMapping=Xt}function Be(E,U,Z){let G=U.isScene===!0?U.overrideMaterial:null;for(let q=0,St=E.length;q<St;q++){let Rt=E[q],{object:yt,geometry:wt,group:Ut}=Rt,Xt=Rt.material;Xt.allowOverride===!0&&G!==null&&(Xt=G),yt.layers.test(Z.layers)&&Ye(yt,U,Z,wt,Xt,Ut)}}function Ye(E,U,Z,G,q,St){I!==null&&q.isNodeMaterial&&I.setObject(E,q),E.onBeforeRender(A,U,Z,G,q,St),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(A,U,Z,G,E,St),q.transparent===!0&&q.side===zn&&q.forceSinglePass===!1?(q.side=fi,q.needsUpdate=!0,A.renderBufferDirect(Z,U,G,q,E,St),q.side=Bn,q.needsUpdate=!0,A.renderBufferDirect(Z,U,G,q,E,St),q.side=zn):A.renderBufferDirect(Z,U,G,q,E,St),E.onAfterRender(A,U,Z,G,q,St)}function je(E){let U=0;for(let Z of E)Z.texture!==null&&U++;return U}function $i(E,U,Z){U.isScene!==!0&&(U=se);let G=Dt.get(E),q=T.state.lights,St=T.state.shadowsArray,Rt=q.state.version,yt=nt.getParameters(E,q.state,St,U,Z,T.state.lightProbeGridArray),wt=nt.getProgramCacheKey(yt),Ut=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let Xt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=R.get(E.envMap||G.environment,Xt),G.envMapRotation=G.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ut===void 0&&(E.addEventListener("dispose",Tt),Ut=new Map,G.programs=Ut,G.programVariants=new Map);let te=Ut.get(wt);if(te!==void 0){if(G.currentProgram===te&&G.lightsStateVersion===Rt)return ze(E,yt),te}else yt.uniforms=nt.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,Z,yt),E.onBeforeCompile(yt,A),te=nt.acquireProgram(yt,wt),Ut.set(wt,te),G.uniforms=yt.uniforms;let Pt=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pt.clippingPlanes=tt.uniform),ze(E,yt),G.needsLights=Ka(E),G.lightsStateVersion=Rt,G.needsLights&&(Pt.ambientLightColor.value=q.state.ambient,Pt.lightProbe.value=q.state.probe,Pt.sunLights.value=q.state.sun,Pt.sunLightShadows.value=q.state.sunShadow,Pt.directionalLights.value=q.state.directional,Pt.directionalLightShadows.value=q.state.directionalShadow,Pt.spotLights.value=q.state.spot,Pt.spotLightShadows.value=q.state.spotShadow,Pt.rectAreaLights.value=q.state.rectArea,Pt.ltc_1.value=q.state.rectAreaLTC1,Pt.ltc_2.value=q.state.rectAreaLTC2,Pt.pointLights.value=q.state.point,Pt.pointLightShadows.value=q.state.pointShadow,Pt.hemisphereLights.value=q.state.hemi,Pt.sunShadowMatrix.value=q.state.sunShadowMatrix,Pt.sunShadowCascade.value=q.state.sunShadowCascade,Pt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Pt.spotLightMatrix.value=q.state.spotLightMatrix,Pt.spotLightMap.value=q.state.spotLightMap,Pt.pointShadowMatrix.value=q.state.pointShadowMatrix),G.numLightProbeGrids=je(T.state.lightProbeGridArray),G.currentProgram=te,G.uniformsList=null,te}function Ar(E,U,Z,G,q){let St=Dt.get(E),Rt=St.currentProgram.id+","+G+","+q,yt=St.programVariants.get(Rt);return yt===void 0?(yt=$i(E,U,Z),St.programVariants.set(Rt,yt)):(St.currentProgram=yt,St.uniformsList=null,St.outputColorSpace=G,St.toneMapping=q),yt}function ti(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=to.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function ze(E,U){let Z=Dt.get(E);Z.outputColorSpace=U.outputColorSpace,Z.batching=U.batching,Z.batchingColor=U.batchingColor,Z.instancing=U.instancing,Z.instancingColor=U.instancingColor,Z.instancingMorph=U.instancingMorph,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function fn(E,U,Z,G,q){U.isScene!==!0&&(U=se),Bt.resetTextureUnits();let St=U.fog,Rt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,yt=Q===null?A.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ie.workingColorSpace,wt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ut=R.get(G.envMap||Rt,wt),Xt=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,te=!!Z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pt=!!Z.morphAttributes.position,ee=!!Z.morphAttributes.normal,Ze=!!Z.morphAttributes.color,Te=kn;G.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Te=A.toneMapping);let Me=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,_i=Me!==void 0?Me.length:0,It=Dt.get(G),Ri=T.state.lights;if(oe===!0&&(J===!0||E!==P)){let Ie=E===P&&G.id===W;tt.setState(G,E,Ie)}let fe=!1,Js=!1;G.version===It.__version?It.needsLights&&It.lightsStateVersion!==Ri.state.version||q.isBatchedMesh&&It.batching===!1||!q.isBatchedMesh&&It.batching===!0||q.isBatchedMesh&&It.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&It.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&It.instancing===!1||!q.isInstancedMesh&&It.instancing===!0||q.isSkinnedMesh&&It.skinning===!1||!q.isSkinnedMesh&&It.skinning===!0||q.isInstancedMesh&&It.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&It.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&It.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&It.instancingMorph===!1&&q.morphTexture!==null||It.envMap!==Ut||G.fog===!0&&It.fog!==St||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==tt.numPlanes||It.numIntersection!==tt.numIntersection)||It.vertexAlphas!==Xt||It.vertexTangents!==te||It.morphTargets!==Pt||It.morphNormals!==ee||It.morphColors!==Ze||It.morphTargetsCount!==_i||It.numLightProbeGrids!==je(T.state.lightProbeGridArray)?fe=!0:(It.outputColorSpace!==yt||It.toneMapping!==Te)&&(Js=!0):(fe=!0,It.__version=G.version);let xi=It.currentProgram;(fe===!0||Js===!0)&&(xi=Js===!0?Ar(G,U,q,yt,Te):$i(G,U,q),I&&G.isNodeMaterial&&I.onUpdateProgram(G,xi,It));let Qa=!1,vs=!1,$s=!1,le=xi.getUniforms(),ui=It.uniforms;if(ut.useProgram(xi.program)&&(Qa=!0,vs=!0,$s=!0),G.id!==W&&(W=G.id,vs=!0),Qa||P!==E){ut.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),le.setValue(F,"projectionMatrix",E.projectionMatrix),le.setValue(F,"viewMatrix",E.matrixWorldInverse);let oi=le.map.cameraPosition;oi!==void 0&&oi.setValue(F,Xe.setFromMatrixPosition(E.matrixWorld)),Vt.logarithmicDepthBuffer&&le.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&le.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),P!==E&&(P=E,vs=!0,$s=!0)}if(It.needsLights&&(Ri.state.sunShadowMap.length>0&&le.setValue(F,"sunShadowMap",Ri.state.sunShadowMap,Bt),Ri.state.directionalShadowMap.length>0&&le.setValue(F,"directionalShadowMap",Ri.state.directionalShadowMap,Bt),Ri.state.spotShadowMap.length>0&&le.setValue(F,"spotShadowMap",Ri.state.spotShadowMap,Bt),Ri.state.pointShadowMap.length>0&&le.setValue(F,"pointShadowMap",Ri.state.pointShadowMap,Bt)),q.isSkinnedMesh){le.setOptional(F,q,"bindMatrix"),le.setOptional(F,q,"bindMatrixInverse");let Ie=q.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),le.setValue(F,"boneTexture",Ie.boneTexture,Bt))}q.isBatchedMesh&&(le.setOptional(F,q,"batchingTexture"),le.setValue(F,"batchingTexture",q._matricesTexture,Bt),le.setOptional(F,q,"batchingIdTexture"),le.setValue(F,"batchingIdTexture",q._indirectTexture,Bt),le.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&le.setValue(F,"batchingColorTexture",q._colorsTexture,Bt));let bn=Z.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&j.update(q,Z,xi),(vs||It.receiveShadow!==q.receiveShadow)&&(It.receiveShadow=q.receiveShadow,le.setValue(F,"receiveShadow",q.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(ui.envMapIntensity.value=U.environmentIntensity),ui.dfgLUT!==void 0&&(ui.dfgLUT.value=lM()),vs){if(le.setValue(F,"toneMappingExposure",A.toneMappingExposure),It.needsLights&&wo(ui,$s),St&&G.fog===!0&&ht.refreshFogUniforms(ui,St),ht.refreshMaterialUniforms(ui,G,mt,bt,T.state.transmissionRenderTarget[E.id]),It.needsLights&&It.numLightProbeGrids>0){let Ie=v,oi=0;for(let Jn of T.state.lightProbeGridArray)Jn.texture!==null&&(Ie.textures[oi]=Jn.texture,Ie.min[oi]=Jn.boundingBox.min,Ie.max[oi]=Jn.boundingBox.max,Ie.resolution[oi]=Jn.resolution,oi++);for(let Jn in Ie)Ie[Jn].length=oi;ui.probesSH.value=Ie.textures,ui.probesMin.value=Ie.min,ui.probesMax.value=Ie.max,ui.probesResolution.value=Ie.resolution}to.upload(F,ti(It),ui,Bt)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(to.upload(F,ti(It),ui,Bt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&le.setValue(F,"center",q.center),le.setValue(F,"modelViewMatrix",q.modelViewMatrix),le.setValue(F,"normalMatrix",q.normalMatrix),le.setValue(F,"modelMatrix",q.matrixWorld),G.uniformsGroups!==void 0){let Ie=G.uniformsGroups;for(let oi=0,Jn=Ie.length;oi<Jn;oi++){let Rd=Ie[oi];at.update(Rd,xi),at.bind(Rd,xi)}}return xi}function wo(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Ka(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(E,U,Z){let G=Dt.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Dt.get(E.texture).__webglTexture=U,Dt.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let Z=Dt.get(E);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,Z=0){Q=E,V=U,O=Z;let G=null,q=!1,St=!1;if(E){let yt=Dt.get(E);if(yt.__useDefaultFramebuffer!==void 0){ut.bindFramebuffer(F.FRAMEBUFFER,yt.__webglFramebuffer),$.copy(E.viewport),xt.copy(E.scissor),Et=E.scissorTest,ut.viewport($),ut.scissor(xt),ut.setScissorTest(Et),W=-1;return}else if(yt.__webglFramebuffer===void 0)Bt.setupRenderTarget(E);else if(yt.__hasExternalTextures)Bt.rebindTextures(E,Dt.get(E.texture).__webglTexture,Dt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Xt=E.depthTexture;if(yt.__boundDepthTexture!==Xt){if(Xt!==null&&Dt.has(Xt)&&(E.width!==Xt.image.width||E.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(E)}}let wt=E.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(St=!0);let Ut=Dt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?G=Ut[U][Z]:G=Ut[U],q=!0):E.samples>0&&Bt.useMultisampledRTT(E)===!1?G=Dt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ut)?G=Ut[Z]:G=Ut,$.copy(E.viewport),xt.copy(E.scissor),Et=E.scissorTest}else $.copy(At).multiplyScalar(mt).floor(),xt.copy(Ht).multiplyScalar(mt).floor(),Et=Lt;if(Z!==0&&(G=k),ut.bindFramebuffer(F.FRAMEBUFFER,G)&&ut.drawBuffers(E,G),ut.viewport($),ut.scissor(xt),ut.setScissorTest(Et),q){let yt=Dt.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,Z)}else if(St){let yt=U;for(let wt=0;wt<E.textures.length;wt++){let Ut=Dt.get(E.textures[wt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+wt,Ut.__webglTexture,Z,yt)}}else if(E!==null&&Z!==0){let yt=Dt.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,yt.__webglTexture,Z)}W=-1};function xs(E){let U=Dt.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=Vt.textureFormatReadable(E.format),U.__typeReadable=Vt.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,Z,G,q,St,Rt,yt=0){if(!(E&&E.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(wt=wt[Rt],Array.isArray(wt)&&(wt=wt[0])),wt){ut.bindFramebuffer(F.FRAMEBUFFER,wt);try{let Ut=E.textures[yt],Xt=Ut.format,te=Ut.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt);let Pt=xs(Ut);if(Pt.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&Z>=0&&Z<=E.height-q&&F.readPixels(U,Z,G,q,lt.convert(Xt),lt.convert(te),St)}finally{let Ut=Q!==null?Dt.get(Q).__webglFramebuffer:null;ut.bindFramebuffer(F.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(E,U,Z,G,q,St,Rt,yt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(wt=wt[Rt],Array.isArray(wt)&&(wt=wt[0])),wt)if(U>=0&&U<=E.width-G&&Z>=0&&Z<=E.height-q){ut.bindFramebuffer(F.FRAMEBUFFER,wt);let Ut=E.textures[yt],Xt=Ut.format,te=Ut.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt);let Pt=xs(Ut);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.bufferData(F.PIXEL_PACK_BUFFER,St.byteLength,F.STREAM_READ),F.readPixels(U,Z,G,q,lt.convert(Xt),lt.convert(te),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ze=Q!==null?Dt.get(Q).__webglFramebuffer:null;ut.bindFramebuffer(F.FRAMEBUFFER,Ze);let Te=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Fp(F,Te,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,St),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ee),F.deleteSync(Te),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,Z=0){let G=Math.pow(2,-Z),q=Math.floor(E.image.width*G),St=Math.floor(E.image.height*G),Rt=U!==null?U.x:0,yt=U!==null?U.y:0;Bt.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,Rt,yt,q,St),ut.unbindTexture()},this.copyTextureToTexture=function(E,U,Z=null,G=null,q=0,St=0){let Rt,yt,wt,Ut,Xt,te,Pt,ee,Ze,Te=E.isCompressedTexture?E.mipmaps[St]:E.image;if(Z!==null)Rt=Z.max.x-Z.min.x,yt=Z.max.y-Z.min.y,wt=Z.isBox3?Z.max.z-Z.min.z:1,Ut=Z.min.x,Xt=Z.min.y,te=Z.isBox3?Z.min.z:0;else{let le=Math.pow(2,-q);Rt=Math.floor(Te.width*le),yt=Math.floor(Te.height*le),E.isDataArrayTexture?wt=Te.depth:E.isData3DTexture?wt=Math.floor(Te.depth*le):wt=1,Ut=0,Xt=0,te=0}G!==null?(Pt=G.x,ee=G.y,Ze=G.z):(Pt=0,ee=0,Ze=0);let Me=lt.convert(U.format),_i=lt.convert(U.type),It;U.isData3DTexture?(Bt.setTexture3D(U,0),It=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Bt.setTexture2DArray(U,0),It=F.TEXTURE_2D_ARRAY):(Bt.setTexture2D(U,0),It=F.TEXTURE_2D),ut.activeTexture(F.TEXTURE0),ut.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),ut.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ut.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Ri=ut.getParameter(F.UNPACK_ROW_LENGTH),fe=ut.getParameter(F.UNPACK_IMAGE_HEIGHT),Js=ut.getParameter(F.UNPACK_SKIP_PIXELS),xi=ut.getParameter(F.UNPACK_SKIP_ROWS),Qa=ut.getParameter(F.UNPACK_SKIP_IMAGES);ut.pixelStorei(F.UNPACK_ROW_LENGTH,Te.width),ut.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Te.height),ut.pixelStorei(F.UNPACK_SKIP_PIXELS,Ut),ut.pixelStorei(F.UNPACK_SKIP_ROWS,Xt),ut.pixelStorei(F.UNPACK_SKIP_IMAGES,te);let vs=E.isDataArrayTexture||E.isData3DTexture,$s=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let le=Dt.get(E),ui=Dt.get(U),bn=Dt.get(le.__renderTarget),Ie=Dt.get(ui.__renderTarget);ut.bindFramebuffer(F.READ_FRAMEBUFFER,bn.__webglFramebuffer),ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let oi=0;oi<wt;oi++)vs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dt.get(E).__webglTexture,q,te+oi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dt.get(U).__webglTexture,St,Ze+oi)),F.blitFramebuffer(Ut,Xt,Ut+Rt,Xt+yt,Pt,ee,Pt+Rt,ee+yt,F.DEPTH_BUFFER_BIT,F.NEAREST);ut.bindFramebuffer(F.READ_FRAMEBUFFER,null),ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||Dt.has(E)){let le=Dt.get(E),ui=Dt.get(U);ut.bindFramebuffer(F.READ_FRAMEBUFFER,L),ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let bn=0;bn<wt;bn++)vs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,le.__webglTexture,q,te+bn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,le.__webglTexture,q),$s?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ui.__webglTexture,St,Ze+bn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ui.__webglTexture,St),q!==0?F.blitFramebuffer(Ut,Xt,Ut+Rt,Xt+yt,Pt,ee,Pt+Rt,ee+yt,F.COLOR_BUFFER_BIT,F.NEAREST):$s?F.copyTexSubImage3D(It,St,Pt,ee,Ze+bn,Ut,Xt,Rt,yt):F.copyTexSubImage2D(It,St,Pt,ee,Ut,Xt,Rt,yt);ut.bindFramebuffer(F.READ_FRAMEBUFFER,null),ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else $s?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(It,St,Pt,ee,Ze,Rt,yt,wt,Me,_i,Te.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(It,St,Pt,ee,Ze,Rt,yt,wt,Me,Te.data):F.texSubImage3D(It,St,Pt,ee,Ze,Rt,yt,wt,Me,_i,Te):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,St,Pt,ee,Rt,yt,Me,_i,Te.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,St,Pt,ee,Te.width,Te.height,Me,Te.data):F.texSubImage2D(F.TEXTURE_2D,St,Pt,ee,Rt,yt,Me,_i,Te);ut.pixelStorei(F.UNPACK_ROW_LENGTH,Ri),ut.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fe),ut.pixelStorei(F.UNPACK_SKIP_PIXELS,Js),ut.pixelStorei(F.UNPACK_SKIP_ROWS,xi),ut.pixelStorei(F.UNPACK_SKIP_IMAGES,Qa),St===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(It),ut.unbindTexture()},this.initRenderTarget=function(E){Dt.get(E).__webglFramebuffer===void 0&&Bt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Bt.setTextureCube(E,0):E.isData3DTexture?Bt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Bt.setTexture2DArray(E,0):Bt.setTexture2D(E,0),ut.unbindTexture()},this.resetState=function(){V=0,O=0,Q=null,ut.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};function ls(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Pm(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var qi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ya={duration:.5,overwrite:!1,delay:0},Cf,di,Pe,xn=1e8,xe=1/xn,yf=Math.PI*2,hM=yf/4,uM=0,Im=Math.sqrt,fM=Math.cos,dM=Math.sin,si=function(t){return typeof t=="string"},ke=function(t){return typeof t=="function"},hs=function(t){return typeof t=="number"},fh=function(t){return typeof t>"u"},Xn=function(t){return typeof t=="object"},Xi=function(t){return t!==!1},Rf=function(){return typeof window<"u"},eh=function(t){return ke(t)||si(t)},Lm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bi=Array.isArray,pM=/random\([^)]+\)/g,mM=/,\s*/g,Mm=/(?:-?\.?\d|\.)+/gi,Pf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ur=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,df=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,If=/[+-]=-?[.\d]+/,gM=/[^,'"\[\]\s]+/gi,_M=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ne,Hn,Sf,Lf,on={},rh={},Dm,Nm=function(t){return(rh=no(t,on))&&Ti},dh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Sa=function(t,e){return!e&&console.warn(t)},Um=function(t,e){return t&&(on[t]=e)&&rh&&(rh[t]=e)||on},Ma=function(){return 0},xM={suppressEvents:!0,isStart:!0,kill:!1},ih={suppressEvents:!0,kill:!1},vM={suppressEvents:!0},Df={},Os=[],Mf={},Om,Hi={},pf={},bm=30,nh=[],Nf="",Uf=function(t){var e=t[0],i,n;if(Xn(e)||ke(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=nh.length;n--&&!nh[n].targetTest(e););i=nh[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new zf(t[n],i)))||t.splice(n,1);return t},Fs=function(t){return t._gsap||Uf(vn(t))[0]._gsap},Of=function(t,e,i){return(i=t[e])&&ke(i)?t[e]():fh(i)&&t.getAttribute&&t.getAttribute(e)||i},Di=function(t,e){return(t=t.split(",")).forEach(e)||t},Ve=function(t){return Math.round(t*1e5)/1e5||0},De=function(t){return Math.round(t*1e7)/1e7||0},fr=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},yM=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},oh=function(){var t=Os.length,e=Os.slice(0),i,n;for(Mf={},Os.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Ff=function(t){return!!(t._initted||t._startAt||t.add)},Fm=function(t,e,i,n){Os.length&&!di&&oh(),t.render(e,i,n||!!(di&&e<0&&Ff(t))),Os.length&&!di&&oh()},Bm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(gM).length<2?e:si(t)?t.trim():t},zm=function(t){return t},an=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},SM=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},no=function(t,e){for(var i in e)t[i]=e[i];return t},Tm=function s(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Xn(e[i])?s(t[i]||(t[i]={}),e[i]):e[i]);return t},ah=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},_a=function(t){var e=t.parent||Ne,i=t.keyframes?SM(bi(t.keyframes)):an;if(Xi(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},MM=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},km=function(t,e,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=t[n],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=o,e.parent=e._dp=t,e},ph=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=e._prev,o=e._next;r?r._next=o:t[i]===e&&(t[i]=o),o?o._prev=r:t[n]===e&&(t[n]=r),e._next=e._prev=e.parent=null},Bs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},lr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},bM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},bf=function(t,e,i,n){return t._startAt&&(di?t._startAt.revert(ih):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},TM=function s(t){return!t||t._ts&&s(t.parent)},wm=function(t){return t._repeat?so(t._tTime,t=t.duration()+t._rDelay)*t:0},so=function(t,e){var i=Math.floor(t=De(t/e));return t&&i===t?i-1:i},lh=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},mh=function(t){return t._end=De(t._start+(t._tDur/Math.abs(t._ts||t._rts||xe)||0))},gh=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=De(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),mh(t),i._dirty||lr(i,t)),t},Vm=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=lh(t.rawTime(),e),(!e._dur||Ea(0,e.totalDuration(),i)-e._tTime>xe)&&e.render(i,!0)),lr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-xe}},Wn=function(t,e,i,n){return e.parent&&Bs(e),e._start=De((hs(i)?i:!i&&ch(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:i||t!==Ne?_n(t,i,e):t._time)+e._delay),e._end=De(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),km(t,e,"_first","_last",t._sort?"_start":0),ch(e)||(t._recent=e),n||Vm(t,e),t._ts<0&&gh(t,t._tTime),t},Gm=function(t,e){return(on.ScrollTrigger||dh("scrollTrigger",e))&&on.ScrollTrigger.create(e,t)},Hm=function(t,e,i,n,r){if(Gf(t,e,r),!t._initted)return 1;if(!i&&t._pt&&!di&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Om!==Wi.frame)return Os.push(t),t._lazy=[r,n],1},wM=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},ch=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},EM=function(t,e,i,n){var r=t.ratio,o=e<0||!e&&(!t._start&&wM(t)&&!(!t._initted&&ch(t))||(t._ts<0||t._dp._ts<0)&&!ch(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Ea(0,t._tDur,e),h=so(l,a),t._yoyo&&h&1&&(o=1-o),h!==so(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||di||n||t._zTime===xe||!e&&t._zTime){if(!t._initted&&Hm(t,e,n,i,l))return;for(d=t._zTime,t._zTime=e||(i?xe:0),i||(i=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&bf(t,e,i,!0),t._onUpdate&&!i&&rn(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&rn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Bs(t,1),!i&&!di&&(rn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},AM=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},ro=function(t,e,i,n){var r=t._repeat,o=De(e)||0,a=t._tTime/t._tDur;return a&&!n&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:De(o*(r+1)+t._rDelay*r):o,a>0&&!n&&gh(t,t._tTime=t._tDur*a),t.parent&&mh(t),i||lr(t.parent,t),t},Em=function(t){return t instanceof Mi?lr(t):ro(t,t._dur)},CM={_start:0,endTime:Ma,totalDuration:Ma},_n=function s(t,e,i){var n=t.labels,r=t._recent||CM,o=t.duration()>=xn?r.endTime(!1):t._dur,a,l,c;return si(e)&&(isNaN(e)||e in n)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:i).totalDuration()/100:1)):a<0?(e in n||(n[e]=o),n[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&i&&(l=l/100*(bi(i)?i[0]:i).totalDuration()),a>1?s(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},xa=function(t,e,i){var n=hs(e[1]),r=(n?2:1)+(t<2?0:1),o=e[r],a,l;if(n&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Xi(l.vars.inherit)&&l.parent;o.immediateRender=Xi(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new We(e[0],o,e[r+1])},zs=function(t,e){return t||t===0?e(t):e},Ea=function(t,e,i){return i<t?t:i>e?e:i},pi=function(t,e){return!si(t)||!(e=_M.exec(t))?"":e[1]},RM=function(t,e,i){return zs(i,function(n){return Ea(t,e,n)})},Tf=[].slice,Wm=function(t,e){return t&&Xn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Xn(t[0]))&&!t.nodeType&&t!==Hn},PM=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var r;return si(n)&&!e||Wm(n,1)?(r=i).push.apply(r,vn(n)):i.push(n)})||i},vn=function(t,e,i){return Pe&&!e&&Pe.selector?Pe.selector(t):si(t)&&!i&&(Sf||!oo())?Tf.call((e||Lf).querySelectorAll(t),0):bi(t)?PM(t,i):Wm(t)?Tf.call(t,0):t?[t]:[]},wf=function(t){return t=vn(t)[0]||Sa("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return vn(e,i.querySelectorAll?i:i===t?Sa("Invalid scope")||Lf.createElement("div"):t)}},Xm=function(t){return t.sort(function(){return .5-Math.random()})},qm=function(t){if(ke(t))return t;var e=Xn(t)?t:{each:t},i=cr(e.ease),n=e.from||0,r=parseFloat(e.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=e.axis,h=n,d=n;return si(n)?h=d={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(h=n[0],d=n[1]),function(u,f,p){var x=(p||e).length,m=o[x],g,y,M,v,b,T,_,S,C;if(!m){if(C=e.grid==="auto"?0:(e.grid||[1,xn])[1],!C){for(_=-xn;_<(_=p[C++].getBoundingClientRect().left)&&C<x;);C<x&&C--}for(m=o[x]=[],g=l?Math.min(C,x)*h-.5:n%C,y=C===xn?0:l?x*d/C-.5:n/C|0,_=0,S=xn,T=0;T<x;T++)M=T%C-g,v=y-(T/C|0),m[T]=b=c?Math.abs(c==="y"?v:M):Im(M*M+v*v),b>_&&(_=b),b<S&&(S=b);n==="random"&&Xm(m),m.max=_-S,m.min=S,m.v=x=(parseFloat(e.amount)||parseFloat(e.each)*(C>x?x-1:c?c==="y"?x/C:C:Math.max(C,x/C))||0)*(n==="edges"?-1:1),m.b=x<0?r-x:r,m.u=pi(e.amount||e.each)||0,i=i&&x<0?HM(i):i}return x=(m[u]-m.min)/m.max||0,De(m.b+(i?i(x):x)*m.v)+m.u}},Ef=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=De(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(hs(i)?0:pi(i))}},Ym=function(t,e){var i=bi(t),n,r;return!i&&Xn(t)&&(n=i=t.radius||xn,t.values?(t=vn(t.values),(r=!hs(t[0]))&&(n*=n)):t=Ef(t.increment)),zs(e,i?ke(t)?function(o){return r=t(o),Math.abs(r-o)<=n?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=xn,h=0,d=t.length,u,f;d--;)r?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!n||c<=n?t[h]:o,r||h===o||hs(o)?h:h+pi(o)}:Ef(t))},Zm=function(t,e,i,n){return zs(bi(t)?!e:i===!0?!!(i=0):!n,function(){return bi(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},IM=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(r,o){return o(r)},n)}},LM=function(t,e){return function(i){return t(parseFloat(i))+(e||pi(i))}},DM=function(t,e,i){return $m(t,e,0,1,i)},Jm=function(t,e,i){return zs(i,function(n){return t[~~e(n)]})},NM=function s(t,e,i){var n=e-t;return bi(t)?Jm(t,s(0,t.length),e):zs(i,function(r){return(n+(r-t)%n)%n+t})},UM=function s(t,e,i){var n=e-t,r=n*2;return bi(t)?Jm(t,s(0,t.length-1),e):zs(i,function(o){return o=(r+(o-t)%r)%r||0,t+(o>n?r-o:o)})},ao=function(t){return t.replace(pM,function(e){var i=e.indexOf("[")+1,n=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(mM);return Zm(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},$m=function(t,e,i,n,r){var o=e-t,a=n-i;return zs(r,function(l){return i+((l-t)/o*a||0)})},OM=function s(t,e,i,n){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=si(t),a={},l,c,h,d,u;if(i===!0&&(n=1)&&(i=null),o)t={p:t},e={p:e};else if(bi(t)&&!bi(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(p){p*=d;var x=Math.min(u,~~p);return h[x](p-x)},i=e}else n||(t=no(bi(t)?[]:{},t));if(!h){for(l in e)kf.call(a,t,l,"get",e[l]);r=function(p){return Xf(p,a)||(o?t.p:t)}}}return zs(i,r)},Am=function(t,e,i){var n=t.labels,r=xn,o,a,l;for(o in n)a=n[o]-e,a<0==!!i&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},rn=function(t,e,i){var n=t.vars,r=n[e],o=Pe,a=t._ctx,l,c,h;if(r)return l=n[e+"Params"],c=n.callbackScope||t,i&&Os.length&&oh(),a&&(Pe=a),h=l?r.apply(c,l):r.call(c),Pe=o,h},ma=function(t){return Bs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!di),t.progress()<1&&rn(t,"onInterrupt"),t},io,Km=[],Qm=function(t){if(t)if(t=!t.name&&t.default||t,Rf()||t.headless){var e=t.name,i=ke(t),n=e&&!i&&t.init?function(){this._props=[]}:t,r={init:Ma,render:Xf,add:kf,kill:jM,modifier:QM,rawVars:0},o={targetTest:0,get:0,getSetter:_h,aliases:{},register:0};if(oo(),t!==n){if(Hi[e])return;an(n,an(ah(t,r),o)),no(n.prototype,no(r,ah(t,o))),Hi[n.prop=e]=n,t.targetTest&&(nh.push(n),Df[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Um(e,n),t.register&&t.register(Ti,n,Ni)}else Km.push(t)},be=255,ga={aqua:[0,be,be],lime:[0,be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,be],navy:[0,0,128],white:[be,be,be],olive:[128,128,0],yellow:[be,be,0],orange:[be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[be,0,0],pink:[be,192,203],cyan:[0,be,be],transparent:[be,be,be,0]},mf=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*be+.5|0},jm=function(t,e,i){var n=t?hs(t)?[t>>16,t>>8&be,t&be]:0:ga.black,r,o,a,l,c,h,d,u,f,p;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ga[t])n=ga[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&be,n&be,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&be,t&be]}else if(t.substr(0,3)==="hsl"){if(n=p=t.match(Mm),!e)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,n.length>3&&(n[3]*=1),n[0]=mf(l+1/3,r,o),n[1]=mf(l,r,o),n[2]=mf(l-1/3,r,o);else if(~t.indexOf("="))return n=t.match(Pf),i&&n.length<4&&(n[3]=1),n}else n=t.match(Mm)||ga.transparent;n=n.map(Number)}return e&&!p&&(r=n[0]/be,o=n[1]/be,a=n[2]/be,d=Math.max(r,o,a),u=Math.min(r,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===r?(o-a)/f+(o<a?6:0):d===o?(a-r)/f+2:(r-o)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},tg=function(t){var e=[],i=[],n=-1;return t.split(cs).forEach(function(r){var o=r.match(ur)||[];e.push.apply(e,o),i.push(n+=o.length+1)}),e.c=i,e},Cm=function(t,e,i){var n="",r=(t+n).match(cs),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(u){return(u=jm(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),i&&(h=tg(t),l=i.c,l.join(n)!==h.c.join(n)))for(c=t.replace(cs,"1").split(ur),d=c.length-1;a<d;a++)n+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:i).shift());if(!c)for(c=t.split(cs),d=c.length-1;a<d;a++)n+=c[a]+r[a];return n+c[d]},cs=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ga)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),FM=/hsl[a]?\(/,Bf=function(t){var e=t.join(" "),i;if(cs.lastIndex=0,cs.test(e))return i=FM.test(e),t[1]=Cm(t[1],i),t[0]=Cm(t[0],i,tg(t[1])),!0},ba,Wi=(function(){var s=Date.now,t=500,e=33,i=s(),n=i,r=1e3/240,o=r,a=[],l,c,h,d,u,f,p=function x(m){var g=s()-n,y=m===!0,M,v,b,T;if((g>t||g<0)&&(i+=g-e),n+=g,b=n-i,M=b-o,(M>0||y)&&(T=++d.frame,u=b-d.time*1e3,d.time=b=b/1e3,o+=M+(M>=r?0:r-M),v=1),y||(l=c(x)),v)for(f=0;f<a.length;f++)a[f](b,u,T,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Dm&&(!Sf&&Rf()&&(Hn=Sf=window,Lf=Hn.document||{},on.gsap=Ti,(Hn.gsapVersions||(Hn.gsapVersions=[])).push(Ti.version),Nm(rh||Hn.GreenSockGlobals||!Hn.gsap&&Hn||{}),Km.forEach(Qm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},ba=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ba=0,c=Ma},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){r=1e3/(m||240),o=d.time*1e3+r},add:function(m,g,y){var M=g?function(v,b,T,_){m(v,b,T,_),d.remove(M)}:m;return d.remove(m),a[y?"unshift":"push"](M),oo(),M},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),oo=function(){return!ba&&Wi.wake()},re={},BM=/^[\d.\-M][\d.\-,\s]/,zM=/["']/g,kM=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],r=1,o=i.length,a,l,c;r<o;r++)l=i[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[n]=isNaN(c)?c.replace(zM,"").trim():+c,n=l.substr(a+1).trim();return e},VM=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},GM=function(t){var e=(t+"").split("("),i=re[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[kM(e[1])]:VM(t).split(",").map(Bm)):re._CE&&BM.test(t)?re._CE("",t):i},HM=function(t){return function(e){return 1-t(1-e)}},cr=function(t,e){return t&&(ke(t)?t:re[t]||GM(t))||e},dr=function(t,e,i,n){i===void 0&&(i=function(l){return 1-e(1-l)}),n===void 0&&(n=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:i,easeInOut:n},o;return Di(t,function(a){re[a]=on[a]=r,re[o=a.toLowerCase()]=i;for(var l in r)re[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=re[a+"."+l]=r[l]}),r},eg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},gf=function s(t,e,i){var n=e>=1?e:1,r=(i||(t?.3:.45))/(e<1?e:1),o=r/yf*(Math.asin(1/n)||0),a=function(h){return h===1?1:n*Math.pow(2,-10*h)*dM((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:eg(a);return r=yf/r,l.config=function(c,h){return s(t,c,h)},l},_f=function s(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},n=t==="out"?i:t==="in"?function(r){return 1-i(1-r)}:eg(i);return n.config=function(r){return s(t,r)},n};Di("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;dr(s+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});re.Linear.easeNone=re.none=re.Linear.easeIn;dr("Elastic",gf("in"),gf("out"),gf());(function(s,t){var e=1/t,i=2*e,n=2.5*e,r=function(a){return a<e?s*a*a:a<i?s*Math.pow(a-1.5/t,2)+.75:a<n?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};dr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);dr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});dr("Circ",function(s){return-(Im(1-s*s)-1)});dr("Sine",function(s){return s===1?1:-fM(s*hM)+1});dr("Back",_f("in"),_f("out"),_f());re.SteppedEase=re.steps=on.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),r=e?1:0,o=1-xe;return function(a){return((n*Ea(0,o,a)|0)+r)*i}}};ya.ease=re["quad.out"];Di("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Nf+=s+","+s+"Params,"});var zf=function(t,e){this.id=uM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Of,this.set=e?e.getSetter:_h},Ta=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ro(this,+e.duration,1,1),this.data=e.data,Pe&&(this._ctx=Pe,Pe.data.push(this)),ba||Wi.wake()}var t=s.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,ro(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(oo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(gh(this,i),!r._dp||r.parent||Vm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Wn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===xe||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Fm(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+wm(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+wm(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?so(this._tTime,r)+1:1},t.timeScale=function(i,n){if(!arguments.length)return this._rts===-xe?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?lh(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+i||0,this._ts=this._ps||i===-xe?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(Ea(-Math.abs(this._delay),a,r),n!==!1),mh(this),bM(this)},t.paused=function(i){if(!arguments.length)return this._ps;if(this._ps!==i)if(this._ps=i,i)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{oo(),this._ts=this._rts;var n=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==xe,o;if(r)for(this._tTime-=xe,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=n+xe){r=!1;break}o=o._next}this.totalTime(n,r)}return this},t.startTime=function(i){if(arguments.length){this._start=De(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Wn(n,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Xi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?lh(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=vM);var n=di;return di=i,Ff(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),di=n,this},t.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Em(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Em(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(_n(this,i),Xi(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Xi(n)),this._dur||(this._zTime=-xe),this},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-xe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-xe,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-xe)},t.eventCallback=function(i,n,r){var o=this.vars;return arguments.length>1?(n?(o[i]=n,r&&(o[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},t.then=function(i){var n=this,r=n._prom;return new Promise(function(o){var a=ke(i)?i:zm,l=function(){var h=n.then;n.then=null,r&&r(),ke(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=h),o(a),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},t.kill=function(){ma(this)},s})();an(Ta.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xe,_prom:0,_ps:!1,_rts:1});var Mi=(function(s){Pm(t,s);function t(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=Xi(i.sortChildren),Ne&&Wn(i.parent||Ne,ls(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&Gm(ls(r),i.scrollTrigger),r}var e=t.prototype;return e.to=function(n,r,o){return xa(0,arguments,this),this},e.from=function(n,r,o){return xa(1,arguments,this),this},e.fromTo=function(n,r,o,a){return xa(2,arguments,this),this},e.set=function(n,r,o){return r.duration=0,r.parent=this,_a(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new We(n,r,_n(this,o),1),this},e.call=function(n,r,o){return Wn(this,We.delayedCall(0,n,r),o)},e.staggerTo=function(n,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new We(n,o,_n(this,l)),this},e.staggerFrom=function(n,r,o,a,l,c,h){return o.runBackwards=1,_a(o).immediateRender=Xi(o.immediateRender),this.staggerTo(n,r,o,a,l,c,h)},e.staggerFromTo=function(n,r,o,a,l,c,h,d){return a.startAt=o,_a(a).immediateRender=Xi(a.immediateRender),this.staggerTo(n,r,a,l,c,h,d)},e.render=function(n,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:De(n),d=this._zTime<0!=n<0&&(this._initted||!c),u,f,p,x,m,g,y,M,v,b,T,_;if(this!==Ne&&h>l&&n>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,n+=this._time-a),u=h,v=this._start,M=this._ts,g=!M,d&&(c||(a=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,r,o);if(u=De(h%m),h===l?(x=this._repeat,u=c):(b=De(h/m),x=~~b,x&&x===b&&(u=c,x--),u>c&&(u=c)),b=so(this._tTime,m),!a&&this._tTime&&b!==x&&this._tTime-b*m-this._dur<=0&&(b=x),T&&x&1&&(u=c-u,_=1),x!==b&&!this._lock){var S=T&&b&1,C=S===(T&&x&1);if(x<b&&(S=!S),a=S?0:h%c?c:h,this._lock=1,this.render(a||(_?0:De(x*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&rn(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1,b=x),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,C&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=AM(this,De(a),De(u)),y&&(h-=u-(u=y._start))),this._tTime=h,this._time=u,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&h&&c&&!r&&!b&&(rn(this,"onStart"),this._tTime!==h))return this;if(u>=a&&n>=0)for(f=this._first;f;){if(p=f._next,(f._act||u>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,r,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,o),u!==this._time||!this._ts&&!g){y=0,p&&(h+=this._zTime=-xe);break}}f=p}else{f=this._last;for(var A=n<0?n:u;f;){if(p=f._prev,(f._act||A<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,r,o);if(f.render(f._ts>0?(A-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(A-f._start)*f._ts,r,o||di&&Ff(f)),u!==this._time||!this._ts&&!g){y=0,p&&(h+=this._zTime=A?-xe:xe);break}}f=p}}if(y&&!r&&(this.pause(),y.render(u>=a?0:-xe)._zTime=u>=a?1:-1,this._ts))return this._start=v,mh(this),this.render(n,r,o);this._onUpdate&&!r&&rn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Bs(this,1),!r&&!(n<0&&!a)&&(h||a||!l)&&(rn(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,r){var o=this;if(hs(r)||(r=_n(this,r,n)),!(n instanceof Ta)){if(bi(n))return n.forEach(function(a){return o.add(a,r)}),this;if(si(n))return this.addLabel(n,r);if(ke(n))n=We.delayedCall(0,n);else return this}return this!==n?Wn(this,n,r):this},e.getChildren=function(n,r,o,a){n===void 0&&(n=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-xn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof We?r&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(n){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===n)return r[o]},e.remove=function(n){return si(n)?this.removeLabel(n):ke(n)?this.killTweensOf(n):(n.parent===this&&ph(this,n),n===this._recent&&(this._recent=this._last),lr(this))},e.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=De(Wi.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},e.addLabel=function(n,r){return this.labels[n]=_n(this,r),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,r,o){var a=We.delayedCall(0,r||Ma,o);return a.data="isPause",this._hasPause=1,Wn(this,a,_n(this,n))},e.removePause=function(n){var r=this._first;for(n=_n(this,n);r;)r._start===n&&r.data==="isPause"&&Bs(r),r=r._next},e.killTweensOf=function(n,r,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)Us!==a[l]&&a[l].kill(n,r);return this},e.getTweensOf=function(n,r){for(var o=[],a=vn(n),l=this._first,c=hs(r),h;l;)l instanceof We?yM(l._targets,a)&&(c?(!Us||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(n,r){r=r||{};var o=this,a=_n(o,n),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,p=We.to(o,an({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||xe,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&ro(p,m,0,1).render(p._time,!0,!0),f=1}h&&h.apply(p,d||[])}},r));return u?p.render(0):p},e.tweenFromTo=function(n,r,o){return this.tweenTo(r,an({startAt:{time:_n(this,n)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),Am(this,_n(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),Am(this,_n(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+xe)},e.shiftChildren=function(n,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(n=De(n);a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=n);return lr(this)},e.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),lr(this)},e.totalDuration=function(n){var r=0,o=this,a=o._last,l=xn,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Wn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=De(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;ro(o,o===Ne&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(n){if(Ne._ts&&(Fm(Ne,lh(n,Ne)),Om=Wi.frame),Wi.frame>=bm){bm+=qi.autoSleep||120;var r=Ne._first;if((!r||!r._ts)&&qi.autoSleep&&Wi._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Wi.sleep()}}},t})(Ta);an(Mi.prototype,{_lock:0,_hasPause:0,_forcing:0});var WM=function(t,e,i,n,r,o,a){var l=new Ni(this._pt,t,e,0,1,Wf,null,r),c=0,h=0,d,u,f,p,x,m,g,y;for(l.b=i,l.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=ao(n)),o&&(y=[i,n],o(y,t,e),i=y[0],n=y[1]),u=i.match(df)||[];d=df.exec(n);)p=d[0],x=n.substring(c,d.index),f?f=(f+1)%5:x.substr(-5)==="rgba("&&(f=1),p!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:x||h===1?x:",",s:m,c:p.charAt(1)==="="?fr(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=df.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(If.test(n)||g)&&(l.e=0),this._pt=l,l},kf=function(t,e,i,n,r,o,a,l,c,h){ke(n)&&(n=n(r||0,t,o));var d=t[e],u=i!=="get"?i:ke(d)?c?t[e.indexOf("set")||!ke(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=ke(d)?c?JM:ng:Hf,p;if(si(n)&&(~n.indexOf("random(")&&(n=ao(n)),n.charAt(1)==="="&&(p=fr(u,n)+(pi(u)||0),(p||p===0)&&(n=p))),!h||u!==n||Af)return!isNaN(u*n)&&n!==""?(p=new Ni(this._pt,t,e,+u||0,n-(u||0),typeof d=="boolean"?KM:sg,0,f),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!d&&!(e in t)&&dh(e,n),WM.call(this,t,e,u,n,f,l||qi.stringFilter,c))},XM=function(t,e,i,n,r){if(ke(t)&&(t=va(t,r,e,i,n)),!Xn(t)||t.style&&t.nodeType||bi(t)||Lm(t))return si(t)?va(t,r,e,i,n):t;var o={},a;for(a in t)o[a]=va(t[a],r,e,i,n);return o},Vf=function(t,e,i,n,r,o){var a,l,c,h;if(Hi[t]&&(a=new Hi[t]).init(r,a.rawVars?e[t]:XM(e[t],n,r,o,i),i,n,o)!==!1&&(i._pt=l=new Ni(i._pt,r,t,0,1,a.render,a,0,a.priority),i!==io))for(c=i._ptLookup[i._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Us,Af,Gf=function s(t,e,i){var n=t.vars,r=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,d=n.yoyoEase,u=n.keyframes,f=n.autoRevert,p=t._dur,x=t._startAt,m=t._targets,g=t.parent,y=g&&g.data==="nested"?g.vars.targets:m,M=t._overwrite==="auto"&&!Cf,v=t.timeline,b=n.easeReverse||d,T,_,S,C,A,N,I,k,L,z,V,O,Q;if(v&&(!u||!r)&&(r="none"),t._ease=cr(r,ya.ease),t._rEase=b&&(cr(b)||t._ease),t._from=!v&&!!n.runBackwards,t._from&&(t.ratio=1),!v||u&&!n.stagger){if(k=m[0]?Fs(m[0]).harness:0,O=k&&n[k.prop],T=ah(n,Df),x&&(x._zTime<0&&x.progress(1),e<0&&h&&a&&!f?x.render(-1,!0):x.revert(h&&p?ih:xM),x._lazy=0),o){if(Bs(t._startAt=We.set(m,an({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!x&&Xi(l),startAt:null,delay:0,onUpdate:c&&function(){return rn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(di||!a&&!f)&&t._startAt.revert(ih),a&&p&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(h&&p&&!x){if(e&&(a=!1),S=an({overwrite:!1,data:"isFromStart",lazy:a&&!x&&Xi(l),immediateRender:a,stagger:0,parent:g},T),O&&(S[k.prop]=O),Bs(t._startAt=We.set(m,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(di?t._startAt.revert(ih):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,xe,xe);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Xi(l)||l&&!p,_=0;_<m.length;_++){if(A=m[_],I=A._gsap||Uf(m)[_]._gsap,t._ptLookup[_]=z={},Mf[I.id]&&Os.length&&oh(),V=y===m?_:y.indexOf(A),k&&(L=new k).init(A,O||T,t,V,y)!==!1&&(t._pt=C=new Ni(t._pt,A,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(W){z[W]=C}),L.priority&&(N=1)),!k||O)for(S in T)Hi[S]&&(L=Vf(S,T,t,V,A,y))?L.priority&&(N=1):z[S]=C=kf.call(t,A,S,"get",T[S],V,y,0,n.stringFilter);t._op&&t._op[_]&&t.kill(A,t._op[_]),M&&t._pt&&(Us=t,Ne.killTweensOf(A,z,t.globalTime(e)),Q=!t.parent,Us=0),t._pt&&l&&(Mf[I.id]=1)}N&&qf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Q,u&&e<=0&&v.render(xn,!0,!0)},qM=function(t,e,i,n,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Af=1,t.vars[e]="+=0",Gf(t,a),Af=0,l?Sa(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(n||n===0)&&!r?n:h.s+(n||0)+o*h.c,h.c=i-h.s,d.e&&(d.e=Ve(i)+pi(d.e)),d.b&&(d.b=h.s+pi(d.b))},YM=function(t,e){var i=t[0]?Fs(t[0]).harness:0,n=i&&i.aliases,r,o,a,l;if(!n)return e;r=no({},e);for(o in n)if(o in r)for(l=n[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},ZM=function(t,e,i,n){var r=e.ease||n||"power1.inOut",o,a;if(bi(e))a=i[t]||(i[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},va=function(t,e,i,n,r){return ke(t)?t.call(e,i,n,r):si(t)&&~t.indexOf("random(")?ao(t):t},hh=Nf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ig={};Di(hh+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return ig[s]=1});hh=hh.split(",");var We=(function(s){Pm(t,s);function t(i,n,r,o){var a;typeof n=="number"&&(r.duration=n,n=r,r=null),a=s.call(this,o?n:_a(n))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,p=l.keyframes,x=l.defaults,m=l.scrollTrigger,g=n.parent||Ne,y=(bi(i)||Lm(i)?hs(i[0]):"length"in n)?[i]:vn(i),M,v,b,T,_,S,C,A;if(a._targets=y.length?Uf(y):Sa("GSAP target "+i+" not found. https://gsap.com",!qi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||u||eh(c)||eh(h)){n=a.vars;var N=n.easeReverse||n.yoyoEase;if(M=a.timeline=new Mi({data:"nested",defaults:x||{},targets:g&&g.data==="nested"?g.vars.targets:y}),M.kill(),M.parent=M._dp=ls(a),M._start=0,u||eh(c)||eh(h)){if(T=y.length,C=u&&qm(u),Xn(u))for(_ in u)~hh.indexOf(_)&&(A||(A={}),A[_]=u[_]);for(v=0;v<T;v++)b=ah(n,ig),b.stagger=0,N&&(b.easeReverse=N),A&&no(b,A),S=y[v],b.duration=+va(c,ls(a),v,S,y),b.delay=(+va(h,ls(a),v,S,y)||0)-a._delay,!u&&T===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),M.to(S,b,C?C(v,S,y):0),M._ease=re.none;M.duration()?c=h=0:a.timeline=0}else if(p){_a(an(M.vars.defaults,{ease:"none"})),M._ease=cr(p.ease||n.ease||"none");var I=0,k,L,z;if(bi(p))p.forEach(function(V){return M.to(y,V,">")}),M.duration();else{b={};for(_ in p)_==="ease"||_==="easeEach"||ZM(_,p[_],b,p.easeEach);for(_ in b)for(k=b[_].sort(function(V,O){return V.t-O.t}),I=0,v=0;v<k.length;v++)L=k[v],z={ease:L.e,duration:(L.t-(v?k[v-1].t:0))/100*c},z[_]=L.v,M.to(y,z,I),I+=z.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return f===!0&&!Cf&&(Us=ls(a),Ne.killTweensOf(y),Us=0),Wn(g,ls(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(d||!c&&!p&&a._start===De(g._time)&&Xi(d)&&TM(ls(a))&&g.data!=="nested")&&(a._tTime=-xe,a.render(Math.max(0,-h)||0)),m&&Gm(ls(a),m),a}var e=t.prototype;return e.render=function(n,r,o){var a=this._time,l=this._tDur,c=this._dur,h=n<0,d=n>l-xe&&!h?l:n<xe?0:n,u,f,p,x,m,g,y,M;if(!c)EM(this,n,r,o);else if(d!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,M=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(x*100+n,r,o);if(u=De(d%x),d===l?(p=this._repeat,u=c):(m=De(d/x),p=~~m,p&&p===m?(u=c,p--):u>c&&(u=c)),g=this._yoyo&&p&1,g&&(u=c-u),m=so(this._tTime,x),u===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==x&&this._initted&&(this._lock=o=1,this.render(De(x*p),!0).invalidate()._lock=0)}if(!this._initted){if(Hm(this,h?n:u,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(n,r,o)}if(this._rEase){var v=u<a;if(v!==this._inv){var b=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(v?-1:1)/b:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(u/c);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!m&&(rn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;M&&M.render(n<0?n:M._dur*M._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(h&&bf(this,n,r,o),rn(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&rn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&bf(this,n,!0,!0),(n||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Bs(this,1),!r&&!(h&&!a)&&(d||a||g)&&(rn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},e.resetTo=function(n,r,o,a,l){ba||Wi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Gf(this,c),h=this._ease(c/this._dur),qM(this,n,r,o,a,h,c,l)?this.resetTo(n,r,o,a,1):(gh(this,0),this.parent||km(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ma(this):this.scrollTrigger&&this.scrollTrigger.kill(!!di),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Us&&Us.vars.overwrite!==!0)._first||ma(this),this.parent&&o!==this.timeline.totalDuration()&&ro(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?vn(n):a,c=this._ptLookup,h=this._pt,d,u,f,p,x,m,g;if((!r||r==="all")&&MM(a,l))return r==="all"&&(this._pt=0),ma(this);for(d=this._op=this._op||[],r!=="all"&&(si(r)&&(x={},Di(r,function(y){return x[y]=1}),r=x),r=YM(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],r==="all"?(d[g]=r,p=u,f={}):(f=d[g]=d[g]||{},p=r);for(x in p)m=u&&u[x],m&&((!("kill"in m.d)||m.d.kill(x)===!0)&&ph(this,m,"_pt"),delete u[x]),f!=="all"&&(f[x]=1)}return this._initted&&!this._pt&&h&&ma(this),this},t.to=function(n,r){return new t(n,r,arguments[2])},t.from=function(n,r){return xa(1,arguments)},t.delayedCall=function(n,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(n,r,o){return xa(2,arguments)},t.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(n,r)},t.killTweensOf=function(n,r,o){return Ne.killTweensOf(n,r,o)},t})(Ta);an(We.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Di("staggerTo,staggerFrom,staggerFromTo",function(s){We[s]=function(){var t=new Mi,e=Tf.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Hf=function(t,e,i){return t[e]=i},ng=function(t,e,i){return t[e](i)},JM=function(t,e,i,n){return t[e](n.fp,i)},$M=function(t,e,i){return t.setAttribute(e,i)},_h=function(t,e){return ke(t[e])?ng:fh(t[e])&&t.setAttribute?$M:Hf},sg=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},KM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Wf=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},Xf=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},QM=function(t,e,i,n){for(var r=this._pt,o;r;)o=r._next,r.p===n&&r.modifier(t,e,i),r=o},jM=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?ph(this,e,"_pt"):e.dep||(i=1),e=n;return!i},tb=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},qf=function(t){for(var e=t._pt,i,n,r,o;e;){for(i=e._next,n=r;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:o)?e._prev._next=e:r=e,(e._next=n)?n._prev=e:o=e,e=i}t._pt=r},Ni=(function(){function s(e,i,n,r,o,a,l,c,h){this.t=i,this.s=r,this.c=o,this.p=n,this.r=a||sg,this.d=l||this,this.set=c||Hf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=tb,this.m=i,this.mt=r,this.tween=n},s})();Di(Nf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Df[s]=1});on.TweenMax=on.TweenLite=We;on.TimelineLite=on.TimelineMax=Mi;Ne=new Mi({sortChildren:!1,defaults:ya,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});qi.stringFilter=Bf;var hr=[],sh={},eb=[],Rm=0,ib=0,xf=function(t){return(sh[t]||eb).map(function(e){return e()})},wa=function(){var t=Date.now(),e=[];t-Rm>2&&(xf("matchMediaInit"),hr.forEach(function(i){var n=i.queries,r=i.conditions,o,a,l,c;for(a in n)o=Hn.matchMedia(n[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(i.revert(),l&&e.push(i))}),xf("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Rm=t,xf("matchMedia"))},rg=(function(){function s(e,i){this.selector=i&&wf(i),this.data=[],this._r=[],this.isReverted=!1,this.id=ib++,e&&this.add(e)}var t=s.prototype;return t.add=function(i,n,r){ke(i)&&(r=n,n=i,i=ke);var o=this,a=function(){var c=Pe,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=wf(r)),Pe=o,d=n.apply(o,arguments),ke(d)&&o._r.push(d),Pe=c,o.selector=h,o.isReverted=!1,d};return o.last=a,i===ke?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var n=Pe;Pe=null,i(this),Pe=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof We&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var r=this;if(i?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof Mi?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof We)&&c.revert&&c.revert(i);r._r.forEach(function(h){return h(i,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n){for(var o=hr.length;o--;)hr[o].id===this.id&&hr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(wa):a.removeEventListener("change",wa)}),this._mqs=null}},t.revert=function(i){this.kill(i||{})},s})(),nb=(function(){function s(e){this.contexts=[],this.scope=e,Pe&&Pe.data.push(this)}var t=s.prototype;return t.add=function(i,n,r){Xn(i)||(i={matches:i});var o=new rg(0,r||this.scope),a=o.conditions={},l,c,h;Pe&&!o.selector&&(o.selector=Pe.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?h=1:(l=Hn.matchMedia(i[c]),l&&(hr.indexOf(o)<0&&hr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(wa):l.addEventListener("change",wa),(o._mqs||(o._mqs=[])).push(l)));return h&&n(o,function(d){return o.add(null,d)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s})(),uh={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return Qm(n)})},timeline:function(t){return new Mi(t)},getTweensOf:function(t,e){return Ne.getTweensOf(t,e)},getProperty:function(t,e,i,n){si(t)&&(t=vn(t)[0]);var r=Fs(t||{}).get,o=i?zm:Bm;return i==="native"&&(i=""),t&&(e?o((Hi[e]&&Hi[e].get||r)(t,e,i,n)):function(a,l,c){return o((Hi[a]&&Hi[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,i){if(t=vn(t),t.length>1){var n=t.map(function(h){return Ti.quickSetter(h,e,i)}),r=n.length;return function(h){for(var d=r;d--;)n[d](h)}}t=t[0]||{};var o=Hi[e],a=Fs(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;io._pt=0,d.init(t,i?h+i:h,io,0,[t]),d.render(1,d),io._pt&&Xf(1,io)}:a.set(t,l);return o?c:function(h){return c(t,l,i?h+i:h,a,1)}},quickTo:function(t,e,i){var n,r=Ti.to(t,an((n={},n[e]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Ne.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=cr(t.ease,ya.ease)),Tm(ya,t||{})},config:function(t){return Tm(qi,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,r=t.defaults,o=t.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!Hi[a]&&!on[a]&&Sa(e+" effect requires "+a+" plugin.")}),pf[e]=function(a,l,c){return i(vn(a),an(l||{},r),c)},o&&(Mi.prototype[e]=function(a,l,c){return this.add(pf[e](a,Xn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){re[t]=cr(e)},parseEase:function(t,e){return arguments.length?cr(t,e):re},getById:function(t){return Ne.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Mi(t),n,r;for(i.smoothChildTiming=Xi(t.smoothChildTiming),Ne.remove(i),i._dp=0,i._time=i._tTime=Ne._time,n=Ne._first;n;)r=n._next,(e||!(!n._dur&&n instanceof We&&n.vars.onComplete===n._targets[0]))&&Wn(i,n,n._start-n._delay),n=r;return Wn(Ne,i,0),i},context:function(t,e){return t?new rg(t,e):Pe},matchMedia:function(t){return new nb(t)},matchMediaRefresh:function(){return hr.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||wa()},addEventListener:function(t,e){var i=sh[t]||(sh[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=sh[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:NM,wrapYoyo:UM,distribute:qm,random:Zm,snap:Ym,normalize:DM,getUnit:pi,clamp:RM,splitColor:jm,toArray:vn,selector:wf,mapRange:$m,pipe:IM,unitize:LM,interpolate:OM,shuffle:Xm},install:Nm,effects:pf,ticker:Wi,updateRoot:Mi.updateRoot,plugins:Hi,globalTimeline:Ne,core:{PropTween:Ni,globals:Um,Tween:We,Timeline:Mi,Animation:Ta,getCache:Fs,_removeLinkedListItem:ph,reverting:function(){return di},context:function(t){return t&&Pe&&(Pe.data.push(t),t._ctx=Pe),Pe},suppressOverwrites:function(t){return Cf=t}}};Di("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return uh[s]=We[s]});Wi.add(Mi.updateRoot);io=uh.to({},{duration:0});var sb=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},rb=function(t,e){var i=t._targets,n,r,o;for(n in e)for(r=i.length;r--;)o=t._ptLookup[r][n],o&&(o=o.d)&&(o._pt&&(o=sb(o,n)),o&&o.modifier&&o.modifier(e[n],t,i[r],n))},vf=function(t,e){return{name:t,headless:1,rawVars:1,init:function(n,r,o){o._onInit=function(a){var l,c;if(si(r)&&(l={},Di(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}rb(a,r)}}}},Ti=uh.registerPlugin({name:"attr",init:function(t,e,i,n,r){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],n,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)di?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},vf("roundProps",Ef),vf("modifiers"),vf("snap",Ym))||uh;We.version=Mi.version=Ti.version="3.15.1";Dm=1;Rf()&&oo();var ob=re.Power0,ab=re.Power1,lb=re.Power2,cb=re.Power3,hb=re.Power4,ub=re.Linear,fb=re.Quad,db=re.Cubic,pb=re.Quart,mb=re.Quint,gb=re.Strong,_b=re.Elastic,xb=re.Back,vb=re.SteppedEase,yb=re.Bounce,Sb=re.Sine,Mb=re.Expo,bb=re.Circ;var og,ks,co,Qf,_r,Tb,ag,jf,wb=function(){return typeof window<"u"},fs={},gr=180/Math.PI,ho=Math.PI/180,lo=Math.atan2,lg=1e8,td=/([A-Z])/g,Eb=/(left|right|width|margin|padding|x)/i,Ab=/[\s,\(]\S/,qn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Cb=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Rb=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Pb=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ib=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},gg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},_g=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Lb=function(t,e,i){return t.style[e]=i},Db=function(t,e,i){return t.style.setProperty(e,i)},Nb=function(t,e,i){return t._gsap[e]=i},Ub=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Ob=function(t,e,i,n,r){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(r,o)},Fb=function(t,e,i,n,r){var o=t._gsap;o[e]=i,o.renderTransform(r,o)},Ue="transform",Yi=Ue+"Origin",Bb=function s(t,e){var i=this,n=this.target,r=n.style,o=n._gsap;if(t in fs&&r){if(this.tfm=this.tfm||{},t!=="transform")t=qn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=us(n,a)}):this.tfm[t]=o.x?o[t]:us(n,t),t===Yi&&(this.tfm.zOrigin=o.zOrigin);else return qn.transform.split(",").forEach(function(a){return s.call(i,a,e)});if(this.props.indexOf(Ue)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Yi,e,"")),t=Ue}(r||e)&&this.props.push(t,e,r[t])},xg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},zb=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?i[t[r]]=t[r+2]:i.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(td,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=jf(),(!r||!r.isStart)&&!i[Ue]&&(xg(i),n.zOrigin&&i[Yi]&&(i[Yi]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},vg=function(t,e){var i={target:t,props:[],revert:zb,save:Bb};return t._gsap||Ti.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(n){return i.save(n)}),i},yg,Jf=function(t,e){var i=ks.createElementNS?ks.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ks.createElement(t);return i&&i.style?i:ks.createElement(t)},ln=function s(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(td,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&s(t,uo(e)||e,1)||""},cg="O,Moz,ms,Ms,Webkit".split(","),uo=function(t,e,i){var n=e||_r,r=n.style,o=5;if(t in r&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(cg[o]+t in r););return o<0?null:(o===3?"ms":o>=0?cg[o]:"")+t},$f=function(){wb()&&window.document&&(og=window,ks=og.document,co=ks.documentElement,_r=Jf("div")||{style:{}},Tb=Jf("div"),Ue=uo(Ue),Yi=Ue+"Origin",_r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yg=!!uo("perspective"),jf=Ti.core.reverting,Qf=1)},hg=function(t){var e=t.ownerSVGElement,i=Jf("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0),r;n.style.display="block",i.appendChild(n),co.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),co.removeChild(i),r},ug=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Sg=function(t){var e,i;try{e=t.getBBox()}catch{e=hg(t),i=1}return e&&(e.width||e.height)||i||(e=hg(t)),e&&!e.width&&!e.x&&!e.y?{x:+ug(t,["x","cx","x1"])||0,y:+ug(t,["y","cy","y1"])||0,width:0,height:0}:e},Mg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Sg(t))},Gs=function(t,e){if(e){var i=t.style,n;e in fs&&e!==Yi&&(e=Ue),i.removeProperty?(n=e.substr(0,2),(n==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(n==="--"?e:e.replace(td,"-$1").toLowerCase())):i.removeAttribute(e)}},Vs=function(t,e,i,n,r,o){var a=new Ni(t._pt,e,i,0,1,o?_g:gg);return t._pt=a,a.b=n,a.e=r,t._props.push(i),a},fg={deg:1,rad:1,turn:1},kb={grid:1,flex:1},Hs=function s(t,e,i,n){var r=parseFloat(i)||0,o=(i+"").trim().substr((r+"").length)||"px",a=_r.style,l=Eb.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=n==="px",f=n==="%",p,x,m,g;if(n===o||!r||fg[n]||fg[o])return r;if(o!=="px"&&!u&&(r=s(t,e,i,"px")),g=t.getCTM&&Mg(t),(f||o==="%")&&(fs[e]||~e.indexOf("adius")))return p=g?t.getBBox()[l?"width":"height"]:t[h],Ve(f?r/p*d:r/100*p);if(a[l?"width":"height"]=d+(u?o:n),x=n!=="rem"&&~e.indexOf("adius")||n==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(x=(t.ownerSVGElement||{}).parentNode),(!x||x===ks||!x.appendChild)&&(x=ks.body),m=x._gsap,m&&f&&m.width&&l&&m.time===Wi.time&&!m.uncache)return Ve(r/m.width*d);if(f&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=d+n,p=t[h],y?t.style[e]=y:Gs(t,e)}else(f||o==="%")&&!kb[ln(x,"display")]&&(a.position=ln(t,"position")),x===t&&(a.position="static"),x.appendChild(_r),p=_r[h],x.removeChild(_r),a.position="absolute";return l&&f&&(m=Fs(x),m.time=Wi.time,m.width=x[h]),Ve(u?p*r/d:p&&r?d/p*r:0)},us=function(t,e,i,n){var r;return Qf||$f(),e in qn&&e!=="transform"&&(e=qn[e],~e.indexOf(",")&&(e=e.split(",")[0])),fs[e]&&e!=="transform"?(r=Ra(t,n),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:vh(ln(t,Yi))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=xh[e]&&xh[e](t,e,i)||ln(t,e)||Of(t,e)||(e==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Hs(t,e,r,i)+i:r},Vb=function(t,e,i,n){if(!i||i==="none"){var r=uo(e,t,1),o=r&&ln(t,r,1);o&&o!==i?(e=r,i=o):e==="borderColor"&&(i=ln(t,"borderTopColor"))}var a=new Ni(this._pt,t.style,e,0,1,Wf),l=0,c=0,h,d,u,f,p,x,m,g,y,M,v,b;if(a.b=i,a.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=ln(t,n.substring(4,n.indexOf(")")))),n==="auto"&&(x=t.style[e],t.style[e]=n,n=ln(t,e)||n,x?t.style[e]=x:Gs(t,e)),h=[i,n],Bf(h),i=h[0],n=h[1],u=i.match(ur)||[],b=n.match(ur)||[],b.length){for(;d=ur.exec(n);)m=d[0],y=n.substring(l,d.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),m!==(x=u[c++]||"")&&(f=parseFloat(x)||0,v=x.substr((f+"").length),m.charAt(1)==="="&&(m=fr(f,m)+v),g=parseFloat(m),M=m.substr((g+"").length),l=ur.lastIndex-M.length,M||(M=M||qi.units[e]||v,l===n.length&&(n+=M,a.e+=M)),v!==M&&(f=Hs(t,e,x,M)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:f,c:g-f,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=e==="display"&&n==="none"?_g:gg;return If.test(n)&&(a.e=0),this._pt=a,a},dg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Gb=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=dg[i]||i,e[1]=dg[n]||n,e.join(" ")},Hb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,r=e.u,o=i._gsap,a,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],fs[a]&&(l=1,a=a==="transformOrigin"?Yi:Ue),Gs(i,a);l&&(Gs(i,Ue),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Ra(i,1),o.uncache=1,xg(n)))}},xh={clearProps:function(t,e,i,n,r){if(r.data!=="isFromStart"){var o=t._pt=new Ni(t._pt,e,i,0,0,Hb);return o.u=n,o.pr=-10,o.tween=r,t._props.push(i),1}}},Ca=[1,0,0,1,0,0],bg={},Tg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},pg=function(t){var e=ln(t,Ue);return Tg(e)?Ca:e.substr(7).match(Pf).map(Ve)},ed=function(t,e){var i=t._gsap||Fs(t),n=t.style,r=pg(t),o,a,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ca:r):(r===Ca&&!t.offsetParent&&t!==co&&!i.svg&&(l=n.display,n.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,co.appendChild(t)),r=pg(t),l?n.display=l:Gs(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):co.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Kf=function(t,e,i,n,r,o){var a=t._gsap,l=r||ed(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],p=l[1],x=l[2],m=l[3],g=l[4],y=l[5],M=e.split(" "),v=parseFloat(M[0])||0,b=parseFloat(M[1])||0,T,_,S,C;i?l!==Ca&&(_=f*m-p*x)&&(S=v*(m/_)+b*(-x/_)+(x*y-m*g)/_,C=v*(-p/_)+b*(f/_)-(f*y-p*g)/_,v=S,b=C):(T=Sg(t),v=T.x+(~M[0].indexOf("%")?v/100*T.width:v),b=T.y+(~(M[1]||M[0]).indexOf("%")?b/100*T.height:b)),n||n!==!1&&a.smooth?(g=v-c,y=b-h,a.xOffset=d+(g*f+y*x)-g,a.yOffset=u+(g*p+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=b,a.smooth=!!n,a.origin=e,a.originIsAbsolute=!!i,t.style[Yi]="0px 0px",o&&(Vs(o,a,"xOrigin",c,v),Vs(o,a,"yOrigin",h,b),Vs(o,a,"xOffset",d,a.xOffset),Vs(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+b)},Ra=function(t,e){var i=t._gsap||new zf(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,r=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ln(t,Yi)||"0",h,d,u,f,p,x,m,g,y,M,v,b,T,_,S,C,A,N,I,k,L,z,V,O,Q,W,P,$,xt,Et,Y,ot;return h=d=u=x=m=g=y=M=v=0,f=p=1,i.svg=!!(t.getCTM&&Mg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[Ue]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ue]!=="none"?l[Ue]:"")),n.scale=n.rotate=n.translate="none"),_=ed(t,i.svg),i.svg&&(i.uncache?(Q=t.getBBox(),c=i.xOrigin-Q.x+"px "+(i.yOrigin-Q.y)+"px",O=""):O=!e&&t.getAttribute("data-svg-origin"),Kf(t,O||c,!!O||i.originIsAbsolute,i.smooth!==!1,_)),b=i.xOrigin||0,T=i.yOrigin||0,_!==Ca&&(N=_[0],I=_[1],k=_[2],L=_[3],h=z=_[4],d=V=_[5],_.length===6?(f=Math.sqrt(N*N+I*I),p=Math.sqrt(L*L+k*k),x=N||I?lo(I,N)*gr:0,y=k||L?lo(k,L)*gr+x:0,y&&(p*=Math.abs(Math.cos(y*ho))),i.svg&&(h-=b-(b*N+T*k),d-=T-(b*I+T*L))):(ot=_[6],Et=_[7],P=_[8],$=_[9],xt=_[10],Y=_[11],h=_[12],d=_[13],u=_[14],S=lo(ot,xt),m=S*gr,S&&(C=Math.cos(-S),A=Math.sin(-S),O=z*C+P*A,Q=V*C+$*A,W=ot*C+xt*A,P=z*-A+P*C,$=V*-A+$*C,xt=ot*-A+xt*C,Y=Et*-A+Y*C,z=O,V=Q,ot=W),S=lo(-k,xt),g=S*gr,S&&(C=Math.cos(-S),A=Math.sin(-S),O=N*C-P*A,Q=I*C-$*A,W=k*C-xt*A,Y=L*A+Y*C,N=O,I=Q,k=W),S=lo(I,N),x=S*gr,S&&(C=Math.cos(S),A=Math.sin(S),O=N*C+I*A,Q=z*C+V*A,I=I*C-N*A,V=V*C-z*A,N=O,z=Q),m&&Math.abs(m)+Math.abs(x)>359.9&&(m=x=0,g=180-g),f=Ve(Math.sqrt(N*N+I*I+k*k)),p=Ve(Math.sqrt(V*V+ot*ot)),S=lo(z,V),y=Math.abs(S)>2e-4?S*gr:0,v=Y?1/(Y<0?-Y:Y):0),i.svg&&(O=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Tg(ln(t,Ue)),O&&t.setAttribute("transform",O))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(f*=-1,y+=x<=0?180:-180,x+=x<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),e=e||i.uncache,i.x=h-((i.xPercent=h&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=u+o,i.scaleX=Ve(f),i.scaleY=Ve(p),i.rotation=Ve(x)+a,i.rotationX=Ve(m)+a,i.rotationY=Ve(g)+a,i.skewX=y+a,i.skewY=M+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(n[Yi]=vh(c)),i.xOffset=i.yOffset=0,i.force3D=qi.force3D,i.renderTransform=i.svg?Xb:yg?wg:Wb,i.uncache=0,i},vh=function(t){return(t=t.split(" "))[0]+" "+t[1]},Yf=function(t,e,i){var n=pi(e);return Ve(parseFloat(e)+parseFloat(Hs(t,"x",i+"px",n)))+n},Wb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,wg(t,e)},pr="0deg",Aa="0px",mr=") ",wg=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,h=i.rotationY,d=i.rotationX,u=i.skewX,f=i.skewY,p=i.scaleX,x=i.scaleY,m=i.transformPerspective,g=i.force3D,y=i.target,M=i.zOrigin,v="",b=g==="auto"&&t&&t!==1||g===!0;if(M&&(d!==pr||h!==pr)){var T=parseFloat(h)*ho,_=Math.sin(T),S=Math.cos(T),C;T=parseFloat(d)*ho,C=Math.cos(T),o=Yf(y,o,_*C*-M),a=Yf(y,a,-Math.sin(T)*-M),l=Yf(y,l,S*C*-M+M)}m!==Aa&&(v+="perspective("+m+mr),(n||r)&&(v+="translate("+n+"%, "+r+"%) "),(b||o!==Aa||a!==Aa||l!==Aa)&&(v+=l!==Aa||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+mr),c!==pr&&(v+="rotate("+c+mr),h!==pr&&(v+="rotateY("+h+mr),d!==pr&&(v+="rotateX("+d+mr),(u!==pr||f!==pr)&&(v+="skew("+u+", "+f+mr),(p!==1||x!==1)&&(v+="scale("+p+", "+x+mr),y.style[Ue]=v||"translate(0, 0)"},Xb=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,h=i.skewY,d=i.scaleX,u=i.scaleY,f=i.target,p=i.xOrigin,x=i.yOrigin,m=i.xOffset,g=i.yOffset,y=i.forceCSS,M=parseFloat(o),v=parseFloat(a),b,T,_,S,C;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ho,c*=ho,b=Math.cos(l)*d,T=Math.sin(l)*d,_=Math.sin(l-c)*-u,S=Math.cos(l-c)*u,c&&(h*=ho,C=Math.tan(c-h),C=Math.sqrt(1+C*C),_*=C,S*=C,h&&(C=Math.tan(h),C=Math.sqrt(1+C*C),b*=C,T*=C)),b=Ve(b),T=Ve(T),_=Ve(_),S=Ve(S)):(b=d,S=u,T=_=0),(M&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(M=Hs(f,"x",o,"px"),v=Hs(f,"y",a,"px")),(p||x||m||g)&&(M=Ve(M+p-(p*b+x*_)+m),v=Ve(v+x-(p*T+x*S)+g)),(n||r)&&(C=f.getBBox(),M=Ve(M+n/100*C.width),v=Ve(v+r/100*C.height)),C="matrix("+b+","+T+","+_+","+S+","+M+","+v+")",f.setAttribute("transform",C),y&&(f.style[Ue]=C)},qb=function(t,e,i,n,r){var o=360,a=si(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?gr:1),c=l-n,h=n+c+"deg",d,u;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*lg)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*lg)%o-~~(c/o)*o)),t._pt=u=new Ni(t._pt,e,i,n,c,Cb),u.e=h,u.u="deg",t._props.push(i),u},mg=function(t,e){for(var i in e)t[i]=e[i];return t},Yb=function(t,e,i){var n=mg({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,h,d,u,f,p;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ue]=e,a=Ra(i,1),Gs(i,Ue),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Ue],o[Ue]=e,a=Ra(i,1),o[Ue]=c);for(l in fs)c=n[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=pi(c),p=pi(h),d=f!==p?Hs(i,l,c,p):parseFloat(c),u=parseFloat(h),t._pt=new Ni(t._pt,a,l,d,u-d,Zf),t._pt.u=p||0,t._props.push(l));mg(a,n)};Di("padding,margin,Width,Radius",function(s,t){var e="Top",i="Right",n="Bottom",r="Left",o=(t<3?[e,i,n,r]:[e+r,e+i,n+i,n+r]).map(function(a){return t<2?s+a:"border"+a+s});xh[t>1?"border"+s:s]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(p){return us(a,p,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(p,x){return f[p]=u[x]=u[x]||u[(x-1)/2|0]}),a.init(l,f,d)}});var id={name:"css",register:$f,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,r){var o=this._props,a=t.style,l=i.vars.startAt,c,h,d,u,f,p,x,m,g,y,M,v,b,T,_,S,C;Qf||$f(),this.styles=this.styles||vg(t),S=this.styles.props,this.tween=i;for(x in e)if(x!=="autoRound"&&(h=e[x],!(Hi[x]&&Vf(x,e,i,n,t,r)))){if(f=typeof h,p=xh[x],f==="function"&&(h=h.call(i,n,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=ao(h)),p)p(this,t,x,h,i)&&(_=1);else if(x.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(x)+"").trim(),h+="",cs.lastIndex=0,cs.test(c)||(m=pi(c),g=pi(h),g?m!==g&&(c=Hs(t,x,c,g)+g):m&&(h+=m)),this.add(a,"setProperty",c,h,n,r,0,0,x),o.push(x),S.push(x,0,a[x]);else if(f!=="undefined"){if(l&&x in l?(c=typeof l[x]=="function"?l[x].call(i,n,t,r):l[x],si(c)&&~c.indexOf("random(")&&(c=ao(c)),pi(c+"")||c==="auto"||(c+=qi.units[x]||pi(us(t,x))||""),(c+"").charAt(1)==="="&&(c=us(t,x))):c=us(t,x),u=parseFloat(c),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),d=parseFloat(h),x in qn&&(x==="autoAlpha"&&(u===1&&us(t,"visibility")==="hidden"&&d&&(u=0),S.push("visibility",0,a.visibility),Vs(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),x!=="scale"&&x!=="transform"&&(x=qn[x],~x.indexOf(",")&&(x=x.split(",")[0]))),M=x in fs,M){if(this.styles.save(x),C=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=ln(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=t.style.perspective;t.style.perspective=h,h=ln(t,"perspective"),A?t.style.perspective=A:Gs(t,"perspective")}d=parseFloat(h)}if(v||(b=t._gsap,b.renderTransform&&!e.parseTransform||Ra(t,e.parseTransform),T=e.smoothOrigin!==!1&&b.smooth,v=this._pt=new Ni(this._pt,a,Ue,0,1,b.renderTransform,b,0,-1),v.dep=1),x==="scale")this._pt=new Ni(this._pt,b,"scaleY",b.scaleY,(y?fr(b.scaleY,y+d):d)-b.scaleY||0,Zf),this._pt.u=0,o.push("scaleY",x),x+="X";else if(x==="transformOrigin"){S.push(Yi,0,a[Yi]),h=Gb(h),b.svg?Kf(t,h,0,T,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==b.zOrigin&&Vs(this,b,"zOrigin",b.zOrigin,g),Vs(this,a,x,vh(c),vh(h)));continue}else if(x==="svgOrigin"){Kf(t,h,1,T,0,this);continue}else if(x in bg){qb(this,b,x,u,y?fr(u,y+h):h);continue}else if(x==="smoothOrigin"){Vs(this,b,"smooth",b.smooth,h);continue}else if(x==="force3D"){b[x]=h;continue}else if(x==="transform"){Yb(this,h,t);continue}}else x in a||(x=uo(x)||x);if(M||(d||d===0)&&(u||u===0)&&!Ab.test(h)&&x in a)m=(c+"").substr((u+"").length),d||(d=0),g=pi(h)||(x in qi.units?qi.units[x]:m),m!==g&&(u=Hs(t,x,c,g)),this._pt=new Ni(this._pt,M?b:a,x,u,(y?fr(u,y+d):d)-u,!M&&(g==="px"||x==="zIndex")&&e.autoRound!==!1?Ib:Zf),this._pt.u=g||0,M&&C!==h?(this._pt.b=c,this._pt.e=C,this._pt.r=Pb):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Rb);else if(x in a)Vb.call(this,t,x,c,y?y+h:h);else if(x in t)this.add(t,x,c||t[x],y?y+h:h,n,r);else if(x!=="parseTransform"){dh(x,h);continue}M||(x in a?S.push(x,0,a[x]):typeof t[x]=="function"?S.push(x,2,t[x]()):S.push(x,1,c||t[x])),o.push(x)}}_&&qf(this)},render:function(t,e){if(e.tween._time||!jf())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:us,aliases:qn,getSetter:function(t,e,i){var n=qn[e];return n&&n.indexOf(",")<0&&(e=n),e in fs&&e!==Yi&&(t._gsap.x||us(t,"x"))?i&&ag===i?e==="scale"?Ub:Nb:(ag=i||{})&&(e==="scale"?Ob:Fb):t.style&&!fh(t.style[e])?Lb:~e.indexOf("-")?Db:_h(t,e)},core:{_removeProperty:Gs,_getMatrix:ed}};Ti.utils.checkPrefix=uo;Ti.core.getStyleSaver=vg;(function(s,t,e,i){var n=Di(s+","+t+","+e,function(r){fs[r]=1});Di(t,function(r){qi.units[r]="deg",bg[r]=1}),qn[n[13]]=s+","+t,Di(i,function(r){var o=r.split(":");qn[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Di("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){qi.units[s]="px"});Ti.registerPlugin(id);var Oe=Ti.registerPlugin(id)||Ti,sA=Oe.core.Tween;function Eg(s,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function Zb(s,t,e){return t&&Eg(s.prototype,t),e&&Eg(s,e),s}var mi,Mh,Jb,Zi,Ws,Xs,po,Cg,xr,mo,Rg,ds,Ln,Pg,Ig=function(){return mi||typeof window<"u"&&(mi=window.gsap)&&mi.registerPlugin&&mi},Lg=1,fo=[],Zt=[],Dn=[],Ia=Date.now,nd=function(t,e){return e},$b=function(){var t=mo.core,e=t.bridge||{},i=t._scrollers,n=t._proxies;i.push.apply(i,Zt),n.push.apply(n,Dn),Zt=i,Dn=n,nd=function(o,a){return e[o](a)}},ms=function(t,e){return~Dn.indexOf(t)&&Dn[Dn.indexOf(t)+1][e]},La=function(t){return!!~Rg.indexOf(t)},Oi=function(t,e,i,n,r){return t.addEventListener(e,i,{passive:n!==!1,capture:!!r})},Ui=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},yh="scrollLeft",Sh="scrollTop",sd=function(){return ds&&ds.isPressed||Zt.cache++},bh=function(t,e){var i=function n(r){if(r||r===0){Lg&&Zi.history.scrollRestoration!=="manual"&&(Zi.history.scrollRestoration="manual");var o=ds&&ds.isPressed;r=n.v=Math.round(r)||(ds&&ds.iOS?1:0),t(r),n.cacheID=Zt.cache,o&&nd("ss",r)}else(e||Zt.cache!==n.cacheID||nd("ref"))&&(n.cacheID=Zt.cache,n.v=t());return n.v+n.offset};return i.offset=0,t&&i},wi={s:yh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:bh(function(s){return arguments.length?Zi.scrollTo(s,$e.sc()):Zi.pageXOffset||Ws[yh]||Xs[yh]||po[yh]||0})},$e={s:Sh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:wi,sc:bh(function(s){return arguments.length?Zi.scrollTo(wi.sc(),s):Zi.pageYOffset||Ws[Sh]||Xs[Sh]||po[Sh]||0})},Fi=function(t,e){return(e&&e._ctx&&e._ctx.selector||mi.utils.toArray)(t)[0]||(typeof t=="string"&&mi.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Kb=function(t,e){for(var i=e.length;i--;)if(e[i]===t||e[i].contains(t))return!0;return!1},ps=function(t,e){var i=e.s,n=e.sc;La(t)&&(t=Ws.scrollingElement||Xs);var r=Zt.indexOf(t),o=n===$e.sc?1:2;!~r&&(r=Zt.push(t)-1),Zt[r+o]||Oi(t,"scroll",sd);var a=Zt[r+o],l=a||(Zt[r+o]=bh(ms(t,i),!0)||(La(t)?n:bh(function(c){return arguments.length?t[i]=c:t[i]})));return l.target=t,a||(l.smooth=mi.getProperty(t,"scrollBehavior")==="smooth"),l},Th=function(t,e,i){var n=t,r=t,o=Ia(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,x){var m=Ia();x||m-o>l?(r=n,n=p,a=o,o=m):i?n+=p:n=r+(p-r)/(m-a)*(o-a)},d=function(){r=n=i?0:n,a=o=0},u=function(p){var x=a,m=r,g=Ia();return(p||p===0)&&p!==n&&h(p),o===a||g-a>c?0:(n+(i?m:-m))/((i?g:o)-x)*1e3};return{update:h,reset:d,getVelocity:u}},Pa=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Ag=function(t){var e=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(i)?e:i},Dg=function(){mo=mi.core.globals().ScrollTrigger,mo&&mo.core&&$b()},Ng=function(t){return mi=t||Ig(),!Mh&&mi&&typeof document<"u"&&document.body&&(Zi=window,Ws=document,Xs=Ws.documentElement,po=Ws.body,Rg=[Zi,Ws,Xs,po],Jb=mi.utils.clamp,Pg=mi.core.context||function(){},xr="onpointerenter"in po?"pointer":"mouse",Cg=Ge.isTouch=Zi.matchMedia&&Zi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Zi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ln=Ge.eventTypes=("ontouchstart"in Xs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Xs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Lg=0},500),Mh=1),mo||Dg(),Mh};wi.op=$e;Zt.cache=0;var Ge=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(i){Mh||Ng(mi)||console.warn("Please gsap.registerPlugin(Observer)"),mo||Dg();var n=i.tolerance,r=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,h=i.preventDefault,d=i.onStop,u=i.onStopDelay,f=i.ignore,p=i.wheelSpeed,x=i.event,m=i.onDragStart,g=i.onDragEnd,y=i.onDrag,M=i.onPress,v=i.onRelease,b=i.onRight,T=i.onLeft,_=i.onUp,S=i.onDown,C=i.onChangeX,A=i.onChangeY,N=i.onChange,I=i.onToggleX,k=i.onToggleY,L=i.onHover,z=i.onHoverEnd,V=i.onMove,O=i.ignoreCheck,Q=i.isNormalizer,W=i.onGestureStart,P=i.onGestureEnd,$=i.onWheel,xt=i.onEnable,Et=i.onDisable,Y=i.onClick,ot=i.scrollSpeed,vt=i.capture,bt=i.allowClicks,mt=i.lockAxis,Nt=i.onLockAxis;this.target=a=Fi(a)||Xs,this.vars=i,f&&(f=mi.utils.toArray(f)),n=n||1e-9,r=r||0,p=p||1,ot=ot||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Zi.getComputedStyle(po).lineHeight)||22);var ge,At,Ht,Lt,Ot,ce,oe,J=this,Kt=0,Xe=0,ve=i.passive||!h&&i.passive!==!1,se=ps(a,wi),Fe=ps(a,$e),He=se(),F=Fe(),ue=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ln[0]==="pointerdown",ae=La(a),Vt=a.ownerDocument||Ws,ut=[0,0,0],he=[0,0,0],Dt=0,Bt=function(){return Dt=Ia()},R=function(pt,st){return(J.event=pt)&&f&&Kb(pt.target,f)||st&&ue&&pt.pointerType!=="touch"||O&&O(pt,st)},w=function(){J._vx.reset(),J._vy.reset(),At.pause(),d&&d(J)},H=function(){var pt=J.deltaX=Ag(ut),st=J.deltaY=Ag(he),et=Math.abs(pt)>=n,_t=Math.abs(st)>=n;N&&(et||_t)&&N(J,pt,st,ut,he),et&&(b&&J.deltaX>0&&b(J),T&&J.deltaX<0&&T(J),C&&C(J),I&&J.deltaX<0!=Kt<0&&I(J),Kt=J.deltaX,ut[0]=ut[1]=ut[2]=0),_t&&(S&&J.deltaY>0&&S(J),_&&J.deltaY<0&&_(J),A&&A(J),k&&J.deltaY<0!=Xe<0&&k(J),Xe=J.deltaY,he[0]=he[1]=he[2]=0),(Lt||Ht)&&(V&&V(J),Ht&&(m&&Ht===1&&m(J),y&&y(J),Ht=0),Lt=!1),ce&&!(ce=!1)&&Nt&&Nt(J),Ot&&($(J),Ot=!1),ge=0},rt=function(pt,st,et){ut[et]+=pt,he[et]+=st,J._vx.update(pt),J._vy.update(st),c?ge||(ge=requestAnimationFrame(H)):H()},nt=function(pt,st){mt&&!oe&&(J.axis=oe=Math.abs(pt)>Math.abs(st)?"x":"y",ce=!0),oe!=="y"&&(ut[2]+=pt,J._vx.update(pt,!0)),oe!=="x"&&(he[2]+=st,J._vy.update(st,!0)),c?ge||(ge=requestAnimationFrame(H)):H()},ht=function(pt){if(!R(pt,1)){pt=Pa(pt,h);var st=pt.clientX,et=pt.clientY,_t=st-J.x,it=et-J.y,Tt=J.isDragging;J.x=st,J.y=et,(Tt||(_t||it)&&(Math.abs(J.startX-st)>=r||Math.abs(J.startY-et)>=r))&&(Ht||(Ht=Tt?2:1),Tt||(J.isDragging=!0),nt(_t,it))}},gt=J.onPress=function(at){R(at,1)||at&&at.button||(J.axis=oe=null,At.pause(),J.isPressed=!0,at=Pa(at),Kt=Xe=0,J.startX=J.x=at.clientX,J.startY=J.y=at.clientY,J._vx.reset(),J._vy.reset(),Oi(Q?a:Vt,Ln[1],ht,ve,!0),J.deltaX=J.deltaY=0,M&&M(J))},X=J.onRelease=function(at){if(!R(at,1)){Ui(Q?a:Vt,Ln[1],ht,!0);var pt=!isNaN(J.y-J.startY),st=J.isDragging,et=st&&(Math.abs(J.x-J.startX)>3||Math.abs(J.y-J.startY)>3),_t=Pa(at);!et&&pt&&(J._vx.reset(),J._vy.reset(),h&&bt&&mi.delayedCall(.08,function(){if(Ia()-Dt>300&&!at.defaultPrevented){if(at.target.click)at.target.click();else if(Vt.createEvent){var it=Vt.createEvent("MouseEvents");it.initMouseEvent("click",!0,!0,Zi,1,_t.screenX,_t.screenY,_t.clientX,_t.clientY,!1,!1,!1,!1,0,null),at.target.dispatchEvent(it)}}})),J.isDragging=J.isGesturing=J.isPressed=!1,d&&st&&!Q&&At.restart(!0),Ht&&H(),g&&st&&g(J),v&&v(J,et)}},tt=function(pt){return pt.touches&&pt.touches.length>1&&(J.isGesturing=!0)&&W(pt,J.isDragging)},ct=function(){return(J.isGesturing=!1)||P(J)},D=function(pt){if(!R(pt)){var st=se(),et=Fe();rt((st-He)*ot,(et-F)*ot,1),He=st,F=et,d&&At.restart(!0)}},j=function(pt){if(!R(pt)){pt=Pa(pt,h),$&&(Ot=!0);var st=(pt.deltaMode===1?l:pt.deltaMode===2?Zi.innerHeight:1)*p;rt(pt.deltaX*st,pt.deltaY*st,0),d&&!Q&&At.restart(!0)}},K=function(pt){if(!R(pt)){var st=pt.clientX,et=pt.clientY,_t=st-J.x,it=et-J.y;J.x=st,J.y=et,Lt=!0,d&&At.restart(!0),(_t||it)&&nt(_t,it)}},ft=function(pt){J.event=pt,L(J)},lt=function(pt){J.event=pt,z(J)},dt=function(pt){return R(pt)||Pa(pt,h)&&Y(J)};At=J._dc=mi.delayedCall(u||.25,w).pause(),J.deltaX=J.deltaY=0,J._vx=Th(0,50,!0),J._vy=Th(0,50,!0),J.scrollX=se,J.scrollY=Fe,J.isDragging=J.isGesturing=J.isPressed=!1,Pg(this),J.enable=function(at){return J.isEnabled||(Oi(ae?Vt:a,"scroll",sd),o.indexOf("scroll")>=0&&Oi(ae?Vt:a,"scroll",D,ve,vt),o.indexOf("wheel")>=0&&Oi(a,"wheel",j,ve,vt),(o.indexOf("touch")>=0&&Cg||o.indexOf("pointer")>=0)&&(Oi(a,Ln[0],gt,ve,vt),Oi(Vt,Ln[2],X),Oi(Vt,Ln[3],X),bt&&Oi(a,"click",Bt,!0,!0),Y&&Oi(a,"click",dt),W&&Oi(Vt,"gesturestart",tt),P&&Oi(Vt,"gestureend",ct),L&&Oi(a,xr+"enter",ft),z&&Oi(a,xr+"leave",lt),V&&Oi(a,xr+"move",K)),J.isEnabled=!0,J.isDragging=J.isGesturing=J.isPressed=Lt=Ht=!1,J._vx.reset(),J._vy.reset(),He=se(),F=Fe(),at&&at.type&&gt(at),xt&&xt(J)),J},J.disable=function(){J.isEnabled&&(fo.filter(function(at){return at!==J&&La(at.target)}).length||Ui(ae?Vt:a,"scroll",sd),J.isPressed&&(J._vx.reset(),J._vy.reset(),Ui(Q?a:Vt,Ln[1],ht,!0)),Ui(ae?Vt:a,"scroll",D,vt),Ui(a,"wheel",j,vt),Ui(a,Ln[0],gt,vt),Ui(Vt,Ln[2],X),Ui(Vt,Ln[3],X),Ui(a,"click",Bt,!0),Ui(a,"click",dt),Ui(Vt,"gesturestart",tt),Ui(Vt,"gestureend",ct),Ui(a,xr+"enter",ft),Ui(a,xr+"leave",lt),Ui(a,xr+"move",K),J.isEnabled=J.isPressed=J.isDragging=!1,Et&&Et(J))},J.kill=J.revert=function(){J.disable();var at=fo.indexOf(J);at>=0&&fo.splice(at,1),ds===J&&(ds=0)},fo.push(J),Q&&La(a)&&(ds=J),J.enable(x)},Zb(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Ge.version="3.15.1";Ge.create=function(s){return new Ge(s)};Ge.register=Ng;Ge.getAll=function(){return fo.slice()};Ge.getById=function(s){return fo.filter(function(t){return t.vars.id===s})[0]};Ig()&&mi.registerPlugin(Ge);var Ct,vo,$t,_e,un,me,xd,kh,Xa,za,Na,wh,Ei,Hh,ud,zi,Ug,Og,yo,Qg,rd,jg,Bi,fd,t_,e_,qs,dd,vd,So,yd,Ys,pd,od,Eh=1,Ai=Date.now,ad=Ai(),Mn=0,Ua=0,Fg=function(t,e,i){var n=hn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+e+"Clamp"]=n,n?t.substr(6,t.length-7):t},Bg=function(t,e){return e&&(!hn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Qb=function s(){return Ua&&requestAnimationFrame(s)},zg=function(){return Hh=1},kg=function(){return Hh=0},Yn=function(t){return t},Oa=function(t){return Math.round(t*1e5)/1e5||0},i_=function(){return typeof window<"u"},n_=function(){return Ct||i_()&&(Ct=window.gsap)&&Ct.registerPlugin&&Ct},Tr=function(t){return!!~xd.indexOf(t)},s_=function(t){return(t==="Height"?yd:$t["inner"+t])||un["client"+t]||me["client"+t]},r_=function(t){return ms(t,"getBoundingClientRect")||(Tr(t)?function(){return zh.width=$t.innerWidth,zh.height=yd,zh}:function(){return gs(t)})},jb=function(t,e,i){var n=i.d,r=i.d2,o=i.a;return(o=ms(t,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(e?s_(r):t["client"+r])||0}},tT=function(t,e){return!e||~Dn.indexOf(t)?r_(t):function(){return zh}},Zn=function(t,e){var i=e.s,n=e.d2,r=e.d,o=e.a;return Math.max(0,(i="scroll"+n)&&(o=ms(t,i))?o()-r_(t)()[r]:Tr(t)?(un[i]||me[i])-s_(n):t[i]-t["offset"+n])},Ah=function(t,e){for(var i=0;i<yo.length;i+=3)(!e||~e.indexOf(yo[i+1]))&&t(yo[i],yo[i+1],yo[i+2])},hn=function(t){return typeof t=="string"},Ci=function(t){return typeof t=="function"},Fa=function(t){return typeof t=="number"},vr=function(t){return typeof t=="object"},Da=function(t,e,i){return t&&t.progress(e?0:1)&&i&&t.pause()},go=function(t,e,i){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t,i)}):e(t,i);n&&n.totalTime&&(t.callbackAnimation=n)}},_o=Math.abs,o_="left",a_="top",Sd="right",Md="bottom",Sr="width",Mr="height",ka="Right",Va="Left",Ga="Top",Ha="Bottom",Ke="padding",yn="margin",bo="Width",bd="Height",ri="px",Sn=function(t){return $t.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},eT=function(t){var e=Sn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Vg=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},gs=function(t,e){var i=e&&Sn(t)[ud]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ct.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),n},Vh=function(t,e){var i=e.d2;return t["offset"+i]||t["client"+i]||0},l_=function(t){var e=[],i=t.labels,n=t.duration(),r;for(r in i)e.push(i[r]/n);return e},iT=function(t){return function(e){return Ct.utils.snap(l_(t),e)}},Td=function(t){var e=Ct.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(n,r){return n-r});return i?function(n,r,o){o===void 0&&(o=.001);var a;if(!r)return e(n);if(r>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,r,o){o===void 0&&(o=.001);var a=e(n);return!r||Math.abs(a-n)<o||a-n<0==r<0?a:e(r<0?n-t:n+t)}},nT=function(t){return function(e,i){return Td(l_(t))(e,i.direction)}},Ch=function(t,e,i,n){return i.split(",").forEach(function(r){return t(e,r,n)})},hi=function(t,e,i,n,r){return t.addEventListener(e,i,{passive:!n,capture:!!r})},ci=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},Rh=function(t,e,i){i=i&&i.wheelHandler,i&&(t(e,"wheel",i),t(e,"touchmove",i))},Gg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ph={toggleActions:"play",anticipatePin:0},Gh={top:0,left:0,center:.5,bottom:1,right:1},Uh=function(t,e){if(hn(t)){var i=t.indexOf("="),n=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(n*=e/100),t=t.substr(0,i-1)),t=n+(t in Gh?Gh[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Ih=function(t,e,i,n,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,u=r.indent,f=r.fontWeight,p=_e.createElement("div"),x=Tr(i)||ms(i,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,g=x?me:i.tagName==="IFRAME"?i.contentDocument.body:i,y=t.indexOf("start")!==-1,M=y?c:h,v="border-color:"+M+";font-size:"+d+";color:"+M+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&x?"fixed;":"absolute;"),(m||l||!x)&&(v+=(n===$e?Sd:Md)+":"+(o+parseFloat(u))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=y,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=v,p.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+n.op.d2],Oh(p,0,n,y),p},Oh=function(t,e,i,n){var r={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];t._isFlipped=n,r[i.a+"Percent"]=n?-100:0,r[i.a]=n?"1px":0,r["border"+o+bo]=1,r["border"+a+bo]=0,r[i.p]=e+"px",Ct.set(t,r)},Jt=[],md={},qa,Hg=function(){return Ai()-Mn>34&&(qa||(qa=requestAnimationFrame(_s)))},xo=function(){(!Bi||!Bi.isPressed||Bi.startX>me.clientWidth)&&(Zt.cache++,Bi?qa||(qa=requestAnimationFrame(_s)):_s(),Mn||Er("scrollStart"),Mn=Ai())},ld=function(){e_=$t.innerWidth,t_=$t.innerHeight},Ba=function(t){Zt.cache++,(t===!0||!Ei&&!jg&&!_e.fullscreenElement&&!_e.webkitFullscreenElement&&(!fd||e_!==$t.innerWidth||Math.abs($t.innerHeight-t_)>$t.innerHeight*.25))&&kh.restart(!0)},wr={},sT=[],c_=function s(){return ci(qt,"scrollEnd",s)||yr(!0)},Er=function(t){return wr[t]&&wr[t].map(function(e){return e()})||sT},cn=[],h_=function(t){for(var e=0;e<cn.length;e+=5)(!t||cn[e+4]&&cn[e+4].query===t)&&(cn[e].style.cssText=cn[e+1],cn[e].getBBox&&cn[e].setAttribute("transform",cn[e+2]||""),cn[e+3].uncache=1)},u_=function(){Zt.cache++,Zt.forEach(function(t){return Ci(t)&&(t.rec=t())})},wd=function(t,e){var i;for(zi=0;zi<Jt.length;zi++)i=Jt[zi],i&&(!e||i._ctx===e)&&(t?i.kill(1):i.revert(!0,!0));Ys=!0,e&&h_(e),e||Er("revert")},f_=function(t,e){Zt.cache++,(e||!ki)&&Zt.forEach(function(i){return Ci(i)&&i.cacheID++&&(i.rec=0)}),hn(t)&&(vd=t,$t.history.scrollRestoration!==t&&($t.history.scrollRestoration=t))},ki,br=0,Wg,rT=function(){if(Wg!==br){var t=Wg=br;requestAnimationFrame(function(){return t===br&&yr(!0)})}},d_=function(){me.appendChild(So),yd=!Bi&&So.offsetHeight||$t.innerHeight,me.removeChild(So)},Xg=function(t){return Xa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},yr=function(t,e){if(un=_e.documentElement,me=_e.body,xd=[$t,_e,un,me],Mn&&!t&&!Ys){hi(qt,"scrollEnd",c_);return}d_(),ki=qt.isRefreshing=!0,Ys||u_();var i=Er("refreshInit");Qg&&qt.sort(),e||wd(),Zt.forEach(function(n){Ci(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),Jt.slice(0).forEach(function(n){return n.refresh()}),Ys=!1,Jt.forEach(function(n){if(n._subPinOffset&&n.pin){var r=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[r];n.revert(!0,1),n.adjustPinSpacing(n.pin[r]-o),n.refresh()}}),pd=1,Xg(!0),Jt.forEach(function(n){var r=Zn(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>r,a=n._startClamp&&n.start>=r;(o||a)&&n.setPositions(a?r-1:n.start,o?Math.max(a?r:n.start+1,r):n.end,!0)}),Xg(!1),pd=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),Zt.forEach(function(n){Ci(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),f_(vd,1),kh.pause(),br++,ki=2,_s(2),Jt.forEach(function(n){return Ci(n.vars.onRefresh)&&n.vars.onRefresh(n)}),ki=qt.isRefreshing=!1,Er("refresh")},gd=0,Fh=1,Wa,_s=function(t){if(t===2||!ki&&!Ys){qt.isUpdating=!0,Wa&&Wa.update(0);var e=Jt.length,i=Ai(),n=i-ad>=50,r=e&&Jt[0].scroll();if(Fh=gd>r?-1:1,ki||(gd=r),n&&(Mn&&!Hh&&i-Mn>200&&(Mn=0,Er("scrollEnd")),Na=ad,ad=i),Fh<0){for(zi=e;zi-- >0;)Jt[zi]&&Jt[zi].update(0,n);Fh=1}else for(zi=0;zi<e;zi++)Jt[zi]&&Jt[zi].update(0,n);qt.isUpdating=!1}qa=0},_d=[o_,a_,Md,Sd,yn+Ha,yn+ka,yn+Ga,yn+Va,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Bh=_d.concat([Sr,Mr,"boxSizing","max"+bo,"max"+bd,"position",yn,Ke,Ke+Ga,Ke+ka,Ke+Ha,Ke+Va]),oT=function(t,e,i){Mo(i);var n=t._gsap;if(n.spacerIsNative)Mo(n.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},cd=function(t,e,i,n){if(!t._gsap.swappedIn){for(var r=_d.length,o=e.style,a=t.style,l;r--;)l=_d[r],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Md]=a[Sd]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Sr]=Vh(t,wi)+ri,o[Mr]=Vh(t,$e)+ri,o[Ke]=a[yn]=a[a_]=a[o_]="0",Mo(n),a[Sr]=a["max"+bo]=i[Sr],a[Mr]=a["max"+bd]=i[Mr],a[Ke]=i[Ke],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},aT=/([A-Z])/g,Mo=function(t){if(t){var e=t.t.style,i=t.length,n=0,r,o;for((t.t._gsap||Ct.core.getCache(t.t)).uncache=1;n<i;n+=2)o=t[n+1],r=t[n],o?e[r]=o:e[r]&&e.removeProperty(r.replace(aT,"-$1").toLowerCase())}},Lh=function(t){for(var e=Bh.length,i=t.style,n=[],r=0;r<e;r++)n.push(Bh[r],i[Bh[r]]);return n.t=t,n},lT=function(t,e,i){for(var n=[],r=t.length,o=i?8:0,a;o<r;o+=2)a=t[o],n.push(a,a in e?e[a]:t[o+1]);return n.t=t.t,n},zh={left:0,top:0},qg=function(t,e,i,n,r,o,a,l,c,h,d,u,f,p){Ci(t)&&(t=t(l)),hn(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?Uh("0"+t.substr(3),i):0));var x=f?f.time():0,m,g,y;if(f&&f.seek(0),isNaN(t)||(t=+t),Fa(t))f&&(t=Ct.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&Oh(a,i,n,!0);else{Ci(e)&&(e=e(l));var M=(t||"0").split(" "),v,b,T,_;y=Fi(e,l)||me,v=gs(y)||{},(!v||!v.left&&!v.top)&&Sn(y).display==="none"&&(_=y.style.display,y.style.display="block",v=gs(y),_?y.style.display=_:y.style.removeProperty("display")),b=Uh(M[0],v[n.d]),T=Uh(M[1]||"0",i),t=v[n.p]-c[n.p]-h+b+r-T,a&&Oh(a,T,n,i-T<20||a._isStart&&T>20),i-=i-T}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var S=t+i,C=o._isStart;m="scroll"+n.d2,Oh(o,S,n,C&&S>20||!C&&(d?Math.max(me[m],un[m]):o.parentNode[m])<=S+1),d&&(c=gs(a),d&&(o.style[n.op.p]=c[n.op.p]-n.op.m-o._offset+ri))}return f&&y&&(m=gs(y),f.seek(u),g=gs(y),f._caScrollDist=m[n.p]-g[n.p],t=t/f._caScrollDist*u),f&&f.seek(x),f?t:Math.round(t)},cT=/(webkit|moz|length|cssText|inset)/i,Yg=function(t,e,i,n){if(t.parentNode!==e){var r=t.style,o,a;if(e===me){t._stOrig=r.cssText,a=Sn(t);for(o in a)!+o&&!cT.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=i,r.left=n}else r.cssText=t._stOrig;Ct.core.getCache(t).uncache=1,e.appendChild(t)}},p_=function(t,e,i){var n=e,r=n;return function(o){var a=Math.round(t());return a!==n&&a!==r&&Math.abs(a-n)>3&&Math.abs(a-r)>3&&(o=a,i&&i()),r=n,n=Math.round(o),n}},Dh=function(t,e,i){var n={};n[e.p]="+="+i,Ct.set(t,n)},Zg=function(t,e){var i=ps(t,e),n="_scroll"+e.p2,r=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,p={};c=c||i();var x=p_(i,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[n]=a,l.inherit=!1,l.modifiers=p,p[n]=function(){return x(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){Zt.cache++,o.tween&&_s()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Ct.to(t,l),u};return t[n]=i,i.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},hi(t,"wheel",i.wheelHandler),qt.isTouch&&hi(t,"touchmove",i.wheelHandler),r},qt=(function(){function s(e,i){vo||s.register(Ct)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),dd(this),this.init(e,i)}var t=s.prototype;return t.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ua){this.update=this.refresh=this.kill=Yn;return}i=Vg(hn(i)||Fa(i)||i.nodeType?{trigger:i}:i,Ph);var r=i,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,u=r.trigger,f=r.pin,p=r.pinSpacing,x=r.invalidateOnRefresh,m=r.anticipatePin,g=r.onScrubComplete,y=r.onSnapComplete,M=r.once,v=r.snap,b=r.pinReparent,T=r.pinSpacer,_=r.containerAnimation,S=r.fastScrollEnd,C=r.preventOverlaps,A=i.horizontal||i.containerAnimation&&i.horizontal!==!1?wi:$e,N=!d&&d!==0,I=Fi(i.scroller||$t),k=Ct.core.getCache(I),L=Tr(I),z=("pinType"in i?i.pinType:ms(I,"pinType")||L&&"fixed")==="fixed",V=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],O=N&&i.toggleActions.split(" "),Q="markers"in i?i.markers:Ph.markers,W=L?0:parseFloat(Sn(I)["border"+A.p2+bo])||0,P=this,$=i.onRefreshInit&&function(){return i.onRefreshInit(P)},xt=jb(I,L,A),Et=tT(I,L),Y=0,ot=0,vt=0,bt=ps(I,A),mt,Nt,ge,At,Ht,Lt,Ot,ce,oe,J,Kt,Xe,ve,se,Fe,He,F,ue,ae,Vt,ut,he,Dt,Bt,R,w,H,rt,nt,ht,gt,X,tt,ct,D,j,K,ft,lt;if(P._startClamp=P._endClamp=!1,P._dir=A,m*=45,P.scroller=I,P.scroll=_?_.time.bind(_):bt,At=bt(),Ys&&bt.rec==null&&(bt.rec=At),P.vars=i,n=n||i.animation,"refreshPriority"in i&&(Qg=1,i.refreshPriority===-9999&&(Wa=P)),k.tweenScroll=k.tweenScroll||{top:Zg(I,$e),left:Zg(I,wi)},P.tweenTo=mt=k.tweenScroll[A.p],P.scrubDuration=function(et){tt=Fa(et)&&et,tt?X?X.duration(et):X=Ct.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:tt,paused:!0,onComplete:function(){return g&&g(P)}}):(X&&X.progress(1).kill(),X=0)},n&&(n.vars.lazy=!1,n._initted&&!P.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),P.animation=n.pause(),n.scrollTrigger=P,P.scrubDuration(d),ht=0,l||(l=n.vars.id)),v&&((!vr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in me.style&&Ct.set(L?[me,un]:I,{scrollBehavior:"auto"}),Zt.forEach(function(et){return Ci(et)&&et.target===(L?_e.scrollingElement||un:I)&&(et.smooth=!1)}),ge=Ci(v.snapTo)?v.snapTo:v.snapTo==="labels"?iT(n):v.snapTo==="labelsDirectional"?nT(n):v.directional!==!1?function(et,_t){return Td(v.snapTo)(et,Ai()-ot<500?0:_t.direction)}:Ct.utils.snap(v.snapTo),ct=v.duration||{min:.1,max:2},ct=vr(ct)?za(ct.min,ct.max):za(ct,ct),D=Ct.delayedCall(v.delay||tt/2||.1,function(){var et=bt(),_t=Ai()-ot<500,it=mt.tween;if((_t||Math.abs(P.getVelocity())<10)&&!it&&!Hh&&Y!==et){var Tt=(et-Lt)/se,Qt=n&&!N?n.totalProgress():Tt,Wt=_t?0:(Qt-gt)/(Ai()-Na)*1e3||0,Ee=Ct.utils.clamp(-Tt,1-Tt,_o(Wt/2)*Wt/.185),qe=Tt+(v.inertia===!1?0:Ee),Ae,ye,de=v,Qe=de.onStart,Se=de.onInterrupt,gi=de.onComplete;if(Ae=ge(qe,P),Fa(Ae)||(Ae=qe),ye=Math.max(0,Math.round(Lt+Ae*se)),et<=Ot&&et>=Lt&&ye!==et){if(it&&!it._initted&&it.data<=_o(ye-et))return;v.inertia===!1&&(Ee=Ae-Tt),mt(ye,{duration:ct(_o(Math.max(_o(qe-Qt),_o(Ae-Qt))*.185/Wt/.05||0)),ease:v.ease||"power3",data:_o(ye-et),onInterrupt:function(){return D.restart(!0)&&Se&&go(P,Se)},onComplete:function(){P.update(),Y=bt(),n&&!N&&(X?X.resetTo("totalProgress",Ae,n._tTime/n._tDur):n.progress(Ae)),ht=gt=n&&!N?n.totalProgress():P.progress,y&&y(P),gi&&go(P,gi)}},et,Ee*se,ye-et-Ee*se),Qe&&go(P,Qe,mt.tween)}}else P.isActive&&Y!==et&&D.restart(!0)}).pause()),l&&(md[l]=P),u=P.trigger=Fi(u||f!==!0&&f),lt=u&&u._gsap&&u._gsap.stRevert,lt&&(lt=lt(P)),f=f===!0?u:Fi(f),hn(a)&&(a={targets:u,className:a}),f&&(p===!1||p===yn||(p=!p&&f.parentNode&&f.parentNode.style&&Sn(f.parentNode).display==="flex"?!1:Ke),P.pin=f,Nt=Ct.core.getCache(f),Nt.spacer?Fe=Nt.pinState:(T&&(T=Fi(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Nt.spacerIsNative=!!T,T&&(Nt.spacerState=Lh(T))),Nt.spacer=ue=T||_e.createElement("div"),ue.classList.add("pin-spacer"),l&&ue.classList.add("pin-spacer-"+l),Nt.pinState=Fe=Lh(f)),i.force3D!==!1&&Ct.set(f,{force3D:!0}),P.spacer=ue=Nt.spacer,nt=Sn(f),Bt=nt[p+A.os2],Vt=Ct.getProperty(f),ut=Ct.quickSetter(f,A.a,ri),cd(f,ue,nt),F=Lh(f)),Q){Xe=vr(Q)?Vg(Q,Gg):Gg,J=Ih("scroller-start",l,I,A,Xe,0),Kt=Ih("scroller-end",l,I,A,Xe,0,J),ae=J["offset"+A.op.d2];var dt=Fi(ms(I,"content")||I);ce=this.markerStart=Ih("start",l,dt,A,Xe,ae,0,_),oe=this.markerEnd=Ih("end",l,dt,A,Xe,ae,0,_),_&&(ft=Ct.quickSetter([ce,oe],A.a,ri)),!z&&!(Dn.length&&ms(I,"fixedMarkers")===!0)&&(eT(L?me:I),Ct.set([J,Kt],{force3D:!0}),w=Ct.quickSetter(J,A.a,ri),rt=Ct.quickSetter(Kt,A.a,ri))}if(_){var at=_.vars.onUpdate,pt=_.vars.onUpdateParams;_.eventCallback("onUpdate",function(){P.update(0,0,1),at&&at.apply(_,pt||[])})}if(P.previous=function(){return Jt[Jt.indexOf(P)-1]},P.next=function(){return Jt[Jt.indexOf(P)+1]},P.revert=function(et,_t){if(!_t)return P.kill(!0);var it=et!==!1||!P.enabled,Tt=Ei;it!==P.isReverted&&(it&&(j=Math.max(bt(),P.scroll.rec||0),vt=P.progress,K=n&&n.progress()),ce&&[ce,oe,J,Kt].forEach(function(Qt){return Qt.style.display=it?"none":"block"}),it&&(Ei=P,P.update(it)),f&&(!b||!P.isActive)&&(it?oT(f,ue,Fe):cd(f,ue,Sn(f),R)),it||P.update(it),Ei=Tt,P.isReverted=it)},P.refresh=function(et,_t,it,Tt){if(!((Ei||!P.enabled)&&!_t)){if(f&&et&&Mn){hi(s,"scrollEnd",c_);return}!ki&&$&&$(P),Ei=P,mt.tween&&!it&&(mt.tween.kill(),mt.tween=0),X&&X.pause(),x&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(G){return G.vars.immediateRender&&G.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Qt=xt(),Wt=Et(),Ee=_?_.duration():Zn(I,A),qe=se<=.01||!se,Ae=0,ye=Tt||0,de=vr(it)?it.end:i.end,Qe=i.endTrigger||u,Se=vr(it)?it.start:i.start||(i.start===0||!u?0:f?"0 0":"0 100%"),gi=P.pinnedContainer=i.pinnedContainer&&Fi(i.pinnedContainer,P),Ji=u&&Math.max(0,Jt.indexOf(P))||0,Be=Ji,Ye,je,$i,Ar,ti,ze,fn,wo,Ka,xs,E,U,Z;for(Q&&vr(it)&&(U=Ct.getProperty(J,A.p),Z=Ct.getProperty(Kt,A.p));Be-- >0;)ze=Jt[Be],ze.end||ze.refresh(0,1)||(Ei=P),fn=ze.pin,fn&&(fn===u||fn===f||fn===gi)&&!ze.isReverted&&(xs||(xs=[]),xs.unshift(ze),ze.revert(!0,!0)),ze!==Jt[Be]&&(Ji--,Be--);for(Ci(Se)&&(Se=Se(P)),Se=Fg(Se,"start",P),Lt=qg(Se,u,Qt,A,bt(),ce,J,P,Wt,W,z,Ee,_,P._startClamp&&"_startClamp")||(f?-.001:0),Ci(de)&&(de=de(P)),hn(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=(hn(Se)?Se.split(" ")[0]:"")+de:(Ae=Uh(de.substr(2),Qt),de=hn(Se)?Se:(_?Ct.utils.mapRange(0,_.duration(),_.scrollTrigger.start,_.scrollTrigger.end,Lt):Lt)+Ae,Qe=u)),de=Fg(de,"end",P),Ot=Math.max(Lt,qg(de||(Qe?"100% 0":Ee),Qe,Qt,A,bt()+Ae,oe,Kt,P,Wt,W,z,Ee,_,P._endClamp&&"_endClamp"))||-.001,Ae=0,Be=Ji;Be--;)ze=Jt[Be]||{},fn=ze.pin,fn&&ze.start-ze._pinPush<=Lt&&!_&&ze.end>0&&(Ye=ze.end-(P._startClamp?Math.max(0,ze.start):ze.start),(fn===u&&ze.start-ze._pinPush<Lt||fn===gi)&&isNaN(Se)&&(Ae+=Ye*(1-ze.progress)),fn===f&&(ye+=Ye));if(Lt+=Ae,Ot+=Ae,P._startClamp&&(P._startClamp+=Ae),P._endClamp&&!ki&&(P._endClamp=Ot||-.001,Ot=Math.min(Ot,Zn(I,A))),se=Ot-Lt||(Lt-=.01)&&.001,qe&&(vt=Ct.utils.clamp(0,1,Ct.utils.normalize(Lt,Ot,j))),P._pinPush=ye,ce&&Ae&&(Ye={},Ye[A.a]="+="+Ae,gi&&(Ye[A.p]="-="+bt()),Ct.set([ce,oe],Ye)),f&&!(pd&&P.end>=Zn(I,A)))Ye=Sn(f),Ar=A===$e,$i=bt(),he=parseFloat(Vt(A.a))+ye,!Ee&&Ot>1&&(E=(L?_e.scrollingElement||un:I).style,E={style:E,value:E["overflow"+A.a.toUpperCase()]},L&&Sn(me)["overflow"+A.a.toUpperCase()]!=="scroll"&&(E.style["overflow"+A.a.toUpperCase()]="scroll")),cd(f,ue,Ye),F=Lh(f),je=gs(f,!0),wo=z&&ps(I,Ar?wi:$e)(),p?(R=[p+A.os2,se+ye+ri],R.t=ue,Be=p===Ke?Vh(f,A)+se+ye:0,Be&&(R.push(A.d,Be+ri),ue.style.flexBasis!=="auto"&&(ue.style.flexBasis=Be+ri)),Mo(R),gi&&Jt.forEach(function(G){G.pin===gi&&G.vars.pinSpacing!==!1&&(G._subPinOffset=!0)}),z&&bt(j)):(Be=Vh(f,A),Be&&ue.style.flexBasis!=="auto"&&(ue.style.flexBasis=Be+ri)),z&&(ti={top:je.top+(Ar?$i-Lt:wo)+ri,left:je.left+(Ar?wo:$i-Lt)+ri,boxSizing:"border-box",position:"fixed"},ti[Sr]=ti["max"+bo]=Math.ceil(je.width)+ri,ti[Mr]=ti["max"+bd]=Math.ceil(je.height)+ri,ti[yn]=ti[yn+Ga]=ti[yn+ka]=ti[yn+Ha]=ti[yn+Va]="0",ti[Ke]=Ye[Ke],ti[Ke+Ga]=Ye[Ke+Ga],ti[Ke+ka]=Ye[Ke+ka],ti[Ke+Ha]=Ye[Ke+Ha],ti[Ke+Va]=Ye[Ke+Va],He=lT(Fe,ti,b),ki&&bt(0)),n?(Ka=n._initted,rd(1),n.render(n.duration(),!0,!0),Dt=Vt(A.a)-he+se+ye,H=Math.abs(se-Dt)>1,z&&H&&He.splice(He.length-2,2),n.render(0,!0,!0),Ka||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),rd(0)):Dt=se,E&&(E.value?E.style["overflow"+A.a.toUpperCase()]=E.value:E.style.removeProperty("overflow-"+A.a));else if(u&&bt()&&!_)for(je=u.parentNode;je&&je!==me;)je._pinOffset&&(Lt-=je._pinOffset,Ot-=je._pinOffset),je=je.parentNode;xs&&xs.forEach(function(G){return G.revert(!1,!0)}),P.start=Lt,P.end=Ot,At=Ht=ki?j:bt(),!_&&!ki&&!Ys&&(At<j&&bt(j),P.scroll.rec=0),P.revert(!1,!0),ot=Ai(),D&&(Y=-1,D.restart(!0)),Ei=0,n&&N&&(n._initted||K)&&n.progress()!==K&&n.progress(K||0,!0).render(n.time(),!0,!0),(qe||vt!==P.progress||_||x||n&&!n._initted)&&(n&&!N&&(n._initted||vt||n.vars.immediateRender!==!1)&&n.totalProgress(_&&Lt<-.001&&!vt?Ct.utils.normalize(Lt,Ot,0):vt,!0),P.progress=qe||(At-Lt)/se===vt?0:vt),f&&p&&(ue._pinOffset=Math.round(P.progress*Dt)),X&&X.invalidate(),isNaN(U)||(U-=Ct.getProperty(J,A.p),Z-=Ct.getProperty(Kt,A.p),Dh(J,A,U),Dh(ce,A,U-(Tt||0)),Dh(Kt,A,Z),Dh(oe,A,Z-(Tt||0))),qe&&!ki&&P.update(),h&&!ki&&!ve&&(ve=!0,h(P),ve=!1)}},P.getVelocity=function(){return(bt()-Ht)/(Ai()-Na)*1e3||0},P.endAnimation=function(){Da(P.callbackAnimation),n&&(X?X.progress(1):n.paused()?N||Da(n,P.direction<0,1):Da(n,n.reversed()))},P.labelToScroll=function(et){return n&&n.labels&&(Lt||P.refresh()||Lt)+n.labels[et]/n.duration()*se||0},P.getTrailing=function(et){var _t=Jt.indexOf(P),it=P.direction>0?Jt.slice(0,_t).reverse():Jt.slice(_t+1);return(hn(et)?it.filter(function(Tt){return Tt.vars.preventOverlaps===et}):it).filter(function(Tt){return P.direction>0?Tt.end<=Lt:Tt.start>=Ot})},P.update=function(et,_t,it){if(!(_&&!it&&!et)){var Tt=ki===!0?j:P.scroll(),Qt=et?0:(Tt-Lt)/se,Wt=Qt<0?0:Qt>1?1:Qt||0,Ee=P.progress,qe,Ae,ye,de,Qe,Se,gi,Ji;if(_t&&(Ht=At,At=_?bt():Tt,v&&(gt=ht,ht=n&&!N?n.totalProgress():Wt)),m&&f&&!Ei&&!Eh&&Mn&&(!Wt&&Lt<Tt+(Tt-Ht)/(Ai()-Na)*m?Wt=1e-4:Wt===1&&Ot>Tt+(Tt-Ht)/(Ai()-Na)*m&&(Wt=.9999)),Wt!==Ee&&P.enabled){if(qe=P.isActive=!!Wt&&Wt<1,Ae=!!Ee&&Ee<1,Se=qe!==Ae,Qe=Se||!!Wt!=!!Ee,P.direction=Wt>Ee?1:-1,P.progress=Wt,Qe&&!Ei&&(ye=Wt&&!Ee?0:Wt===1?1:Ee===1?2:3,N&&(de=!Se&&O[ye+1]!=="none"&&O[ye+1]||O[ye],Ji=n&&(de==="complete"||de==="reset"||de in n))),C&&(Se||Ji)&&(Ji||d||!n)&&(Ci(C)?C(P):P.getTrailing(C).forEach(function($i){return $i.endAnimation()})),N||(X&&!Ei&&!Eh?(X._dp._time-X._start!==X._time&&X.render(X._dp._time-X._start),X.resetTo?X.resetTo("totalProgress",Wt,n._tTime/n._tDur):(X.vars.totalProgress=Wt,X.invalidate().restart())):n&&n.totalProgress(Wt,!!(Ei&&(ot||et)))),f){if(et&&p&&(ue.style[p+A.os2]=Bt),!z)ut(Oa(he+Dt*Wt));else if(Qe){if(gi=!et&&Wt>Ee&&Ot+1>Tt&&Tt+1>=Zn(I,A),b)if(!et&&(qe||gi)){var Be=gs(f,!0),Ye=Tt-Lt;Yg(f,me,Be.top+(A===$e?Ye:0)+ri,Be.left+(A===$e?0:Ye)+ri)}else Yg(f,ue);Mo(qe||gi?He:F),H&&Wt<1&&qe||ut(he+(Wt===1&&!gi?Dt:0))}}v&&!mt.tween&&!Ei&&!Eh&&D.restart(!0),a&&(Se||M&&Wt&&(Wt<1||!od))&&Xa(a.targets).forEach(function($i){return $i.classList[qe||M?"add":"remove"](a.className)}),o&&!N&&!et&&o(P),Qe&&!Ei?(N&&(Ji&&(de==="complete"?n.pause().totalProgress(1):de==="reset"?n.restart(!0).pause():de==="restart"?n.restart(!0):n[de]()),o&&o(P)),(Se||!od)&&(c&&Se&&go(P,c),V[ye]&&go(P,V[ye]),M&&(Wt===1?P.kill(!1,1):V[ye]=0),Se||(ye=Wt===1?1:3,V[ye]&&go(P,V[ye]))),S&&!qe&&Math.abs(P.getVelocity())>(Fa(S)?S:2500)&&(Da(P.callbackAnimation),X?X.progress(1):Da(n,de==="reverse"?1:!Wt,1))):N&&o&&!Ei&&o(P)}if(rt){var je=_?Tt/_.duration()*(_._caScrollDist||0):Tt;w(je+(J._isFlipped?1:0)),rt(je)}ft&&ft(-Tt/_.duration()*(_._caScrollDist||0))}},P.enable=function(et,_t){P.enabled||(P.enabled=!0,hi(I,"resize",Ba),L||hi(I,"scroll",xo),$&&hi(s,"refreshInit",$),et!==!1&&(P.progress=vt=0,At=Ht=Y=bt()),_t!==!1&&P.refresh())},P.getTween=function(et){return et&&mt?mt.tween:X},P.setPositions=function(et,_t,it,Tt){if(_){var Qt=_.scrollTrigger,Wt=_.duration(),Ee=Qt.end-Qt.start;et=Qt.start+Ee*et/Wt,_t=Qt.start+Ee*_t/Wt}P.refresh(!1,!1,{start:Bg(et,it&&!!P._startClamp),end:Bg(_t,it&&!!P._endClamp)},Tt),P.update()},P.adjustPinSpacing=function(et){if(R&&et){var _t=R.indexOf(A.d)+1;R[_t]=parseFloat(R[_t])+et+ri,R[1]=parseFloat(R[1])+et+ri,Mo(R)}},P.disable=function(et,_t){if(et!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,_t||X&&X.pause(),j=0,Nt&&(Nt.uncache=1),$&&ci(s,"refreshInit",$),D&&(D.pause(),mt.tween&&mt.tween.kill()&&(mt.tween=0)),!L)){for(var it=Jt.length;it--;)if(Jt[it].scroller===I&&Jt[it]!==P)return;ci(I,"resize",Ba),L||ci(I,"scroll",xo)}},P.kill=function(et,_t){P.disable(et,_t),X&&!_t&&X.kill(),l&&delete md[l];var it=Jt.indexOf(P);it>=0&&Jt.splice(it,1),it===zi&&Fh>0&&zi--,it=0,Jt.forEach(function(Tt){return Tt.scroller===P.scroller&&(it=1)}),it||ki||Ys||(P.scroll.rec=0),n&&(n.scrollTrigger=null,et&&n.revert({kill:!1}),_t||n.kill()),ce&&[ce,oe,J,Kt].forEach(function(Tt){return Tt.parentNode&&Tt.parentNode.removeChild(Tt)}),Wa===P&&(Wa=0),f&&(Nt&&(Nt.uncache=1),it=0,Jt.forEach(function(Tt){return Tt.pin===f&&it++}),it||(Nt.spacer=0)),i.onKill&&i.onKill(P)},Jt.push(P),P.enable(!1,!1),lt&&lt(P),n&&n.add&&!se){var st=P.update;P.update=function(){P.update=st,Zt.cache++,Lt||Ot||P.refresh()},Ct.delayedCall(.01,P.update),se=.01,Lt=Ot=0}else P.refresh();f&&rT()},s.register=function(i){return vo||(Ct=i||n_(),i_()&&window.document&&s.enable(),vo=Ua),vo},s.defaults=function(i){if(i)for(var n in i)Ph[n]=i[n];return Ph},s.disable=function(i,n){Ua=0,Jt.forEach(function(o){return o[n?"kill":"disable"](i)}),ci($t,"wheel",xo),ci(_e,"scroll",xo),clearInterval(wh),ci(_e,"touchcancel",Yn),ci(me,"touchstart",Yn),Ch(ci,_e,"pointerdown,touchstart,mousedown",zg),Ch(ci,_e,"pointerup,touchend,mouseup",kg),kh.kill(),Ah(ci);for(var r=0;r<Zt.length;r+=3)Rh(ci,Zt[r],Zt[r+1]),Rh(ci,Zt[r],Zt[r+2])},s.enable=function(){if($t=window,_e=document,un=_e.documentElement,me=_e.body,Ct){if(Xa=Ct.utils.toArray,za=Ct.utils.clamp,dd=Ct.core.context||Yn,rd=Ct.core.suppressOverwrites||Yn,vd=$t.history.scrollRestoration||"auto",gd=$t.pageYOffset||0,Ct.core.globals("ScrollTrigger",s),me){Ua=1,So=document.createElement("div"),So.style.height="100vh",So.style.position="absolute",d_(),Qb(),Ge.register(Ct),s.isTouch=Ge.isTouch,qs=Ge.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),fd=Ge.isTouch===1,hi($t,"wheel",xo),xd=[$t,_e,un,me],Ct.matchMedia?(s.matchMedia=function(h){var d=Ct.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Ct.addEventListener("matchMediaInit",function(){u_(),wd()}),Ct.addEventListener("matchMediaRevert",function(){return h_()}),Ct.addEventListener("matchMedia",function(){yr(0,1),Er("matchMedia")}),Ct.matchMedia().add("(orientation: portrait)",function(){return ld(),ld})):console.warn("Requires GSAP 3.11.0 or later"),ld(),hi(_e,"scroll",xo);var i=me.hasAttribute("style"),n=me.style,r=n.borderTopStyle,o=Ct.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=gs(me),$e.m=Math.round(a.top+$e.sc())||0,wi.m=Math.round(a.left+wi.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),i||(me.setAttribute("style",""),me.removeAttribute("style")),wh=setInterval(Hg,250),Ct.delayedCall(.5,function(){return Eh=0}),hi(_e,"touchcancel",Yn),hi(me,"touchstart",Yn),Ch(hi,_e,"pointerdown,touchstart,mousedown",zg),Ch(hi,_e,"pointerup,touchend,mouseup",kg),ud=Ct.utils.checkPrefix("transform"),Bh.push(ud),vo=Ai(),kh=Ct.delayedCall(.2,yr).pause(),yo=[_e,"visibilitychange",function(){var h=$t.innerWidth,d=$t.innerHeight;_e.hidden?(Ug=h,Og=d):(Ug!==h||Og!==d)&&Ba()},_e,"DOMContentLoaded",yr,$t,"load",yr,$t,"resize",Ba],Ah(hi),Jt.forEach(function(h){return h.enable(0,1)}),l=0;l<Zt.length;l+=3)Rh(ci,Zt[l],Zt[l+1]),Rh(ci,Zt[l],Zt[l+2])}else if(_e){var c=function h(){s.enable(),_e.removeEventListener("DOMContentLoaded",h)};_e.addEventListener("DOMContentLoaded",c)}}},s.config=function(i){"limitCallbacks"in i&&(od=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(wh)||(wh=n)&&setInterval(Hg,n),"ignoreMobileResize"in i&&(fd=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Ah(ci)||Ah(hi,i.autoRefreshEvents||"none"),jg=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,n){var r=Fi(i),o=Zt.indexOf(r),a=Tr(r);~o&&Zt.splice(o,a?6:2),n&&(a?Dn.unshift($t,n,me,n,un,n):Dn.unshift(r,n))},s.clearMatchMedia=function(i){Jt.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},s.isInViewport=function(i,n,r){var o=(hn(i)?Fi(i):i).getBoundingClientRect(),a=o[r?Sr:Mr]*n||0;return r?o.right-a>0&&o.left+a<$t.innerWidth:o.bottom-a>0&&o.top+a<$t.innerHeight},s.positionInViewport=function(i,n,r){hn(i)&&(i=Fi(i));var o=i.getBoundingClientRect(),a=o[r?Sr:Mr],l=n==null?a/2:n in Gh?Gh[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return r?(o.left+l)/$t.innerWidth:(o.top+l)/$t.innerHeight},s.killAll=function(i){if(Jt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),i!==!0){var n=wr.killAll||[];wr={},n.forEach(function(r){return r()})}},s})();qt.version="3.15.1";qt.saveStyles=function(s){return s?Xa(s).forEach(function(t){if(t&&t.style){var e=cn.indexOf(t);e>=0&&cn.splice(e,5),cn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ct.core.getCache(t),dd())}}):cn};qt.revert=function(s,t){return wd(!s,t)};qt.create=function(s,t){return new qt(s,t)};qt.refresh=function(s){return s?Ba(!0):(vo||qt.register())&&yr(!0)};qt.update=function(s){return++Zt.cache&&_s(s===!0?2:0)};qt.clearScrollMemory=f_;qt.maxScroll=function(s,t){return Zn(s,t?wi:$e)};qt.getScrollFunc=function(s,t){return ps(Fi(s),t?wi:$e)};qt.getById=function(s){return md[s]};qt.getAll=function(){return Jt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};qt.isScrolling=function(){return!!Mn};qt.snapDirectional=Td;qt.addEventListener=function(s,t){var e=wr[s]||(wr[s]=[]);~e.indexOf(t)||e.push(t)};qt.removeEventListener=function(s,t){var e=wr[s],i=e&&e.indexOf(t);i>=0&&e.splice(i,1)};qt.batch=function(s,t){var e=[],i={},n=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Ct.delayedCall(n,function(){h(d,u),d=[],u=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),u.push(p),r<=d.length&&f.progress(1)}},a;for(a in t)i[a]=a.substr(0,2)==="on"&&Ci(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Ci(r)&&(r=r(),hi(qt,"refresh",function(){return r=t.batchMax()})),Xa(s).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,e.push(qt.create(c))}),e};var Jg=function(t,e,i,n){return e>n?t(n):e<0&&t(0),i>n?(n-e)/(i-e):i<0?e/(e-i):1},hd=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ge.isTouch?" pinch-zoom":""):"none",t===un&&s(me,e)},Nh={auto:1,scroll:1},hT=function(t){var e=t.event,i=t.target,n=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Ct.core.getCache(r),a=Ai(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==me&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Nh[(l=Sn(r)).overflowY]||Nh[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==i&&!Tr(r)&&(Nh[(l=Sn(r)).overflowY]||Nh[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},m_=function(t,e,i,n){return Ge.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:n=n&&hT,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&hi(_e,Ge.eventTypes[0],Kg,!1,!0)},onDisable:function(){return ci(_e,Ge.eventTypes[0],Kg,!0)}})},uT=/(input|label|select|textarea)/i,$g,Kg=function(t){var e=uT.test(t.target.tagName);(e||$g)&&(t._gsapAllow=!0,$g=e)},fT=function(t){vr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,i=e.normalizeScrollX,n=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=Fi(t.target)||un,h=Ct.core.globals().ScrollSmoother,d=h&&h.get(),u=qs&&(t.content&&Fi(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=ps(c,$e),p=ps(c,wi),x=1,m=(Ge.isTouch&&$t.visualViewport?$t.visualViewport.scale*$t.visualViewport.width:$t.outerWidth)/$t.innerWidth,g=0,y=Ci(n)?function(){return n(a)}:function(){return n||2.8},M,v,b=m_(c,t.type,!0,r),T=function(){return v=!1},_=Yn,S=Yn,C=function(){l=Zn(c,$e),S=za(qs?1:0,l),i&&(_=za(0,Zn(c,wi))),M=br},A=function(){u._gsap.y=Oa(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},N=function(){if(v){requestAnimationFrame(T);var Q=Oa(a.deltaY/2),W=S(f.v-Q);if(u&&W!==f.v+f.offset){f.offset=W-f.v;var P=Oa((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",u._gsap.y=P+"px",f.cacheID=Zt.cache,_s()}return!0}f.offset&&A(),v=!0},I,k,L,z,V=function(){C(),I.isActive()&&I.vars.scrollY>l&&(f()>l?I.progress(1)&&f(l):I.resetTo("scrollY",l))};return u&&Ct.set(u,{y:"+=0"}),t.ignoreCheck=function(O){return qs&&O.type==="touchmove"&&N(O)||x>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},t.onPress=function(){v=!1;var O=x;x=Oa(($t.visualViewport&&$t.visualViewport.scale||1)/m),I.pause(),O!==x&&hd(c,x>1.01?!0:i?!1:"x"),k=p(),L=f(),C(),M=br},t.onRelease=t.onGestureStart=function(O,Q){if(f.offset&&A(),!Q)z.restart(!0);else{Zt.cache++;var W=y(),P,$;i&&(P=p(),$=P+W*.05*-O.velocityX/.227,W*=Jg(p,P,$,Zn(c,wi)),I.vars.scrollX=_($)),P=f(),$=P+W*.05*-O.velocityY/.227,W*=Jg(f,P,$,Zn(c,$e)),I.vars.scrollY=S($),I.invalidate().duration(W).play(.01),(qs&&I.vars.scrollY>=l||P>=l-1)&&Ct.to({},{onUpdate:V,duration:W})}o&&o(O)},t.onWheel=function(){I._ts&&I.pause(),Ai()-g>1e3&&(M=0,g=Ai())},t.onChange=function(O,Q,W,P,$){if(br!==M&&C(),Q&&i&&p(_(P[2]===Q?k+(O.startX-O.x):p()+Q-P[1])),W){f.offset&&A();var xt=$[2]===W,Et=xt?L+O.startY-O.y:f()+W-$[1],Y=S(Et);xt&&Et!==Y&&(L+=Y-Et),f(Y)}(W||Q)&&_s()},t.onEnable=function(){hd(c,i?!1:"x"),qt.addEventListener("refresh",V),hi($t,"resize",V),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),b.enable()},t.onDisable=function(){hd(c,!0),ci($t,"resize",V),qt.removeEventListener("refresh",V),b.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ge(t),a.iOS=qs,qs&&!f()&&f(1),qs&&Ct.ticker.add(Yn),z=a._dc,I=Ct.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:p_(f,f(),function(){return I.pause()})},onUpdate:_s,onComplete:z.vars.onComplete}),a};qt.sort=function(s){if(Ci(s))return Jt.sort(s);var t=$t.pageYOffset||0;return qt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+$t.innerHeight}),Jt.sort(s||function(e,i){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};qt.observe=function(s){return new Ge(s)};qt.normalizeScroll=function(s){if(typeof s>"u")return Bi;if(s===!0&&Bi)return Bi.enable();if(s===!1){Bi&&Bi.kill(),Bi=s;return}var t=s instanceof Ge?s:fT(s);return Bi&&Bi.target===t.target&&Bi.kill(),Tr(t.target)&&(Bi=t),t};qt.core={_getVelocityProp:Th,_inputObserver:m_,_scrollers:Zt,_proxies:Dn,bridge:{ss:function(){Mn||Er("scrollStart"),Mn=Ai()},ref:function(){return Ei}}};n_()&&Ct.registerPlugin(qt);var Ya,Za,g_=typeof Symbol=="function"?Symbol():"_split",Ad,dT=()=>Ad||$a.register(window.gsap),__=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Ja=s=>s?typeof s=="string"?Ja(document.querySelectorAll(s)):"length"in s?Array.from(s).reduce((t,e)=>(typeof e=="string"?t.push(...Ja(e)):t.push(e),t),[]):[s]:[],x_=s=>Ja(s).filter(t=>t&&t.nodeType===1),Wh=[],Ed=function(){},pT={add:s=>s()},mT=/\s+/g,v_=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Xh={left:0,top:0,width:0,height:0},gT=(s,t)=>{for(;++t<s.length&&s[t]===Xh;);return s[t]||Xh},y_=({element:s,html:t,ariaL:e,ariaH:i})=>{s.innerHTML=t,e?s.setAttribute("aria-label",e):s.removeAttribute("aria-label"),i?s.setAttribute("aria-hidden",i):s.removeAttribute("aria-hidden")},S_=(s,t)=>{if(t){let e=new Set(s.join("").match(t)||Wh),i=s.length,n,r,o,a;if(e.size)for(;--i>-1;){r=s[i];for(o of e)if(o.startsWith(r)&&o.length>r.length){for(n=0,a=r;o.startsWith(a+=s[i+ ++n])&&a.length<o.length;);if(n&&a.length===o.length){s[i]=o,s.splice(i+1,n);break}}}}return s},M_=s=>window.getComputedStyle(s).display==="inline"&&(s.style.display="inline-block"),To=(s,t,e)=>t.insertBefore(typeof s=="string"?document.createTextNode(s):s,e),Cd=(s,t,e)=>{let i=t[s+"sClass"]||"",{tag:n="div",aria:r="auto",propIndex:o=!1}=t,a=s==="line"?"block":"inline-block",l=i.indexOf("++")>-1,c=h=>{let d=document.createElement(n),u=e.length+1;return i&&(d.className=i+(l?" "+i+u:"")),o&&d.style.setProperty("--"+s,u+""),r!=="none"&&d.setAttribute("aria-hidden","true"),n!=="span"&&(d.style.position="relative",d.style.display=a),d.textContent=h,e.push(d),d};return l&&(i=i.replace("++","")),c.collection=e,c},_T=(s,t,e,i)=>{let n=Cd("line",e,i),r=window.getComputedStyle(s).textAlign||"left";return(o,a)=>{let l=n("");for(l.style.textAlign=r,s.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},b_=(s,t,e,i,n,r,o,a,l,c)=>{var h;let d=Array.from(s.childNodes),u=0,{wordDelimiter:f,reduceWhiteSpace:p=!0,prepareText:x}=t,m=s.getBoundingClientRect(),g=m,y=!p&&window.getComputedStyle(s).whiteSpace.substring(0,3)==="pre",M=r&&c&&window.getComputedStyle(s).direction==="rtl",v=0,b=e.collection,T,_,S,C,A,N,I,k,L,z,V,O,Q,W,P,$,xt,Et;for(typeof f=="object"?(S=f.delimiter||f,_=f.replaceWith||""):_=f===""?"":f||" ",T=_!==" ";u<d.length;u++)if(C=d[u],C.nodeType===3){for(P=C.textContent||"",p?P=P.replace(mT," "):y&&(P=P.replace(/\n/g,_+`
`)),x&&(P=x(P,s)),C.textContent=P,A=_||S?P.split(S||_):P.match(a)||Wh,xt=A[A.length-1],k=T?xt.slice(-1)===" ":!xt,xt||A.pop(),g=m,I=T?A[0].charAt(0)===" ":!A[0],I&&To(" ",s,C),A[0]||A.shift(),S_(A,l),r&&c||(C.textContent=""),L=1;L<=A.length;L++)if($=A[L-1],!p&&y&&$.charAt(0)===`
`&&((h=C.previousSibling)==null||h.remove(),To(document.createElement("br"),s,C),$=$.slice(1)),!p&&$==="")To(_,s,C);else if($===" ")s.insertBefore(document.createTextNode(" "),C);else{if(T&&$.charAt(0)===" "&&To(" ",s,C),v&&L===1&&!I&&b.indexOf(v.parentNode)>-1?(N=b[b.length-1],N.appendChild(document.createTextNode(i?"":$))):(N=e(i?"":$),To(N,s,C),v&&L===1&&!I&&N.insertBefore(v,N.firstChild)),i){if(V=__?S_([...__.segment($)].map(Y=>Y.segment),l):$.match(a)||Wh,l){let Y=$.match(l);Y&&Y.some(ot=>V.indexOf(ot)<0)&&(V=$.match(a)||Wh)}for(Et=0;Et<V.length;Et++)N.appendChild(V[Et]===" "?document.createTextNode(" "):i(V[Et]))}if(r&&c){if(P=C.textContent=P.substring($.length+1,P.length),z=N.getBoundingClientRect(),z.top>g.top&&(M?z.left>=g.left:z.left<=g.left)){for(O=s.cloneNode(),Q=s.childNodes[0];Q&&Q!==N;)W=Q,Q=Q.nextSibling,O.appendChild(W);s.parentNode.insertBefore(O,s),n&&M_(O)}g=z}(L<A.length||k)&&To(L>=A.length?" ":T&&$.slice(-1)===" "?" "+_:_,s,C)}s.removeChild(C),v=0}else C.nodeType===1&&(o&&o.indexOf(C)>-1?(b.indexOf(C.previousSibling)>-1&&b[b.length-1].appendChild(C),v=C):(b_(C,t,e,i,n,r,o,a,l,!0),v=0),n&&M_(C))},T_=class w_{constructor(t,e){this.isSplit=!1,dT(),this.elements=x_(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(r=>{var o;e.overwrite!==!1&&((o=r[g_])==null||o._data.orig.filter(({element:a})=>a===r).forEach(y_)),r[g_]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let i=[],n=()=>{let r=i.length,o;for(;r--;){o=i[r];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:i,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(n,200)})},Ed(this),this.split(e)}split(t){return(this._ctx||pT).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:i="auto",deepSlice:n=!0,smartWrap:r,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=e.indexOf("lines")>-1,d=e.indexOf("chars")>-1,u=e.indexOf("words")>-1,f=d&&!u&&!h,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),x=p?new RegExp(p.source+"|"+v_.source,"gu"):v_,m=!!t.ignore&&x_(t.ignore),{orig:g,animTime:y,obs:M}=this._data,v;(d||u||h)&&(this.elements.forEach((b,T)=>{g[T]={element:b,html:b.innerHTML,ariaL:b.getAttribute("aria-label"),ariaH:b.getAttribute("aria-hidden")},i==="auto"?b.setAttribute("aria-label",(b.textContent||"").trim()):i==="hidden"&&b.setAttribute("aria-hidden","true");let _=[],S=[],C=[],A=d?Cd("char",t,_):null,N=Cd("word",t,S),I,k,L,z;if(b_(b,t,N,A,f,n&&(h||f),m,x,p,!1),h){let V=Ja(b.childNodes),O=_T(b,V,t,C),Q,W=[],P=0,$=window.getComputedStyle(b).direction==="rtl",xt=V.map(ot=>ot.nodeType===1?ot.getBoundingClientRect():Xh),Et=Xh,Y;for(I=0;I<V.length;I++)Q=V[I],Q.nodeType===1&&(Q.nodeName==="BR"?((!I||V[I-1].nodeName!=="BR")&&(W.push(Q),O(P,I+1)),P=I+1,Et=gT(xt,I)):(Y=xt[I],I&&Y.top>Et.top&&($?Y.left+Y.width>Et.left+1:Y.left<Et.left+Et.width-1)&&(O(P,I),P=I),Et=Y));P<I&&O(P,I),W.forEach(ot=>{var vt;return(vt=ot.parentNode)==null?void 0:vt.removeChild(ot)})}if(!u){for(I=0;I<S.length;I++)if(k=S[I],d||!k.nextSibling||k.nextSibling.nodeType!==3)if(r&&!h){for(L=document.createElement("span"),L.style.whiteSpace="nowrap";k.firstChild;)L.appendChild(k.firstChild);k.replaceWith(L)}else k.replaceWith(...k.childNodes);else z=k.nextSibling,z&&z.nodeType===3&&(z.textContent=(k.textContent||"")+(z.textContent||""),k.remove());S.length=0,b.normalize()}this.lines.push(...C),this.words.push(...S),this.chars.push(..._)}),c&&this[c]&&this.masks.push(...this[c].map(b=>{let T=b.cloneNode();return b.replaceWith(T),T.appendChild(b),b.className&&(T.className=b.className.trim().split(" ").map(_=>_+"-mask").join(" ")),T.style.overflow="clip",T.style.verticalAlign="top",T}))),this.isSplit=!0,Za&&h&&a&&Za.addEventListener("loadingdone",this._split),(v=o&&o(this))&&v.totalTime&&(this._data.anim=y?v.totalTime(y):v),h&&a&&this.elements.forEach((b,T)=>{g[T].width=b.offsetWidth,M&&M.observe(b)})}),this}kill(){let{obs:t,t:e}=this._data;t&&t.disconnect(),clearTimeout(e),Za?.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:i,anim:n}=this._data;this.kill(),i.forEach(y_),this.chars.length=this.words.length=this.lines.length=i.length=this.masks.length=0,this.isSplit=!1,n&&(this._data.animTime=n.totalTime(),n.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new w_(t,e)}static register(t){Ya=Ya||t||window.gsap,Ya&&(Ja=Ya.utils.toArray,Ed=Ya.core.context||Ed),!Ad&&window.innerWidth>0&&(Za=document.fonts,Ad=!0)}};T_.version="3.15.1";var $a=T_;var E_="1.3.27";function R_(s,t,e){return Math.max(s,Math.min(t,e))}function xT(s,t,e){return(1-e)*s+e*t}function vT(s,t,e,i){return xT(s,t,1-Math.exp(-e*i))}function yT(s,t){return(s%t+t)%t}var ST=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let e=R_(0,this.currentTime/this.duration,1);t=e>=1;let i=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=vT(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:i,easing:n,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function MT(s,t){let e;return function(...i){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,i)},t)}}var bT=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(s,t,{autoResize:e=!0,debounce:i=250}={}){this.wrapper=s,this.content=t,e&&(this.debouncedResize=MT(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},P_=class{events={};emit(s,...t){let e=this.events[s]||[];for(let i=0,n=e.length;i<n;i++)e[i]?.(...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{this.events[s]=this.events[s]?.filter(e=>t!==e)}}off(s,t){this.events[s]=this.events[s]?.filter(e=>t!==e)}destroy(){this.events={}}},TT=100/6,Zs={passive:!1};function A_(s,t){return s===1?TT:s===2?t:1}var wT=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new P_;constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Zs),this.element.addEventListener("touchstart",this.onTouchStart,Zs),this.element.addEventListener("touchmove",this.onTouchMove,Zs),this.element.addEventListener("touchend",this.onTouchEnd,Zs)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Zs),this.element.removeEventListener("touchstart",this.onTouchStart,Zs),this.element.removeEventListener("touchmove",this.onTouchMove,Zs),this.element.removeEventListener("touchend",this.onTouchEnd,Zs)}onTouchStart=s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})};onTouchMove=s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,i=-(t-this.touchStart.x)*this.options.touchMultiplier,n=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:s})};onTouchEnd=s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})};onWheel=s=>{let{deltaX:t,deltaY:e,deltaMode:i}=s,n=A_(i,this.window.width),r=A_(i,this.window.height);t*=n,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},C_=s=>Math.min(1,1.001-2**(-10*s)),I_=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new ST;emitter=new P_;dimensions;virtualScroll;constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:x=!0,prevent:m,virtualScroll:g,overscroll:y=!0,autoRaf:M=!1,anchors:v=!1,autoToggle:b=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:_=!1,naiveDimensions:S=_,stopInertiaOnNavigate:C=!1,respectReducedMotion:A=!0}={}){window.lenisVersion=E_,window.lenis||(window.lenis={}),window.lenis.version=E_,d==="horizontal"&&(window.lenis.horizontal=!0),n===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=C_:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:i,syncTouch:n,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:p,autoResize:x,prevent:m,virtualScroll:g,overscroll:y,autoRaf:M,anchors:v,autoToggle:b,allowNestedScroll:T,naiveDimensions:S,stopInertiaOnNavigate:C,respectReducedMotion:A},this.dimensions=new bT(s,t,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new wT(e,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}onScrollEnd=s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()};setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}onClick=s=>{let t=s.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),e=new URL(window.location.href);if(this.options.anchors){let i=t.find(n=>e.host===n.host&&e.pathname===n.pathname&&n.hash);if(i){let n=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(i.hash);this.scrollTo(r,n);return}}if(this.options.stopInertiaOnNavigate&&t.some(i=>e.host===i.host&&e.pathname!==i.pathname)){this.reset();return}};onPointerDown=s=>{s.button===1&&this.reset()};isTouchOnSelectionHandle(s){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=s.targetTouches[0]??s.changedTouches[0];if(!e)return!1;let i=t.getRangeAt(0).getClientRects();if(i.length===0)return!1;let n=i[0],r=i[i.length-1],o=40,a=Math.hypot(e.clientX-n.left,e.clientY-n.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}onVirtualScroll=s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:i}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:i}),i.ctrlKey||i.lenisStopPropagation)return;let n=i.type.includes("touch"),r=i.type.includes("wheel");if(n&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&n&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||n&&p.hasAttribute?.("data-lenis-prevent-touch")||r&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();let u=n&&this.options.syncTouch,f=n&&i.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(s,{offset:t=0,immediate:e=!1,lock:i=!1,programmatic:n=!0,lerp:r=n?this.options.lerp:void 0,duration:o=n?this.options.duration:void 0,easing:a=n?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(n?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=s,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(p=u),p){if(this.options.wrapper!==window){let v=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?v.left:v.top}let x=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),y=getComputedStyle(this.rootElement),M=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);u=(this.isHorizontal?x.left:x.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(M)?0:M)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;let p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=R_(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=C_:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:r,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,x)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),n&&(this.targetScroll=p),x||this.emit(),x&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){let i=Date.now();s._lenis||(s._lenis={});let n=s._lenis,r,o,a,l,c,h,d,u,f,p;if(i-(n.time??0)>2e3){n.time=Date.now();let T=window.getComputedStyle(s);if(n.computedStyle=T,r=["auto","overlay","scroll"].includes(T.overflowX),o=["auto","overlay","scroll"].includes(T.overflowY),c=["auto"].includes(T.overscrollBehaviorX),h=["auto"].includes(T.overscrollBehaviorY),n.hasOverflowX=r,n.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,u=s.scrollHeight,f=s.clientWidth,p=s.clientHeight,a=d>f,l=u>p,n.isScrollableX=a,n.isScrollableY=l,n.scrollWidth=d,n.scrollHeight=u,n.clientWidth=f,n.clientHeight=p,n.hasOverscrollBehaviorX=c,n.hasOverscrollBehaviorY=h}else a=n.isScrollableX,l=n.isScrollableY,r=n.hasOverflowX,o=n.hasOverflowY,d=n.scrollWidth,u=n.scrollHeight,f=n.clientWidth,p=n.clientHeight,c=n.hasOverscrollBehaviorX,h=n.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let x=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,g,y,M,v,b;if(x==="horizontal")m=Math.round(s.scrollLeft),g=d-f,y=t,M=r,v=a,b=c;else if(x==="vertical")m=Math.round(s.scrollTop),g=u-p,y=e,M=o,v=l,b=h;else return!1;return!b&&(m>=g||m<=0)?!0:(y>0?m<g:m>0)&&M&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?yT(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};Oe.registerPlugin(qt,$a);function yA(){window.__h2&&(window.__h2(),window.__h2=null);let s=matchMedia("(prefers-reduced-motion: reduce)").matches,t=[],e=null;if(!s){e=new I_({duration:1.15,smoothWheel:!0}),e.on("scroll",qt.update);let a=l=>e.raf(l*1e3);Oe.ticker.add(a),Oe.ticker.lagSmoothing(0),t.push(()=>{Oe.ticker.remove(a),e.destroy()}),document.querySelectorAll('a[href^="#"]').forEach(l=>l.addEventListener("click",c=>{let h=l.getAttribute("href");h.length>1&&document.querySelector(h)&&(c.preventDefault(),e.scrollTo(h,{offset:-20}))}))}let i=document.getElementById("h2-canvas"),n=0,r;if(i){r=new Qc({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"}),r.setPixelRatio(Math.min(devicePixelRatio,2));let a=new ko,l=new Pi(38,1,.1,100);l.position.set(0,0,9);let c=new es;a.add(c);class h extends Gi{getPoint(k,L=new B){let z=k*Math.PI*2,V=1+Math.sin(z)**2;return L.set(3.1*Math.cos(z)/V,1.7*Math.sin(z)*Math.cos(z)/V-.35,.55*Math.sin(2*z)*.7)}}let d=(I,k)=>new gn({transparent:!0,depthWrite:!1,blending:I?Kr:Ds,side:I?fi:Bn,uniforms:{uT:{value:0},uA:{value:I?.35:1},uC:{value:new ne("#c4ff2e")}},vertexShader:"varying vec3 vN;varying vec3 vV;varying vec2 vU;void main(){vU=uv;vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vV=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}",fragmentShader:"uniform float uT;uniform float uA;uniform vec3 uC;varying vec3 vN;varying vec3 vV;varying vec2 vU;void main(){float f=pow(1.-abs(dot(normalize(vN),normalize(vV))),2.2);float s=smoothstep(.55,1.,sin(vU.x*60.-uT*2.2)*.5+.5);vec3 base=uC*(.35+.9*f);vec3 col=base+vec3(.9,1.,.6)*s*.35+vec3(1.)*pow(f,5.)*.6;gl_FragColor=vec4(col,uA*(.55+.45*f));}"}),u=i.dataset.variant||"home",f,p,x,m,g=new Rs(.5,.12,24,64);if(u==="home")f=new ei(new Zr(new h,320,.3,36,!0),d(!1)),p=new ei(new Zr(new h,160,.62,20,!0),d(!0)),x=new ei(g,d(!1)),m=new ei(g,d(!1)),x.position.set(-1.45,1.9,0),m.position.set(1.45,1.9,0),c.add(p,f,x,m);else{let I=u==="one"?new Qo(1.5,.34,320,32,2,3):u==="store"?new Rs(1.7,.55,48,160):new $o(2.1,2);f=new ei(I,d(!1)),p=new ei(I.clone().scale(1.06,1.06,1.06),d(!0)),x=new ei(new Rs(2.9,.02,8,160),d(!1)),m=new ei(new Rs(3.5,.015,8,160),d(!1)),x.rotation.x=1.2,m.rotation.y=1.1,c.add(p,f,x,m)}let y=1400,M=new Float32Array(y*3);for(let I=0;I<y;I++)M.set([(Math.random()-.5)*22,(Math.random()-.5)*12,(Math.random()-.5)*10-2],I*3);let v=new Li;v.setAttribute("position",new mn(M,3));let b=new Wo(v,new qr({color:"#c4ff2e",size:.028,transparent:!0,opacity:.55,depthWrite:!1,blending:Kr}));a.add(b);let T={mx:0,my:0,sx:0,sy:0,scroll:0,vis:!0},_=()=>{let I=i.clientWidth,k=i.clientHeight;r.setSize(I,k,!1),l.aspect=I/k;let L=I>900;c.position.set(L?3.7:0,L?-.2:2.2,0);let z=L?.8:Math.min(.62,I/640);c.scale.setScalar(z),l.updateProjectionMatrix()};_(),addEventListener("resize",_),t.push(()=>removeEventListener("resize",_));let S=I=>{T.mx=I.clientX/innerWidth-.5,T.my=I.clientY/innerHeight-.5};addEventListener("pointermove",S,{passive:!0}),t.push(()=>removeEventListener("pointermove",S));let C=new IntersectionObserver(([I])=>T.vis=I.isIntersecting);C.observe(i),t.push(()=>C.disconnect());let A=new ea,N=()=>{if(n=requestAnimationFrame(N),!T.vis)return;let I=A.getElapsedTime();T.sx+=(T.mx-T.sx)*.05,T.sy+=(T.my-T.sy)*.05,[f,p,x,m].forEach(k=>k.material.uniforms.uT.value=I),c.rotation.y=Math.sin(I*.35)*.35+T.sx*.9+T.scroll*Math.PI*1.2,c.rotation.x=T.sy*.5+T.scroll*.4,c.rotation.z=Math.sin(I*.25)*.05,c.position.y+=((i.clientWidth>900?-.2:2.2)+Math.sin(I*.8)*.12-c.position.y)*.05,b.rotation.y=I*.02+T.scroll*.8,b.position.y=T.scroll*3,r.render(a,l)};s?(N(),cancelAnimationFrame(n)):N(),qt.create({trigger:"#hero",start:"top top",end:"bottom top",scrub:!0,onUpdate:I=>T.scroll=I.progress}),t.push(()=>{cancelAnimationFrame(n),r.dispose(),f.geometry.dispose(),p.geometry.dispose(),g.dispose()})}let o=Oe.context(()=>{let a=document.querySelector(".h2-split");if(a&&!s){let d=$a.create(a,{type:"lines,words",mask:"lines",linesClass:"h2-line"});Oe.from(d.words,{yPercent:115,duration:1.3,ease:"expo.out",stagger:.07,delay:.15}),Oe.from(".h2-eyebrow,.h2-lead,.h2-actions,.h2-hint",{y:30,opacity:0,duration:1.1,ease:"expo.out",stagger:.12,delay:.7})}s||Oe.to(".h2-hero-copy",{yPercent:-18,opacity:0,ease:"none",scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom 20%",scrub:!0}});let l=document.querySelector(".h2-words");if(l){let d=$a.create(l,{type:"words"});s?Oe.set(d.words,{opacity:1}):Oe.fromTo(d.words,{opacity:.14},{opacity:1,ease:"none",stagger:.5,scrollTrigger:{trigger:l,start:"top 78%",end:"bottom 45%",scrub:!0}})}document.querySelectorAll(".h2-title,.h2-giant").forEach(d=>{s||Oe.from(d,{y:70,opacity:0,filter:"blur(12px)",duration:1.2,ease:"expo.out",scrollTrigger:{trigger:d,start:"top 85%"}})}),document.querySelectorAll(".h2-label").forEach(d=>{s||Oe.from(d,{x:-24,opacity:0,duration:1,ease:"expo.out",scrollTrigger:{trigger:d,start:"top 92%"}})});let c=Oe.utils.toArray(".h2-card");c.forEach((d,u)=>{s||u===c.length-1||Oe.to(d.querySelector(".h2-card-in"),{scale:.92-(c.length-u)*.01,opacity:.45,filter:"blur(3px)",ease:"none",scrollTrigger:{trigger:c[u+1],start:"top 82%",end:"top 18%",scrub:!0}})}),Oe.matchMedia().add("(min-width: 861px) and (prefers-reduced-motion: no-preference)",()=>{[".h2-process",".h2-work"].forEach(d=>{let u=document.querySelector(d);if(!u)return;let f=u.querySelector(".h2-track"),p=u.querySelector(".h2-bar i"),x=()=>Math.max(0,f.scrollWidth-innerWidth+parseFloat(getComputedStyle(f).paddingLeft)*0+80);Oe.to(f,{x:()=>-x(),ease:"none",scrollTrigger:{trigger:u,start:"top top",end:()=>"+="+x(),pin:u.querySelector(".h2-pin"),scrub:.6,invalidateOnRefresh:!0,anticipatePin:1,onUpdate:m=>{p&&(p.style.transform=`scaleX(${m.progress})`)}}}),u.querySelectorAll(".h2-step,.h2-project").forEach(m=>{Oe.from(m,{opacity:.25,scale:.94,ease:"none",scrollTrigger:{trigger:m,containerAnimation:null,start:"left 100%",toggleActions:"play none none none"}})})})}),document.querySelectorAll(".h2-shot").forEach(d=>{let u=d.querySelector("img");d.addEventListener("pointermove",f=>{let p=d.getBoundingClientRect();Oe.to(u,{x:(f.clientX-p.left-p.width/2)*.03,y:(f.clientY-p.top-p.height/2)*.03,scale:1.06,duration:.8,ease:"power3.out"})}),d.addEventListener("pointerleave",()=>Oe.to(u,{x:0,y:0,scale:1,duration:.9,ease:"power3.out"}))}),document.querySelectorAll(".h2-actions .button,.h2-ghost").forEach(d=>{d.addEventListener("pointermove",u=>{let f=d.getBoundingClientRect();Oe.to(d,{x:(u.clientX-f.left-f.width/2)*.25,y:(u.clientY-f.top-f.height/2)*.35,duration:.5,ease:"power3.out"})}),d.addEventListener("pointerleave",()=>Oe.to(d,{x:0,y:0,duration:.7,ease:"elastic.out(1,.5)"}))})});setTimeout(()=>qt.refresh(),600),addEventListener("load",()=>qt.refresh()),window.__h2=()=>{o.revert(),qt.getAll().forEach(a=>a.kill()),t.forEach(a=>{try{a()}catch{}}),cancelAnimationFrame(n)}}export{yA as mountHome2};
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
