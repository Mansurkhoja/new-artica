(window.webpackJsonp=window.webpackJsonp||[]).push([[12,7,17],{326:function(t,n,e){"use strict";e.r(n);var o={name:"LandNext",props:{frontImage:{type:String,default:"",required:!0},backImage:{type:String,default:"",required:!0},url:{type:String,required:!0}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},r=e(21),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"project-next"},[e("div",{staticClass:"container"},[e("h4",{staticClass:"project-next__title"},[t._v("\n      Следующий проект\n    ")]),t._v(" "),e("nuxt-link",{staticClass:"project-preview-item js-3d-object",attrs:{to:"/project/"+t.url+"/"}},[e("div",{staticClass:"image cover js-3d-object__back",attrs:{"data-rotation":"2.5"}},[e("img",{staticClass:"lazyload",attrs:{"data-src":t.backImage,alt:"logobg"}})]),t._v(" "),e("div",{staticClass:"project-next__logo d-f-center image contain js-3d-object__forward",attrs:{"data-rotation":"5","data-move":"10"}},[e("img",{staticClass:"lazyload project-next__logo-img",attrs:{"data-src":t.frontImage,alt:"logo"}})])])],1)])}),[],!1,null,null,null);n.default=component.exports},327:function(t,n,e){"use strict";e(40),e(9),e(26),e(330);var o=e(32),r=["light-theme","dark-theme"];n.a={computed:{},preload:!0,watch:{isPreloaderFinished:function(){this.updateLoco()}},mounted:function(){var t,n=this;(t=document.documentElement.classList).remove.apply(t,r),document.documentElement.classList.add(this.landThemeClass);var e=this;this.$nextTick((function(){var t,o,r,l;document.querySelector(".parallax")&&(n.$device.isDesktop?null===(t=n.$parent)||void 0===t||null===(o=t.$parent)||void 0===o||null===(r=o.$parent.$refs)||void 0===r||null===(l=r.scroller)||void 0===l||l.locomotive.on("scroll",(function(t){e.parallax(t)})):document.querySelector(".mob-scroll").addEventListener("scroll",e.parallax))})),setTimeout((function(){n.$nuxt.$emit("update-locomotive")}),900)},destroyed:function(){this.$device.isDesktop||document.querySelector(".mob-scroll").removeEventListener("scroll",this.parallax)},methods:{updateLoco:function(){var t,n,e,o,r;null===(t=this.$parent)||void 0===t||null===(n=t.$parent)||void 0===n||null===(e=n.$parent.$refs)||void 0===e||null===(o=e.scroller)||void 0===o||null===(r=o.locomotive)||void 0===r||r.update()},switchToggle:function(){var t,n,e,r,l=this;(this.isWeb=!this.isWeb,this.$device.isDesktop&&o.g.toggle(),this.isWeb?(this.$gsap.to(".land__content--style",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--web",{opacity:1,y:0,display:"block",duration:.5,delay:.4})):(this.$gsap.to(".land__content--web",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--style",{opacity:1,y:0,display:"block",duration:.5,delay:.4})),this.$device.isDesktop)?(null===(t=this.$parent)||void 0===t||null===(n=t.$parent)||void 0===n||null===(e=n.$parent.$refs)||void 0===e||null===(r=e.scroller)||void 0===r||r.locomotive.scrollTo("top",{duration:900,disableLerp:!0,offset:0}),setTimeout((function(){l.updateLoco(),o.g.toggle()}),600)):this.$gsap.to(".mob-scroll",{duration:.9,scrollTo:0})},parallax:function(t){var n,e=window.innerHeight,o=document.querySelectorAll(".parallax");n=this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop,o.forEach((function(element){var t=element.closest('[data-parallax="container"]').offsetTop,o=t-n-e;e>element.getBoundingClientRect().top&&n<2*element.clientHeight+t&&(t>e&&t?(element.style.transform="translate3d(0px, ".concat((o/2*.3).toFixed(2),"px, 0px)"),element.style.webkitTransform="translate3d(0px, ".concat((o/2*.3).toFixed(2),"px, 0px)")):(element.style.transform="translate3d(0px, ".concat((-n/2*.3).toFixed(2),"px, 0px)"),element.style.webkitTransform="translate3d(0px, ".concat((-n/2*.3).toFixed(2),"px, 0px)")))}))}}}},328:function(t,n,e){"use strict";e.r(n);var o={name:"LandSwitcher",props:{isWeb:{type:Boolean,required:!0}},data:function(){return{}},computed:{switcherClass:function(){return this.isWeb?"land-switcher--webdesign":"land-switcher--identity"}},watch:{},mounted:function(){this.isWeb?this.$gsap.set(".land__content--style",{opacity:0,y:100,display:"none"}):this.$gsap.set(".land__content--web",{opacity:0,y:100,display:"none"})},methods:{}},r=e(21),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"land-switcher",class:t.switcherClass},[e("div",{staticClass:"land-switcher__inner"},[e("a",{staticClass:"land-switcher__btn d-f-center",attrs:{href:"#webdesign"},on:{click:function(n){return n.preventDefault(),t.$emit("switchToggle")}}},[e("svg",{staticClass:"icon",attrs:{viewBox:"0 0 187.3 109"}},[e("path",{attrs:{d:"M72.5,0l49.8,83.5L172.1,0l15.2,0l-65,109L57.3,0L72.5,0z M130,0l-21.2,35.5l-7.6-12.7L114.8,0L130,0z M15.2,0  L65,83.5l13.5-22.7l7.6,12.7L65,109L0,0L15.2,0z"}})]),t._v(" "),e("span",[t._v("Сайт")])]),t._v(" "),e("a",{staticClass:"land-switcher__btn d-f-center",attrs:{href:"#identity"},on:{click:function(n){return n.preventDefault(),t.$emit("switchToggle")}}},[e("svg",{staticClass:"icon",attrs:{viewBox:"0 0 13 109"}},[e("path",{attrs:{d:"M0,0h13v109H0V0z"}})]),t._v(" "),e("span",[t._v("Стиль")])])])])}),[],!1,null,null,null);n.default=component.exports},330:function(t,n,e){"use strict";var o=e(4),r=e(0),l=e(5),d=e(60),c=e(220),_=e(219),v=e(6),m=r.RangeError,f=r.String,h=Math.floor,x=l(_),w=l("".slice),y=l(1..toFixed),C=function(t,n,e){return 0===n?e:n%2==1?C(t,n-1,e*t):C(t*t,n/2,e)},k=function(data,t,n){for(var e=-1,o=n;++e<6;)o+=t*data[e],data[e]=o%1e7,o=h(o/1e7)},j=function(data,t){for(var n=6,e=0;--n>=0;)e+=data[n],data[n]=h(e/t),e=e%t*1e7},$=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var n=f(data[t]);s=""===s?n:s+x("0",7-n.length)+n}return s};o({target:"Number",proto:!0,forced:v((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!v((function(){y({})}))},{toFixed:function(t){var n,e,o,r,l=c(this),_=d(t),data=[0,0,0,0,0,0],v="",h="0";if(_<0||_>20)throw m("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return f(l);if(l<0&&(v="-",l=-l),l>1e-21)if(e=(n=function(t){for(var n=0,e=t;e>=4096;)n+=12,e/=4096;for(;e>=2;)n+=1,e/=2;return n}(l*C(2,69,1))-69)<0?l*C(2,-n,1):l/C(2,n,1),e*=4503599627370496,(n=52-n)>0){for(k(data,0,e),o=_;o>=7;)k(data,1e7,0),o-=7;for(k(data,C(10,o,1),0),o=n-1;o>=23;)j(data,1<<23),o-=23;j(data,1<<o),k(data,1,1),j(data,2),h=$(data)}else k(data,0,e),k(data,1<<-n,0),h=$(data)+x("0",_);return h=_>0?v+((r=h.length)<=_?"0."+x("0",_-r)+h:w(h,0,r-_)+"."+w(h,r-_)):v+h}})},337:function(t,n,e){t.exports=e.p+"img/next-project-front.f0b412b.svg"},338:function(t,n,e){t.exports=e.p+"img/next-project.7014d23.jpg"},373:function(t,n,e){t.exports=e.p+"img/info.0fd5ee8.png"},374:function(t,n,e){t.exports=e.p+"img/main-bg.cf0c04c.jpg"},375:function(t,n,e){t.exports=e.p+"img/main.929e04c.jpg"},376:function(t,n,e){t.exports=e.p+"img/navigator-style-main.1e575b9.png"},377:function(t,n,e){t.exports=e.p+"img/navigator-style-main.1334438.svg"},378:function(t,n,e){t.exports=e.p+"img/navigator_main1.be1a968.png"},379:function(t,n,e){t.exports=e.p+"img/navigator_main2--mob.03558da.png"},380:function(t,n,e){t.exports=e.p+"img/navigator_main2--tab.a3db448.png"},381:function(t,n,e){t.exports=e.p+"img/navigator_main2.153bfb8.png"},382:function(t,n,e){t.exports=e.p+"img/navigator_places.6de55b2.jpg"},383:function(t,n,e){t.exports=e.p+"img/navigator_route.27a50a4.jpg"},446:function(t,n,e){var content=e(500);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(59).default)("0e9559ea",content,!0,{sourceMap:!1})},499:function(t,n,e){"use strict";e(446)},500:function(t,n,e){var o=e(58)(!1);o.push([t.i,'body.project-navigator{background-color:#d9e0e6}body.project-navigator .header.active-bg{background-color:rgba(217,224,230,.6)}body.project-navigator .link-site{fill:rgba(34,34,34,.7)}body.project-navigator .link-site.hover,body.project-navigator .link-site.touch{fill:#222}body.project-navigator .nav{background-color:#d9e0e6}body.project-navigator .nav.active-nav .nav-s-area__container:after{background:linear-gradient(0deg,#d9e0e6,transparent 49%,transparent 51%,#d9e0e6)}body.project-navigator .project-next{z-index:9;position:relative;background-color:#d9e0e6}body.project-navigator .project-next__title{color:#242424}.navigator .land-switcher__btn{color:#000}.navigator .land-switcher__btn .icon{fill:#000}.navigator .land-switcher__inner:after{background-color:rgba(0,0,0,.2)}.navigator .land-switcher__inner:before{background-color:#000}.navigator__header .land-text{color:#000}.navigator__header-items{background:linear-gradient(180deg,#d9e0e6,rgba(217,224,230,0) 82.52%);padding-bottom:120px}@media screen and (max-width:767px){.navigator__header-items{padding-bottom:65px}}.navigator__header-items .land-switcher{padding-top:60px}.navigator__header-items .land-text{transform:translateY(-100%);position:relative}.navigator__footer{position:relative}.navigator__footer:after{content:"";z-index:-1;width:100%;height:100%;background-color:#151f23;top:-50%;left:0;position:absolute}.navigator__footer .land-switcher{background-color:#d9e0e6;padding-top:180px;border-top-right-radius:100px;border-top-left-radius:100px}@media screen and (max-width:767px){.navigator__footer .land-switcher{border-top-right-radius:30px;border-top-left-radius:30px}}.navigator .land__content--style{background-color:#fff}.navigator .land__content--style .navigator__logo{position:relative}.navigator .land__content--style .navigator__logo img{max-width:50vw;z-index:2}.navigator .land__content--style .navigator__logo:after{content:"";position:absolute;bottom:0;height:100%;width:100%;background-color:#fff;transform:translateY(80%);z-index:1}.navigator .land__content--web{background-color:#151f23}.navigator .land__content--web .navigator__main{background-repeat:no-repeat;background-size:100% auto;background-position:top}.navigator .land__content--web .navigator__main-img{padding-top:50px}.navigator .land__content--web .navigator__main-img img{box-shadow:0 20px 180px rgba(0,0,0,.6);border-radius:24px}@media screen and (max-width:1023px){.navigator .land__content--web .navigator__main-detail{padding:0}}.navigator .land__content--web .navigator__main-detail-img{position:relative;z-index:2;overflow:hidden}@media screen and (max-width:767px){.navigator .land__content--web .navigator__main-detail-img img{min-width:calc(200% - 32px);margin-left:calc(-50% + 32px);margin-top:-10%}}.navigator .land__content--web .navigator__main-detail-img span.land-text{display:block;position:absolute;top:0;left:0;width:100%;max-width:100%;height:100%;text-align:left;padding:28% 0 0 10%}@media screen and (max-width:1023px){.navigator .land__content--web .navigator__main-detail-img span.land-text{padding-top:30%}}@media screen and (max-width:767px){.navigator .land__content--web .navigator__main-detail-img span.land-text{padding-top:19%;padding-left:7%}}@media screen and (max-width:575px){.navigator .land__content--web .navigator__main-detail-img span.land-text{padding-top:27%;padding-left:10%}}.navigator .land__content--web .navigator__main-detail-text{padding-left:10%;text-align:left;max-width:calc(475px + 10%)}@media screen and (min-width:1441px){.navigator .land__content--web .navigator__main-detail-text{padding-top:14%;max-width:calc(528px + 10%)}}@media screen and (min-width:1024px){.navigator .land__content--web .navigator__main-detail-text{max-width:calc(528px + 8%);position:absolute;padding-top:8%;top:0;left:0}}@media screen and (max-width:767px){.navigator .land__content--web .navigator__main-detail-text{padding-left:16px;padding-right:16px}}.navigator .land__content--web .navigator__place img{box-shadow:0 52px 161px rgba(0,0,0,.6);border-radius:24px}.navigator .land__content--web .navigator__info .land__full-w{overflow:hidden;padding-top:50px}.navigator .land__content--web .navigator__info-img{min-width:160%;margin-left:-30%}.navigator .land__content--web .navigator__route{margin-top:-20vw}.navigator .land__content--web .navigator__route img{box-shadow:0 52px 161px rgba(0,0,0,.6);border-radius:24px}',""]),t.exports=o},511:function(t,n,e){"use strict";e.r(n);var o=[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"navigator__main-inner container d-f-center column ptb"},[o("h2",{staticClass:"land-title"},[t._v("\n            Main\n          ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n            The site has been designed\n            only for the two types of devices – desktops and tablets\n          ")]),t._v(" "),o("div",{staticClass:"land__full-w"},[o("div",{staticClass:"navigator__main-img"},[o("img",{staticClass:"lazyloaded img-full",attrs:{src:e(378),alt:"navigator_main"}})])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",{staticClass:"land-text"},[t._v("\n              Search and "),e("br"),t._v("\n              contacts field\n            ")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container  d-f-center column"},[e("h2",{staticClass:"land-title"},[t._v("\n            Info pages\n          ")]),t._v(" "),e("p",{staticClass:"land-text"},[t._v("\n            Traffic, history of orders and advertising tool\n          ")])])}],r={name:"ProjectNavigator",mixins:[e(327).a],data:function(){return{isWeb:!0,landThemeClass:"light-theme"}},head:function(){return{title:"Проект - Navigator"}},computed:{},methods:{}},l=(e(499),e(21)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"scrollable__container land d-none"},[o("div",{staticClass:"navigator"},[o("div",{staticClass:"navigator__header"},[o("div",{staticClass:"navigator__header-img fc"},[o("img",{staticClass:"lazyloaded img-full",attrs:{src:e(375),alt:"NavigatorPicture"}})]),t._v(" "),o("div",{staticClass:"navigator__header-items d-f-center column container"},[o("p",{staticClass:"land-text"},[t._v("\n          «Navigator» agency – the official advertising operator of the Voronezh International Airport.\n        ")]),t._v(" "),o("LandSwitcher",{attrs:{"is-web":t.isWeb},on:{switchToggle:t.switchToggle}})],1)]),t._v(" "),o("div",{staticClass:"land__content land__content--style navigator__content"},[o("div",{staticClass:"navigator__main ptb"},[o("img",{staticClass:"lazyloaded img-full",attrs:{src:e(376)}})]),t._v(" "),o("div",{staticClass:"navigator__logo d-f-center pb"},[o("img",{staticClass:"lazyloaded img-full",attrs:{src:e(377)}})])]),t._v(" "),o("div",{staticClass:"land__content land__content--web navigator__content"},[o("div",{staticClass:"land__block navigator__main",style:{backgroundImage:"url("+e(374)+")"}},[t._m(0),t._v(" "),o("div",{staticClass:"navigator__main-detail container pb"},[o("div",{staticClass:"navigator__main-detail-img"},[o("p",{staticClass:"land-text navigator__main-detail-text"},[t._v("\n              The main page was made as an interactive view of all airport with a possibility of adding placemarks of advertising  constructions in the future and creating an app for mobile devices\n            ")]),t._v(" "),o("picture",[o("source",{attrs:{srcset:e(379),media:"(max-width:767px)"}}),t._v(" "),o("source",{attrs:{srcset:e(380),media:"(max-width:1023px)"}}),t._v(" "),o("img",{staticClass:"lazyloaded img-full",attrs:{src:e(381)}})]),t._v(" "),t._m(1)])])]),t._v(" "),o("div",{staticClass:"navigator__place container d-f-center column"},[o("h2",{staticClass:"land-title"},[t._v("\n          Ad spaces\n        ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n          The site has been designed\n          only for the two types of devices – desktops and tablets\n        ")]),t._v(" "),o("div",{staticClass:"land__full-w"},[o("img",{staticClass:"lazyloaded img-full",attrs:{src:e(382),alt:"NavigatorPlaces"}})])]),t._v(" "),o("div",{staticClass:"navigator__info pt"},[t._m(2),t._v(" "),o("div",{staticClass:"land__full-w"},[o("div",{staticClass:"navigator__info-img"},[o("img",{staticClass:"lazyloaded img-full",attrs:{src:e(373),alt:"NavigatorPlaces"}})])])]),t._v(" "),o("div",{staticClass:"navigator__route container d-f-center column pb"},[o("h2",{staticClass:"land-title"},[t._v("\n          Routes\n        ")]),t._v(" "),o("p",{staticClass:"land-text"},[t._v("\n          Traffic, history of orders and advertising tool\n        ")]),t._v(" "),o("div",{staticClass:"land__full-w"},[o("img",{staticClass:"lazyloaded img-full",attrs:{src:e(383),alt:"NavigatorRoutes"}})])])]),t._v(" "),o("div",{staticClass:"navigator__footer"},[o("LandSwitcher",{attrs:{"is-web":t.isWeb},on:{switchToggle:t.switchToggle}})],1)]),t._v(" "),o("LandNext",{staticClass:"project-next--dstrct",attrs:{url:"dstrct","back-image":e(338),"front-image":e(337)}})],1)}),o,!1,null,null,null);n.default=component.exports;installComponents(component,{LandSwitcher:e(328).default,LandNext:e(326).default})}}]);