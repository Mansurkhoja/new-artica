(window.webpackJsonp=window.webpackJsonp||[]).push([[13,7],{326:function(t,o,e){"use strict";e.r(o);var r={name:"LandNext",props:{frontImage:{type:String,default:"",required:!0},backImage:{type:String,default:"",required:!0},url:{type:String,required:!0}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},n=e(21),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"project-next"},[e("div",{staticClass:"container"},[e("h4",{staticClass:"project-next__title"},[t._v("\n      Следующий проект\n    ")]),t._v(" "),e("nuxt-link",{staticClass:"project-preview-item js-3d-object",attrs:{to:"/project/"+t.url+"/"}},[e("div",{staticClass:"image cover js-3d-object__back",attrs:{"data-rotation":"2.5"}},[e("img",{staticClass:"lazyload",attrs:{"data-src":t.backImage,alt:"logobg"}})]),t._v(" "),e("div",{staticClass:"project-next__logo d-f-center image contain js-3d-object__forward",attrs:{"data-rotation":"5","data-move":"10"}},[e("img",{staticClass:"lazyload project-next__logo-img",attrs:{"data-src":t.frontImage,alt:"logo"}})])])],1)])}),[],!1,null,null,null);o.default=component.exports},327:function(t,o,e){"use strict";e(40),e(9),e(26),e(330);var r=e(32),n=["light-theme","dark-theme"];o.a={computed:{},preload:!0,watch:{isPreloaderFinished:function(){this.updateLoco()}},mounted:function(){var t,o=this;(t=document.documentElement.classList).remove.apply(t,n),document.documentElement.classList.add(this.landThemeClass);var e=this;this.$nextTick((function(){var t,r,n,l;document.querySelector(".parallax")&&(o.$device.isDesktop?null===(t=o.$parent)||void 0===t||null===(r=t.$parent)||void 0===r||null===(n=r.$parent.$refs)||void 0===n||null===(l=n.scroller)||void 0===l||l.locomotive.on("scroll",(function(t){e.parallax(t)})):document.querySelector(".mob-scroll").addEventListener("scroll",e.parallax))})),setTimeout((function(){o.$nuxt.$emit("update-locomotive")}),900)},destroyed:function(){this.$device.isDesktop||document.querySelector(".mob-scroll").removeEventListener("scroll",this.parallax)},methods:{updateLoco:function(){var t,o,e,r,n;null===(t=this.$parent)||void 0===t||null===(o=t.$parent)||void 0===o||null===(e=o.$parent.$refs)||void 0===e||null===(r=e.scroller)||void 0===r||null===(n=r.locomotive)||void 0===n||n.update()},switchToggle:function(){var t,o,e,n,l=this;(this.isWeb=!this.isWeb,this.$device.isDesktop&&r.g.toggle(),this.isWeb?(this.$gsap.to(".land__content--style",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--web",{opacity:1,y:0,display:"block",duration:.5,delay:.4})):(this.$gsap.to(".land__content--web",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--style",{opacity:1,y:0,display:"block",duration:.5,delay:.4})),this.$device.isDesktop)?(null===(t=this.$parent)||void 0===t||null===(o=t.$parent)||void 0===o||null===(e=o.$parent.$refs)||void 0===e||null===(n=e.scroller)||void 0===n||n.locomotive.scrollTo("top",{duration:900,disableLerp:!0,offset:0}),setTimeout((function(){l.updateLoco(),r.g.toggle()}),600)):this.$gsap.to(".mob-scroll",{duration:.9,scrollTo:0})},parallax:function(t){var o,e=window.innerHeight,r=document.querySelectorAll(".parallax");o=this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop,r.forEach((function(element){var t=element.closest('[data-parallax="container"]').offsetTop,r=t-o-e;e>element.getBoundingClientRect().top&&o<2*element.clientHeight+t&&(t>e&&t?(element.style.transform="translate3d(0px, ".concat((r/2*.3).toFixed(2),"px, 0px)"),element.style.webkitTransform="translate3d(0px, ".concat((r/2*.3).toFixed(2),"px, 0px)")):(element.style.transform="translate3d(0px, ".concat((-o/2*.3).toFixed(2),"px, 0px)"),element.style.webkitTransform="translate3d(0px, ".concat((-o/2*.3).toFixed(2),"px, 0px)")))}))}}}},330:function(t,o,e){"use strict";var r=e(4),n=e(0),l=e(5),d=e(60),c=e(220),_=e(219),m=e(6),x=n.RangeError,f=n.String,v=Math.floor,h=l(_),w=l("".slice),y=l(1..toFixed),C=function(t,o,e){return 0===o?e:o%2==1?C(t,o-1,e*t):C(t*t,o/2,e)},j=function(data,t,o){for(var e=-1,r=o;++e<6;)r+=t*data[e],data[e]=r%1e7,r=v(r/1e7)},k=function(data,t){for(var o=6,e=0;--o>=0;)e+=data[o],data[o]=v(e/t),e=e%t*1e7},$=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var o=f(data[t]);s=""===s?o:s+h("0",7-o.length)+o}return s};r({target:"Number",proto:!0,forced:m((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!m((function(){y({})}))},{toFixed:function(t){var o,e,r,n,l=c(this),_=d(t),data=[0,0,0,0,0,0],m="",v="0";if(_<0||_>20)throw x("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return f(l);if(l<0&&(m="-",l=-l),l>1e-21)if(e=(o=function(t){for(var o=0,e=t;e>=4096;)o+=12,e/=4096;for(;e>=2;)o+=1,e/=2;return o}(l*C(2,69,1))-69)<0?l*C(2,-o,1):l/C(2,o,1),e*=4503599627370496,(o=52-o)>0){for(j(data,0,e),r=_;r>=7;)j(data,1e7,0),r-=7;for(j(data,C(10,r,1),0),r=o-1;r>=23;)k(data,1<<23),r-=23;k(data,1<<r),j(data,1,1),k(data,2),v=$(data)}else j(data,0,e),j(data,1<<-o,0),v=$(data)+h("0",_);return v=_>0?m+((n=v.length)<=_?"0."+h("0",_-n)+v:w(v,0,n-_)+"."+w(v,n-_)):m+v}})},338:function(t,o,e){t.exports=e.p+"img/next-project-front.f0b412b.svg"},339:function(t,o,e){t.exports=e.p+"img/next-project.7014d23.jpg"},387:function(t,o,e){t.exports=e.p+"img/goal.87e1a13.jpg"},388:function(t,o,e){t.exports=e.p+"img/idea-text.11b4556.svg"},389:function(t,o,e){t.exports=e.p+"img/idea.0027325.jpg"},390:function(t,o,e){t.exports=e.p+"img/logo-bg-1.777bfa9.jpg"},391:function(t,o,e){t.exports=e.p+"img/logo-bg-2.58c6b2f.jpg"},392:function(t,o,e){t.exports=e.p+"img/logo-car.628f4c9.png"},393:function(t,o,e){t.exports=e.p+"img/logocar.5341d78.jpg"},394:function(t,o,e){t.exports=e.p+"img/main.7f8052a.jpg"},395:function(t,o,e){t.exports=e.p+"img/solution-group.2531efc.png"},396:function(t,o,e){t.exports=e.p+"img/solution-logo.4635dbe.svg"},446:function(t,o,e){var content=e(510);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(59).default)("1b2a3064",content,!0,{sourceMap:!1})},509:function(t,o,e){"use strict";e(446)},510:function(t,o,e){var r=e(58)(!1);r.push([t.i,'body.project-route66{background-color:#9c1c1c}body.project-route66 .header.active-bg{background-color:rgba(156,28,28,.6)}body.project-route66 .nav{background-color:#9c1c1c}body.project-route66 .nav.active-nav .nav-s-area__container:before{background:linear-gradient(0deg,#9c1c1c,transparent 49%,transparent 51%,#9c1c1c)}body.project-route66 .project-preview-item .cover{background-color:#fff}body.project-route66 .project-next-border{display:block;width:100%;height:150px;position:relative;background-color:#fff;margin-top:-1px}@media screen and (max-width:1023px){body.project-route66 .project-next-border{height:130px}}@media screen and (max-width:767px){body.project-route66 .project-next-border{height:110px}}body.project-route66 .project-next-border:before{content:"";position:absolute;top:1px;left:0;width:100%;height:101%;border-top-left-radius:100px;border-top-right-radius:100px;background-color:#9c1c1c}@media screen and (max-width:767px){body.project-route66 .project-next-border:before{border-top-left-radius:30px;border-top-right-radius:30px}}body.project-route66 .project-next{padding-top:0!important}body.project-route66 .project-next .js-3d-object__back{background-color:#9c1c1c}.route66{color:#242424;position:relative;z-index:2}.route66__header{background-color:#fff}@media screen and (max-width:1023px){.route66__header img{min-height:615px;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover}}.route66 .land-text,.route66 .land-title{color:#242424}.route66__content{background-color:#fff}.route66__content img{border-radius:10px}@media screen and (max-width:767px){.route66__goal{padding-left:0;padding-right:0;padding-bottom:0}.route66__goal img{border-radius:0}.route66__goal .land-text{padding-left:16px;padding-right:16px}}.route66__goal-img{width:100%;max-width:1072px}.route66__idea{position:relative}.route66__idea .land-text,.route66__idea .land-title{position:relative;z-index:2}@media screen and (max-width:1023px){.route66__idea{padding-left:0;padding-right:0}.route66__idea .land-text{padding-bottom:250px;padding-left:16px;padding-right:16px}}@media screen and (max-width:767px){.route66__idea .land-text{padding-bottom:170px}}.route66__idea-decor{position:absolute;bottom:0;left:60px;height:100%}.route66__idea-decor img{height:100%;width:auto}@media screen and (max-width:1023px){.route66__idea-decor{max-height:300px;transform:translateY(-100%)}}@media screen and (max-width:767px){.route66__idea-decor{max-height:160px;left:16px}}.route66__idea-img{width:100%;max-width:1072px}.route66__logo{padding-bottom:500px;overflow:hidden;max-width:100%}@media screen and (max-width:1023px){.route66__logo{padding-bottom:150px}}@media screen and (max-width:767px){.route66__logo{padding-bottom:100px}}@media screen and (min-width:1024px){.route66__logo-inner{align-items:flex-start;flex-direction:row-reverse}}@media screen and (max-width:1023px){.route66__logo-inner{padding-top:0;flex-direction:column}}.route66__logo-text{width:100%;max-width:600px;padding-bottom:100px}@media screen and (min-width:1024px){.route66__logo-text{max-width:480px;padding-bottom:0}.route66__logo-text .land-text,.route66__logo-text .land-title{padding:0;text-align:left}}.route66__logo-imgs{position:relative;margin-right:100px}@media screen and (max-width:1023px){.route66__logo-imgs{margin-right:0;display:flex;align-items:flex-start;justify-content:space-between}.route66__logo-imgs .route66__logo-img{max-width:45%;flex:0 0 100%}.route66__logo-imgs .route66__logo-img:nth-child(2){margin-top:25%}}.route66__logo-imgs .route66__logo-img:first-child{width:100%}@media screen and (min-width:1024px){.route66__logo-imgs .route66__logo-img:first-child{max-width:462px}}@media screen and (min-width:1024px){.route66__logo-imgs .route66__logo-img:nth-child(2){position:absolute;top:40%;left:0;transform:translateX(120%);width:100%}}.route66__logo-imgs .route66__logo-car{position:absolute;bottom:0;width:300%;left:-90%;transform:translateY(60%)}@media screen and (max-width:1023px){.route66__logo-imgs .route66__logo-car{width:150%;left:-35%;transform:translateY(25%)}}.route66__car img,.route66__solution img{max-width:1070px}@media screen and (max-width:767px){.route66__car{padding-left:0;padding-right:0;padding-bottom:0}.route66__car img{border-radius:0}}.route66 .route66__solution-logo img{max-width:50vw}',""]),t.exports=r},521:function(t,o,e){"use strict";e.r(o);var r={name:"ProjectRoute66",mixins:[e(327).a],data:function(){return{landThemeClass:"dark-theme"}},head:function(){return{title:"Проект - Route66"}},computed:{},beforeMount:function(){},mounted:function(){},beforeDestroy:function(){},unmounted:function(){},methods:{}},n=(e(509),e(21)),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"scrollable__container land"},[r("div",{staticClass:"route66"},[r("div",{staticClass:"route66__header fc"},[r("img",{staticClass:"lazyloaded img-full",attrs:{src:e(394),alt:"route66"}})]),t._v(" "),r("div",{staticClass:"land__content route66__content"},[r("div",{staticClass:"route66__goal land__block d-f-center column ptb container"},[r("h2",{staticClass:"land-title"},[t._v("\n          Задача\n        ")]),t._v(" "),r("p",{staticClass:"land-text"},[t._v("\n          Создать фирменный стиль для новой сети кафе в соответствии с названием\n          и передать атмосферу романтики Road-Trip 40-x годов\n        ")]),t._v(" "),r("div",{staticClass:"pt route66__goal-img"},[r("img",{staticClass:"lazyloaded img-full",attrs:{src:e(387),alt:"goal"}})])]),t._v(" "),r("div",{staticClass:"route66__idea land__block d-f-center column pt container"},[r("h2",{staticClass:"land-title"},[t._v("\n          идея\n        ")]),t._v(" "),r("p",{staticClass:"land-text"},[t._v("\n          За основу логотипа была взята разметка старой дороги роут 66, автомобильное колесо и тематика байкерских клубов.\n        ")]),t._v(" "),r("div",{staticClass:"route66__idea-decor"},[r("img",{staticClass:"lazyloaded",attrs:{src:e(388),alt:"goal"}})]),t._v(" "),r("div",{staticClass:"pt route66__idea-img"},[r("img",{staticClass:"lazyloaded img-full",attrs:{src:e(389),alt:"idea"}})])]),t._v(" "),r("div",{staticClass:"route66__logo land__block pt"},[r("div",{staticClass:"route66__logo-inner pt d-f-center container"},[t._m(0),t._v(" "),r("div",{staticClass:"route66__logo-imgs"},[r("div",{staticClass:"route66__logo-img"},[r("img",{staticClass:"lazyloaded img-full",attrs:{src:e(390),alt:"logo-1"}})]),t._v(" "),r("div",{staticClass:"route66__logo-img"},[r("img",{staticClass:"lazyloaded img-full",attrs:{src:e(391),alt:"logo-2"}})]),t._v(" "),r("div",{staticClass:"route66__logo-car"},[r("img",{staticClass:"lazyloaded img-full",attrs:{src:e(392),alt:"logo-car"}})])])])]),t._v(" "),r("div",{staticClass:"route66__car container d-f-center ptb"},[r("img",{staticClass:"lazyloaded img-full",attrs:{src:e(393),alt:"car"}})]),t._v(" "),r("div",{staticClass:"route66__solution land__block d-f-center column ptb container"},[r("h2",{staticClass:"land-title"},[t._v("\n          РЕШЕНИЕ\n        ")]),t._v(" "),r("p",{staticClass:"land-text"},[t._v("\n          За основу логотипа была взята разметка старой дороги роут 66, автомобильное колесо и тематика байкерских клубов.\n        ")]),t._v(" "),r("div",{staticClass:"ptb route66__solution-img"},[r("img",{staticClass:"lazyloaded img-full",attrs:{src:e(395),alt:"solution"}})]),t._v(" "),r("h2",{staticClass:"land-title"},[t._v("\n          РЕШЕНИЕ\n        ")]),t._v(" "),r("p",{staticClass:"land-text"},[t._v("\n          За основу логотипа была взята разметка старой дороги роут 66, автомобильное колесо и тематика байкерских клубов.\n        ")]),t._v(" "),r("div",{staticClass:"pt route66__solution-logo"},[r("img",{staticClass:"lazyloaded img-full",attrs:{src:e(396),alt:"solution"}})])])])]),t._v(" "),r("span",{staticClass:"project-next-border"}),t._v(" "),r("LandNext",{staticClass:"project-next--dstrct",attrs:{url:"dstrct","back-image":e(339),"front-image":e(338)}})],1)}),[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"route66__logo-text"},[e("h2",{staticClass:"land-title"},[t._v("\n              Логотип\n            ")]),t._v(" "),e("p",{staticClass:"land-text"},[t._v("\n              За основу логотипа была взята разметка старой дороги роут 66, автомобильное колесо и тематика байкерских клубов.\n            ")])])}],!1,null,null,null);o.default=component.exports;installComponents(component,{LandNext:e(326).default})}}]);