(()=>{var ah=0,gl=1,oh=2;var Js=1,lh=2,xs=3,_i=0,Zt=1,Qt=2,zi=0,vs=1,xl=2,vl=3,_l=4,wa=5;var Kn=100,ch=101,hh=102,uh=103,dh=104,Ea=200,_s=201,fh=202,ph=203,yl=204,Sl=205,mh=206,gh=207,xh=208,vh=209,_h=210,yh=211,Sh=212,Mh=213,bh=214,qr=0,Yr=1,Zr=2,os=3,$r=4,Jr=5,Kr=6,Qr=7,Ml=0,wh=1,Eh=2,Nn=0,bl=1,wl=2,El=3,Tl=4,Al=5,Rl=6,Cl=7;var Pl=300,ki=301,ys=302,Ta=303,Aa=304,ls=1e3,Ln=1001,jr=1002,Ct=1003,Th=1004;var Ks=1005;var yt=1006,Ra=1007;var an=1008;var Ht=1009,Il=1010,Ll=1011,Ss=1012,Ca=1013,bn=1014,wn=1015,En=1016,Pa=1017,Ia=1018,Hi=1020,Dl=35902,Nl=35899,Ul=1021,Fl=1022,on=1023,Yn=1026,Qn=1027,Qs=1028,La=1029,yi=1030,Da=1031;var Na=1033,js=33776,er=33777,tr=33778,nr=33779,Ua=35840,Fa=35841,Oa=35842,Ba=35843,za=36196,ka=37492,Ha=37496,Va=37488,Ga=37489,ir=37490,Wa=37491,Xa=37808,qa=37809,Ya=37810,Za=37811,$a=37812,Ja=37813,Ka=37814,Qa=37815,ja=37816,eo=37817,to=37818,no=37819,io=37820,so=37821,ro=36492,ao=36494,oo=36495,lo=36283,co=36284,sr=36285,ho=36286;var Us=2300,ea=2301,Wr=2302,ll=2303,cl=2400,hl=2401,ul=2402;var Ah=3200;var Ol=0,Rh=1,jn="",nn="srgb",Ni="srgb-linear",Fs="linear",Je="srgb";var Xr=7680;var Ch=519,Ph=512,Ih=513,Lh=514,Bl=515,Dh=516,Nh=517,zl=518,kl=519,Uh=35044;var Hl="300 es",xn=2e3,Os=2001;function Ku(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fh(){let i=Bs("canvas");return i.style.display="block",i}var Dc={},cs=null;function Vl(...i){let e="THREE."+i.shift();cs?cs("log",e,...i):console.log(e,...i)}function Oh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ae(...i){i=Oh(i);let e="THREE."+i.shift();if(cs)cs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ce(...i){i=Oh(i);let e="THREE."+i.shift();if(cs)cs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ns(...i){let e=i.join(" ");e in Dc||(Dc[e]=!0,Ae(...i))}function Bh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var zh={[qr]:qr,[Zr]:Kr,[$r]:$r,[os]:Jr,[Yr]:Yr,[Kr]:Zr,[Qr]:Qr,[Jr]:os},Dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ko=Math.PI/180,ta=180/Math.PI;function rr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Xe(i,e,t){return Math.max(e,Math.min(t,i))}function ju(i,e){return(i%e+e)%e}function Ho(i,e,t){return(1-t)*i+t*e}function kh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ed(i,e){if(e.constructor===Float32Array)return i;let t=Gl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function td(i,e){if(e.constructor===Float32Array)return i;let t=Gl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Ue=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(p!==_||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+p*_;m<0&&(u=-u,f=-f,g=-g,_=-_,m=-m);let d=1-o;if(m<.9995){let S=Math.acos(m),A=Math.sin(S);d=Math.sin(d*S)/A,o=Math.sin(o*S)/A,l=l*d+u*o,c=c*d+f*o,h=h*d+g*o,p=p*d+_*o}else{l=l*d+u*o,c=c*d+f*o,h=h*d+g*o,p=p*d+_*o;let S=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=S,c*=S,h*=S,p*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*p+l*f-c*u,e[t+1]=l*g+h*u+c*p-o*f,e[t+2]=c*g+h*f+o*u-l*p,e[t+3]=h*g-o*p-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*p+c*f*g,this._y=c*f*p-u*h*g,this._z=c*h*g+u*f*p,this._w=c*h*p-u*f*g;break;case"YXZ":this._x=u*h*p+c*f*g,this._y=c*f*p-u*h*g,this._z=c*h*g-u*f*p,this._w=c*h*p+u*f*g;break;case"ZXY":this._x=u*h*p-c*f*g,this._y=c*f*p+u*h*g,this._z=c*h*g+u*f*p,this._w=c*h*p-u*f*g;break;case"ZYX":this._x=u*h*p-c*f*g,this._y=c*f*p+u*h*g,this._z=c*h*g-u*f*p,this._w=c*h*p+u*f*g;break;case"YZX":this._x=u*h*p+c*f*g,this._y=c*f*p+u*h*g,this._z=c*h*g-u*f*p,this._w=c*h*p-u*f*g;break;case"XZY":this._x=u*h*p-c*f*g,this._y=c*f*p-u*h*g,this._z=c*h*g+u*f*p,this._w=c*h*p+u*f*g;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],p=t[10],u=n+o+p;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>p){let f=2*Math.sqrt(1+n-o-p);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-n-p);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+p-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+l*c+a*p-o*h,this.y=n+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vo.copy(this).projectOnVector(e),this.sub(Vo)}reflect(e){return this.sub(Vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vo=new N,Nc=new vn,Pe=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],u=n[2],f=n[5],g=n[8],_=s[0],m=s[3],d=s[6],S=s[1],A=s[4],E=s[7],b=s[2],w=s[5],x=s[8];return r[0]=a*_+o*S+l*b,r[3]=a*m+o*A+l*w,r[6]=a*d+o*E+l*x,r[1]=c*_+h*S+p*b,r[4]=c*m+h*A+p*w,r[7]=c*d+h*E+p*x,r[2]=u*_+f*S+g*b,r[5]=u*m+f*A+g*w,r[8]=u*d+f*E+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*p+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=p*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Go.makeScale(e,t)),this}rotate(e){return Ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Go.makeRotation(-e)),this}translate(e,t){return Ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Go=new Pe,Uc=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fc=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nd(){let i={enabled:!0,workingColorSpace:Ni,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?Fs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ni]:{primaries:e,whitePoint:n,transfer:Fs,toXYZ:Uc,fromXYZ:Fc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:Uc,fromXYZ:Fc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}var ke=nd();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yi,na=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yi===void 0&&(Yi=Bs("canvas")),Yi.width=e.width,Yi.height=e.height;let s=Yi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Bs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},id=0,hs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wo(s[a].image)):r.push(Wo(s[a]))}else r=Wo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Wo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?na.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var sd=0,Xo=new N,Yt=class i extends Dn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=yt,a=an,o=on,l=Ht,c=i.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=rr(),this.name="",this.source=new hs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Xo).x}get height(){return this.source.getSize(Xo).y}get depth(){return this.source.getSize(Xo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ls:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ls:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Pl;Yt.DEFAULT_ANISOTROPY=1;var nt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],p=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,E=(f+1)/2,b=(d+1)/2,w=(h+u)/4,x=(p+_)/4,M=(g+m)/4;return A>E&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=w/n,r=x/n):E>b?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=w/s,r=M/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=x/r,s=M/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(p-_)*(p-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(p-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ia=class extends Dn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Yt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new hs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zt=class extends ia{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},zs=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var sa=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ke=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,p,u,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,p,u,f,g,_,m)}set(e,t,n,s,r,a,o,l,c,h,p,u,f,g,_,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=f,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),a=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*p,g=o*h,_=o*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*p,g=c*h,_=c*p;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*p,g=c*h,_=c*p;t[0]=u-_*o,t[4]=-a*p,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*p,g=o*h,_=o*p;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*p,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*p,t[8]=g*p+f,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*p+g,t[10]=u-_*p}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=u*p+_,t[5]=a*h,t[9]=f*p-g,t[2]=g*p-f,t[6]=o*h,t[10]=_*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rd,e,ad)}lookAt(e,t,n){let s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),ai.crossVectors(n,en),ai.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ai.crossVectors(n,en)),ai.normalize(),yr.crossVectors(en,ai),s[0]=ai.x,s[4]=yr.x,s[8]=en.x,s[1]=ai.y,s[5]=yr.y,s[9]=en.y,s[2]=ai.z,s[6]=yr.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],d=n[14],S=n[3],A=n[7],E=n[11],b=n[15],w=s[0],x=s[4],M=s[8],U=s[12],P=s[1],L=s[5],F=s[9],V=s[13],R=s[2],B=s[6],G=s[10],H=s[14],ee=s[3],q=s[7],Q=s[11],j=s[15];return r[0]=a*w+o*P+l*R+c*ee,r[4]=a*x+o*L+l*B+c*q,r[8]=a*M+o*F+l*G+c*Q,r[12]=a*U+o*V+l*H+c*j,r[1]=h*w+p*P+u*R+f*ee,r[5]=h*x+p*L+u*B+f*q,r[9]=h*M+p*F+u*G+f*Q,r[13]=h*U+p*V+u*H+f*j,r[2]=g*w+_*P+m*R+d*ee,r[6]=g*x+_*L+m*B+d*q,r[10]=g*M+_*F+m*G+d*Q,r[14]=g*U+_*V+m*H+d*j,r[3]=S*w+A*P+E*R+b*ee,r[7]=S*x+A*L+E*B+b*q,r[11]=S*M+A*F+E*G+b*Q,r[15]=S*U+A*V+E*H+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],d=e[15],S=l*f-c*u,A=o*f-c*p,E=o*u-l*p,b=a*f-c*h,w=a*u-l*h,x=a*p-o*h;return t*(_*S-m*A+d*E)-n*(g*S-m*b+d*w)+s*(g*A-_*b+d*x)-r*(g*E-_*w+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],d=e[15],S=t*o-n*a,A=t*l-s*a,E=t*c-r*a,b=n*l-s*o,w=n*c-r*o,x=s*c-r*l,M=h*_-p*g,U=h*m-u*g,P=h*d-f*g,L=p*m-u*_,F=p*d-f*_,V=u*d-f*m,R=S*V-A*F+E*L+b*P-w*U+x*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/R;return e[0]=(o*V-l*F+c*L)*B,e[1]=(s*F-n*V-r*L)*B,e[2]=(_*x-m*w+d*b)*B,e[3]=(u*w-p*x-f*b)*B,e[4]=(l*P-a*V-c*U)*B,e[5]=(t*V-s*P+r*U)*B,e[6]=(m*E-g*x-d*A)*B,e[7]=(h*x-u*E+f*A)*B,e[8]=(a*F-o*P+c*M)*B,e[9]=(n*P-t*F-r*M)*B,e[10]=(g*w-_*E+d*S)*B,e[11]=(p*E-h*w-f*S)*B,e[12]=(o*U-a*L-l*M)*B,e[13]=(t*L-n*U+s*M)*B,e[14]=(_*A-g*b-m*S)*B,e[15]=(h*b-p*A+u*S)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,p=o+o,u=r*c,f=r*h,g=r*p,_=a*h,m=a*p,d=o*p,S=l*c,A=l*h,E=l*p,b=n.x,w=n.y,x=n.z;return s[0]=(1-(_+d))*b,s[1]=(f+E)*b,s[2]=(g-A)*b,s[3]=0,s[4]=(f-E)*w,s[5]=(1-(u+d))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(g+A)*x,s[9]=(m-S)*x,s[10]=(1-(u+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Zi.set(s[0],s[1],s[2]).length(),o=Zi.set(s[4],s[5],s[6]).length(),l=Zi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),yn.copy(this);let c=1/a,h=1/o,p=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=p,yn.elements[9]*=p,yn.elements[10]*=p,t.setFromRotationMatrix(yn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=xn,l=!1){let c=this.elements,h=2*r/(t-e),p=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===xn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Os)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=xn,l=!1){let c=this.elements,h=2/(t-e),p=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===xn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Os)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zi=new N,yn=new Ke,rd=new N(0,0,0),ad=new N(1,1,1),ai=new N,yr=new N,en=new N,Oc=new Ke,Bc=new vn,di=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};di.DEFAULT_ORDER="XYZ";var us=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},od=0,zc=new N,$i=new vn,kn=new Ke,Sr=new N,Cs=new N,ld=new N,cd=new vn,kc=new N(1,0,0),Hc=new N(0,1,0),Vc=new N(0,0,1),Gc={type:"added"},hd={type:"removed"},Ji={type:"childadded",child:null},qo={type:"childremoved",child:null},Jt=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new di,n=new vn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Pe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(kc,e)}rotateY(e){return this.rotateOnAxis(Hc,e)}rotateZ(e){return this.rotateOnAxis(Vc,e)}translateOnAxis(e,t){return zc.copy(e).applyQuaternion(this.quaternion),this.position.add(zc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kc,e)}translateY(e){return this.translateOnAxis(Hc,e)}translateZ(e){return this.translateOnAxis(Vc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sr.copy(e):Sr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Cs,Sr,this.up):kn.lookAt(Sr,Cs,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(kn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hd),qo.child=e,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,ld),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,cd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Jt.DEFAULT_UP=new N(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xn=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ud={type:"move"},ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ud)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Yo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ke.workingColorSpace){if(e=ju(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Yo(a,r,e+1/3),this.g=Yo(a,r,e),this.b=Yo(a,r,e-1/3)}return ke.colorSpaceToWorking(this,s),this}setStyle(e,t=nn){function n(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){let n=Hh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return ke.workingToColorSpace(Ot.copy(this),e),Math.round(Xe(Ot.r*255,0,255))*65536+Math.round(Xe(Ot.g*255,0,255))*256+Math.round(Xe(Ot.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.workingToColorSpace(Ot.copy(this),t);let n=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ke.workingColorSpace){return ke.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=nn){ke.workingToColorSpace(Ot.copy(this),e);let t=Ot.r,n=Ot.g,s=Ot.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Mr);let n=Ho(oi.h,Mr.h,t),s=Ho(oi.s,Mr.s,t),r=Ho(oi.l,Mr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new qe;qe.NAMES=Hh;var Zn=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Sn=new N,Hn=new N,Zo=new N,Vn=new N,Ki=new N,Qi=new N,Wc=new N,$o=new N,Jo=new N,Ko=new N,Qo=new nt,jo=new nt,el=new nt,ui=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Sn.subVectors(e,t),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Sn.subVectors(s,t),Hn.subVectors(n,t),Zo.subVectors(e,t);let a=Sn.dot(Sn),o=Sn.dot(Hn),l=Sn.dot(Zo),c=Hn.dot(Hn),h=Hn.dot(Zo),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Qo.setScalar(0),jo.setScalar(0),el.setScalar(0),Qo.fromBufferAttribute(e,t),jo.fromBufferAttribute(e,n),el.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Qo,r.x),a.addScaledVector(jo,r.y),a.addScaledVector(el,r.z),a}static isFrontFacing(e,t,n,s){return Sn.subVectors(n,t),Hn.subVectors(e,t),Sn.cross(Hn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Sn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ki.subVectors(s,n),Qi.subVectors(r,n),$o.subVectors(e,n);let l=Ki.dot($o),c=Qi.dot($o);if(l<=0&&c<=0)return t.copy(n);Jo.subVectors(e,s);let h=Ki.dot(Jo),p=Qi.dot(Jo);if(h>=0&&p<=h)return t.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Ki,a);Ko.subVectors(e,r);let f=Ki.dot(Ko),g=Qi.dot(Ko);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Qi,o);let m=h*g-f*p;if(m<=0&&p-h>=0&&f-g>=0)return Wc.subVectors(r,s),o=(p-h)/(p-h+(f-g)),t.copy(s).addScaledVector(Wc,o);let d=1/(m+_+u);return a=_*d,o=u*d,t.copy(n).addScaledVector(Ki,a).addScaledVector(Qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fi=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),wr.subVectors(this.max,Ps),ji.subVectors(e.a,Ps),es.subVectors(e.b,Ps),ts.subVectors(e.c,Ps),li.subVectors(es,ji),ci.subVectors(ts,es),Pi.subVectors(ji,ts);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Pi.z,Pi.y,li.z,0,-li.x,ci.z,0,-ci.x,Pi.z,0,-Pi.x,-li.y,li.x,0,-ci.y,ci.x,0,-Pi.y,Pi.x,0];return!tl(t,ji,es,ts,wr)||(t=[1,0,0,0,1,0,0,0,1],!tl(t,ji,es,ts,wr))?!1:(Er.crossVectors(li,ci),t=[Er.x,Er.y,Er.z],tl(t,ji,es,ts,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gn=[new N,new N,new N,new N,new N,new N,new N,new N],Mn=new N,br=new fi,ji=new N,es=new N,ts=new N,li=new N,ci=new N,Pi=new N,Ps=new N,wr=new N,Er=new N,Ii=new N;function tl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ii.fromArray(i,r);let o=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var xt=new N,Tr=new Ue,dd=0,qt=class extends Dn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uh,this.updateRanges=[],this.gpuType=wn,this.version=0,this._normalizationScale=e!==void 0?Gl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXY(t,Tr.x,Tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ed(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):td(e,this.array)}};var ks=class extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Hs=class extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Bt=class extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},fd=new fi,Is=new N,nl=new N,pi=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);let t=Is.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Is,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(nl)),this.expandByPoint(Is.copy(e.center).sub(nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},pd=0,gn=new Ke,il=new Jt,ns=new N,tn=new fi,Ls=new fi,Rt=new N,kt=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ku(e)?Hs:ks)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Pe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ls.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(tn.min,Ls.min),tn.expandByPoint(Rt),Rt.addVectors(tn.max,Ls.max),tn.expandByPoint(Rt)):(tn.expandByPoint(Ls.min),tn.expandByPoint(Ls.max))}tn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Rt.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(e,c),Rt.add(ns)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new N,l[U]=new N;let h=new N,p=new N,u=new N,f=new Ue,g=new Ue,_=new Ue,m=new N,d=new N;function S(U,P,L){c[U]=c[P]=c[L]=1,h.fromBufferAttribute(n,U),p.fromBufferAttribute(n,P),u.fromBufferAttribute(n,L),f.fromBufferAttribute(r,U),g.fromBufferAttribute(r,P),_.fromBufferAttribute(r,L),p.sub(h),u.sub(h),g.sub(f),_.sub(f);let F=1/(g.x*_.y-_.x*g.y);isFinite(F)&&(m.copy(p).multiplyScalar(_.y).addScaledVector(u,-g.y).multiplyScalar(F),d.copy(u).multiplyScalar(g.x).addScaledVector(p,-_.x).multiplyScalar(F),o[U].add(m),o[P].add(m),o[L].add(m),l[U].add(d),l[P].add(d),l[L].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,P=A.length;U<P;++U){let L=A[U],F=L.start,V=L.count;for(let R=F,B=F+V;R<B;R+=3)S(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let E=new N,b=new N,w=new N,x=new N;function M(U){w.fromBufferAttribute(s,U),x.copy(w);let P=o[U];E.copy(P),E.sub(w.multiplyScalar(w.dot(P))).normalize(),b.crossVectors(x,P);let F=b.dot(l[U])<0?-1:1;a.setXYZW(U,E.x,E.y,E.z,F)}for(let U=0,P=n.count;U<P;++U)c[U]&&M(U);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,p=new N;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let d=0;d<h;d++)u[g++]=c[f++]}return new qt(u,h,p)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let f=c[p];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],p=r[c];for(let u=0,f=p.length;u<f;u++)h.push(p[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var sl=new N,md=new N,gd=new Pe,sn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=sl.subVectors(n,t).cross(md.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(sl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||gd.getNormalMatrix(e),s=this.coplanarPoint(sl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},xd=0,$n=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=vs,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=Sl,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new sn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ue().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Wn=new N,rl=new N,Ar=new N,Rr=new N,Ui=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){rl.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(rl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ar),o=Rr.dot(this.direction),l=-Rr.dot(Ar),c=Rr.lengthSq(),h=Math.abs(1-a*a),p,u,f,g;if(h>0)if(p=a*l-o,u=a*o-l,g=r*h,p>=0)if(u>=-g)if(u<=g){let _=1/h;p*=_,u*=_,f=p*(p+a*u+2*o)+u*(a*p+u+2*l)+c}else u=r,p=Math.max(0,-(a*u+o)),f=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(a*u+o)),f=-p*p+u*(u+2*l)+c;else u<=-g?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+u*(u+2*l)+c):u<=g?(p=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+u*(u+2*l)+c);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),f=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(rl).addScaledVector(Ar,u),f}intersectSphere(e,t){if(e.radius<0)return null;Wn.subVectors(e.center,this.origin);let n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,d=n.x-a.x,S=n.y-a.y,A=n.z-a.z,E=Math.abs(l),b=Math.abs(c),w=Math.abs(h),x,M,U,P,L,F,V,R,B,G,H,ee;if(E>=b&&E>=w?(U=l,F=p,B=g,ee=d,l>=0?(x=c,M=h,P=u,L=f,V=_,R=m,G=S,H=A):(x=h,M=c,P=f,L=u,V=m,R=_,G=A,H=S)):b>=w?(U=c,F=u,B=_,ee=S,c>=0?(x=h,M=l,P=f,L=p,V=m,R=g,G=A,H=d):(x=l,M=h,P=p,L=f,V=g,R=m,G=d,H=A)):(U=h,F=f,B=m,ee=A,h>=0?(x=l,M=c,P=p,L=u,V=g,R=_,G=d,H=S):(x=c,M=l,P=u,L=p,V=_,R=g,G=S,H=d)),U===0)return null;let q=x/U,Q=M/U,j=1/U,Se=P-q*F,De=L-Q*F,$=V-q*B,pe=R-Q*B,ve=G-q*ee,Ee=H-Q*ee,me=ve*pe-Ee*$,Fe=Se*Ee-De*ve,mt=$*De-pe*Se;if(s){if(me<0||Fe<0||mt<0)return null}else if((me<0||Fe<0||mt<0)&&(me>0||Fe>0||mt>0))return null;let Re=me+Fe+mt;if(Re===0)return null;let Qe=j*(me*F+Fe*B+mt*ee);return(Re>0?Qe<0:Qe>0)?null:this.at(Qe/Re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mi=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xc=new Ke,Li=new Ui,Cr=new pi,qc=new N,Pr=new N,Ir=new N,Lr=new N,al=new N,Dr=new N,Yc=new N,Nr=new N,rt=class extends Jt{constructor(e=new kt,t=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(al.fromBufferAttribute(p,e),a?Dr.addScaledVector(al,h):Dr.addScaledVector(al.sub(t),h))}t.add(Dr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(Cr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Cr,qc)===null||Li.origin.distanceToSquared(qc)>(e.far-e.near)**2))&&(Xc.copy(r).invert(),Li.copy(e.ray).applyMatrix4(Xc),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],d=a[m.materialIndex],S=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let E=S,b=A;E<b;E+=3){let w=o.getX(E),x=o.getX(E+1),M=o.getX(E+2);s=Ur(this,d,e,n,c,h,p,w,x,M),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,d=_;m<d;m+=3){let S=o.getX(m),A=o.getX(m+1),E=o.getX(m+2);s=Ur(this,a,e,n,c,h,p,S,A,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],d=a[m.materialIndex],S=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=S,b=A;E<b;E+=3){let w=E,x=E+1,M=E+2;s=Ur(this,d,e,n,c,h,p,w,x,M),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,d=_;m<d;m+=3){let S=m,A=m+1,E=m+2;s=Ur(this,a,e,n,c,h,p,S,A,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function vd(i,e,t,n,s,r,a,o){let l;if(e.side===Zt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===_i,o),l===null)return null;Nr.copy(o),Nr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Nr);return c<t.near||c>t.far?null:{distance:c,point:Nr.clone(),object:i}}function Ur(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Pr),i.getVertexPosition(l,Ir),i.getVertexPosition(c,Lr);let h=vd(i,e,t,n,Pr,Ir,Lr,Yc);if(h){let p=new N;ui.getBarycoord(Yc,Pr,Ir,Lr,p),s&&(h.uv=ui.getInterpolatedAttribute(s,o,l,c,p,new Ue)),r&&(h.uv1=ui.getInterpolatedAttribute(r,o,l,c,p,new Ue)),a&&(h.normal=ui.getInterpolatedAttribute(a,o,l,c,p,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new N,materialIndex:0};ui.getNormal(Pr,Ir,Lr,u.normal),h.face=u,h.barycoord=p}return h}var Fi=class extends Yt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ct,h=Ct,p,u){super(null,a,o,l,c,h,s,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Di=new pi,_d=new Ue(.5,.5),Fr=new N,Oi=class{constructor(e=new sn,t=new sn,n=new sn,s=new sn,r=new sn,a=new sn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],u=r[6],f=r[7],g=r[8],_=r[9],m=r[10],d=r[11],S=r[12],A=r[13],E=r[14],b=r[15];if(s[0].setComponents(c-a,f-h,d-g,b-S).normalize(),s[1].setComponents(c+a,f+h,d+g,b+S).normalize(),s[2].setComponents(c+o,f+p,d+_,b+A).normalize(),s[3].setComponents(c-o,f-p,d-_,b-A).normalize(),n)s[4].setComponents(l,u,m,E).normalize(),s[5].setComponents(c-l,f-u,d-m,b-E).normalize();else if(s[4].setComponents(c-l,f-u,d-m,b-E).normalize(),t===xn)s[5].setComponents(c+l,f+u,d+m,b+E).normalize();else if(t===Os)s[5].setComponents(l,u,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){Di.center.set(0,0,0);let t=_d.distanceTo(e.center);return Di.radius=.7071067811865476+t,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Fr.x=s.normal.x>0?e.max.x:e.min.x,Fr.y=s.normal.y>0?e.max.y:e.min.y,Fr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zc=new Ke,ra=class i{constructor(){this.coordinateSystem=xn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Zc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Oi),n[s].setFromProjectionMatrix(Zc,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Oi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var fs=class extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},aa=new N,oa=new N,$c=new Ke,Ds=new Ui,Or=new pi,ol=new N,Jc=new N,Vs=class extends Jt{constructor(e=new kt,t=new fs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)aa.fromBufferAttribute(t,s-1),oa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=aa.distanceTo(oa);e.setAttribute("lineDistance",new Bt(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Or.radius+=r,e.ray.intersectsSphere(Or)===!1)return;$c.copy(s).invert(),Ds.copy(e.ray).applyMatrix4($c);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){let d=h.getX(_),S=h.getX(_+1),A=Br(this,e,Ds,l,d,S,_);A&&t.push(A)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),d=Br(this,e,Ds,l,_,m,g-1);d&&t.push(d)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){let d=Br(this,e,Ds,l,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){let _=Br(this,e,Ds,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Br(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(aa.fromBufferAttribute(o,s),oa.fromBufferAttribute(o,r),t.distanceSqToSegment(aa,oa,ol,Jc)>n)return;ol.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ol);if(!(c<e.near||c>e.far))return{distance:c,point:Jc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var la=class extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Kc=new Ke,dl=new Ui,zr=new pi,kr=new N,Gs=class extends Jt{constructor(e=new kt,t=new la){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(s),zr.radius+=r,e.ray.intersectsSphere(zr)===!1)return;Kc.copy(s).invert(),dl.copy(e.ray).applyMatrix4(Kc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,_=f;g<_;g++){let m=c.getX(g);kr.fromBufferAttribute(p,m),Qc(kr,m,l,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(p.count,a.start+a.count);for(let g=u,_=f;g<_;g++)kr.fromBufferAttribute(p,g),Qc(kr,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Qc(i,e,t,n,s,r,a){let o=dl.distanceSqToPoint(i);if(o<t){let l=new N;dl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ws=class extends Yt{constructor(e=[],t=ki,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ps=class extends Yt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Jn=class extends Yt{constructor(e,t,n=bn,s,r,a,o=Ct,l=Ct,c,h=Yn,p=1){if(h!==Yn&&h!==Qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Xs=class extends Jn{constructor(e,t=bn,n=ki,s,r,a=Ct,o=Ct,l,c=Yn){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},qs=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ms=class i extends kt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(p,2));function g(_,m,d,S,A,E,b,w,x,M,U){let P=E/x,L=b/M,F=E/2,V=b/2,R=w/2,B=x+1,G=M+1,H=0,ee=0,q=new N;for(let Q=0;Q<G;Q++){let j=Q*L-V;for(let Se=0;Se<B;Se++){let De=Se*P-F;q[_]=De*S,q[m]=j*A,q[d]=R,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[d]=w>0?1:-1,h.push(q.x,q.y,q.z),p.push(Se/x),p.push(1-Q/M),H+=1}}for(let Q=0;Q<M;Q++)for(let j=0;j<x;j++){let Se=u+j+B*Q,De=u+j+B*(Q+1),$=u+(j+1)+B*(Q+1),pe=u+(j+1)+B*Q;l.push(Se,De,pe),l.push(De,$,pe),ee+=6}o.addGroup(f,ee,U),f+=ee,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Kt=class i extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=e/o,u=t/l,f=[],g=[],_=[],m=[];for(let d=0;d<h;d++){let S=d*u-a;for(let A=0;A<c;A++){let E=A*p-r;g.push(E,-S,0),_.push(0,0,1),m.push(A/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){let A=S+c*d,E=S+c*(d+1),b=S+1+c*(d+1),w=S+1+c*d;f.push(A,E,w),f.push(E,b,w)}this.setIndex(f),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ys=class i extends kt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],p=e,u=(t-e)/s,f=new N,g=new Ue;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let d=r+m/n*a;f.x=p*Math.cos(d),f.y=p*Math.sin(d),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}p+=u}for(let _=0;_<s;_++){let m=_*(n+1);for(let d=0;d<n;d++){let S=d+m,A=S,E=S+n+1,b=S+n+2,w=S+1;o.push(A,E,w),o.push(E,b,w)}}this.setIndex(o),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};function Vi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(jc(s))s.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(jc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Vt(i){let e={};for(let t=0;t<i.length;t++){let n=Vi(i[t]);for(let s in n)e[s]=n[s]}return e}function jc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function yd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}var Vh={clone:Vi,merge:Vt},Sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,St=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sd,this.fragmentShader=Md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=yd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new qe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new nt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Pe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ke().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ca=class extends St{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ha=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ua=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function is(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Hr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var gi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},da=class extends gi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cl,endingEnd:cl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case hl:r=e,o=2*t-n;break;case ul:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hl:a=e,l=2*n-t;break;case ul:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,d=-u*m+2*u*_-u*g,S=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,A=(-1-f)*m+(1.5+f)*_+.5*g,E=f*m-f*_;for(let b=0;b!==o;++b)r[b]=d*a[h+b]+S*a[c+b]+A*a[l+b]+E*a[p+b];return r}},fa=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),p=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*p+a[l+u]*h;return r}},pa=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ma=class extends gi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(n-t)/(s-t),_=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*g;return r}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let _=a[c+g],m=a[l+g],d=f*u+g*2,S=p[d],A=p[d+1],E=e*u+g*2,b=h[E],w=h[E+1],x=wd(n,t,S,b,s);r[g]=Gh(x,_,A,w,m)}return r}};function Gh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function bd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function wd(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Gh(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=bd(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var rn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=is(t,this.TimeBufferType),this.values=is(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:is(e.times,Array),values:is(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Hr(e.settings)&&(n.settings={inTangents:is(e.settings.inTangents,Array),outTangents:is(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ma(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case ea:t=this.InterpolantFactoryMethodLinear;break;case Wr:t=this.InterpolantFactoryMethodSmooth;break;case ll:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ae("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return ea;case this.InterpolantFactoryMethodSmooth:return Wr;case this.InterpolantFactoryMethodBezier:return ll}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Hr(this.settings)&&(eh(this.settings.inTangents,e),eh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Hr(this.settings)&&(th(this.settings.inTangents,e),th(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ce("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ce("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ce("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ce("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Qu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ce("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let p=o*n,u=p-n,f=p+n;for(let g=0;g!==n;++g){let _=t[p+g];if(_!==t[u+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let p=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[p+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Hr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function eh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function th(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=ea;var xi=class extends rn{constructor(e,t,n){super(e,t,n)}};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Us;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends rn{constructor(e,t,n,s){super(e,t,n,s)}};ga.prototype.ValueTypeName="color";var xa=class extends rn{constructor(e,t,n,s){super(e,t,n,s)}};xa.prototype.ValueTypeName="number";var va=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)vn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Zs=class extends rn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new va(this.times,this.values,this.getValueSize(),e)}};Zs.prototype.ValueTypeName="quaternion";Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends rn{constructor(e,t,n){super(e,t,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Us;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends rn{constructor(e,t,n,s){super(e,t,n,s)}};_a.prototype.ValueTypeName="vector";var ya=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let f=c[p],g=c[p+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wh=new ya,Sa=class{constructor(e){this.manager=e!==void 0?e:Wh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Sa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vr=new N,Gr=new vn,In=new N,Bi=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vr,Gr,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vr,Gr,In.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Vr,Gr,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vr,Gr,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hi=new N,nh=new Ue,ih=new Ue,Xt=class extends Bi{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,nh,ih),t.subVectors(ih,nh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ko*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ma=class extends Bi{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var ss=-90,rs=1,gs=class extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xt(ss,rs,e,t);s.layers=this.layers,this.add(s);let r=new Xt(ss,rs,e,t);r.layers=this.layers,this.add(r);let a=new Xt(ss,rs,e,t);a.layers=this.layers,this.add(a);let o=new Xt(ss,rs,e,t);o.layers=this.layers,this.add(o);let l=new Xt(ss,rs,e,t);l.layers=this.layers,this.add(l);let c=new Xt(ss,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ba=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Xl="\\[\\]\\.:\\/",Ed=new RegExp("["+Xl+"]","g"),ql="[^"+Xl+"]",Td="[^"+Xl.replace("\\.","")+"]",Ad=/((?:WC+[\/:])*)/.source.replace("WC",ql),Rd=/(WCOD+)?/.source.replace("WCOD",Td),Cd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ql),Pd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ql),Id=new RegExp("^"+Ad+Rd+Cd+Pd+"$"),Ld=["material","materials","bones","map"],fl=class{constructor(e,t,n){let s=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},st=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ed,"")}static parseTrackName(e){let t=Id.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ld.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ce("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};st.Composite=fl;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yg=new Float32Array(1);var sh=new Ke,$s=class{constructor(e,t,n=0,s=1/0){this.ray=new Ui(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ce("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sh),this}intersectObject(e,t=!0,n=[]){return pl(e,this,n,t),n.sort(rh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)pl(e[s],this,n,t);return n.sort(rh),n}};function rh(i,e){return i.distance-e.distance}function pl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)pl(r[a],e,t,!0)}}var ml=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Yl(i,e,t,n){let s=Dd(n);switch(t){case Ul:return i*e;case Qs:return i*e/s.components*s.byteLength;case La:return i*e/s.components*s.byteLength;case yi:return i*e*2/s.components*s.byteLength;case Da:return i*e*2/s.components*s.byteLength;case Fl:return i*e*3/s.components*s.byteLength;case on:return i*e*4/s.components*s.byteLength;case Na:return i*e*4/s.components*s.byteLength;case js:case er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tr:case nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fa:case Ba:return Math.max(i,16)*Math.max(e,8)/4;case Ua:case Oa:return Math.max(i,8)*Math.max(e,8)/2;case za:case ka:case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ha:case ir:case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case to:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case so:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ro:case ao:case oo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case lo:case co:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sr:case ho:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dd(i){switch(i){case Ht:case Il:return{byteLength:1,components:1};case Ss:case Ll:case En:return{byteLength:2,components:1};case Pa:case Ia:return{byteLength:2,components:4};case bn:case Ca:case wn:return{byteLength:4,components:1};case Dl:case Nl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function du(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ud(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,h);else{p.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<p.length;f++){let g=p[u],_=p[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,p[u]=_)}p.length=u+1;for(let f=0,g=p.length;f<g;f++){let _=p[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Od=`#ifdef USE_ALPHAHASH
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
#endif`,Bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vd=`#ifdef USE_AOMAP
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
#endif`,Gd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wd=`#ifdef USE_BATCHING
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
#endif`,Xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$d=`#ifdef USE_IRIDESCENCE
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
#endif`,Jd=`#ifdef USE_BUMPMAP
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
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,af=`#define PI 3.141592653589793
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
} // validated`,of=`vec3 transformedNormal = objectNormal;
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
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,df="gl_FragColor = linearToOutputTexel( gl_FragColor );",ff=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bf=`#ifdef USE_GRADIENTMAP
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
}`,wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Af=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,If=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Df=`PhysicalMaterial material;
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
#endif`,Nf=`uniform sampler2D dfgLUT;
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
}`,Uf=`
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
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
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
#endif`,Of=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,zf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qf=`#if defined( USE_POINTS_UV )
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
#endif`,Yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$f=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jf=`#if defined( USE_MORPHCOLORS )
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
#endif`,Kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qf=`#ifdef USE_MORPHTARGETS
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
#endif`,jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ep=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rp=`#ifdef USE_NORMALMAP
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
#endif`,ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,up=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sp=`float getShadowMask() {
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
}`,Mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bp=`#ifdef USE_SKINNING
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
#endif`,wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ep=`#ifdef USE_SKINNING
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
#endif`,Tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pp=`#ifdef USE_TRANSMISSION
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
#endif`,Ip=`#ifdef USE_TRANSMISSION
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Op=`uniform sampler2D t2D;
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`uniform float backgroundBlurriness;
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`#include <common>
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
}`,Gp=`#if DEPTH_PACKING == 3200
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
}`,Wp=`#define DISTANCE
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
}`,Xp=`#define DISTANCE
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`uniform float scale;
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
}`,$p=`uniform vec3 diffuse;
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
}`,Jp=`#include <common>
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Qp=`#define LAMBERT
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
}`,jp=`#define LAMBERT
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
}`,em=`#define MATCAP
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
}`,tm=`#define MATCAP
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
}`,nm=`#define NORMAL
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
}`,im=`#define NORMAL
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
}`,sm=`#define PHONG
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
}`,rm=`#define PHONG
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
}`,am=`#define STANDARD
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
}`,om=`#define STANDARD
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
}`,lm=`#define TOON
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
}`,cm=`#define TOON
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
}`,hm=`uniform float size;
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
}`,um=`uniform vec3 diffuse;
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
}`,dm=`#include <common>
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
}`,fm=`uniform vec3 color;
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
}`,pm=`uniform float rotation;
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
}`,mm=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Fd,alphahash_pars_fragment:Od,alphamap_fragment:Bd,alphamap_pars_fragment:zd,alphatest_fragment:kd,alphatest_pars_fragment:Hd,aomap_fragment:Vd,aomap_pars_fragment:Gd,batching_pars_vertex:Wd,batching_vertex:Xd,begin_vertex:qd,beginnormal_vertex:Yd,bsdfs:Zd,iridescence_fragment:$d,bumpmap_pars_fragment:Jd,clipping_planes_fragment:Kd,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:jd,clipping_planes_vertex:ef,color_fragment:tf,color_pars_fragment:nf,color_pars_vertex:sf,color_vertex:rf,common:af,defaultnormal_vertex:of,displacementmap_pars_vertex:lf,displacementmap_vertex:cf,emissivemap_fragment:hf,emissivemap_pars_fragment:uf,colorspace_fragment:df,colorspace_pars_fragment:ff,envmap_fragment:pf,envmap_common_pars_fragment:mf,envmap_pars_fragment:gf,envmap_pars_vertex:xf,envmap_physical_pars_fragment:Rf,envmap_vertex:vf,fog_vertex:_f,fog_pars_vertex:yf,fog_fragment:Sf,fog_pars_fragment:Mf,gradientmap_pars_fragment:bf,lightmap_pars_fragment:wf,lights_lambert_fragment:Ef,lights_lambert_pars_fragment:Tf,lights_pars_begin:Af,lights_toon_fragment:Cf,lights_toon_pars_fragment:Pf,lights_phong_fragment:If,lights_phong_pars_fragment:Lf,lights_physical_fragment:Df,lights_physical_pars_fragment:Nf,lights_fragment_begin:Uf,lights_fragment_maps:Ff,lights_fragment_end:Of,lightprobes_pars_fragment:Bf,logdepthbuf_fragment:zf,logdepthbuf_pars_fragment:kf,logdepthbuf_pars_vertex:Hf,logdepthbuf_vertex:Vf,map_fragment:Gf,map_pars_fragment:Wf,map_particle_fragment:Xf,map_particle_pars_fragment:qf,metalnessmap_fragment:Yf,metalnessmap_pars_fragment:Zf,morphinstance_vertex:$f,morphcolor_vertex:Jf,morphnormal_vertex:Kf,morphtarget_pars_vertex:Qf,morphtarget_vertex:jf,normal_fragment_begin:ep,normal_fragment_maps:tp,normal_pars_fragment:np,normal_pars_vertex:ip,normal_vertex:sp,normalmap_pars_fragment:rp,clearcoat_normal_fragment_begin:ap,clearcoat_normal_fragment_maps:op,clearcoat_pars_fragment:lp,iridescence_pars_fragment:cp,opaque_fragment:hp,packing:up,premultiplied_alpha_fragment:dp,project_vertex:fp,dithering_fragment:pp,dithering_pars_fragment:mp,roughnessmap_fragment:gp,roughnessmap_pars_fragment:xp,shadowmap_pars_fragment:vp,shadowmap_pars_vertex:_p,shadowmap_vertex:yp,shadowmask_pars_fragment:Sp,skinbase_vertex:Mp,skinning_pars_vertex:bp,skinning_vertex:wp,skinnormal_vertex:Ep,specularmap_fragment:Tp,specularmap_pars_fragment:Ap,tonemapping_fragment:Rp,tonemapping_pars_fragment:Cp,transmission_fragment:Pp,transmission_pars_fragment:Ip,uv_pars_fragment:Lp,uv_pars_vertex:Dp,uv_vertex:Np,worldpos_vertex:Up,background_vert:Fp,background_frag:Op,backgroundCube_vert:Bp,backgroundCube_frag:zp,cube_vert:kp,cube_frag:Hp,depth_vert:Vp,depth_frag:Gp,distance_vert:Wp,distance_frag:Xp,equirect_vert:qp,equirect_frag:Yp,linedashed_vert:Zp,linedashed_frag:$p,meshbasic_vert:Jp,meshbasic_frag:Kp,meshlambert_vert:Qp,meshlambert_frag:jp,meshmatcap_vert:em,meshmatcap_frag:tm,meshnormal_vert:nm,meshnormal_frag:im,meshphong_vert:sm,meshphong_frag:rm,meshphysical_vert:am,meshphysical_frag:om,meshtoon_vert:lm,meshtoon_frag:cm,points_vert:hm,points_frag:um,shadow_vert:dm,shadow_frag:fm,sprite_vert:pm,sprite_frag:mm},fe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},Fn={basic:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Vt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Vt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new qe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Vt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Vt([fe.points,fe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Vt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Vt([fe.common,fe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Vt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Vt([fe.sprite,fe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Vt([fe.common,fe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Vt([fe.lights,fe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Fn.physical={uniforms:Vt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var uo={r:0,b:0,g:0},gm=new Ke,fu=new Pe;fu.set(-1,0,0,0,1,0,0,0,1);function xm(i,e,t,n,s,r){let a=new qe(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function f(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let E=S.backgroundBlurriness>0;A=e.get(A,E)}return A}function g(S){let A=!1,E=f(S);E===null?m(a,o):E&&E.isColor&&(m(E,1),A=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,A){let E=f(A);E&&E.isCubeTexture?(c===void 0&&(c=new rt(new ms(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:Vi(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(gm.makeRotationFromEuler(A.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fu),c.material.toneMapped=ke.getTransfer(E.colorSpace)!==Je,(h!==E||p!==E.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,p=E.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new rt(new Kt(2,2),new St({name:"BackgroundMaterial",uniforms:Vi(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ke.getTransfer(E.colorSpace)!==Je,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||p!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,p=E.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,A){S.getRGB(uo,Wl(i)),t.buffers.color.setClear(uo.r,uo.g,uo.b,A,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:_,dispose:d}}function vm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(L,F,V,R,B){let G=!1,H=p(L,R,V,F);r!==H&&(r=H,c(r.object)),G=f(L,R,V,B),G&&g(L,R,V,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,E(L,F,V,R),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function p(L,F,V,R){let B=R.wireframe===!0,G=n[F.id];G===void 0&&(G={},n[F.id]=G);let H=L.isInstancedMesh===!0?L.id:0,ee=G[H];ee===void 0&&(ee={},G[H]=ee);let q=ee[V.id];q===void 0&&(q={},ee[V.id]=q);let Q=q[B];return Q===void 0&&(Q=u(l()),q[B]=Q),Q}function u(L){let F=[],V=[],R=[];for(let B=0;B<t;B++)F[B]=0,V[B]=0,R[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:R,object:L,attributes:{},index:null}}function f(L,F,V,R){let B=r.attributes,G=F.attributes,H=0,ee=V.getAttributes();for(let q in ee)if(ee[q].location>=0){let j=B[q],Se=G[q];if(Se===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(Se=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(Se=L.instanceColor)),j===void 0||j.attribute!==Se||Se&&j.data!==Se.data)return!0;H++}return r.attributesNum!==H||r.index!==R}function g(L,F,V,R){let B={},G=F.attributes,H=0,ee=V.getAttributes();for(let q in ee)if(ee[q].location>=0){let j=G[q];j===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));let Se={};Se.attribute=j,j&&j.data&&(Se.data=j.data),B[q]=Se,H++}r.attributes=B,r.attributesNum=H,r.index=R}function _(){let L=r.newAttributes;for(let F=0,V=L.length;F<V;F++)L[F]=0}function m(L){d(L,0)}function d(L,F){let V=r.newAttributes,R=r.enabledAttributes,B=r.attributeDivisors;V[L]=1,R[L]===0&&(i.enableVertexAttribArray(L),R[L]=1),B[L]!==F&&(i.vertexAttribDivisor(L,F),B[L]=F)}function S(){let L=r.newAttributes,F=r.enabledAttributes;for(let V=0,R=F.length;V<R;V++)F[V]!==L[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function A(L,F,V,R,B,G,H){H===!0?i.vertexAttribIPointer(L,F,V,B,G):i.vertexAttribPointer(L,F,V,R,B,G)}function E(L,F,V,R){_();let B=R.attributes,G=V.getAttributes(),H=F.defaultAttributeValues;for(let ee in G){let q=G[ee];if(q.location>=0){let Q=B[ee];if(Q===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){let j=Q.normalized,Se=Q.itemSize,De=e.get(Q);if(De===void 0)continue;let $=De.buffer,pe=De.type,ve=De.bytesPerElement,Ee=pe===i.INT||pe===i.UNSIGNED_INT||Q.gpuType===Ca;if(Q.isInterleavedBufferAttribute){let me=Q.data,Fe=me.isInterleavedBuffer===!0?me.stride:me.itemSize,mt=Q.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Re=0;Re<q.locationSize;Re++)d(q.location+Re,me.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Re=0;Re<q.locationSize;Re++)m(q.location+Re);i.bindBuffer(i.ARRAY_BUFFER,$);for(let Re=0;Re<q.locationSize;Re++)A(q.location+Re,Se/q.locationSize,pe,j,Fe*ve,(mt+Se/q.locationSize*Re)*ve,Ee)}else{if(Q.isInstancedBufferAttribute){for(let me=0;me<q.locationSize;me++)d(q.location+me,Q.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let me=0;me<q.locationSize;me++)m(q.location+me);i.bindBuffer(i.ARRAY_BUFFER,$);for(let me=0;me<q.locationSize;me++)A(q.location+me,Se/q.locationSize,pe,j,Se*ve,Se/q.locationSize*me*ve,Ee)}}else if(H!==void 0){let j=H[ee];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(q.location,j);break;case 3:i.vertexAttrib3fv(q.location,j);break;case 4:i.vertexAttrib4fv(q.location,j);break;default:i.vertexAttrib1fv(q.location,j)}}}}S()}function b(){U();for(let L in n){let F=n[L];for(let V in F){let R=F[V];for(let B in R){let G=R[B];for(let H in G)h(G[H].object),delete G[H];delete R[B]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;let F=n[L.id];for(let V in F){let R=F[V];for(let B in R){let G=R[B];for(let H in G)h(G[H].object),delete G[H];delete R[B]}}delete n[L.id]}function x(L){for(let F in n){let V=n[F];for(let R in V){let B=V[R];if(B[L.id]===void 0)continue;let G=B[L.id];for(let H in G)h(G[H].object),delete G[H];delete B[L.id]}}}function M(L){for(let F in n){let V=n[F],R=L.isInstancedMesh===!0?L.id:0,B=V[R];if(B!==void 0){for(let G in B){let H=B[G];for(let ee in H)h(H[ee].object),delete H[ee];delete B[G]}delete V[R],Object.keys(V).length===0&&delete n[F]}}}function U(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function _m(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ym(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==on&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let M=x===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Ht&&x!==wn&&!M&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ae("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&Ae("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:E,maxSamples:b,samples:w}}function Sm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new sn,o=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let f=p.length!==0||u||n!==0||s;return s=u,n=p.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,f){let g=p.clippingPlanes,_=p.clipIntersection,m=p.clipShadows,d=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,A=S*4,E=d.clippingState||null;l.value=E,E=h(g,u,A,f);for(let b=0;b!==A;++b)E[b]=t[b];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,u,f,g){let _=p!==null?p.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let d=f+_*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,E=f;A!==_;++A,E+=4)a.copy(p[A]).applyMatrix4(S,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var lr=class extends zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ws(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ms(5,5,5),r=new St({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:zi});r.uniforms.tEquirect.value=t;let a=new rt(s,r),o=t.minFilter;return t.minFilter===an&&(t.minFilter=yt),new gs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Xh=256,Mm=3,bm=20,pu=256,mu=16,wm=3,Em=new N,Tm=new qe,po=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new gs(1,10,null),this._boxMesh=new rt(new ms(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Em}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(Tm));let m=new gs(n,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=p,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=g,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Xh,kh(e))}_fromTexture(e,t){e.mapping===ki||e.mapping===ys?this._setSize(e.image.length===0?Xh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=qh(e,!1,!1),n=Math.log2(e)-Mm;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=qh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ki||e.mapping===ys?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Yh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Am(),this._integrationMaterial=Rm());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/mu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-wm)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(pu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Cm());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function qh(i,e,t){return new lr(i,{minFilter:an,generateMipmaps:e,type:En,colorSpace:Ni,depthBuffer:t})}function cr(i,e,t){return new St({name:i,uniforms:e,vertexShader:ze.cube_vert,fragmentShader:t,side:Zt,blending:zi,depthTest:!1,depthWrite:!1})}function Am(){return cr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${pu}u

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
	`)}function Rm(){return cr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:mu}},`

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
	`)}function Cm(){return cr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${bm}
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
	`)}function Yh(){return cr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Zh(){return cr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Pm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ta||f===Aa)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new lr(g.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,g=f===Ta||f===Aa,_=f===ki||f===ys;if(g||_){let m=t.get(u),d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new po(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new po(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Ta?u.mapping=ki:f===Aa&&(u.mapping=ys),u}function l(u){let f=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Im(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ns("WebGLRenderer: "+n+" extension not supported."),s}}}function Lm(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let _=r.get(g);_&&(e.remove(_),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(g){let _=g.attributes;for(let m in _)e.update(_[m],i.ARRAY_BUFFER)}function p(g){let _=g.index,m=g.attributes.position,d=0;if(m===void 0)return;let S=_!==null?_.array.length:m.array.length/3-1,A=m.count>=65535?Hs:ks,E=new A(Math.ceil(S/3)*6,1),b=E.array;if(_!==null){let x=_.array;d=_.version;for(let M=0,U=0;M<S;M+=3){let P=x[M+0],L=x[M+1],F=x[M+2];b[U++]=P,b[U++]=L,b[U++]=L,b[U++]=F,b[U++]=F,b[U++]=P}}else{d=m.version;for(let x=0,M=0;x<S;x+=3){let U=x+0,P=x+1,L=x+2;b[M++]=U,b[M++]=P,b[M++]=P,b[M++]=L,b[M++]=L,b[M++]=U}}E.version=d;let w=r.get(g);w&&e.remove(w),r.set(g,E)}function u(g){let _=r.get(g);if(_){let m=g.index;m!==null&&_.version<m.version&&p(g)}else p(g);return r.get(g)}function f(){for(let g in s){let _=s[g].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Dm(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,u){i.drawElements(n,u,r,p*a),t.update(u,n,1)}function c(p,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,p*a,f),t.update(u,n,f))}function h(p,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Nm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ce("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Um(i,e,t){let n=new WeakMap,s=new nt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==p){let U=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let E=o.attributes.position.count*A,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let w=new Float32Array(E*b*4*p),x=new zs(w,E,b,p);x.type=wn,x.needsUpdate=!0;let M=A*4;for(let P=0;P<p;P++){let L=m[P],F=d[P],V=S[P],R=E*b*4*P;for(let B=0;B<L.count;B++){let G=B*M;f===!0&&(s.fromBufferAttribute(L,B),w[R+G+0]=s.x,w[R+G+1]=s.y,w[R+G+2]=s.z,w[R+G+3]=0),g===!0&&(s.fromBufferAttribute(F,B),w[R+G+4]=s.x,w[R+G+5]=s.y,w[R+G+6]=s.z,w[R+G+7]=0),_===!0&&(s.fromBufferAttribute(V,B),w[R+G+8]=s.x,w[R+G+9]=s.y,w[R+G+10]=s.z,w[R+G+11]=V.itemSize===4?s.w:1)}}u={count:p,texture:x,size:new Ue(E,b)},n.set(o,u),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Fm(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,u=e.get(c,p);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Om={[bl]:"LINEAR_TONE_MAPPING",[wl]:"REINHARD_TONE_MAPPING",[El]:"CINEON_TONE_MAPPING",[Tl]:"ACES_FILMIC_TONE_MAPPING",[Rl]:"AGX_TONE_MAPPING",[Cl]:"NEUTRAL_TONE_MAPPING",[Al]:"CUSTOM_TONE_MAPPING"};function Bm(i,e,t,n,s,r){let a=new zt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new kt;h.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Bt([0,2,0,0,2,0],2));let p=new ca({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new rt(h,p),f=new Ma(-1,1,1,-1,0,1),g=null,_=null,m=!1,d,S=null,A=[],E=!1;this.setSize=function(b,w){a.setSize(b,w),o!==null&&o.setSize(b,w),l!==null&&l.setSize(b,w);for(let x=0;x<A.length;x++){let M=A[x];M.setSize&&M.setSize(b,w)}},this.setEffects=function(b){A=b,E=A.length>0&&A[0].isRenderPass===!0;let w=a.width,x=a.height;A.length>0&&o===null&&(o=new zt(w,x,{type:En,depthBuffer:!1,stencilBuffer:!1}),l=new zt(w,x,{type:En,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&A.some(U=>U.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new Jn(w,x),r===!0&&(c.format=Qn,c.type=Hi)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let U=0;U<A.length;U++){let P=A[U];P.setSize&&P.setSize(w,x),M&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(b,w){if(m||b.toneMapping===Nn&&A.length===0)return!1;if(S=w,w!==null){let x=w.width,M=w.height;(a.width!==x||a.height!==M)&&this.setSize(x,M)}return E===!1&&b.setRenderTarget(a),d=b.toneMapping,b.toneMapping=Nn,!0},this.hasRenderPass=function(){return E},this.end=function(b,w){b.toneMapping=d,m=!0;let x=a,M=o;for(let U=0;U<A.length;U++){let P=A[U];P.enabled!==!1&&(P.render(b,M,x,w),P.needsSwap!==!1&&(x=M,M=M===o?l:o))}if(g!==b.outputColorSpace||_!==b.toneMapping){g=b.outputColorSpace,_=b.toneMapping,p.defines={},ke.getTransfer(g)===Je&&(p.defines.SRGB_TRANSFER="");let U=Om[_];U&&(p.defines[U]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(S),b.render(u,f),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}var gu=new Yt,xu=new Jn(1,1),vu=new Xs(1),_u=new zs,yu=new sa,Su=new Ws,$h=[],Jh=[],Kh=new Float32Array(16),Qh=new Float32Array(9),jh=new Float32Array(4);function bs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=$h[s];if(r===void 0&&(r=new Float32Array(s),$h[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function go(i,e){let t=Jh[e];t===void 0&&(t=new Int32Array(e),Jh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function Hm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function Vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function Gm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;jh.set(n),i.uniformMatrix2fv(this.addr,!1,jh),bt(t,n)}}function Wm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Qh.set(n),i.uniformMatrix3fv(this.addr,!1,Qh),bt(t,n)}}function Xm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Kh.set(n),i.uniformMatrix4fv(this.addr,!1,Kh),bt(t,n)}}function qm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function Zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function $m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function Jm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function Qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function xo(i){return i.version===0&&(i.compareFunction=kl,i.needsUpdate=!0),i}function e0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=xo(xu):r=gu,t.setTexture2D(e||r,s)}function t0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||yu,s)}function n0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=xo(vu):r=Su,t.setTextureCube(e||r,s)}function i0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_u,s)}function s0(i){switch(i){case 5126:return zm;case 35664:return km;case 35665:return Hm;case 35666:return Vm;case 35674:return Gm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return qm;case 35667:case 35671:return Ym;case 35668:case 35672:return Zm;case 35669:case 35673:return $m;case 5125:return Jm;case 36294:return Km;case 36295:return Qm;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}function r0(i,e){i.uniform1fv(this.addr,e)}function a0(i,e){let t=bs(e,this.size,2);i.uniform2fv(this.addr,t)}function o0(i,e){let t=bs(e,this.size,3);i.uniform3fv(this.addr,t)}function l0(i,e){let t=bs(e,this.size,4);i.uniform4fv(this.addr,t)}function c0(i,e){let t=bs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function h0(i,e){let t=bs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function u0(i,e){let t=bs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function d0(i,e){i.uniform1iv(this.addr,e)}function f0(i,e){i.uniform2iv(this.addr,e)}function p0(i,e){i.uniform3iv(this.addr,e)}function m0(i,e){i.uniform4iv(this.addr,e)}function g0(i,e){i.uniform1uiv(this.addr,e)}function x0(i,e){i.uniform2uiv(this.addr,e)}function v0(i,e){i.uniform3uiv(this.addr,e)}function _0(i,e){i.uniform4uiv(this.addr,e)}function y0(i,e,t){let n=this.cache,s=e.length,r=go(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=xo(xu):a=gu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function S0(i,e,t){let n=this.cache,s=e.length,r=go(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||yu,r[a])}function M0(i,e,t){let n=this.cache,s=e.length,r=go(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=xo(vu):a=Su;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function b0(i,e,t){let n=this.cache,s=e.length,r=go(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||_u,r[a])}function w0(i){switch(i){case 5126:return r0;case 35664:return a0;case 35665:return o0;case 35666:return l0;case 35674:return c0;case 35675:return h0;case 35676:return u0;case 5124:case 35670:return d0;case 35667:case 35671:return f0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return x0;case 36295:return v0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return b0}}var Jl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=s0(t.type)}},Kl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w0(t.type)}},Ql=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Zl=/(\w+)(\])?(\[|\.)?/g;function eu(i,e){i.seq.push(e),i.map[e.id]=e}function E0(i,e,t){let n=i.name,s=n.length;for(Zl.lastIndex=0;;){let r=Zl.exec(n),a=Zl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){eu(t,c===void 0?new Jl(o,i,e):new Kl(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Ql(o),eu(t,p)),t=p}}}var Ms=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);E0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function tu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var T0=37297,A0=0;function R0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var nu=new Pe;function C0(i){ke._getMatrix(nu,ke.workingColorSpace,i);let e=`mat3( ${nu.elements.map(t=>t.toFixed(4))} )`;switch(ke.getTransfer(i)){case Fs:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function iu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+R0(i.getShaderSource(e),o)}else return r}function P0(i,e){let t=C0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var I0={[bl]:"Linear",[wl]:"Reinhard",[El]:"Cineon",[Tl]:"ACESFilmic",[Rl]:"AgX",[Cl]:"Neutral",[Al]:"Custom"};function L0(i,e){let t=I0[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fo=new N;function D0(){ke.getLuminanceCoefficients(fo);let i=fo.x.toFixed(4),e=fo.y.toFixed(4),t=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function U0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function F0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function or(i){return i!==""}function su(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function ru(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(i){return i.replace(O0,B0)}function B0(i,e){let t=ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return jl(t)}var z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function au(i){return i.replace(z0,k0)}function k0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ou(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var H0={[Js]:"SHADOWMAP_TYPE_PCF",[xs]:"SHADOWMAP_TYPE_VSM"};function V0(i){return H0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var G0={[ys]:"ENVMAP_MODE_REFRACTION"};function W0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":G0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var X0={[Ml]:"ENVMAP_BLENDING_MULTIPLY",[wh]:"ENVMAP_BLENDING_MIX",[Eh]:"ENVMAP_BLENDING_ADD"};function q0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":X0[i.combine]||"ENVMAP_BLENDING_NONE"}function Y0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=V0(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=W0(t),p=q0(t),u=N0(t),f=U0(r),g=s.createProgram(),_,m,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(or).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(or).join(`
`),m.length>0&&(m+=`
`)):(_=[ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),m=[ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Nn?L0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,P0("linearToOutputTexel",t.outputColorSpace),D0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),a=jl(a),a=su(a,t),a=ru(a,t),o=jl(o),o=su(o,t),o=ru(o,t),a=au(a),o=au(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=d+_+a,A=d+m+o,E=tu(s,s.VERTEX_SHADER,S),b=tu(s,s.FRAGMENT_SHADER,A);s.attachShader(g,E),s.attachShader(g,b),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(E)||"",V=s.getShaderInfoLog(b)||"",R=L.trim(),B=F.trim(),G=V.trim(),H=!0,ee=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,E,b);else{let q=iu(s,E,"vertex"),Q=iu(s,b,"fragment");Ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+R+`
`+q+`
`+Q)}else R!==""?Ae("WebGLProgram: Program Info Log:",R):(B===""||G==="")&&(ee=!1);ee&&(P.diagnostics={runnable:H,programLog:R,vertexShader:{log:B,prefix:_},fragmentShader:{log:G,prefix:m}})}s.deleteShader(E),s.deleteShader(b),x=new Ms(s,g),M=F0(s,g)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(g,T0)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=b,this}var Z0=0,ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new tc(e),t.set(e,n)),n}},tc=class{constructor(e){this.id=Z0++,this.code=e,this.usedTimes=0}};function $0(i){return i===yi||i===ir||i===sr}function J0(i,e,t,n,s,r){let a=new us,o=new ec,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,M,U,P,L,F){let V=P.fog,R=L.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||B,G),ee=u[x.type],q=n.precision;x.precision!==null&&(q=n.getMaxPrecision(x.precision),q!==x.precision&&Ae("WebGLProgram.getParameters:",x.precision,"not supported, using",q,"instead."));let Q=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,j=Q!==void 0?Q.length:0,Se=0;R.morphAttributes.position!==void 0&&(Se=1),R.morphAttributes.normal!==void 0&&(Se=2),R.morphAttributes.color!==void 0&&(Se=3);let De,$,pe,ve;if(ee){let de=Fn[ee];De=de.vertexShader,$=de.fragmentShader}else{De=x.vertexShader,$=x.fragmentShader;let de=o.getVertexShaderStage(x),je=o.getFragmentShaderStage(x);o.update(x,de,je),pe=de.id,ve=je.id}let Ee=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Fe=L.isInstancedMesh===!0,mt=L.isBatchedMesh===!0,Re=!!x.map,Qe=!!x.matcap,et=!!H,Ve=et&&H.isPMREMTexture===!0,It=!!x.aoMap,vt=!!x.lightMap,$t=!!x.bumpMap&&x.wireframe===!1,ht=!!x.normalMap,Pn=!!x.displacementMap,Et=!!x.emissiveMap,dn=!!x.metalnessMap,fn=!!x.roughnessMap,pn=x.anisotropy>0,D=x.clearcoat>0,mn=x.diffuseRoughness>0,ot=x.dispersion>0,lt=x.retroreflectivity>0,ue=x.iridescence>0,_t=x.sheen>0,Te=x.transmission>0,Le=pn&&!!x.anisotropyMap,T=D&&!!x.clearcoatMap,v=D&&!!x.clearcoatNormalMap,z=D&&!!x.clearcoatRoughnessMap,te=mn&&!!x.diffuseRoughnessMap,K=ue&&!!x.iridescenceMap,se=ue&&!!x.iridescenceThicknessMap,ce=_t&&!!x.sheenColorMap,Y=_t&&!!x.sheenRoughnessMap,Z=!!x.specularMap,ae=!!x.specularColorMap,C=!!x.specularIntensityMap,J=Te&&!!x.transmissionMap,X=Te&&!!x.thicknessMap,oe=!!x.gradientMap,ie=!!x.alphaMap,re=x.alphaTest>0,be=!!x.alphaHash,Be=!!x.extensions,ne=Nn;x.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(ne=i.toneMapping);let we=Ve?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Oe={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:De,fragmentShader:$,defines:x.defines,customVertexShaderID:pe,customFragmentShaderID:ve,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:q,batching:mt,batchingColor:mt&&L._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&L.instanceColor!==null,instancingMorph:Fe&&L.morphTexture!==null,outputColorSpace:Ee===null?i.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:ke.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Re,matcap:Qe,envMap:et,envMapMode:et&&H.mapping,envMapPMREM:Ve,envMapMaxLod:Ve?we.length-1:null,envMapSize:Ve?we[0].width:null,aoMap:It,lightMap:vt,bumpMap:$t,normalMap:ht,displacementMap:Pn,emissiveMap:Et,normalMapObjectSpace:ht&&x.normalMapType===Rh,normalMapTangentSpace:ht&&x.normalMapType===Ol,packedNormalMap:ht&&x.normalMapType===Ol&&$0(x.normalMap.format),metalnessMap:dn,roughnessMap:fn,anisotropy:pn,anisotropyMap:Le,clearcoat:D,clearcoatMap:T,clearcoatNormalMap:v,clearcoatRoughnessMap:z,diffuseRoughness:mn,diffuseRoughnessMap:te,dispersion:ot,retroreflection:lt,iridescence:ue,iridescenceMap:K,iridescenceThicknessMap:se,sheen:_t,sheenColorMap:ce,sheenRoughnessMap:Y,specularMap:Z,specularColorMap:ae,specularIntensityMap:C,transmission:Te,transmissionMap:J,thicknessMap:X,gradientMap:oe,opaque:x.transparent===!1&&x.blending===vs&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:re,alphaHash:be,combine:x.combine,mapUv:Re&&f(x.map.channel),aoMapUv:It&&f(x.aoMap.channel),lightMapUv:vt&&f(x.lightMap.channel),bumpMapUv:$t&&f(x.bumpMap.channel),normalMapUv:ht&&f(x.normalMap.channel),displacementMapUv:Pn&&f(x.displacementMap.channel),emissiveMapUv:Et&&f(x.emissiveMap.channel),metalnessMapUv:dn&&f(x.metalnessMap.channel),roughnessMapUv:fn&&f(x.roughnessMap.channel),anisotropyMapUv:Le&&f(x.anisotropyMap.channel),clearcoatMapUv:T&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:K&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:se&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(x.sheenRoughnessMap.channel),specularMapUv:Z&&f(x.specularMap.channel),specularColorMapUv:ae&&f(x.specularColorMap.channel),specularIntensityMapUv:C&&f(x.specularIntensityMap.channel),transmissionMapUv:J&&f(x.transmissionMap.channel),thicknessMapUv:X&&f(x.thicknessMap.channel),alphaMapUv:ie&&f(x.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(ht||pn),vertexNormals:!!R.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!R.attributes.uv&&(Re||ie),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||R.attributes.normal===void 0&&ht===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:me,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Se,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(de=>de.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:Re&&x.map.isVideoTexture===!0&&ke.getTransfer(x.map.colorSpace)===Je,decodeVideoTextureEmissive:Et&&x.emissiveMap.isVideoTexture===!0&&ke.getTransfer(x.emissiveMap.colorSpace)===Je,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qt,flipSided:x.side===Zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Be&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&x.extensions.multiDraw===!0||mt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function _(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let U in x.defines)M.push(U),M.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(m(M,x),d(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function m(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function d(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function S(x){let M=u[x.type],U;if(M){let P=Fn[M];U=Vh.clone(P.uniforms)}else U=x.uniforms;return U}function A(x,M){let U=h.get(M);return U!==void 0?++U.usedTimes:(U=new Y0(i,M,x,s),c.push(U),h.set(M,U)),U}function E(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:S,acquireProgram:A,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:w}}function K0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Q0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function lu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,m,d){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:d},i[e]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=a(u),S.groupOrder=_,S.renderOrder=u.renderOrder,S.z=m,S.group=d),e++,S}function l(u,f,g,_,m,d,S){S.reversedDepth===!0&&(m=-m);let A=o(u,f,g,_,m,d);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):t.push(A)}function c(u,f,g,_,m,d){let S=o(u,f,g,_,m,d);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function h(u,f){t.length>1&&t.sort(u||Q0),n.length>1&&n.sort(f||lu),s.length>1&&s.sort(f||lu)}function p(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function j0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new cu,i.set(n,[a])):s>=r.length?(a=new cu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function eg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new qe};break;case"SpotLight":t={position:new N,direction:new N,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function tg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ng=0;function ig(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sg(i){let e=new eg,t=tg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new Ke,a=new Ke;function o(c){let h=0,p=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,_=0,m=0,d=0,S=0,A=0,E=0,b=0,w=0,x=0,M=0,U=0,P=0;c.sort(ig);for(let F=0,V=c.length;F<V;F++){let R=c[F],B=R.color,G=R.intensity,H=R.distance,ee=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===yi?ee=R.shadow.map.texture:ee=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=B.r*G,p+=B.g*G,u+=B.b*G;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],G);P++}else if(R.isSunLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Q=R.shadow,j=t.get(R);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=ee;let Se=Q.getViewportCount();for(let De=0;De<Se;De++)n.sunShadowMatrix[_+De]=Q.getMatrix(De),n.sunShadowCascade[_+De]=Q._cascadeData[De];_+=Se,g++}n.sun[f]=q,f++}else if(R.isDirectionalLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Q=R.shadow,j=t.get(R);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=ee,n.directionalShadowMatrix[m]=R.shadow.matrix,b++}n.directional[m]=q,m++}else if(R.isSpotLight){let q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(B).multiplyScalar(G),q.distance=H,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[S]=q;let Q=R.shadow;if(R.map&&(n.spotLightMap[M]=R.map,M++,Q.updateMatrices(R),R.castShadow&&U++),n.spotLightMatrix[S]=Q.matrix,R.castShadow){let j=t.get(R);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[S]=j,n.spotShadowMap[S]=ee,x++}S++}else if(R.isRectAreaLight){let q=e.get(R);q.color.copy(B).multiplyScalar(G),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[A]=q,A++}else if(R.isPointLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){let Q=R.shadow,j=t.get(R);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[d]=j,n.pointShadowMap[d]=ee,n.pointShadowMatrix[d]=R.shadow.matrix,w++}n.point[d]=q,d++}else if(R.isHemisphereLight){let q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(G),q.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[E]=q,E++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;let L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==d||L.spotLength!==S||L.rectAreaLength!==A||L.hemiLength!==E||L.numSunShadows!==g||L.numDirectionalShadows!==b||L.numPointShadows!==w||L.numSpotShadows!==x||L.numSpotMaps!==M||L.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=A,n.point.length=d,n.hemi.length=E,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+M-U,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=P,L.sunLength=f,L.directionalLength=m,L.pointLength=d,L.spotLength=S,L.rectAreaLength=A,L.hemiLength=E,L.numSunShadows=g,L.numDirectionalShadows=b,L.numPointShadows=w,L.numSpotShadows=x,L.numSpotMaps=M,L.numLightProbes=P,n.version=ng++)}function l(c,h){let p=0,u=0,f=0,g=0,_=0,m=0,d=h.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let E=c[S];if(E.isSunLight){let b=n.sun[p];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(d),p++}else if(E.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),u++}else if(E.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),g++}else if(E.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(d),a.identity(),r.copy(E.matrixWorld),r.premultiply(d),a.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(d),f++}else if(E.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:n}}function hu(i){let e=new sg(i),t=[],n=[],s=[];function r(p){h.camera=p,t.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):t.push(p)}function o(p){n.push(p)}function l(){e.setup(t),s.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function c(p){e.setupView(t,p)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function rg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new hu(i),e.set(s,[o])):r>=a.length?(o=new hu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,og=`uniform sampler2D shadow_pass;
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
}`,lg=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],cg=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],uu=new Ke,ar=new N,$l=new N;function hg(i,e,t){let n=new Oi,s=new Ue,r=new Ue,a=new nt,o=new ha,l=new ua,c={},h=t.maxTextureSize,p={[_i]:Zt,[Zt]:_i,[Qt]:Qt},u=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:ag,fragmentShader:og}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new kt;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new rt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Js;let d=this.type;this.render=function(w,x,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===lh&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Js);let U=i.getRenderTarget(),P=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(zi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=d!==this.type;V&&x.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(B=>B.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,B=w.length;R<B;R++){let G=w[R],H=G.shadow;if(H===void 0){Ae("WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ee=H.getFrameExtents();s.multiply(ee),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,H.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=q,H.map===null||V===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===xs){if(G.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new zt(s.x,s.y,{format:yi,type:En,minFilter:yt,magFilter:yt,generateMipmaps:!1}),H.map.texture.name=G.name+".shadowMap",H.map.depthTexture=new Jn(s.x,s.y,wn),H.map.depthTexture.name=G.name+".shadowMapDepth",H.map.depthTexture.format=Yn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ct,H.map.depthTexture.magFilter=Ct}else G.isPointLight?(H.map=new lr(s.x),H.map.depthTexture=new Xs(s.x,bn)):(H.map=new zt(s.x,s.y),H.map.depthTexture=new Jn(s.x,s.y,bn)),H.map.depthTexture.name=G.name+".shadowMap",H.map.depthTexture.format=Yn,this.type===Js?(H.map.depthTexture.compareFunction=q?zl:Bl,H.map.depthTexture.minFilter=yt,H.map.depthTexture.magFilter=yt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ct,H.map.depthTexture.magFilter=Ct);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let Q=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();G.isPointLight!==!0&&H.updateMatrices(G,M);let j=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:M.layers;for(let Se=0;Se<Q;Se++){let De=H.getCamera(Se);if(G.isPointLight){let $=H.camera,pe=H.matrix,ve=G.distance||$.far;ve!==$.far&&($.far=ve,$.updateProjectionMatrix()),ar.setFromMatrixPosition(G.matrixWorld),$.position.copy(ar),$l.copy($.position),$l.add(lg[Se]),$.up.copy(cg[Se]),$.lookAt($l),$.updateMatrixWorld(),pe.makeTranslation(-ar.x,-ar.y,-ar.z),uu.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),H._frustum.setFromProjectionMatrix(uu,$.coordinateSystem,$.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,Se),i.clear();else{Se===0&&(i.setRenderTarget(H.map),i.clear());let $=H.getViewport(Se);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),F.viewport(a)}n=H.getFrustum(Se),E(x,M,De,G,j,this.type)}H.isPointLightShadow!==!0&&this.type===xs&&S(H,M),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(U,P,L)};function S(w,x){let M=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new zt(s.x,s.y,{format:yi,type:En}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(x,null,M,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(x,null,M,f,_,null)}function A(w,x,M,U){let P=null,L=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)P=L;else if(P=M.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let F=P.uuid,V=x.uuid,R=c[F];R===void 0&&(R={},c[F]=R);let B=R[V];B===void 0&&(B=P.clone(),R[V]=B,x.addEventListener("dispose",b)),P=B}if(P.visible=x.visible,P.wireframe=x.wireframe,U===xs?P.side=x.shadowSide!==null?x.shadowSide:x.side:P.side=x.shadowSide!==null?x.shadowSide:p[x.side],P.alphaMap=x.alphaMap,P.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,P.map=x.map,P.clipShadows=x.clipShadows,P.clippingPlanes=x.clippingPlanes,P.clipIntersection=x.clipIntersection,P.displacementMap=x.displacementMap,P.displacementScale=x.displacementScale,P.displacementBias=x.displacementBias,P.wireframeLinewidth=x.wireframeLinewidth,P.linewidth=x.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let F=i.properties.get(P);F.light=M}return P}function E(w,x,M,U,P,L){if(w.visible===!1)return;if(w.layers.test(P)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===xs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let R=e.update(w),B=w.material;if(Array.isArray(B)){let G=R.groups;for(let H=0,ee=G.length;H<ee;H++){let q=G[H],Q=B[q.materialIndex];if(Q&&Q.visible){let j=A(w,Q,U,L);w.onBeforeShadow(i,w,x,M,R,j,q),i.renderBufferDirect(M,null,R,j,w,q),w.onAfterShadow(i,w,x,M,R,j,q)}}}else if(B.visible){let G=A(w,B,U,L);w.onBeforeShadow(i,w,x,M,R,G,null),i.renderBufferDirect(M,null,R,G,w,null),w.onAfterShadow(i,w,x,M,R,G,null)}}let V=w.children;for(let R=0,B=V.length;R<B;R++)E(V[R],x,M,U,P,L)}function b(w){w.target.removeEventListener("dispose",b);for(let M in c){let U=c[M],P=w.target.uuid;P in U&&(U[P].dispose(),delete U[P])}}}function ug(i,e){function t(){let C=!1,J=new nt,X=null,oe=new nt(0,0,0,0);return{setMask:function(ie){X!==ie&&!C&&(i.colorMask(ie,ie,ie,ie),X=ie)},setLocked:function(ie){C=ie},setClear:function(ie,re,be,Be,ne){ne===!0&&(ie*=Be,re*=Be,be*=Be),J.set(ie,re,be,Be),oe.equals(J)===!1&&(i.clearColor(ie,re,be,Be),oe.copy(J))},reset:function(){C=!1,X=null,oe.set(-1,0,0,0)}}}function n(){let C=!1,J=!1,X=null,oe=null,ie=null;return{setReversed:function(re){if(J!==re){let be=e.get("EXT_clip_control");re?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),J=re;let Be=ie;ie=null,this.setClear(Be)}},getReversed:function(){return J},setTest:function(re){re?me(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(re){X!==re&&!C&&(i.depthMask(re),X=re)},setFunc:function(re){if(J&&(re=zh[re]),oe!==re){switch(re){case qr:i.depthFunc(i.NEVER);break;case Yr:i.depthFunc(i.ALWAYS);break;case Zr:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case $r:i.depthFunc(i.EQUAL);break;case Jr:i.depthFunc(i.GEQUAL);break;case Kr:i.depthFunc(i.GREATER);break;case Qr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=re}},setLocked:function(re){C=re},setClear:function(re){ie!==re&&(ie=re,J&&(re=1-re),i.clearDepth(re))},reset:function(){C=!1,X=null,oe=null,ie=null,J=!1}}}function s(){let C=!1,J=null,X=null,oe=null,ie=null,re=null,be=null,Be=null,ne=null;return{setTest:function(we){C||(we?me(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(we){J!==we&&!C&&(i.stencilMask(we),J=we)},setFunc:function(we,Oe,de){(X!==we||oe!==Oe||ie!==de)&&(i.stencilFunc(we,Oe,de),X=we,oe=Oe,ie=de)},setOp:function(we,Oe,de){(re!==we||be!==Oe||Be!==de)&&(i.stencilOp(we,Oe,de),re=we,be=Oe,Be=de)},setLocked:function(we){C=we},setClear:function(we){ne!==we&&(i.clearStencil(we),ne=we)},reset:function(){C=!1,J=null,X=null,oe=null,ie=null,re=null,be=null,Be=null,ne=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},p={},u={},f=new WeakMap,g=[],_=null,m=!1,d=null,S=null,A=null,E=null,b=null,w=null,x=null,M=new qe(0,0,0),U=0,P=!1,L=null,F=null,V=null,R=null,B=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,ee=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=ee>=1):q.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=ee>=2);let Q=null,j={},Se=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),$=new nt().fromArray(Se),pe=new nt().fromArray(De);function ve(C,J,X,oe){let ie=new Uint8Array(4),re=i.createTexture();i.bindTexture(C,re),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<X;be++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(J+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return re}let Ee={};Ee[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Ee[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ee[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(i.DEPTH_TEST),a.setFunc(os),$t(!1),ht(gl),me(i.CULL_FACE),It(zi);function me(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function Fe(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function mt(C,J){return u[C]!==J?(i.bindFramebuffer(C,J),u[C]=J,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=J),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=J),!0):!1}function Re(C,J){let X=g,oe=!1;if(C){X=f.get(J),X===void 0&&(X=[],f.set(J,X));let ie=C.textures;if(X.length!==ie.length||X[0]!==i.COLOR_ATTACHMENT0){for(let re=0,be=ie.length;re<be;re++)X[re]=i.COLOR_ATTACHMENT0+re;X.length=ie.length,oe=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,oe=!0);oe&&i.drawBuffers(X)}function Qe(C){return _!==C?(i.useProgram(C),_=C,!0):!1}let et={[Kn]:i.FUNC_ADD,[ch]:i.FUNC_SUBTRACT,[hh]:i.FUNC_REVERSE_SUBTRACT};et[uh]=i.MIN,et[dh]=i.MAX;let Ve={[Ea]:i.ZERO,[_s]:i.ONE,[fh]:i.SRC_COLOR,[yl]:i.SRC_ALPHA,[_h]:i.SRC_ALPHA_SATURATE,[xh]:i.DST_COLOR,[mh]:i.DST_ALPHA,[ph]:i.ONE_MINUS_SRC_COLOR,[Sl]:i.ONE_MINUS_SRC_ALPHA,[vh]:i.ONE_MINUS_DST_COLOR,[gh]:i.ONE_MINUS_DST_ALPHA,[yh]:i.CONSTANT_COLOR,[Sh]:i.ONE_MINUS_CONSTANT_COLOR,[Mh]:i.CONSTANT_ALPHA,[bh]:i.ONE_MINUS_CONSTANT_ALPHA};function It(C,J,X,oe,ie,re,be,Be,ne,we){if(C===zi){m===!0&&(Fe(i.BLEND),m=!1);return}if(m===!1&&(me(i.BLEND),m=!0),C!==wa){if(C!==d||we!==P){if((S!==Kn||b!==Kn)&&(i.blendEquation(i.FUNC_ADD),S=Kn,b=Kn),we)switch(C){case vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xl:i.blendFunc(i.ONE,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ce("WebGLState: Invalid blending: ",C);break}else switch(C){case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vl:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _l:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",C);break}A=null,E=null,w=null,x=null,M.set(0,0,0),U=0,d=C,P=we}return}ie=ie||J,re=re||X,be=be||oe,(J!==S||ie!==b)&&(i.blendEquationSeparate(et[J],et[ie]),S=J,b=ie),(X!==A||oe!==E||re!==w||be!==x)&&(i.blendFuncSeparate(Ve[X],Ve[oe],Ve[re],Ve[be]),A=X,E=oe,w=re,x=be),(Be.equals(M)===!1||ne!==U)&&(i.blendColor(Be.r,Be.g,Be.b,ne),M.copy(Be),U=ne),d=C,P=!1}function vt(C,J){C.side===Qt?Fe(i.CULL_FACE):me(i.CULL_FACE);let X=C.side===Zt;J&&(X=!X),$t(X),C.blending===vs&&C.transparent===!1?It(zi):It(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let oe=C.stencilWrite;o.setTest(oe),oe&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Et(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(C){L!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),L=C)}function ht(C){C!==ah?(me(i.CULL_FACE),C!==F&&(C===gl?i.cullFace(i.BACK):C===oh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),F=C}function Pn(C){C!==V&&(H&&i.lineWidth(C),V=C)}function Et(C,J,X){C?(me(i.POLYGON_OFFSET_FILL),(R!==J||B!==X)&&(R=J,B=X,a.getReversed()&&(J=-J,X=-X),i.polygonOffset(J,X))):Fe(i.POLYGON_OFFSET_FILL)}function dn(C){C?me(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function fn(C){C===void 0&&(C=i.TEXTURE0+G-1),Q!==C&&(i.activeTexture(C),Q=C)}function pn(C,J,X){X===void 0&&(Q===null?X=i.TEXTURE0+G-1:X=Q);let oe=j[X];oe===void 0&&(oe={type:void 0,texture:void 0},j[X]=oe),(oe.type!==C||oe.texture!==J)&&(Q!==X&&(i.activeTexture(X),Q=X),i.bindTexture(C,J||Ee[C]),oe.type=C,oe.texture=J)}function D(){let C=j[Q];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function mn(){try{i.compressedTexImage2D(...arguments)}catch(C){Ce("WebGLState:",C)}}function ot(){try{i.compressedTexImage3D(...arguments)}catch(C){Ce("WebGLState:",C)}}function lt(){try{i.texSubImage2D(...arguments)}catch(C){Ce("WebGLState:",C)}}function ue(){try{i.texSubImage3D(...arguments)}catch(C){Ce("WebGLState:",C)}}function _t(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Ce("WebGLState:",C)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Ce("WebGLState:",C)}}function Le(){try{i.texStorage2D(...arguments)}catch(C){Ce("WebGLState:",C)}}function T(){try{i.texStorage3D(...arguments)}catch(C){Ce("WebGLState:",C)}}function v(){try{i.texImage2D(...arguments)}catch(C){Ce("WebGLState:",C)}}function z(){try{i.texImage3D(...arguments)}catch(C){Ce("WebGLState:",C)}}function te(C){return p[C]!==void 0?p[C]:i.getParameter(C)}function K(C,J){p[C]!==J&&(i.pixelStorei(C,J),p[C]=J)}function se(C){$.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),$.copy(C))}function ce(C){pe.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),pe.copy(C))}function Y(C,J){let X=c.get(J);X===void 0&&(X=new WeakMap,c.set(J,X));let oe=X.get(C);oe===void 0&&(oe=i.getUniformBlockIndex(J,C.name),i.uniformBlockBinding(J,oe,oe),X.set(C,oe))}function Z(C,J,X){let ie=c.get(J).get(C);l[ie]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,ie,X),l[ie]=X)}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},Q=null,j={},u={},l={},f=new WeakMap,g=[],_=null,m=!1,d=null,S=null,A=null,E=null,b=null,w=null,x=null,M=new qe(0,0,0),U=0,P=!1,L=null,F=null,V=null,R=null,B=null,$.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:me,disable:Fe,bindFramebuffer:mt,drawBuffers:Re,useProgram:Qe,setBlending:It,setMaterial:vt,setFlipSided:$t,setCullFace:ht,setLineWidth:Pn,setPolygonOffset:Et,setScissorTest:dn,activeTexture:fn,bindTexture:pn,unbindTexture:D,compressedTexImage2D:mn,compressedTexImage3D:ot,texImage2D:v,texImage3D:z,pixelStorei:K,getParameter:te,updateUBOMapping:Y,uniformBlockBinding:Z,texStorage2D:Le,texStorage3D:T,texSubImage2D:lt,texSubImage3D:ue,compressedTexSubImage2D:_t,compressedTexSubImage3D:Te,scissor:se,viewport:ce,reset:ae}}function dg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap,p=new Set,u,f=new WeakMap,g=new Set,_=new FinalizationRegistry(T=>g.delete(T)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(T,v){return m?new OffscreenCanvas(T,v):Bs("canvas")}function S(T,v,z){let te=1,K=Le(T);if((K.width>z||K.height>z)&&(te=z/Math.max(K.width,K.height)),te<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let se=Math.floor(te*K.width),ce=Math.floor(te*K.height);u===void 0&&(u=d(se,ce));let Y=v?d(se,ce):u;return Y.width=se,Y.height=ce,Y.getContext("2d").drawImage(T,0,0,se,ce),Ae("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+se+"x"+ce+")."),Y}else return"data"in T&&Ae("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function A(T){return T.generateMipmaps}function E(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(T,v,z,te,K,se=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ce;te&&(ce=e.get("EXT_texture_norm16"),ce||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=v;if(v===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8),z===i.UNSIGNED_SHORT&&ce&&(Y=ce.R16_EXT),z===i.SHORT&&ce&&(Y=ce.R16_SNORM_EXT)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),v===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8),z===i.UNSIGNED_SHORT&&ce&&(Y=ce.RG16_EXT),z===i.SHORT&&ce&&(Y=ce.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&(z===i.UNSIGNED_SHORT&&ce&&(Y=ce.RGB16_EXT),z===i.SHORT&&ce&&(Y=ce.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),v===i.RGBA){let Z=se?Fs:ke.getTransfer(K);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=Z===Je?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ce&&(Y=ce.RGBA16_EXT),z===i.SHORT&&ce&&(Y=ce.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(T,v){let z;return T?v===null||v===bn||v===Hi?z=i.DEPTH24_STENCIL8:v===wn?z=i.DEPTH32F_STENCIL8:v===Ss&&(z=i.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===bn||v===Hi?z=i.DEPTH_COMPONENT24:v===wn?z=i.DEPTH_COMPONENT32F:v===Ss&&(z=i.DEPTH_COMPONENT16),z}function M(T,v){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ct&&T.minFilter!==yt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function U(T){let v=new WeakRef(T);n.get(T).__ref=v,g.add(v),_.register(T,v,v)}function P(T){let v=n.get(T).__ref;v!==void 0&&(g.delete(v),_.unregister(v))}function L(T){V(T.target)}function F(T){R(T.target)}function V(T){T.removeEventListener("dispose",L),P(T),G(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&p.delete(T)}function R(T){T.removeEventListener("dispose",F),P(T),ee(T)}function B(){for(let T of g){let v=T.deref();v!==void 0&&(v.isRenderTarget===!0?R(v):V(v))}g.clear(),p.clear()}function G(T){let v=n.get(T);if(v.__webglInit===void 0)return;let z=T.source,te=f.get(z);if(te){let K=te[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&H(T),Object.keys(te).length===0&&f.delete(z)}n.remove(T)}function H(T){let v=n.get(T);i.deleteTexture(v.__webglTexture);let z=T.source,te=f.get(z);delete te[v.__cacheKey],a.memory.textures--}function ee(T){let v=n.get(T);v.__depthDisposeCallback&&v.__depthDisposeCallback();let z=T.depthTexture;if(z&&z.renderTarget===T&&V(z),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let se=0;se<v.__webglFramebuffer[K].length;se++)i.deleteFramebuffer(v.__webglFramebuffer[K][se]);else i.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)i.deleteFramebuffer(v.__webglFramebuffer[K]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let te=T.textures;for(let K=0,se=te.length;K<se;K++){let ce=n.get(te[K]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(te[K])}n.remove(T)}let q=0;function Q(){q=0}function j(){return q}function Se(T){q=T}function De(){let T=q;return T>=s.maxTextures&&Ae("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,T}function $(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.mipmapsAutoUpdate),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function pe(T,v){let z=n.get(T);if(T.isVideoTexture&&_t(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){let te=T.image;if(te===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(z,T,v);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}function ve(T,v){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){vt(z,T,v);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}function Ee(T,v){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){vt(z,T,v);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}function me(T,v){let z=n.get(T);if(T.version>0&&z.__version!==T.version){$t(z,T,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}let Fe={[ls]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[jr]:i.MIRRORED_REPEAT},mt={[Ct]:i.NEAREST,[Th]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[yt]:i.LINEAR,[Ra]:i.LINEAR_MIPMAP_NEAREST,[an]:i.LINEAR_MIPMAP_LINEAR},Re={[Ph]:i.NEVER,[kl]:i.ALWAYS,[Ih]:i.LESS,[Bl]:i.LEQUAL,[Lh]:i.EQUAL,[zl]:i.GEQUAL,[Dh]:i.GREATER,[Nh]:i.NOTEQUAL};function Qe(T,v){if(v.type===wn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===yt||v.magFilter===Ra||v.magFilter===Ks||v.magFilter===an||v.minFilter===yt||v.minFilter===Ra||v.minFilter===Ks||v.minFilter===an)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Fe[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Fe[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Fe[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,mt[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,mt[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ct||v.minFilter!==Ks&&v.minFilter!==an||v.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function et(T,v){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",L),U(v));let te=v.source,K=f.get(te);K===void 0&&(K={},f.set(te,K));let se=$(v);if(se!==T.__cacheKey){K[se]===void 0&&(K[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),K[se].usedTimes++;let ce=K[T.__cacheKey];ce!==void 0&&(K[T.__cacheKey].usedTimes--,ce.usedTimes===0&&H(v)),T.__cacheKey=se,T.__webglTexture=K[se].texture}return z}function Ve(T,v,z){return Math.floor(Math.floor(T/z)/v)}function It(T,v,z,te){let se=T.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,z,te,v.data);else{se.sort((C,J)=>C.start-J.start);let ce=0;for(let C=1;C<se.length;C++){let J=se[ce],X=se[C],oe=J.start+J.count,ie=Ve(X.start,v.width,4),re=Ve(J.start,v.width,4);X.start<=oe+1&&ie===re&&Ve(X.start+X.count-1,v.width,4)===ie?J.count=Math.max(J.count,X.start+X.count-J.start):(++ce,se[ce]=X)}se.length=ce+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let C=0,J=se.length;C<J;C++){let X=se[C],oe=Math.floor(X.start/4),ie=Math.ceil(X.count/4),re=oe%v.width,be=Math.floor(oe/v.width),Be=ie,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,be),t.texSubImage2D(i.TEXTURE_2D,0,re,be,Be,ne,z,te,v.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function vt(T,v,z){let te=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(te=i.TEXTURE_3D);let K=et(T,v),se=v.source;t.bindTexture(te,T.__webglTexture,i.TEXTURE0+z);let ce=n.get(se);if(se.version!==ce.__version||K===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ne=ke.getPrimaries(ke.workingColorSpace),we=v.colorSpace===jn?null:ke.getPrimaries(v.colorSpace),Oe=v.colorSpace===jn||ne===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let Z=S(v.image,!1,s.maxTextureSize);Z=Te(v,Z);let ae=r.convert(v.format,v.colorSpace),C=r.convert(v.type),J=w(v.internalFormat,ae,C,v.normalized,v.colorSpace,v.isVideoTexture);Qe(te,v);let X,oe=v.mipmaps,ie=v.isVideoTexture!==!0,re=ce.__version===void 0||K===!0,be=se.dataReady,Be=M(v,Z);if(v.isDepthTexture)J=x(v.format===Qn,v.type),re&&(ie?t.texStorage2D(i.TEXTURE_2D,1,J,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,J,Z.width,Z.height,0,ae,C,null));else if(v.isDataTexture)if(oe.length>0){ie&&re&&t.texStorage2D(i.TEXTURE_2D,Be,J,oe[0].width,oe[0].height);for(let ne=0,we=oe.length;ne<we;ne++)X=oe[ne],ie?be&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,X.width,X.height,ae,C,X.data):t.texImage2D(i.TEXTURE_2D,ne,J,X.width,X.height,0,ae,C,X.data);v.generateMipmaps=!1}else ie?(re&&t.texStorage2D(i.TEXTURE_2D,Be,J,Z.width,Z.height),be&&It(v,Z,ae,C)):t.texImage2D(i.TEXTURE_2D,0,J,Z.width,Z.height,0,ae,C,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ie&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,J,oe[0].width,oe[0].height,Z.depth);for(let ne=0,we=oe.length;ne<we;ne++)if(X=oe[ne],v.format!==on)if(ae!==null)if(ie){if(be)if(v.layerUpdates.size>0){let Oe=Yl(X.width,X.height,v.format,v.type);for(let de of v.layerUpdates){let je=X.data.subarray(de*Oe/X.data.BYTES_PER_ELEMENT,(de+1)*Oe/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,de,X.width,X.height,1,ae,je)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,X.width,X.height,Z.depth,ae,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,J,X.width,X.height,Z.depth,0,X.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,X.width,X.height,Z.depth,ae,C,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,J,X.width,X.height,Z.depth,0,ae,C,X.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ie&&re&&t.texStorage2D(i.TEXTURE_2D,Be,J,oe[0].width,oe[0].height);for(let ne=0,we=oe.length;ne<we;ne++)X=oe[ne],v.format!==on?ae!==null?ie?be&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,X.width,X.height,ae,X.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,J,X.width,X.height,0,X.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?be&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,X.width,X.height,ae,C,X.data):t.texImage2D(i.TEXTURE_2D,ne,J,X.width,X.height,0,ae,C,X.data)}else if(v.isDataArrayTexture)if(ie){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,J,Z.width,Z.height,Z.depth),be)if(v.layerUpdates.size>0){let ne=Yl(Z.width,Z.height,v.format,v.type);for(let we of v.layerUpdates){let Oe=Z.data.subarray(we*ne/Z.data.BYTES_PER_ELEMENT,(we+1)*ne/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,we,Z.width,Z.height,1,ae,C,Oe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ae,C,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,J,Z.width,Z.height,Z.depth,0,ae,C,Z.data);else if(v.isData3DTexture)ie?(re&&t.texStorage3D(i.TEXTURE_3D,Be,J,Z.width,Z.height,Z.depth),be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ae,C,Z.data)):t.texImage3D(i.TEXTURE_3D,0,J,Z.width,Z.height,Z.depth,0,ae,C,Z.data);else if(v.isFramebufferTexture){if(re)if(ie)t.texStorage2D(i.TEXTURE_2D,Be,J,Z.width,Z.height);else{let ne=Z.width,we=Z.height;for(let Oe=0;Oe<Be;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,J,ne,we,0,ae,C,null),ne>>=1,we>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),Z.parentNode!==ne){ne.appendChild(Z),p.add(v),ne.onpaint=we=>{let Oe=we.changedElements;for(let de of p)Oe.includes(de.image)&&(de.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let Oe=i.RGBA,de=i.RGBA,je=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Oe,de,je,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(ie&&re){let ne=Le(oe[0]);t.texStorage2D(i.TEXTURE_2D,Be,J,ne.width,ne.height)}for(let ne=0,we=oe.length;ne<we;ne++)X=oe[ne],ie?be&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae,C,X):t.texImage2D(i.TEXTURE_2D,ne,J,ae,C,X);v.generateMipmaps=!1}else if(ie){if(re){let ne=Le(Z);t.texStorage2D(i.TEXTURE_2D,Be,J,ne.width,ne.height)}be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,C,Z)}else t.texImage2D(i.TEXTURE_2D,0,J,ae,C,Z);A(v)&&v.mipmapsAutoUpdate===!0&&E(te),ce.__version=se.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function $t(T,v,z){if(v.image.length!==6)return;let te=et(T,v),K=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);let se=n.get(K);if(K.version!==se.__version||te===!0){t.activeTexture(i.TEXTURE0+z);let ce=ke.getPrimaries(ke.workingColorSpace),Y=v.colorSpace===jn?null:ke.getPrimaries(v.colorSpace),Z=v.colorSpace===jn||ce===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let ae=v.isCompressedTexture||v.image[0].isCompressedTexture,C=v.image[0]&&v.image[0].isDataTexture,J=[];for(let de=0;de<6;de++)!ae&&!C?J[de]=S(v.image[de],!0,s.maxCubemapSize):J[de]=C?v.image[de].image:v.image[de],J[de]=Te(v,J[de]);let X=J[0],oe=r.convert(v.format,v.colorSpace),ie=r.convert(v.type),re=w(v.internalFormat,oe,ie,v.normalized,v.colorSpace),be=v.isVideoTexture!==!0,Be=se.__version===void 0||te===!0,ne=K.dataReady,we=M(v,X);Qe(i.TEXTURE_CUBE_MAP,v);let Oe;if(v.isDepthTexture){if(re=x(v.format===Qn,v.type),Be)if(be)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,re,X.width,X.height);else for(let de=0;de<6;de++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,X.width,X.height,0,oe,ie,null)}else if(ae){be&&Be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,re,X.width,X.height);for(let de=0;de<6;de++){Oe=J[de].mipmaps;for(let je=0;je<Oe.length;je++){let Tt=Oe[je];v.format!==on?oe!==null?be?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,je,0,0,Tt.width,Tt.height,oe,Tt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,je,re,Tt.width,Tt.height,0,Tt.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,je,0,0,Tt.width,Tt.height,oe,ie,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,je,re,Tt.width,Tt.height,0,oe,ie,Tt.data)}}}else{if(Oe=v.mipmaps,be&&Be){Oe.length>0&&we++;let de=Le(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,re,de.width,de.height)}for(let de=0;de<6;de++)if(C){be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,J[de].width,J[de].height,oe,ie,J[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,J[de].width,J[de].height,0,oe,ie,J[de].data);for(let je=0;je<Oe.length;je++){let si=Oe[je].image[de].image;be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,je+1,0,0,si.width,si.height,oe,ie,si.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,je+1,re,si.width,si.height,0,oe,ie,si.data)}}else{be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,oe,ie,J[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,oe,ie,J[de]);for(let je=0;je<Oe.length;je++){let Tt=Oe[je];be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,je+1,0,0,oe,ie,Tt.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,je+1,re,oe,ie,Tt.image[de])}}}A(v)&&v.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),se.__version=K.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ht(T,v,z,te,K,se){let ce=r.convert(z.format,z.colorSpace),Y=r.convert(z.type),Z=w(z.internalFormat,ce,Y,z.normalized,z.colorSpace),ae=n.get(v),C=n.get(z);if(C.__renderTarget=v,!ae.__hasExternalTextures){let J=Math.max(1,v.width>>se),X=Math.max(1,v.height>>se);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,se,Z,J,X,v.depth,0,ce,Y,null):t.texImage2D(K,se,Z,J,X,0,ce,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ue(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,K,C.__webglTexture,0,lt(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,K,C.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pn(T,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){let te=v.depthTexture,K=te&&te.isDepthTexture?te.type:null,se=x(v.stencilBuffer,K),ce=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ue(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(v),se,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(v),se,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,se,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,T)}else{let te=v.textures;for(let K=0;K<te.length;K++){let se=te[K],ce=r.convert(se.format,se.colorSpace),Y=r.convert(se.type),Z=w(se.internalFormat,ce,Y,se.normalized,se.colorSpace);ue(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(v),Z,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(v),Z,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Z,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(T,v,z){let te=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(v.depthTexture);K.__renderTarget=v;let se=te?v.depthTexture.image[0]:v.depthTexture.image;(!K.__webglTexture||se.width!==v.width||se.height!==v.height)&&(se.width=v.width,se.height=v.height,v.depthTexture.needsUpdate=!0),te?me(v.depthTexture,0):pe(v.depthTexture,0);let ce=K.__webglTexture,Y=lt(v),Z=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ae=v.depthTexture.format===Qn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Yn)ue(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,Z,ce,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ae,Z,ce,0);else if(v.depthTexture.format===Qn)ue(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,Z,ce,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ae,Z,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dn(T){let v=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let te=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),te){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,te.removeEventListener("dispose",K)};te.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=te}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(z)for(let te=0;te<6;te++)Et(v.__webglFramebuffer[te],T,te);else T.texture.mipmaps.length>0?Et(v.__webglFramebuffer[0],T,0):Et(v.__webglFramebuffer,T,0);else if(z){v.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[te]),v.__webglDepthbuffer[te]===void 0)v.__webglDepthbuffer[te]=i.createRenderbuffer(),Pn(v.__webglDepthbuffer[te],T,!1);else{let K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,se)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Pn(v.__webglDepthbuffer,T,!1);else{let K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function fn(T,v,z){let te=n.get(T);v!==void 0&&ht(te.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&dn(T)}function pn(T){let v=T.texture,z=n.get(T),te=n.get(v);T.addEventListener("dispose",F),U(T);let K=T.textures,se=T.isWebGLCubeRenderTarget===!0,ce=K.length>1;if(ce||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=v.version,a.memory.textures++),se){z.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(v.mipmaps.length>0){z.__webglFramebuffer[Y]=[];for(let Z=0;Z<v.mipmaps.length;Z++)z.__webglFramebuffer[Y][Z]=i.createFramebuffer()}else z.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(v.mipmaps.length>0){z.__webglFramebuffer=[];for(let Y=0;Y<v.mipmaps.length;Y++)z.__webglFramebuffer[Y]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ce)for(let Y=0,Z=K.length;Y<Z;Y++){let ae=n.get(K[Y]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ue(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Y=0;Y<K.length;Y++){let Z=K[Y];z.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Y]);let ae=r.convert(Z.format,Z.colorSpace),C=r.convert(Z.type),J=w(Z.internalFormat,ae,C,Z.normalized,Z.colorSpace,T.isXRRenderTarget===!0),X=lt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,J,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,z.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Pn(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,v);for(let Y=0;Y<6;Y++)if(v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)ht(z.__webglFramebuffer[Y][Z],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else ht(z.__webglFramebuffer[Y],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);A(v)?E(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let Y=0,Z=K.length;Y<Z;Y++){let ae=K[Y],C=n.get(ae),J=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(J=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,C.__webglTexture),Qe(J,ae),ht(z.__webglFramebuffer,T,ae,i.COLOR_ATTACHMENT0+Y,J,0),A(ae)&&E(J)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Y=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,te.__webglTexture),Qe(Y,v),v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)ht(z.__webglFramebuffer[Z],T,v,i.COLOR_ATTACHMENT0,Y,Z);else ht(z.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,Y,0);A(v)?E(Y):v.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&dn(T)}function D(T){let v=T.textures;for(let z=0,te=v.length;z<te;z++){let K=v[z];if(A(K)&&K.mipmapsAutoUpdate===!0){let se=b(T),ce=n.get(K).__webglTexture;t.bindTexture(se,ce),E(se),t.unbindTexture()}}}let mn=[];function ot(T){if(T.samples>0){if(ue(T)===!1){let v=T.textures,z=T.width,te=T.height,K=i.COLOR_BUFFER_BIT,se=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(T),Y=v.length>1;if(Y)for(let ae=0;ae<v.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ae=0;ae<v.length;ae++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);let C=n.get(v[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,z,te,0,0,z,te,K,i.NEAREST),l===!0&&(mn.length=0,mn.push(i.COLOR_ATTACHMENT0+ae),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&mn.push(se),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ae=0;ae<v.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);let C=n.get(v[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,C,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function lt(T){return Math.min(s.maxSamples,T.samples)}function ue(T){let v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function _t(T){let v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function Te(T,v){let z=T.colorSpace,te=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Ni&&z!==jn&&(ke.getTransfer(z)===Je?(te!==on||K!==Ht)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",z)),v}function Le(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=De,this.resetTextureUnits=Q,this.getTextureUnits=j,this.setTextureUnits=Se,this.setTexture2D=pe,this.setTexture2DArray=ve,this.setTexture3D=Ee,this.setTextureCube=me,this.rebindTextures=fn,this.setupRenderTarget=pn,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=dn,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=ue,this.dispose=B}function fg(i,e){function t(n,s=jn){let r,a=ke.getTransfer(s);if(n===Ht)return i.UNSIGNED_BYTE;if(n===Pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ia)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Il)return i.BYTE;if(n===Ll)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===Ca)return i.INT;if(n===bn)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===Ul)return i.ALPHA;if(n===Fl)return i.RGB;if(n===on)return i.RGBA;if(n===Yn)return i.DEPTH_COMPONENT;if(n===Qn)return i.DEPTH_STENCIL;if(n===Qs)return i.RED;if(n===La)return i.RED_INTEGER;if(n===yi)return i.RG;if(n===Da)return i.RG_INTEGER;if(n===Na)return i.RGBA_INTEGER;if(n===js||n===er||n===tr||n===nr)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Fa||n===Oa||n===Ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===ka||n===Ha||n===Va||n===Ga||n===ir||n===Wa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===za||n===ka)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ha)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Va)return r.COMPRESSED_R11_EAC;if(n===Ga)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ir)return r.COMPRESSED_RG11_EAC;if(n===Wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka||n===Qa||n===ja||n===eo||n===to||n===no||n===io||n===so)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eo)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===to)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===no)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===io)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===so)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ro||n===ao||n===oo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ro)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ao)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lo||n===co||n===sr||n===ho)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var pg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mg=`
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

}`,nc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new qs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new St({vertexShader:pg,fragmentShader:mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Kt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ic=class extends Dn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new nc,d={},S=t.getContextAttributes(),A=null,E=null,b=[],w=[],x=new Ue,M=null,U=null,P=new Xt;P.viewport=new nt;let L=new Xt;L.viewport=new nt;let F=[P,L],V=new ba,R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let pe=b[$];return pe===void 0&&(pe=new ds,b[$]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function($){let pe=b[$];return pe===void 0&&(pe=new ds,b[$]=pe),pe.getGripSpace()},this.getHand=function($){let pe=b[$];return pe===void 0&&(pe=new ds,b[$]=pe),pe.getHandSpace()};function G($){let pe=w.indexOf($.inputSource);if(pe===-1)return;let ve=b[pe];ve!==void 0&&(ve.update($.inputSource,$.frame,c||a),ve.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",ee);for(let $=0;$<b.length;$++){let pe=w[$];pe!==null&&(w[$]=null,b[$].disconnect(pe))}R=null,B=null,m.reset();for(let $ in d)delete d[$];if(e.setRenderTarget(A),f=null,u=null,p=null,s=null,E=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(x.width,x.height,!1),U!==null){let $=U.camera;$.fov=U.fov,$.zoom=U.zoom,$.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",H),s.addEventListener("inputsourceschange",ee),S.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ee=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=S.stencil?Qn:Yn,Ee=S.stencil?Hi:bn);let Fe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Fe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new zt(u.textureWidth,u.textureHeight,{format:on,type:Ht,depthTexture:new Jn(u.textureWidth,u.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ve={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new zt(f.framebufferWidth,f.framebufferHeight,{format:on,type:Ht,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),De.setContext(s),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee($){for(let pe=0;pe<$.removed.length;pe++){let ve=$.removed[pe],Ee=w.indexOf(ve);Ee>=0&&(w[Ee]=null,b[Ee].disconnect(ve))}for(let pe=0;pe<$.added.length;pe++){let ve=$.added[pe],Ee=w.indexOf(ve);if(Ee===-1){for(let Fe=0;Fe<b.length;Fe++)if(Fe>=w.length){w.push(ve),Ee=Fe;break}else if(w[Fe]===null){w[Fe]=ve,Ee=Fe;break}if(Ee===-1)break}let me=b[Ee];me&&me.connect(ve)}}function q($,pe){pe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(pe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let pe=$.near,ve=$.far;m.texture!==null&&(m.depthNear>0&&(pe=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),V.near=L.near=P.near=pe,V.far=L.far=P.far=ve,(R!==V.near||B!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),R=V.near,B=V.far),V.layers.mask=$.layers.mask|6,P.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;let Ee=$.parent,me=V.cameras;q(V,Ee);for(let Fe=0;Fe<me.length;Fe++)q(me[Fe],Ee);V.projectionMatrix.copy(P.projectionMatrix),V.projectionMatrixInverse.copy(P.projectionMatrixInverse),U===null&&$.isPerspectiveCamera&&(U={camera:$,fov:$.fov,zoom:$.zoom}),Q($,V,Ee)};function Q($,pe,ve){ve===null?$.matrix.copy(pe.matrixWorld):($.matrix.copy(ve.matrixWorld),$.matrix.invert(),$.matrix.multiply(pe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(pe.projectionMatrix),$.projectionMatrixInverse.copy(pe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ta*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function($){return d[$]};let j=null;function Se($,pe){if(h=pe.getViewerPose(c||a),g=pe,h!==null){let ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let Ee=!1;ve.length!==V.cameras.length&&(V.cameras.length=0,Ee=!0);for(let Re=0;Re<ve.length;Re++){let Qe=ve[Re],et=null;if(f!==null)et=f.getViewport(Qe);else{let It=p.getViewSubImage(u,Qe);et=It.viewport,Re===0&&(e.setRenderTargetTextures(E,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(E))}let Ve=F[Re];Ve===void 0&&(Ve=new Xt,Ve.layers.enable(Re),Ve.viewport=new nt,F[Re]=Ve),Ve.matrix.fromArray(Qe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Qe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(et.x,et.y,et.width,et.height),Re===0&&(V.matrix.copy(Ve.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ee===!0&&V.cameras.push(Ve)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){p=n.getBinding();let Re=p.getDepthInformation(ve[0]);Re&&Re.isValid&&Re.texture&&m.init(Re,s.renderState)}if(me&&me.includes("camera-access")&&_){e.state.unbindTexture(),p=n.getBinding();for(let Re=0;Re<ve.length;Re++){let Qe=ve[Re].camera;if(Qe){let et=d[Qe];et||(et=new qs,d[Qe]=et);let Ve=p.getCameraImage(Qe);et.sourceTexture=Ve}}}}for(let ve=0;ve<b.length;ve++){let Ee=w[ve],me=b[ve];Ee!==null&&me!==void 0&&me.update(Ee,pe,c||a)}j&&j($,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),g=null}let De=new du;De.setAnimationLoop(Se),this.setAnimationLoop=function($){j=$},this.dispose=function(){}}},gg=new Ke,Mu=new Pe;Mu.set(-1,0,0,0,1,0,0,0,1);function xg(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Wl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,A,E){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),p(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&f(m,d,E)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,S,A):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Zt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Zt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let S=e.get(d),A=S.envMap,E=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(gg.makeRotationFromEuler(E)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Mu),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,S,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=A*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,S){m.ior.value=d.ior,d.diffuseRoughness>0&&(m.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Zt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vg(i,e,t,n){let s={},r={};function a(S,A){let E=A.program;n.uniformBlockBinding(S,E,s[S.id])}function o(S,A){let E=s[S.id];E===void 0&&(g(S),E=l(S),s[S.id]=E,S.addEventListener("dispose",m));let b=A.program;n.updateUBOMapping(S,b);let w=e.render.frame;r[S.id]!==w&&(c(S),r[S.id]=w)}function l(S){let A=i.createBuffer(),E=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,E,b),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(S){let A=s[S.id],E=S.uniforms,b=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let w=0,x=E.length;w<x;w++){let M=E[w];if(Array.isArray(M))for(let U=0,P=M.length;U<P;U++)h(M[U],w,U,b);else h(M,w,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,A,E,b){if(u(S,A,E,b)===!0){let w=S.__offset,x=S.value;if(Array.isArray(x)){let M=0;for(let U=0;U<x.length;U++){let P=x[U],L=_(P,!0);p(P,S.__data,M),M+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else p(x,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,S.__data)}}function p(S,A,E){typeof S=="number"||typeof S=="boolean"?A[E]=S:S.isMatrix3?(A[E]=S.elements[0],A[E+1]=S.elements[1],A[E+2]=S.elements[2],A[E+3]=0,A[E+4]=S.elements[3],A[E+5]=S.elements[4],A[E+6]=S.elements[5],A[E+7]=0,A[E+8]=S.elements[6],A[E+9]=S.elements[7],A[E+10]=S.elements[8],A[E+11]=0):ArrayBuffer.isView(S)?A.set(S.subarray(0,A.length-E),E):S.toArray(A,E)}function u(S,A,E,b){let w=S.value,x=A+"_"+E;if(Array.isArray(w)){b[x]===void 0&&(b[x]=[]);let M=b[x],U=!1;for(let P=0;P<w.length;P++)f(w[P],M,P)===!0&&(U=!0);return U}return f(w,b,x)}function f(S,A,E){if(A[E]===void 0)return typeof S=="number"||typeof S=="boolean"?A[E]=S:ArrayBuffer.isView(S)?A[E]=S.slice():A[E]=S.clone(),!0;{let b=A[E];if(typeof S=="number"||typeof S=="boolean"){if(b!==S)return A[E]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(b.equals(S)===!1)return b.copy(S),!0}}return!1}function g(S){let A=S.uniforms,E=0,b=16;for(let x=0,M=A.length;x<M;x++){let U=Array.isArray(A[x])?A[x]:[A[x]];for(let P=0,L=U.length;P<L;P++){let F=U[P],V=Array.isArray(F.value)?F.value:[F.value],R=Array.isArray(A[x])||Array.isArray(F.value),B=E;for(let H=0,ee=V.length;H<ee;H++){let q=V[H],Q=_(q,R),j=E%b,Se=j%Q.boundary,De=j+Se;E+=Se,De!==0&&b-De<Q.storage&&(E+=b-De),H===0&&(B=E),E+=Q.storage}let G=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new G((E-B)/Float32Array.BYTES_PER_ELEMENT),F.__offset=B}}let w=E%b;return w>0&&(E+=b-w),S.__size=E,S.__cache={},this}function _(S,A){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=16,E.storage=48):S.isMatrix4?(E.boundary=16,E.storage=64):S.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",S),A===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function m(S){let A=S.target;A.removeEventListener("dispose",m),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function d(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:d}}var _g=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Un=null;function yg(){return Un===null&&(Un=new Fi(_g,16,16,yi,En),Un.name="DFG_LUT",Un.minFilter=yt,Un.magFilter=yt,Un.wrapS=Ln,Un.wrapT=Ln,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}var mo=class{constructor(e={}){let{canvas:t=Fh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Ht}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,m=new Set([Na,Da,La]),d=new Set([Ht,bn,Ss,Hi,Pa,Ia]),S=new Uint32Array(4),A=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},b=null,w=null,x=[],M=[],U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,L=!1,F=null,V=null,R=null,B=null;this._outputColorSpace=nn;let G=0,H=0,ee=null,q=-1,Q=null,j=new nt,Se=new nt,De=null,$=new qe(0),pe=0,ve=t.width,Ee=t.height,me=1,Fe=null,mt=null,Re=new nt(0,0,ve,Ee),Qe=new nt(0,0,ve,Ee),et=!1,Ve=new Oi,It=new ra,vt=!1,$t=!1,ht=new Ke,Pn=new N,Et=new nt,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fn=!1;function pn(){return ee===null?me:1}let D=n;function mn(y,I){return t.getContext(y,I)}let ot,lt,ue,_t,Te,Le,T,v,z,te,K,se,ce,Y,Z,ae,C,J,X,oe,ie,re,be;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",de,!1),D===null){let I="webgl2";if(D=mn(I,y),D===null)throw mn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(y){throw t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Ce("WebGLRenderer: "+y.message),y}function Be(){ot=new Im(D),ot.init(),ie=new fg(D,ot),lt=new ym(D,ot,e,ie),ue=new ug(D,ot),lt.reversedDepthBuffer&&u&&ue.buffers.depth.setReversed(!0),V=D.createFramebuffer(),R=D.createFramebuffer(),B=D.createFramebuffer(),_t=new Nm(D),Te=new K0,Le=new dg(D,ot,ue,Te,lt,ie,_t),T=new Pm(P),v=new Ud(D),re=new vm(D,v),z=new Lm(D,v,_t,re),te=new Fm(D,z,v,re,_t),J=new Um(D,lt,Le),Z=new Sm(Te),K=new J0(P,T,ot,lt,re,Z),se=new xg(P,Te),ce=new j0,Y=new rg(ot),C=new xm(P,T,ue,te,g,l),ae=new hg(P,te,lt),be=new vg(D,_t,lt,ue),X=new _m(D,ot,_t),oe=new Dm(D,ot,_t),_t.programs=K.programs,P.capabilities=lt,P.extensions=ot,P.properties=Te,P.renderLists=ce,P.shadowMap=ae,P.state=ue,P.info=_t}_!==Ht&&(U=new Bm(_,t.width,t.height,o,s,r));let ne=new ic(P,D);this.xr=ne,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=ot.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ot.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(y){y!==void 0&&(me=y,this.setSize(ve,Ee,!1))},this.getSize=function(y){return y.set(ve,Ee)},this.setSize=function(y,I,W=!0){if(ne.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=y,Ee=I,t.width=Math.floor(y*me),t.height=Math.floor(I*me),W===!0&&(t.style.width=y+"px",t.style.height=I+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(ve*me,Ee*me).floor()},this.setDrawingBufferSize=function(y,I,W){ve=y,Ee=I,me=W,t.width=Math.floor(y*W),t.height=Math.floor(I*W),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(_===Ht){Ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(j)},this.getViewport=function(y){return y.copy(Re)},this.setViewport=function(y,I,W,O){y.isVector4?Re.set(y.x,y.y,y.z,y.w):Re.set(y,I,W,O),ue.viewport(j.copy(Re).multiplyScalar(pn()).round())},this.getScissor=function(y){return y.copy(Qe)},this.setScissor=function(y,I,W,O){y.isVector4?Qe.set(y.x,y.y,y.z,y.w):Qe.set(y,I,W,O),ue.scissor(Se.copy(Qe).multiplyScalar(pn()).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(y){ue.setScissorTest(et=y)},this.setOpaqueSort=function(y){Fe=y},this.setTransparentSort=function(y){mt=y},this.getClearColor=function(y){return y.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,W=!0){let O=0;if(y){let k=!1;if(ee!==null){let he=ee.texture.format;k=m.has(he)}if(k){let he=ee.texture.type,xe=d.has(he),le=C.getClearColor(),ge=C.getClearAlpha(),Me=le.r,Ne=le.g,Ge=le.b;xe?(S[0]=Me,S[1]=Ne,S[2]=Ge,S[3]=ge,D.clearBufferuiv(D.COLOR,0,S)):(A[0]=Me,A[1]=Ne,A[2]=Ge,A[3]=ge,D.clearBufferiv(D.COLOR,0,A))}else O|=D.COLOR_BUFFER_BIT}I&&(O|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),C.dispose(),ce.dispose(),Y.dispose(),Le.dispose(),Te.dispose(),T.dispose(),te.dispose(),z.dispose(),re.dispose(),be.dispose(),K.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",bc),ne.removeEventListener("sessionend",wc),Ai.stop()};function we(y){y.preventDefault(),Vl("WebGLRenderer: Context Lost."),L=!0}function Oe(){Vl("WebGLRenderer: Context Restored."),L=!1;let y=_t.autoReset,I=ae.enabled,W=ae.autoUpdate,O=ae.needsUpdate,k=ae.type;Be(),_t.autoReset=y,ae.enabled=I,ae.autoUpdate=W,ae.needsUpdate=O,ae.type=k}function de(y){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function je(y){let I=y.target;I.removeEventListener("dispose",je),Tt(I)}function Tt(y){si(y),Te.remove(y)}function si(y){let I=Te.get(y).programs;I!==void 0&&(I.forEach(function(W){K.releaseProgram(W)}),y.isShaderMaterial&&K.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,W,O,k,he){I===null&&(I=dn);let xe=k.isMesh&&k.matrixWorld.determinantAffine()<0,le=Zu(y,I,W,O,k);ue.setMaterial(O,xe);let ge=W.index,Me=1;if(O.wireframe===!0){if(ge=z.getWireframeAttribute(W),ge===void 0)return;Me=2}let Ne=W.drawRange,Ge=W.attributes.position,_e=Ne.start*Me,We=(Ne.start+Ne.count)*Me;he!==null&&(_e=Math.max(_e,he.start*Me),We=Math.min(We,(he.start+he.count)*Me)),ge!==null?(_e=Math.max(_e,0),We=Math.min(We,ge.count)):Ge!=null&&(_e=Math.max(_e,0),We=Math.min(We,Ge.count));let gt=We-_e;if(gt<0||gt===1/0)return;re.setup(k,O,le,W,ge);let it,tt=X;if(ge!==null&&(it=v.get(ge),tt=oe,tt.setIndex(it)),k.isMesh)O.wireframe===!0?(ue.setLineWidth(O.wireframeLinewidth*pn()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(k.isLine){let Nt=O.linewidth;Nt===void 0&&(Nt=1),ue.setLineWidth(Nt*pn()),k.isLineSegments?tt.setMode(D.LINES):k.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else k.isPoints?tt.setMode(D.POINTS):k.isSprite&&tt.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))tt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Nt=k._multiDrawStarts,ye=k._multiDrawCounts,Wt=k._multiDrawCount,$e=ge?v.get(ge).bytesPerElement:1,Ri=Te.get(O).currentProgram.getUniforms();for(let Ut=0;Ut<Wt;Ut++)Ri.setValue(D,"_gl_DrawID",Ut),tt.render(Nt[Ut]/$e,ye[Ut])}else if(k.isInstancedMesh)tt.renderInstances(_e,gt,k.count);else if(W.isInstancedBufferGeometry){let Nt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ye=Math.min(W.instanceCount,Nt);tt.renderInstances(_e,gt,ye)}else tt.render(_e,gt)};function Mc(y,I,W,O){F!==null&&y.isNodeMaterial&&F.setObject(O,y),vt===!0&&Z.setState(y,W,!1),y.transparent===!0&&y.side===Qt&&y.forceSinglePass===!1?(y.side=Zt,y.needsUpdate=!0,Rs(y,I,O),y.side=_i,y.needsUpdate=!0,Rs(y,I,O),y.side=Qt):Rs(y,I,O)}this.compile=function(y,I,W=null){W===null&&(W=y),F!==null&&F.renderStart(y,I,W),w=Y.get(W),w.init(I),M.push(w),W.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),y!==W&&y.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),$t=this.localClippingEnabled,vt=Z.init(this.clippingPlanes,$t),vt===!0&&Z.setGlobalState(this.clippingPlanes,I),F!==null&&ae.render(w.state.shadowsArray,W,I);let O=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let he=k.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){let le=he[xe];Mc(le,W,I,k),O.add(le)}else Mc(he,W,I,k),O.add(he)}),w=M.pop(),F!==null&&F.renderEnd(),O},this.compileAsync=function(y,I,W=null){let O=this.compile(y,I,W);return new Promise(k=>{function he(){if(O.forEach(function(xe){let ge=Te.get(xe).currentProgram;(ge===void 0||ge.isReady())&&O.delete(xe)}),O.size===0){k(y);return}setTimeout(he,10)}ot.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Bo=null;function qu(y){Bo&&Bo(y)}function bc(){Ai.stop()}function wc(){Ai.start()}let Ai=new du;Ai.setAnimationLoop(qu),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(y){Bo=y,ne.setAnimationLoop(y),y===null?Ai.stop():Ai.start()},ne.addEventListener("sessionstart",bc),ne.addEventListener("sessionend",wc),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(y,I);let W=ne.enabled===!0&&ne.isPresenting===!0,O=U!==null&&(ee===null||W)&&U.begin(P,ee);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(I),I=ne.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,I,ee),w=Y.get(y,M.length),w.init(I),w.state.textureUnits=Le.getTextureUnits(),M.push(w),ht.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?It.setFromArrayCamera(I):Ve.setFromProjectionMatrix(ht,xn,I.reversedDepth),$t=this.localClippingEnabled,vt=Z.init(this.clippingPlanes,$t),b=ce.get(y,x.length),b.init(),x.push(b),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){let xe=P.xr.getDepthSensingMesh();xe!==null&&zo(xe,I,-1/0,P.sortObjects)}zo(y,I,0,P.sortObjects),b.finish(),F!==null&&F.updateLights(w.state.lightsArray),P.sortObjects===!0&&b.sort(Fe,mt),fn=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,fn&&C.addToRenderList(b,y),this.info.autoReset===!0&&this.info.reset(),vt===!0&&Z.beginShadows();let k=w.state.shadowsArray;if(ae.render(k,y,I),vt===!0&&Z.endShadows(),(O&&U.hasRenderPass())===!1){let xe=b.opaque,le=b.transmissive;if(w.setupLights(),I.isArrayCamera){let ge=I.cameras;if(le.length>0)for(let Me=0,Ne=ge.length;Me<Ne;Me++){let Ge=ge[Me];Tc(xe,le,y,Ge)}fn&&C.render(y);for(let Me=0,Ne=ge.length;Me<Ne;Me++){let Ge=ge[Me];Ec(b,y,Ge,Ge.viewport)}}else le.length>0&&Tc(xe,le,y,I),fn&&C.render(y),Ec(b,y,I)}ee!==null&&H===0&&(Le.updateMultisampleRenderTarget(ee),Le.updateRenderTargetMipmap(ee)),O&&U.end(P),y.isScene===!0&&y.onAfterRender(P,y,I),re.resetDefaultState(),q=-1,Q=null,M.pop(),M.length>0?(w=M[M.length-1],Le.setTextureUnits(w.state.textureUnits),vt===!0&&Z.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?b=x[x.length-1]:b=null,F!==null&&F.renderEnd()};function zo(y,I,W,O){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){let xe=I.isArrayCamera?It:Ve;if(!y.frustumCulled||y.intersectsFrustum(xe)){O&&Et.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ht);let le=te.update(y),ge=y.material;ge.visible&&b.push(y,le,ge,W,Et.z,null,I)}}else if(y.isMesh||y.isLine||y.isPoints){let xe=I.isArrayCamera?It:Ve;if(!y.frustumCulled||y.intersectsFrustum(xe)){let le=te.update(y),ge=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Et.copy(y.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Et.copy(le.boundingSphere.center)),Et.applyMatrix4(y.matrixWorld).applyMatrix4(ht)),Array.isArray(ge)){let Me=le.groups;for(let Ne=0,Ge=Me.length;Ne<Ge;Ne++){let _e=Me[Ne],We=ge[_e.materialIndex];We&&We.visible&&b.push(y,le,We,W,Et.z,_e,I)}}else ge.visible&&b.push(y,le,ge,W,Et.z,null,I)}}}let he=y.children;for(let xe=0,le=he.length;xe<le;xe++)zo(he[xe],I,W,O)}function Ec(y,I,W,O){let{opaque:k,transmissive:he,transparent:xe}=y;w.setupLightsView(W),vt===!0&&Z.setGlobalState(P.clippingPlanes,W),O&&ue.viewport(j.copy(O)),k.length>0&&vr(k,I,W),he.length>0&&vr(he,I,W),xe.length>0&&vr(xe,I,W),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Tc(y,I,W,O){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[O.id]===void 0){let _e=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[O.id]=new zt(1,1,{generateMipmaps:!0,type:_e?En:Ht,minFilter:an,samples:Math.max(4,lt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ke.workingColorSpace})}let he=w.state.transmissionRenderTarget[O.id],xe=O.viewport||j;he.setSize(xe.z*P.transmissionResolutionScale,xe.w*P.transmissionResolutionScale);let le=P.getRenderTarget(),ge=P.getActiveCubeFace(),Me=P.getActiveMipmapLevel();P.setRenderTarget(he),P.getClearColor($),pe=P.getClearAlpha(),pe<1&&P.setClearColor(16777215,.5),P.clear(),fn&&C.render(W);let Ne=P.toneMapping;P.toneMapping=Nn;let Ge=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),w.setupLightsView(O),vt===!0&&Z.setGlobalState(P.clippingPlanes,O),vr(y,W,O),Le.updateMultisampleRenderTarget(he),Le.updateRenderTargetMipmap(he),ot.has("WEBGL_multisampled_render_to_texture")===!1){let _e=!1;for(let We=0,gt=I.length;We<gt;We++){let it=I[We],{object:tt,geometry:Nt,material:ye,group:Wt}=it;if(ye.side===Qt&&tt.layers.test(O.layers)){let $e=ye.side;ye.side=Zt,ye.needsUpdate=!0,Ac(tt,W,O,Nt,ye,Wt),ye.side=$e,ye.needsUpdate=!0,_e=!0}}_e===!0&&(Le.updateMultisampleRenderTarget(he),Le.updateRenderTargetMipmap(he))}P.setRenderTarget(le,ge,Me),P.setClearColor($,pe),Ge!==void 0&&(O.viewport=Ge),P.toneMapping=Ne}function vr(y,I,W){let O=I.isScene===!0?I.overrideMaterial:null;for(let k=0,he=y.length;k<he;k++){let xe=y[k],{object:le,geometry:ge,group:Me}=xe,Ne=xe.material;Ne.allowOverride===!0&&O!==null&&(Ne=O),le.layers.test(W.layers)&&Ac(le,I,W,ge,Ne,Me)}}function Ac(y,I,W,O,k,he){F!==null&&k.isNodeMaterial&&F.setObject(y,k),y.onBeforeRender(P,I,W,O,k,he),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(P,I,W,O,y,he),k.transparent===!0&&k.side===Qt&&k.forceSinglePass===!1?(k.side=Zt,k.needsUpdate=!0,P.renderBufferDirect(W,I,O,k,y,he),k.side=_i,k.needsUpdate=!0,P.renderBufferDirect(W,I,O,k,y,he),k.side=Qt):P.renderBufferDirect(W,I,O,k,y,he),y.onAfterRender(P,I,W,O,k,he)}function Rc(y){let I=0;for(let W of y)W.texture!==null&&I++;return I}function Rs(y,I,W){I.isScene!==!0&&(I=dn);let O=Te.get(y),k=w.state.lights,he=w.state.shadowsArray,xe=k.state.version,le=K.getParameters(y,k.state,he,I,W,w.state.lightProbeGridArray),ge=K.getProgramCacheKey(le),Me=O.programs;O.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;let Ne=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;O.envMap=T.get(y.envMap||O.environment,Ne),O.envMapRotation=O.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Me===void 0&&(y.addEventListener("dispose",je),Me=new Map,O.programs=Me,O.programVariants=new Map);let Ge=Me.get(ge);if(Ge!==void 0){if(O.currentProgram===Ge&&O.lightsStateVersion===xe)return Pc(y,le),Ge}else le.uniforms=K.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,W,le),y.onBeforeCompile(le,P),Ge=K.acquireProgram(le,ge),Me.set(ge,Ge),O.uniforms=le.uniforms;let _e=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(_e.clippingPlanes=Z.uniform),Pc(y,le),O.needsLights=Ju(y),O.lightsStateVersion=xe,O.needsLights&&(_e.ambientLightColor.value=k.state.ambient,_e.lightProbe.value=k.state.probe,_e.sunLights.value=k.state.sun,_e.sunLightShadows.value=k.state.sunShadow,_e.directionalLights.value=k.state.directional,_e.directionalLightShadows.value=k.state.directionalShadow,_e.spotLights.value=k.state.spot,_e.spotLightShadows.value=k.state.spotShadow,_e.rectAreaLights.value=k.state.rectArea,_e.ltc_1.value=k.state.rectAreaLTC1,_e.ltc_2.value=k.state.rectAreaLTC2,_e.pointLights.value=k.state.point,_e.pointLightShadows.value=k.state.pointShadow,_e.hemisphereLights.value=k.state.hemi,_e.sunShadowMatrix.value=k.state.sunShadowMatrix,_e.sunShadowCascade.value=k.state.sunShadowCascade,_e.directionalShadowMatrix.value=k.state.directionalShadowMatrix,_e.spotLightMatrix.value=k.state.spotLightMatrix,_e.spotLightMap.value=k.state.spotLightMap,_e.pointShadowMatrix.value=k.state.pointShadowMatrix),O.numLightProbeGrids=Rc(w.state.lightProbeGridArray),O.currentProgram=Ge,O.uniformsList=null,Ge}function Yu(y,I,W,O,k){let he=Te.get(y),xe=he.currentProgram.id+","+O+","+k,le=he.programVariants.get(xe);return le===void 0?(le=Rs(y,I,W),he.programVariants.set(xe,le)):(he.currentProgram=le,he.uniformsList=null,he.outputColorSpace=O,he.toneMapping=k),le}function Cc(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=Ms.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Pc(y,I){let W=Te.get(y);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function Zu(y,I,W,O,k){I.isScene!==!0&&(I=dn),Le.resetTextureUnits();let he=I.fog,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,le=ee===null?P.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ke.workingColorSpace,ge=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Me=T.get(O.envMap||xe,ge),Ne=O.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),_e=!!W.morphAttributes.position,We=!!W.morphAttributes.normal,gt=!!W.morphAttributes.color,it=Nn;O.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(it=P.toneMapping);let tt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Nt=tt!==void 0?tt.length:0,ye=Te.get(O),Wt=w.state.lights;if(vt===!0&&($t===!0||y!==Q)){let ut=y===Q&&O.id===q;Z.setState(O,y,ut)}let $e=!1,Ri=!1;O.version===ye.__version?ye.needsLights&&ye.lightsStateVersion!==Wt.state.version||k.isBatchedMesh&&ye.batching===!1||!k.isBatchedMesh&&ye.batching===!0||k.isBatchedMesh&&ye.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&ye.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&ye.instancing===!1||!k.isInstancedMesh&&ye.instancing===!0||k.isSkinnedMesh&&ye.skinning===!1||!k.isSkinnedMesh&&ye.skinning===!0||k.isInstancedMesh&&ye.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ye.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ye.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ye.instancingMorph===!1&&k.morphTexture!==null||ye.envMap!==Me||O.fog===!0&&ye.fog!==he||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Z.numPlanes||ye.numIntersection!==Z.numIntersection)||ye.vertexAlphas!==Ne||ye.vertexTangents!==Ge||ye.morphTargets!==_e||ye.morphNormals!==We||ye.morphColors!==gt||ye.morphTargetsCount!==Nt||ye.numLightProbeGrids!==Rc(w.state.lightProbeGridArray)?$e=!0:(ye.outputColorSpace!==le||ye.toneMapping!==it)&&(Ri=!0):($e=!0,ye.__version=O.version);let Ut=ye.currentProgram;($e===!0||Ri===!0)&&(Ut=Ri===!0?Yu(O,I,k,le,it):Rs(O,I,k),F&&O.isNodeMaterial&&F.onUpdateProgram(O,Ut,ye));let _r=!1,ri=!1,Ci=!1,Ze=Ut.getUniforms(),Lt=ye.uniforms;if(ue.useProgram(Ut.program)&&(_r=!0,ri=!0,Ci=!0),O.id!==q&&(q=O.id,ri=!0),_r||Q!==y){ue.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ze.setValue(D,"projectionMatrix",y.projectionMatrix),Ze.setValue(D,"viewMatrix",y.matrixWorldInverse);let At=Ze.map.cameraPosition;At!==void 0&&At.setValue(D,Pn.setFromMatrixPosition(y.matrixWorld)),lt.logarithmicDepthBuffer&&Ze.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ze.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),Q!==y&&(Q=y,ri=!0,Ci=!0)}if(ye.needsLights&&(Wt.state.sunShadowMap.length>0&&Ze.setValue(D,"sunShadowMap",Wt.state.sunShadowMap,Le),Wt.state.directionalShadowMap.length>0&&Ze.setValue(D,"directionalShadowMap",Wt.state.directionalShadowMap,Le),Wt.state.spotShadowMap.length>0&&Ze.setValue(D,"spotShadowMap",Wt.state.spotShadowMap,Le),Wt.state.pointShadowMap.length>0&&Ze.setValue(D,"pointShadowMap",Wt.state.pointShadowMap,Le)),k.isSkinnedMesh){Ze.setOptional(D,k,"bindMatrix"),Ze.setOptional(D,k,"bindMatrixInverse");let ut=k.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),Ze.setValue(D,"boneTexture",ut.boneTexture,Le))}k.isBatchedMesh&&(Ze.setOptional(D,k,"batchingTexture"),Ze.setValue(D,"batchingTexture",k._matricesTexture,Le),Ze.setOptional(D,k,"batchingIdTexture"),Ze.setValue(D,"batchingIdTexture",k._indirectTexture,Le),Ze.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Ze.setValue(D,"batchingColorTexture",k._colorsTexture,Le));let _n=W.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&J.update(k,W,Ut),(ri||ye.receiveShadow!==k.receiveShadow)&&(ye.receiveShadow=k.receiveShadow,Ze.setValue(D,"receiveShadow",k.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&(Lt.envMapIntensity.value=I.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=yg()),ri){if(Ze.setValue(D,"toneMappingExposure",P.toneMappingExposure),ye.needsLights&&$u(Lt,Ci),he&&O.fog===!0&&se.refreshFogUniforms(Lt,he),se.refreshMaterialUniforms(Lt,O,me,Ee,w.state.transmissionRenderTarget[y.id]),ye.needsLights&&ye.numLightProbeGrids>0){let ut=E,At=0;for(let zn of w.state.lightProbeGridArray)zn.texture!==null&&(ut.textures[At]=zn.texture,ut.min[At]=zn.boundingBox.min,ut.max[At]=zn.boundingBox.max,ut.resolution[At]=zn.resolution,At++);for(let zn in ut)ut[zn].length=At;Lt.probesSH.value=ut.textures,Lt.probesMin.value=ut.min,Lt.probesMax.value=ut.max,Lt.probesResolution.value=ut.resolution}Ms.upload(D,Cc(ye),Lt,Le)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ms.upload(D,Cc(ye),Lt,Le),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ze.setValue(D,"center",k.center),Ze.setValue(D,"modelViewMatrix",k.modelViewMatrix),Ze.setValue(D,"normalMatrix",k.normalMatrix),Ze.setValue(D,"modelMatrix",k.matrixWorld),O.uniformsGroups!==void 0){let ut=O.uniformsGroups;for(let At=0,zn=ut.length;At<zn;At++){let Lc=ut[At];be.update(Lc,Ut),be.bind(Lc,Ut)}}return Ut}function $u(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Ju(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(y,I,W){let O=Te.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Te.get(y.texture).__webglTexture=I,Te.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:W,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){let W=Te.get(y);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,W=0){ee=y,G=I,H=W;let O=null,k=!1,he=!1;if(y){let le=Te.get(y);if(le.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(D.FRAMEBUFFER,le.__webglFramebuffer),j.copy(y.viewport),Se.copy(y.scissor),De=y.scissorTest,ue.viewport(j),ue.scissor(Se),ue.setScissorTest(De),q=-1;return}else if(le.__webglFramebuffer===void 0)Le.setupRenderTarget(y);else if(le.__hasExternalTextures)Le.rebindTextures(y,Te.get(y.texture).__webglTexture,Te.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ne=y.depthTexture;if(le.__boundDepthTexture!==Ne){if(Ne!==null&&Te.has(Ne)&&(y.width!==Ne.image.width||y.height!==Ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(y)}}let ge=y.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(he=!0);let Me=Te.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Me[I])?O=Me[I][W]:O=Me[I],k=!0):y.samples>0&&Le.useMultisampledRTT(y)===!1?O=Te.get(y).__webglMultisampledFramebuffer:Array.isArray(Me)?O=Me[W]:O=Me,j.copy(y.viewport),Se.copy(y.scissor),De=y.scissorTest}else j.copy(Re).multiplyScalar(me).floor(),Se.copy(Qe).multiplyScalar(me).floor(),De=et;if(W!==0&&(O=V),ue.bindFramebuffer(D.FRAMEBUFFER,O)&&ue.drawBuffers(y,O),ue.viewport(j),ue.scissor(Se),ue.setScissorTest(De),k){let le=Te.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,le.__webglTexture,W)}else if(he){let le=I;for(let ge=0;ge<y.textures.length;ge++){let Me=Te.get(y.textures[ge]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ge,Me.__webglTexture,W,le)}}else if(y!==null&&W!==0){let le=Te.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,le.__webglTexture,W)}q=-1};function Ic(y){let I=Te.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=lt.textureFormatReadable(y.format),I.__typeReadable=lt.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,W,O,k,he,xe,le=0){if(!(y&&y.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Te.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(ge=ge[xe],Array.isArray(ge)&&(ge=ge[0])),ge){ue.bindFramebuffer(D.FRAMEBUFFER,ge);try{let Me=y.textures[le],Ne=Me.format,Ge=Me.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+le);let _e=Ic(Me);if(_e.__formatReadable===!1){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(_e.__typeReadable===!1){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-O&&W>=0&&W<=y.height-k&&D.readPixels(I,W,O,k,ie.convert(Ne),ie.convert(Ge),he)}finally{let Me=ee!==null?Te.get(ee).__webglFramebuffer:null;ue.bindFramebuffer(D.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(y,I,W,O,k,he,xe,le=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Te.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(ge=ge[xe],Array.isArray(ge)&&(ge=ge[0])),ge)if(I>=0&&I<=y.width-O&&W>=0&&W<=y.height-k){ue.bindFramebuffer(D.FRAMEBUFFER,ge);let Me=y.textures[le],Ne=Me.format,Ge=Me.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+le);let _e=Ic(Me);if(_e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(_e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let We=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,We),D.bufferData(D.PIXEL_PACK_BUFFER,he.byteLength,D.STREAM_READ),D.readPixels(I,W,O,k,ie.convert(Ne),ie.convert(Ge),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let gt=ee!==null?Te.get(ee).__webglFramebuffer:null;ue.bindFramebuffer(D.FRAMEBUFFER,gt);let it=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Bh(D,it,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,We),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,he),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(We),D.deleteSync(it),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,W=0){let O=Math.pow(2,-W),k=Math.floor(y.image.width*O),he=Math.floor(y.image.height*O),xe=I!==null?I.x:0,le=I!==null?I.y:0;Le.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,xe,le,k,he),ue.unbindTexture()},this.copyTextureToTexture=function(y,I,W=null,O=null,k=0,he=0){let xe,le,ge,Me,Ne,Ge,_e,We,gt,it=y.isCompressedTexture?y.mipmaps[he]:y.image;if(W!==null)xe=W.max.x-W.min.x,le=W.max.y-W.min.y,ge=W.isBox3?W.max.z-W.min.z:1,Me=W.min.x,Ne=W.min.y,Ge=W.isBox3?W.min.z:0;else{let Ze=Math.pow(2,-k);xe=Math.floor(it.width*Ze),le=Math.floor(it.height*Ze),y.isDataArrayTexture?ge=it.depth:y.isData3DTexture?ge=Math.floor(it.depth*Ze):ge=1,Me=0,Ne=0,Ge=0}O!==null?(_e=O.x,We=O.y,gt=O.z):(_e=0,We=0,gt=0);let tt=ie.convert(I.format),Nt=ie.convert(I.type),ye;I.isData3DTexture?(Le.setTexture3D(I,0),ye=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Le.setTexture2DArray(I,0),ye=D.TEXTURE_2D_ARRAY):(Le.setTexture2D(I,0),ye=D.TEXTURE_2D),ue.activeTexture(D.TEXTURE0),ue.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),ue.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),ue.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);let Wt=ue.getParameter(D.UNPACK_ROW_LENGTH),$e=ue.getParameter(D.UNPACK_IMAGE_HEIGHT),Ri=ue.getParameter(D.UNPACK_SKIP_PIXELS),Ut=ue.getParameter(D.UNPACK_SKIP_ROWS),_r=ue.getParameter(D.UNPACK_SKIP_IMAGES);ue.pixelStorei(D.UNPACK_ROW_LENGTH,it.width),ue.pixelStorei(D.UNPACK_IMAGE_HEIGHT,it.height),ue.pixelStorei(D.UNPACK_SKIP_PIXELS,Me),ue.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),ue.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);let ri=y.isDataArrayTexture||y.isData3DTexture,Ci=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){let Ze=Te.get(y),Lt=Te.get(I),_n=Te.get(Ze.__renderTarget),ut=Te.get(Lt.__renderTarget);ue.bindFramebuffer(D.READ_FRAMEBUFFER,_n.__webglFramebuffer),ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let At=0;At<ge;At++)ri&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.get(y).__webglTexture,k,Ge+At),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.get(I).__webglTexture,he,gt+At)),D.blitFramebuffer(Me,Ne,Me+xe,Ne+le,_e,We,_e+xe,We+le,D.DEPTH_BUFFER_BIT,D.NEAREST);ue.bindFramebuffer(D.READ_FRAMEBUFFER,null),ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||Te.has(y)){let Ze=Te.get(y),Lt=Te.get(I);ue.bindFramebuffer(D.READ_FRAMEBUFFER,R),ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,B);for(let _n=0;_n<ge;_n++)ri?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ze.__webglTexture,k,Ge+_n):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ze.__webglTexture,k),Ci?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.__webglTexture,he,gt+_n):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Lt.__webglTexture,he),k!==0?D.blitFramebuffer(Me,Ne,Me+xe,Ne+le,_e,We,_e+xe,We+le,D.COLOR_BUFFER_BIT,D.NEAREST):Ci?D.copyTexSubImage3D(ye,he,_e,We,gt+_n,Me,Ne,xe,le):D.copyTexSubImage2D(ye,he,_e,We,Me,Ne,xe,le);ue.bindFramebuffer(D.READ_FRAMEBUFFER,null),ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ci?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(ye,he,_e,We,gt,xe,le,ge,tt,Nt,it.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(ye,he,_e,We,gt,xe,le,ge,tt,it.data):D.texSubImage3D(ye,he,_e,We,gt,xe,le,ge,tt,Nt,it):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,he,_e,We,xe,le,tt,Nt,it.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,he,_e,We,it.width,it.height,tt,it.data):D.texSubImage2D(D.TEXTURE_2D,he,_e,We,xe,le,tt,Nt,it);ue.pixelStorei(D.UNPACK_ROW_LENGTH,Wt),ue.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$e),ue.pixelStorei(D.UNPACK_SKIP_PIXELS,Ri),ue.pixelStorei(D.UNPACK_SKIP_ROWS,Ut),ue.pixelStorei(D.UNPACK_SKIP_IMAGES,_r),he===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&D.generateMipmap(ye),ue.unbindTexture()},this.initRenderTarget=function(y){Te.get(y).__webglFramebuffer===void 0&&Le.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Le.setTextureCube(y,0):y.isData3DTexture?Le.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Le.setTexture2DArray(y,0):Le.setTexture2D(y,0),ue.unbindTexture()},this.resetState=function(){G=0,H=0,ee=null,ue.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}};var vo=class{constructor(){this.ctx=null,this.buffer=null,this.output=null,this.source=null,this.duration=1,this.mode="silent",this.base=0,this.anchorPerf=performance.now(),this.startCtx=0,this.syncOffsetMs=0,this._delta=null}setBuffer(e){let t=this.mode==="playing";this.stopSource(),this.buffer=e,this.duration=e.duration,this.base=0,this.anchorPerf=performance.now(),this.mode="silent",t&&this.play()}connect(e,t){this.ctx=e,this.output=t}stopSource(){if(this.source){this.source.onended=null;try{this.source.stop()}catch{}this.source.disconnect(),this.source=null}}play(){if(!this.ctx||!this.buffer)return;let e=this.songTimeAt(performance.now());this.stopSource();let t=this.ctx.createBufferSource();t.buffer=this.buffer,t.loop=!this.onEnded,t.onended=()=>{this.source===t&&(this.source=null,this.base=0,this.mode="paused",this.onEnded?.())},t.connect(this.output),this.startCtx=this.ctx.currentTime+.08,t.start(this.startCtx,e),this.source=t,this.base=e,this.mode="playing",this._delta=null}pause(){let e=this.songTimeAt(performance.now());this.stopSource(),this.base=e,this.mode="paused"}runSilent(){let e=this.songTimeAt(performance.now());this.stopSource(),this.base=e,this.anchorPerf=performance.now(),this.mode="silent"}seek(e){let t=this.mode==="playing";this.stopSource(),this.base=(e%this.duration+this.duration)%this.duration,this.anchorPerf=performance.now(),t&&(this.mode="paused",this.play())}_ctxTimeAt(e){let t=this.ctx,n,s=t.getOutputTimestamp?t.getOutputTimestamp():null;if(s&&s.performanceTime>0&&s.contextTime>0)n=s.contextTime-s.performanceTime/1e3;else{let r=t.outputLatency||t.baseLatency||0;n=t.currentTime-r-performance.now()/1e3}return this._delta===null||Math.abs(n-this._delta)>.08?this._delta=n:this._delta+=(n-this._delta)*.04,this._delta+e/1e3}songTimeAt(e){let t;this.mode==="playing"?(t=this._ctxTimeAt(e)-this.startCtx+this.base-this.syncOffsetMs/1e3,t<0&&t>-1&&(t=0)):this.mode==="silent"?t=this.base+(e-this.anchorPerf)/1e3:t=this.base;let n=this.duration;return(t%n+n)%n}latencyInfo(){let e=this.ctx;if(!e)return null;let t=e.getOutputTimestamp?e.getOutputTimestamp():null,n=t&&t.performanceTime>0&&t.contextTime>0?(e.currentTime-t.contextTime-(performance.now()-t.performanceTime)/1e3)*1e3:null;return{baseLatencyMs:(e.baseLatency||0)*1e3,outputLatencyMs:(e.outputLatency||0)*1e3,measuredOutputDelayMs:n,syncOffsetMs:this.syncOffsetMs}}};var bu=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,rc=`
precision highp float;
uniform float uTime, uBeat, uBar, uBeats;
uniform float uKick, uSnare, uHat, uBass, uMid, uHigh, uEnergy, uCentroid;
uniform float uTravel, uAspect, uHue, uBright, uWarm, uDrop;
uniform vec4 uSection;     // index, energy (eased), seconds since it began, energy (as written)
uniform float uDist[8];    // slot 0 only: how far away each note is along the road (see Chase)
uniform float uCalm;
uniform float uSecBeats;   // beats since this part of the song began
uniform vec2 uRes;
uniform vec2 uHalf;        // half size of the surface, meters
uniform vec4 uNote[48];
uniform float uRand[48];   // a fixed random number per note (or a value the score set)
uniform float uLevel[8];   // slow per-instrument levels; meaning depends on the scene
uniform sampler2D uNoise;
uniform sampler2D uSpectrum;
#define TAU 6.28318530718
#define PI 3.14159265359
#define N(slot, i) uNote[(slot) * 8 + (i)]

float vnoise(vec2 x) {
  vec2 p = floor(x), f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return texture2D(uNoise, (p + f + 0.5) / 256.0).r;
}
vec4 hash4(vec2 cell) { return texture2D(uNoise, (floor(cell) + 0.5) / 256.0); }
mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
vec3 hueShift(vec3 c, float h) {
  const vec3 k = vec3(0.57735);
  float ca = cos(h * TAU), sa = sin(h * TAU);
  return c * ca + cross(k, c) * sa + k * dot(k, c) * (1.0 - ca);
}
// Shared finish: hue, warm or cool cast, brightness, a filmic curve, and a
// little noise so dark gradients do not band.
vec3 grade(vec3 c) {
  c = max(hueShift(c, uHue), 0.0);
  c *= mix(vec3(0.92, 0.98, 1.08), vec3(1.08, 1.0, 0.9), uWarm * 0.5 + 0.5) * uBright;
  c = (c * (2.51 * c + 0.03)) / (c * (2.43 * c + 0.59) + 0.14);
  c += (texture2D(uNoise, gl_FragCoord.xy / 256.0).g - 0.5) / 200.0;
  return clamp(c, 0.0, 1.0);
}
float spec(float x) { return texture2D(uSpectrum, vec2(x, 0.5)).r; }
float stars(vec2 p, float density) {
  vec4 h = hash4(p);
  vec2 d = fract(p) - (0.15 + 0.7 * h.xy);
  return step(1.0 - density, h.z) * exp(-dot(d, d) * (120.0 + 260.0 * h.w)) * (0.35 + 0.65 * h.w);
}
float env(int slot, float rate) {   // loudest recent hit of an instrument, decaying
  float e = 0.0;
  for (int i = 0; i < 3; i++) { vec4 n = N(slot, i); if (n.x >= 0.0) e = max(e, exp(-n.x * rate) * n.z); }
  return e;
}
`,Sg=`
const float RZ = 3.4;
vec3 accentCol() {
  float i = mod(uSection.x, 5.0);
  vec3 c = vec3(0.35, 0.85, 1.0);
  c = mix(c, vec3(0.62, 0.5, 1.0), step(0.5, i));
  c = mix(c, vec3(1.0, 0.32, 0.72), step(1.5, i));
  c = mix(c, vec3(1.0, 0.62, 0.22), step(2.5, i));
  c = mix(c, vec3(0.5, 1.0, 0.82), step(3.5, i));
  return c;
}
vec3 haloLight(vec3 ro, vec3 rd, float tmax, float cy, float R, vec3 acc) {
  vec3 col = vec3(0.0);
  if (rd.z > -0.02) return col;
  vec3 C = vec3(0.0, cy, -RZ);
  float t = (-RZ - ro.z) / rd.z;
  if (t > 0.0 && t < tmax) {
    vec3 p = ro + rd * t;
    vec2 q = p.xy - C.xy;
    float rr = length(q), ang = atan(q.y, q.x);
    float sp = spec(abs(ang) / PI);
    float Rk = R * (1.0 + 0.08 * uKick) + sp * R * 0.24 * (0.3 + uEnergy);
    float d = abs(rr - Rk) / R;
    float line = 0.012 / (d + 0.006);
    float gain = 0.5 + 0.7 * uEnergy + 0.8 * uKick;
    col += (vec3(1.0) * line * line * 0.7 + acc * (0.05 / (d + 0.05)) + acc * 0.2 * exp(-d * 5.0)) * gain;
    // shafts of light fanning out from the ring
    float rays = pow(vnoise(vec2(ang * 5.0 + 20.0, uTravel * 0.25)), 3.0) + 0.5 * pow(vnoise(vec2(ang * 13.0, -uTravel * 0.4)), 4.0);
    col += acc * rays * exp(-rr / R * 0.9) * (0.1 + 0.5 * uEnergy + 0.5 * uKick) * smoothstep(Rk * 0.6, Rk, rr);
    // snare: rings that leave the halo and fade
    for (int i = 0; i < 4; i++) {
      vec4 n = N(1, i);
      if (n.x < 0.0 || n.x > 2.0) continue;
      float re = R * (1.03 + n.x * 1.6);
      col += acc * (0.007 / (abs(rr - re) / R + 0.006)) * exp(-n.x * 2.8) * n.z;
    }
    col += acc * 0.1 * uBass * smoothstep(Rk, 0.0, rr);
    col += vec3(0.9, 0.95, 1.0) * stars(q * 4.0 + floor(uTime * 9.0) * 3.7, 0.4) * env(2, 16.0) * 2.2;
    col += acc * exp(-max(p.y + uHalf.y, 0.0) * 2.4) * 0.1 * (0.4 + uEnergy);   // haze lying on the water
  }
  // two thin rings turning around the halo like a gyroscope: mids and highs
  for (int k = 0; k < 2; k++) {
    float fk = float(k);
    float a = uTravel * (0.16 + 0.07 * fk) + fk * 1.9, b = 0.55 + 0.35 * sin(uTravel * 0.06 + fk * 2.4);
    vec3 nrm = normalize(vec3(sin(a) * cos(b), sin(b), cos(a) * cos(b)));
    float dn = dot(rd, nrm);
    float tk = dot(C - ro, nrm) / (abs(dn) < 1e-4 ? 1e-4 : dn);
    if (tk > 0.0 && tk < tmax) {
      float lv = k == 0 ? uMid : uHigh;
      float dk = abs(length(ro + rd * tk - C) - R * (1.22 + 0.2 * fk)) / R;
      col += mix(vec3(1.0), acc, 0.5) * (0.004 / (dk + 0.004)) * (0.25 + 0.9 * lv) * smoothstep(0.03, 0.2, abs(dn));
    }
  }
  // a skyline of light bars behind: one per frequency band
  float t2 = (-(RZ + 2.6) - ro.z) / rd.z;
  if (t2 > 0.0 && t2 < tmax) {
    vec3 p2 = ro + rd * t2;
    float y = p2.y + uHalf.y;
    for (int k = 0; k < 11; k++) {
      float fk = float(k) - 5.0;
      float lv = spec(0.05 + 0.085 * abs(fk)) * (0.45 + 0.9 * uEnergy);
      float h = lv * uHalf.y * 2.4;
      float dx = abs(p2.x - fk * uHalf.x * 0.36);
      float m = smoothstep(h, h * 0.94 - 0.02, y) * step(0.0, y);
      col += mix(vec3(1.0), acc, 0.7) * ((0.014 / (dx + 0.014)) * m + exp(-(dx * dx + (y - h) * (y - h)) * 500.0) * 1.5) * (0.2 + 0.8 * lv);
    }
    col += vec3(0.7, 0.8, 1.0) * stars(p2.xy * 1.6 + 9.0, 0.5) * 0.3;
  }
  return col;
}
vec3 portal(vec3 ro, vec3 rd) {
  vec2 hs = uHalf;
  float floorY = -hs.y, cy = hs.y * 0.1, R = min(hs.y, hs.x) * 0.62;
  vec3 acc = accentCol();
  float tf = rd.y < -0.001 ? (floorY - ro.y) / rd.y : 1e6;
  vec3 pf = ro + rd * tf;
  if (pf.z > 0.0) tf = 1e6;
  vec3 col = haloLight(ro, rd, tf, cy, R, acc) + acc * 0.006 * (1.0 + uEnergy);
  if (tf < 1e5) {
    vec2 c = pf.xz - vec2(0.0, -RZ);
    float dc = length(c), h = 0.0;
    for (int i = 0; i < 3; i++) {
      vec4 n = N(0, i);
      if (n.x < 0.0 || n.x > 3.0) continue;
      h += sin(dc * 7.0 - n.x * 16.0) * exp(-n.x * 1.6) * exp(-abs(dc - n.x * 4.0) * 0.9) * n.z;
    }
    h += 0.4 * uBass * sin(pf.x * 3.1 + uTravel * 1.3) * sin(pf.z * 2.3 - uTravel);
    vec3 rr = normalize(vec3(rd.x + (c.x / (dc + 0.5)) * h * 0.07, -rd.y + h * 0.05, rd.z));
    float fres = 0.45 + 0.55 * pow(1.0 - clamp(-rd.y, 0.0, 1.0), 3.0);
    col += haloLight(pf, rr, 1e6, cy, R, acc) * fres * 0.85;
    for (int i = 0; i < 4; i++) {
      vec4 n = N(0, i);
      if (n.x < 0.0 || n.x > 1.2) continue;
      float zl = -RZ + n.x * 6.0;
      col += mix(vec3(1.0), acc, 0.5) * (0.02 / (abs(pf.z - zl) + 0.02)) * exp(-n.x * 2.2) * n.z * 0.9 * smoothstep(hs.x * 1.5, 0.0, abs(pf.x));
    }
  }
  return col;
}`,Mg=`
float frameDist(vec2 p, vec2 b) { vec2 d = abs(p) - b; return abs(length(max(d, 0.0)) + min(max(d.x, d.y), 0.0)); }
vec3 portal(vec3 ro, vec3 rd) {
  vec2 hs = uHalf;
  vec3 col = vec3(0.0);
  float sub = uLevel[0], wob = uLevel[1], rise = uLevel[2], phase = uLevel[3], bassOn = uLevel[4];
  vec3 acc = mix(vec3(0.55, 0.8, 1.0), vec3(0.78, 1.0, 0.1), step(1.5, uSection.x));
  acc = mix(acc, vec3(1.0, 0.22, 0.12), step(3.5, uSection.x) * step(uSection.x, 4.5));
  float stab = env(4, 7.0), snareEnv = env(1, 9.0), hatEnv = env(2, 18.0), kickEnv = env(0, 8.0);
  float flash = exp(-uDrop * 2.5);
  vec3 p0 = ro - rd * (ro.z / rd.z);
  float slice = floor((p0.y / hs.y) * 9.0 + 0.5);
  float hsh = hash4(vec2(slice, floor(uTime * 20.0))).x;
  float cut = (stab * 0.6 + exp(-uDrop * 5.0) * 0.8) * step(0.6, hsh);
  rd = normalize(rd + vec3((hsh - 0.8) * 0.12 * cut, 0.0, 0.0));
  float squeeze = 1.0 - 0.45 * rise * rise;
  float flow = uTravel * 1.4;
  float fringe = 0.004 + 0.05 * kickEnv + 0.08 * flash;      // color splits apart on the kick
  for (int k = 0; k < 18; k++) {
    float z = mod(float(k) * 1.6 - flow, 28.8) - 0.4;        // frames travel toward you and leave through the opening
    if (z < 0.04) continue;
    vec2 p = (ro + rd * ((-z - ro.z) / rd.z)).xy;
    float order = z / 1.6;
    p = rot(bassOn * 0.42 * sin(phase - order * 0.4) + 0.05 * sin(uTravel * 0.2 + order * 0.3)) * p;
    vec2 b = hs * 0.97 * squeeze * (1.0 + 0.05 * sub);
    float d = frameDist(p, b);
    float w = 0.0035 * z + 0.005;
    float hit = 0.0;
    for (int i = 0; i < 4; i++) {
      vec4 n = N(0, i);
      if (n.x < 0.0 || n.x > 1.5) continue;
      hit += exp(-pow((order - n.x * 34.0) * 0.5, 2.0)) * exp(-n.x * 2.0) * n.z;
    }
    float odd = step(0.5, mod(floor(order + 0.5), 2.0));
    float I = 0.2 + 0.3 * uEnergy + 2.0 * hit + 1.0 * snareEnv * odd + 0.8 * flash;
    float tint = clamp(0.3 + 0.7 * bassOn * wob + 0.6 * snareEnv, 0.0, 1.0);
    float e = fringe * (0.3 + 0.1 * z);
    vec3 line = vec3(w / (abs(d - e) + w), w / (d + w), w / (abs(d + e) + w));
    float fog = exp(-z * 0.08) * smoothstep(0.04, 0.5, z);
    col += (mix(vec3(1.0), acc, tint) * line * line + acc * (w * 7.0 / (d + w * 7.0)) * 0.07) * I * fog;
    float di = frameDist(p, b * 0.7);
    col += vec3(0.8, 0.95, 1.0) * (w * 0.6 / (di + w * 0.6)) * (0.06 + hatEnv * 0.7) * fog * step(0.5, mod(floor(order + 0.5), 3.0));
  }
  // streaks rushing out of the far end: faster and brighter with the music
  vec2 q = rd.xy / -rd.z;
  float r = length(q), ang = atan(q.y, q.x);
  col += mix(vec3(1.0), acc, 0.6) * stars(vec2(ang * 9.0, 0.35 / (r + 0.02) + flow * 0.5), 0.45) * smoothstep(0.02, 0.3, r) * (0.15 + 0.9 * uEnergy + 0.8 * hatEnv);
  // the far end: a core that flares on the snare and swells with the riser
  vec2 pe = (ro + rd * ((-29.0 - ro.z) / rd.z)).xy;
  float core = exp(-dot(pe, pe) / (hs.y * hs.y * 2.0));
  float beams = pow(vnoise(vec2(ang * 7.0, uTravel * 0.5)), 3.0) * exp(-r * 2.5);
  col += (acc * (snareEnv * 0.6 + 0.1 * uEnergy) + vec3(1.0) * (rise * rise * 1.1 + flash * 0.6)) * (core + beams * 0.8);
  return col;
}`,bg=`
vec3 chordCol(float i) {
  vec3 c = vec3(0.95, 0.55, 0.45);
  c = mix(c, vec3(0.55, 0.5, 0.95), step(0.5, i));
  c = mix(c, vec3(0.3, 0.75, 0.85), step(1.5, i));
  c = mix(c, vec3(0.95, 0.7, 0.4), step(2.5, i));
  return c;
}
vec3 tideSky(vec3 d, vec2 uvh) {
  float iz = 1.0 / max(-d.z, 0.05);
  float u = d.x * iz, v = d.y * iz;
  float padAge = N(5, 0).x;
  vec3 tint = mix(chordCol(uRand[41] - 1.0), chordCol(uRand[40] - 1.0), smoothstep(0.0, 2.5, padAge));
  float pad = uLevel[0];
  vec3 col = mix(tint * 0.42, vec3(0.008, 0.014, 0.05), smoothstep(0.0, 0.5, v)) * (0.14 + 0.34 * pad);
  col += tint * (exp(-abs(v) * 11.0) * 0.5 + exp(-abs(v) * 60.0) * 0.4) * (0.35 + 0.8 * pad);
  float bass = uLevel[2];
  vec2 m = vec2(u, v - 0.16);
  float rad = 0.042 + 0.014 * bass;
  col += vec3(1.0, 0.8, 0.58) * (smoothstep(rad + 0.003, rad, length(m)) * 1.1 + exp(-dot(m, m) * (60.0 - 34.0 * bass)) * (0.15 + 0.7 * bass) + exp(-dot(m, m) * 9.0) * 0.12 * bass);
  float st = uLevel[1];
  if (st > 0.01) {
    for (int i = 0; i < 2; i++) {
      float fi = float(i);
      float yb = 0.3 + 0.16 * fi + 0.07 * sin(u * 2.1 + uTravel * 0.35 + fi * 2.0) + 0.04 * sin(u * 5.3 - uTravel * 0.5);
      float dy = v - yb;
      float rays = 0.6 + 0.4 * vnoise(vec2(u * 14.0 + fi * 9.0, uTravel * 0.4));
      col += mix(vec3(0.2, 1.0, 0.7), vec3(0.55, 0.4, 1.0), fi) * smoothstep(-0.02, 0.02, dy) * exp(-max(dy, 0.0) * 9.0) * rays * st * 0.95;
    }
  }
  col += vec3(0.8, 0.9, 1.0) * stars(vec2(u, v) * 26.0, 0.5) * smoothstep(0.05, 0.3, v) * 0.7;
  for (int i = 0; i < 8; i++) {
    vec4 n = N(1, i);
    if (n.x < 0.0 || n.x > 6.0) continue;
    vec2 e = vec2(u, v) - vec2((uRand[8 + i] - 0.5) * 1.8 * uvh.x, 0.2 + n.y * 0.5);
    float pop = 1.0 + 3.0 * exp(-n.x * 9.0);
    float g = 0.00012 * pop / (dot(e, e) + 0.00008);
    g += 0.00013 * pop * (exp(-abs(e.y) * 220.0) / (abs(e.x) + 0.02) + exp(-abs(e.x) * 220.0) / (abs(e.y) + 0.02));
    col += vec3(0.85, 0.95, 1.0) * g * exp(-n.x * 0.7) * n.z;
  }
  for (int i = 0; i < 6; i++) {
    vec4 n = N(3, i);
    if (n.x < 0.0) continue;
    float rel = n.x - n.w;
    float on = rel < 0.0 ? 1.0 : exp(-rel * 5.0);
    if (on < 0.01) continue;
    float jit = (vnoise(vec2(v * 9.0 + float(i) * 7.0, uTime * 18.0)) - 0.5) * 0.09 + (vnoise(vec2(v * 31.0, uTime * 30.0)) - 0.5) * 0.025;
    float dx = abs(u - (n.y - 0.5) * 1.6 * uvh.x - jit * (0.3 + v) - sin(v * 3.0 + n.x * 5.0) * 0.03);
    float arc = 0.006 / (dx + 0.006);
    float span = smoothstep(0.78, 0.5, v) * step(0.0, v);
    col += (vec3(1.0, 0.92, 0.82) * arc * arc * 1.4 + vec3(1.0, 0.4, 0.25) * (0.04 / (dx + 0.04)) * 0.55 + vec3(1.0, 0.3, 0.4) * exp(-dx * 9.0) * 0.12) * on * (1.0 + 2.0 * exp(-n.x * 10.0)) * span * n.z;
  }
  return col;
}
vec2 dropSpot(vec4 n, int i) { return vec2((n.y - 0.5) * 1.7 * uHalf.x, -(2.0 + uRand[i] * 5.0)); }
vec3 portal(vec3 ro, vec3 rd) {
  vec2 uvh = uHalf / 2.6;
  float waterY = -uHalf.y;
  if (rd.z > -0.02) rd = normalize(vec3(rd.xy, -0.02));
  vec3 col;
  if (rd.y < -0.002 && ro.y > waterY) {
    float t = (waterY - ro.y) / rd.y;
    vec3 pw = ro + rd * t;
    vec2 grad = vec2(0.0);
    float glint = 0.0, ff = 0.0;
    for (int i = 0; i < 8; i++) {
      vec4 n = N(0, i);
      if (n.x < 0.0 || n.x > 4.0) continue;
      vec2 e = pw.xz - dropSpot(n, i);
      float d = length(e), r = n.x * 1.1, a = exp(-n.x * 1.3) * n.z;
      grad += (e / (d + 0.05)) * sin((d - r) * 14.0) * exp(-abs(d - r) * 3.5) * a;
      glint += exp(-pow((d - r) * 7.0, 2.0)) * a;
    }
    for (int i = 0; i < 6; i++) {
      vec4 n = N(2, i);
      if (n.x < 0.0 || n.x > 0.8) continue;
      vec2 c = vec2((uRand[16 + i] - 0.5) * 2.0 * uHalf.x, -(1.5 + fract(uRand[16 + i] * 7.3) * 6.0));
      vec2 e = pw.xz - c;
      ff += exp(-dot(e, e) * 60.0) * exp(-n.x * 7.0) * n.z;
    }
    grad += 0.25 * vec2(sin(pw.x * 2.7 + uTravel * 0.6) * cos(pw.z * 1.9), cos(pw.x * 1.7 - uTravel * 0.4) * sin(pw.z * 2.9 + uTravel * 0.5));
    vec3 rr = normalize(vec3(rd.x + grad.x * 0.06, -rd.y, rd.z + grad.y * 0.06));
    float fres = 0.3 + 0.7 * pow(1.0 - clamp(-rd.y, 0.0, 1.0), 4.0);
    col = tideSky(rr, uvh) * fres * 0.9 + vec3(0.008, 0.02, 0.035);
    col += vec3(0.7, 0.9, 1.0) * glint * 0.55 + vec3(1.0, 0.9, 0.5) * ff * 1.6;
  } else {
    col = tideSky(rd, uvh);
  }
  for (int i = 0; i < 8; i++) {
    vec4 n = N(0, i);
    if (n.x > 0.0 || n.x < -0.45) continue;
    vec2 c = dropSpot(n, i), o = ro.xz, d2 = rd.xz;
    float dl = dot(d2, d2), tt = dot(c - o, d2) / dl;
    if (tt < 0.0) continue;
    float dist = abs((c.x - o.x) * d2.y - (c.y - o.y) * d2.x) / sqrt(dl);
    float y = ro.y + rd.y * tt, head = waterY - n.x * 5.0;
    float seg = smoothstep(head - 0.02, head + 0.02, y) * smoothstep(head + 0.9, head + 0.2, y);
    col += vec3(0.75, 0.92, 1.0) * ((0.008 / (dist + 0.008)) * seg + exp(-(dist * dist + (y - head) * (y - head)) * 900.0) * 3.0) * n.z;
  }
  return col;
}`,wg=`
const float SHORE = 20.0;               // meters of water before the city
const vec2 TOWER = vec2(-4.5, 12.5);    // where the tall tower stands, and its height
const float CORE = 4.5;                 // downtown is densest here
vec3 cityAccent() {
  float i = mod(uSection.x, 5.0);
  vec3 c = vec3(0.25, 0.7, 1.0);
  c = mix(c, vec3(1.0, 0.25, 0.6), step(0.5, i));
  c = mix(c, vec3(1.0, 0.55, 0.15), step(1.5, i));
  c = mix(c, vec3(0.55, 0.4, 1.0), step(2.5, i));
  c = mix(c, vec3(0.3, 1.0, 0.75), step(3.5, i));
  return c;
}
vec3 citySky(vec3 ro, vec3 rd, vec3 acc, float kick) {
  float iz = 1.0 / max(-rd.z, 0.05);
  float u = rd.x * iz, v = rd.y * iz;
  vec3 col = mix(vec3(0.022, 0.028, 0.06), vec3(0.002, 0.005, 0.02), smoothstep(0.0, 0.45, v));
  float dome = exp(-pow((u - 0.1) * 1.3, 2.0));
  col += vec3(1.0, 0.5, 0.25) * exp(-max(v, 0.0) * 8.0) * dome * (0.06 + 0.09 * uEnergy);
  col += acc * exp(-max(v, 0.0) * 9.0) * dome * 0.12 * kick;
  col += vec3(0.8, 0.9, 1.0) * stars(vec2(u, v) * 30.0, 0.35) * smoothstep(0.1, 0.4, v) * 0.5;
  // bells: fireworks over the harbor, higher notes burst higher
  for (int i = 0; i < 6; i++) {
    vec4 n = N(5, i);
    if (n.x < 0.0 || n.x > 2.2) continue;
    vec2 c = vec2((uRand[40 + i] - 0.5) * 1.3 + 0.1, 0.2 + 0.2 * n.y);
    vec2 e = vec2(u, v + n.x * n.x * 0.012) - c;
    float r = 0.11 * (1.0 - exp(-n.x * 3.2)), d = length(e);
    if (abs(d - r) < 0.03) {
      float sp = pow(abs(sin(atan(e.y, e.x) * 11.0 + uRand[40 + i] * 40.0)), 10.0);
      col += mix(acc, vec3(1.0, 0.9, 0.7), 0.35 + 0.65 * exp(-n.x * 4.0)) * exp(-pow((d - r) / 0.005, 2.0)) * sp * exp(-n.x * 1.7) * n.z * 2.4;
    }
    col += acc * exp(-d * d * 260.0) * exp(-n.x * 5.0) * n.z * 0.8;
  }
  if (rd.y > 0.012) {
    float t = (50.0 - ro.y) / rd.y;
    vec2 c = (ro + rd * t).xz * 0.014;
    c.x += uTravel * 0.2;                 // the wind follows the music
    float d = vnoise(c) * 0.55 + vnoise(c * 2.3 + 7.0) * 0.3 + vnoise(c * 5.1 + vec2(uTravel * 0.1, 3.0)) * 0.15;
    float cover = smoothstep(0.42, 0.74, d) * exp(-t * 0.003);
    // lit from below: the city's own glow over downtown, the accent on each kick, white inside on a drop
    float under = dome * exp(-v * 2.2);
    vec3 lit = vec3(0.04, 0.045, 0.075) * (0.5 + 1.0 * d) + vec3(0.42, 0.22, 0.13) * under * (0.35 + 0.65 * uEnergy) * d
      + acc * 0.45 * kick * under + vec3(0.9, 0.95, 1.0) * exp(-uDrop * 3.0) * step(0.6, vnoise(c * 0.7 + floor(uTime * 14.0)));
    col = mix(col, lit, cover * 0.9);
  }
  return col;
}
// The shore, the elevated expressway on it, and its traffic.
void cityShore(vec3 ro, vec3 rd, float wy, float fp, vec3 acc, inout vec4 o, inout vec3 glow) {
  vec3 p = ro + rd * ((-SHORE - ro.z) / rd.z);
  float y = p.y - wy, x = p.x;
  if (y < 0.0 || y > 1.2) return;
  float bank = 0.1 + 0.1 * vnoise(vec2(x * 2.6, 3.5));
  float a = smoothstep(bank + fp, bank - fp, y);
  float deck = smoothstep(0.035 + fp, 0.035 - fp, abs(y - 0.44));
  float pier = smoothstep(0.04 + fp, 0.04 - fp, abs(fract(x / 2.0) - 0.5) * 2.0) * step(y, 0.44);
  a = max(a, max(deck, pier));
  o.rgb += (1.0 - o.a) * a * vec3(0.012, 0.012, 0.016);
  o.a += (1.0 - o.a) * a;
  // long-exposure trails: white one way, red the other
  float th = 0.011 + fp, flow = uTravel * 2.6;
  float l1 = exp(-pow((y - 0.5) / th, 2.0)), l2 = exp(-pow((y - 0.55) / th, 2.0));
  float d1 = 0.3 + 0.7 * pow(vnoise(vec2(x * 0.7 - flow, 1.5)), 2.0) + 0.6 * pow(vnoise(vec2(x * 3.5 - flow * 5.0, 2.5)), 4.0);
  float d2 = 0.3 + 0.7 * pow(vnoise(vec2(x * 0.7 + flow, 6.5)), 2.0) + 0.6 * pow(vnoise(vec2(x * 3.5 + flow * 5.0, 7.5)), 4.0);
  vec3 tr = vec3(1.0, 0.92, 0.78) * l1 * d1 + vec3(1.0, 0.12, 0.06) * l2 * d2;
  for (int i = 0; i < 3; i++) {
    vec4 n = N(0, i);
    if (n.x < 0.0 || n.x > 1.6) continue;
    float xk = -30.0 + n.x * 50.0;
    float k1 = step(x, xk) * exp(-(xk - x) * 0.3), k2 = step(-xk, x) * exp(-(x + xk) * 0.3);
    tr += (vec3(1.0, 0.95, 0.85) * l1 * k1 + vec3(1.0, 0.15, 0.08) * l2 * k2) * exp(-n.x * 1.2) * n.z * 3.0;
  }
  tr *= 0.45 + 0.9 * uEnergy;
  float lx = (fract(x / 1.0) - 0.5) * 1.0, lr = 0.014 + fp;
  tr += vec3(1.0, 0.62, 0.28) * exp(-(lx * lx + (y - 0.66) * (y - 0.66)) / (lr * lr)) * 0.8;
  glow += tr;
}
// One row of buildings on the plane z = -zd, added behind whatever is already in o.
void cityRow(vec3 ro, vec3 rd, float wy, float zd, float seed, float cw, vec2 hr, float haze, float fp, vec3 acc, inout vec4 o, inout vec3 glow) {
  if (o.a > 0.985) return;
  vec3 p = ro + rd * ((-zd - ro.z) / rd.z);
  float y = p.y - wy;
  if (y < 0.0) return;
  float xc = p.x / cw + seed * 13.7, ci = floor(xc);
  vec4 b = hash4(vec2(ci, seed * 31.0 + 3.0));
  float cxm = (ci + 0.5 - seed * 13.7) * cw;
  float core = exp(-pow((cxm - CORE) / 10.0, 2.0));
  float H = mix(hr.x, hr.y, pow(b.y, 1.5)) * (0.38 + 0.62 * core);
  float xl = (fract(xc) - 0.5) * cw;
  float hw = cw * (0.3 + 0.17 * b.z);
  float tuned4 = 0.0, ring4 = 0.0;
  for (int i = 0; i < 3; i++) {       // stabs, guitar, lead: which buildings answer, and how brightly
    vec4 n = N(4, i);
    if (n.x < 0.0) continue;
    float on = n.x < n.w ? 1.0 : exp(-(n.x - n.w) * 4.0);
    float t4 = smoothstep(0.12, 0.07, abs(fract(b.x * 3.0 - n.y + 0.5) - 0.5)) * on * n.z;
    tuned4 = max(tuned4, t4);
    ring4 = max(ring4, t4 * (0.6 + 0.9 * exp(-n.x * 8.0)));
  }
  if (y > H) {
    // a beam from the roof while the note rings
    if (tuned4 > 0.01 && H > 2.2) glow += (1.0 - o.a) * mix(vec3(1.0), acc, 0.6) * exp(-pow(xl / (0.035 + fp), 2.0)) * exp(-(y - H) * 0.22) * ring4 * 0.9;
    if (y > H + fp) return;
  }
  if (b.w > 0.45 && y > H * (0.74 + 0.2 * b.x)) hw *= 0.62;
  float a = smoothstep(hw + fp, hw - fp, abs(xl)) * smoothstep(H + fp, H - fp, y);
  if (a < 0.003) return;
  float fh = 0.0032 * zd, ww = fh * (0.8 + 0.5 * b.z);
  float nf = max(floor(H / fh), 1.0), fl = floor(y / fh), fy = fract(y / fh);
  float wxc = xl / ww + 40.0, wc = floor(wxc), fx = fract(wxc);
  vec4 w = hash4(vec2(wc + ci * 7.0, fl + seed * 57.0));
  vec4 fr = hash4(vec2(fl + ci * 3.0, seed * 91.0 + 11.0));
  float office = step(0.5, b.w);
  float ex = max(fp / ww, 0.03), ey = max(fp / fh, 0.03);
  float mask = smoothstep(0.14 - ex, 0.14 + ex, fx) * smoothstep(0.86 + ex, 0.86 - ex, fx) * smoothstep(0.2 - ey, 0.2 + ey, fy) * smoothstep(0.8 + ey, 0.8 - ey, fy);
  mask = mix(mask, 0.43, smoothstep(0.3, 0.8, ey));
  float home = mix(w.x, fr.x * 0.85 + w.x * 0.15, office);          // offices light whole floors
  vec3 tint = mix(vec3(1.0, 0.7, 0.4), vec3(0.72, 0.85, 1.0), step(0.6, mix(w.z, b.x, office)));
  vec3 c = tint * step(home, 0.24) * (0.22 + 0.38 * w.y);
  float h01 = (fl + 0.5) / nf;
  float lvl = spec(clamp(0.5 + (cxm - CORE + 3.0) / 50.0, 0.03, 0.97)) * (0.55 + 0.6 * uEnergy);
  c += mix(tint, acc, 0.3) * smoothstep(lvl + 0.04, lvl - 0.04, h01) * step(w.x, 0.82) * 0.7;
  for (int i = 0; i < 3; i++) {
    vec4 n = N(0, i);
    if (n.x >= 0.0 && n.x < 1.2) c += vec3(1.0, 0.9, 0.75) * step(fract(w.x + uRand[i] * 7.31), 0.3) * exp(-n.x * 4.5) * n.z * 1.3;
    n = N(2, i);
    if (n.x >= 0.0 && n.x < 0.5) c += vec3(0.8, 0.9, 1.0) * step(fract(w.z + uRand[16 + i] * 9.7), 0.06) * exp(-n.x * 12.0) * n.z * 2.2;
  }
  for (int i = 0; i < 2; i++) {
    vec4 n = N(1, i);
    if (n.x >= 0.0 && n.x < 0.9) c += mix(vec3(1.0), acc, 0.6) * step(fract(b.x + uRand[8 + i] * 5.17), 0.3) * exp(-n.x * 6.0) * n.z * (0.7 + 0.5 * w.y);
  }
  for (int i = 0; i < 4; i++) {
    vec4 n = N(3, i);
    if (n.x < 0.0 || n.x > 1.4) continue;
    float tuned = smoothstep(0.1, 0.06, abs(fract(b.w * 3.0 - n.y + 0.5) - 0.5));
    float front = n.x * 1.6 - h01;                     // the light is this far above this floor
    c += acc * tuned * smoothstep(-0.03, 0.02, front) * exp(-max(front, 0.0) * 5.0) * exp(-n.x * 1.3) * n.z * 1.6;
  }
  c += mix(vec3(1.0), acc, 0.6) * tuned4 * smoothstep(0.8, 1.0, h01) * 1.2;
  vec3 colB = vec3(0.01, 0.012, 0.02) * (0.5 + 1.2 * y / H) + vec3(0.03, 0.018, 0.012) * (1.0 - y / H) * 0.6 + c * mask;
  // red beacons on the tall roofs blink on the beat
  colB += vec3(1.0, 0.1, 0.05) * step(4.5, H) * step(H - fh * 1.2, y) * smoothstep(0.07 + fp, 0.02, abs(xl)) * pow(1.0 - uBeat, 5.0) * 2.0;
  colB = mix(colB, vec3(0.022, 0.024, 0.045), haze);
  o.rgb += (1.0 - o.a) * a * colB;
  o.a += (1.0 - o.a) * a;
}
void cityTower(vec3 ro, vec3 rd, float wy, float fp, vec3 acc, inout vec4 o, inout vec3 glow) {
  vec3 p = ro + rd * ((-30.5 - ro.z) / rd.z);
  float x = p.x - TOWER.x, yy = p.y - wy, y = yy / TOWER.y;
  if (yy < 0.0) return;
  // the stadium dome beside it
  vec2 dq = vec2((x + 3.3) / 2.2, yy / 1.7);
  float dd = length(dq);
  if (dd < 1.1) {
    float da = smoothstep(1.0 + fp * 0.5, 1.0 - fp * 0.5, dd);
    vec3 dc = vec3(0.045, 0.05, 0.062) * (0.35 + 0.65 * dq.y) + vec3(0.02) * pow(abs(sin(atan(dq.x, dq.y) * 9.0)), 24.0) + acc * 0.08 * env(0, 5.0) * dq.y;
    o.rgb += (1.0 - o.a) * da * dc;
    o.a += (1.0 - o.a) * da;
  }
  if (y > 1.0 || abs(x) > 1.8) return;
  float sn = env(1, 6.0);
  vec2 hd = vec2(x, (y - 0.632) * TOWER.y);
  glow += (1.0 - o.a) * (acc * 0.05 + vec3(1.0) * 0.12 * sn) * exp(-dot(hd, hd) * 2.0);
  float hw;
  if (y < 0.61) hw = mix(0.2, 0.58, pow(1.0 - y / 0.61, 2.4));
  else if (y < 0.655) hw = 0.26 + 0.26 * sqrt(max(sin((y - 0.61) / 0.045 * PI), 0.0));
  else if (y < 0.8) hw = mix(0.13, 0.085, (y - 0.655) / 0.145);
  else if (y < 0.815) hw = 0.14;
  else hw = mix(0.05, 0.014, (y - 0.815) / 0.185);
  float a = smoothstep(hw + fp, hw - fp, abs(x));
  if (a < 0.003) return;
  float xr = x / hw;
  vec3 c = vec3(0.016, 0.017, 0.024);
  float shaft = step(y, 0.61) + step(0.655, y) * step(y, 0.8);
  c += acc * shaft * (0.1 + 0.4 * uBass) * (0.3 + 0.7 * xr * xr) * (0.35 + 0.65 * y);
  float k = 0.0;
  for (int i = 0; i < 3; i++) {       // every kick climbs the shaft
    vec4 n = N(0, i);
    if (n.x >= 0.0 && n.x < 1.2) k += exp(-pow((y - n.x * 1.3) * 12.0, 2.0)) * exp(-n.x * 1.2) * n.z;
  }
  c += mix(vec3(1.0), acc, 0.4) * k * 1.8 * step(y, 0.815);
  float pod = step(0.61, y) * step(y, 0.655);
  c += pod * (acc * (0.3 + 0.7 * pow(abs(sin(xr * 5.0 + uTravel * 2.0)), 6.0)) + vec3(1.0) * sn * 1.3);
  c += step(0.815, y) * (vec3(0.8, 0.9, 1.0) * env(2, 14.0) * 0.9 + vec3(1.0, 0.1, 0.05) * pow(1.0 - uBeat, 5.0) * step(0.97, y) * 3.0);
  o.rgb += (1.0 - o.a) * a * c;
  o.a += (1.0 - o.a) * a;
}
vec3 cityView(vec3 ro, vec3 rd, float wy, float pix, float zoff, vec3 acc, float kick) {
  vec4 o = vec4(0.0);
  vec3 glow = vec3(0.0);
  cityShore(ro, rd, wy, pix * (SHORE + zoff), acc, o, glow);
  cityRow(ro, rd, wy, 23.0, 1.0, 2.0, vec2(1.2, 4.6), 0.0, pix * (23.0 + zoff), acc, o, glow);
  cityTower(ro, rd, wy, pix * (30.5 + zoff), acc, o, glow);
  cityRow(ro, rd, wy, 31.0, 2.0, 2.4, vec2(2.4, 9.6), 0.1, pix * (31.0 + zoff), acc, o, glow);
  cityRow(ro, rd, wy, 40.0, 3.0, 2.8, vec2(2.0, 8.0), 0.3, pix * (40.0 + zoff), acc, o, glow);
  cityRow(ro, rd, wy, 54.0, 4.0, 3.6, vec2(2.0, 7.0), 0.55, pix * (54.0 + zoff), acc, o, glow);
  return o.rgb + (1.0 - o.a) * citySky(ro, rd, acc, kick) + glow;
}
vec3 portal(vec3 ro, vec3 rd) {
  float wy = -uHalf.y;
  if (rd.z > -0.02) rd = normalize(vec3(rd.xy, -0.02));
  vec2 ang = rd.xy / -rd.z;
  float pix = max(length(dFdx(ang)), length(dFdy(ang)));     // how much one pixel sees, so far detail can be softened
  vec3 acc = cityAccent();
  float kick = env(0, 5.0);
  if (rd.y < -0.002 && ro.y > wy) {
    vec3 pw = ro + rd * ((wy - ro.y) / rd.y);
    if (pw.z > -SHORE) {
      // the lake: a mirror broken by small waves, which pull every light into a streak
      float rip = (vnoise(vec2(pw.x * 1.3, pw.z * 0.45 + uTravel * 0.25)) - 0.5) * 0.11 + (vnoise(vec2(pw.x * 5.0 + 9.0, pw.z * 1.6 - uTravel * 0.4)) - 0.5) * 0.045;
      rip *= (0.6 + 0.8 * uBass) * clamp(-rd.y * 9.0, 0.12, 1.0);      // far water is seen edge-on: its waves flatten
      vec3 rr = normalize(vec3(rd.x + rip * 0.2, max(-rd.y + rip, 0.004), rd.z));
      float fres = 0.35 + 0.65 * pow(1.0 - clamp(-rd.y, 0.0, 1.0), 5.0);
      return cityView(pw, rr, wy, pix * 2.0, ro.z, acc, kick) * fres * 0.8 + vec3(0.002, 0.005, 0.011);
    }
  }
  return cityView(ro, rd, wy, pix, ro.z, acc, kick);
}`,Eg=`
const float KM = 34.0;     // meters of track per unit of uTravel
const float V0 = 14.0;     // plus a steady 14 m/s, so the car is never slow
float gS, gSw, gTh, gYaw, gCarX, gKick, gKickAge, gSnare, gHat;
vec3 gAcc;
float roadF(float s) { return 7.0 * sin(s * 0.017) + 3.0 * sin(s * 0.041 + 1.3); }
float roadD(float s) { return 0.119 * cos(s * 0.017) + 0.123 * cos(s * 0.041 + 1.3); }
// the track's center line d meters ahead of the car, in the car's own frame
float roadX(float d) { return roadF(gS + d) - roadF(gS) - roadD(gS) * d; }
float gateDist(vec2 p, vec2 b) { vec2 d = abs(p) - b; return abs(length(max(d, 0.0)) + min(max(d.x, d.y), 0.0)); }
float sdRBox(vec3 p, vec3 b, float r) { vec3 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0) - r; }
// The car: x to its right, y up from the road, +z forward.
float carSdf(vec3 p, out float wheel) {
  float top = 0.27 - 0.07 * smoothstep(0.4, 2.3, p.z) - 0.02 * smoothstep(1.0, 2.3, -p.z);   // the hood falls away
  float wide = 0.95 - 0.1 * smoothstep(1.2, 2.3, abs(p.z));
  float body = sdRBox(p - vec3(0.0, 0.29 + top, 0.0), vec3(wide, top, 2.3), 0.19);
  float h = clamp((p.y - 0.74) / 0.5, 0.0, 1.0);
  float zf = 0.85 - 0.9 * h, zr = -2.05 + 0.75 * h * h;        // raked glass in front, a long slope behind
  vec3 c = vec3(abs(p.x) - (0.86 - 0.24 * h), p.y - 1.24, max(p.z - zf, zr - p.z));
  float cabin = length(max(c + 0.09, 0.0)) + min(max(c.x, max(c.y, c.z)) + 0.09, 0.0) - 0.09;
  float m = clamp(0.5 + 0.5 * (cabin - body) / 0.1, 0.0, 1.0);
  float d = mix(cabin, body, m) - 0.1 * m * (1.0 - m);
  vec3 pw = vec3(abs(p.x) - 0.84, p.y - 0.36, abs(p.z - 0.05) - 1.42);
  float rw = length(pw.yz);
  d = max(d, -max(rw - 0.45, 0.55 - abs(p.x)));               // wheel arches
  wheel = max(rw - 0.36, abs(pw.x) - 0.13);
  return min(d, wheel);
}
float carHit(vec3 o, vec3 d, out float wheel) {
  wheel = 1.0;
  vec3 oc = o - vec3(0.0, 0.7, 0.0);
  float b = dot(oc, d), disc = b * b - dot(oc, oc) + 7.6;
  if (disc < 0.0) return -1.0;
  float sq = sqrt(disc), t = max(-b - sq, 0.0), t1 = -b + sq;
  if (t1 < 0.0) return -1.0;
  for (int i = 0; i < 44; i++) {
    float dist = carSdf(o + d * t, wheel);
    if (dist < 0.003 + 0.0015 * t) return t;
    t += dist * 0.75;
    if (t > t1) break;
  }
  return -1.0;
}
vec3 carNormal(vec3 p) {
  float w;
  vec2 e = vec2(0.004, -0.004);
  return normalize(e.xyy * carSdf(p + e.xyy, w) + e.yyx * carSdf(p + e.yyx, w) + e.yxy * carSdf(p + e.yxy, w) + e.xxx * carSdf(p + e.xxx, w));
}
const vec3 KEY = vec3(-0.329, 0.122, 0.936);    // the moon, or the low sun: ahead and a little left
vec3 driveSky(vec3 d) {
  float h = max(d.y, 0.0);
  vec3 dusk = mix(mix(vec3(0.85, 0.36, 0.12), vec3(0.42, 0.09, 0.16), smoothstep(0.0, 0.16, h)), vec3(0.03, 0.025, 0.1), smoothstep(0.08, 0.5, h)) * 0.6;
  vec3 col = mix(mix(vec3(0.02, 0.05, 0.11), vec3(0.002, 0.004, 0.016), pow(h, 0.5)), dusk, gTh);
  float sd = max(dot(d, KEY), 0.0);
  col += mix(vec3(0.75, 0.85, 1.0) * (smoothstep(0.9993, 0.9996, sd) * 2.0 + pow(sd, 30.0) * 0.1), vec3(1.0, 0.55, 0.2) * (smoothstep(0.997, 0.9985, sd) * 3.0 + pow(sd, 8.0) * 0.45), gTh);
  vec2 hd = normalize(d.xz + vec2(1e-5, 0.0));
  float az = atan(d.x, d.z);
  // over the snow, an aurora: it follows the mids and flares with the snare
  float dy = d.y - (0.16 + 0.06 * sin(az * 3.0 + uTravel * 0.2) + 0.03 * sin(az * 7.0 - uTravel * 0.3));
  float curtain = 0.15 + 0.85 * pow(vnoise(hd * 26.0 + vec2(uTravel * 0.35, 0.0)), 2.0) * (0.5 + vnoise(hd * 7.0 - vec2(0.0, uTravel * 0.2)));
  col += mix(vec3(0.15, 1.0, 0.6), vec3(0.5, 0.25, 1.0), smoothstep(0.0, 0.28, dy)) * smoothstep(-0.015, 0.02, dy) * exp(-max(dy, 0.0) * 7.5) * curtain * (0.1 + 0.9 * uMid + 0.7 * gSnare) * (1.0 - gTh);
  // over the dunes, heat lightning low on the horizon
  col += vec3(1.0, 0.7, 0.5) * exp(-h * 8.0) * gSnare * 0.35 * gTh;
  col += vec3(0.8, 0.9, 1.0) * stars(vec2(az * 40.0, d.y * 60.0), 0.4) * smoothstep(0.05, 0.3, d.y) * (1.0 - 0.75 * gTh) * smoothstep(0.1, 0.4, d.y + 0.3 * (1.0 - gTh)) * 0.7;
  float ridge = 0.03 + 0.085 * vnoise(hd * 2.4 + 5.0) + 0.03 * vnoise(hd * 8.0 + 11.0);
  vec3 rc = mix(vec3(0.02, 0.04, 0.08) + vec3(0.05, 0.08, 0.13) * smoothstep(ridge - 0.05, ridge, d.y), vec3(0.2, 0.075, 0.05), gTh);
  return mix(col, rc, smoothstep(ridge + 0.003, ridge - 0.003, d.y));
}
vec3 driveGround(vec3 p, float t, mat2 R) {
  float dx = p.x - roadX(p.z);
  vec2 g = vec2(p.x, p.z + gSw);
  float far = smoothstep(25.0, 110.0, t);
  float n1 = vnoise(vec2(g.x * 1.7, g.y * 0.2));               // stretched along the way you travel, as speed blurs it
  float n2 = mix(vnoise(vec2(g.x * 7.0, g.y * 0.6)), 0.5, far);
  float n3 = vnoise(g * 0.1 + 3.0);
  vec3 base = mix(vec3(0.075, 0.125, 0.22), vec3(0.3, 0.13, 0.055), gTh) * (0.35 + 0.6 * n3 + 0.3 * n1) * (0.55 + 0.9 * vnoise(vec2(g.x * 0.3 + 8.0, g.y * 0.1)));
  float road = smoothstep(4.5, 3.9, abs(dx));
  base = mix(base, base * mix(vec3(0.5, 0.6, 0.78), vec3(0.6, 0.52, 0.47), gTh) * (0.75 + 0.5 * n2), road);
  base *= 1.0 - 0.3 * road * exp(-pow((abs(dx) - 0.8) * 3.0, 2.0)) * (1.0 - far);                        // ruts
  base += mix(vec3(0.1, 0.15, 0.25), vec3(0.3, 0.14, 0.06), gTh) * exp(-pow((abs(dx) - 4.9) * 1.5, 2.0)) * (0.5 + 0.7 * n2);   // banks
  vec3 col = base;
  vec2 l = R * (p.xz - vec2(gCarX, 0.0));                      // this spot in the car's frame
  float shadow = exp(-pow(l.x / 1.05, 2.0) - pow(l.y / 2.4, 2.0));
  col *= 1.0 - 0.92 * shadow;
  float zf = l.y - 2.2, zb = -(l.y + 2.2);
  float pool = exp(-pow(l.x / (0.6 + 0.3 * max(zf, 0.0)), 2.0)) * smoothstep(-0.2, 1.5, zf) / (1.0 + pow(max(zf, 0.0) / 10.0, 2.0));
  col += (base * 5.0 + 0.04) * vec3(1.0, 0.95, 0.85) * pool * (0.9 + 0.5 * gKick);
  col += (base * 2.0 + 0.02) * vec3(1.0, 0.1, 0.05) * exp(-pow(l.x / 1.5, 2.0)) * smoothstep(-0.3, 0.6, zb) * exp(-max(zb, 0.0) * 0.45) * (0.5 + 2.0 * gSnare);
  col += gAcc * exp(-pow(l.x / 1.5, 2.0) - pow(l.y / 2.9, 2.0)) * (1.0 - 0.8 * shadow) * (0.1 + 0.6 * uBass) * 0.45;
  for (int i = 0; i < 8; i++) {                               // each gate lays a line of light across the track
    vec4 n = N(0, i);
    if (n.x > 1.5) continue;
    float d = uDist[i] * KM - n.x * V0;
    float lit = 0.25 + 0.5 * smoothstep(-1.6, 0.0, n.x) + 1.6 * step(0.0, n.x) * exp(-max(n.x, 0.0) * 5.0);
    col += mix(vec3(1.0), gAcc, 0.6) * (0.05 / (abs(p.z - d) + 0.05)) * smoothstep(5.4, 4.6, abs(p.x - roadX(d))) * lit * n.z * (base * 3.0 + 0.15);
  }
  col += vec3(0.9, 0.95, 1.0) * stars(g * 3.0, 0.5) * (0.15 + 2.0 * gHat) * (1.0 - far) * mix(1.0, 0.5, gTh);
  return mix(col, mix(vec3(0.02, 0.045, 0.1), vec3(0.45, 0.17, 0.07), gTh), 1.0 - exp(-t * 0.006));
}
vec3 driveCar(vec3 pl, vec3 ld, vec3 wd, float wheel, mat2 R) {
  vec3 n = carNormal(pl), nw = n;
  nw.xz = n.xz * R;
  vec3 rf = reflect(wd, nw);
  vec3 env = rf.y > 0.0 ? driveSky(rf) : mix(vec3(0.03, 0.05, 0.09), vec3(0.16, 0.075, 0.035), gTh);
  float fres = 0.05 + 0.95 * pow(1.0 - max(dot(-ld, n), 0.0), 5.0);
  vec3 lc = mix(vec3(0.6, 0.72, 1.0), vec3(1.0, 0.55, 0.25), gTh);
  vec3 col;
  if (wheel < 0.01) {
    float rw = length(vec2(pl.y - 0.36, abs(pl.z - 0.05) - 1.42));
    col = vec3(0.006) + env * fres * 0.15;
    // rims: a ring of light that grows with the bass
    col += step(0.8, abs(n.x)) * (gAcc * exp(-pow((rw - 0.24) * 22.0, 2.0)) * (0.5 + 1.5 * uBass) + vec3(0.04) * step(rw, 0.23));
  } else {
    bool glass = pl.y > 0.87 && pl.y < 1.19 && n.y < 0.8;
    // dark paint under a clear coat: it shows the sky, and its edges catch the light
    col = vec3(0.05, 0.055, 0.065) * (0.6 + 2.5 * max(dot(nw, KEY), 0.0) + 0.8 * max(nw.y, 0.0)) * lc + env * (glass ? fres * 1.1 + 0.05 : fres * 0.9 + 0.12) + lc * fres * 0.16;
    col += lc * pow(max(dot(rf, KEY), 0.0), 90.0) * 1.5;
    // a line of light along each side: bright with the bass, and each kick runs down it
    float strip = step(abs(pl.y - 0.63), 0.014) * step(0.55, abs(n.x)) * step(abs(pl.z + 0.05), 1.75);
    col += gAcc * strip * (0.7 + 1.3 * uBass + 2.5 * exp(-pow((pl.z - 1.9 + gKickAge * 9.0) * 1.5, 2.0)));
    float head = step(2.0, pl.z) * step(abs(pl.y - 0.6), 0.035) * step(abs(abs(pl.x) - 0.63), 0.2);
    float tail = step(pl.z, -2.05) * step(abs(pl.y - 0.7), 0.03) * step(abs(pl.x), 0.82);
    col += vec3(1.0, 0.96, 0.88) * head * (2.5 + 2.0 * gKick) + vec3(1.0, 0.06, 0.03) * tail * (1.2 + 3.0 * gSnare);
    col += gAcc * ((0.1 + 0.4 * uBass) * smoothstep(0.45, 0.28, pl.y) * 0.5 + gKick * 0.1 * (0.5 + 0.5 * n.y));
  }
  return col;
}
// Snow or sand thrown up behind the car. Returns its color and how much it hides.
vec4 drivePlume(vec3 wo, vec3 wd, float tMax) {
  float dz = abs(wd.z) < 1e-4 ? 1e-4 : wd.z, dy = abs(wd.y) < 1e-4 ? 1e-4 : wd.y;
  float ta = (-17.0 - wo.z) / dz, tb = (-1.5 - wo.z) / dz, ya = -wo.y / dy, yb = (4.0 - wo.y) / dy;
  float tn = max(max(min(ta, tb), min(ya, yb)), 0.0), tf = min(min(max(ta, tb), max(ya, yb)), tMax);
  if (tf <= tn) return vec4(0.0);
  float stp = (tf - tn) / 6.0, sum = 0.0, red = 0.0;
  float dith = texture2D(uNoise, gl_FragCoord.xy / 256.0).b;
  for (int i = 0; i < 6; i++) {
    vec3 q = wo + wd * (tn + stp * (float(i) + dith));
    float zz = -(q.z + 1.5);
    float dn = exp(-pow((q.x - gCarX - roadX(q.z)) / (0.8 + 0.2 * zz), 2.0)) * smoothstep((0.45 + 0.22 * zz) * exp(-zz * 0.03), 0.0, q.y) * exp(-zz * 0.14) * smoothstep(0.0, 1.0, zz);
    dn *= 0.35 + 1.1 * vnoise(vec2(q.x * 1.4 + q.y * 1.1, (q.z + gSw) * 0.4 + q.y * 0.6));
    sum += dn * stp;
    red += dn * stp * exp(-zz * 0.5);
  }
  float amt = 0.6 + 1.2 * uBass + 0.9 * gKick + 0.6 * uEnergy;
  vec3 c = mix(vec3(0.34, 0.46, 0.66), vec3(0.95, 0.5, 0.22), gTh) * 0.6 + vec3(1.0, 0.1, 0.05) * red * (0.5 + 2.0 * gSnare) * 0.5 + gAcc * gKick * 0.3 + vec3(0.3) * gHat;
  return vec4(c, 1.0 - exp(-sum * amt * 0.9));
}
vec3 driveLights(vec3 wo, vec3 wd, float tMax, mat2 R) {
  vec3 col = vec3(0.0);
  float dz = abs(wd.z) < 1e-4 ? 1e-4 : wd.z;
  for (int i = 0; i < 8; i++) {
    vec4 n = N(0, i);
    if (n.x > 1.5) continue;
    float d = uDist[i] * KM - n.x * V0;
    if (d > 170.0 || d < -40.0) continue;
    float tg = (d - wo.z) / dz;
    if (tg < 0.0 || tg > tMax) continue;
    vec3 pg = wo + wd * tg;
    if (pg.y < 0.0) continue;
    float df = gateDist(vec2(pg.x - roadX(d), pg.y - 2.3), vec2(5.2, 2.3));
    float w = 0.012 + 0.0022 * tg, l = w / (df + w);
    float lit = 0.35 + 0.65 * smoothstep(-1.6, 0.0, n.x) + 2.2 * step(0.0, n.x) * exp(-max(n.x, 0.0) * 4.0);
    col += (mix(vec3(1.0), gAcc, 0.55) * l * l * 1.2 + gAcc * (w * 6.0 / (df + w * 6.0)) * 0.1) * lit * smoothstep(170.0, 90.0, d) * n.z;
  }
  // glare around the car's own lights, seen from the side they face
  vec2 fz = vec2(0.0, 1.0) * R;
  vec3 fwd = vec3(fz.x, 0.0, fz.y);
  for (int k = 0; k < 2; k++) {
    float sx = k == 0 ? -0.63 : 0.63;
    vec2 hl = vec2(sx, 2.3) * R, tl = vec2(sx * 0.9, -2.3) * R;
    vec3 v = vec3(gCarX + hl.x, 0.6, hl.y) - wo;
    float pr = dot(v, wd);
    if (pr > 0.0 && pr < tMax + 0.4) { float f = max(dot(normalize(-v), fwd), 0.0); col += vec3(1.0, 0.95, 0.85) * (0.006 / (dot(v, v) - pr * pr + 0.004)) * f * f * (0.9 + 0.9 * gKick); }
    v = vec3(gCarX + tl.x, 0.7, tl.y) - wo;
    pr = dot(v, wd);
    if (pr > 0.0 && pr < tMax + 0.4) { float f = max(dot(normalize(-v), -fwd), 0.0); col += vec3(1.0, 0.08, 0.04) * (0.004 / (dot(v, v) - pr * pr + 0.004)) * f * (0.3 + 1.4 * gSnare); }
  }
  return col;
}
vec3 portal(vec3 ro, vec3 rd) {
  float i5 = mod(uSection.x, 5.0);
  gAcc = vec3(0.3, 0.8, 1.0);
  gAcc = mix(gAcc, vec3(1.0, 0.5, 0.15), step(0.5, i5));
  gAcc = mix(gAcc, vec3(0.75, 1.0, 0.2), step(1.5, i5));
  gAcc = mix(gAcc, vec3(1.0, 0.25, 0.5), step(2.5, i5));
  gAcc = mix(gAcc, vec3(0.6, 0.45, 1.0), step(3.5, i5));
  float odd = mod(uSection.x, 2.0);
  gTh = uSection.x < 0.5 ? 0.0 : mix(1.0 - odd, odd, smoothstep(0.0, 0.7, uSection.z));     // snow first, then swap with each part
  gS = uTravel * KM + uTime * V0;
  gSw = mod(gS, 2560.0);
  gKick = 0.0;
  gKickAge = 9.0;
  for (int i = 0; i < 8; i++) { vec4 n = N(0, i); if (n.x >= 0.0) { gKick = max(gKick, exp(-n.x * 7.0) * n.z); gKickAge = min(gKickAge, n.x); } }
  gSnare = env(1, 7.0);
  gHat = env(2, 16.0);
  float curv = -(0.00202 * sin(gS * 0.017) + 0.00504 * sin(gS * 0.041 + 1.3));
  float fast = step(0.58, uSection.w);
  float wild = fast * (0.35 + 0.65 * uEnergy) * (1.0 - uCalm);
  gCarX = 1.1 * sin(uTime * 0.43);
  gYaw = curv * 45.0 * (0.5 + uEnergy) + 0.05 * sin(uTime * 1.7) * (0.3 + wild);            // the tail steps out through the bends
  vec3 car = vec3(gCarX, 0.0, 0.0);

  // ---- the camera: which shot, and where in it ----
  float len = mix(16.0, 8.0, fast);
  float sh = floor(uBeats / len), ph = fract(uBeats / len);
  float pick = mod(sh - floor((uBeats - uSecBeats) / len), 4.0);    // cuts on the bar grid; every part opens on its first shot
  vec3 C, T, upv = vec3(0.0, 1.0, 0.0);
  float roll = 0.0;
  if (fast < 0.5) {
    if (pick < 0.5) {            // straight down from above: the car holds the middle and the land runs under it
      float a = 0.25 * sin(uTime * 0.11);
      C = vec3(gCarX * 0.4, 17.0 - 3.0 * ph, 2.5); T = vec3(gCarX * 0.4, 0.0, 2.6); upv = vec3(sin(a), 0.0, cos(a));
    } else if (pick < 1.5) {     // a high, slow orbit
      float a = 0.7 + 0.5 * ph + sh * 2.1;
      C = vec3(sin(a) * 24.0, 10.0 + 2.0 * ph, -cos(a) * 24.0); T = vec3(0.0, 0.5, 3.0);
    } else if (pick < 2.5) {     // a long tracking shot from the side
      C = vec3(-17.0, 1.7, 7.0 - 9.0 * ph); T = car + vec3(0.0, 0.8, 1.0);
    } else {                     // following from high behind, sinking slowly
      C = vec3(2.5, 9.5 - 3.0 * ph, -15.0); T = vec3(0.0, 0.5, 8.0);
    }
  } else {
    if (pick < 0.5) {            // low and close behind, banking with the track
      C = vec3(gCarX + 0.9 * sin(uTime * 0.9), 1.05, -6.4 + 1.1 * gKick * (1.0 - uCalm)); T = vec3(gCarX * 0.6, 0.85, 6.0); roll = -curv * 30.0;
    } else if (pick < 1.5) {     // in front, backing away as the car comes at you
      C = vec3(1.9, 0.6, 9.0 - 3.0 * ph); T = car + vec3(0.0, 0.7, 0.0);
    } else if (pick < 2.5) {     // level with the wheels
      C = vec3(gCarX + 3.0, 0.55, 0.4 + 1.4 * sin(ph * PI)); T = car + vec3(0.0, 0.55, 0.5 + 0.8 * sin(ph * PI));
    } else {                     // a swoop around the car
      float a = ph * 4.0 + sh * 1.7, R0 = 7.5 - 2.0 * sin(ph * PI);
      C = vec3(gCarX + sin(a) * R0, 1.3 + 2.6 * pow(1.0 - sin(ph * PI), 2.0), cos(a) * R0); T = car + vec3(0.0, 0.7, 0.0); roll = 0.25 * cos(a);
    }
  }
  vec3 jit = vec3(vnoise(vec2(uTime * 9.0, 1.5)), vnoise(vec2(uTime * 11.0, 5.5)), vnoise(vec2(uTime * 7.0, 9.5))) - 0.5;
  C += jit * 0.3 * wild;
  T += jit.zxy * 0.5 * wild;
  roll += (vnoise(vec2(uTime * 6.0, 13.5)) - 0.5) * 0.1 * wild + 0.05 * gKick * wild * sign(sin(sh * 7.0 + 0.5));
  vec3 f = normalize(T - C);
  C += f * 0.6 * gKick * wild;                                   // every kick punches the camera in
  vec3 r = normalize(cross(f, upv)), u = cross(r, f);
  float cr = cos(roll), sr = sin(roll);
  vec3 r2 = r * cr + u * sr, u2 = u * cr - r * sr;
  // the surface is the drone's lens: your own head position still shifts the view
  vec3 wo = C + r2 * ro.x + u2 * ro.y - f * ro.z;
  vec3 wd = normalize(r2 * rd.x + u2 * rd.y - f * rd.z);
  wo.y = max(wo.y, 0.25);

  float tG = wd.y < -0.0005 ? -wo.y / wd.y : 1e5;
  mat2 R = rot(gYaw);
  vec3 lo = wo - car, ld = wd;
  lo.xz = R * lo.xz;
  ld.xz = R * ld.xz;
  float wheel;
  float tC = carHit(lo, ld, wheel);
  vec3 col;
  float tHit = 1e5;
  if (tC > 0.0 && tC < tG) { col = driveCar(lo + ld * tC, ld, wd, wheel, R); tHit = tC; }
  else if (tG < 1e4) { col = driveGround(wo + wd * tG, tG, R); tHit = tG; }
  else col = driveSky(wd);
  vec4 pl = drivePlume(wo, wd, tHit);
  col = mix(col, pl.rgb, pl.a);
  col += driveLights(wo, wd, tHit, R);
  return col + vec3(1.0) * exp(-uDrop * 4.0) * 0.4;
}`,Tn={halo:{id:"halo",name:"Halo",code:Sg,slots:["kick","snare","hat"],lead:[0,0,0],levels:[],layers:[["Kick","ring and floor",{slot:0}],["Snare","echo rings",{slot:1}],["Hats","dust",{slot:2}],["Bass","water",{feat:"bass"}],["Mids","bars",{feat:"mid"}],["Highs","ring edge",{feat:"high"}]]},rig:{id:"rig",name:"Rig",code:Mg,slots:["kick","snare","hat","bass","stab","arp"],lead:[0,0,0,0,0,0],levels:["sub","wobble","rise","phase","bassOn","kind"],layers:[["Kick","frame chase",{slot:0}],["Snare","flash",{slot:1}],["Hats","inner frames",{slot:2}],["Bass","twist",{level:1,gate:4}],["Stabs","cuts",{slot:4}],["Riser","squeeze",{level:2}]]},tide:{id:"tide",name:"Tide",code:bg,slots:["keys","bells","perc","guitar","bass","pad"],lead:[.45,0,0,0,0,0],levels:["pad","strings","bass","guitar","keys"],layers:[["Pad","sky",{level:0}],["Keys","drops",{slot:0}],["Bells","stars",{slot:1}],["Bass","sun",{level:2}],["Percussion","fireflies",{slot:2}],["Strings","aurora",{level:1}],["Guitar","arcs",{level:3}]]},city:{id:"city",name:"Skyline",code:wg,slots:["kick","snare|perc","hat","arp|keys","stab|guitar|lead","bells|lead"],lead:[0,0,0,0,0,0],levels:[],layers:[["Kick","windows, tower",{slot:0}],["Snare","whole towers",{slot:1}],["Hats","single windows",{slot:2}],["Bass","lit floors",{feat:"bass"}],["Energy","traffic, clouds",{feat:"energy"}],["Melody","climbing light",{slot:3}],["Accents","roof beams",{slot:4}],["Bells","fireworks",{slot:5}]]},drive:{id:"drive",name:"Chase",code:Eg,slots:["kick","snare|perc","hat"],lead:[1.6,0,0],levels:[],layers:[["Kick","gates",{slot:0}],["Snare","tail lights, sky",{slot:1}],["Hats","glitter",{slot:2}],["Bass","speed, spray",{feat:"bass"}],["Mids","aurora",{feat:"mid"}],["Energy","camera",{feat:"energy"}]]}};function wu(i){return`${rc}
varying vec2 vUv;
${i.code}
void main() {
  vec3 ro = vec3(0.0, 0.0, 2.4);
  vec3 rd = normalize(vec3((vUv - 0.5) * 2.0 * uHalf, 0.0) - ro);
  gl_FragColor = vec4(grade(portal(ro, rd)), 1.0);
}`}var _o=48;function Tg(){let e=new Uint8Array(262144),t=1234567;for(let s=0;s<e.length;s++)t=Math.imul(t,1664525)+1013904223>>>0,e[s]=t>>>24;let n=new Fi(e,256,256,on,Ht);return n.wrapS=n.wrapT=ls,n.minFilter=n.magFilter=yt,n.generateMipmaps=!1,n.needsUpdate=!0,n}var yo=class{constructor(e){this.renderer=e,this.aspect=1.8,this.travel=0,this.lastTravelIn=null,this.specData=new Uint8Array(_o),this.specSmooth=new Float32Array(_o),this.spectrumTex=new Fi(this.specData,_o,1,Qs,Ht),this.spectrumTex.minFilter=this.spectrumTex.magFilter=yt,this.spectrumTex.needsUpdate=!0,this.noise=Tg(),this.notes=new Float32Array(192),this.rands=new Float32Array(48),this.levels=new Float32Array(8),this.dists=new Float32Array(8);let t=n=>({value:n});this.uniforms={uTime:t(0),uBeat:t(0),uBar:t(0),uBeats:t(0),uKick:t(0),uSnare:t(0),uHat:t(0),uBass:t(0),uMid:t(0),uHigh:t(0),uEnergy:t(.4),uCentroid:t(.5),uTravel:t(0),uAspect:t(this.aspect),uHue:t(0),uBright:t(1),uWarm:t(0),uDrop:t(99),uSection:t(new nt(0,.4,0,0)),uRes:t(new Ue(1,1)),uHalf:t(new Ue(2,1.2)),uNote:t(this.notes),uRand:t(this.rands),uLevel:t(this.levels),uDist:t(this.dists),uCalm:t(0),uSecBeats:t(0),uNoise:t(this.noise),uSpectrum:t(this.spectrumTex)},this.materials=new Map,this.quad=new rt(new Kt(2,2)),this.quad.frustumCulled=!1,this.scene=new Zn,this.scene.add(this.quad),this.camera=new Bi,this.slots=[{scene:null,rt:null},{scene:null,rt:null}]}_material(e){let t=this.materials.get(e.id);return t||(t=new St({name:e.id,vertexShader:bu,fragmentShader:wu(e),uniforms:this.uniforms,depthTest:!1,depthWrite:!1}),this.materials.set(e.id,t)),t}setScene(e,t){let n=this.slots[e];n.scene=t?Tn[t]:null,n.scene&&!n.rt&&(n.rt=new zt(512,288,{depthBuffer:!1,minFilter:an,magFilter:yt,generateMipmaps:!0}))}warmUp(){let e=this.renderer,t=new zt(8,8,{depthBuffer:!1}),n=e.getRenderTarget(),s=e.xr.enabled;e.xr.enabled=!1;for(let r of Object.values(Tn))this.quad.material=this._material(r),e.setRenderTarget(t),e.render(this.scene,this.camera);e.setRenderTarget(n),e.xr.enabled=s,t.dispose()}update(e,t,n){let s=this.uniforms,r=n.reaction*(n.calm?.45:1),a=c=>Math.min(1.2,c*r);s.uTime.value=e.time,s.uBeat.value=e.beat,s.uBar.value=e.bar,s.uBeats.value=e.beats,s.uKick.value=a(e.kick),s.uSnare.value=a(e.snare),s.uHat.value=n.calm?0:a(e.hat),s.uBass.value=a(e.bass),s.uMid.value=a(e.mid),s.uHigh.value=a(e.high),s.uEnergy.value=Math.min(1,e.energy*(.5+.5*Math.min(1.2,r))),s.uCentroid.value=e.centroid,s.uHue.value=n.hue,s.uWarm.value=n.warm,s.uBright.value=n.brightness*(n.calm?.8:1),s.uDrop.value=n.calm?99:e.dropAge,s.uSection.value.set(e.section,e.sectionEnergy,e.sectionAge,e.sectionTarget??e.sectionEnergy),s.uCalm.value=n.calm?1:0,s.uSecBeats.value=e.sectionBeats??0,s.uAspect.value=this.aspect;let o=this.lastTravelIn===null?0:e.travel-this.lastTravelIn;(o<0||o>1)&&(o=t*.5),this.lastTravelIn=e.travel,this.travel+=o*(n.calm?.6:1),s.uTravel.value=this.travel;for(let c=0;c<48;c++)this.notes[c*4]=e.notes[c*4],this.notes[c*4+1]=e.notes[c*4+1],this.notes[c*4+2]=Math.min(1.3,e.notes[c*4+2]*r),this.notes[c*4+3]=e.notes[c*4+3],this.rands[c]=e.rands[c];for(let c=0;c<8;c++)this.levels[c]=e.levels[c],this.dists[c]=(e.dists?e.dists[c]:0)*(n.calm?.6:1);let l=Math.exp(-t/.14);for(let c=0;c<_o;c++){let h=Math.min(1,e.spectrum[c]*(.6+.4*Math.min(1.2,r))),p=this.specSmooth[c];this.specSmooth[c]=h>p?p+(h-p)*.65:Math.max(h,p*l),this.specData[c]=Math.min(255,this.specSmooth[c]*255)}this.spectrumTex.needsUpdate=!0}renderProbes(){let e=this.renderer,t=e.getRenderTarget(),n=e.xr.enabled;e.xr.enabled=!1;for(let s of this.slots)s.scene&&(this.uniforms.uRes.value.set(s.rt.width,s.rt.height),this.quad.material=this._material(s.scene),e.setRenderTarget(s.rt),e.render(this.scene,this.camera));e.setRenderTarget(t),e.xr.enabled=n}};var So=12,Ag=["wall","floor","ceiling","global mesh"],Rg=`
uniform vec2 uSize;
varying vec2 vUv;
varying vec3 vPos;   // this point on the surface, meters, surface space
varying vec3 vEye;   // the eye, meters, surface space (+z is the room side)
void main() {
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec3 T = normalize(modelMatrix[0].xyz), B = normalize(modelMatrix[1].xyz), N = normalize(modelMatrix[2].xyz);
  vec3 d = cameraPosition - modelMatrix[3].xyz;
  vEye = vec3(dot(d, T), dot(d, B), dot(d, N));
  vPos = vec3((uv - 0.5) * uSize, 0.0);
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,Cg=i=>`
${rc}
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vEye;
uniform vec2 uSize;
uniform float uFeather, uOpacity, uReveal, uSolid, uSweep;
uniform vec4 uHoles[${So}];
${i.code}
float revealNoise() {
  vec2 q = vPos.xy * 6.0 / 256.0;
  return texture2D(uNoise, q).r * 0.65 + texture2D(uNoise, q * 2.7 + 0.31).g * 0.35;
}
void main() {
  if (vEye.z < 0.05) discard;
  vec3 col = grade(portal(vEye, normalize(vPos - vEye)));
  vec2 m = vUv * uSize;
  vec2 e = min(m, uSize - m);
  float edge = min(e.x, e.y);
  float mask = smoothstep(0.0, uFeather, edge);
  for (int i = 0; i < ${So}; i++) {
    vec2 d = max(uHoles[i].xy - vUv, vUv - uHoles[i].zw) * uSize;
    float o = max(d.x, d.y);
    mask *= smoothstep(0.0, 0.03, o);
    col += vec3(0.6, 0.8, 1.0) * exp(-max(o, 0.0) * 55.0) * 0.25 * step(0.0, o);   // a lit rim around each cut-out
  }
  col += vec3(0.6, 0.78, 1.0) * exp(-edge * 60.0) * 0.3;                            // and around the opening itself
  // the scene burns in from a noisy front when it first appears or changes
  float n = revealNoise(), at = uReveal * 1.3 - 0.15;
  float front = exp(-pow((n - at) * 16.0, 2.0)) * step(0.001, uReveal) * step(uReveal, 0.999);
  mask *= smoothstep(n - 0.04, n + 0.04, at);
  col += vec3(0.55, 0.9, 1.0) * front * 0.6;
  col += vec3(0.8, 0.9, 1.0) * exp(-pow((vUv.x - uSweep) * 9.0, 2.0)) * 0.22;        // a band of light crossing on song change
  // transparency: at 0 the surface is replaced; toward 1 only the light remains
  float luma = dot(col, vec3(0.299, 0.587, 0.114));
  float cover = mix(smoothstep(0.0, 0.45, luma), 1.0, uSolid);
  gl_FragColor = vec4(col * mask * uOpacity, cover * mask * uOpacity);
}`,Eu=`
varying vec3 vW;
varying vec3 vN;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,Ru=`
uniform vec3 uC, uRt, uUp, uNm;   // the lit surface: center and unit axes
uniform vec2 uHalfSize;           // its half size, meters
`,Pg=`
precision highp float;
varying vec3 vW;
${Ru}
uniform float uClear;
void main() {
  vec3 d = vW - uC;
  if (abs(dot(d, uNm)) < uClear && abs(dot(d, uRt)) < uHalfSize.x + 0.06 && abs(dot(d, uUp)) < uHalfSize.y + 0.06) discard;
  gl_FragColor = vec4(0.0);
}`,Ig=`
precision highp float;
varying vec3 vW;
varying vec3 vN;
${Ru}
uniform sampler2D uMap;
uniform float uStrength, uPulse;
uniform float uAges[4];
void main() {
  vec3 n = normalize(vN);
  if (dot(n, cameraPosition - vW) < 0.0) n = -n;
  vec3 d = vW - uC;
  float dn = dot(d, uNm);
  vec2 q = vec2(dot(d, uRt), dot(d, uUp));
  vec2 over = max(abs(q) - uHalfSize, 0.0);
  float onSurface = step(abs(dn), 0.09);
  if (onSurface > 0.5 && over.x + over.y <= 0.0) discard;   // the scene itself is here
  vec3 total = vec3(0.0);
  // five patches of the surface, each a small light with the color the scene shows there
  for (int i = 0; i < 5; i++) {
    vec2 uv = i == 0 ? vec2(0.5) : vec2(i == 1 || i == 3 ? 0.2 : 0.8, i < 3 ? 0.27 : 0.73);
    vec3 P = uC + uRt * ((uv.x - 0.5) * 2.0 * uHalfSize.x) + uUp * ((uv.y - 0.5) * 2.0 * uHalfSize.y);
    vec3 L = P - vW;
    float d2 = dot(L, L);
    vec3 l = L * inversesqrt(d2);
    total += textureLod(uMap, uv, 5.0).rgb * max(dot(n, l), 0.0) * max(dot(-l, uNm), 0.0) / (d2 + 0.3);
  }
  total *= uHalfSize.x * uHalfSize.y * 0.8 * 0.5;
  vec3 avg = textureLod(uMap, vec2(0.5), 8.0).rgb + 0.03;
  // light scattering onto the same wall, just around the opening
  total += avg * exp(-length(over) * 5.0) * 0.28 * onSurface;
  // a ring of light that runs across the room from the surface on each kick
  float dist = length(d), ring = 0.0;
  for (int i = 0; i < 4; i++) {
    float a = uAges[i];
    ring += exp(-pow((dist - 0.3 - a * 4.5) / (0.15 + 0.12 * a), 2.0)) * exp(-a * 2.0);
  }
  total += avg * ring * uPulse * 0.3;
  total *= uStrength;
  gl_FragColor = vec4(total / (1.0 + total), 0.0);
}`,Lg=`
attribute vec4 aSeed;
uniform sampler2D uMap;
uniform mat4 uWall;
uniform vec2 uSize;
uniform float uT, uKick, uEnergy, uAmount, uPx;
varying vec4 vCol;
void main() {
  float life = fract(aSeed.z + uT * (0.045 + 0.05 * aSeed.w));
  vec3 c = textureLod(uMap, aSeed.xy * 0.9 + 0.05, 3.0).rgb;
  vec2 xy = (aSeed.xy - 0.5) * uSize;
  xy += vec2(sin(uT * 0.5 + aSeed.z * 40.0), cos(uT * 0.4 + aSeed.w * 30.0)) * 0.22 * life;
  float z = 0.03 + life * life * (0.35 + 1.7 * aSeed.w);
  vec4 mv = viewMatrix * (uWall * vec4(xy, z, 1.0));
  gl_Position = projectionMatrix * mv;
  float lum = dot(c, vec3(0.3, 0.6, 0.1));
  float on = step(fract(aSeed.z * 7.13 + aSeed.w), uAmount);
  float twinkle = 0.7 + 0.3 * sin(uT * 6.0 + aSeed.z * 90.0);
  gl_PointSize = uPx * (0.006 + 0.012 * aSeed.w) * (1.0 + 0.9 * uKick) / max(0.2, -mv.z);
  vCol = vec4(c * (0.5 + 1.4 * lum) + 0.04, sin(3.14159 * life) * on * (0.25 + 0.75 * uEnergy) * twinkle);
}`,Dg=`
precision highp float;
varying vec4 vCol;
void main() {
  vec2 d = gl_PointCoord - 0.5;
  gl_FragColor = vec4(vCol.rgb * vCol.a * exp(-dot(d, d) * 20.0), 0.0);
}`,Tu={transparent:!0,depthWrite:!1,depthTest:!0,blending:wa,blendEquation:Kn,blendSrc:_s,blendDst:_s,blendSrcAlpha:Ea,blendDstAlpha:_s},ac=new Ke,ei=new N,oc=new N(0,1,0);function ti(i,e,t,n,s=oc){let r=e.clone().normalize(),a=s.clone().addScaledVector(r,-s.dot(r));return a.lengthSq()<1e-6&&a.set(0,0,-1).addScaledVector(r,r.z),a.normalize(),{center:i.clone(),normal:r,up:a,right:new N().crossVectors(a,r),width:t,height:n}}function Au(i,e,t){let n=ti(i[0],e,1,1,t),s=1/0,r=-1/0,a=1/0,o=-1/0;for(let l of i){ei.copy(l).sub(i[0]);let c=ei.dot(n.right),h=ei.dot(n.up);c<s&&(s=c),c>r&&(r=c),h<a&&(a=h),h>o&&(o=h)}return n.center.copy(i[0]).addScaledVector(n.right,(s+r)/2).addScaledVector(n.up,(a+o)/2),n.width=r-s,n.height=o-a,n}var Mo=class{constructor(e,t){this.scene=e,this.engine=t,this.surfaces=[],this.objects=[],this.meshes=new Map,this.staticLights=[],this.holo=null,this.size=1,this.offset=.012,this.fade=0,this.reveal=[1,0],this.sweep=-1,this.solid=.85,this.opacity=1,this.glow=.7,this.motesAmount=.5,this.pulse=1,this.hasScan=!1,this.hasMesh=!1;let n=()=>({uC:{value:new N},uRt:{value:new N(1,0,0)},uUp:{value:new N(0,1,0)},uNm:{value:new N(0,0,1)},uHalfSize:{value:new Ue(1,1)}});this.surfU=n(),this.occluderMat=new St({vertexShader:Eu,fragmentShader:Pg,uniforms:{...this.surfU,uClear:{value:.085}},colorWrite:!1,side:Qt}),this.lightMat=new St({...Tu,vertexShader:Eu,fragmentShader:Ig,side:Qt,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,uniforms:{...this.surfU,uMap:{value:null},uStrength:{value:1},uPulse:{value:1},uAges:{value:[99,99,99,99]}}}),this.layers=[0,1].map(l=>{let c=new rt(new Kt(1,1));return c.matrixAutoUpdate=!1,c.frustumCulled=!1,c.visible=!1,c.renderOrder=1+l,e.add(c),{mesh:c,mats:new Map}});let s=1800,r=new Float32Array(s*4),a=99;for(let l=0;l<r.length;l++)a=Math.imul(a,1664525)+1013904223>>>0,r[l]=a/4294967296;let o=new kt;o.setAttribute("position",new qt(new Float32Array(s*3),3)),o.setAttribute("aSeed",new qt(r,4)),this.motes=new Gs(o,new St({...Tu,vertexShader:Lg,fragmentShader:Dg,uniforms:{uMap:{value:null},uWall:{value:new Ke},uSize:{value:new Ue},uT:{value:0},uKick:{value:0},uEnergy:{value:0},uAmount:{value:.5},uPx:{value:800}}})),this.motes.frustumCulled=!1,this.motes.visible=!1,this.motes.renderOrder=5,e.add(this.motes)}_material(e,t){let n=e.mats.get(t.id);return n||(n=new St({transparent:!0,premultipliedAlpha:!0,depthWrite:!1,depthTest:!0,side:Qt,vertexShader:Rg,fragmentShader:Cg(t),uniforms:{...this.engine.uniforms,uHalf:{value:new Ue(1,1)},uSize:{value:new Ue(1,1)},uFeather:{value:.03},uOpacity:{value:1},uReveal:{value:1},uSolid:{value:1},uSweep:{value:-1},uHoles:{value:Array.from({length:So},()=>new nt(2,2,2,2))}}}),e.mats.set(t.id,n)),n}warmUp(e,t,n){let s=new Zn;for(let r of n)s.add(new rt(this.layers[0].mesh.geometry,this._material(this.layers[0],r)));s.add(new rt(this.layers[0].mesh.geometry,this.lightMat),new rt(this.layers[0].mesh.geometry,this.occluderMat)),e.compile(s,t)}setStaticPlanes(e){for(let t of this.staticLights)this.scene.remove(t);this.staticLights=e.map(t=>{let n=new rt(new Kt(1,1),this.lightMat);return n.matrixAutoUpdate=!1,n.matrix.makeBasis(t.right,t.up,t.normal).scale(ei.set(t.width,t.height,1)).setPosition(t.center),n.matrixWorldNeedsUpdate=!0,n.frustumCulled=!1,n.renderOrder=-10,this.scene.add(n),n})}readScene(e,t){let n=e.detectedPlanes;this.surfaces.length=0,this.objects.length=0;let s=[];if(n)for(let o of n){let l=(o.semanticLabel||"").toLowerCase(),c=e.getPose(o.planeSpace,t);if(!c||!o.polygon||o.polygon.length<3)continue;ac.fromArray(c.transform.matrix);let h=o.polygon.map(g=>new N(g.x,g.y,g.z).applyMatrix4(ac)),p=new N().setFromMatrixColumn(ac,1).normalize(),u=Math.abs(p.y)>.8,f=null;l.includes("wall")&&!l.includes("art")?f="wall":l==="floor"?f="floor":l==="ceiling"?f="ceiling":l||(f=u?null:"wall"),f?this.surfaces.push({key:o,kind:f,points:h,normal:p}):l&&this.objects.push({label:l,points:h}),(f||l==="table"||l==="couch")&&s.push(Au(h,p,u?new N(0,0,-1):oc))}this.hasScan=this.surfaces.length>0;let r=e.detectedMeshes,a=new Set;if(r)for(let o of r){a.add(o);let l=this.meshes.get(o);if(!l||l.stamp!==o.lastChangedTime){l&&(this.scene.remove(l.occ,l.light),l.occ.geometry.dispose());let h=new kt;h.setAttribute("position",new qt(new Float32Array(o.vertices),3)),h.setIndex(new qt(new Uint32Array(o.indices),1)),h.computeVertexNormals(),h.computeBoundingBox();let p=new rt(h,this.occluderMat),u=new rt(h,this.lightMat);for(let f of[p,u])f.matrixAutoUpdate=!1,f.frustumCulled=!1,this.scene.add(f);p.renderOrder=-20,u.renderOrder=-10,l={occ:p,light:u,label:(o.semanticLabel||"").toLowerCase(),stamp:o.lastChangedTime,box:h.boundingBox},this.meshes.set(o,l)}let c=e.getPose(o.meshSpace,t);c&&(l.occ.matrix.fromArray(c.transform.matrix),l.light.matrix.copy(l.occ.matrix),l.occ.matrixWorldNeedsUpdate=l.light.matrixWorldNeedsUpdate=!0)}for(let[o,l]of this.meshes)a.has(o)||(this.scene.remove(l.occ,l.light),l.occ.geometry.dispose(),this.meshes.delete(o));return this.hasMesh=[...this.meshes.values()].some(o=>o.label.includes("global")||!o.label),!this.hasMesh&&s.length!==this.staticLights.length&&this.setStaticPlanes(s),this.hasMesh&&this.staticLights.length&&this.setStaticPlanes([]),this.holo&&this.holo.key&&!this.surfaces.some(o=>o.key===this.holo.key)&&(this.holo=null),this.surfaces.length}_rectFor(e,t,n){let s=e.normal.clone();s.dot(ei.copy(t).sub(e.points[0]))<0&&s.negate();let r=e.kind==="wall"?oc:new N(n.x,0,n.z).normalize();return Au(e.points,s,r)}aim(e,t,{fallbackToFacing:n=!1}={}){let s=null;for(let r of this.surfaces){let a=this._rectFor(r,e,t),o=t.dot(a.normal);if(o>-.001)continue;let l=ei.copy(a.center).sub(e).dot(a.normal)/o;if(l<=0)continue;let c=e.clone().addScaledVector(t,l),h=c.clone().sub(a.center),p=Math.abs(h.dot(a.right))<=a.width/2&&Math.abs(h.dot(a.up))<=a.height/2,u=p?100-l:n&&r.kind==="wall"?-o:-1/0;u>-1/0&&(!s||u>s.score)&&(s={s:r,rect:a,hit:p?c:a.center.clone(),score:u})}return s?(this.holo={full:s.rect,kind:s.s.kind,key:s.s.key,hit:s.hit,rect:null},this._applySize(),this.appear=0,s.s.kind):null}placeFloating(e,t,n=3.2,s=1.8,r=2.3){let a=new N(t.x,0,t.z);a.lengthSq()<1e-4&&a.set(0,0,-1),a.normalize();let o=e.clone().addScaledVector(a,r);o.y=Math.max(1.15,e.y-.05);let l=ti(o,a.clone().negate(),n,s);this.holo={full:l,kind:"floating",key:null,hit:o.clone(),rect:null},this._applySize(),this.appear=0}setFixed(e){this.holo={full:e,kind:"wall",key:null,hit:e.center.clone(),rect:e}}setSize(e){this.size=e,this.holo&&this._applySize()}_applySize(){let{full:e,hit:t}=this.holo,n=Math.max(.25,Math.min(1,this.size)),s=e.width*n,r=e.height*n,a=t.clone().sub(e.center),o=Math.max(-(e.width-s)/2,Math.min((e.width-s)/2,a.dot(e.right))),l=Math.max(-(e.height-r)/2,Math.min((e.height-r)/2,a.dot(e.up)));this.holo.rect={...e,center:e.center.clone().addScaledVector(e.right,o).addScaledVector(e.up,l),width:s,height:r}}_holes(e,t){let n=[],s=r=>{let a=1/0,o=-1/0,l=1/0,c=-1/0,h=1/0;for(let f of r){let g=ei.copy(f).sub(e.center),_=g.dot(e.right)/e.width+.5,m=g.dot(e.up)/e.height+.5;h=Math.min(h,Math.abs(g.dot(e.normal))),_<a&&(a=_),_>o&&(o=_),m<l&&(l=m),m>c&&(c=m)}if(h>.3||o<0||a>1||c<0||l>1)return;let p=.03/e.width,u=.03/e.height;n.push([a-p,l-u,o+p,c+u])};for(let r of this.objects)s(r.points);for(let r of this.meshes.values()){if(!r.label||Ag.some(l=>r.label.includes(l)))continue;let a=r.box,o=[];for(let l=0;l<8;l++)o.push(new N(l&1?a.max.x:a.min.x,l&2?a.max.y:a.min.y,l&4?a.max.z:a.min.z).applyMatrix4(r.occ.matrix));s(o)}n.sort((r,a)=>(a[2]-a[0])*(a[3]-a[1])-(r[2]-r[0])*(r[3]-r[1]));for(let r=0;r<So;r++)n[r]?t[r].set(...n[r]):t[r].set(2,2,2,2);return n.length}layout(e,t,n,s){this.fade=Math.min(1,this.fade+e/1),this.appear=Math.min(1,(this.appear??1)+e/1.4);let r=this.appear*this.appear*(3-2*this.appear);this.sweep>=0&&(this.sweep+=e/1.1,this.sweep>1.3&&(this.sweep=-1));let a=this.holo,o=a?a.rect:null,l=this.engine;this.layers.forEach((g,_)=>{let m=l.slots[_];if(!o||!m.scene||this.reveal[_]<=.001){g.mesh.visible=!1;return}let d=this._material(g,m.scene);g.mesh.material=d,g.mesh.matrix.makeBasis(o.right,o.up,o.normal).scale(ei.set(o.width,o.height,1)).setPosition(ei.copy(o.center).addScaledVector(o.normal,this.offset+_*.001)),g.mesh.matrixWorldNeedsUpdate=!0;let S=d.uniforms;S.uSize.value.set(o.width,o.height),S.uHalf.value.set(o.width/2,o.height/2),S.uOpacity.value=this.fade*this.opacity,S.uReveal.value=this.reveal[_]*r,S.uSolid.value=this.solid,S.uSweep.value=this.sweep,this.holeCount=this._holes(o,S.uHoles.value),g.mesh.visible=!0});let c=l.slots[n].rt?l.slots[n].rt.texture:null,h=!!o&&!!c;for(let g of this.meshes.values())g.occ.visible=h,g.light.visible=h&&this.glow>.01;for(let g of this.staticLights)g.visible=h&&this.glow>.01;if(this.motes.visible=h&&this.motesAmount>.01,!h)return o;l.aspect=o.width/o.height,l.uniforms.uHalf.value.set(o.width/2,o.height/2);let p=this.surfU;p.uC.value.copy(o.center),p.uRt.value.copy(o.right),p.uUp.value.copy(o.up),p.uNm.value.copy(o.normal),p.uHalfSize.value.set(o.width/2,o.height/2);let u=this.lightMat.uniforms;u.uMap.value=c,u.uStrength.value=this.glow*this.fade*this.opacity*1.6,u.uPulse.value=this.pulse;for(let g=0;g<4;g++)u.uAges.value[g]=t.notes[g*4]>=0?t.notes[g*4]:99;let f=this.motes.material.uniforms;return f.uMap.value=c,f.uWall.value.makeBasis(o.right,o.up,o.normal).setPosition(o.center),f.uSize.value.set(o.width,o.height),f.uT.value+=e*(.6+.8*t.energy),f.uKick.value=t.kick,f.uEnergy.value=t.energy*this.fade,f.uAmount.value=this.motesAmount,f.uPx.value=s,o}reset(){this.holo=null,this.surfaces.length=0,this.objects.length=0;for(let e of this.meshes.values())this.scene.remove(e.occ,e.light),e.occ.geometry.dispose();this.meshes.clear(),this.setStaticPlanes([]),this.fade=0,this.hasScan=this.hasMesh=!1,this.layers.forEach(e=>{e.mesh.visible=!1}),this.motes.visible=!1}};function ur(){let i=new Float32Array(192);for(let e=0;e<48;e++)i[e*4]=99;return{time:0,beat:0,bar:0,beats:0,kick:0,snare:0,hat:0,bass:0,mid:0,high:0,energy:.3,centroid:.5,travel:0,spectrum:new Float32Array(48),notes:i,rands:new Float32Array(48),levels:new Float32Array(8),dists:new Float32Array(8),section:0,sectionEnergy:.4,sectionTarget:.4,sectionAge:0,sectionBeats:0,dropAge:99,live:!1}}function Cu(i){let t=new DataView(i).getUint32(0,!0),n=JSON.parse(new TextDecoder().decode(new Uint8Array(i,4,t))),s=4+t,r={};for(let a of n.tracks)r[a]=new Uint8Array(i,s,n.frames),s+=n.frames;return{...n,tracks:r,spectrum:new Uint8Array(i,s,n.frames*n.bands)}}var Ng=(i,e)=>{let t=Math.sin(i*12.9898+e*78.233)*43758.5453;return t-Math.floor(t)},hr=class{constructor(e){this.clock=e,this.bus=ur(),this.ready=!1,this.lv=new Float32Array(8),this.lastWall=0}load(e,t,n){this.f=e,this.score=t,this.scene=n,this.bpm=t.bpm||e.bpm,this.beatOffset=t.beatOffset||0;let s=t.tracks;this.slots=n.slots.map(u=>{let f=u.split("|").find(d=>s[d]?.length),g=(s[f]||[]).slice().sort((d,S)=>d[0]-S[0]),_=1/0,m=-1/0;for(let d of g)d[2]<_&&(_=d[2]),d[2]>m&&(m=d[2]);return{name:f,notes:g,lo:_,span:m>_?m-_:1,rand:g.map(d=>d[4]?d[4]:Ng(d[0],d[2]))}}),this.drums=["kick","snare","hat"].map(u=>(s[u]||[]).map(f=>[f[0],f[3]])),this.sections=t.sections&&t.sections.length?t.sections:[{t:0,energy:.5}],this.drops=(s.drop||[]).map(u=>u[0]),this.drops.length||this.sections.forEach((u,f)=>{f&&u.energy-this.sections[f-1].energy>.2&&this.drops.push(u.t)});let{frames:r,rate:a}=e;this.travel=new Float32Array(r);let o=this.drums[0],l=0,c=0,h=0,p=Math.exp(-1/(.14*a));for(let u=0;u<r;u++){for(c*=p;h<o.length&&o[h][0]<=u/a;)c=1,h++;let f=e.tracks.bass[u]/204,g=e.tracks.energy[u]/204;l+=(.22+.55*g+.9*f*f+.5*c)/a,this.travel[u]=l}this.lv.fill(0),this.ready=!0}_held(e,t){let n=this.score.tracks[e];if(!n)return null;let s=0,r=n.length;for(;s<r;){let a=s+r>>1;n[a][0]<=t?s=a+1:r=a}for(let a=s-1;a>=0&&a>=s-4;a--)if(t<n[a][0]+n[a][1])return n[a];return null}update(e,t){let n=this.bus;if(!this.ready)return n;let s=this.f,r=Math.max(0,Math.min(s.duration-.01,t??this.clock.songTimeAt(e))),a=performance.now(),o=Math.min(.1,Math.max(.001,(a-this.lastWall)/1e3));this.lastWall=a,n.time=r;let l=r*s.rate,c=Math.min(s.frames-1,Math.floor(l)),h=Math.min(s.frames-1,c+1),p=l-c,u=b=>(b[c]+(b[h]-b[c])*p)/204;n.bass=u(s.tracks.bass),n.mid=u(s.tracks.mid),n.high=u(s.tracks.high),n.energy=Math.min(1,u(s.tracks.energy)),n.centroid=u(s.tracks.centroid),n.travel=this.travel[c]+(this.travel[h]-this.travel[c])*p;let f=c*s.bands;for(let b=0;b<s.bands;b++)n.spectrum[b]=s.spectrum[f+b]/255;let g=(r-this.beatOffset)*this.bpm/60;n.beats=g,n.beat=g-Math.floor(g),n.bar=g/4-Math.floor(g/4);let _=(b,w)=>{let x=0,M=b.length;for(;x<M;){let P=x+M>>1;b[P][0]<=r?x=P+1:M=P}let U=0;for(let P=x-1;P>=0&&P>=x-3;P--)U=Math.max(U,(.55+.45*b[P][1])*Math.exp(-(r-b[P][0])/w));return U};n.kick=_(this.drums[0],.14),n.snare=_(this.drums[1],.16),n.hat=_(this.drums[2],.05);for(let b=0;b<6;b++){let w=this.slots[b],x=b*8;if(!w||!w.notes.length){for(let L=0;L<8;L++)n.notes[(x+L)*4]=99;continue}let M=r+(this.scene.lead[b]||0),U=0,P=w.notes.length;for(;U<P;){let L=U+P>>1;w.notes[L][0]<=M?U=L+1:P=L}for(let L=0;L<8;L++){let F=U-1-L,V=(x+L)*4;if(F<0){n.notes[V]=99;continue}let R=w.notes[F];if(n.notes[V]=r-R[0],n.notes[V+1]=(R[2]-w.lo)/w.span,n.notes[V+2]=R[3],n.notes[V+3]=R[1],n.rands[x+L]=w.rand[F],b===0){let B=Math.min(s.frames-1.001,Math.max(0,R[0]*s.rate)),G=Math.floor(B);n.dists[L]=this.travel[G]+(this.travel[G+1]-this.travel[G])*(B-G)-n.travel}}}let m=this.bpm/60,d=this._held("bass",r),S=(b,w,x,M)=>{let U=1-Math.exp(-o/(w>this.lv[b]?x:M));return this.lv[b]+=(w-this.lv[b])*U,this.lv[b]};this.scene.levels.forEach((b,w)=>{let x=0;if(b==="sub")x=S(w,d?n.bass:0,.03,.12);else if(b==="wobble")x=d?.5-.5*Math.cos(2*Math.PI*d[4]*m*(r-d[0])):0;else if(b==="phase")x=d?2*Math.PI*d[4]*m*(r-d[0]):this.lv[w];else if(b==="bassOn")x=S(w,d?1:0,.02,.1);else if(b==="kind")x=d?d[3]:this.lv[w];else if(b==="rise"){let M=this._held("riser",r);x=M?(r-M[0])/M[1]:0}else{let M=this._held(b,r);x=S(w,M?Math.max(.6,M[3]):0,.3,.9)}(b==="phase"||b==="kind")&&(this.lv[w]=x),n.levels[w]=x});let A=0;for(let b=0;b<this.sections.length;b++)r>=this.sections[b].t&&(A=b);n.section=A,n.sectionTarget=this.sections[A].energy,n.sectionEnergy+=(this.sections[A].energy-n.sectionEnergy)*(1-Math.exp(-o/.8)),n.sectionAge=r-this.sections[A].t,n.sectionBeats=n.sectionAge*this.bpm/60;let E=99;for(let b of this.drops)r>=b&&(E=r-b);return n.dropAge=E,n.live=!1,n}};function Pu(i,e,t=[]){return e.layers.forEach(([,,n],s)=>{let r=0;if(n.slot!==void 0)for(let a=0;a<8;a++){let o=(n.slot*8+a)*4,l=i.notes[o];l>=0&&l<2&&(r=Math.max(r,Math.exp(-l*5)*Math.min(1,i.notes[o+2])))}else n.level!==void 0?r=i.levels[n.level]*(n.gate!==void 0?i.levels[n.gate]:1):r=Math.min(1,i[n.feat]);t[s]=Math.max(0,Math.min(1,r))}),t.length=e.layers.length,t}var cc=48,Si=2048,hc={bass:[30,160],mid:[300,2800],high:[5e3,14e3]},Gi=class{constructor(e,t){this.a=e,this.r=t,this.y=0}step(e,t){let n=Math.exp(-t/(e>this.y?this.a:this.r));return this.y=e+(this.y-e)*n,this.y}},uc=class{constructor(e,t,n,s){let r=2*Math.PI*t/s,a=Math.sin(r)/(2*n),o=Math.cos(r),l,c,h;e==="bp"?(l=a,c=0,h=-a):(l=(1+o)/2,c=-(1+o),h=(1+o)/2);let p=1+a;this.b0=l/p,this.b1=c/p,this.b2=h/p,this.a1=-2*o/p,this.a2=(1-a)/p,this.x1=this.x2=this.y1=this.y2=0}tick(e){let t=this.b0*e+this.b1*this.x1+this.b2*this.x2-this.a1*this.y1-this.a2*this.y2;return this.x2=this.x1,this.x1=e,this.y2=this.y1,this.y1=t,t}},dr=class{constructor(e,{type:t,f:n,q:s,fast:r,slow:a,ratio:o,gap:l,count:c,minLevel:h=.03}){this.filter=new uc(t,n,s,e),this.kFast=1-Math.exp(-1/(r*e)),this.kSlow=1-Math.exp(-1/(a*e)),this.kPeak=Math.exp(-1/(8*e)),this.ratio=o,this.gap=l,this.minLevel=h,this.dt=1/e,this.e=0,this.base=0,this.peak=1e-9,this.since=10,this.armed=!0,this.ages=new Array(c).fill(99),this.vels=new Array(c).fill(0),this.rnds=new Array(c).fill(0),this.dists=new Array(c).fill(0),this.env=0,this.strength=0}sample(e,t){let n=this.filter.tick(e);this.e+=(n*n-this.e)*this.kFast,this.since+=this.dt;let s=this.e/(this.base+t),r=!1;return this.armed?s>this.ratio&&this.since>this.gap&&this.e>this.peak*this.minLevel&&(r=!0,this.armed=!1,this.since=0,this.strength=Math.min(1,.35+.65*Math.min(1,this.e/(this.peak*.5)))):s<this.ratio*.5&&(this.armed=!0),this.base+=(this.e-this.base)*this.kSlow,this.peak=Math.max(this.peak*this.kPeak,this.e),r}frame(e,t,n,s=0){for(let r=0;r<this.ages.length;r++)this.ages[r]+=e,this.dists[r]-=s;this.env*=Math.exp(-e/n);for(let r of t)this.ages.pop(),this.ages.unshift(r),this.vels.pop(),this.vels.unshift(this.strength),this.rnds.pop(),this.rnds.unshift(Math.random()),this.dists.pop(),this.dists.unshift(0),this.env=Math.max(this.env,.55+.45*this.strength)}},bo=class{constructor(){this.bus=ur(),this.bus.live=!0,this.ctx=null,this.stream=null,this.analyser=null,this.state="off",this.gain=1,this.musicConfidence=0,this.bpm=120,this.beats=0,this.travel=0,this.t=0,this.pulse=0,this.f={bass:new Gi(.012,.16),mid:new Gi(.02,.2),high:new Gi(.01,.12),energy:new Gi(1.2,2.4),centroid:new Gi(.4,.8)},this.peaks={bass:1e-4,mid:1e-4,high:1e-4,rms:1e-4},this.noiseDb=-70,this.hiDb=-70,this.loDb=-70,this.onsetBins=new Float32Array(800),this.binIdx=0,this.binAcc=0,this.binFill=0,this.lastTempoAt=0,this.lastCtxTime=null,this.hitRate=0,this.slowDb=-70,this.dropAge=99,this.inputDb=-100}_prepare(e){this.ctx=e;let t=e.sampleRate;this.data=new Float32Array(Si/2),this.time=new Float32Array(Si),this.on={kick:new dr(t,{type:"bp",f:160,q:.9,fast:.004,slow:.12,ratio:4,gap:.11,count:8,minLevel:.25}),snare:new dr(t,{type:"bp",f:2600,q:.7,fast:.003,slow:.15,ratio:5,gap:.09,count:8}),hat:new dr(t,{type:"hp",f:8e3,q:.7,fast:.002,slow:.1,ratio:4,gap:.05,count:8})},this.lastCtxTime=null}async start(e){if(this.state="asking",!navigator.mediaDevices?.getUserMedia)return this.state="error",this.error=new Error("This browser has no microphone access here"),!1;try{this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}})}catch(n){try{if(n&&(n.name==="NotAllowedError"||n.name==="SecurityError"))throw n;this.stream=await navigator.mediaDevices.getUserMedia({audio:!0})}catch(s){return this.state=s&&(s.name==="NotAllowedError"||s.name==="SecurityError")?"denied":"error",this.error=s,!1}}if(e.state!=="running")try{await e.resume()}catch{}this._prepare(e);let t=e.createMediaStreamSource(this.stream);return this.analyser=e.createAnalyser(),this.analyser.fftSize=Si,this.analyser.smoothingTimeConstant=0,t.connect(this.analyser),this.state="on",!0}stop(){this.stream?.getTracks().forEach(e=>e.stop()),this.stream=null,this.analyser=null,this.state="off"}update(e,t){let n=this.bus;if(this.t+=t,n.time=this.t,!this.analyser)return n;let s=this.ctx.sampleRate,r=this.ctx.currentTime,a=this.lastCtxTime===null?Math.round(t*s):Math.round((r-this.lastCtxTime)*s);this.lastCtxTime=r;let o=Math.max(1,Math.min(Si,a));this.analyser.getFloatTimeDomainData(this.time);let l=10**((this.noiseDb+6)/10)*.02,c={kick:[],snare:[],hat:[]},h=s/100,p=0;for(let R=Si-o;R<Si;R++){let B=this.time[R]*this.gain;p+=B*B;let G=(Si-1-R)/s;this.on.kick.sample(B,l)&&(c.kick.push(G),this.binAcc+=1),this.on.snare.sample(B,l)&&(c.snare.push(G),this.binAcc+=.7),this.on.hat.sample(B,l)&&(c.hat.push(G),this.binAcc+=.25),++this.binFill>=h&&(this.onsetBins[this.binIdx++%800]=this.binAcc,this.binAcc=0,this.binFill=0)}this.on.kick.frame(t,c.kick,.14,this.travel-(this.travelSeen??this.travel)),this.travelSeen=this.travel,this.on.snare.frame(t,c.snare,.16),this.on.hat.frame(t,c.hat,.05),this.analyser.getFloatFrequencyData(this.data);let u=this.data,f=u.length,g=s/Si,_=0,m=0,d=0,S={bass:0,mid:0,high:0},A={};for(let R of Object.keys(hc))A[R]=[Math.max(1,Math.round(hc[R][0]/g)),Math.round(hc[R][1]/g)];for(let R=1;R<f;R++){let B=10**(u[R]/20)*this.gain;d+=B*B,_+=B*R,m+=B;for(let G of["bass","mid","high"])R>=A[G][0]&&R<A[G][1]&&(S[G]+=B*B)}let E=(R,B)=>(this.peaks[R]=Math.max(B,this.peaks[R]*Math.exp(-t/12),1e-7),Math.min(1.2,B/this.peaks[R])),b=10*Math.log10(p/o+1e-12);this.noiseDb=b<this.noiseDb?b:Math.min(b,this.noiseDb+t*.05),this.hiDb=b>this.hiDb?b:this.hiDb+(b-this.hiDb)*(1-Math.exp(-t/1.5)),this.loDb=b<this.loDb?b:this.loDb+(b-this.loDb)*(1-Math.exp(-t/1.5));let w=Math.max(0,Math.min(1,(this.hiDb-this.loDb-3)/6)),x=Math.max(0,Math.min(1,(b-this.noiseDb-6)/14)),M=Math.max(w,x);this.t-this.lastTempoAt>1&&(this.lastTempoAt=this.t,this._tempo());let U=Math.min(1,S.bass/(d+1e-12)*2.5),P=Math.min(1,.25+.75*Math.max(this.pulse,U*.8)),L=M*P;this.musicConfidence+=(L-this.musicConfidence)*(1-Math.exp(-t/(L>this.musicConfidence?.4:2.5)));let F=.65+.35*Math.min(1,this.musicConfidence*1.4);for(let R of["bass","mid","high"]){let B=A[R][1]-A[R][0];n[R]=this.f[R].step(E(R,Math.sqrt(S[R]/B)),t)*F}n.energy=this.f.energy.step(E("rms",Math.sqrt(p/o))*M,t);let V=m>0?_/m*g:0;n.centroid=this.f.centroid.step(Math.min(1,Math.log2(1+V/200)/5.5),t),n.kick=this.on.kick.env*F,n.snare=this.on.snare.env*F,n.hat=this.on.hat.env*F*.8,["kick","snare","hat"].forEach((R,B)=>{for(let G=0;G<8;G++){let H=(B*8+G)*4;n.notes[H]=this.on[R].ages[G],n.notes[H+1]=.5,n.notes[H+2]=this.on[R].vels[G]*F,n.notes[H+3]=.1,n.rands[B*8+G]=this.on[R].rnds[G],B===0&&(n.dists[G]=this.on.kick.dists[G])}}),this.beats+=t*this.bpm/60,n.beats=this.beats,n.beat=this.beats%1,n.bar=this.beats/4%1,this.travel+=(.22+.55*n.energy+.9*n.bass*n.bass+.5*n.kick)*t,n.travel=this.travel;for(let R=0;R<cc;R++){let B=Math.max(1,Math.round(40*400**(R/cc)/g)),G=Math.max(B+1,Math.round(40*(16e3/40)**((R+1)/cc)/g)),H=-200;for(let ee=B;ee<G&&ee<f;ee++)H=Math.max(H,u[ee]);n.spectrum[R]=Math.max(0,Math.min(1,(H+20*Math.log10(this.gain)-(this.noiseDb-38))/48))*F}return n.section=Math.floor(this.beats/32)%5,n.sectionEnergy=n.energy,this.loud=n.energy>(this.loud?.42:.62),n.sectionTarget=this.loud?.9:.3,n.sectionAge=this.beats%32*60/this.bpm,n.sectionBeats=this.beats%32,this.slowDb+=(b-this.slowDb)*(1-Math.exp(-t/4)),this.dropAge+=t,b-this.slowDb>8&&this.dropAge>6&&M>.5&&(this.dropAge=0),n.dropAge=this.dropAge,n.music=this.musicConfidence,this.inputDb=b,n}_tempo(){let e=this.onsetBins,t=800,n=new Float32Array(t),s=0,r=0;for(let h=0;h<t;h++)n[h]=e[(this.binIdx+h)%t],s+=n[h],n[h]>0&&r++;s/=t,this.hitRate=r/8;let a=h=>{let p=0,u=Math.round(h);for(let f=u;f<t;f++)p+=(n[f]-s)*(n[f-u]-s);return p/(t-u)},o=a(0)+1e-9,l=-1,c=this.bpm;for(let h=70;h<=180;h+=1){let p=6e3/h,u=Math.exp(-.5*(Math.log2(h/125)/.8)**2),f=(a(p)+.7*a(p*2)+.7*a(p*4))*u;f>l&&(l=f,c=h)}this.pulse=Math.max(0,Math.min(1,l/o*2.2)),this.pulse>.25&&(this.bpm+=(c-this.bpm)*.35)}};var Iu="overtone.settings.v1",Ug={experience:"what-you-see",looks:{},reaction:1,brightness:1,transparency:.1,size:1,glow:.7,particles:.5,sync:0,hue:0,micGain:1.5,calm:!1},wo=class{constructor(){this.v={...Ug};try{Object.assign(this.v,JSON.parse(localStorage.getItem(Iu)||"{}"))}catch{}this.listeners=new Set}set(e,t){if(this.v[e]!==t){this.v[e]=t;try{localStorage.setItem(Iu,JSON.stringify(this.v))}catch{}this.listeners.forEach(n=>n(e,t))}}on(e){return this.listeners.add(e),()=>this.listeners.delete(e)}};var Lu={play:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6C6 5.2291 6.4431 4.5268 7.1389 4.1949C7.8347 3.8629 8.6593 3.9605 9.2585 4.4456L17.6292 11.2228C17.8638 11.4127 18 11.6983 18 12C18 12.3017 17.8638 12.5873 17.6292 12.7772L9.2585 19.5544C8.6593 20.0395 7.8347 20.1371 7.1389 19.8051C6.4431 19.4732 6 18.7709 6 18Z"/>',pause:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5C5 4.447715 5.447715 4 6 4L8 4C8.552285 4 9 4.447715 9 5L9 19C9 19.552285 8.552285 20 8 20L6 20C5.447715 20 5 19.552285 5 19ZM15 5C15 4.447715 15.447715 4 16 4L18 4C18.552285 4 19 4.447715 19 5L19 19C19 19.552285 18.552285 20 18 20L16 20C15.447715 20 15 19.552285 15 19Z"/>',"skip-back":'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 16.9941C19 18.728898 16.942447 19.641025 15.656974 18.476086L9.328487 12.740993C8.890504 12.344078 8.890504 11.655922 9.328487 11.259007L15.656974 5.523914C16.942447 4.358975 19 5.271102 19 7.0059ZM5 5V19"/>',mic:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5C9 3.343146 10.343146 2 12 2L12 2C13.656854 2 15 3.343146 15 5L15 11C15 12.656854 13.656854 14 12 14L12 14C10.343146 14 9 12.656854 9 11ZM19 11C19 14.865993 15.865993 18 12 18C8.134007 18 5 14.865993 5 11M12 18V22M8 22H16"/>',"music-note":'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 18C9 19.6569 7.6569 21 6 21C4.3431 21 3 19.6569 3 18C3 16.3431 4.3431 15 6 15C7.6569 15 9 16.3431 9 18ZM21 16C21 17.6569 19.6569 19 18 19C16.3431 19 15 17.6569 15 16C15 14.3431 16.3431 13 18 13C19.6569 13 21 14.3431 21 16ZM9 18V5L21 3V16"/>',x:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7L17 17M17 7L7 17"/>',target:'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M22 12C22 17.5228 17.5228 22 12 22C6.4772 22 2 17.5228 2 12C2 6.4772 6.4772 2 12 2C17.5228 2 22 6.4772 22 12ZM18 12C18 15.3137 15.3137 18 12 18C8.6863 18 6 15.3137 6 12C6 8.6863 8.6863 6 12 6C15.3137 6 18 8.6863 18 12Z"/><path fill="currentColor" d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z" stroke="none"/></g>',scan:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8V6C3 4.34315 4.34315 3 6 3H8M16 3H18C19.6569 3 21 4.34315 21 6V8M21 16V18C21 19.6569 19.6569 21 18 21H16M8 21H6C4.34315 21 3 19.6569 3 18V16"/>',"eye-off":'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.035 18.035C16.3283 19.2786 14.2337 20 12 20C7.206 20 3.0523 16.6771 2 12C2.562 9.5021 4.0086 7.3904 5.965 5.965M9.8779 4.2211C10.565 4.076 11.2752 4 12 4C16.794 4 20.9477 7.3229 22 12C21.7487 13.1169 21.3206 14.1566 20.7491 15.0922M14.1213 14.1213C13.5785 14.6642 12.8285 15 12 15C10.3431 15 9 13.6569 9 12C9 11.1716 9.3358 10.4216 9.8787 9.8787M2 2L22 22"/>',power:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.82 4.6865C20.8483 6.5779 22 9.2267 22 12C22 17.5228 17.5228 22 12 22C6.4772 22 2 17.5228 2 12C2 9.2267 3.1517 6.5779 5.18 4.6865M12 2L12 9.7563"/>',"sliders-2-horizontal":'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 7C6 5.3431 7.3431 4 9 4L11 4C12.6569 4 14 5.3431 14 7C14 8.6569 12.6569 10 11 10L9 10C7.3431 10 6 8.6569 6 7ZM10 17C10 15.3431 11.3431 14 13 14L15 14C16.6569 14 18 15.3431 18 17C18 18.6569 16.6569 20 15 20L13 20C11.3431 20 10 18.6569 10 17ZM3 7H6M14 7H21M3 17H10M18 17H21"/>',check:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12L9.66667 17L19 7"/>',move:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12L2 12M5 15L2 12L5 9M15 12L22 12M19 9L22 12L19 15M12 9L12 2M9 5L12 2L15 5M12 15L12 22M15 19L12 22L9 19"/>',volume:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 10C2 9.447715 2.447715 9 3 9L5.477658 9C5.804909 9 6.111453 8.839879 6.298408 8.571288L9.17925 4.432477C9.738582 3.628903 11 4.024692 11 5.003764L11 18.996236C11 19.975308 9.738582 20.371097 9.17925 19.567523L6.298408 15.428712C6.111453 15.160121 5.804909 15 5.477658 15L3 15C2.447715 15 2 14.552285 2 14ZM15.80444 6.909091C17.205764 8.231561 18 10.073179 18 12C18 13.926821 17.205764 15.768439 15.80444 17.090909M18.549834 4C20.751915 6.078168 22 8.972139 22 12C22 15.027861 20.751915 17.921832 18.549834 20"/>'};var An=1680,ni=1040,Wi="rgba(255,255,255,0.96)",On="rgba(255,255,255,0.62)",fr="rgba(255,255,255,0.38)",dc='"Inter", "SF Pro Text", "Segoe UI", system-ui, sans-serif',jt={x:140,y:0,w:1540,h:868,r:56},Gt={x:330,y:838,w:1160,h:128,r:64},Du=new Map;function Fg(i,e){let t=`${i}|${e}`,n=Du.get(t);return n||(n=new Image,n.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96">${Lu[i].replaceAll("currentColor",e)}</svg>`)}`,Du.set(t,n)),n}var Nu=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`,Eo=class{constructor(e){this.app=e,this.canvas=document.createElement("canvas"),this.canvas.width=An,this.canvas.height=ni,this.g=this.canvas.getContext("2d"),this.tab="play",this.hits=[],this.hover=null,this.drag=null,this.dirty=!0,this.lastDraw=0,this.anim=new Map,this.ripple=null,this.toast=null,e.settings.on(()=>{this.dirty=!0})}say(e,t=3){this.toast={text:e,until:performance.now()+t*1e3},this.dirty=!0}_hit(e,t){for(let n=this.hits.length-1;n>=0;n--){let s=this.hits[n];if(e>=s.x&&e<=s.x+s.w&&t>=s.y&&t<=s.y+s.h)return s}return null}pointer(e,t,n){let s=this._hit(t,n);if(e==="move"){this.drag?.slide&&(this.drag.slide(t),this.dirty=!0);let r=s?s.id:null;return r!==this.hover&&(this.hover=r,this.dirty=!0),s}return e==="down"&&s&&(this.ripple={x:t,y:n,t:performance.now()},s.slide?(this.drag=s,s.slide(t)):s.grab?this.drag=s:s.press?.(),this.dirty=!0),e==="up"&&(this.drag=null,this.dirty=!0),s}leave(){this.hover&&(this.hover=null,this.dirty=!0)}ease(e,t,n,s=16){let r=this.anim.get(e)??t,a=r+(t-r)*(1-Math.exp(-n*s)),o=Math.abs(t-a)<.004;return this.anim.set(e,o?t:a),o||(this.dirty=!0),o?t:a}rr(e,t,n,s,r,a,o,l=2){let c=this.g;c.beginPath(),c.roundRect(e,t,n,s,r),a&&(c.fillStyle=a,c.fill()),o&&(c.strokeStyle=o,c.lineWidth=l,c.stroke())}glass(e,t,n,s,r,a,o){let l=this.g,c=l.createLinearGradient(0,t,0,t+s);c.addColorStop(0,a),c.addColorStop(1,o);let h=l.createLinearGradient(e,t,e+n*.6,t+s);h.addColorStop(0,"rgba(255,255,255,0.42)"),h.addColorStop(.5,"rgba(255,255,255,0.08)"),h.addColorStop(1,"rgba(255,255,255,0.2)"),this.rr(e,t,n,s,r,c,h,2.5)}text(e,t,n,s,r=Wi,a=500,o="left"){let l=this.g;l.font=`${a} ${s}px ${dc}`,l.fillStyle=r,l.textAlign=o,l.textBaseline="middle",l.fillText(e,t,n)}ico(e,t,n,s,r="#ffffff"){let a=Fg(e,r);a.complete&&a.naturalWidth?this.g.drawImage(a,t-s/2,n-s/2,s,s):a.onload=()=>{this.dirty=!0}}plate(e,t,n,s,r,a,{on:o=!1,prominent:l=!1,dt:c}){let h=this.ease(`h:${e}`,this.hover===e?1:0,c);return l||o?this.rr(t,n,s,r,a,`rgba(255,255,255,${.9+.1*h})`):this.rr(t,n,s,r,a,`rgba(255,255,255,${.1+.1*h})`),l||o?"#17151f":Wi}button(e,t,n,s,r,{label:a,ico:o,on:l,prominent:c,press:h,dt:p,size:u=30,round:f=!1,disabled:g=!1}){let _=g?fr:this.plate(e,t,n,s,r,f?r/2:28,{on:l,prominent:c,dt:p});if(g&&this.rr(t,n,s,r,f?r/2:28,"rgba(255,255,255,0.05)"),o&&a){this.g.font=`500 ${u}px ${dc}`;let m=this.g.measureText(a).width,d=u*1.25+14+m,S=t+(s-d)/2;this.ico(o,S+u*.62,n+r/2,u*1.25,_===Wi?"#ffffff":_===fr?"#777":"#17151f"),this.text(a,S+u*1.25+14,n+r/2+1,u,_)}else o?this.ico(o,t+s/2,n+r/2,Math.min(s,r)*.44,_===Wi?"#ffffff":"#17151f"):this.text(a,t+s/2,n+r/2+1,u,_,500,"center");g||this.hits.push({id:e,x:t,y:n,w:s,h:r,press:h})}slider(e,t,n,s,r,a,o,l,c,h,p){let u=this.g;this.text(r,t,n+22,30,Wi,500),this.text(h(a),t+s,n+22,28,On,500,"right");let f=n+78,g=16,_=Math.max(0,Math.min(1,(a-o)/(l-o))),m=this.ease(`h:${e}`,this.hover===e||this.drag?.id===e?1:0,p);this.rr(t,f-g/2,s,g,g/2,"rgba(255,255,255,0.16)"),this.rr(t,f-g/2,Math.max(g,s*_),g,g/2,`rgba(255,255,255,${.78+.2*m})`),u.save(),u.shadowColor="rgba(0,0,0,0.45)",u.shadowBlur=14,u.shadowOffsetY=3,u.beginPath(),u.arc(t+s*_,f,22+5*m,0,Math.PI*2),u.fillStyle="#ffffff",u.fill(),u.restore(),this.hits.push({id:e,x:t-30,y:f-50,w:s+60,h:100,slide:d=>c(o+Math.max(0,Math.min(1,(d-t)/s))*(l-o))})}draw(e=performance.now()){let t=this.app.status(),n=t.playing||t.mic==="on"||this.ripple||this.toast&&e<this.toast.until;if(!this.dirty&&!(n&&e-this.lastDraw>66))return!1;let s=Math.min(.1,(e-this.lastDraw)/1e3);this.dirty=!1,this.lastDraw=e;let r=this.g,a=this.app.settings.v,o=this.app.actions,l=d=>S=>this.app.settings.set(d,S);r.clearRect(0,0,An,ni),this.hits=[],this.glass(jt.x,jt.y,jt.w,jt.h,jt.r,"rgba(58,58,72,0.60)","rgba(22,22,30,0.70)");let c=[["play","music-note","Experiences"],["adjust","sliders-2-horizontal","Adjust"]],h=c.length*112+16,p=(jt.h-h)/2;this.glass(4,p,104,h,52,"rgba(62,62,76,0.74)","rgba(34,34,44,0.78)");let u=this.ease("tab",c.findIndex(d=>d[0]===this.tab),s,18);this.rr(12,p+12+u*112,88,104,44,"rgba(255,255,255,0.92)"),c.forEach(([d,S],A)=>{let E=this.tab===d,b=this.ease(`h:tab:${d}`,this.hover===`tab:${d}`&&!E?1:0,s);b>.01&&this.rr(12,p+12+A*112,88,104,44,`rgba(255,255,255,${.14*b})`),this.ico(S,56,p+64+A*112,46,Math.abs(u-A)<.5?"#17151f":"#ffffff"),this.hits.push({id:`tab:${d}`,x:4,y:p+8+A*112,w:104,h:112,press:()=>{this.tab=d}})});let f=jt.x+56,g=jt.w-112;this.tab==="play"?this.drawPlay(t,a,o,f,g,s,e):this.drawAdjust(t,a,o,l,f,g,s),this.glass(Gt.x,Gt.y,Gt.w,Gt.h,Gt.r,"rgba(66,66,80,0.80)","rgba(36,36,46,0.84)");let _=Gt.y+16,m=96;if(t.kind==="mic"){let d=t.mic==="on";this.button("mic",Gt.x+16,_,260,m,{label:d?"Listening":t.mic==="asking"?"Waiting":"Turn on mic",ico:"mic",prominent:!d,on:!1,press:o.startMic,dt:s,round:!0,size:28});let S=Gt.x+300,A=Gt.w-300-130,E=48,b=A/E;for(let w=0;w<E;w++){let x=t.spectrum?t.spectrum[w]:0,M=6+x*70;this.rr(S+w*b+2,_+m/2-M/2,b-4,M,(b-4)/2,`rgba(255,255,255,${.35+.6*x})`)}}else{this.button("restart",Gt.x+16,_,m,m,{ico:"skip-back",press:o.restart,dt:s,round:!0}),this.button("play",Gt.x+16+m+12,_,m,m,{ico:t.playing?"pause":"play",press:o.togglePlay,prominent:!0,dt:s,round:!0});let d=Gt.x+16+m*2+12+110,S=Gt.w-(d-Gt.x)-240;this.text(Nu(t.time||0),d-22,_+m/2+1,26,On,500,"right"),this.text(Nu(t.duration||0),d+S+22,_+m/2+1,26,On,500,"left");let A=t.duration?t.time/t.duration:0,b=10+6*this.ease("h:seek",this.hover==="seek"||this.drag?.id==="seek"?1:0,s);this.rr(d,_+m/2-b/2,S,b,b/2,"rgba(255,255,255,0.18)"),this.rr(d,_+m/2-b/2,Math.max(b,S*A),b,b/2,"#ffffff");for(let w of t.sections||[])w.t>.5&&(r.fillStyle="rgba(0,0,0,0.55)",r.fillRect(d+w.t/t.duration*S-1.5,_+m/2-b/2-2,3,b+4));this.hits.push({id:"seek",x:d-10,y:_,w:S+20,h:m,slide:w=>o.seek(Math.max(0,Math.min(1,(w-d)/S))*t.duration)})}if(t.xr&&this.button("hide",Gt.x+Gt.w-16-m,_,m,m,{ico:"x",press:o.hidePanel,dt:s,round:!0}),t.xr){let d=this.ease("h:grab",this.hover==="grab"||this.drag?.id==="grab"?1:0,s);this.rr(An/2+70-130-20*d,992,260+40*d,16,8,`rgba(255,255,255,${.4+.5*d})`),this.hits.push({id:"grab",x:An/2+70-220,y:966,w:440,h:70,grab:!0})}if(this.ripple){let d=(e-this.ripple.t)/320;d>=1?this.ripple=null:(r.beginPath(),r.arc(this.ripple.x,this.ripple.y,20+90*d,0,Math.PI*2),r.fillStyle=`rgba(255,255,255,${.22*(1-d)})`,r.fill(),this.dirty=!0)}if(this.toast&&e<this.toast.until){r.font=`500 30px ${dc}`;let d=r.measureText(this.toast.text).width+72,S=Math.min(1,(this.toast.until-e)/300);this.rr(jt.x+(jt.w-d)/2,jt.y+24,d,68,34,`rgba(255,255,255,${.95*S})`),this.text(this.toast.text,jt.x+jt.w/2,jt.y+59,30,`rgba(23,21,31,${S})`,500,"center")}return!0}drawPlay(e,t,n,s,r,a,o){let l=this.g,c=this.app.experiences;this.text("Overtone",s,64,30,On,600),this.text(e.place||"",s+r,64,28,fr,500,"right");let h=(r-24*(c.length-1))/c.length,p=312,u=102;c.forEach((w,x)=>{let M=s+x*(h+24),U=`exp:${w.id}`,P=e.experience===w.id,L=this.ease(`h:${U}`,this.hover===U?1:0,a),F=6*L;this.rr(M,u-F,h,p,36,`rgba(255,255,255,${P?.2:.08+.08*L})`,P?"rgba(255,255,255,0.9)":null,3);let V=this.app.thumbs[`${w.id}:${this.app.lookOf(w)}`];if(l.save(),l.beginPath(),l.roundRect(M+14,u+14-F,h-28,160,24),l.clip(),V?l.drawImage(V,M+14,u+14-F-((h-28)*9/16-160)/2,h-28,(h-28)*9/16):(l.fillStyle="#07060c",l.fillRect(M+14,u+14-F,h-28,160)),w.kind==="mic"&&(l.fillStyle="rgba(8,6,14,0.45)",l.fillRect(M+14,u+14-F,h-28,160),this.ico("mic",M+h/2,u+94-F,70)),l.restore(),this.text(w.title,M+26,u+214-F,35,Wi,600),this.text(w.subtitle,M+26,u+256-F,25,On,400),P){for(let R=0;R<3;R++){let B=e.playing||w.kind==="mic"?10+16*Math.abs(Math.sin(o/180+R*1.3)):8;this.rr(M+h-62+R*12,u+294-B-F,7,B,3.5,"#ffffff")}this.text(w.kind==="mic"?"Listening":e.playing?"Playing":"Paused",M+26,u+288-F,23,On,500)}this.hits.push({id:U,x:M,y:u,w:h,h:p,press:()=>n.pick(w.id)})});let f=438,g=88;this.text("Look",s,f+g/2,28,On,600);let _=e.looks||[],m=Math.min(330,(r-100-16*(_.length-1))/Math.max(1,_.length)),d=c.find(w=>w.id===e.experience);_.forEach(([w,x],M)=>{let U=s+100+M*(m+16),P=`look:${w}`,L=e.look===w,F=this.plate(P,U,f,m,g,30,{on:L,dt:a}),V=d&&this.app.thumbs[`${d.id}:${w}`];l.save(),l.beginPath(),l.roundRect(U+12,f+12,114,64,18),l.clip(),V?l.drawImage(V,U+12,f+12,114,64):(l.fillStyle="#07060c",l.fillRect(U+12,f+12,114,64)),l.restore(),this.text(x,U+146,f+g/2+1,30,F,500),this.hits.push({id:P,x:U,y:f,w:m,h:g,press:()=>n.look(w)})});let S=566;this.text("What you are seeing",s,S,28,On,600);let A=e.layers||[],E=Math.max(1,A.length),b=(r-16*(E-1))/E;A.forEach(([w,x,M],U)=>{let P=s+U*(b+16),L=S+30,F=`lv:${e.experience}:${e.look}:${U}`,V=this.ease(F,M,a,M>(this.anim.get(F)??0)?40:6);this.rr(P,L,b,166,28,`rgba(255,255,255,${.07+.2*V})`);let R=70;this.rr(P+22,L+20,12,R,6,"rgba(255,255,255,0.14)"),this.rr(P+22,L+20+R-Math.max(12,R*V),12,Math.max(12,R*V),6,"#ffffff"),l.save(),l.beginPath(),l.arc(P+b-40,L+42,10+12*V,0,Math.PI*2),l.fillStyle=`rgba(255,255,255,${.25+.75*V})`,l.shadowColor="#ffffff",l.shadowBlur=30*V,l.fill(),l.restore(),this.text(w,P+22,L+116,E>6?27:30,Wi,600),this.text(x,P+22,L+146,E>6?22:25,On,400)}),this.text(e.kind==="mic"?"Play music in the room. Speech and steady noise calm the picture; a beat brings it up.":`${e.info||""}`,s,800,26,fr,400)}drawAdjust(e,t,n,s,r,a,o){this.text("Adjust",r,70,30,On,600);let l=A=>`${Math.round(A*100)}%`,c=(a-96)/2,h=(A,E)=>b=>this.app.settings.set(A,Math.abs(b-E)<.03?E:b),p=[["reaction","Reaction",.3,1.6,h("reaction",1),l],["brightness","Brightness",.4,1.5,h("brightness",1),l],["transparency","Transparency",0,1,s("transparency"),l],["size","Size on the surface",.3,1,h("size",1),l]],u=[["glow","Room light",0,1,s("glow"),l],["particles","Particles",0,1,s("particles"),l],["sync","Sync",-250,250,A=>this.app.settings.set("sync",Math.round(A/5)*5),A=>`${A>0?"+":""}${Math.round(A)} ms`],e.kind==="mic"?["micGain","Mic sensitivity",.25,6,s("micGain"),A=>`${A.toFixed(1)}x`]:["hue","Color",-.5,.5,h("hue",0),A=>`${Math.round(A*360)}\xB0`]];[p,u].forEach((A,E)=>A.forEach(([b,w,x,M,U,P],L)=>this.slider(b,r+E*(c+96),118+L*128,c,w,t[b],x,M,U,P,o)));let f=650,g=104,_=[["aim",{label:"Use the surface I am looking at",ico:"target",press:n.aim},2.1],["scan",{label:"Scan room",ico:"scan",press:n.rescan},1],["calm",{label:"Calm",ico:"eye-off",on:t.calm,press:()=>this.app.settings.set("calm",!t.calm)},.8],["leave",{label:"Leave",ico:"power",press:n.leave,disabled:!e.xr},.8]],m=_.reduce((A,E)=>A+E[2],0),d=(a-20*(_.length-1))/m,S=r;for(let[A,E,b]of _)this.button(A,S,f,d*b,g,{...E,dt:o,size:28}),S+=d*b+20;this.text("Shortcut: look at a wall, the floor or the ceiling and squeeze the grip button.",r,800,26,fr,400)}};ke.enabled=!1;var gr=new URLSearchParams(location.search),Mi=i=>document.getElementById(i),pt={stage:Mi("stage"),canvas:Mi("view"),enter:Mi("enter"),note:Mi("xr-note"),panelHost:Mi("panel-host"),status:Mi("status"),quick:Mi("quick"),looks:Mi("looks")},ft=new mo({canvas:pt.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"});ft.outputColorSpace=Ni;ft.setPixelRatio(Math.min(window.devicePixelRatio||1,2));ft.setClearColor(0,0);ft.xr.enabled=!0;var Ti=new Zn,wi=new Xt(54,16/9,.05,80),As=new wo,Dt=As.v,ct=new yo(ft),He=new Mo(Ti,ct),dt=new vo,qi=new hr(dt),ln=new bo,Es=ur(),hn=(window.OVERTONE_EXPERIENCES||[]).map(i=>({...i})),Bu=i=>hn.find(e=>e.id===i)||hn[0],Ye=Bu(gr.get("exp")||Dt.experience),Ei=i=>{let e=i===Ye&&gr.get("look")||Dt.looks?.[i.id];return i.looks.includes(e)?e:i.looks[0]},Og={snare:"Snare",perc:"Percussion",arp:"Arp",keys:"Keys",stab:"Stabs",guitar:"Guitar",lead:"Lead",bells:"Bells"},Po=!1,zu=ti(new N(0,1.3,-2.6),new N(0,0,1),4.6,2.6),vc=[ti(new N(0,0,.9),new N(0,1,0),4.6,7,new N(0,0,-1)),ti(new N(0,2.6,.9),new N(0,-1,0),4.6,7,new N(0,0,-1)),ti(new N(-2.3,1.3,.9),new N(1,0,0),7,2.6),ti(new N(2.3,1.3,.9),new N(-1,0,0),7,2.6),ti(new N(0,1.3,-2.61),new N(0,0,1),4.6,2.6)],Do=new Xn;vc.forEach((i,e)=>{let t=new rt(new Kt(1,1),new mi({color:[723472,1184023,920851,920851,1052437][e]}));t.matrixAutoUpdate=!1,t.matrix.makeBasis(i.right,i.up,i.normal).scale(new N(i.width,i.height,1)).setPosition(i.center),t.renderOrder=-30,Do.add(t)});Ti.add(Do);async function pc(i){let e=window.OVERTONE_ASSETS?.[i];if(e){let n=atob(e),s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s.buffer}let t=await fetch(i);if(!t.ok)throw new Error(`${i}: ${t.status}`);return t.arrayBuffer()}async function ku(i){if(i.kind==="mic"||i.features)return;let[e,t]=await Promise.all([pc(i.featuresFile),pc(i.scoreFile)]);i.features=Cu(e),i.score=JSON.parse(new TextDecoder().decode(t))}async function Hu(i){i.kind==="mic"||i.buffer||(i.audioPromise??=(async()=>{let e=new OfflineAudioContext(2,2,44100);i.buffer=await e.decodeAudioData(await pc(i.file))})(),await i.audioPromise)}var bi=null;async function Io(){if(!bi){bi=new AudioContext({latencyHint:"interactive"});let i=bi.createGain();i.gain.value=.92,i.connect(bi.destination),dt.connect(bi,i)}return bi.state!=="running"&&await bi.resume(),bi}var Pt=0,Rn={active:!1,t:0,dur:2.2};function Lo(i,e=!1){if(ct.slots[Pt].scene?.id===i&&!Rn.active){He.sweep=0;return}if(e||!ct.slots[Pt].scene){ct.setScene(Pt,i),ct.setScene(1-Pt,null),He.reveal[Pt]=1,He.reveal[1-Pt]=0,Rn.active=!1;return}Rn.active&&(Pt=1-Pt),ct.setScene(1-Pt,i),He.reveal[1-Pt]=0,Rn.active=!0,Rn.t=0}var fc=0,un={async pick(i,{play:e=!0}={}){let t=++fc,n=Bu(i);if(Ye=n,As.set("experience",n.id),Ie.dirty=!0,Uu(),n.kind==="mic"){dt.mode==="playing"&&dt.pause(),Lo(Ei(n)),await un.startMic();return}ln.stop(),Po=!0;try{if(await ku(n),t!==fc)return;qi.load(n.features,n.score,Tn[Ei(n)]),Lo(Ei(n)),await Hu(n)}catch(s){console.error(s),Ie.say(`${n.title} did not load. Check the connection and try again.`,5),Po=!1;return}t===fc&&(Po=!1,dt.setBuffer(n.buffer),e&&dt.mode!=="playing"&&(await Io(),dt.play()),Fo(`${n.title} \xB7 ${n.subtitle}`),Ie.dirty=!0)},look(i){!Ye.looks.includes(i)||i===Ei(Ye)||(gr.delete("look"),As.set("looks",{...Dt.looks,[Ye.id]:i}),Ye.kind!=="mic"&&Ye.features&&qi.load(Ye.features,Ye.score,Tn[i]),Lo(i),Uu(),Ie.dirty=!0)},async togglePlay(){Ye.kind!=="mic"&&(dt.mode==="playing"?dt.pause():(await Io(),dt.play()),Ie.dirty=!0)},restart(){dt.seek(0)},seek(i){dt.seek(i)},async startMic(){if(ln.state==="on"||ln.state==="asking")return;let i="prompt";try{i=(await navigator.permissions.query({name:"microphone"})).state}catch{}if(at&&i!=="granted"){Ie.say("Leave mixed reality, choose Live on the start page and allow the microphone once.",8);return}let e=await Io();Ie.dirty=!0,await ln.start(e)?(ln.gain=Dt.micGain,Fo("Live \xB7 listening to the room")):Ie.say(ln.state==="denied"?"The microphone is blocked. Allow it for this site in the browser, then choose Live again.":`The microphone did not start${ln.error?`: ${ln.error.message}`:""}`,8),Ie.dirty=!0},hidePanel(){_c(!1)},aim(){if(!at){Ie.say("This works in mixed reality");return}let i=He.aim(cn,Xi);i?Ie.say(`Now on the ${i}`):He.hasScan?Ie.say("Look at a wall, the floor or the ceiling, then try again.",4):(He.placeFloating(cn,Xi),Ie.say("No room scan here, so it floats in front of you. Scan room fixes that.",6))},rescan(){if(!at){Ie.say("This works in mixed reality");return}at.initiateRoomCapture&&!gc?(gc=!0,at.initiateRoomCapture().catch(()=>Ie.say("Room scan is not available here",4))):Ie.say("Open Quest Settings, then Environment setup, and scan this room. Then come back.",7)},leave(){at?.end()}};dt.onEnded=()=>{let i=hn.filter(e=>e.kind!=="mic");un.pick(i[(i.indexOf(Ye)+1)%i.length].id)};var Vu={},Bg=[],No=Es,Ie=new Eo({settings:As,experiences:hn,thumbs:Vu,actions:un,lookOf:i=>Ei(i),status:()=>{let i=Tn[Ei(Ye)],e=Pu(No,i,Bg),t=Ye.kind==="mic",n=[];i.layers.forEach(([r,a,o],l)=>{if(o.slot===void 0){n.push([r,a,e[l]]);return}let c=t?o.slot<3?i.slots[o.slot].split("|")[0]:null:qi.slots?.[o.slot]?.notes.length?qi.slots[o.slot].name:null;c&&n.push([i.slots[o.slot].includes("|")&&Og[c]||r,a,e[l]])});let s=He.holo?.rect;return{experience:Ye.id,kind:Ye.kind||"song",playing:dt.mode==="playing",time:Ye.features?dt.songTimeAt(performance.now()):0,duration:Ye.features?.duration||0,sections:Ye.score?.sections,layers:n,look:i.id,looks:Ye.looks.map(r=>[r,Tn[r].name]),spectrum:No.spectrum,mic:ln.state,xr:!!at,place:at?s?`${He.holo.kind[0].toUpperCase()}${He.holo.kind.slice(1)} \xB7 ${s.width.toFixed(1)} \xD7 ${s.height.toFixed(1)} m${He.holeCount?` \xB7 ${He.holeCount} cut-out${He.holeCount>1?"s":""}`:""}`:"Finding a surface":"Preview",info:Po?"Loading":Ye.score?`${Math.round(Ye.score.bpm)} BPM${Ye.key?` \xB7 ${Ye.key}`:""} \xB7 ${Ye.note||""}`:""}}}),mr=1,Oo=new ps(Ie.canvas);Oo.anisotropy=ft.capabilities.getMaxAnisotropy();Oo.minFilter=an;var Uo=new St({transparent:!0,premultipliedAlpha:!0,depthTest:!1,depthWrite:!1,uniforms:{uUI:{value:Oo},uAmb:{value:null},uPointer:{value:new Ue(.5,.5)},uPointerOn:{value:0},uOpen:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`precision highp float; varying vec2 vUv; uniform sampler2D uUI, uAmb; uniform vec2 uPointer; uniform float uPointerOn, uOpen;
    void main() {
      vec4 ui = texture2D(uUI, vUv);
      vec3 amb = textureLod(uAmb, vec2(0.15 + 0.7 * vUv.x, 0.5), 7.0).rgb;
      vec2 d = (vUv - uPointer) * vec2(${(An/ni).toFixed(3)}, 1.0);
      vec3 col = ui.rgb + amb * 0.3 * (1.0 - smoothstep(0.7, 1.0, ui.a)) + vec3(1.0) * exp(-dot(d, d) * 70.0) * 0.09 * uPointerOn;
      float a = ui.a * uOpen;
      gl_FragColor = vec4(col * a, a);
    }`}),wt=new rt(new Kt(mr,mr*(ni/An)),Uo);wt.renderOrder=20;wt.visible=!1;Ti.add(wt);var xr=!0,Ts=0,Cn=(()=>{let i=document.createElement("canvas");i.width=512,i.height=128;let e=i.getContext("2d"),t=new ps(i),n=r=>{e.clearRect(0,0,512,128),e.fillStyle=r?"rgba(255,255,255,0.95)":"rgba(40,40,52,0.78)",e.beginPath(),e.roundRect(4,4,504,120,60),e.fill(),e.strokeStyle="rgba(255,255,255,0.35)",e.lineWidth=3,e.stroke(),e.fillStyle=r?"#17151f":"#fff",e.font='600 50px "Inter", system-ui, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("Controls",256,66),t.needsUpdate=!0};n(!1);let s=new rt(new Kt(.4,.1),new mi({map:t,transparent:!0,depthTest:!1,depthWrite:!1}));return s.renderOrder=21,s.visible=!1,Ti.add(s),{mesh:s,draw:n,hover:!1}})();function _c(i){xr=i,i&&at&&Gu(),Ie.dirty=!0}function Gu(){let i=new N(Xi.x,0,Xi.z);i.lengthSq()<1e-4&&i.set(0,0,-1),i.normalize(),wt.position.copy(cn).addScaledVector(i,1.2),wt.position.y=cn.y-.3,wt.lookAt(cn.x,cn.y-.05,cn.z),Ts=0}pt.panelHost.appendChild(Ie.canvas);Ie.canvas.className="panel";Ie.canvas.tabIndex=0;Ie.canvas.setAttribute("role","application");Ie.canvas.setAttribute("aria-label","Overtone controls. Keyboard: space plays and pauses, 1 to 4 choose an experience.");var yc=i=>{let e=Ie.canvas.getBoundingClientRect();return[(i.clientX-e.left)/e.width*An,(i.clientY-e.top)/e.height*ni]};Ie.canvas.addEventListener("pointerdown",i=>{Ie.canvas.setPointerCapture(i.pointerId),Ie.pointer("down",...yc(i))});Ie.canvas.addEventListener("pointermove",i=>{Ie.pointer("move",...yc(i)),Ie.canvas.style.cursor=Ie.hover?"pointer":"default"});Ie.canvas.addEventListener("pointerup",i=>Ie.pointer("up",...yc(i)));Ie.canvas.addEventListener("pointerleave",()=>Ie.leave());window.addEventListener("keydown",i=>{i.key===" "?(i.preventDefault(),un.togglePlay()):/^[1-4]$/.test(i.key)&&hn[Number(i.key)-1]&&un.pick(hn[Number(i.key)-1].id)});function Uu(){pt.quick&&([...pt.quick.querySelectorAll("button[data-exp]")].forEach(i=>i.setAttribute("aria-pressed",String(i.dataset.exp===Ye.id))),pt.looks&&pt.looks.replaceChildren(...Ye.looks.map(i=>{let e=document.createElement("button");return e.type="button",e.className="chip",e.textContent=Tn[i].name,e.setAttribute("aria-pressed",String(i===Ei(Ye))),e.addEventListener("click",()=>un.look(i)),e})))}if(pt.quick){for(let e of hn){let t=document.createElement("button");t.type="button",t.className="chip",t.dataset.exp=e.id,t.textContent=e.title,t.addEventListener("click",()=>un.pick(e.id)),pt.quick.appendChild(t)}let i=document.createElement("button");i.type="button",i.className="chip",i.textContent="Play or pause",i.addEventListener("click",()=>un.togglePlay()),pt.quick.appendChild(i)}As.on((i,e)=>{i==="micGain"&&(ln.gain=e),i==="size"&&He.setSize(e),i==="calm"&&e&&Ie.say("Calm: half the reaction, no flashes")});function Fo(i){pt.status&&(pt.status.textContent=i)}var at=null,mc=0,gc=!1,xc=!1,cn=new N(0,1.6,0),Xi=new N(0,0,-1),zg=new vn,Bn=new Map,To=new $s,Fu=new Map,pr=new Ke,Ao=new N;function kg(){let i=new Vs(new kt().setFromPoints([new N,new N(0,0,-1)]),new fs({color:16777215,transparent:!0,opacity:.5,depthTest:!1})),e=new rt(new Ys(.006,.011,32),new mi({color:16777215,transparent:!0,opacity:.95,depthTest:!1}));return i.renderOrder=e.renderOrder=30,i.matrixAutoUpdate=!1,Ti.add(i,e),{line:i,dot:e,pressed:!1,target:null,uv:null,grabDist:1}}async function Hg(){let i=!1;try{i=!!navigator.xr&&await navigator.xr.isSessionSupported("immersive-ar")}catch{i=!1}pt.enter.disabled=!i,pt.note.hidden=i}async function Vg(){if(at){at.end();return}await Io();let i=1.25;try{i=Number(localStorage.getItem("overtone.eyeScale"))||1.25}catch{}ft.xr.setFramebufferScaleFactor(i),ft.xr.setFoveation(0),at=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["local-floor"],optionalFeatures:["plane-detection","mesh-detection","hand-tracking"]}),ft.xr.setReferenceSpaceType("local-floor"),await ft.xr.setSession(at);try{at.supportedFrameRates?.includes(90)&&await at.updateTargetFrameRate(90)}catch{}mc=performance.now(),gc=!1,Do.visible=!1,He.reset(),He.setSize(Dt.size),xc=!1,xr=!0,at.addEventListener("selectstart",e=>{let t=Bn.get(e.inputSource);t&&(t.pressed=!0,t.target==="panel"?Ie.pointer("down",...t.uv)?.grab&&(t.grabDist=t.dist):t.target==="pill"&&_c(!0))}),at.addEventListener("selectend",e=>{let t=Bn.get(e.inputSource);t&&(t.pressed=!1,Ie.pointer("up",...t.uv||[0,0]))}),at.addEventListener("squeeze",()=>un.aim()),at.addEventListener("inputsourceschange",()=>{for(let[e,t]of Bn)[...at.inputSources].includes(e)||(Ti.remove(t.line,t.dot),Bn.delete(e))}),at.addEventListener("end",()=>{at=null,He.reset(),He.setStaticPlanes(vc),He.setFixed(zu),Do.visible=!0,wt.visible=!1,Cn.mesh.visible=!1;for(let e of Bn.values())Ti.remove(e.line,e.dot);Bn.clear(),pt.enter.textContent="Enter mixed reality",Sc()}),pt.enter.textContent="Leave mixed reality",Ye.kind==="mic"?un.startMic():dt.mode!=="playing"&&Ye.buffer&&dt.play()}pt.enter.addEventListener("click",()=>Vg().catch(i=>{console.error(i),Fo(`Mixed reality did not start: ${i.message}`)}));function Gg(i,e){let t=null;for(let r of at.inputSources){if(!r.targetRaySpace)continue;let a=Bn.get(r);a||(a=kg(),Bn.set(r,a));let o=i.getPose(r.targetRaySpace,e);if(!o){a.line.visible=a.dot.visible=!1;continue}pr.fromArray(o.transform.matrix);let l=new N().setFromMatrixPosition(pr),c=new N(0,0,-1).transformDirection(pr);To.set(l,c),a.pressed&&Ie.drag?.grab&&(wt.position.copy(l).addScaledVector(c,a.grabDist).addScaledVector(Ao.set(0,1,0).applyQuaternion(wt.quaternion),mr*(ni/An)*.45),wt.lookAt(cn.x,cn.y-.05,cn.z));let p=null,u=null;if(wt.visible){let g=To.intersectObject(wt)[0];g&&(p=g,u="panel")}if(!p&&Cn.mesh.visible){let g=To.intersectObject(Cn.mesh)[0];g&&(p=g,u="pill")}if(!p&&a.pressed&&Ie.drag&&wt.visible){let g=new sn().setFromNormalAndCoplanarPoint(Ao.set(0,0,1).applyQuaternion(wt.quaternion),wt.position),_=To.ray.intersectPlane(g,new N);if(_){let m=wt.worldToLocal(_.clone());p={point:_,distance:l.distanceTo(_),uv:new Ue(m.x/mr+.5,m.y/(mr*ni/An)+.5)},u="panel"}}a.target=u,a.dist=p?p.distance:1.2,a.line.matrix.copy(pr).scale(Ao.set(1,1,p?p.distance:.6)),a.line.matrixWorldNeedsUpdate=!0,a.line.visible=!!p||!r.hand,a.line.material.opacity=p?.7:.18,a.dot.visible=!!p,p&&(a.dot.quaternion.copy(u==="panel"?wt.quaternion:Cn.mesh.quaternion),a.dot.position.copy(p.point).addScaledVector(Ao.set(0,0,1).applyQuaternion(a.dot.quaternion),.003),a.dot.scale.setScalar(a.pressed?.7:1),u==="panel"&&(a.uv=[p.uv.x*An,(1-p.uv.y)*ni],Ie.pointer("move",...a.uv),t=p.uv));let f=r.gamepad;if(f){let g=_=>{let m=`${r.handedness}:${_}`,d=!!f.buttons[_]?.pressed,S=Fu.get(m)||!1;return Fu.set(m,d),d&&!S};g(4)&&un.togglePlay(),g(5)&&_c(!xr)}}[...Bn.values()].some(r=>r.target==="panel")||Ie.leave();let n=Uo.uniforms;t&&n.uPointer.value.copy(t),n.uPointerOn.value+=((t?1:0)-n.uPointerOn.value)*.2;let s=[...Bn.values()].some(r=>r.target==="pill");s!==Cn.hover&&(Cn.hover=s,Cn.draw(s))}var Ou=performance.now(),ws=0,Ro=0,Co=0,ii=0,Wu=0,Xu=0;pt.stage.addEventListener("pointermove",i=>{let e=pt.stage.getBoundingClientRect();Wu=(i.clientX-e.left)/e.width*2-1,Xu=(i.clientY-e.top)/e.height*2-1});function Sc(){if(ft.xr.isPresenting)return;let i=pt.stage.clientWidth||640,e=pt.stage.clientHeight||360;ft.setSize(i,e,!1),wi.aspect=i/e,wi.fov=wi.aspect<1.2?84:62,wi.updateProjectionMatrix()}new ResizeObserver(Sc).observe(pt.stage);var Wg=gr.has("t")?Number(gr.get("t")):null;ft.setAnimationLoop((i,e)=>{let t=Math.min(.1,(i-Ou)/1e3);Ou=i;let n=ft.xr.isPresenting&&e,s=n&&e.predictedDisplayTime?e.predictedDisplayTime:i+16;dt.syncOffsetMs=Dt.sync;let r;if(Ye.kind==="mic"?r=ln.state==="on"?ln.update(i,t):Es:qi.ready?r=qi.update(s,Wg):r=Es,r===Es&&(Es.time+=t,Es.travel+=t*.3),No=r,Rn.active){Rn.t+=t;let l=Math.min(1,Rn.t/Rn.dur),c=l*l*(3-2*l);He.reveal[1-Pt]=c,He.reveal[Pt]=1-c,l>=1&&(ct.setScene(Pt,null),Pt=1-Pt,Rn.active=!1)}ct.update(r,t,{reaction:Dt.reaction,brightness:Dt.brightness,hue:Dt.hue,warm:0,calm:Dt.calm}),He.solid=1-Dt.transparency,He.glow=Dt.glow,He.motesAmount=Dt.calm?Math.min(.3,Dt.particles):Dt.particles,He.pulse=Dt.calm?0:Dt.reaction;let a=Rn.active&&He.reveal[1-Pt]>.5?1-Pt:Pt,o;if(n){let l=ft.xr.getReferenceSpace(),c=e.getViewerPose(l);if(c){let{position:f,orientation:g}=c.transform;cn.set(f.x,f.y,f.z),Xi.set(0,0,-1).applyQuaternion(zg.set(g.x,g.y,g.z,g.w))}!xc&&c&&i-mc>300&&(xc=!0,Gu());let h=He.readScene(e,l);!He.holo&&c&&(h?He.aim(cn,Xi,{fallbackToFacing:!0}):i-mc>2500&&(He.placeFloating(cn,Xi),Ie.say("No room scan found, so the scene floats. Use Scan room in Adjust.",7))),Gg(e,l);let p=ft.xr.getCamera().cameras[0]?.projectionMatrix.elements[5]||1;if(o=He.layout(t,r,a,p*900),Ts+=((xr?1:0)-Ts)*Math.min(1,t*9),wt.visible=Ts>.02,Uo.uniforms.uOpen.value=Ts,wt.scale.setScalar(.94+.06*Ts),Cn.mesh.visible=!xr&&!!o,Cn.mesh.visible){let f=He.holo.kind==="wall"||He.holo.kind==="floating";Cn.mesh.position.copy(o.center).addScaledVector(o.up,f?-o.height/2+.14:0).addScaledVector(o.normal,.08),Cn.mesh.quaternion.setFromRotationMatrix(pr.makeBasis(o.right,o.up,o.normal))}ws=ws?ws+(t-ws)*.05:t;let u=1/(at.frameRate||72);if(Ro=ws>u*1.3?Ro+t:0,Co=ws<u*1.08?Co+t:0,Ro>1.5){if(Ro=0,ii<1)ii=Math.min(1,ii+.5),ft.xr.setFoveation(ii);else try{localStorage.setItem("overtone.eyeScale","1")}catch{}console.info("[overtone] easing load: foveation",ii)}else Co>8&&ii>0&&(Co=0,ii=Math.max(0,ii-.5),ft.xr.setFoveation(ii))}else{o=He.layout(t,r,a,(pt.stage.clientHeight||400)*1.1);let l=Math.sin(i/5e3)*.3;wi.position.set((Wu*.8+l)*.8,1.42-Xu*.3,.55),wi.lookAt(0,1.3,-2.6)}ct.renderProbes(),Uo.uniforms.uAmb.value=ct.slots[a].rt?.texture||null,Ie.draw(i)&&(Oo.needsUpdate=!0),ft.render(Ti,wi)});function Xg(){let i=new hr(dt),e=512,t=288,n=new Uint8Array(e*t*4),s={travel:ct.travel,last:ct.lastTravelIn,scene:ct.slots[0].scene?.id||null};ct.uniforms.uHalf.value.set(2.3,1.3);for(let r of hn){let a=r.kind==="mic"?hn.find(o=>o.features):r;if(a?.features)for(let o of r.looks){i.load(a.features,a.score,Tn[o]),i.lastWall=performance.now()-16;let l=a.showAtBy?.[o]??a.showAt;for(let u=0;u<40;u++)i.update(0,l-.4+u*.01);ct.lastTravelIn=null,ct.update(i.update(0,l),.016,{reaction:1,brightness:1.1,hue:r.kind==="mic"?.3:0,warm:0,calm:!1}),ct.setScene(0,o),ct.renderProbes(),ft.readRenderTargetPixels(ct.slots[0].rt,0,0,e,t,n);let c=document.createElement("canvas");c.width=e,c.height=t;let h=c.getContext("2d"),p=h.createImageData(e,t);for(let u=0;u<t;u++)p.data.set(n.subarray((t-1-u)*e*4,(t-u)*e*4),u*e*4);h.putImageData(p,0,0),Vu[`${r.id}:${o}`]=c}}ct.setScene(0,s.scene),ct.travel=s.travel,ct.lastTravelIn=s.last,Ie.dirty=!0}async function qg(){Sc(),Hg(),ct.warmUp(),He.warmUp(ft,wi,Object.values(Tn)),He.setStaticPlanes(vc),He.setFixed(zu),await Promise.all(hn.map(i=>ku(i).catch(e=>console.error(e))));try{Xg()}catch(i){console.warn("thumbnails",i)}Ye.kind==="mic"&&(Ye=hn[0]),Lo(Ei(Ye),!0),await un.pick(Ye.id,{play:!1}),dt.ctx||dt.runSilent();for(let i of hn)Hu(i).catch(()=>{})}qg().catch(i=>{console.error(i),Fo("Something went wrong while loading. Reload to try again.")});"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{});window.overtone={engine:ct,clock:dt,room:He,renderer:ft,settings:As,panel:Ie,mic:ln,conductor:qi,actions:un,experiences:hn,get current(){return Ye},get session(){return at},get bus(){return No}};})();
