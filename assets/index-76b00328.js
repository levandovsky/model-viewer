import{r as Q,C as Xe,u as We}from"./@react-three/fiber-426da065.js";import{P as Ge,O as Ye,C as qe,E as Je,a as Ke,H as Qe,c as er}from"./@react-three/drei-5bd74c8f.js";import{X as rr,A as nr}from"./@react-three/xr-42a2a652.js";import{D as tr}from"./three-de3e021a.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var oe={},or={get exports(){return oe},set exports(e){oe=e}},ie={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ar=Q,sr=Symbol.for("react.element"),ir=Symbol.for("react.fragment"),ur=Object.prototype.hasOwnProperty,lr=ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fr={key:!0,ref:!0,__self:!0,__source:!0};function Le(e,n,t){var r,o={},a=null,u=null;t!==void 0&&(a=""+t),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(u=n.ref);for(r in n)ur.call(n,r)&&!fr.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:sr,type:e,key:a,ref:u,props:o,_owner:lr.current}}ie.Fragment=ir;ie.jsx=Le;ie.jsxs=Le;(function(e){e.exports=ie})(or);const x=oe.jsx,ye=oe.jsxs,cr="modulepreload",pr=function(e){return"/model-viewer/"+e},Se={},hr=function(n,t,r){if(!t||t.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(t.map(a=>{if(a=pr(a),a in Se)return;Se[a]=!0;const u=a.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!r)for(let s=o.length-1;s>=0;s--){const l=o[s];if(l.href===a&&(!u||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${f}`))return;const i=document.createElement("link");if(i.rel=u?"stylesheet":cr,u||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),u)return new Promise((s,l)=>{i.addEventListener("load",s),i.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>n())};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Ee=function(e){return URL.createObjectURL(new Blob([e],{type:"text/javascript"}))};try{URL.revokeObjectURL(Ee(""))}catch{Ee=function(n){return"data:application/javascript;charset=UTF-8,"+encodeURI(n)}}var S=Uint8Array,y=Uint16Array,G=Uint32Array,ge=new S([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),me=new S([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Te=new S([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),je=function(e,n){for(var t=new y(31),r=0;r<31;++r)t[r]=n+=1<<e[r-1];for(var o=new G(t[30]),r=1;r<30;++r)for(var a=t[r];a<t[r+1];++a)o[a]=a-t[r]<<5|r;return[t,o]},Ie=je(ge,2),vr=Ie[0],pe=Ie[1];vr[28]=258,pe[258]=28;var dr=je(me,0),Ce=dr[1],he=new y(32768);for(var d=0;d<32768;++d){var Z=(d&43690)>>>1|(d&21845)<<1;Z=(Z&52428)>>>2|(Z&13107)<<2,Z=(Z&61680)>>>4|(Z&3855)<<4,he[d]=((Z&65280)>>>8|(Z&255)<<8)>>>1}var K=function(e,n,t){for(var r=e.length,o=0,a=new y(n);o<r;++o)++a[e[o]-1];var u=new y(n);for(o=0;o<n;++o)u[o]=u[o-1]+a[o-1]<<1;var f;if(t){f=new y(1<<n);var c=15-n;for(o=0;o<r;++o)if(e[o])for(var i=o<<4|e[o],s=n-e[o],l=u[e[o]-1]++<<s,h=l|(1<<s)-1;l<=h;++l)f[he[l]>>>c]=i}else for(f=new y(r),o=0;o<r;++o)e[o]&&(f[o]=he[u[e[o]-1]++]>>>15-e[o]);return f},V=new S(288);for(var d=0;d<144;++d)V[d]=8;for(var d=144;d<256;++d)V[d]=9;for(var d=256;d<280;++d)V[d]=7;for(var d=280;d<288;++d)V[d]=8;var ae=new S(32);for(var d=0;d<32;++d)ae[d]=5;var gr=K(V,9,0),mr=K(ae,5,0),be=function(e){return(e/8|0)+(e&7&&1)},Ne=function(e,n,t){(n==null||n<0)&&(n=0),(t==null||t>e.length)&&(t=e.length);var r=new(e instanceof y?y:e instanceof G?G:S)(t-n);return r.set(e.subarray(n,t)),r},F=function(e,n,t){t<<=n&7;var r=n/8|0;e[r]|=t,e[r+1]|=t>>>8},q=function(e,n,t){t<<=n&7;var r=n/8|0;e[r]|=t,e[r+1]|=t>>>8,e[r+2]|=t>>>16},ce=function(e,n){for(var t=[],r=0;r<e.length;++r)e[r]&&t.push({s:r,f:e[r]});var o=t.length,a=t.slice();if(!o)return[$e,0];if(o==1){var u=new S(t[0].s+1);return u[t[0].s]=1,[u,1]}t.sort(function(U,C){return U.f-C.f}),t.push({s:-1,f:25001});var f=t[0],c=t[1],i=0,s=1,l=2;for(t[0]={s:-1,f:f.f+c.f,l:f,r:c};s!=o-1;)f=t[t[i].f<t[l].f?i++:l++],c=t[i!=s&&t[i].f<t[l].f?i++:l++],t[s++]={s:-1,f:f.f+c.f,l:f,r:c};for(var h=a[0].s,r=1;r<o;++r)a[r].s>h&&(h=a[r].s);var v=new y(h+1),g=ve(t[s-1],v,0);if(g>n){var r=0,m=0,E=g-n,j=1<<E;for(a.sort(function(C,$){return v[$.s]-v[C.s]||C.f-$.f});r<o;++r){var O=a[r].s;if(v[O]>n)m+=j-(1<<g-v[O]),v[O]=n;else break}for(m>>>=E;m>0;){var B=a[r].s;v[B]<n?m-=1<<n-v[B]++-1:++r}for(;r>=0&&m;--r){var T=a[r].s;v[T]==n&&(--v[T],++m)}g=n}return[new S(v),g]},ve=function(e,n,t){return e.s==-1?Math.max(ve(e.l,n,t+1),ve(e.r,n,t+1)):n[e.s]=t},Oe=function(e){for(var n=e.length;n&&!e[--n];);for(var t=new y(++n),r=0,o=e[0],a=1,u=function(c){t[r++]=c},f=1;f<=n;++f)if(e[f]==o&&f!=n)++a;else{if(!o&&a>2){for(;a>138;a-=138)u(32754);a>2&&(u(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(u(o),--a;a>6;a-=6)u(8304);a>2&&(u(a-3<<5|8208),a=0)}for(;a--;)u(o);a=1,o=e[f]}return[t.subarray(0,r),n]},J=function(e,n){for(var t=0,r=0;r<n.length;++r)t+=e[r]*n[r];return t},te=function(e,n,t){var r=t.length,o=be(n+2);e[o]=r&255,e[o+1]=r>>>8,e[o+2]=e[o]^255,e[o+3]=e[o+1]^255;for(var a=0;a<r;++a)e[o+a+4]=t[a];return(o+4+r)*8},Re=function(e,n,t,r,o,a,u,f,c,i,s){F(n,s++,t),++o[256];for(var l=ce(o,15),h=l[0],v=l[1],g=ce(a,15),m=g[0],E=g[1],j=Oe(h),O=j[0],B=j[1],T=Oe(m),U=T[0],C=T[1],$=new y(19),p=0;p<O.length;++p)$[O[p]&31]++;for(var p=0;p<U.length;++p)$[U[p]&31]++;for(var z=ce($,7),k=z[0],ee=z[1],R=19;R>4&&!k[Te[R-1]];--R);var X=i+5<<3,P=J(o,V)+J(a,ae)+u,D=J(o,h)+J(a,m)+u+14+3*R+J($,k)+(2*$[16]+3*$[17]+7*$[18]);if(X<=P&&X<=D)return te(n,s,e.subarray(c,c+i));var I,w,L,H;if(F(n,s,1+(D<P)),s+=2,D<P){I=K(h,v,0),w=h,L=K(m,E,0),H=m;var ue=K(k,ee,0);F(n,s,B-257),F(n,s+5,C-1),F(n,s+10,R-4),s+=14;for(var p=0;p<R;++p)F(n,s+3*p,k[Te[p]]);s+=3*R;for(var b=[O,U],Y=0;Y<2;++Y)for(var W=b[Y],p=0;p<W.length;++p){var N=W[p]&31;F(n,s,ue[N]),s+=k[N],N>15&&(F(n,s,W[p]>>>5&127),s+=W[p]>>>12)}}else I=gr,w=V,L=mr,H=ae;for(var p=0;p<f;++p)if(r[p]>255){var N=r[p]>>>18&31;q(n,s,I[N+257]),s+=w[N+257],N>7&&(F(n,s,r[p]>>>23&31),s+=ge[N]);var A=r[p]&31;q(n,s,L[A]),s+=H[A],A>3&&(q(n,s,r[p]>>>5&8191),s+=me[A])}else q(n,s,I[r[p]]),s+=w[r[p]];return q(n,s,I[256]),s+w[256]},$r=new G([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),$e=new S(0),wr=function(e,n,t,r,o,a){var u=e.length,f=new S(r+u+5*(1+Math.ceil(u/7e3))+o),c=f.subarray(r,f.length-o),i=0;if(!n||u<8)for(var s=0;s<=u;s+=65535){var l=s+65535;l<u?i=te(c,i,e.subarray(s,l)):(c[s]=a,i=te(c,i,e.subarray(s,u)))}else{for(var h=$r[n-1],v=h>>>13,g=h&8191,m=(1<<t)-1,E=new y(32768),j=new y(m+1),O=Math.ceil(t/3),B=2*O,T=function(fe){return(e[fe]^e[fe+1]<<O^e[fe+2]<<B)&m},U=new G(25e3),C=new y(288),$=new y(32),p=0,z=0,s=0,k=0,ee=0,R=0;s<u;++s){var X=T(s),P=s&32767,D=j[X];if(E[P]=D,j[X]=P,ee<=s){var I=u-s;if((p>7e3||k>24576)&&I>423){i=Re(e,c,0,U,C,$,z,k,R,s-R,i),k=p=z=0,R=s;for(var w=0;w<286;++w)C[w]=0;for(var w=0;w<30;++w)$[w]=0}var L=2,H=0,ue=g,b=P-D&32767;if(I>2&&X==T(s-b))for(var Y=Math.min(v,I)-1,W=Math.min(32767,s),N=Math.min(258,I);b<=W&&--ue&&P!=D;){if(e[s+L]==e[s+L-b]){for(var A=0;A<N&&e[s+A]==e[s+A-b];++A);if(A>L){if(L=A,H=b,A>Y)break;for(var ze=Math.min(b,A-2),we=0,w=0;w<ze;++w){var le=s-b+w+32768&32767,Ve=E[le],xe=le-Ve+32768&32767;xe>we&&(we=xe,D=le)}}}P=D,D=E[P],b+=P-D+32768&32767}if(H){U[k++]=268435456|pe[L]<<18|Ce[H];var Me=pe[L]&31,_e=Ce[H]&31;z+=ge[Me]+me[_e],++C[257+Me],++$[_e],ee=s+L,++p}else U[k++]=e[s],++C[e[s]]}}i=Re(e,c,a,U,C,$,z,k,R,s-R,i),!a&&i&7&&(i=te(c,i+1,$e))}return Ne(f,0,r+be(i)+o)},xr=function(){for(var e=new G(256),n=0;n<256;++n){for(var t=n,r=9;--r;)t=(t&1&&3988292384)^t>>>1;e[n]=t}return e}(),Mr=function(){var e=-1;return{p:function(n){for(var t=e,r=0;r<n.length;++r)t=xr[t&255^n[r]]^t>>>8;e=t},d:function(){return~e}}},_r=function(e,n,t,r,o){return wr(e,n.level==null?6:n.level,n.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):12+n.mem,t,r,!o)},Be=function(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t},M=function(e,n,t){for(;t;++n)e[n]=t,t>>>=8};function yr(e,n){return _r(e,n||{},0,0)}var Fe=function(e,n,t,r){for(var o in e){var a=e[o],u=n+o;a instanceof S?t[u]=[a,r]:Array.isArray(a)?t[u]=[a[0],Be(r,a[1])]:Fe(a,u+"/",t,r)}},Ae=typeof TextEncoder<"u"&&new TextEncoder,Sr=typeof TextDecoder<"u"&&new TextDecoder,Er=0;try{Sr.decode($e,{stream:!0}),Er=1}catch{}function se(e,n){if(n){for(var t=new S(e.length),r=0;r<e.length;++r)t[r]=e.charCodeAt(r);return t}if(Ae)return Ae.encode(e);for(var o=e.length,a=new S(e.length+(e.length>>1)),u=0,f=function(s){a[u++]=s},r=0;r<o;++r){if(u+5>a.length){var c=new S(u+8+(o-r<<1));c.set(a),a=c}var i=e.charCodeAt(r);i<128||n?f(i):i<2048?(f(192|i>>6),f(128|i&63)):i>55295&&i<57344?(i=65536+(i&1023<<10)|e.charCodeAt(++r)&1023,f(240|i>>18),f(128|i>>12&63),f(128|i>>6&63),f(128|i&63)):(f(224|i>>12),f(128|i>>6&63),f(128|i&63))}return Ne(a,0,u)}var de=function(e){var n=0;if(e)for(var t in e){var r=e[t].length;if(r>65535)throw"extra field too long";n+=r+4}return n},Ue=function(e,n,t,r,o,a,u,f){var c=r.length,i=t.extra,s=f&&f.length,l=de(i);M(e,n,u!=null?33639248:67324752),n+=4,u!=null&&(e[n++]=20,e[n++]=t.os),e[n]=20,n+=2,e[n++]=t.flag<<1|(a==null&&8),e[n++]=o&&8,e[n++]=t.compression&255,e[n++]=t.compression>>8;var h=new Date(t.mtime==null?Date.now():t.mtime),v=h.getFullYear()-1980;if(v<0||v>119)throw"date not in range 1980-2099";if(M(e,n,v<<25|h.getMonth()+1<<21|h.getDate()<<16|h.getHours()<<11|h.getMinutes()<<5|h.getSeconds()>>>1),n+=4,a!=null&&(M(e,n,t.crc),M(e,n+4,a),M(e,n+8,t.size)),M(e,n+12,c),M(e,n+14,l),n+=16,u!=null&&(M(e,n,s),M(e,n+6,t.attrs),M(e,n+10,u),n+=14),e.set(r,n),n+=c,l)for(var g in i){var m=i[g],E=m.length;M(e,n,+g),M(e,n+2,E),e.set(m,n+4),n+=4+E}return s&&(e.set(f,n),n+=s),n},Tr=function(e,n,t,r,o){M(e,n,101010256),M(e,n+8,t),M(e,n+10,t),M(e,n+12,r),M(e,n+16,o)};function Cr(e,n){n||(n={});var t={},r=[];Fe(e,"",t,n);var o=0,a=0;for(var u in t){var f=t[u],c=f[0],i=f[1],s=i.level==0?0:8,l=se(u),h=l.length,v=i.comment,g=v&&se(v),m=g&&g.length,E=de(i.extra);if(h>65535)throw"filename too long";var j=s?yr(c,i):c,O=j.length,B=Mr();B.p(c),r.push(Be(i,{size:c.length,crc:B.d(),c:j,f:l,m:g,u:h!=u.length||g&&v.length!=m,o,compression:s})),o+=30+h+E+O,a+=76+2*(h+E)+(m||0)+O}for(var T=new S(a+22),U=o,C=a-o,$=0;$<r.length;++$){var l=r[$];Ue(T,l.o,l,l.f,l.u,l.c.length);var p=30+l.f.length+de(l.extra);T.set(l.c,l.o+p),Ue(T,o,l,l.f,l.u,l.c.length,l.o,l.m),o+=16+p+(l.m?l.m.length:0)}return Tr(T,o,r.length,C,U),T}class Or{async parse(n,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}}},t);const r={},o="model.usda";r[o]=null;let a=He();a+=Ar(t);const u={},f={};n.traverseVisible(i=>{if(i.isMesh){const s=i.geometry,l=i.material;if(l.isMeshStandardMaterial){const h="geometries/Geometry_"+s.id+".usd";if(!(h in r)){const v=Dr(s);r[h]=kr(v)}l.uuid in u||(u[l.uuid]=l),a+=Pr(i,s,l)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",i)}else i.isCamera&&(a+=Fr(i))}),a+=Ur(),a+=Nr(u,f),r[o]=se(a),a=null;for(const i in f){const s=f[i],l=i.split("_")[1],h=s.format===1023,v=Rr(s.image,l),g=await new Promise(m=>v.toBlob(m,h?"image/png":"image/jpeg",1));r[`textures/Texture_${i}.${h?"png":"jpg"}`]=new Uint8Array(await g.arrayBuffer())}let c=0;for(const i in r){const s=r[i],l=34+i.length;c+=l;const h=c&63;if(h!==4){const v=64-h,g=new Uint8Array(v);r[i]=[s,{extra:{12345:g}}]}c=s.length}return Cr(r,{level:0})}}function Rr(e,n){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=1024/Math.max(e.width,e.height),r=document.createElement("canvas");r.width=e.width*Math.min(1,t),r.height=e.height*Math.min(1,t);const o=r.getContext("2d");if(o.drawImage(e,0,0,r.width,r.height),n!==void 0){const a=parseInt(n,16),u=(a>>16&255)/255,f=(a>>8&255)/255,c=(a&255)/255,i=o.getImageData(0,0,r.width,r.height),s=i.data;for(let l=0;l<s.length;l+=4)s[l+0]=s[l+0]*u,s[l+1]=s[l+1]*f,s[l+2]=s[l+2]*c;o.putImageData(i,0,0)}return r}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}const _=7;function He(){return`#usda 1.0
(
    customLayerData = {
        string creator = "Three.js USDZExporter"
    }
    metersPerUnit = 1
    upAxis = "Y"
)

`}function Ar(e){return`def Xform "Root"
{
    def Scope "Scenes" (
        kind = "sceneLibrary"
    )
    {
        def Xform "Scene" (
            customData = {
                bool preliminary_collidesWithEnvironment = 0
                string sceneName = "Scene"
            }
            sceneName = "Scene"
        )
        {
        token preliminary:anchoring:type = "${e.ar.anchoring.type}"
        token preliminary:planeAnchoring:alignment = "${e.ar.planeAnchoring.alignment}"

`}function Ur(){return`
        }
    }
}

`}function kr(e){let n=He();return n+=e,se(n)}function Pr(e,n,t){const r="Object_"+e.id,o=Ze(e.matrixWorld);return e.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",e),`def Xform "${r}" (
    prepend references = @./geometries/Geometry_${n.id}.usd@</Geometry>
)
{
    matrix4d xformOp:transform = ${o}
    uniform token[] xformOpOrder = ["xformOp:transform"]

    rel material:binding = </Materials/Material_${t.id}>
}

