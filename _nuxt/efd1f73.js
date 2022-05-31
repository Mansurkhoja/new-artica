(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2,3,4,5,6,7,8],{326:function(t,e,n){var content=n(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("c98db6d6",content,!0,{sourceMap:!1})},327:function(t,e,n){"use strict";n.r(e);var o={name:"LandSwitcher",props:{isWeb:{type:Boolean,required:!0}},data:function(){return{}},computed:{switcherClass:function(){return this.isWeb?"land-switcher--webdesign":"land-switcher--identity"}},watch:{},mounted:function(){this.isWeb?this.$gsap.set(".land__content--style",{opacity:0,y:100,display:"none"}):this.$gsap.set(".land__content--web",{opacity:0,y:100,display:"none"})},methods:{}},r=n(21),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land-switcher",class:t.switcherClass},[n("div",{staticClass:"land-switcher__inner"},[n("a",{staticClass:"land-switcher__btn d-f-center",attrs:{href:"#webdesign"},on:{click:function(e){return e.preventDefault(),t.$emit("switchToggle")}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 187.3 109"}},[n("path",{attrs:{d:"M72.5,0l49.8,83.5L172.1,0l15.2,0l-65,109L57.3,0L72.5,0z M130,0l-21.2,35.5l-7.6-12.7L114.8,0L130,0z M15.2,0  L65,83.5l13.5-22.7l7.6,12.7L65,109L0,0L15.2,0z"}})]),t._v(" "),n("span",[t._v("Сайт")])]),t._v(" "),n("a",{staticClass:"land-switcher__btn d-f-center",attrs:{href:"#identity"},on:{click:function(e){return e.preventDefault(),t.$emit("switchToggle")}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 13 109"}},[n("path",{attrs:{d:"M0,0h13v109H0V0z"}})]),t._v(" "),n("span",[t._v("Стиль")])])])])}),[],!1,null,null,null);e.default=component.exports},328:function(t,e,n){"use strict";n.r(e);var o={name:"LandNext",props:{frontImage:{type:String,default:"",required:!0},backImage:{type:String,default:"",required:!0},url:{type:String,required:!0}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},r=n(21),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-next"},[n("div",{staticClass:"container"},[n("h4",{staticClass:"project-next__title"},[t._v("\n      Следующий проект\n    ")]),t._v(" "),n("nuxt-link",{staticClass:"project-preview-item js-3d-object",attrs:{to:"/project/"+t.url}},[n("div",{staticClass:"image cover js-3d-object__back",attrs:{"data-rotation":"2.5"}},[n("img",{staticClass:"lazyload",attrs:{"data-src":t.backImage,alt:"logobg"}})]),t._v(" "),n("div",{staticClass:"project-next__logo d-f-center image contain js-3d-object__forward",attrs:{"data-rotation":"5","data-move":"10"}},[n("img",{staticClass:"lazyload project-next__logo-img",attrs:{"data-src":t.frontImage,alt:"logo"}})])])],1)])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,n){"use strict";n(19),n(40),n(9),n(26),n(330);var o=n(31),r=["light-theme","dark-theme"],l=["project-inpool","project-nce","project-navigator","project-majolika","project-route66","project-patron","project-twonp","project-uplast","project-dstrct","project-dexsa","project-centerbass"];e.a={transition:{name:"project",appear:!0,css:!1,enter:function(t,e){this.$store.getters["preloader/isFinished"]?t.classList.contains("project__inner")&&(o.e.getAnimations(),o.g.toggle(),console.log("Scrollbar.toggle()"),o.e.enterAnimation.play().eventCallback("onComplete",(function(){console.log("Landing.enterAnimation onComplete"),e()}))):e()},leave:function(t,e){o.e.enterAnimation?(o.g.toggle(),console.log("Landing.reverse start"),o.e.enterAnimation.reverse(0).eventCallback("onReverseComplete",(function(){console.log("Landing.reverse onReverseComplete"),e()}))):e()}},computed:{isDark:function(){var t=this.$store.getters["theme/isDark"];return t?"dark-theme":"light-theme"},isPreloaderFinished:function(){return this.$store.getters["preloader/isFinished"]}},watch:{isPreloaderFinished:function(){o.g.ready=!0,o.g.toggle(),this.updateLoco()}},mounted:function(){var t,e,n=this;(t=document.body.classList).remove.apply(t,l),(e=document.documentElement.classList).remove.apply(e,r),document.documentElement.classList.add(this.landThemeClass),document.body.classList.add(this.$route.name);var c=this;this.$nextTick((function(){var t,e,r,l;(n.$animateFake3d(),n.isPreloaderFinished&&(o.g.ready=!0),window.addEventListener("resize",o.g.toggleResize),document.querySelector(".parallax"))&&(n.$device.isDesktop?null===(t=n.$refs)||void 0===t||null===(e=t.scroller)||void 0===e||e.locomotive.on("scroll",(function(t){c.parallax(t)})):document.querySelector(".mob-scroll").addEventListener("scroll",n.parallax));n.$device.isDesktop?null===(r=n.$refs)||void 0===r||null===(l=r.scroller)||void 0===l||l.locomotive.on("scroll",(function(t){c.headerActive(t)})):document.querySelector(".mob-scroll").addEventListener("scroll",c.headerActive);setTimeout((function(){n.updateLoco()}),900);var d=document.querySelectorAll("img");setTimeout((function(){d.forEach((function(image){image.onload=function(){n.$nuxt.$emit("update-locomotive")}}))}),500)}))},destroyed:function(){window.removeEventListener("resize",o.g.toggleResize),document.querySelector(".header").classList.remove("active-bg")},methods:{updateLoco:function(){var t,e,n;null===(t=this.$refs)||void 0===t||null===(e=t.scroller)||void 0===e||null===(n=e.locomotive)||void 0===n||n.update()},switchToggle:function(){var t,e,n=this;(this.isWeb=!this.isWeb,this.$device.isDesktop&&o.g.toggle(),this.isWeb?(this.$gsap.to(".land__content--style",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--web",{opacity:1,y:0,display:"block",duration:.5,delay:.4})):(this.$gsap.to(".land__content--web",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--style",{opacity:1,y:0,display:"block",duration:.5,delay:.4})),this.$device.isDesktop)?(null===(t=this.$refs)||void 0===t||null===(e=t.scroller)||void 0===e||e.locomotive.scrollTo("top",{duration:900,disableLerp:!0,offset:0}),setTimeout((function(){n.updateLoco(),o.g.toggle()}),600)):this.$gsap.to(".mob-scroll",{duration:.9,scrollTo:0})},parallax:function(t){var e,n=window.innerHeight,o=document.querySelectorAll(".parallax");e=this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop,o.forEach((function(element){var t=element.closest('[data-parallax="container"]').offsetTop,o=t-e-n;n>element.getBoundingClientRect().top&&e<2*element.clientHeight+t&&(t>n&&t?(element.style.transform="translate3d(0px, ".concat((o/2*.3).toFixed(2),"px, 0px)"),element.style.webkitTransform="translate3d(0px, ".concat((o/2*.3).toFixed(2),"px, 0px)")):(element.style.transform="translate3d(0px, ".concat((-e/2*.3).toFixed(2),"px, 0px)"),element.style.webkitTransform="translate3d(0px, ".concat((-e/2*.3).toFixed(2),"px, 0px)")))}))},headerActive:function(t){(this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop)>(document.querySelector(".fc")?document.querySelector(".fc").clientHeight:700)-70?document.querySelector(".header").classList.add("active-bg"):document.querySelector(".header").classList.remove("active-bg")}}}},330:function(t,e,n){"use strict";var o=n(4),r=n(1),l=n(5),c=n(60),d=n(220),v=n(219),f=n(6),_=r.RangeError,m=r.String,C=Math.floor,h=l(v),y=l("".slice),x=l(1..toFixed),k=function(t,e,n){return 0===e?n:e%2==1?k(t,e-1,n*t):k(t*t,e/2,n)},L=function(data,t,e){for(var n=-1,o=e;++n<6;)o+=t*data[n],data[n]=o%1e7,o=C(o/1e7)},w=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=C(n/t),n=n%t*1e7},j=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=m(data[t]);s=""===s?e:s+h("0",7-e.length)+e}return s};o({target:"Number",proto:!0,forced:f((function(){return"0.000"!==x(8e-5,3)||"1"!==x(.9,0)||"1.25"!==x(1.255,2)||"1000000000000000128"!==x(0xde0b6b3a7640080,0)}))||!f((function(){x({})}))},{toFixed:function(t){var e,n,o,r,l=d(this),v=c(t),data=[0,0,0,0,0,0],f="",C="0";if(v<0||v>20)throw _("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return m(l);if(l<0&&(f="-",l=-l),l>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(l*k(2,69,1))-69)<0?l*k(2,-e,1):l/k(2,e,1),n*=4503599627370496,(e=52-e)>0){for(L(data,0,n),o=v;o>=7;)L(data,1e7,0),o-=7;for(L(data,k(10,o,1),0),o=e-1;o>=23;)w(data,1<<23),o-=23;w(data,1<<o),L(data,1,1),w(data,2),C=j(data)}else L(data,0,n),L(data,1<<-e,0),C=j(data)+h("0",v);return C=v>0?f+((r=C.length)<=v?"0."+h("0",v-r)+C:y(C,0,r-v)+"."+y(C,r-v)):f+C}})},331:function(t,e,n){"use strict";n(326)},332:function(t,e,n){var o=n(58)(!1);o.push([t.i,".link-site svg{fill:inherit;transition:fill .5s ease}",""]),t.exports=o},333:function(t,e,n){"use strict";n.r(e);var o={name:"LandPlayIcon",props:{isDivider:{type:Boolean,required:!1,default:!0}},data:function(){return{isPlay:!1}},computed:{},mounted:function(){this.$nextTick((function(){}))},methods:{playVideo:function(){var t,e=this,n=this.$refs.playIcon;if((t=this.isDivider?n.parentNode.parentNode:n.parentNode).querySelector(".video")){var video=t.querySelector(".video");video.play(),this.isPlay=!0,video.addEventListener("ended",(function(){e.isPlay=!1,video.load()}))}else this.isPlay=!0}}},r=n(21),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isDivider?n("div",{staticClass:"land-divider__play",class:{"d-none":t.isPlay}},[n("div",{ref:"playIcon",staticClass:"play-icon",attrs:{"data-cursor":""},on:{click:t.playVideo}}),t._v(" "),n("p",{staticClass:"land-text"},[t._v("\n    Посмотреть видео о сайте\n  ")])]):n("div",{ref:"playIcon",staticClass:"play-icon",class:{"d-none":t.isPlay},attrs:{"data-cursor":""},on:{click:t.playVideo}})}),[],!1,null,null,null);e.default=component.exports},334:function(t,e,n){"use strict";n.r(e);var o={name:"LandLink",props:{url:{type:String,required:!0}},data:function(){return{}},computed:{}},r=(n(331),n(21)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"link-site",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}},[n("svg",{attrs:{width:"37",height:"37",viewBox:"0 0 37 37",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36ZM18.5 37C28.7173 37 37 28.7173 37 18.5C37 8.28273 28.7173 0 18.5 0C8.28273 0 0 8.28273 0 18.5C0 28.7173 8.28273 37 18.5 37Z"}}),t._v(" "),n("path",{attrs:{d:"M21.4028 24.2877L18.5199 27.1726C17.9504 27.7492 17.2724 28.2076 16.5249 28.5212C15.7775 28.8348 14.9754 28.9975 14.1647 29C13.3541 29.0024 12.551 28.8446 11.8017 28.5355C11.0523 28.2264 10.3716 27.7722 9.79859 27.199C9.2256 26.6258 8.7717 25.945 8.46303 25.1957C8.15435 24.4465 7.997 23.6436 8.00004 22.8333C8.00308 22.023 8.16645 21.2213 8.48073 20.4743C8.79502 19.7274 9.25401 19.05 9.83129 18.4812L12.7142 15.5962C12.9118 15.4055 13.1764 15.2999 13.4511 15.3023C13.7258 15.3047 13.9885 15.4148 14.1827 15.609C14.377 15.8031 14.4871 16.0658 14.4895 16.3403C14.4919 16.6149 14.3863 16.8794 14.1955 17.0769L11.3126 19.966C10.9345 20.3413 10.6345 20.7877 10.4297 21.2794C10.225 21.7711 10.1196 22.2985 10.1196 22.8311C10.1196 23.3637 10.225 23.891 10.4297 24.3827C10.6345 24.8744 10.9345 25.3208 11.3126 25.6961C12.0836 26.4323 13.1088 26.8431 14.1751 26.8431C15.2413 26.8431 16.2666 26.4323 17.0376 25.6961L19.9216 22.8112C20.1191 22.6204 20.3838 22.5149 20.6584 22.5173C20.9331 22.5196 21.1958 22.6298 21.3901 22.8239C21.5843 23.0181 21.6945 23.2807 21.6969 23.5553C21.6993 23.8298 21.5937 24.0944 21.4028 24.2919V24.2877ZM21.363 14.1543C21.4597 14.0543 21.5753 13.9745 21.7031 13.9196C21.8309 13.8647 21.9683 13.8358 22.1074 13.8346C22.2465 13.8334 22.3845 13.8599 22.5132 13.9126C22.642 13.9652 22.7589 14.043 22.8573 14.1413C22.9557 14.2396 23.0334 14.3565 23.0861 14.4852C23.1388 14.6139 23.1653 14.7518 23.1641 14.8909C23.1629 15.0299 23.134 15.1673 23.0791 15.2951C23.0242 15.4228 22.9444 15.5384 22.8443 15.635L15.637 22.8457C15.5403 22.9457 15.4247 23.0255 15.2969 23.0804C15.1691 23.1353 15.0317 23.1642 14.8926 23.1654C14.7535 23.1666 14.6155 23.1401 14.4868 23.0874C14.358 23.0348 14.2411 22.957 14.1427 22.8587C14.0443 22.7604 13.9666 22.6435 13.9139 22.5148C13.8612 22.3861 13.8347 22.2482 13.8359 22.1091C13.8371 21.9701 13.866 21.8327 13.9209 21.7049C13.9758 21.5772 14.0556 21.4616 14.1557 21.365L21.363 14.1543ZM27.1687 18.5199L24.2858 21.4038C24.0872 21.5961 23.8216 21.7036 23.5451 21.7036C23.2687 21.7036 23.003 21.5961 22.8045 21.4038C22.6081 21.2074 22.4978 20.9411 22.4978 20.6634C22.4978 20.3858 22.6081 20.1195 22.8045 19.9231L25.6874 17.034C26.0655 16.6587 26.3655 16.2123 26.5703 15.7206C26.775 15.2289 26.8804 14.7015 26.8804 14.1689C26.8804 13.6363 26.775 13.109 26.5703 12.6173C26.3655 12.1256 26.0655 11.6792 25.6874 11.3039C24.9164 10.5677 23.8912 10.1569 22.8249 10.1569C21.7587 10.1569 20.7334 10.5677 19.9624 11.3039L17.0784 14.193C16.8809 14.3838 16.6162 14.4893 16.3416 14.4869C16.0669 14.4845 15.8042 14.3744 15.6099 14.1803C15.4157 13.9861 15.3055 13.7235 15.3031 13.4489C15.3007 13.1743 15.4063 12.9098 15.5972 12.7123L18.4801 9.8274C19.0496 9.25076 19.7276 8.79244 20.4751 8.47882C21.2225 8.1652 22.0246 8.00248 22.8353 8.00003C23.6459 7.99758 24.449 8.15544 25.1983 8.46453C25.9477 8.77363 26.6284 9.22784 27.2014 9.80102C27.7744 10.3742 28.2283 11.055 28.537 11.8043C28.8456 12.5535 29.003 13.3564 29 14.1667C28.9969 14.977 28.8336 15.7787 28.5193 16.5257C28.205 17.2726 27.746 17.95 27.1687 18.5188V18.5199Z"}})])])}),[],!1,null,null,null);e.default=component.exports},335:function(t,e,n){"use strict";n.r(e);var o={name:"LandDivider",props:{isVideo:{type:Boolean,default:!1},videoUrl:{type:String,default:"",required:!1},poster:{type:String,default:"",required:!1},bgImage:{type:String,default:"",required:!1}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},r=n(21),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land-divider",attrs:{"data-parallax":"container"}},[n("div",{staticClass:"land-divider__content"},[n("div",{staticClass:"land-divider__inner"},[t.isVideo?n("video",{staticClass:"video lazyloaded",attrs:{muted:"",preload:"auto",playsinline:"","webkit-playsinline":"true",poster:t.poster},domProps:{muted:!0}},[n("source",{attrs:{src:t.videoUrl,type:"video/mp4"}})]):n("div",{staticClass:"parallax"},[n("img",{staticClass:"lazyload img-full",attrs:{"data-src":t.bgImage,alt:"img"}})])]),t._v(" "),n("LandPlayIcon",{class:{isVideo:t.isVideo}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandPlayIcon:n(333).default})},336:function(t,e,n){"use strict";n.r(e);var o={name:"LandHeader",props:{headerText:{type:String,default:"",required:!0},isDual:{type:Boolean,default:!1,required:!1},isWeb:{type:Boolean,required:!1},url:{type:String,required:!0}},data:function(){return{}},computed:{},watch:{},mounted:function(){},methods:{}},r=n(21),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land__header d-f-center"},[n("p",{staticClass:"land__header-item land-text"},[t._v("\n    "+t._s(t.headerText)+"\n  ")]),t._v(" "),t.isDual?n("LandSwitcher",{staticClass:"land__header-item",attrs:{"is-web":t.isWeb},on:{switchToggle:function(e){return t.$emit("switchToggle")}}}):t._e(),t._v(" "),n("LandLink",{staticClass:"land__header-item",attrs:{url:t.url}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandSwitcher:n(327).default,LandLink:n(334).default})},337:function(t,e,n){"use strict";n.r(e);var o={name:"LandVideo",props:{isImg:{type:Boolean,default:!1,reqiured:!0},urlImg:{type:String,default:"",reqiured:!0},urlVideo:{type:String,default:"",reqiured:!0},loop:{type:Boolean,default:!0,reqiured:!0},autoplay:{type:Boolean,default:!0,reqiured:!0},videoClass:{type:String,default:"",reqiured:!0},preload:{type:String,default:"auto",reqiured:!0}},data:function(){return{}},computed:{},mounted:function(){this.$nextTick((function(){}))},methods:{}},r=n(21),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land-border",class:{"land-border--img":t.isImg}},[n("video",{staticClass:"video lazyloaded land-border__item",class:t.videoClass,attrs:{autoplay:t.autoplay,muted:"",preload:t.preload,loop:t.loop,playsinline:"","webkit-playsinline":"true"},domProps:{muted:!0}},[n("source",{attrs:{src:t.urlVideo,type:"video/mp4"}})]),t._v(" "),t.isImg?n("div",{staticClass:"land-border land-border--sm"},[n("img",{staticClass:"lazyloaded img-full land-border__item",attrs:{src:t.urlImg,alt:"concept"}})]):t._e()])}),[],!1,null,null,null);e.default=component.exports},341:function(t,e,n){t.exports=n.p+"img/3d.fe0ec7d.png"},342:function(t,e,n){t.exports=n.p+"img/centerbass-bg-video.f7ac49b.png"},343:function(t,e,n){t.exports=n.p+"img/land1.188f1d0.jpg"},344:function(t,e,n){t.exports=n.p+"img/nav.029cac2.png"},347:function(t,e,n){t.exports=n.p+"img/three.08bb877.png"},357:function(t,e,n){t.exports=n.p+"img/next-project-front.4c2fada.svg"},358:function(t,e,n){t.exports=n.p+"img/next-project.ad0ac8e.jpg"},459:function(t,e,n){var content=n(476);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("383f654b",content,!0,{sourceMap:!1})},471:function(t,e,n){t.exports=n.p+"videos/1.a0b3028.mp4"},472:function(t,e,n){t.exports=n.p+"videos/2.24752b8.mp4"},473:function(t,e,n){t.exports=n.p+"videos/3.b2f276f.mp4"},474:function(t,e,n){t.exports=n.p+"videos/4.fa71e3a.mp4"},475:function(t,e,n){"use strict";n(459)},476:function(t,e,n){var o=n(58)(!1);o.push([t.i,"body.project-centerbass,body.project-centerbass .header.active-bg,body.project-centerbass .nav{background-color:#487f80}body.project-centerbass .nav.active-nav .nav-s-area__container:before{background:linear-gradient(0deg,#487f80,transparent 49%,transparent 51%,#487f80);transition:opacity 0s}.centerbass .land-border{border-color:#c1c1c1;background-color:#487f80;box-shadow:5px 20px 47px rgba(0,0,0,.25)}.centerbass .land-border__item{filter:drop-shadow(5px 20px 47px rgba(0,0,0,.25))}.centerbass .land-circles:after,.centerbass .land-circles:before{border-color:#c1c1c1}.centerbass__solution-content .land-border{border:none;padding:0;box-shadow:none}.centerbass__3d{background:linear-gradient(180deg,#66a4a5,rgba(102,164,165,0));border-bottom-right-radius:0;border-bottom-left-radius:0}.centerbass .land-divider__content:after,.centerbass .land-divider__content:before{background:#487f80}",""]),t.exports=o},514:function(t,e,n){"use strict";n.r(e);var o={name:"ProjectCenterbass",mixins:[n(329).a],data:function(){return{landThemeClass:"dark-theme"}},head:function(){return{title:"Проект - Centerbass"}}},r=(n(475),n(21)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("LocomotiveScroll",{ref:"scroller",staticClass:"content project__inner",class:{"mob-scroll":!t.$device.isDesktop},attrs:{"getted-options":{smooth:t.$device.isDesktop,direction:"vertical",smartphone:{smooth:t.$device.isDesktop,direction:"vertical"},tablet:{smooth:t.$device.isDesktop,direction:"vertical"}}}},[o("div",{staticClass:"scrollable__container land"},[o("div",{staticClass:"land__inner centerbass"},[o("LandHeader",{attrs:{"header-text":"Сайт для компании Центр Бассейнов",url:"https://compasspools-centr.ru/"}}),t._v(" "),o("div",{staticClass:"land__content centerbass__content"},[o("div",{staticClass:"land__block d-f-center column ptb container"},[o("LandVideo",{attrs:{"url-video":n(471),"is-img":!0,"url-img":n(343)}})],1),t._v(" "),o("div",{staticClass:"land__block centerbass__goal d-f-center column container"},[o("h2",{staticClass:"land-title"},[t._v("\n            Задача\n          ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n            Создать удобный сайт, который максимально подробно и понятно\n            отображает технологии и преимущества компании.\n          ")]),t._v(" "),o("div",{staticClass:"land__full-w"},[o("div",{staticClass:"centerbass__goal-img"},[o("img",{staticClass:"lazyloaded img-full",attrs:{src:n(347),alt:"concepts"}})])])]),t._v(" "),o("div",{staticClass:"land__block centerbass__solution d-f-center column ptb"},[o("div",{staticClass:"container"},[o("h2",{staticClass:"land-title"},[t._v("\n              Решение\n            ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n              Сделали минималистичный сайт, который в интерактивной форме\n              презентует пользователю самую важную информацию о продукции\n              компании и ее возможностях.\n            ")])]),t._v(" "),o("div",{staticClass:"land__full-w centerbass__solution-content"},[o("div",{staticClass:"land-circles"},[o("LandVideo",{attrs:{"url-video":n(472)}})],1)])]),t._v(" "),o("div",{staticClass:"\n            land__block land__block--half\n            d-f-center\n            centerbass__palitr\n            container\n          "},[o("div",{staticClass:"land__block-item land__block-item--about"},[o("h2",{staticClass:"land-title"},[t._v("\n              цветовая палитра\n            ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n              Блок с палитрой был реализован в удобном для просмотра формате – с изображениями цветов, яркими описаниями и ассоциациями.\n            ")])]),t._v(" "),o("div",{staticClass:"land__block-item land__block-item--content"},[o("LandVideo",{staticClass:"land-border--h",attrs:{"url-video":n(473)}})],1)]),t._v(" "),o("div",{staticClass:"\n            land__block land__block--half land__block--reverse\n            d-f-center\n            centerbass__nav\n            container\n            pt\n          "},[o("div",{staticClass:"land__block-item land__block-item--about"},[o("h2",{staticClass:"land-title"},[t._v("\n              Понятная\n              навигация\n            ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n              На сайте так же была создана таблица просмотра и сравнения моделей. Пользователю доступна вся информация о продукции компании – внешний вид бассейнов и их технические характеристики.\n            ")])]),t._v(" "),o("div",{staticClass:"land__block-item"},[o("img",{staticClass:"lazyloaded img-full",attrs:{src:n(344),alt:"ui"}})])]),t._v(" "),o("div",{staticClass:"land__block ptb container d-f-center"},[o("div",{staticClass:"land__full-w"},[o("div",{staticClass:"land-circles"},[o("LandVideo",{attrs:{"url-video":n(474)}})],1)])]),t._v(" "),o("div",{staticClass:"land__block centerbass__3d ptb br-block"},[o("div",{staticClass:"container d-f-center column"},[o("h2",{staticClass:"land-title"},[t._v("\n              3D модель\n            ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n              Для полноценного понимания функционирования бассейнов, на сайте была создана 3D модель, которая демонстрирует пользователю устройство бассейнов и их технологические преимущества.\n            ")]),t._v(" "),o("div",{staticClass:"centerbass__3d-img pt"},[o("img",{staticClass:"lazyloaded img-full",attrs:{src:n(341),alt:"3d"}})])])]),t._v(" "),o("LandDivider",{staticClass:"centerbass__divider",attrs:{"bg-image":n(342)}})],1)],1),t._v(" "),o("LandNext",{staticClass:"project-next--dexsa",attrs:{url:"dexsa","back-image":n(358),"front-image":n(357)}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandHeader:n(336).default,LandVideo:n(337).default,LandDivider:n(335).default,LandNext:n(328).default})}}]);