(window.webpackJsonp=window.webpackJsonp||[]).push([[16,2,3,4,5,6,7,8],{326:function(t,e,n){var content=n(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("c98db6d6",content,!0,{sourceMap:!1})},327:function(t,e,n){"use strict";n.r(e);var r={name:"LandSwitcher",props:{isWeb:{type:Boolean,required:!0}},data:function(){return{}},computed:{switcherClass:function(){return this.isWeb?"land-switcher--webdesign":"land-switcher--identity"}},watch:{},mounted:function(){this.isWeb?this.$gsap.set(".land__content--style",{opacity:0,y:100,display:"none"}):this.$gsap.set(".land__content--web",{opacity:0,y:100,display:"none"})},methods:{}},o=n(21),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land-switcher",class:t.switcherClass},[n("div",{staticClass:"land-switcher__inner"},[n("a",{staticClass:"land-switcher__btn d-f-center",attrs:{href:"#webdesign"},on:{click:function(e){return e.preventDefault(),t.$emit("switchToggle")}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 187.3 109"}},[n("path",{attrs:{d:"M72.5,0l49.8,83.5L172.1,0l15.2,0l-65,109L57.3,0L72.5,0z M130,0l-21.2,35.5l-7.6-12.7L114.8,0L130,0z M15.2,0  L65,83.5l13.5-22.7l7.6,12.7L65,109L0,0L15.2,0z"}})]),t._v(" "),n("span",[t._v("Сайт")])]),t._v(" "),n("a",{staticClass:"land-switcher__btn d-f-center",attrs:{href:"#identity"},on:{click:function(e){return e.preventDefault(),t.$emit("switchToggle")}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 13 109"}},[n("path",{attrs:{d:"M0,0h13v109H0V0z"}})]),t._v(" "),n("span",[t._v("Стиль")])])])])}),[],!1,null,null,null);e.default=component.exports},328:function(t,e,n){"use strict";n.r(e);var r={name:"LandNext",props:{frontImage:{type:String,default:"",required:!0},backImage:{type:String,default:"",required:!0},url:{type:String,required:!0}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},o=n(21),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-next"},[n("div",{staticClass:"container"},[n("h4",{staticClass:"project-next__title"},[t._v("\n      Следующий проект\n    ")]),t._v(" "),n("nuxt-link",{staticClass:"project-preview-item js-3d-object",attrs:{to:"/project/"+t.url}},[n("div",{staticClass:"image cover js-3d-object__back",attrs:{"data-rotation":"2.5"}},[n("img",{staticClass:"lazyload",attrs:{"data-src":t.backImage,alt:"logobg"}})]),t._v(" "),n("div",{staticClass:"project-next__logo d-f-center image contain js-3d-object__forward",attrs:{"data-rotation":"5","data-move":"10"}},[n("img",{staticClass:"lazyload project-next__logo-img",attrs:{"data-src":t.frontImage,alt:"logo"}})])])],1)])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,n){"use strict";n(19),n(40),n(9),n(26),n(330);var r=n(31),o=["light-theme","dark-theme"],l=["project-inpool","project-nce","project-navigator","project-majolika","project-route66","project-patron","project-twonp","project-uplast","project-dstrct","project-dexsa","project-centerbass"];e.a={transition:{name:"project",appear:!0,css:!1,enter:function(t,e){this.$store.getters["preloader/isFinished"]?t.classList.contains("project__inner")&&(r.e.getAnimations(),r.g.toggle(),r.e.enterAnimation.play().eventCallback("onComplete",(function(){e()}))):e()},leave:function(t,e){r.e.enterAnimation?(r.g.toggle(),r.e.enterAnimation.reverse(0).eventCallback("onReverseComplete",(function(){e()}))):e()}},computed:{isDark:function(){var t=this.$store.getters["theme/isDark"];return t?"dark-theme":"light-theme"},isPreloaderFinished:function(){return this.$store.getters["preloader/isFinished"]}},watch:{isPreloaderFinished:function(){r.g.ready=!0,r.g.toggle(),this.updateLoco()}},mounted:function(){var t,e,n=this;(t=document.body.classList).remove.apply(t,l),(e=document.documentElement.classList).remove.apply(e,o),document.documentElement.classList.add(this.landThemeClass),document.body.classList.add(this.$route.name);var c=this;this.$nextTick((function(){var t,e,o,l;(n.$animateFake3d(),n.isPreloaderFinished&&(r.g.ready=!0,setTimeout((function(){n.updateLoco()}),300)),window.addEventListener("resize",r.g.toggleResize),document.querySelector(".parallax"))&&(n.$device.isDesktop?null===(t=n.$refs)||void 0===t||null===(e=t.scroller)||void 0===e||e.locomotive.on("scroll",(function(t){c.parallax(t)})):document.querySelector(".mob-scroll").addEventListener("scroll",n.parallax));n.$device.isDesktop?null===(o=n.$refs)||void 0===o||null===(l=o.scroller)||void 0===l||l.locomotive.on("scroll",(function(t){c.headerActive(t)})):document.querySelector(".mob-scroll").addEventListener("scroll",c.headerActive);setTimeout((function(){n.updateLoco()}),500),setTimeout((function(){n.updateLoco()}),900)}))},destroyed:function(){window.removeEventListener("resize",r.g.toggleResize),document.querySelector(".header").classList.remove("active-bg")},methods:{updateLoco:function(){var t,e,n;null===(t=this.$refs)||void 0===t||null===(e=t.scroller)||void 0===e||null===(n=e.locomotive)||void 0===n||n.update()},switchToggle:function(){var t,e,n=this;(this.isWeb=!this.isWeb,this.$device.isDesktop&&r.g.toggle(),this.isWeb?(this.$gsap.to(".land__content--style",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--web",{opacity:1,y:0,display:"block",duration:.5,delay:.4})):(this.$gsap.to(".land__content--web",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--style",{opacity:1,y:0,display:"block",duration:.5,delay:.4})),this.$device.isDesktop)?(null===(t=this.$refs)||void 0===t||null===(e=t.scroller)||void 0===e||e.locomotive.scrollTo("top",{duration:900,disableLerp:!0,offset:0}),setTimeout((function(){n.updateLoco(),r.g.toggle()}),600)):this.$gsap.to(".mob-scroll",{duration:.9,scrollTo:0})},parallax:function(t){var e,n=window.innerHeight,r=document.querySelectorAll(".parallax");e=this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop,r.forEach((function(element){var t=element.closest('[data-parallax="container"]').offsetTop,r=t-e-n;n>element.getBoundingClientRect().top&&e<2*element.clientHeight+t&&(t>n&&t?(element.style.transform="translate3d(0px, ".concat((r/2*.3).toFixed(2),"px, 0px)"),element.style.webkitTransform="translate3d(0px, ".concat((r/2*.3).toFixed(2),"px, 0px)")):(element.style.transform="translate3d(0px, ".concat((-e/2*.3).toFixed(2),"px, 0px)"),element.style.webkitTransform="translate3d(0px, ".concat((-e/2*.3).toFixed(2),"px, 0px)")))}))},headerActive:function(t){if(document.querySelector(".fc")){var e=document.querySelector(".fc").clientHeight;(this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop)>e-70?document.querySelector(".header").classList.add("active-bg"):document.querySelector(".header").classList.remove("active-bg")}}}}},330:function(t,e,n){"use strict";var r=n(4),o=n(1),l=n(5),c=n(60),d=n(220),v=n(219),f=n(6),_=o.RangeError,m=o.String,C=Math.floor,h=l(v),y=l("".slice),x=l(1..toFixed),L=function(t,e,n){return 0===e?n:e%2==1?L(t,e-1,n*t):L(t*t,e/2,n)},k=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=C(r/1e7)},w=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=C(n/t),n=n%t*1e7},j=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=m(data[t]);s=""===s?e:s+h("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:f((function(){return"0.000"!==x(8e-5,3)||"1"!==x(.9,0)||"1.25"!==x(1.255,2)||"1000000000000000128"!==x(0xde0b6b3a7640080,0)}))||!f((function(){x({})}))},{toFixed:function(t){var e,n,r,o,l=d(this),v=c(t),data=[0,0,0,0,0,0],f="",C="0";if(v<0||v>20)throw _("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return m(l);if(l<0&&(f="-",l=-l),l>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(l*L(2,69,1))-69)<0?l*L(2,-e,1):l/L(2,e,1),n*=4503599627370496,(e=52-e)>0){for(k(data,0,n),r=v;r>=7;)k(data,1e7,0),r-=7;for(k(data,L(10,r,1),0),r=e-1;r>=23;)w(data,1<<23),r-=23;w(data,1<<r),k(data,1,1),w(data,2),C=j(data)}else k(data,0,n),k(data,1<<-e,0),C=j(data)+h("0",v);return C=v>0?f+((o=C.length)<=v?"0."+h("0",v-o)+C:y(C,0,o-v)+"."+y(C,o-v)):f+C}})},331:function(t,e,n){"use strict";n(326)},332:function(t,e,n){var r=n(58)(!1);r.push([t.i,".link-site svg{fill:inherit;transition:fill .5s ease}",""]),t.exports=r},333:function(t,e,n){"use strict";n.r(e);var r={name:"LandPlayIcon",props:{isDivider:{type:Boolean,required:!1,default:!0}},data:function(){return{isPlay:!1}},computed:{},mounted:function(){this.$nextTick((function(){}))},methods:{playVideo:function(){var t,e=this,n=this.$refs.playIcon;if((t=this.isDivider?n.parentNode.parentNode:n.parentNode).querySelector(".video")){var video=t.querySelector(".video");video.play(),this.isPlay=!0,video.addEventListener("ended",(function(){e.isPlay=!1,video.load()}))}else this.isPlay=!0}}},o=n(21),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isDivider?n("div",{staticClass:"land-divider__play",class:{"d-none":t.isPlay}},[n("div",{ref:"playIcon",staticClass:"play-icon",attrs:{"data-cursor":""},on:{click:t.playVideo}}),t._v(" "),n("p",{staticClass:"land-text"},[t._v("\n    Посмотреть видео о сайте\n  ")])]):n("div",{ref:"playIcon",staticClass:"play-icon",class:{"d-none":t.isPlay},attrs:{"data-cursor":""},on:{click:t.playVideo}})}),[],!1,null,null,null);e.default=component.exports},334:function(t,e,n){"use strict";n.r(e);var r={name:"LandLink",props:{url:{type:String,required:!0}},data:function(){return{}},computed:{}},o=(n(331),n(21)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"link-site",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}},[n("svg",{attrs:{width:"37",height:"37",viewBox:"0 0 37 37",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36ZM18.5 37C28.7173 37 37 28.7173 37 18.5C37 8.28273 28.7173 0 18.5 0C8.28273 0 0 8.28273 0 18.5C0 28.7173 8.28273 37 18.5 37Z"}}),t._v(" "),n("path",{attrs:{d:"M21.4028 24.2877L18.5199 27.1726C17.9504 27.7492 17.2724 28.2076 16.5249 28.5212C15.7775 28.8348 14.9754 28.9975 14.1647 29C13.3541 29.0024 12.551 28.8446 11.8017 28.5355C11.0523 28.2264 10.3716 27.7722 9.79859 27.199C9.2256 26.6258 8.7717 25.945 8.46303 25.1957C8.15435 24.4465 7.997 23.6436 8.00004 22.8333C8.00308 22.023 8.16645 21.2213 8.48073 20.4743C8.79502 19.7274 9.25401 19.05 9.83129 18.4812L12.7142 15.5962C12.9118 15.4055 13.1764 15.2999 13.4511 15.3023C13.7258 15.3047 13.9885 15.4148 14.1827 15.609C14.377 15.8031 14.4871 16.0658 14.4895 16.3403C14.4919 16.6149 14.3863 16.8794 14.1955 17.0769L11.3126 19.966C10.9345 20.3413 10.6345 20.7877 10.4297 21.2794C10.225 21.7711 10.1196 22.2985 10.1196 22.8311C10.1196 23.3637 10.225 23.891 10.4297 24.3827C10.6345 24.8744 10.9345 25.3208 11.3126 25.6961C12.0836 26.4323 13.1088 26.8431 14.1751 26.8431C15.2413 26.8431 16.2666 26.4323 17.0376 25.6961L19.9216 22.8112C20.1191 22.6204 20.3838 22.5149 20.6584 22.5173C20.9331 22.5196 21.1958 22.6298 21.3901 22.8239C21.5843 23.0181 21.6945 23.2807 21.6969 23.5553C21.6993 23.8298 21.5937 24.0944 21.4028 24.2919V24.2877ZM21.363 14.1543C21.4597 14.0543 21.5753 13.9745 21.7031 13.9196C21.8309 13.8647 21.9683 13.8358 22.1074 13.8346C22.2465 13.8334 22.3845 13.8599 22.5132 13.9126C22.642 13.9652 22.7589 14.043 22.8573 14.1413C22.9557 14.2396 23.0334 14.3565 23.0861 14.4852C23.1388 14.6139 23.1653 14.7518 23.1641 14.8909C23.1629 15.0299 23.134 15.1673 23.0791 15.2951C23.0242 15.4228 22.9444 15.5384 22.8443 15.635L15.637 22.8457C15.5403 22.9457 15.4247 23.0255 15.2969 23.0804C15.1691 23.1353 15.0317 23.1642 14.8926 23.1654C14.7535 23.1666 14.6155 23.1401 14.4868 23.0874C14.358 23.0348 14.2411 22.957 14.1427 22.8587C14.0443 22.7604 13.9666 22.6435 13.9139 22.5148C13.8612 22.3861 13.8347 22.2482 13.8359 22.1091C13.8371 21.9701 13.866 21.8327 13.9209 21.7049C13.9758 21.5772 14.0556 21.4616 14.1557 21.365L21.363 14.1543ZM27.1687 18.5199L24.2858 21.4038C24.0872 21.5961 23.8216 21.7036 23.5451 21.7036C23.2687 21.7036 23.003 21.5961 22.8045 21.4038C22.6081 21.2074 22.4978 20.9411 22.4978 20.6634C22.4978 20.3858 22.6081 20.1195 22.8045 19.9231L25.6874 17.034C26.0655 16.6587 26.3655 16.2123 26.5703 15.7206C26.775 15.2289 26.8804 14.7015 26.8804 14.1689C26.8804 13.6363 26.775 13.109 26.5703 12.6173C26.3655 12.1256 26.0655 11.6792 25.6874 11.3039C24.9164 10.5677 23.8912 10.1569 22.8249 10.1569C21.7587 10.1569 20.7334 10.5677 19.9624 11.3039L17.0784 14.193C16.8809 14.3838 16.6162 14.4893 16.3416 14.4869C16.0669 14.4845 15.8042 14.3744 15.6099 14.1803C15.4157 13.9861 15.3055 13.7235 15.3031 13.4489C15.3007 13.1743 15.4063 12.9098 15.5972 12.7123L18.4801 9.8274C19.0496 9.25076 19.7276 8.79244 20.4751 8.47882C21.2225 8.1652 22.0246 8.00248 22.8353 8.00003C23.6459 7.99758 24.449 8.15544 25.1983 8.46453C25.9477 8.77363 26.6284 9.22784 27.2014 9.80102C27.7744 10.3742 28.2283 11.055 28.537 11.8043C28.8456 12.5535 29.003 13.3564 29 14.1667C28.9969 14.977 28.8336 15.7787 28.5193 16.5257C28.205 17.2726 27.746 17.95 27.1687 18.5188V18.5199Z"}})])])}),[],!1,null,null,null);e.default=component.exports},335:function(t,e,n){"use strict";n.r(e);var r={name:"LandDivider",props:{isVideo:{type:Boolean,default:!1},videoUrl:{type:String,default:"",required:!1},poster:{type:String,default:"",required:!1},bgImage:{type:String,default:"",required:!1}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},o=n(21),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land-divider",attrs:{"data-parallax":"container"}},[n("div",{staticClass:"land-divider__content"},[n("div",{staticClass:"land-divider__inner"},[t.isVideo?n("video",{staticClass:"video lazyloaded",attrs:{muted:"",preload:"auto",playsinline:"","webkit-playsinline":"true",poster:t.poster},domProps:{muted:!0}},[n("source",{attrs:{src:t.videoUrl,type:"video/mp4"}})]):n("div",{staticClass:"parallax"},[n("img",{staticClass:"lazyload img-full",attrs:{"data-src":t.bgImage,alt:"img"}})])]),t._v(" "),n("LandPlayIcon",{class:{isVideo:t.isVideo}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandPlayIcon:n(333).default})},336:function(t,e,n){"use strict";n.r(e);var r={name:"LandHeader",props:{headerText:{type:String,default:"",required:!0},isDual:{type:Boolean,default:!1,required:!1},isWeb:{type:Boolean,required:!1},url:{type:String,required:!0}},data:function(){return{}},computed:{},watch:{},mounted:function(){},methods:{}},o=n(21),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land__header d-f-center"},[n("p",{staticClass:"land__header-item land-text"},[t._v("\n    "+t._s(t.headerText)+"\n  ")]),t._v(" "),t.isDual?n("LandSwitcher",{staticClass:"land__header-item",attrs:{"is-web":t.isWeb},on:{switchToggle:function(e){return t.$emit("switchToggle")}}}):t._e(),t._v(" "),n("LandLink",{staticClass:"land__header-item",attrs:{url:t.url}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandSwitcher:n(327).default,LandLink:n(334).default})},337:function(t,e,n){"use strict";n.r(e);var r={name:"LandVideo",props:{isImg:{type:Boolean,default:!1,reqiured:!0},urlImg:{type:String,default:"",reqiured:!0},urlVideo:{type:String,default:"",reqiured:!0},loop:{type:Boolean,default:!0,reqiured:!0},autoplay:{type:Boolean,default:!0,reqiured:!0},videoClass:{type:String,default:"",reqiured:!0},preload:{type:String,default:"auto",reqiured:!0}},data:function(){return{}},computed:{},mounted:function(){this.$nextTick((function(){}))},methods:{}},o=n(21),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land-border",class:{"land-border--img":t.isImg}},[n("video",{staticClass:"video lazyloaded land-border__item",class:t.videoClass,attrs:{autoplay:t.autoplay,muted:"",preload:t.preload,loop:t.loop,playsinline:"","webkit-playsinline":"true"},domProps:{muted:!0}},[n("source",{attrs:{src:t.urlVideo,type:"video/mp4"}})]),t._v(" "),t.isImg?n("div",{staticClass:"land-border land-border--sm"},[n("img",{staticClass:"lazyloaded img-full land-border__item",attrs:{src:t.urlImg,alt:"concept"}})]):t._e()])}),[],!1,null,null,null);e.default=component.exports},345:function(t,e,n){t.exports=n.p+"img/next-project-front.f3ecaca.svg"},346:function(t,e,n){t.exports=n.p+"img/next-project.858d2dd.jpg"},362:function(t,e,n){t.exports=n.p+"img/dstrct-bg-video.58bdc34.jpg"},363:function(t,e,n){t.exports=n.p+"img/goal.ff7dd4b.jpg"},364:function(t,e,n){t.exports=n.p+"img/land1.4677739.jpg"},367:function(t,e,n){t.exports=n.p+"img/projects.ba18683.png"},461:function(t,e,n){var content=n(488);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("4cfddaea",content,!0,{sourceMap:!1})},483:function(t,e,n){t.exports=n.p+"videos/1.b505687.mp4"},484:function(t,e,n){t.exports=n.p+"videos/2.556a16d.mp4"},485:function(t,e,n){t.exports=n.p+"videos/3.482057f.mp4"},486:function(t,e,n){t.exports=n.p+"videos/4.79fe37d.mp4"},487:function(t,e,n){"use strict";n(461)},488:function(t,e,n){var r=n(58)(!1);r.push([t.i,"body.project-dstrct{background-color:#0b0e11}body.project-dstrct .header{background-color:#0b0e11;transition-delay:.5s;-webkit-backdrop-filter:none;backdrop-filter:none}body.project-dstrct .nav{background-color:#0b0e11}body.project-dstrct .nav.active-nav .nav-s-area__container:before{background:linear-gradient(0deg,#0b0e11,transparent 49%,transparent 51%,#0b0e11);transition:opacity 0s}.dstrct .land-border{border-color:#7d7d7d;background-color:#0b0e11}.dstrct .land-border__item{filter:drop-shadow(5px 20px 47px rgba(0,0,0,.2))}.dstrct__divider .land-divider__content:after,.dstrct__divider .land-divider__content:before{background-color:#0b0e11}",""]),t.exports=r},516:function(t,e,n){"use strict";n.r(e);var r={name:"ProjectDstrct",mixins:[n(329).a],data:function(){return{landThemeClass:"dark-theme"}},head:function(){return{title:"Проект - Dstrct"}}},o=(n(487),n(21)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("LocomotiveScroll",{ref:"scroller",staticClass:"content project__inner",class:{"mob-scroll":!t.$device.isDesktop},attrs:{"getted-options":{smooth:t.$device.isDesktop,direction:"vertical",smartphone:{smooth:t.$device.isDesktop,direction:"vertical"},tablet:{smooth:t.$device.isDesktop,direction:"vertical"}}}},[r("div",{staticClass:"scrollable__container land"},[r("div",{staticClass:"land__inner dstrct"},[r("LandHeader",{attrs:{"header-text":"Стильный сайт для интерьерного бюро",url:"https://dstrct.ru/"}}),t._v(" "),r("div",{staticClass:"land__content dstrct__content"},[r("div",{staticClass:"land__block d-f-center column ptb container"},[r("LandVideo",{attrs:{"url-video":n(483),"is-img":!0,"url-img":n(364)}})],1),t._v(" "),r("div",{staticClass:"land__block dstrct__goal d-f-center column"},[r("div",{staticClass:"container"},[r("h2",{staticClass:"land-title"},[t._v("\n              Задача\n            ")]),t._v(" "),r("p",{staticClass:"land-text"},[t._v("\n              Презентовать услуги студии и показать все достоинсва проектов\n              компании через призму стиля. Доказать, что качественный интерьер\n              стоит дорого.\n            ")])]),t._v(" "),r("div",{staticClass:"land__full-w"},[r("div",{staticClass:"dstrct__goal-img"},[r("img",{staticClass:"lazyloaded img-full",attrs:{src:n(363),alt:"goal"}})])])]),t._v(" "),r("div",{staticClass:"land__block dstrct__solution d-f-center container column pt"},[r("h2",{staticClass:"land-title"},[t._v("\n            Решение\n          ")]),t._v(" "),r("p",{staticClass:"land-text"},[t._v("\n            Сделали один из самых запоминающихся на рынке проектирования интерьеров сайт. Добавили возможность изучения всех услуг на одной странице и позволили пользователю досконально изучить каждый проект.\n          ")]),t._v(" "),r("div",{staticClass:"land__full-w dstrct__solution-content"},[r("div",{staticClass:"land-circles"},[r("LandVideo",{attrs:{"url-video":n(484)}})],1)])]),t._v(" "),r("div",{staticClass:"land__block dstrct__service d-f-center container column ptb"},[r("h2",{staticClass:"land-title"},[t._v("\n            Все услуги "),r("br"),t._v("\n            в одном месте\n          ")]),t._v(" "),r("p",{staticClass:"land-text"},[t._v("\n            Было решено часть услуг сделать выпадающими списками на главной, а часть более подробно расписать на отдельных страницах. При этом все услуги находятся в основном навигаторе.\n          ")]),t._v(" "),r("div",{staticClass:"land__full-w dstrct__service-content"},[r("LandVideo",{attrs:{"url-video":n(485)}})],1)]),t._v(" "),r("div",{staticClass:"land__block dstrct__projects d-f-center column"},[r("div",{staticClass:"container"},[r("h2",{staticClass:"land-title"},[t._v("\n              подробно "),r("br"),t._v("\n              о каждом проекте\n            ")]),t._v(" "),r("p",{staticClass:"land-text"},[t._v("\n              Основа данного бизнеса – портфолио. Поэтому был разработан шаблон, по которому заказчик мог рассказать о каждом проекте всё то, что хочет знать потенциальный заказчик.\n            ")])]),t._v(" "),r("div",{staticClass:"land__full-w"},[r("div",{staticClass:"dstrct__projects-img"},[r("img",{staticClass:"lazyloaded img-full",attrs:{src:n(367),alt:"projects"}})])])]),t._v(" "),r("div",{staticClass:"land__block dstrct__portfolio d-f-center container column ptb"},[r("h2",{staticClass:"land-title"},[t._v("\n            Удобное портфолио\n          ")]),t._v(" "),r("p",{staticClass:"land-text"},[t._v("\n            Помимо выборки лучших работ на главное, есть отдельная страница, где собранны абсолютно все проекты бюро.\n          ")]),t._v(" "),r("div",{staticClass:"land__full-w dstrct__portfolio-content"},[r("LandVideo",{attrs:{"url-video":n(486)}})],1)]),t._v(" "),r("LandDivider",{staticClass:"dstrct__divider",attrs:{"bg-image":n(362)}})],1)],1),t._v(" "),r("LandNext",{staticClass:"project-next--centerbass",attrs:{url:"centerbass","back-image":n(346),"front-image":n(345)}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandHeader:n(336).default,LandVideo:n(337).default,LandDivider:n(335).default,LandNext:n(328).default})}}]);