`}function Ze(e){const n=e.elements;return`( ${re(n,0)}, ${re(n,4)}, ${re(n,8)}, ${re(n,12)} )`}function re(e,n){return`(${e[n+0]}, ${e[n+1]}, ${e[n+2]}, ${e[n+3]})`}function Dr(e){return`
def "Geometry"
{
  ${Lr(e)}
}
`}function Lr(e){const n="Geometry",t=e.attributes,r=t.position.count;return`
    def Mesh "${n}"
    {
        int[] faceVertexCounts = [${jr(e)}]
        int[] faceVertexIndices = [${Ir(e)}]
        normal3f[] normals = [${ke(t.normal,r)}] (
            interpolation = "vertex"
        )
        point3f[] points = [${ke(t.position,r)}]
        float2[] primvars:st = [${br(t.uv,r)}] (
            interpolation = "vertex"
        )
        uniform token subdivisionScheme = "none"
    }
`}function jr(e){const n=e.index!==null?e.index.count:e.attributes.position.count;return Array(n/3).fill(3).join(", ")}function Ir(e){const n=e.index,t=[];if(n!==null)for(let r=0;r<n.count;r++)t.push(n.getX(r));else{const r=e.attributes.position.count;for(let o=0;o<r;o++)t.push(o)}return t.join(", ")}function ke(e,n){if(e===void 0)return console.warn("USDZExporter: Normals missing."),Array(n).fill("(0, 0, 0)").join(", ");const t=[];for(let r=0;r<e.count;r++){const o=e.getX(r),a=e.getY(r),u=e.getZ(r);t.push(`(${o.toPrecision(_)}, ${a.toPrecision(_)}, ${u.toPrecision(_)})`)}return t.join(", ")}function br(e,n){if(e===void 0)return console.warn("USDZExporter: UVs missing."),Array(n).fill("(0, 0)").join(", ");const t=[];for(let r=0;r<e.count;r++){const o=e.getX(r),a=e.getY(r);t.push(`(${o.toPrecision(_)}, ${1-a.toPrecision(_)})`)}return t.join(", ")}function Nr(e,n){const t=[];for(const r in e){const o=e[r];t.push(Br(o,n))}return`def "Materials"
{
${t.join("")}
}

