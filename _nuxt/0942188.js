(window.webpackJsonp=window.webpackJsonp||[]).push([[0,3,4,5,6,7,8],{325:function(t,e,n){var content=n(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("c98db6d6",content,!0,{sourceMap:!1})},362:function(t,e,n){"use strict";n(325)},363:function(t,e,n){var o=n(58)(!1);o.push([t.i,".link-site svg{fill:inherit;transition:fill .5s ease}",""]),t.exports=o},364:function(t,e,n){"use strict";n.r(e);var o={name:"LandSwitcher",props:{isWeb:{type:Boolean,required:!0}},data:function(){return{}},computed:{switcherClass:function(){return this.isWeb?"land-switcher--webdesign":"land-switcher--identity"}},watch:{},mounted:function(){this.isWeb?this.$gsap.set(".land__content--style",{opacity:0,y:100,display:"none"}):this.$gsap.set(".land__content--web",{opacity:0,y:100,display:"none"})},methods:{}},r=n(21),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land-switcher",class:t.switcherClass},[n("div",{staticClass:"land-switcher__inner"},[n("a",{staticClass:"land-switcher__btn d-f-center",attrs:{href:"#webdesign"},on:{click:function(e){return e.preventDefault(),t.$emit("switchToggle")}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 187.3 109"}},[n("path",{attrs:{d:"M72.5,0l49.8,83.5L172.1,0l15.2,0l-65,109L57.3,0L72.5,0z M130,0l-21.2,35.5l-7.6-12.7L114.8,0L130,0z M15.2,0  L65,83.5l13.5-22.7l7.6,12.7L65,109L0,0L15.2,0z"}})]),t._v(" "),n("span",[t._v("Сайт")])]),t._v(" "),n("a",{staticClass:"land-switcher__btn d-f-center",attrs:{href:"#identity"},on:{click:function(e){return e.preventDefault(),t.$emit("switchToggle")}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 13 109"}},[n("path",{attrs:{d:"M0,0h13v109H0V0z"}})]),t._v(" "),n("span",[t._v("Стиль")])])])])}),[],!1,null,null,null);e.default=component.exports},365:function(t,e,n){"use strict";n.r(e);var o={name:"LandPlayIcon",props:{isDivider:{type:Boolean,required:!1,default:!0}},data:function(){return{isPlay:!1}},computed:{},mounted:function(){this.$nextTick((function(){}))},methods:{playVideo:function(){var t,e=this,n=this.$refs.playIcon;if((t=this.isDivider?n.parentNode.parentNode:n.parentNode).querySelector(".video")){var video=t.querySelector(".video");video.play(),this.isPlay=!0,video.addEventListener("ended",(function(){e.isPlay=!1,video.load()}))}else this.isPlay=!0}}},r=n(21),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isDivider?n("div",{staticClass:"land-divider__play",class:{"d-none":t.isPlay}},[n("div",{ref:"playIcon",staticClass:"play-icon",attrs:{"data-cursor":""},on:{click:t.playVideo}}),t._v(" "),n("p",{staticClass:"land-text"},[t._v("\n    Посмотреть видео о сайте\n  ")])]):n("div",{ref:"playIcon",staticClass:"play-icon",class:{"d-none":t.isPlay},attrs:{"data-cursor":""},on:{click:t.playVideo}})}),[],!1,null,null,null);e.default=component.exports},367:function(t,e,n){"use strict";n.r(e);var o={name:"LandHeader",props:{headerText:{type:String,default:"",required:!0},isDual:{type:Boolean,default:!1,required:!1},isWeb:{type:Boolean,required:!1},url:{type:String,required:!0}},data:function(){return{}},computed:{},watch:{},mounted:function(){},methods:{}},r=n(21),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land__header d-f-center"},[n("p",{staticClass:"land__header-item land-text"},[t._v("\n    "+t._s(t.headerText)+"\n  ")]),t._v(" "),t.isDual?n("LandSwitcher",{staticClass:"land__header-item",attrs:{"is-web":t.isWeb},on:{switchToggle:function(e){return t.$emit("switchToggle")}}}):t._e(),t._v(" "),n("LandLink",{staticClass:"land__header-item",attrs:{url:t.url}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandSwitcher:n(364).default,LandLink:n(368).default})},368:function(t,e,n){"use strict";n.r(e);var o={name:"LandLink",props:{url:{type:String,required:!0}},data:function(){return{}},computed:{}},r=(n(362),n(21)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"link-site",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}},[n("svg",{attrs:{width:"37",height:"37",viewBox:"0 0 37 37",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36ZM18.5 37C28.7173 37 37 28.7173 37 18.5C37 8.28273 28.7173 0 18.5 0C8.28273 0 0 8.28273 0 18.5C0 28.7173 8.28273 37 18.5 37Z"}}),t._v(" "),n("path",{attrs:{d:"M21.4028 24.2877L18.5199 27.1726C17.9504 27.7492 17.2724 28.2076 16.5249 28.5212C15.7775 28.8348 14.9754 28.9975 14.1647 29C13.3541 29.0024 12.551 28.8446 11.8017 28.5355C11.0523 28.2264 10.3716 27.7722 9.79859 27.199C9.2256 26.6258 8.7717 25.945 8.46303 25.1957C8.15435 24.4465 7.997 23.6436 8.00004 22.8333C8.00308 22.023 8.16645 21.2213 8.48073 20.4743C8.79502 19.7274 9.25401 19.05 9.83129 18.4812L12.7142 15.5962C12.9118 15.4055 13.1764 15.2999 13.4511 15.3023C13.7258 15.3047 13.9885 15.4148 14.1827 15.609C14.377 15.8031 14.4871 16.0658 14.4895 16.3403C14.4919 16.6149 14.3863 16.8794 14.1955 17.0769L11.3126 19.966C10.9345 20.3413 10.6345 20.7877 10.4297 21.2794C10.225 21.7711 10.1196 22.2985 10.1196 22.8311C10.1196 23.3637 10.225 23.891 10.4297 24.3827C10.6345 24.8744 10.9345 25.3208 11.3126 25.6961C12.0836 26.4323 13.1088 26.8431 14.1751 26.8431C15.2413 26.8431 16.2666 26.4323 17.0376 25.6961L19.9216 22.8112C20.1191 22.6204 20.3838 22.5149 20.6584 22.5173C20.9331 22.5196 21.1958 22.6298 21.3901 22.8239C21.5843 23.0181 21.6945 23.2807 21.6969 23.5553C21.6993 23.8298 21.5937 24.0944 21.4028 24.2919V24.2877ZM21.363 14.1543C21.4597 14.0543 21.5753 13.9745 21.7031 13.9196C21.8309 13.8647 21.9683 13.8358 22.1074 13.8346C22.2465 13.8334 22.3845 13.8599 22.5132 13.9126C22.642 13.9652 22.7589 14.043 22.8573 14.1413C22.9557 14.2396 23.0334 14.3565 23.0861 14.4852C23.1388 14.6139 23.1653 14.7518 23.1641 14.8909C23.1629 15.0299 23.134 15.1673 23.0791 15.2951C23.0242 15.4228 22.9444 15.5384 22.8443 15.635L15.637 22.8457C15.5403 22.9457 15.4247 23.0255 15.2969 23.0804C15.1691 23.1353 15.0317 23.1642 14.8926 23.1654C14.7535 23.1666 14.6155 23.1401 14.4868 23.0874C14.358 23.0348 14.2411 22.957 14.1427 22.8587C14.0443 22.7604 13.9666 22.6435 13.9139 22.5148C13.8612 22.3861 13.8347 22.2482 13.8359 22.1091C13.8371 21.9701 13.866 21.8327 13.9209 21.7049C13.9758 21.5772 14.0556 21.4616 14.1557 21.365L21.363 14.1543ZM27.1687 18.5199L24.2858 21.4038C24.0872 21.5961 23.8216 21.7036 23.5451 21.7036C23.2687 21.7036 23.003 21.5961 22.8045 21.4038C22.6081 21.2074 22.4978 20.9411 22.4978 20.6634C22.4978 20.3858 22.6081 20.1195 22.8045 19.9231L25.6874 17.034C26.0655 16.6587 26.3655 16.2123 26.5703 15.7206C26.775 15.2289 26.8804 14.7015 26.8804 14.1689C26.8804 13.6363 26.775 13.109 26.5703 12.6173C26.3655 12.1256 26.0655 11.6792 25.6874 11.3039C24.9164 10.5677 23.8912 10.1569 22.8249 10.1569C21.7587 10.1569 20.7334 10.5677 19.9624 11.3039L17.0784 14.193C16.8809 14.3838 16.6162 14.4893 16.3416 14.4869C16.0669 14.4845 15.8042 14.3744 15.6099 14.1803C15.4157 13.9861 15.3055 13.7235 15.3031 13.4489C15.3007 13.1743 15.4063 12.9098 15.5972 12.7123L18.4801 9.8274C19.0496 9.25076 19.7276 8.79244 20.4751 8.47882C21.2225 8.1652 22.0246 8.00248 22.8353 8.00003C23.6459 7.99758 24.449 8.15544 25.1983 8.46453C25.9477 8.77363 26.6284 9.22784 27.2014 9.80102C27.7744 10.3742 28.2283 11.055 28.537 11.8043C28.8456 12.5535 29.003 13.3564 29 14.1667C28.9969 14.977 28.8336 15.7787 28.5193 16.5257C28.205 17.2726 27.746 17.95 27.1687 18.5188V18.5199Z"}})])])}),[],!1,null,null,null);e.default=component.exports},370:function(t,e,n){"use strict";n.r(e);var o={name:"LandDivider",props:{isVideo:{type:Boolean,default:!1},videoUrl:{type:String,default:"",required:!1},poster:{type:String,default:"",required:!1},bgImage:{type:String,default:"",required:!1}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},r=n(21),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land-divider",attrs:{"data-parallax":"container"}},[n("div",{staticClass:"land-divider__content"},[n("div",{staticClass:"land-divider__inner"},[t.isVideo?n("video",{staticClass:"video lazyloaded",attrs:{muted:"",preload:"auto",playsinline:"","webkit-playsinline":"true",poster:t.poster},domProps:{muted:!0}},[n("source",{attrs:{src:t.videoUrl,type:"video/mp4"}})]):n("div",{staticClass:"parallax"},[n("img",{staticClass:"lazyload img-full",attrs:{"data-src":t.bgImage,alt:"img"}})])]),t._v(" "),n("LandPlayIcon",{class:{isVideo:t.isVideo}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandPlayIcon:n(365).default})},371:function(t,e,n){"use strict";n.r(e);var o={name:"LandNext",props:{frontImage:{type:String,default:"",required:!0},backImage:{type:String,default:"",required:!0},url:{type:String,required:!0}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},r=n(21),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-next"},[n("div",{staticClass:"container"},[n("h4",{staticClass:"project-next__title"},[t._v("\n      Следующий проект\n    ")]),t._v(" "),n("nuxt-link",{staticClass:"project-preview-item js-3d-object",attrs:{to:"/project/"+t.url}},[n("div",{staticClass:"image cover js-3d-object__back",attrs:{"data-rotation":"2.5"}},[n("img",{staticClass:"lazyload",attrs:{"data-src":t.backImage,alt:"logobg"}})]),t._v(" "),n("div",{staticClass:"project-next__logo d-f-center image contain js-3d-object__forward",attrs:{"data-rotation":"5","data-move":"10"}},[n("img",{staticClass:"lazyload project-next__logo-img",attrs:{"data-src":t.frontImage,alt:"logo"}})])])],1)])}),[],!1,null,null,null);e.default=component.exports},455:function(t,e,n){"use strict";n(19),n(40),n(9),n(26),n(466);var o=n(34),r=["light-theme","dark-theme"],l=["project-inpool","project-nce","project-navigator","project-majolika","project-route66","project-patron","project-twonp","project-uplast","project-dstrct","project-dexsa","project-centerbass"];e.a={transition:{name:"project",appear:!0,css:!1,enter:function(t,e){this.$store.getters["preloader/isFinished"]?t.classList.contains("project__inner")&&(o.e.getAnimations(),o.g.toggle(),console.log("Scrollbar.toggle()"),o.e.enterAnimation.play().eventCallback("onComplete",(function(){console.log("Landing.enterAnimation onComplete"),e()}))):e()},leave:function(t,e){o.e.enterAnimation?(o.g.toggle(),console.log("Landing.reverse start"),o.e.enterAnimation.reverse(0).eventCallback("onReverseComplete",(function(){console.log("Landing.reverse onReverseComplete"),e()}))):e()}},computed:{isDark:function(){var t=this.$store.getters["theme/isDark"];return t?"dark-theme":"light-theme"},isPreloaderFinished:function(){return this.$store.getters["preloader/isFinished"]}},watch:{isPreloaderFinished:function(){o.g.ready=!0,o.g.toggle(),this.updateLoco()}},mounted:function(){var t,e,n=this;(t=document.body.classList).remove.apply(t,l),(e=document.documentElement.classList).remove.apply(e,r),document.documentElement.classList.add(this.landThemeClass),document.body.classList.add(this.$route.name);var c=this;this.$nextTick((function(){var t,e,r,l;(n.$animateFake3d(),n.isPreloaderFinished&&(o.g.ready=!0),window.addEventListener("resize",o.g.toggleResize),document.querySelector(".parallax"))&&(n.$device.isDesktop?null===(t=n.$refs)||void 0===t||null===(e=t.scroller)||void 0===e||e.locomotive.on("scroll",(function(t){c.parallax(t)})):document.querySelector(".mob-scroll").addEventListener("scroll",n.parallax));n.$device.isDesktop?null===(r=n.$refs)||void 0===r||null===(l=r.scroller)||void 0===l||l.locomotive.on("scroll",(function(t){c.headerActive(t)})):document.querySelector(".mob-scroll").addEventListener("scroll",c.headerActive);setTimeout((function(){n.updateLoco()}),900),setTimeout((function(){n.updateLoco()}),1200);var d=document.querySelectorAll("img");setTimeout((function(){d.forEach((function(image){image.onload=function(){n.$nuxt.$emit("update-locomotive")}}))}),500)}))},destroyed:function(){window.removeEventListener("resize",o.g.toggleResize),document.querySelector(".header").classList.remove("active-bg")},methods:{updateLoco:function(){var t,e,n;null===(t=this.$refs)||void 0===t||null===(e=t.scroller)||void 0===e||null===(n=e.locomotive)||void 0===n||n.update()},switchToggle:function(){var t,e,n=this;(this.isWeb=!this.isWeb,this.$device.isDesktop&&o.g.toggle(),this.isWeb?(this.$gsap.to(".land__content--style",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--web",{opacity:1,y:0,display:"block",duration:.5,delay:.4})):(this.$gsap.to(".land__content--web",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--style",{opacity:1,y:0,display:"block",duration:.5,delay:.4})),this.$device.isDesktop)?(null===(t=this.$refs)||void 0===t||null===(e=t.scroller)||void 0===e||e.locomotive.scrollTo("top",{duration:900,disableLerp:!0,offset:0}),setTimeout((function(){n.updateLoco(),o.g.toggle()}),600)):this.$gsap.to(".mob-scroll",{duration:.9,scrollTo:0})},parallax:function(t){var e,n=window.innerHeight,o=document.querySelectorAll(".parallax");e=this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop,o.forEach((function(element){var t=element.closest('[data-parallax="container"]').offsetTop,o=t-e-n;n>element.getBoundingClientRect().top&&e<2*element.clientHeight+t&&(t>n&&t?(element.style.transform="translate3d(0px, ".concat((o/2*.3).toFixed(2),"px, 0px)"),element.style.webkitTransform="translate3d(0px, ".concat((o/2*.3).toFixed(2),"px, 0px)")):(element.style.transform="translate3d(0px, ".concat((-e/2*.3).toFixed(2),"px, 0px)"),element.style.webkitTransform="translate3d(0px, ".concat((-e/2*.3).toFixed(2),"px, 0px)")))}))},headerActive:function(t){(this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop)>(document.querySelector(".fc")?document.querySelector(".fc").clientHeight:700)-70?document.querySelector(".header").classList.add("active-bg"):document.querySelector(".header").classList.remove("active-bg")}}}},466:function(t,e,n){"use strict";var o=n(4),r=n(1),l=n(5),c=n(60),d=n(223),f=n(219),v=n(6),m=r.RangeError,h=r.String,C=Math.floor,y=l(f),_=l("".slice),L=l(1..toFixed),x=function(t,e,n){return 0===e?n:e%2==1?x(t,e-1,n*t):x(t*t,e/2,n)},w=function(data,t,e){for(var n=-1,o=e;++n<6;)o+=t*data[n],data[n]=o%1e7,o=C(o/1e7)},k=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=C(n/t),n=n%t*1e7},$=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=h(data[t]);s=""===s?e:s+y("0",7-e.length)+e}return s};o({target:"Number",proto:!0,forced:v((function(){return"0.000"!==L(8e-5,3)||"1"!==L(.9,0)||"1.25"!==L(1.255,2)||"1000000000000000128"!==L(0xde0b6b3a7640080,0)}))||!v((function(){L({})}))},{toFixed:function(t){var e,n,o,r,l=d(this),f=c(t),data=[0,0,0,0,0,0],v="",C="0";if(f<0||f>20)throw m("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return h(l);if(l<0&&(v="-",l=-l),l>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(l*x(2,69,1))-69)<0?l*x(2,-e,1):l/x(2,e,1),n*=4503599627370496,(e=52-e)>0){for(w(data,0,n),o=f;o>=7;)w(data,1e7,0),o-=7;for(w(data,x(10,o,1),0),o=e-1;o>=23;)k(data,1<<23),o-=23;k(data,1<<o),w(data,1,1),k(data,2),C=$(data)}else w(data,0,n),w(data,1<<-e,0),C=$(data)+y("0",f);return C=f>0?v+((r=C.length)<=f?"0."+y("0",f-r)+C:_(C,0,r-f)+"."+_(C,r-f)):v+C}})}}]);