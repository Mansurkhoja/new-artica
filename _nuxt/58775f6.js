(window.webpackJsonp=window.webpackJsonp||[]).push([[19,5,7],{327:function(t,e,n){"use strict";n.r(e);var o={name:"LandSwitcher",props:{isWeb:{type:Boolean,required:!0}},data:function(){return{}},computed:{switcherClass:function(){return this.isWeb?"land-switcher--webdesign":"land-switcher--identity"}},watch:{},mounted:function(){this.isWeb?this.$gsap.set(".land__content--style",{opacity:0,y:100,display:"none"}):this.$gsap.set(".land__content--web",{opacity:0,y:100,display:"none"})},methods:{}},r=n(21),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land-switcher",class:t.switcherClass},[n("div",{staticClass:"land-switcher__inner"},[n("a",{staticClass:"land-switcher__btn d-f-center",attrs:{href:"#webdesign"},on:{click:function(e){return e.preventDefault(),t.$emit("switchToggle")}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 187.3 109"}},[n("path",{attrs:{d:"M72.5,0l49.8,83.5L172.1,0l15.2,0l-65,109L57.3,0L72.5,0z M130,0l-21.2,35.5l-7.6-12.7L114.8,0L130,0z M15.2,0  L65,83.5l13.5-22.7l7.6,12.7L65,109L0,0L15.2,0z"}})]),t._v(" "),n("span",[t._v("Сайт")])]),t._v(" "),n("a",{staticClass:"land-switcher__btn d-f-center",attrs:{href:"#identity"},on:{click:function(e){return e.preventDefault(),t.$emit("switchToggle")}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 13 109"}},[n("path",{attrs:{d:"M0,0h13v109H0V0z"}})]),t._v(" "),n("span",[t._v("Стиль")])])])])}),[],!1,null,null,null);e.default=component.exports},328:function(t,e,n){"use strict";n.r(e);var o={name:"LandNext",props:{frontImage:{type:String,default:"",required:!0},backImage:{type:String,default:"",required:!0},url:{type:String,required:!0}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},r=n(21),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-next"},[n("div",{staticClass:"container"},[n("h4",{staticClass:"project-next__title"},[t._v("\n      Следующий проект\n    ")]),t._v(" "),n("nuxt-link",{staticClass:"project-preview-item js-3d-object",attrs:{to:"/project/"+t.url}},[n("div",{staticClass:"image cover js-3d-object__back",attrs:{"data-rotation":"2.5"}},[n("img",{staticClass:"lazyload",attrs:{"data-src":t.backImage,alt:"logobg"}})]),t._v(" "),n("div",{staticClass:"project-next__logo d-f-center image contain js-3d-object__forward",attrs:{"data-rotation":"5","data-move":"10"}},[n("img",{staticClass:"lazyload project-next__logo-img",attrs:{"data-src":t.frontImage,alt:"logo"}})])])],1)])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,n){"use strict";n(19),n(40),n(9),n(26),n(330);var o=n(31),r=["light-theme","dark-theme"],l=["project-inpool","project-nce","project-navigator","project-majolika","project-route66","project-patron","project-twonp","project-uplast","project-dstrct","project-dexsa","project-centerbass"];e.a={transition:{name:"project",appear:!0,css:!1,enter:function(t,e){this.$store.getters["preloader/isFinished"]?t.classList.contains("project__inner")&&(o.e.getAnimations(),o.g.toggle(),o.e.enterAnimation.play().eventCallback("onComplete",(function(){e()}))):e()},leave:function(t,e){o.e.enterAnimation?(o.g.toggle(),o.e.enterAnimation.reverse(0).eventCallback("onReverseComplete",(function(){e()}))):e()}},computed:{isDark:function(){var t=this.$store.getters["theme/isDark"];return t?"dark-theme":"light-theme"},isPreloaderFinished:function(){return this.$store.getters["preloader/isFinished"]}},watch:{isPreloaderFinished:function(){o.g.ready=!0,o.g.toggle(),this.updateLoco()}},mounted:function(){var t,e,n=this;(t=document.body.classList).remove.apply(t,l),(e=document.documentElement.classList).remove.apply(e,r),document.documentElement.classList.add(this.landThemeClass),document.body.classList.add(this.$route.name);var d=this;this.$nextTick((function(){var t,e;(n.$animateFake3d(),n.isPreloaderFinished&&(o.g.ready=!0,setTimeout((function(){n.updateLoco()}),300)),window.addEventListener("resize",o.g.toggleResize),document.querySelector(".parallax"))&&(n.$device.isDesktop?null===(t=n.$refs)||void 0===t||null===(e=t.scroller)||void 0===e||e.locomotive.on("scroll",(function(t){d.parallax(t)})):document.querySelector(".mob-scroll").addEventListener("scroll",n.parallax));var r=document.querySelectorAll("img");setTimeout((function(){r.forEach((function(image){image.onload=function(){n.$nuxt.$emit("update-locomotive")}}))}),500)}))},destroyed:function(){window.removeEventListener("resize",o.g.toggleResize)},methods:{updateLoco:function(){var t,e,n;null===(t=this.$refs)||void 0===t||null===(e=t.scroller)||void 0===e||null===(n=e.locomotive)||void 0===n||n.update()},switchToggle:function(){var t,e,n=this;(this.isWeb=!this.isWeb,this.$device.isDesktop&&o.g.toggle(),this.isWeb?(this.$gsap.to(".land__content--style",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--web",{opacity:1,y:0,display:"block",duration:.5,delay:.4})):(this.$gsap.to(".land__content--web",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--style",{opacity:1,y:0,display:"block",duration:.5,delay:.4})),this.$device.isDesktop)?(null===(t=this.$refs)||void 0===t||null===(e=t.scroller)||void 0===e||e.locomotive.scrollTo("top",{duration:900,disableLerp:!0,offset:0}),setTimeout((function(){n.updateLoco(),o.g.toggle()}),600)):this.$gsap.to(".mob-scroll",{duration:.9,scrollTo:0})},parallax:function(t){var e,n=window.innerHeight,o=document.querySelectorAll(".parallax");e=this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop,o.forEach((function(element){var t=element.closest('[data-parallax="container"]').offsetTop,o=t-e-n;n>element.getBoundingClientRect().top&&e<2*element.clientHeight+t&&(t>n&&t?(element.style.transform="translate3d(0px, ".concat((o/2*.3).toFixed(2),"px, 0px)"),element.style.webkitTransform="translate3d(0px, ".concat((o/2*.3).toFixed(2),"px, 0px)")):(element.style.transform="translate3d(0px, ".concat((-e/2*.3).toFixed(2),"px, 0px)"),element.style.webkitTransform="translate3d(0px, ".concat((-e/2*.3).toFixed(2),"px, 0px)")))}))}}}},330:function(t,e,n){"use strict";var o=n(4),r=n(1),l=n(5),d=n(60),c=n(220),v=n(219),_=n(6),m=r.RangeError,f=r.String,h=Math.floor,x=l(v),w=l("".slice),y=l(1..toFixed),C=function(t,e,n){return 0===e?n:e%2==1?C(t,e-1,n*t):C(t*t,e/2,n)},k=function(data,t,e){for(var n=-1,o=e;++n<6;)o+=t*data[n],data[n]=o%1e7,o=h(o/1e7)},j=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=h(n/t),n=n%t*1e7},$=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=f(data[t]);s=""===s?e:s+x("0",7-e.length)+e}return s};o({target:"Number",proto:!0,forced:_((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!_((function(){y({})}))},{toFixed:function(t){var e,n,o,r,l=c(this),v=d(t),data=[0,0,0,0,0,0],_="",h="0";if(v<0||v>20)throw m("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return f(l);if(l<0&&(_="-",l=-l),l>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(l*C(2,69,1))-69)<0?l*C(2,-e,1):l/C(2,e,1),n*=4503599627370496,(e=52-e)>0){for(k(data,0,n),o=v;o>=7;)k(data,1e7,0),o-=7;for(k(data,C(10,o,1),0),o=e-1;o>=23;)j(data,1<<23),o-=23;j(data,1<<o),k(data,1,1),j(data,2),h=$(data)}else k(data,0,n),k(data,1<<-e,0),h=$(data)+x("0",v);return h=v>0?_+((r=h.length)<=v?"0."+x("0",v-r)+h:w(h,0,r-v)+"."+w(h,r-v)):_+h}})},365:function(t,e,n){t.exports=n.p+"img/next-project-front.f0b412b.svg"},366:function(t,e,n){t.exports=n.p+"img/next-project.fed7de9.jpg"},377:function(t,e,n){t.exports=n.p+"img/info.0fd5ee8.png"},378:function(t,e,n){t.exports=n.p+"img/main-bg.e36101e.jpg"},379:function(t,e,n){t.exports=n.p+"img/main.635d21f.jpg"},380:function(t,e,n){t.exports=n.p+"img/navigator-style-main.277c21d.png"},381:function(t,e,n){t.exports=n.p+"img/navigator-style-main.1334438.svg"},382:function(t,e,n){t.exports=n.p+"img/navigator_main1.37b517b.png"},383:function(t,e,n){t.exports=n.p+"img/navigator_main2--mob.03558da.png"},384:function(t,e,n){t.exports=n.p+"img/navigator_main2--tab.a3db448.png"},385:function(t,e,n){t.exports=n.p+"img/navigator_main2.f160d2e.png"},386:function(t,e,n){t.exports=n.p+"img/navigator_places.eed5049.jpg"},387:function(t,e,n){t.exports=n.p+"img/navigator_route.27a50a4.jpg"},463:function(t,e,n){var content=n(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("68b90cb6",content,!0,{sourceMap:!1})},494:function(t,e,n){"use strict";n(463)},495:function(t,e,n){var o=n(58)(!1);o.push([t.i,'body.project-navigator{background-color:#d9e0e6}body.project-navigator .header_scrollable{background-color:#fff;-webkit-backdrop-filter:none;backdrop-filter:none}body.project-navigator .header_scrollable.active-nav{background-color:transparent}body.project-navigator .link-site{fill:rgba(34,34,34,.7)}body.project-navigator .link-site.hover,body.project-navigator .link-site.touch{fill:#222}body.project-navigator .nav{background-color:#d9e0e6}body.project-navigator .nav.active-nav .nav-s-area__container:after{background:linear-gradient(0deg,#d9e0e6,transparent 49%,transparent 51%,#d9e0e6);transition:opacity 0s}body.project-navigator .project-next{z-index:9;position:relative;background-color:#d9e0e6}body.project-navigator .project-next__title{color:#242424}.navigator .land-switcher__btn{color:#000}.navigator .land-switcher__btn .icon{fill:#000}.navigator .land-switcher__inner:after{background-color:rgba(0,0,0,.2)}.navigator .land-switcher__inner:before{background-color:#000}.navigator__header .land-text{color:#000}.navigator__header-items{background:linear-gradient(180deg,#d9e0e6,rgba(217,224,230,0) 82.52%);padding-bottom:120px}@media screen and (max-width:767px){.navigator__header-items{padding-bottom:65px}}.navigator__header-items .land-switcher{padding-top:60px}.navigator__header-items .land-text{transform:translateY(-100%);position:relative}.navigator__footer{position:relative}.navigator__footer:after{content:"";z-index:-1;width:100%;height:100%;background-color:#151f23;top:-50%;left:0;position:absolute}.navigator__footer .land-switcher{background-color:#d9e0e6;padding-top:180px;border-top-right-radius:100px;border-top-left-radius:100px}@media screen and (max-width:767px){.navigator__footer .land-switcher{border-top-right-radius:30px;border-top-left-radius:30px}}.navigator .land__content--style{background-color:#fff}.navigator .land__content--style .navigator__logo{position:relative}.navigator .land__content--style .navigator__logo img{max-width:50vw;z-index:2}.navigator .land__content--style .navigator__logo:after{content:"";position:absolute;bottom:0;height:100%;width:100%;background-color:#fff;transform:translateY(80%);z-index:1}.navigator .land__content--web{background-color:#151f23}.navigator .land__content--web .navigator__main{background-repeat:no-repeat;background-size:100% auto;background-position:top}.navigator .land__content--web .navigator__main-img{padding-top:50px}.navigator .land__content--web .navigator__main-img img{box-shadow:0 20px 180px rgba(0,0,0,.6);border-radius:24px}@media screen and (max-width:1023px){.navigator .land__content--web .navigator__main-detail{padding:0}}.navigator .land__content--web .navigator__main-detail-img{position:relative;z-index:2;overflow:hidden}@media screen and (max-width:767px){.navigator .land__content--web .navigator__main-detail-img img{min-width:calc(200% - 32px);margin-left:calc(-50% + 32px);margin-top:-10%}}.navigator .land__content--web .navigator__main-detail-img span.land-text{display:block;position:absolute;top:0;left:0;width:100%;max-width:100%;height:100%;text-align:left;padding:28% 0 0 10%}@media screen and (max-width:1023px){.navigator .land__content--web .navigator__main-detail-img span.land-text{padding-top:30%}}@media screen and (max-width:767px){.navigator .land__content--web .navigator__main-detail-img span.land-text{padding-top:19%;padding-left:7%}}@media screen and (max-width:575px){.navigator .land__content--web .navigator__main-detail-img span.land-text{padding-top:27%;padding-left:10%}}.navigator .land__content--web .navigator__main-detail-text{padding-left:10%;text-align:left;max-width:calc(475px + 10%)}@media screen and (min-width:1441px){.navigator .land__content--web .navigator__main-detail-text{padding-top:14%;max-width:calc(528px + 10%)}}@media screen and (min-width:1024px){.navigator .land__content--web .navigator__main-detail-text{max-width:calc(528px + 8%);position:absolute;padding:8% 0 0;top:0;left:0}}@media screen and (max-width:767px){.navigator .land__content--web .navigator__main-detail-text{padding-left:16px;padding-right:16px}}.navigator .land__content--web .navigator__place img{filter:drop-shadow(0 52px 161px rgba(0,0,0,.6));border-radius:24px}.navigator .land__content--web .navigator__info .land__full-w{overflow:hidden;padding-top:50px}.navigator .land__content--web .navigator__info-img{min-width:160%;margin-left:-30%}.navigator .land__content--web .navigator__route{margin-top:-20vw}.navigator .land__content--web .navigator__route img{filter:drop-shadow(0 52px 161px rgba(0,0,0,.6));border-radius:24px}',""]),t.exports=o},519:function(t,e,n){"use strict";n.r(e);var o={name:"ProjectNavigator",mixins:[n(329).a],data:function(){return{isWeb:!0,landThemeClass:"light-theme"}},head:function(){return{title:"Проект - Navigator"}},computed:{},beforeMount:function(){},mounted:function(){},beforeDestroy:function(){},unmounted:function(){},methods:{}},r=(n(494),n(21)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("LocomotiveScroll",{ref:"scroller",staticClass:"content project__inner",class:{"mob-scroll":!t.$device.isDesktop},attrs:{"getted-options":{smooth:t.$device.isDesktop,direction:"vertical",smartphone:{smooth:t.$device.isDesktop,direction:"vertical"},tablet:{smooth:t.$device.isDesktop,direction:"vertical"}}}},[o("div",{staticClass:"scrollable__container land"},[o("div",{staticClass:"navigator"},[o("div",{staticClass:"navigator__header"},[o("div",{staticClass:"navigator__header-img"},[o("img",{staticClass:"lazyload img-full",attrs:{"data-src":n(379),alt:"NavigatorPicture"}})]),t._v(" "),o("div",{staticClass:"navigator__header-items d-f-center column container"},[o("p",{staticClass:"land-text"},[t._v("\n            «Navigator» agency – the official advertising operator of the Voronezh International Airport.\n          ")]),t._v(" "),o("LandSwitcher",{attrs:{"is-web":t.isWeb},on:{switchToggle:t.switchToggle}})],1)]),t._v(" "),o("div",{staticClass:"land__content land__content--style navigator__content"},[o("div",{staticClass:"navigator__main ptb"},[o("img",{staticClass:"lazyload img-full",attrs:{"data-src":n(380)}})]),t._v(" "),o("div",{staticClass:"navigator__logo d-f-center pb"},[o("img",{staticClass:"lazyload img-full",attrs:{"data-src":n(381)}})])]),t._v(" "),o("div",{staticClass:"land__content land__content--web navigator__content"},[o("div",{staticClass:"land__block navigator__main",style:{backgroundImage:"url("+n(378)+")"}},[o("div",{staticClass:"navigator__main-inner container d-f-center column ptb"},[o("h2",{staticClass:"land-title"},[t._v("\n              Main\n            ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n              The site has been designed\n              only for the two types of devices – desktops and tablets\n            ")]),t._v(" "),o("div",{staticClass:"land__full-w"},[o("div",{staticClass:"navigator__main-img"},[o("img",{staticClass:"lazyloaded img-full",attrs:{src:n(382),alt:"navigator_main"}})])])]),t._v(" "),o("div",{staticClass:"navigator__main-detail container pb"},[o("div",{staticClass:"navigator__main-detail-img"},[o("p",{staticClass:"land-text navigator__main-detail-text"},[t._v("\n                The main page was made as an interactive view of all airport with a possibility of adding placemarks of advertising  constructions in the future and creating an app for mobile devices\n              ")]),t._v(" "),o("picture",[o("source",{attrs:{"data-srcset":n(383),media:"(max-width:767px)"}}),t._v(" "),o("source",{attrs:{"data-srcset":n(384),media:"(max-width:1023px)"}}),t._v(" "),o("img",{staticClass:"lazyload img-full",attrs:{"data-src":n(385)}})]),t._v(" "),o("span",{staticClass:"land-text"},[t._v("\n                Search and "),o("br"),t._v("\n                contacts field\n              ")])])])]),t._v(" "),o("div",{staticClass:"navigator__place container d-f-center column"},[o("h2",{staticClass:"land-title"},[t._v("\n            Ad spaces\n          ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n            The site has been designed\n            only for the two types of devices – desktops and tablets\n          ")]),t._v(" "),o("div",{staticClass:"land__full-w"},[o("img",{staticClass:"lazyload img-full",attrs:{"data-src":n(386),alt:"NavigatorPlaces"}})])]),t._v(" "),o("div",{staticClass:"navigator__info pt"},[o("div",{staticClass:"container  d-f-center column"},[o("h2",{staticClass:"land-title"},[t._v("\n              Info pages\n            ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n              Traffic, history of orders and advertising tool\n            ")])]),t._v(" "),o("div",{staticClass:"land__full-w"},[o("div",{staticClass:"navigator__info-img"},[o("img",{staticClass:"lazyload img-full",attrs:{"data-src":n(377),alt:"NavigatorPlaces"}})])])]),t._v(" "),o("div",{staticClass:"navigator__route container d-f-center column pb"},[o("h2",{staticClass:"land-title"},[t._v("\n            Routes\n          ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n            Traffic, history of orders and advertising tool\n          ")]),t._v(" "),o("div",{staticClass:"land__full-w"},[o("img",{staticClass:"lazyload img-full",attrs:{"data-src":n(387),alt:"NavigatorRoutes"}})])])]),t._v(" "),o("div",{staticClass:"navigator__footer"},[o("LandSwitcher",{attrs:{"is-web":t.isWeb},on:{switchToggle:t.switchToggle}})],1)])]),t._v(" "),o("LandNext",{staticClass:"project-next--dstrct",attrs:{url:"dstrct","back-image":n(366),"front-image":n(365)}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandSwitcher:n(327).default,LandNext:n(328).default})}}]);