`}function Br(e,n){const t="            ",r=[],o=[];function a(u,f,c){const i=u.id+(c?"_"+c.getHexString():""),s=u.format===1023;return n[i]=u,`
        def Shader "Transform2d_${f}" (
            sdrMetadata = {
                string role = "math"
            }
        )
        {
            uniform token info:id = "UsdTransform2d"
            float2 inputs:in.connect = </Materials/Material_${e.id}/uvReader_st.outputs:result>
            float2 inputs:scale = ${De(u.repeat)}
            float2 inputs:translation = ${De(u.offset)}
            float2 outputs:result
        }

        def Shader "Texture_${u.id}_${f}"
        {
            uniform token info:id = "UsdUVTexture"
            asset inputs:file = @textures/Texture_${i}.${s?"png":"jpg"}@
            float2 inputs:st.connect = </Materials/Material_${e.id}/Transform2d_${f}.outputs:result>
            token inputs:wrapS = "repeat"
            token inputs:wrapT = "repeat"
            float outputs:r
            float outputs:g
            float outputs:b
            float3 outputs:rgb
            ${e.transparent||e.alphaTest>0?"float outputs:a":""}
        }`}return e.side===tr&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",e),e.map!==null?(r.push(`${t}color3f inputs:diffuseColor.connect = </Materials/Material_${e.id}/Texture_${e.map.id}_diffuse.outputs:rgb>`),e.transparent?r.push(`${t}float inputs:opacity.connect = </Materials/Material_${e.id}/Texture_${e.map.id}_diffuse.outputs:a>`):e.alphaTest>0&&(r.push(`${t}float inputs:opacity.connect = </Materials/Material_${e.id}/Texture_${e.map.id}_diffuse.outputs:a>`),r.push(`${t}float inputs:opacityThreshold = ${e.alphaTest}`)),o.push(a(e.map,"diffuse",e.color))):r.push(`${t}color3f inputs:diffuseColor = ${Pe(e.color)}`),e.emissiveMap!==null?(r.push(`${t}color3f inputs:emissiveColor.connect = </Materials/Material_${e.id}/Texture_${e.emissiveMap.id}_emissive.outputs:rgb>`),o.push(a(e.emissiveMap,"emissive"))):e.emissive.getHex()>0&&r.push(`${t}color3f inputs:emissiveColor = ${Pe(e.emissive)}`),e.normalMap!==null&&(r.push(`${t}normal3f inputs:normal.connect = </Materials/Material_${e.id}/Texture_${e.normalMap.id}_normal.outputs:rgb>`),o.push(a(e.normalMap,"normal"))),e.aoMap!==null&&(r.push(`${t}float inputs:occlusion.connect = </Materials/Material_${e.id}/Texture_${e.aoMap.id}_occlusion.outputs:r>`),o.push(a(e.aoMap,"occlusion"))),e.roughnessMap!==null&&e.roughness===1?(r.push(`${t}float inputs:roughness.connect = </Materials/Material_${e.id}/Texture_${e.roughnessMap.id}_roughness.outputs:g>`),o.push(a(e.roughnessMap,"roughness"))):r.push(`${t}float inputs:roughness = ${e.roughness}`),e.metalnessMap!==null&&e.metalness===1?(r.push(`${t}float inputs:metallic.connect = </Materials/Material_${e.id}/Texture_${e.metalnessMap.id}_metallic.outputs:b>`),o.push(a(e.metalnessMap,"metallic"))):r.push(`${t}float inputs:metallic = ${e.metalness}`),e.alphaMap!==null?(r.push(`${t}float inputs:opacity.connect = </Materials/Material_${e.id}/Texture_${e.alphaMap.id}_opacity.outputs:r>`),r.push(`${t}float inputs:opacityThreshold = 0.0001`),o.push(a(e.alphaMap,"opacity"))):r.push(`${t}float inputs:opacity = ${e.opacity}`),e.isMeshPhysicalMaterial&&(r.push(`${t}float inputs:clearcoat = ${e.clearcoat}`),r.push(`${t}float inputs:clearcoatRoughness = ${e.clearcoatRoughness}`),r.push(`${t}float inputs:ior = ${e.ior}`)),`
    def Material "Material_${e.id}"
    {
        def Shader "PreviewSurface"
        {
            uniform token info:id = "UsdPreviewSurface"
${r.join(`
`)}
            int inputs:useSpecularWorkflow = 0
            token outputs:surface
        }

        token outputs:surface.connect = </Materials/Material_${e.id}/PreviewSurface.outputs:surface>
        token inputs:frame:stPrimvarName = "st"

        def Shader "uvReader_st"
        {
            uniform token info:id = "UsdPrimvarReader_float2"
            token inputs:varname.connect = </Materials/Material_${e.id}.inputs:frame:stPrimvarName>
            float2 inputs:fallback = (0.0, 0.0)
            float2 outputs:result
        }

${o.join(`
`)}

    }
