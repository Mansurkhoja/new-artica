(window.webpackJsonp=window.webpackJsonp||[]).push([[20,2,3,4,5,6,7,8],{326:function(t,e,n){var content=n(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("c98db6d6",content,!0,{sourceMap:!1})},327:function(t,e,n){var content=n(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("53fd57f5",content,!0,{sourceMap:!1})},328:function(t,e,n){"use strict";n.r(e);var l={name:"LandNext",props:{frontImage:{type:String,default:"",required:!0},backImage:{type:String,default:"",required:!0},url:{type:String,required:!0}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},o=n(21),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-next"},[n("div",{staticClass:"container"},[n("h4",{staticClass:"project-next__title"},[t._v("\n      Следующий проект\n    ")]),t._v(" "),n("nuxt-link",{staticClass:"project-preview-item js-3d-object",attrs:{to:"/project/"+t.url}},[n("div",{staticClass:"image cover js-3d-object__back",attrs:{"data-rotation":"2.5"}},[n("img",{staticClass:"lazyload",attrs:{"data-src":t.backImage,alt:"logobg"}})]),t._v(" "),n("div",{staticClass:"project-next__logo d-f-center image contain js-3d-object__forward",attrs:{"data-rotation":"5","data-move":"10"}},[n("img",{staticClass:"lazyload project-next__logo-img",attrs:{"data-src":t.frontImage,alt:"logo"}})])])],1)])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,n){"use strict";n(326)},330:function(t,e,n){var l=n(58)(!1);l.push([t.i,".link-site svg{fill:inherit;transition:fill .5s ease}",""]),t.exports=l},331:function(t,e,n){"use strict";n.r(e);var l={name:"LandPlayIcon",props:{isDivider:{type:Boolean,required:!0,default:!0}},data:function(){return{isPlay:!1}},computed:{},mounted:function(){this.$nextTick((function(){}))},methods:{playVideo:function(){var t=this,e=this.$refs.playIcon.parentNode;if(e.querySelector(".video")){var video=e.querySelector(".video");video.play(),this.isPlay=!0,video.addEventListener("ended",(function(){t.isPlay=!1,video.load()}))}else this.isPlay=!0}}},o=n(21),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isDivider?n("div",{staticClass:"land-divider__play",class:{"d-none":t.isPlay}},[n("div",{ref:"playIcon",staticClass:"play-icon",attrs:{"data-cursor":""},on:{click:t.playVideo}}),t._v(" "),n("p",{staticClass:"land-text"},[t._v("\n    Посмотреть видео о сайте\n  ")])]):n("div",{ref:"playIcon",staticClass:"play-icon",class:{"d-none":t.isPlay},attrs:{"data-cursor":""},on:{click:t.playVideo}})}),[],!1,null,null,null);e.default=component.exports},332:function(t,e,n){"use strict";n.r(e);var l={name:"LandSwitcher",props:{isWeb:{type:Boolean,required:!0}},data:function(){return{}},computed:{switcherClass:function(){return this.isWeb?"land-switcher--webdesign":"land-switcher--identity"}},watch:{},mounted:function(){this.isWeb?this.$gsap.set(".land__content--style",{opacity:0,y:100,display:"none"}):this.$gsap.set(".land__content--web",{opacity:0,y:100,display:"none"})},methods:{}},o=(n(334),n(21)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land-switcher",class:t.switcherClass},[n("div",{staticClass:"land-switcher__inner"},[n("a",{staticClass:"land-switcher__btn d-f-center",attrs:{href:"#webdesign"},on:{click:function(e){return e.preventDefault(),t.$emit("switchToggle")}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 187.3 109"}},[n("path",{attrs:{d:"M72.5,0l49.8,83.5L172.1,0l15.2,0l-65,109L57.3,0L72.5,0z M130,0l-21.2,35.5l-7.6-12.7L114.8,0L130,0z M15.2,0  L65,83.5l13.5-22.7l7.6,12.7L65,109L0,0L15.2,0z"}})]),t._v(" "),n("span",[t._v("Сайт")])]),t._v(" "),n("a",{staticClass:"land-switcher__btn d-f-center",attrs:{href:"#identity"},on:{click:function(e){return e.preventDefault(),t.$emit("switchToggle")}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 13 109"}},[n("path",{attrs:{d:"M0,0h13v109H0V0z"}})]),t._v(" "),n("span",[t._v("Стиль")])])])])}),[],!1,null,null,null);e.default=component.exports},333:function(t,e,n){"use strict";n.r(e);var l={name:"LandLink",props:{url:{type:String,required:!0}},data:function(){return{}},computed:{}},o=(n(329),n(21)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"link-site",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}},[n("svg",{attrs:{width:"37",height:"37",viewBox:"0 0 37 37",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36ZM18.5 37C28.7173 37 37 28.7173 37 18.5C37 8.28273 28.7173 0 18.5 0C8.28273 0 0 8.28273 0 18.5C0 28.7173 8.28273 37 18.5 37Z"}}),t._v(" "),n("path",{attrs:{d:"M21.4028 24.2877L18.5199 27.1726C17.9504 27.7492 17.2724 28.2076 16.5249 28.5212C15.7775 28.8348 14.9754 28.9975 14.1647 29C13.3541 29.0024 12.551 28.8446 11.8017 28.5355C11.0523 28.2264 10.3716 27.7722 9.79859 27.199C9.2256 26.6258 8.7717 25.945 8.46303 25.1957C8.15435 24.4465 7.997 23.6436 8.00004 22.8333C8.00308 22.023 8.16645 21.2213 8.48073 20.4743C8.79502 19.7274 9.25401 19.05 9.83129 18.4812L12.7142 15.5962C12.9118 15.4055 13.1764 15.2999 13.4511 15.3023C13.7258 15.3047 13.9885 15.4148 14.1827 15.609C14.377 15.8031 14.4871 16.0658 14.4895 16.3403C14.4919 16.6149 14.3863 16.8794 14.1955 17.0769L11.3126 19.966C10.9345 20.3413 10.6345 20.7877 10.4297 21.2794C10.225 21.7711 10.1196 22.2985 10.1196 22.8311C10.1196 23.3637 10.225 23.891 10.4297 24.3827C10.6345 24.8744 10.9345 25.3208 11.3126 25.6961C12.0836 26.4323 13.1088 26.8431 14.1751 26.8431C15.2413 26.8431 16.2666 26.4323 17.0376 25.6961L19.9216 22.8112C20.1191 22.6204 20.3838 22.5149 20.6584 22.5173C20.9331 22.5196 21.1958 22.6298 21.3901 22.8239C21.5843 23.0181 21.6945 23.2807 21.6969 23.5553C21.6993 23.8298 21.5937 24.0944 21.4028 24.2919V24.2877ZM21.363 14.1543C21.4597 14.0543 21.5753 13.9745 21.7031 13.9196C21.8309 13.8647 21.9683 13.8358 22.1074 13.8346C22.2465 13.8334 22.3845 13.8599 22.5132 13.9126C22.642 13.9652 22.7589 14.043 22.8573 14.1413C22.9557 14.2396 23.0334 14.3565 23.0861 14.4852C23.1388 14.6139 23.1653 14.7518 23.1641 14.8909C23.1629 15.0299 23.134 15.1673 23.0791 15.2951C23.0242 15.4228 22.9444 15.5384 22.8443 15.635L15.637 22.8457C15.5403 22.9457 15.4247 23.0255 15.2969 23.0804C15.1691 23.1353 15.0317 23.1642 14.8926 23.1654C14.7535 23.1666 14.6155 23.1401 14.4868 23.0874C14.358 23.0348 14.2411 22.957 14.1427 22.8587C14.0443 22.7604 13.9666 22.6435 13.9139 22.5148C13.8612 22.3861 13.8347 22.2482 13.8359 22.1091C13.8371 21.9701 13.866 21.8327 13.9209 21.7049C13.9758 21.5772 14.0556 21.4616 14.1557 21.365L21.363 14.1543ZM27.1687 18.5199L24.2858 21.4038C24.0872 21.5961 23.8216 21.7036 23.5451 21.7036C23.2687 21.7036 23.003 21.5961 22.8045 21.4038C22.6081 21.2074 22.4978 20.9411 22.4978 20.6634C22.4978 20.3858 22.6081 20.1195 22.8045 19.9231L25.6874 17.034C26.0655 16.6587 26.3655 16.2123 26.5703 15.7206C26.775 15.2289 26.8804 14.7015 26.8804 14.1689C26.8804 13.6363 26.775 13.109 26.5703 12.6173C26.3655 12.1256 26.0655 11.6792 25.6874 11.3039C24.9164 10.5677 23.8912 10.1569 22.8249 10.1569C21.7587 10.1569 20.7334 10.5677 19.9624 11.3039L17.0784 14.193C16.8809 14.3838 16.6162 14.4893 16.3416 14.4869C16.0669 14.4845 15.8042 14.3744 15.6099 14.1803C15.4157 13.9861 15.3055 13.7235 15.3031 13.4489C15.3007 13.1743 15.4063 12.9098 15.5972 12.7123L18.4801 9.8274C19.0496 9.25076 19.7276 8.79244 20.4751 8.47882C21.2225 8.1652 22.0246 8.00248 22.8353 8.00003C23.6459 7.99758 24.449 8.15544 25.1983 8.46453C25.9477 8.77363 26.6284 9.22784 27.2014 9.80102C27.7744 10.3742 28.2283 11.055 28.537 11.8043C28.8456 12.5535 29.003 13.3564 29 14.1667C28.9969 14.977 28.8336 15.7787 28.5193 16.5257C28.205 17.2726 27.746 17.95 27.1687 18.5188V18.5199Z"}})])])}),[],!1,null,null,null);e.default=component.exports},334:function(t,e,n){"use strict";n(327)},335:function(t,e,n){var l=n(58)(!1);l.push([t.i,'.land-switcher{text-align:center}.land-switcher__inner{display:inline-flex;align-items:flex-end;width:530px;position:relative}@media screen and (max-width:1023px){.land-switcher__inner{width:352px}}@media screen and (max-width:767px){.land-switcher__inner{width:288px}}.land-switcher__inner:after,.land-switcher__inner:before{content:"";position:absolute;bottom:0;left:0;background:hsla(0,0%,100%,.2);width:100%;height:2px}.land-switcher__inner:before{background-color:#fff;width:50%;transform:translateX(0);will-change:transform;transition:transform .7s ease-in}.land-switcher__btn{max-width:50%;flex:0 0 50%;padding:0 5px 26px;opacity:.3;color:#fff;transition:opacity .7s ease-in}@media screen and (max-width:1023px){.land-switcher__btn{padding:0 5px 16px}}@media screen and (max-width:767px){.land-switcher__btn{padding:0 3px 14px}}.land-switcher__btn .icon{margin-right:15px;fill:#fff;height:30px;width:auto}@media screen and (max-width:1023px){.land-switcher__btn .icon{height:20px;margin-right:12px}}@media screen and (max-width:767px){.land-switcher__btn .icon{height:16px;margin-right:10px}}.land-switcher--identity .land-switcher__btn[href="#identity"],.land-switcher--webdesign .land-switcher__btn[href="#webdesign"]{opacity:1;pointer-events:none}.land-switcher--identity .land-switcher__inner:before{transform:translateX(100%)}',""]),t.exports=l},336:function(t,e,n){"use strict";n.r(e);var l={name:"LandDivider",props:{bgImage:{type:String,default:"",required:!0}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},o=n(21),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land-divider",attrs:{"data-parallax":"container"}},[n("div",{staticClass:"land-divider__content"},[n("div",{staticClass:"land-divider__inner"},[n("div",{staticClass:"parallax"},[n("img",{staticClass:"lazyload img-full",attrs:{"data-src":t.bgImage,alt:"img"}})])]),t._v(" "),n("LandPlayIcon",{attrs:{"is-divider":!0}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandPlayIcon:n(331).default})},337:function(t,e,n){"use strict";n(19),n(40),n(9),n(26),n(338);var l=n(31),o=["light-theme","dark-theme"],c=["project-inpool","project-nce","project-navigator","project-majolika","project-route66","project-patron","project-twonp","project-uplast","project-dstrct","project-dexsa","project-centerbass"];e.a={transition:{name:"project",appear:!0,css:!1,enter:function(t,e){this.$store.getters["preloader/isFinished"]?t.classList.contains("project__inner")&&(l.e.getAnimations(),l.g.toggle(),l.e.enterAnimation.play().eventCallback("onComplete",(function(){e()}))):e()},leave:function(t,e){l.e.enterAnimation?(l.g.toggle(),l.e.enterAnimation.reverse(0).eventCallback("onReverseComplete",(function(){e()}))):e()}},computed:{isDark:function(){var t=this.$store.getters["theme/isDark"];return t?"dark-theme":"light-theme"},isPreloaderFinished:function(){return this.$store.getters["preloader/isFinished"]}},watch:{isPreloaderFinished:function(){l.g.ready=!0,l.g.toggle(),this.updateLoco()}},mounted:function(){var t,e,n=this;(t=document.body.classList).remove.apply(t,c),(e=document.documentElement.classList).remove.apply(e,o),document.documentElement.classList.add(this.landThemeClass),document.body.classList.add(this.$route.name);var r=this;this.$nextTick((function(){var t,e;(n.$animateFake3d(),n.isPreloaderFinished&&(l.g.ready=!0,setTimeout((function(){n.updateLoco()}),300)),window.addEventListener("resize",l.g.toggleResize),document.querySelector(".parallax"))&&(n.$device.isDesktop?null===(t=n.$refs)||void 0===t||null===(e=t.scroller)||void 0===e||e.locomotive.on("scroll",(function(t){r.parallax(t)})):document.querySelector(".mob-scroll").addEventListener("scroll",n.parallax));var o=document.querySelectorAll("img");setTimeout((function(){o.forEach((function(image){image.onload=function(){n.$nuxt.$emit("update-locomotive")}}))}),500)}))},destroyed:function(){window.removeEventListener("resize",l.g.toggleResize)},methods:{updateLoco:function(){var t,e,n;null===(t=this.$refs)||void 0===t||null===(e=t.scroller)||void 0===e||null===(n=e.locomotive)||void 0===n||n.update()},switchToggle:function(){var t,e,n=this;(this.isWeb=!this.isWeb,this.$device.isDesktop&&l.g.toggle(),this.isWeb?(this.$gsap.to(".land__content--style",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--web",{opacity:1,y:0,display:"block",duration:.5,delay:.4})):(this.$gsap.to(".land__content--web",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--style",{opacity:1,y:0,display:"block",duration:.5,delay:.4})),this.$device.isDesktop)?(null===(t=this.$refs)||void 0===t||null===(e=t.scroller)||void 0===e||e.locomotive.scrollTo("top",{duration:900,disableLerp:!0,offset:0}),setTimeout((function(){n.updateLoco(),l.g.toggle()}),600)):this.$gsap.to(".mob-scroll",{duration:.9,scrollTo:0})},parallax:function(t){var e,n=window.innerHeight,l=document.querySelectorAll(".parallax");e=this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop,l.forEach((function(element){var t=element.closest('[data-parallax="container"]').offsetTop,l=t-e-n;n>element.getBoundingClientRect().top&&e<2*element.clientHeight+t&&(t>n&&t?(element.style.transform="translate3d(0px, ".concat((l/2*.3).toFixed(2),"px, 0px)"),element.style.webkitTransform="translate3d(0px, ".concat((l/2*.3).toFixed(2),"px, 0px)")):(element.style.transform="translate3d(0px, ".concat((-e/2*.3).toFixed(2),"px, 0px)"),element.style.webkitTransform="translate3d(0px, ".concat((-e/2*.3).toFixed(2),"px, 0px)")))}))}}}},338:function(t,e,n){"use strict";var l=n(4),o=n(1),c=n(5),r=n(60),d=n(220),_=n(219),m=n(6),f=o.RangeError,v=o.String,h=Math.floor,x=c(_),C=c("".slice),y=c(1..toFixed),w=function(t,e,n){return 0===e?n:e%2==1?w(t,e-1,n*t):w(t*t,e/2,n)},k=function(data,t,e){for(var n=-1,l=e;++n<6;)l+=t*data[n],data[n]=l%1e7,l=h(l/1e7)},L=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=h(n/t),n=n%t*1e7},j=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=v(data[t]);s=""===s?e:s+x("0",7-e.length)+e}return s};l({target:"Number",proto:!0,forced:m((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!m((function(){y({})}))},{toFixed:function(t){var e,n,l,o,c=d(this),_=r(t),data=[0,0,0,0,0,0],m="",h="0";if(_<0||_>20)throw f("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return v(c);if(c<0&&(m="-",c=-c),c>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(c*w(2,69,1))-69)<0?c*w(2,-e,1):c/w(2,e,1),n*=4503599627370496,(e=52-e)>0){for(k(data,0,n),l=_;l>=7;)k(data,1e7,0),l-=7;for(k(data,w(10,l,1),0),l=e-1;l>=23;)L(data,1<<23),l-=23;L(data,1<<l),k(data,1,1),L(data,2),h=j(data)}else k(data,0,n),k(data,1<<-e,0),h=j(data)+x("0",_);return h=_>0?m+((o=h.length)<=_?"0."+x("0",_-o)+h:C(h,0,o-_)+"."+C(h,o-_)):m+h}})},339:function(t,e,n){"use strict";n.r(e);var l={name:"LandHeader",props:{headerText:{type:String,default:"",required:!0},isDual:{type:Boolean,default:!1,required:!1},isWeb:{type:Boolean,required:!1},url:{type:String,required:!0}},data:function(){return{}},computed:{},watch:{},mounted:function(){},methods:{}},o=n(21),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land__header d-f-center"},[n("p",{staticClass:"land__header-item land-text"},[t._v("\n    "+t._s(t.headerText)+"\n  ")]),t._v(" "),t.isDual?n("LandSwitcher",{staticClass:"land__header-item",attrs:{"is-web":t.isWeb},on:{switchToggle:function(e){return t.$emit("switchToggle")}}}):t._e(),t._v(" "),n("LandLink",{staticClass:"land__header-item",attrs:{url:t.url}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandSwitcher:n(332).default,LandLink:n(333).default})},340:function(t,e,n){"use strict";n.r(e);var l={name:"LandVideo",props:{isImg:{type:Boolean,default:!1,reqiured:!0},urlImg:{type:String,default:"",reqiured:!0},urlVideo:{type:String,default:"",reqiured:!0},loop:{type:Boolean,default:!0,reqiured:!0},autoplay:{type:Boolean,default:!0,reqiured:!0},videoClass:{type:String,default:"",reqiured:!0},preload:{type:String,default:"auto",reqiured:!0}},data:function(){return{}},computed:{},mounted:function(){this.$nextTick((function(){}))},methods:{}},o=n(21),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land-border",class:{"land-border--img":t.isImg}},[n("video",{staticClass:"video lazyloaded land-border__item",class:t.videoClass,attrs:{autoplay:t.autoplay,muted:"",preload:t.preload,loop:t.loop,playsinline:"","webkit-playsinline":"true"},domProps:{muted:!0}},[n("source",{attrs:{src:t.urlVideo,type:"video/mp4"}})]),t._v(" "),t.isImg?n("div",{staticClass:"land-border land-border--sm"},[n("img",{staticClass:"lazyloaded img-full land-border__item",attrs:{src:t.urlImg,alt:"concept"}})]):t._e()])}),[],!1,null,null,null);e.default=component.exports},344:function(t,e,n){t.exports=n.p+"img/nce-bg-video.d648dd6.jpg"},380:function(t,e,n){t.exports=n.p+"img/A4-Paper-3.75e0940.png"},381:function(t,e,n){t.exports=n.p+"img/adaptive.9ff95c4.png"},383:function(t,e,n){t.exports=n.p+"img/car.a9d9088.png"},385:function(t,e,n){t.exports=n.p+"img/journal.900837e.png"},386:function(t,e,n){t.exports=n.p+"img/land1.d852ea3.jpg"},387:function(t,e,n){t.exports=n.p+"img/logo-b.54c2aae.png"},388:function(t,e,n){t.exports=n.p+"img/nce-goals.6081594.jpg"},389:function(t,e,n){t.exports=n.p+"img/nce-style-1-poster.c95cb6c.jpg"},390:function(t,e,n){t.exports=n.p+"img/nce-style-1.c398f11.jpg"},391:function(t,e,n){t.exports=n.p+"img/nce-style-cards.ad85e97.jpg"},392:function(t,e,n){t.exports=n.p+"img/nce-style-int.57777d0.jpg"},393:function(t,e,n){t.exports=n.p+"img/nce-style-logo.4a73945.svg"},394:function(t,e,n){t.exports=n.p+"img/premium.b66b52f.png"},416:function(t,e,n){t.exports=n.p+"img/next-project-front.7e5bf7f.svg"},417:function(t,e,n){t.exports=n.p+"img/next-project.7196839.png"},451:function(t,e,n){var content=n(486);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("615c0c17",content,!0,{sourceMap:!1})},480:function(t,e,n){t.exports=n.p+"videos/style-1.b736542.mp4"},481:function(t,e,n){t.exports=n.p+"videos/1.b200074.mp4"},482:function(t,e,n){t.exports=n.p+"videos/2.dd833b6.mp4"},483:function(t,e,n){t.exports=n.p+"videos/4.6f859a0.mp4"},484:function(t,e,n){t.exports=n.p+"videos/3.2dbf485.mp4"},485:function(t,e,n){"use strict";n(451)},486:function(t,e,n){var l=n(58)(!1);l.push([t.i,"body.project-nce{background-color:#434bc3}body.project-nce .header_scrollable{background-color:#434bc3;transition-delay:.5s;-webkit-backdrop-filter:none;backdrop-filter:none}body.project-nce .nav{background-color:#434bc3}body.project-nce .nav.active-nav .nav-s-area__container:before{background:linear-gradient(0deg,#434bc3,transparent 49%,transparent 51%,#434bc3)}.nce .land-border{border-color:#c1c1c1;background-color:#434bc3}.nce .land-border__item{filter:drop-shadow(5px 20px 47px rgba(0,0,0,.2))}.nce__divider{margin-top:-100px}.nce__goal .land-text{padding-left:16px;padding-right:16px}.nce .land__content--style .nce__logo{justify-content:space-around;align-items:flex-start}@media screen and (max-width:1023px){.nce .land__content--style .nce__logo{justify-content:center;align-items:center}}.nce .land__content--style .nce__logo-text{max-width:528px;margin-right:10%}@media screen and (max-width:1023px){.nce .land__content--style .nce__logo-text{margin-right:0;margin-bottom:110px}}.nce .land__content--style .nce__logo-img{max-width:315px;flex:0 0 100%}@media screen and (max-width:767px){.nce .land__content--style .nce__logo-img{max-width:238px}}.nce .land__content--style .nce__interior{padding-top:100px;padding-bottom:100px}@media screen and (max-width:767px){.nce .land__content--style .nce__interior{padding-top:0;padding-bottom:110px}}.nce .land__content--style .nce__interior img{border-radius:20px}@media screen and (max-width:767px){.nce .land__content--style .nce__interior img{border-radius:10px}}.nce .land__content--style .nce__ident{overflow:hidden;background-color:#abc1d6}.nce .land__content--style .nce__ident-inner{justify-content:flex-start;height:200vh;max-height:1200px;min-height:700px;padding-left:16px;padding-right:16px}@media screen and (max-width:767px){.nce .land__content--style .nce__ident-inner{height:740px}}.nce .land__content--style .nce__ident-cards,.nce .land__content--style .nce__ident-inner{background-position:50%;background-size:cover;background-repeat:no-repeat}.nce .land__content--style .nce__ident-cards{height:100vh;min-height:600px;max-height:1000px}@media screen and (max-width:767px){.nce .land__content--style .nce__ident-cards{min-height:400px;max-height:500px}}.nce .land__content--style .nce__ident-block{background-color:#abc1d6;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.nce .land__content--style .nce__ident-block .nce__ident-item{flex:0 0 100%}.nce .land__content--style .nce__ident-block .nce__ident-item img{border-radius:10px}.nce .land__content--style .nce__ident-block .nce__ident-item:first-child{max-width:40%;min-width:40%;margin-left:2%}@media screen and (max-width:767px){.nce .land__content--style .nce__ident-block .nce__ident-item:first-child{max-width:70%;min-width:70%;margin-left:4%}}.nce .land__content--style .nce__ident-block .nce__ident-item:nth-child(2){max-width:50%;min-width:50%;margin-left:auto;margin-top:-10%}@media screen and (max-width:767px){.nce .land__content--style .nce__ident-block .nce__ident-item:nth-child(2){margin-top:50px;max-width:65%;min-width:65%}}.nce .land__content--style .nce__ident-block .nce__ident-item:nth-child(3){max-width:50%;min-width:50%;margin-top:-10%;margin-left:8%}@media screen and (max-width:767px){.nce .land__content--style .nce__ident-block .nce__ident-item:nth-child(3){max-width:55%;min-width:55%;margin-left:0}}.nce .land__content--style .nce__ident-block .nce__ident-item:nth-child(4){max-width:80%;min-width:80%;margin-top:10%;margin-left:auto}@media screen and (max-width:767px){.nce .land__content--style .nce__ident-block .nce__ident-item:nth-child(4){max-width:90%;min-width:90%;margin-top:70px;margin-left:auto}}.nce .land__content--style .nce__solution .land-text{padding-left:16px;padding-right:16px}.nce .land__content--style .land-divider__content:before{background-color:#abc1d6}.nce .land__content--style .land-divider__content:after{background-color:#434bc3}.nce .land__content--web .land-divider__content:before{background-color:#747e88}.nce .land__content--web .land-divider__content:after{background-color:#434bc3}.nce .land__content--web .nce__attention,.nce .land__content--web .nce__attention .land-border{background-color:#747e88}.nce .land__content--web .nce__attention .land-border{margin-top:100px}@media screen and (max-width:767px){.nce .land__content--web .nce__attention .land-border{margin-top:80px}}.nce .land__content--web .nce__attention .land-border .video{filter:none}",""]),t.exports=l},501:function(t,e,n){"use strict";n.r(e);var l={name:"ProjectNce",mixins:[n(337).a],data:function(){return{isWeb:!0,landThemeClass:"dark-theme"}},head:function(){return{title:"Проект - NCE"}},computed:{},mounted:function(){this.$nextTick((function(){}))},methods:{}},o=(n(485),n(21)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("LocomotiveScroll",{ref:"scroller",staticClass:"content project__inner",class:{"mob-scroll":!t.$device.isDesktop},attrs:{"getted-options":{smooth:t.$device.isDesktop,direction:"vertical",smartphone:{smooth:t.$device.isDesktop,direction:"vertical"},tablet:{smooth:t.$device.isDesktop,direction:"vertical"}}}},[l("div",{staticClass:"scrollable__container land"},[l("div",{staticClass:"land__inner nce"},[l("LandHeader",{attrs:{"header-text":"Фирменный стиль и сайт для Национальной компании Еразия","is-dual":"","is-web":t.isWeb,url:"https://nce.ru"},on:{switchToggle:t.switchToggle}}),t._v(" "),l("div",{staticClass:"land__content land__content--style nce__content"},[l("div",{staticClass:"land__block nce__goal d-f-center column ptb"},[l("h2",{staticClass:"land-title"},[t._v("\n            Задача\n          ")]),t._v(" "),l("p",{staticClass:"land-text"},[t._v("\n            Разработать узнаваемую на нефтегазовом рынке айдентику.\n          ")]),t._v(" "),l("div",{staticClass:"land__full-w"},[l("img",{staticClass:"lazyloaded img-full",attrs:{src:n(390),alt:"goal"}})])]),t._v(" "),l("div",{staticClass:"land__block nce__solution d-f-center column"},[l("h2",{staticClass:"land-title"},[t._v("\n            Решение\n          ")]),t._v(" "),l("p",{staticClass:"land-text"},[t._v("\n            Мы сделали один из самых лаконичных брендингов на рынке. Всего\n            один знак или небольшой кусочек презентации сразу говорит, о чём\n            идёт речь.\n          ")]),t._v(" "),l("div",{staticClass:"land__full-w nce__solution-video"},[l("div",{staticClass:"land-play"},[l("video",{staticClass:"video lazyloaded",attrs:{src:n(480),muted:"",preload:"auto",playsinline:"","webkit-playsinline":"true",poster:n(389)},domProps:{muted:!0}},[t._v("\n                dont support this video\n              ")]),t._v(" "),l("LandPlayIcon",{staticClass:"nce-style__solution-play",attrs:{"is-divider":!1}})],1)])]),t._v(" "),l("div",{staticClass:"\n            land__block land__block--half\n            nce__logo\n            d-f-center\n            container\n            ptb\n          "},[l("div",{staticClass:"nce__logo-text"},[l("h2",{staticClass:"land-title"},[t._v("\n              логотип\n            ")]),t._v(" "),l("p",{staticClass:"land-text"},[t._v("\n              Основным формообразующим элементом стало картографическое\n              обозначения нефтяных скважин. Два таких треугольника создают\n              латинскую букву “N” –первую букву названия компании.\n            ")])]),t._v(" "),l("div",{staticClass:"nce__logo-img"},[l("img",{staticClass:"lazyloaded img-full",attrs:{src:n(393),alt:"logo"}})])]),t._v(" "),l("div",{staticClass:"nce__interior container"},[l("img",{staticClass:"lazyloaded img-full",attrs:{src:n(392),alt:"logo"}})]),t._v(" "),l("div",{staticClass:"land__block nce__ident br-block"},[l("div",{staticClass:"nce__ident-inner ptb d-f-center column",style:{backgroundImage:"url("+n(394)+")"}},[l("h2",{staticClass:"land-title"},[t._v("\n              Айдентика\n            ")]),t._v(" "),l("p",{staticClass:"land-text"},[t._v("\n              Основным цветом является голубой – привычный для данной ниши\n              цвет. Дополнительный чёрный отсылает к цвету нефти, а полиграфию\n              мы разбавили золотыми оттенками.\n            ")])]),t._v(" "),l("div",{staticClass:"nce__ident-cards",style:{backgroundImage:"url("+n(391)+")"}}),t._v(" "),l("div",{staticClass:"nce__ident-block container ptb"},[l("div",{staticClass:"nce__ident-item"},[l("img",{staticClass:"lazyloaded img-full",attrs:{src:n(380),alt:"paper"}})]),t._v(" "),l("div",{staticClass:"nce__ident-item"},[l("img",{staticClass:"lazyloaded img-full",attrs:{src:n(387),alt:"logo-b"}})]),t._v(" "),l("div",{staticClass:"nce__ident-item"},[l("img",{staticClass:"lazyloaded img-full",attrs:{src:n(385),alt:"journal"}})]),t._v(" "),l("div",{staticClass:"nce__ident-item"},[l("img",{staticClass:"lazyloaded img-full",attrs:{src:n(383),alt:"car"}})])])]),t._v(" "),l("LandDivider",{staticClass:"nce__divider",attrs:{"bg-image":n(344)}})],1),t._v(" "),l("div",{staticClass:"land__content land__content--web nce__content"},[l("div",{staticClass:"land__block d-f-center column ptb container"},[l("LandVideo",{attrs:{"url-video":n(481),"is-img":!0,"url-img":n(386)}})],1),t._v(" "),l("div",{staticClass:"land__block nce__goal d-f-center column"},[l("h2",{staticClass:"land-title"},[t._v("\n            Задача\n          ")]),t._v(" "),l("p",{staticClass:"land-text"},[t._v("\n            Максимально наглядно и интерактивно рассказать об уникальной\n            технологии врезки в трубопровод под давлением. А также грамотно\n            показать все услуги компании.\n          ")]),t._v(" "),l("div",{staticClass:"land__full-w"},[l("div",{staticClass:"parallax-container",attrs:{"data-parallax":"container"}},[l("div",{staticClass:"parallax"},[l("img",{staticClass:"lazyloaded img-full",attrs:{src:n(388),alt:"ui"}})])])])]),t._v(" "),l("div",{staticClass:"land__block nce__solution d-f-center column ptb container"},[l("h2",{staticClass:"land-title"},[t._v("\n            Решение\n          ")]),t._v(" "),l("p",{staticClass:"land-text"},[t._v("\n            Нашей студией была разработана видео-демонстрация сложнейшего\n            технологического процесса врезки под давлением. Для придания видео\n            интерактивности, был запрограмирован специальный слайдер с\n            эффектом управления происходящем. И всё это в свежем дизайне и\n            логичной структуре.\n          ")]),t._v(" "),l("div",{staticClass:"land__full-w"},[l("LandVideo",{staticClass:"land-circles",attrs:{"url-video":n(482)}})],1)]),t._v(" "),l("div",{staticClass:"\n            land__block land__block--half\n            d-f-center\n            nce__paginate\n            container\n          "},[l("div",{staticClass:"land__block-item land__block-item--about"},[l("h2",{staticClass:"land-title"},[t._v("\n              понятная навигация\n            ")]),t._v(" "),l("p",{staticClass:"land-text"},[t._v("\n              Помимо стандартного меню, на главной странице мы расположили\n              удобный блок навигации по всем разделам сайта, где есть краткое\n              описание и изображение для быстрого понимания услуги.\n            ")])]),t._v(" "),l("div",{staticClass:"land__block-item land__block-item--content"},[l("LandVideo",{staticClass:"land-border--h",attrs:{"url-video":n(483)}})],1)]),t._v(" "),l("div",{staticClass:"\n            land__block land__block--half land__block--reverse\n            d-f-center\n            nce__adaptive\n            container\n            ptb\n          "},[l("div",{staticClass:"land__block-item land__block-item--about"},[l("h2",{staticClass:"land-title"},[t._v("\n              адаптивен для пользователя\n            ")]),t._v(" "),l("p",{staticClass:"land-text"},[t._v("\n              В интерфейсе присутствует переключатель со светлой темы на\n              тёмную и обратно. Это очень удобное решение для тех\n              пользователей, которые посещают сайт в тёмное время суток.\n            ")])]),t._v(" "),l("div",{staticClass:"land__block-item"},[l("img",{staticClass:"lazyloaded img-full",attrs:{src:n(381),alt:"ui"}})])]),t._v(" "),l("div",{staticClass:"land__block nce__attention br-block ptb"},[l("div",{staticClass:"container d-f-center column"},[l("h2",{staticClass:"land-title"},[t._v("\n              держит внимание\n            ")]),t._v(" "),l("p",{staticClass:"land-text"},[t._v("\n              Тематика заказчика такова, что приходится размешать много важной\n              текстовой информации. Чтобы не наскучить пользователю\n              однообразностью текстов, мы разработали интерактивный элемент, с\n              которым интересно играться во время прокрутки, что увеличивает\n              вероятность просмотра контента до конца.\n            ")]),t._v(" "),l("LandVideo",{attrs:{"url-video":n(484)}})],1)]),t._v(" "),l("LandDivider",{staticClass:"nce__divider",attrs:{"bg-image":n(344)}})],1),t._v(" "),l("LandSwitcher",{staticClass:"pt",attrs:{"is-web":t.isWeb},on:{switchToggle:t.switchToggle}})],1),t._v(" "),l("LandNext",{staticClass:"project-next--uplast",attrs:{url:"uplast","back-image":n(417),"front-image":n(416)}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandHeader:n(339).default,LandPlayIcon:n(331).default,LandDivider:n(336).default,LandVideo:n(340).default,LandSwitcher:n(332).default,LandNext:n(328).default})}}]);