!function(){"use strict";var t=window,e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},n=window,i=n.cancelAnimationFrame||n.mozCancelAnimationFrame||function(t){clearTimeout(t)};function o(){for(var t,e,n,i=arguments[0]||{},o=1,a=arguments.length;o<a;o++)if(null!==(t=arguments[o]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function a(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function r(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function u(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var l=document.documentElement;function s(t){var e="";return t.fake&&(e=l.style.overflow,t.style.background="",t.style.overflow=l.style.overflow="hidden",l.appendChild(t)),e}function c(t,e){t.fake&&(t.remove(),l.style.overflow=e,l.offsetHeight)}function f(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function d(t){return("insertRule"in t?t.cssRules:t.rules).length}function v(t,e,n){for(var i=0,o=t.length;i<o;i++)e.call(n,t[i],i)}var p="classList"in document.createElement("_"),m=p?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},h=p?function(t,e){m(t,e)||t.classList.add(e)}:function(t,e){m(t,e)||(t.className+=" "+e)},y=p?function(t,e){m(t,e)&&t.classList.remove(e)}:function(t,e){m(t,e)&&(t.className=t.className.replace(e,""))};function g(t,e){return t.hasAttribute(e)}function x(t,e){return t.getAttribute(e)}function b(t){return void 0!==t.item}function w(t,e){if(t=b(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function C(t,e){t=b(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var o=n;o--;)t[i].removeAttribute(e[o])}function M(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function T(t,e){"none"!==t.style.display&&(t.style.display="none")}function E(t,e){"none"===t.style.display&&(t.style.display="")}function L(t){return"none"!==window.getComputedStyle(t).display}function A(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}for(var i=document.createElement("fakeelement"),o=(t.length,0);o<t.length;o++){var a=t[o];if(void 0!==i.style[a])return a}return!1}function S(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var B=!1;try{var N=Object.defineProperty({},"passive",{get:function(){B=!0}});window.addEventListener("test",null,N)}catch(t){}var H=!!B&&{passive:!0};function O(t,e,n){for(var i in e){var o=["touchstart","touchmove"].indexOf(i)>=0&&!n&&H;t.addEventListener(i,e[i],o)}}function D(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&H;t.removeEventListener(n,e[n],i)}}function k(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var P=function(t){t=o({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var n=document,l=window,p={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},b={},B=t.useLocalStorage;if(B){var N=navigator.userAgent,H=new Date;try{(b=l.localStorage)?(b.setItem(H,H),B=b.getItem(H)==H,b.removeItem(H)):B=!1,B||(b={})}catch(t){B=!1}B&&(b.tnsApp&&b.tnsApp!==N&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){b.removeItem(t)})),localStorage.tnsApp=N)}var R=b.tC?a(b.tC):r(b,"tC",function(){var t=document,e=u(),n=s(e),i=t.createElement("div"),o=!1;e.appendChild(i);try{for(var a,r="(10px * 10)",l=["calc"+r,"-moz-calc"+r,"-webkit-calc"+r],f=0;f<3;f++)if(a=l[f],i.style.width=a,100===i.offsetWidth){o=a.replace(r,"");break}}catch(t){}return e.fake?c(e,n):i.remove(),o}(),B),I=b.tPL?a(b.tPL):r(b,"tPL",function(){var t,e=document,n=u(),i=s(n),o=e.createElement("div"),a=e.createElement("div"),r="";o.className="tns-t-subp2",a.className="tns-t-ct";for(var l=0;l<70;l++)r+="<div></div>";return a.innerHTML=r,o.appendChild(a),n.appendChild(o),t=Math.abs(o.getBoundingClientRect().left-a.children[67].getBoundingClientRect().left)<2,n.fake?c(n,i):o.remove(),t}(),B),z=b.tMQ?a(b.tMQ):r(b,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=u(),i=s(n),o=e.createElement("div"),a=e.createElement("style"),r="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return a.type="text/css",o.className="tns-mq-test",n.appendChild(a),n.appendChild(o),a.styleSheet?a.styleSheet.cssText=r:a.appendChild(e.createTextNode(r)),t=window.getComputedStyle?window.getComputedStyle(o).position:o.currentStyle.position,n.fake?c(n,i):o.remove(),"absolute"===t}(),B),W=b.tTf?a(b.tTf):r(b,"tTf",A("transform"),B),q=b.t3D?a(b.t3D):r(b,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=u(),o=s(i),a=n.createElement("p"),r=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return r+="transform",i.insertBefore(a,null),a.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(a).getPropertyValue(r),i.fake?c(i,o):a.remove(),void 0!==e&&e.length>0&&"none"!==e}(W),B),F=b.tTDu?a(b.tTDu):r(b,"tTDu",A("transitionDuration"),B),j=b.tTDe?a(b.tTDe):r(b,"tTDe",A("transitionDelay"),B),V=b.tADu?a(b.tADu):r(b,"tADu",A("animationDuration"),B),G=b.tADe?a(b.tADe):r(b,"tADe",A("animationDelay"),B),K=b.tTE?a(b.tTE):r(b,"tTE",S(F,"Transition"),B),Q=b.tAE?a(b.tAE):r(b,"tAE",S(V,"Animation"),B),X=l.console&&"function"==typeof l.console.warn,Y=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],J={};if(Y.forEach((function(e){if("string"==typeof t[e]){var i=t[e],o=n.querySelector(i);if(J[e]=i,!o||!o.nodeName)return void(X&&console.warn("Can't find",t[e]));t[e]=o}})),!(t.container.children.length<1)){var U=t.responsive,_=t.nested,Z="carousel"===t.mode;if(U){0 in U&&(t=o(t,U[0]),delete U[0]);var $={};for(var tt in U){var et=U[tt];et="number"==typeof et?{items:et}:et,$[tt]=et}U=$,$=null}if(Z||function t(e){for(var n in e)Z||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!Z){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,ot=t.animateDelay,at=t.animateNormal}var rt,ut,lt="horizontal"===t.axis,st=n.createElement("div"),ct=n.createElement("div"),ft=t.container,dt=ft.parentNode,vt=ft.outerHTML,pt=ft.children,mt=pt.length,ht=On(),yt=!1;U&&Zn(),Z&&(ft.className+=" tns-vpfix");var gt,xt,bt,wt,Ct,Mt,Tt,Et,Lt,At=t.autoWidth,St=Rn("fixedWidth"),Bt=Rn("edgePadding"),Nt=Rn("gutter"),Ht=kn(),Ot=Rn("center"),Dt=At?1:Math.floor(Rn("items")),kt=Rn("slideBy"),Pt=t.viewportMax||t.fixedWidthViewportWidth,Rt=Rn("arrowKeys"),It=Rn("speed"),zt=t.rewind,Wt=!zt&&t.loop,qt=Rn("autoHeight"),Ft=Rn("controls"),jt=Rn("controlsText"),Vt=Rn("nav"),Gt=Rn("touch"),Kt=Rn("mouseDrag"),Qt=Rn("autoplay"),Xt=Rn("autoplayTimeout"),Yt=Rn("autoplayText"),Jt=Rn("autoplayHoverPause"),Ut=Rn("autoplayResetOnVisibility"),_t=(Tt=null,Et=Rn("nonce"),Lt=document.createElement("style"),Tt&&Lt.setAttribute("media",Tt),Et&&Lt.setAttribute("nonce",Et),document.querySelector("head").appendChild(Lt),Lt.sheet?Lt.sheet:Lt.styleSheet),Zt=t.lazyload,$t=t.lazyloadSelector,te=[],ee=Wt?(Ct=function(){if(At||St&&!Pt)return mt-1;var e=St?"fixedWidth":"items",n=[];if((St||t[e]<mt)&&n.push(t[e]),U)for(var i in U){var o=U[i][e];o&&(St||o<mt)&&n.push(o)}return n.length||n.push(0),Math.ceil(St?Pt/Math.min.apply(null,n):Math.max.apply(null,n))}(),Mt=Z?Math.ceil((5*Ct-mt)/2):4*Ct-mt,Mt=Math.max(Ct,Mt),Pn("edgePadding")?Mt+1:Mt):0,ne=Z?mt+2*ee:mt+ee,ie=!(!St&&!At||Wt),oe=St?Ti():null,ae=!Z||!Wt,re=lt?"left":"top",ue="",le="",se=St?function(){return Ot&&!Wt?mt-1:Math.ceil(-oe/(St+Nt))}:At?function(){for(var t=0;t<ne;t++)if(gt[t]>=-oe)return t}:function(){return Ot&&Z&&!Wt?mt-1:Wt||Z?Math.max(0,ne-Math.ceil(Dt)):ne-1},ce=Bn(Rn("startIndex")),fe=ce,de=(Sn(),0),ve=At?null:se(),pe=t.preventActionWhenRunning,me=t.swipeAngle,he=!me||"?",ye=!1,ge=t.onInit,xe=new k,be=" tns-slider tns-"+t.mode,we=ft.id||(wt=window.tnsId,window.tnsId=wt?wt+1:1,"tns"+window.tnsId),Ce=Rn("disable"),Me=!1,Te=t.freezable,Ee=!(!Te||At)&&_n(),Le=!1,Ae={click:Di,keydown:function(t){t=Fi(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Ye.disabled||Di(t,-1):Je.disabled||Di(t,1))}},Se={click:function(t){if(ye){if(pe)return;Hi()}var e=ji(t=Fi(t));for(;e!==$e&&!g(e,"data-nav");)e=e.parentNode;if(g(e,"data-nav")){var n=on=Number(x(e,"data-nav")),i=St||At?n*mt/en:n*Dt;Oi(Re?n:Math.min(Math.ceil(i),mt-1),t),an===n&&(fn&&zi(),on=-1)}},keydown:function(t){t=Fi(t);var e=n.activeElement;if(!g(e,"data-nav"))return;var i=[p.LEFT,p.RIGHT,p.ENTER,p.SPACE].indexOf(t.keyCode),o=Number(x(e,"data-nav"));i>=0&&(0===i?o>0&&qi(Ze[o-1]):1===i?o<en-1&&qi(Ze[o+1]):(on=o,Oi(o,t)))}},Be={mouseover:function(){fn&&(Pi(),dn=!0)},mouseout:function(){dn&&(ki(),dn=!1)}},Ne={visibilitychange:function(){n.hidden?fn&&(Pi(),pn=!0):pn&&(ki(),pn=!1)}},He={keydown:function(t){t=Fi(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);e>=0&&Di(t,0===e?-1:1)}},Oe={touchstart:Qi,touchmove:Xi,touchend:Yi,touchcancel:Yi},De={mousedown:Qi,mousemove:Xi,mouseup:Yi,mouseleave:Yi},ke=Pn("controls"),Pe=Pn("nav"),Re=!!At||t.navAsThumbnails,Ie=Pn("autoplay"),ze=Pn("touch"),We=Pn("mouseDrag"),qe="tns-slide-active",Fe="tns-complete",je={load:function(t){ui(ji(t))},error:function(t){e=ji(t),h(e,"failed"),li(e);var e}},Ve="force"===t.preventScrollOnTouch;if(ke)var Ge,Ke,Qe=t.controlsContainer,Xe=t.controlsContainer?t.controlsContainer.outerHTML:"",Ye=t.prevButton,Je=t.nextButton,Ue=t.prevButton?t.prevButton.outerHTML:"",_e=t.nextButton?t.nextButton.outerHTML:"";if(Pe)var Ze,$e=t.navContainer,tn=t.navContainer?t.navContainer.outerHTML:"",en=At?mt:Ui(),nn=0,on=-1,an=Hn(),rn=an,un="tns-nav-active",ln="Carousel Page ",sn=" (Current Slide)";if(Ie)var cn,fn,dn,vn,pn,mn="forward"===t.autoplayDirection?1:-1,hn=t.autoplayButton,yn=t.autoplayButton?t.autoplayButton.outerHTML:"",gn=["<span class='tns-visually-hidden'>"," animation</span>"];if(ze||We)var xn,bn,wn={},Cn={},Mn=!1,Tn=lt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};At||An(Ce||Ee),W&&(re=W,ue="translate",q?(ue+=lt?"3d(":"3d(0px, ",le=lt?", 0px, 0px)":", 0px)"):(ue+=lt?"X(":"Y(",le=")")),Z&&(ft.className=ft.className.replace("tns-vpfix","")),function(){Pn("gutter");st.className="tns-outer",ct.className="tns-inner",st.id=we+"-ow",ct.id=we+"-iw",""===ft.id&&(ft.id=we);be+=I||At?" tns-subpixel":" tns-no-subpixel",be+=R?" tns-calc":" tns-no-calc",At&&(be+=" tns-autowidth");be+=" tns-"+t.axis,ft.className+=be,Z?((rt=n.createElement("div")).id=we+"-mw",rt.className="tns-ovh",st.appendChild(rt),rt.appendChild(ct)):st.appendChild(ct);if(qt){(rt||ct).className+=" tns-ah"}if(dt.insertBefore(st,ft),ct.appendChild(ft),v(pt,(function(t,e){h(t,"tns-item"),t.id||(t.id=we+"-item"+e),!Z&&at&&h(t,at),w(t,{"aria-hidden":"true",tabindex:"-1"})})),ee){for(var e=n.createDocumentFragment(),i=n.createDocumentFragment(),o=ee;o--;){var a=o%mt,r=pt[a].cloneNode(!0);if(h(r,"tns-slide-cloned"),C(r,"id"),i.insertBefore(r,i.firstChild),Z){var u=pt[mt-1-a].cloneNode(!0);h(u,"tns-slide-cloned"),C(u,"id"),e.appendChild(u)}}ft.insertBefore(e,ft.firstChild),ft.appendChild(i),pt=ft.children}}(),function(){if(!Z)for(var e=ce,n=ce+Math.min(mt,Dt);e<n;e++){var i=pt[e];i.style.left=100*(e-ce)/Dt+"%",h(i,nt),y(i,at)}lt&&(I||At?(f(_t,"#"+we+" > .tns-item","font-size:"+l.getComputedStyle(pt[0]).fontSize+";",d(_t)),f(_t,"#"+we,"font-size:0;",d(_t))):Z&&v(pt,(function(t,e){t.style.marginLeft=function(t){return R?R+"("+100*t+"% / "+ne+")":100*t/ne+"%"}(e)})));if(z){if(F){var o=rt&&t.autoHeight?jn(t.speed):"";f(_t,"#"+we+"-mw",o,d(_t))}o=In(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),f(_t,"#"+we+"-iw",o,d(_t)),Z&&(o=lt&&!At?"width:"+zn(t.fixedWidth,t.gutter,t.items)+";":"",F&&(o+=jn(It)),f(_t,"#"+we,o,d(_t))),o=lt&&!At?Wn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(o+=qn(t.gutter)),Z||(F&&(o+=jn(It)),V&&(o+=Vn(It))),o&&f(_t,"#"+we+" > .tns-item",o,d(_t))}else{Z&&qt&&(rt.style[F]=It/1e3+"s"),ct.style.cssText=In(Bt,Nt,St,qt),Z&&lt&&!At&&(ft.style.width=zn(St,Nt,Dt));o=lt&&!At?Wn(St,Nt,Dt):"";Nt&&(o+=qn(Nt)),o&&f(_t,"#"+we+" > .tns-item",o,d(_t))}if(U&&z)for(var a in U){a=parseInt(a);var r=U[a],u=(o="",""),s="",c="",p="",m=At?null:Rn("items",a),g=Rn("fixedWidth",a),x=Rn("speed",a),b=Rn("edgePadding",a),w=Rn("autoHeight",a),C=Rn("gutter",a);F&&rt&&Rn("autoHeight",a)&&"speed"in r&&(u="#"+we+"-mw{"+jn(x)+"}"),("edgePadding"in r||"gutter"in r)&&(s="#"+we+"-iw{"+In(b,C,g,x,w)+"}"),Z&&lt&&!At&&("fixedWidth"in r||"items"in r||St&&"gutter"in r)&&(c="width:"+zn(g,C,m)+";"),F&&"speed"in r&&(c+=jn(x)),c&&(c="#"+we+"{"+c+"}"),("fixedWidth"in r||St&&"gutter"in r||!Z&&"items"in r)&&(p+=Wn(g,C,m)),"gutter"in r&&(p+=qn(C)),!Z&&"speed"in r&&(F&&(p+=jn(x)),V&&(p+=Vn(x))),p&&(p="#"+we+" > .tns-item{"+p+"}"),(o=u+s+c+p)&&_t.insertRule("@media (min-width: "+a/16+"em) {"+o+"}",_t.cssRules.length)}}(),Gn();var En=Wt?Z?function(){var t=de,e=ve;t+=kt,e-=kt,Bt?(t+=1,e-=1):St&&(Ht+Nt)%(St+Nt)&&(e-=1),ee&&(ce>e?ce-=mt:ce<t&&(ce+=mt))}:function(){if(ce>ve)for(;ce>=de+mt;)ce-=mt;else if(ce<de)for(;ce<=ve-mt;)ce+=mt}:function(){ce=Math.max(de,Math.min(ve,ce))},Ln=Z?function(){var t,e,n,i,o,a,r,u,l,s,c;Ci(ft,""),F||!It?(Ai(),It&&L(ft)||Hi()):(t=ft,e=re,n=ue,i=le,o=Ei(),a=It,r=Hi,u=Math.min(a,10),l=o.indexOf("%")>=0?"%":"px",o=o.replace(l,""),s=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),c=(o-s)/a*u,setTimeout((function o(){a-=u,s+=c,t.style[e]=n+s+l+i,a>0?setTimeout(o,u):r()}),u)),lt||Ji()}:function(){te=[];var t={};t[K]=t[Q]=Hi,D(pt[fe],t),O(pt[ce],t),Si(fe,nt,it,!0),Si(ce,at,nt),K&&Q&&It&&L(ft)||Hi()};return{version:"2.9.3",getInfo:Zi,events:xe,goTo:Oi,play:function(){Qt&&!fn&&(Ii(),vn=!1)},pause:function(){fn&&(zi(),vn=!0)},isOn:yt,updateSliderHeight:pi,refresh:Gn,destroy:function(){if(_t.disabled=!0,_t.ownerNode&&_t.ownerNode.remove(),D(l,{resize:Jn}),Rt&&D(n,He),Qe&&D(Qe,Ae),$e&&D($e,Se),D(ft,Be),D(ft,Ne),hn&&D(hn,{click:Wi}),Qt&&clearInterval(cn),Z&&K){var e={};e[K]=Hi,D(ft,e)}Gt&&D(ft,Oe),Kt&&D(ft,De);var i=[vt,Xe,Ue,_e,tn,yn];for(var o in Y.forEach((function(e,n){var o="container"===e?st:t[e];if("object"==typeof o&&o){var a=!!o.previousElementSibling&&o.previousElementSibling,r=o.parentNode;o.outerHTML=i[n],t[e]=a?a.nextElementSibling:r.firstElementChild}})),Y=nt=it=ot=at=lt=st=ct=ft=dt=vt=pt=mt=ut=ht=At=St=Bt=Nt=Ht=Dt=kt=Pt=Rt=It=zt=Wt=qt=_t=Zt=gt=te=ee=ne=ie=oe=ae=re=ue=le=se=ce=fe=de=ve=me=he=ye=ge=xe=be=we=Ce=Me=Te=Ee=Le=Ae=Se=Be=Ne=He=Oe=De=ke=Pe=Re=Ie=ze=We=qe=Fe=je=xt=Ft=jt=Qe=Xe=Ye=Je=Ge=Ke=Vt=$e=tn=Ze=en=nn=on=an=rn=un=ln=sn=Qt=Xt=mn=Yt=Jt=hn=yn=Ut=gn=cn=fn=dn=vn=pn=wn=Cn=xn=Mn=bn=Tn=Gt=Kt=null,this)"rebuild"!==o&&(this[o]=null);yt=!1},rebuild:function(){return P(o(t,J))}}}function An(t){t&&(Ft=Vt=Gt=Kt=Rt=Qt=Jt=Ut=!1)}function Sn(){for(var t=Z?ce-ee:ce;t<0;)t+=mt;return t%mt+1}function Bn(t){return t=t?Math.max(0,Math.min(Wt?mt-1:mt-Dt,t)):0,Z?t+ee:t}function Nn(t){for(null==t&&(t=ce),Z&&(t-=ee);t<0;)t+=mt;return Math.floor(t%mt)}function Hn(){var t,e=Nn();return t=Re?e:St||At?Math.ceil((e+1)*en/mt-1):Math.floor(e/Dt),!Wt&&Z&&ce===ve&&(t=en-1),t}function On(){return l.innerWidth||n.documentElement.clientWidth||n.body.clientWidth}function Dn(t){return"top"===t?"afterbegin":"beforeend"}function kn(){var t=Bt?2*Bt-Nt:0;return function t(e){if(null!=e){var i,o,a=n.createElement("div");return e.appendChild(a),o=(i=a.getBoundingClientRect()).right-i.left,a.remove(),o||t(e.parentNode)}}(dt)-t}function Pn(e){if(t[e])return!0;if(U)for(var n in U)if(U[n][e])return!0;return!1}function Rn(e,n){if(null==n&&(n=ht),"items"===e&&St)return Math.floor((Ht+Nt)/(St+Nt))||1;var i=t[e];if(U)for(var o in U)n>=parseInt(o)&&e in U[o]&&(i=U[o][e]);return"slideBy"===e&&"page"===i&&(i=Rn("items")),Z||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function In(t,e,n,i,o){var a="";if(void 0!==t){var r=t;e&&(r-=e),a=lt?"margin: 0 "+r+"px 0 "+t+"px;":"margin: "+t+"px 0 "+r+"px 0;"}else if(e&&!n){var u="-"+e+"px";a="margin: 0 "+(lt?u+" 0 0":"0 "+u+" 0")+";"}return!Z&&o&&F&&i&&(a+=jn(i)),a}function zn(t,e,n){return t?(t+e)*ne+"px":R?R+"("+100*ne+"% / "+n+")":100*ne/n+"%"}function Wn(t,e,n){var i;if(t)i=t+e+"px";else{Z||(n=Math.floor(n));var o=Z?ne:n;i=R?R+"(100% / "+o+")":100/o+"%"}return i="width:"+i,"inner"!==_?i+";":i+" !important;"}function qn(t){var e="";!1!==t&&(e=(lt?"padding-":"margin-")+(lt?"right":"bottom")+": "+t+"px;");return e}function Fn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function jn(t){return Fn(F,18)+"transition-duration:"+t/1e3+"s;"}function Vn(t){return Fn(V,17)+"animation-duration:"+t/1e3+"s;"}function Gn(){if(Pn("autoHeight")||At||!lt){var t=ft.querySelectorAll("img");v(t,(function(t){var e=t.src;Zt||(e&&e.indexOf("data:image")<0?(t.src="",O(t,je),h(t,"loading"),t.src=e):ui(t))})),e((function(){fi(M(t),(function(){xt=!0}))})),Pn("autoHeight")&&(t=si(ce,Math.min(ce+Dt-1,ne-1))),Zt?Kn():e((function(){fi(M(t),Kn)}))}else Z&&Li(),Xn(),Yn()}function Kn(){if(At&&mt>1){var t=Wt?ce:mt-1;!function e(){var n=pt[t].getBoundingClientRect().left,i=pt[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Qn():setTimeout((function(){e()}),16)}()}else Qn()}function Qn(){lt&&!At||(mi(),At?(oe=Ti(),Te&&(Ee=_n()),ve=se(),An(Ce||Ee)):Ji()),Z&&Li(),Xn(),Yn()}function Xn(){if(hi(),st.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+oi()+"</span>  of "+mt+"</div>"),bt=st.querySelector(".tns-liveregion .current"),Ie){var e=Qt?"stop":"start";hn?w(hn,{"data-action":e}):t.autoplayButtonOutput&&(st.insertAdjacentHTML(Dn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+gn[0]+e+gn[1]+Yt[0]+"</button>"),hn=st.querySelector("[data-action]")),hn&&O(hn,{click:Wi}),Qt&&(Ii(),Jt&&O(ft,Be),Ut&&O(ft,Ne))}if(Pe){if($e)w($e,{"aria-label":"Carousel Pagination"}),v(Ze=$e.children,(function(t,e){w(t,{"data-nav":e,tabindex:"-1","aria-label":ln+(e+1),"aria-controls":we})}));else{for(var n="",i=Re?"":'style="display:none"',o=0;o<mt;o++)n+='<button type="button" data-nav="'+o+'" tabindex="-1" aria-controls="'+we+'" '+i+' aria-label="'+ln+(o+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",st.insertAdjacentHTML(Dn(t.navPosition),n),$e=st.querySelector(".tns-nav"),Ze=$e.children}if(_i(),F){var a=F.substring(0,F.length-18).toLowerCase(),r="transition: all "+It/1e3+"s";a&&(r="-"+a+"-"+r),f(_t,"[aria-controls^="+we+"-item]",r,d(_t))}w(Ze[an],{"aria-label":ln+(an+1)+sn}),C(Ze[an],"tabindex"),h(Ze[an],un),O($e,Se)}ke&&(Qe||Ye&&Je||(st.insertAdjacentHTML(Dn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+we+'">'+jt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+we+'">'+jt[1]+"</button></div>"),Qe=st.querySelector(".tns-controls")),Ye&&Je||(Ye=Qe.children[0],Je=Qe.children[1]),t.controlsContainer&&w(Qe,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&w([Ye,Je],{"aria-controls":we,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(w(Ye,{"data-controls":"prev"}),w(Je,{"data-controls":"next"})),Ge=gi(Ye),Ke=gi(Je),wi(),Qe?O(Qe,Ae):(O(Ye,Ae),O(Je,Ae))),$n()}function Yn(){if(Z&&K){var e={};e[K]=Hi,O(ft,e)}Gt&&O(ft,Oe,t.preventScrollOnTouch),Kt&&O(ft,De),Rt&&O(n,He),"inner"===_?xe.on("outerResized",(function(){Un(),xe.emit("innerLoaded",Zi())})):(U||St||At||qt||!lt)&&O(l,{resize:Jn}),qt&&("outer"===_?xe.on("innerLoaded",ci):Ce||ci()),ri(),Ce?ni():Ee&&ei(),xe.on("indexChanged",di),"inner"===_&&xe.emit("innerLoaded",Zi()),"function"==typeof ge&&ge(Zi()),yt=!0}function Jn(t){e((function(){Un(Fi(t))}))}function Un(e){if(yt){"outer"===_&&xe.emit("outerResized",Zi(e)),ht=On();var i,o=ut,a=!1;U&&(Zn(),(i=o!==ut)&&xe.emit("newBreakpointStart",Zi(e)));var r,u,l=Dt,s=Ce,c=Ee,p=Rt,m=Ft,g=Vt,x=Gt,b=Kt,w=Qt,C=Jt,M=Ut,L=ce;if(i){var A=St,S=qt,B=jt,N=Ot,H=Yt;if(!z)var k=Nt,P=Bt}if(Rt=Rn("arrowKeys"),Ft=Rn("controls"),Vt=Rn("nav"),Gt=Rn("touch"),Ot=Rn("center"),Kt=Rn("mouseDrag"),Qt=Rn("autoplay"),Jt=Rn("autoplayHoverPause"),Ut=Rn("autoplayResetOnVisibility"),i&&(Ce=Rn("disable"),St=Rn("fixedWidth"),It=Rn("speed"),qt=Rn("autoHeight"),jt=Rn("controlsText"),Yt=Rn("autoplayText"),Xt=Rn("autoplayTimeout"),z||(Bt=Rn("edgePadding"),Nt=Rn("gutter"))),An(Ce),Ht=kn(),lt&&!At||Ce||(mi(),lt||(Ji(),a=!0)),(St||At)&&(oe=Ti(),ve=se()),(i||St)&&(Dt=Rn("items"),kt=Rn("slideBy"),(u=Dt!==l)&&(St||At||(ve=se()),En())),i&&Ce!==s&&(Ce?ni():function(){if(!Me)return;if(_t.disabled=!1,ft.className+=be,Li(),Wt)for(var t=ee;t--;)Z&&E(pt[t]),E(pt[ne-t-1]);if(!Z)for(var e=ce,n=ce+mt;e<n;e++){var i=pt[e],o=e<ce+Dt?nt:at;i.style.left=100*(e-ce)/Dt+"%",h(i,o)}ti(),Me=!1}()),Te&&(i||St||At)&&(Ee=_n())!==c&&(Ee?(Ai(Ei(Bn(0))),ei()):(!function(){if(!Le)return;Bt&&z&&(ct.style.margin="");if(ee)for(var t="tns-transparent",e=ee;e--;)Z&&y(pt[e],t),y(pt[ne-e-1],t);ti(),Le=!1}(),a=!0)),An(Ce||Ee),Qt||(Jt=Ut=!1),Rt!==p&&(Rt?O(n,He):D(n,He)),Ft!==m&&(Ft?Qe?E(Qe):(Ye&&E(Ye),Je&&E(Je)):Qe?T(Qe):(Ye&&T(Ye),Je&&T(Je))),Vt!==g&&(Vt?(E($e),_i()):T($e)),Gt!==x&&(Gt?O(ft,Oe,t.preventScrollOnTouch):D(ft,Oe)),Kt!==b&&(Kt?O(ft,De):D(ft,De)),Qt!==w&&(Qt?(hn&&E(hn),fn||vn||Ii()):(hn&&T(hn),fn&&zi())),Jt!==C&&(Jt?O(ft,Be):D(ft,Be)),Ut!==M&&(Ut?O(n,Ne):D(n,Ne)),i){if(St===A&&Ot===N||(a=!0),qt!==S&&(qt||(ct.style.height="")),Ft&&jt!==B&&(Ye.innerHTML=jt[0],Je.innerHTML=jt[1]),hn&&Yt!==H){var R=Qt?1:0,I=hn.innerHTML,W=I.length-H[R].length;I.substring(W)===H[R]&&(hn.innerHTML=I.substring(0,W)+Yt[R])}}else Ot&&(St||At)&&(a=!0);if((u||St&&!At)&&(en=Ui(),_i()),(r=ce!==L)?(xe.emit("indexChanged",Zi()),a=!0):u?r||di():(St||At)&&(ri(),hi(),ii()),u&&!Z&&function(){for(var t=ce+Math.min(mt,Dt),e=ne;e--;){var n=pt[e];e>=ce&&e<t?(h(n,"tns-moving"),n.style.left=100*(e-ce)/Dt+"%",h(n,nt),y(n,at)):n.style.left&&(n.style.left="",h(n,at),y(n,nt)),y(n,it)}setTimeout((function(){v(pt,(function(t){y(t,"tns-moving")}))}),300)}(),!Ce&&!Ee){if(i&&!z&&(Bt===P&&Nt===k||(ct.style.cssText=In(Bt,Nt,St,It,qt)),lt)){Z&&(ft.style.width=zn(St,Nt,Dt));var q=Wn(St,Nt,Dt)+qn(Nt);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(_t,d(_t)-1),f(_t,"#"+we+" > .tns-item",q,d(_t))}qt&&ci(),a&&(Li(),fe=ce)}i&&xe.emit("newBreakpointEnd",Zi(e))}}function _n(){if(!St&&!At)return mt<=(Ot?Dt-(Dt-1)/2:Dt);var t=St?(St+Nt)*mt:gt[mt],e=Bt?Ht+2*Bt:Ht+Nt;return Ot&&(e-=St?(Ht-St)/2:(Ht-(gt[ce+1]-gt[ce]-Nt))/2),t<=e}function Zn(){for(var t in ut=0,U)t=parseInt(t),ht>=t&&(ut=t)}function $n(){!Qt&&hn&&T(hn),!Vt&&$e&&T($e),Ft||(Qe?T(Qe):(Ye&&T(Ye),Je&&T(Je)))}function ti(){Qt&&hn&&E(hn),Vt&&$e&&E($e),Ft&&(Qe?E(Qe):(Ye&&E(Ye),Je&&E(Je)))}function ei(){if(!Le){if(Bt&&(ct.style.margin="0px"),ee)for(var t="tns-transparent",e=ee;e--;)Z&&h(pt[e],t),h(pt[ne-e-1],t);$n(),Le=!0}}function ni(){if(!Me){if(_t.disabled=!0,ft.className=ft.className.replace(be.substring(1),""),C(ft,["style"]),Wt)for(var t=ee;t--;)Z&&T(pt[t]),T(pt[ne-t-1]);if(lt&&Z||C(ct,["style"]),!Z)for(var e=ce,n=ce+mt;e<n;e++){var i=pt[e];C(i,["style"]),y(i,nt),y(i,at)}$n(),Me=!0}}function ii(){var t=oi();bt.innerHTML!==t&&(bt.innerHTML=t)}function oi(){var t=ai(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function ai(t){null==t&&(t=Ei());var e,n,i,o=ce;if(Ot||Bt?(At||St)&&(n=-(parseFloat(t)+Bt),i=n+Ht+2*Bt):At&&(n=gt[ce],i=n+Ht),At)gt.forEach((function(t,a){a<ne&&((Ot||Bt)&&t<=n+.5&&(o=a),i-t>=.5&&(e=a))}));else{if(St){var a=St+Nt;Ot||Bt?(o=Math.floor(n/a),e=Math.ceil(i/a-1)):e=o+Math.ceil(Ht/a)-1}else if(Ot||Bt){var r=Dt-1;if(Ot?(o-=r/2,e=ce+r/2):e=ce+r,Bt){var u=Bt*Dt/Ht;o-=u,e+=u}o=Math.floor(o),e=Math.ceil(e)}else e=o+Dt-1;o=Math.max(o,0),e=Math.min(e,ne-1)}return[o,e]}function ri(){if(Zt&&!Ce){var t=ai();t.push($t),si.apply(null,t).forEach((function(t){if(!m(t,Fe)){var e={};e[K]=function(t){t.stopPropagation()},O(t,e),O(t,je),t.src=x(t,"data-src");var n=x(t,"data-srcset");n&&(t.srcset=n),h(t,"loading")}}))}}function ui(t){h(t,"loaded"),li(t)}function li(t){h(t,Fe),y(t,"loading"),D(t,je)}function si(t,e,n){var i=[];for(n||(n="img");t<=e;)v(pt[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function ci(){var t=si.apply(null,ai());e((function(){fi(t,pi)}))}function fi(t,n){return xt?n():(t.forEach((function(e,n){!Zt&&e.complete&&li(e),m(e,Fe)&&t.splice(n,1)})),t.length?void e((function(){fi(t,n)})):n())}function di(){ri(),hi(),ii(),wi(),function(){if(Vt&&(an=on>=0?on:Hn(),on=-1,an!==rn)){var t=Ze[rn],e=Ze[an];w(t,{tabindex:"-1","aria-label":ln+(rn+1)}),y(t,un),w(e,{"aria-label":ln+(an+1)+sn}),C(e,"tabindex"),h(e,un),rn=an}}()}function vi(t,e){for(var n=[],i=t,o=Math.min(t+e,ne);i<o;i++)n.push(pt[i].offsetHeight);return Math.max.apply(null,n)}function pi(){var t=qt?vi(ce,Dt):vi(ee,mt),e=rt||ct;e.style.height!==t&&(e.style.height=t+"px")}function mi(){gt=[0];var t=lt?"left":"top",e=lt?"right":"bottom",n=pt[0].getBoundingClientRect()[t];v(pt,(function(i,o){o&&gt.push(i.getBoundingClientRect()[t]-n),o===ne-1&&gt.push(i.getBoundingClientRect()[e]-n)}))}function hi(){var t=ai(),e=t[0],n=t[1];v(pt,(function(t,i){i>=e&&i<=n?g(t,"aria-hidden")&&(C(t,["aria-hidden","tabindex"]),h(t,qe)):g(t,"aria-hidden")||(w(t,{"aria-hidden":"true",tabindex:"-1"}),y(t,qe))}))}function yi(t){return t.nodeName.toLowerCase()}function gi(t){return"button"===yi(t)}function xi(t){return"true"===t.getAttribute("aria-disabled")}function bi(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function wi(){if(Ft&&!zt&&!Wt){var t=Ge?Ye.disabled:xi(Ye),e=Ke?Je.disabled:xi(Je),n=ce<=de,i=!zt&&ce>=ve;n&&!t&&bi(Ge,Ye,!0),!n&&t&&bi(Ge,Ye,!1),i&&!e&&bi(Ke,Je,!0),!i&&e&&bi(Ke,Je,!1)}}function Ci(t,e){F&&(t.style[F]=e)}function Mi(t){return null==t&&(t=ce),At?(Ht-(Bt?Nt:0)-(gt[t+1]-gt[t]-Nt))/2:St?(Ht-St)/2:(Dt-1)/2}function Ti(){var t=Ht+(Bt?Nt:0)-(St?(St+Nt)*ne:gt[ne]);return Ot&&!Wt&&(t=St?-(St+Nt)*(ne-1)-Mi():Mi(ne-1)-gt[ne-1]),t>0&&(t=0),t}function Ei(t){var e;if(null==t&&(t=ce),lt&&!At)if(St)e=-(St+Nt)*t,Ot&&(e+=Mi());else{var n=W?ne:Dt;Ot&&(t-=Mi()),e=100*-t/n}else e=-gt[t],Ot&&At&&(e+=Mi());return ie&&(e=Math.max(e,oe)),e+=!lt||At||St?"px":"%"}function Li(t){Ci(ft,"0s"),Ai(t)}function Ai(t){null==t&&(t=Ei()),ft.style[re]=ue+t+le}function Si(t,e,n,i){var o=t+Dt;Wt||(o=Math.min(o,ne));for(var a=t;a<o;a++){var r=pt[a];i||(r.style.left=100*(a-ce)/Dt+"%"),ot&&j&&(r.style[j]=r.style[G]=ot*(a-t)/1e3+"s"),y(r,e),h(r,n),i&&te.push(r)}}function Bi(t,e){ae&&En(),(ce!==fe||e)&&(xe.emit("indexChanged",Zi()),xe.emit("transitionStart",Zi()),qt&&ci(),fn&&t&&["click","keydown"].indexOf(t.type)>=0&&zi(),ye=!0,Ln())}function Ni(t){return t.toLowerCase().replace(/-/g,"")}function Hi(t){if(Z||ye){if(xe.emit("transitionEnd",Zi(t)),!Z&&te.length>0)for(var e=0;e<te.length;e++){var n=te[e];n.style.left="",G&&j&&(n.style[G]="",n.style[j]=""),y(n,it),h(n,at)}if(!t||!Z&&t.target.parentNode===ft||t.target===ft&&Ni(t.propertyName)===Ni(re)){if(!ae){var i=ce;En(),ce!==i&&(xe.emit("indexChanged",Zi()),Li())}"inner"===_&&xe.emit("innerLoaded",Zi()),ye=!1,fe=ce}}}function Oi(t,e){if(!Ee)if("prev"===t)Di(e,-1);else if("next"===t)Di(e,1);else{if(ye){if(pe)return;Hi()}var n=Nn(),i=0;if("first"===t?i=-n:"last"===t?i=Z?mt-Dt-n:mt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(mt-1,t))),i=t-n)),!Z&&i&&Math.abs(i)<Dt){var o=i>0?1:-1;i+=ce+i-mt>=de?mt*o:2*mt*o*-1}ce+=i,Z&&Wt&&(ce<de&&(ce+=mt),ce>ve&&(ce-=mt)),Nn(ce)!==Nn(fe)&&Bi(e)}}function Di(t,e){if(ye){if(pe)return;Hi()}var n;if(!e){for(var i=ji(t=Fi(t));i!==Qe&&[Ye,Je].indexOf(i)<0;)i=i.parentNode;var o=[Ye,Je].indexOf(i);o>=0&&(n=!0,e=0===o?-1:1)}if(zt){if(ce===de&&-1===e)return void Oi("last",t);if(ce===ve&&1===e)return void Oi("first",t)}e&&(ce+=kt*e,At&&(ce=Math.floor(ce)),Bi(n||t&&"keydown"===t.type?t:null))}function ki(){cn=setInterval((function(){Di(null,mn)}),Xt),fn=!0}function Pi(){clearInterval(cn),fn=!1}function Ri(t,e){w(hn,{"data-action":t}),hn.innerHTML=gn[0]+t+gn[1]+e}function Ii(){ki(),hn&&Ri("stop",Yt[1])}function zi(){Pi(),hn&&Ri("start",Yt[0])}function Wi(){fn?(zi(),vn=!0):(Ii(),vn=!1)}function qi(t){t.focus()}function Fi(t){return Vi(t=t||l.event)?t.changedTouches[0]:t}function ji(t){return t.target||l.event.srcElement}function Vi(t){return t.type.indexOf("touch")>=0}function Gi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Ki(){return a=Cn.y-wn.y,r=Cn.x-wn.x,e=Math.atan2(a,r)*(180/Math.PI),n=me,i=!1,(o=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":o<=n&&(i="vertical"),i===t.axis;var e,n,i,o,a,r}function Qi(t){if(ye){if(pe)return;Hi()}Qt&&fn&&Pi(),Mn=!0,bn&&(i(bn),bn=null);var e=Fi(t);xe.emit(Vi(t)?"touchStart":"dragStart",Zi(t)),!Vi(t)&&["img","a"].indexOf(yi(ji(t)))>=0&&Gi(t),Cn.x=wn.x=e.clientX,Cn.y=wn.y=e.clientY,Z&&(xn=parseFloat(ft.style[re].replace(ue,"")),Ci(ft,"0s"))}function Xi(t){if(Mn){var n=Fi(t);Cn.x=n.clientX,Cn.y=n.clientY,Z?bn||(bn=e((function(){!function t(n){if(!he)return void(Mn=!1);i(bn),Mn&&(bn=e((function(){t(n)})));"?"===he&&(he=Ki());if(he){!Ve&&Vi(n)&&(Ve=!0);try{n.type&&xe.emit(Vi(n)?"touchMove":"dragMove",Zi(n))}catch(t){}var o=xn,a=Tn(Cn,wn);if(!lt||St||At)o+=a,o+="px";else o+=W?a*Dt*100/((Ht+Nt)*ne):100*a/(Ht+Nt),o+="%";ft.style[re]=ue+o+le}}(t)}))):("?"===he&&(he=Ki()),he&&(Ve=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Ve&&t.preventDefault()}}function Yi(n){if(Mn){bn&&(i(bn),bn=null),Z&&Ci(ft,""),Mn=!1;var o=Fi(n);Cn.x=o.clientX,Cn.y=o.clientY;var a=Tn(Cn,wn);if(Math.abs(a)){if(!Vi(n)){var r=ji(n);O(r,{click:function t(e){Gi(e),D(r,{click:t})}})}Z?bn=e((function(){if(lt&&!At){var t=-a*Dt/(Ht+Nt);t=a>0?Math.floor(t):Math.ceil(t),ce+=t}else{var e=-(xn+a);if(e<=0)ce=de;else if(e>=gt[ne-1])ce=ve;else for(var i=0;i<ne&&e>=gt[i];)ce=i,e>gt[i]&&a<0&&(ce+=1),i++}Bi(n,a),xe.emit(Vi(n)?"touchEnd":"dragEnd",Zi(n))})):he&&Di(n,a>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(Ve=!1),me&&(he="?"),Qt&&!fn&&ki()}function Ji(){(rt||ct).style.height=gt[ce+Dt]-gt[ce]+"px"}function Ui(){var t=St?(St+Nt)*mt/Ht:mt/Dt;return Math.min(Math.ceil(t),mt)}function _i(){if(Vt&&!Re&&en!==nn){var t=nn,e=en,n=E;for(nn>en&&(t=en,e=nn,n=T);t<e;)n(Ze[t]),t++;nn=en}}function Zi(t){return{container:ft,slideItems:pt,navContainer:$e,navItems:Ze,controlsContainer:Qe,hasControls:ke,prevButton:Ye,nextButton:Je,items:Dt,slideBy:kt,cloneCount:ee,slideCount:mt,slideCountNew:ne,index:ce,indexCached:fe,displayIndex:Sn(),navCurrentIndex:an,navCurrentIndexCached:rn,pages:en,pagesCached:nn,sheet:_t,isOn:yt,event:t||{}}}X&&console.warn("No slides found in",t.container)};window.addEventListener("load",(function(){document.body.classList.contains("woocommerce")&&function(){const t=document.querySelector(".shop-sidebar");if(null===t)return;const e=document.querySelector("html");(document.querySelectorAll(".nv-sidebar-toggle")||[]).forEach(n=>{n.addEventListener("click",(function(n){n.preventDefault(),t.classList.toggle("sidebar-open"),e.classList.toggle("menu-openend")}))})}();const t=document.querySelectorAll(".exclusive-products li").length;document.body.classList.contains("nv-exclusive")&&t>4&&function(){if(null===document.querySelector("ul.exclusive-products"))return!1;P({container:"ul.exclusive-products",slideBy:1,arrowKeys:!0,loop:!0,autoplay:!0,items:4,edgePadding:0,autoplayButtonOutput:!1,autoplayHoverPause:!0,speed:1e3,autoplayTimeout:3e3,autoplayButton:!1,controls:!1,navPosition:"bottom",navContainer:".dots-nav",navAsThumbnails:!0,responsive:{0:{items:2,gutter:21},768:{items:4,gutter:27},1200:{items:4,gutter:30}}})}()}))}();