`}function Pe(e){return`(${e.r}, ${e.g}, ${e.b})`}function De(e){return`(${e.x}, ${e.y})`}function Fr(e){const n=e.name?e.name:"Camera_"+e.id,t=Ze(e.matrixWorld);return e.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",e),e.isOrthographicCamera?`def Camera "${n}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]
	
			float2 clippingRange = (${e.near.toPrecision(_)}, ${e.far.toPrecision(_)})
			float horizontalAperture = ${((Math.abs(e.left)+Math.abs(e.right))*10).toPrecision(_)}
			float verticalAperture = ${((Math.abs(e.top)+Math.abs(e.bottom))*10).toPrecision(_)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${n}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]
	
			float2 clippingRange = (${e.near.toPrecision(_)}, ${e.far.toPrecision(_)})
			float focalLength = ${e.getFocalLength().toPrecision(_)}
			float focusDistance = ${e.focus.toPrecision(_)}
			float horizontalAperture = ${e.getFilmWidth().toPrecision(_)}
			token projection = "perspective"
			float verticalAperture = ${e.getFilmHeight().toPrecision(_)}
		}
	
	`}const Hr=Q.lazy(()=>hr(()=>import("./Scene-ab63b7b9.js"),["assets/Scene-ab63b7b9.js","assets/@react-three/drei-5bd74c8f.js","assets/@react-three/fiber-426da065.js","assets/three-de3e021a.js","assets/@react-three/xr-42a2a652.js"])),Zr=navigator.userAgent.includes("Safari"),{ACTION:{TOUCH_DOLLY_ROTATE:zr,TOUCH_ROTATE:Vr,NONE:Xr}}=Ke,Wr=async e=>navigator.xr?navigator.xr.isSessionSupported(e):!1,ne=e=>e*(Math.PI/180),Gr=new Or,Yr=[{name:"deluxe_base_wood_0",material:"plastic_white"},{name:"deluxe_walls_full_wood_0",material:"wood_oak"},{name:"deluxe_interior_full_plastic_white_0",material:"plastic_white"},{name:"deluxe_step_size_wood_0",material:"wood_oak"}],qr=async e=>{const n=await Gr.parse(e),t=new Blob([n],{type:"application/octet-stream"}),r=URL.createObjectURL(t),o=document.createElement("a");if(o.style.display="none",o.href=r,o.rel="ar",o.download="model.usdz",Zr&&o.relList.supports("ar")){const a=document.createElement("img");o.appendChild(a)}document.body.appendChild(o),o.click(),URL.revokeObjectURL(r),document.body.removeChild(o)},Jr=()=>{const e=We(r=>r.scene),[n,t]=Q.useState(!1);return Q.useEffect(()=>{(async()=>{const r=await Wr("immersive-ar");t(r)})()},[]),n?x(nr,{}):x(Qe,{as:"div",wrapperClass:"ar-button-container",children:x("button",{type:"button",onClick:()=>{qr(e)},children:"View AR"})})},Kr=()=>x("main",{children:x("section",{children:x(Q.Suspense,{fallback:x("div",{className:"loading",children:"Loading..."}),children:ye(Xe,{shadows:!0,children:[x("color",{attach:"background",args:["#fff"]}),ye(rr,{children:[x(Jr,{}),x("directionalLight",{castShadow:!0,position:[2,10,3],intensity:1,"shadow-mapSize":1024}),x(Hr,{shownNodes:Yr}),x(Ge,{receiveShadow:!0,rotation:[-Math.PI/2,0,0],args:[500,500],children:x("shadowMaterial",{transparent:!0,opacity:.4})}),x(Ye,{}),x(qe,{maxPolarAngle:ne(80),minPolarAngle:ne(0),polarAngle:ne(60),azimuthAngle:ne(-120),maxZoom:1,minZoom:1,distance:5,maxDistance:5,minDistance:3,dragToOffset:!1,touches:{one:Vr,two:zr,three:Xr}}),x(Je,{preset:"warehouse"})]})]})})})});er(document.getElementById("root")).render(x(Kr,{}));export{x as j};
