(window.webpackJsonp=window.webpackJsonp||[]).push([[20,5],{328:function(t,e,o){"use strict";o.r(e);var r={name:"LandNext",props:{frontImage:{type:String,default:"",required:!0},backImage:{type:String,default:"",required:!0},url:{type:String,required:!0}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},n=o(21),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project-next"},[o("div",{staticClass:"container"},[o("h4",{staticClass:"project-next__title"},[t._v("\n      Следующий проект\n    ")]),t._v(" "),o("nuxt-link",{staticClass:"project-preview-item js-3d-object",attrs:{to:"/project/"+t.url}},[o("div",{staticClass:"image cover js-3d-object__back",attrs:{"data-rotation":"2.5"}},[o("img",{staticClass:"lazyload",attrs:{"data-src":t.backImage,alt:"logobg"}})]),t._v(" "),o("div",{staticClass:"project-next__logo d-f-center image contain js-3d-object__forward",attrs:{"data-rotation":"5","data-move":"10"}},[o("img",{staticClass:"lazyload project-next__logo-img",attrs:{"data-src":t.frontImage,alt:"logo"}})])])],1)])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,o){"use strict";o(19),o(40),o(9),o(26),o(330);var r=o(31),n=["light-theme","dark-theme"],l=["project-inpool","project-nce","project-navigator","project-majolika","project-route66","project-patron","project-twonp","project-uplast","project-dstrct","project-dexsa","project-centerbass"];e.a={computed:{isDark:function(){var t=this.$store.getters["theme/isDark"];return t?"dark-theme":"light-theme"},isPreloaderFinished:function(){return this.$store.getters["preloader/isFinished"]}},watch:{isPreloaderFinished:function(){r.g.ready=!0,r.g.toggle(),this.updateLoco()}},mounted:function(){var t,e,o=this;(t=document.body.classList).remove.apply(t,l),(e=document.documentElement.classList).remove.apply(e,n),document.documentElement.classList.add(this.landThemeClass),document.body.classList.add(this.$route.name);var c=this;this.$nextTick((function(){var t,e,n,l;(o.$animateFake3d(),o.isPreloaderFinished&&(r.g.ready=!0),window.addEventListener("resize",r.g.toggleResize),document.querySelector(".parallax"))&&(o.$device.isDesktop?null===(t=o.$refs)||void 0===t||null===(e=t.scroller)||void 0===e||e.locomotive.on("scroll",(function(t){c.parallax(t)})):document.querySelector(".mob-scroll").addEventListener("scroll",o.parallax));o.$device.isDesktop?null===(n=o.$refs)||void 0===n||null===(l=n.scroller)||void 0===l||l.locomotive.on("scroll",(function(t){c.headerActive(t)})):document.querySelector(".mob-scroll").addEventListener("scroll",c.headerActive);setTimeout((function(){o.updateLoco()}),900);var d=document.querySelectorAll("img");setTimeout((function(){d.forEach((function(image){image.onload=function(){o.$nuxt.$emit("update-locomotive")}}))}),500)}))},destroyed:function(){window.removeEventListener("resize",r.g.toggleResize),document.querySelector(".header").classList.remove("active-bg")},methods:{updateLoco:function(){var t,e,o;null===(t=this.$refs)||void 0===t||null===(e=t.scroller)||void 0===e||null===(o=e.locomotive)||void 0===o||o.update()},switchToggle:function(){var t,e,o=this;(this.isWeb=!this.isWeb,this.$device.isDesktop&&r.g.toggle(),this.isWeb?(this.$gsap.to(".land__content--style",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--web",{opacity:1,y:0,display:"block",duration:.5,delay:.4})):(this.$gsap.to(".land__content--web",{opacity:0,y:100,display:"none",duration:.5}),this.$gsap.to(".land__content--style",{opacity:1,y:0,display:"block",duration:.5,delay:.4})),this.$device.isDesktop)?(null===(t=this.$refs)||void 0===t||null===(e=t.scroller)||void 0===e||e.locomotive.scrollTo("top",{duration:900,disableLerp:!0,offset:0}),setTimeout((function(){o.updateLoco(),r.g.toggle()}),600)):this.$gsap.to(".mob-scroll",{duration:.9,scrollTo:0})},parallax:function(t){var e,o=window.innerHeight,r=document.querySelectorAll(".parallax");e=this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop,r.forEach((function(element){var t=element.closest('[data-parallax="container"]').offsetTop,r=t-e-o;o>element.getBoundingClientRect().top&&e<2*element.clientHeight+t&&(t>o&&t?(element.style.transform="translate3d(0px, ".concat((r/2*.3).toFixed(2),"px, 0px)"),element.style.webkitTransform="translate3d(0px, ".concat((r/2*.3).toFixed(2),"px, 0px)")):(element.style.transform="translate3d(0px, ".concat((-e/2*.3).toFixed(2),"px, 0px)"),element.style.webkitTransform="translate3d(0px, ".concat((-e/2*.3).toFixed(2),"px, 0px)")))}))},headerActive:function(t){(this.$device.isDesktop?null==t?void 0:t.scroll.y:document.querySelector(".mob-scroll").scrollTop)>(document.querySelector(".fc")?document.querySelector(".fc").clientHeight:700)-70?document.querySelector(".header").classList.add("active-bg"):document.querySelector(".header").classList.remove("active-bg")}}}},330:function(t,e,o){"use strict";var r=o(4),n=o(1),l=o(5),c=o(60),d=o(220),m=o(219),_=o(6),f=n.RangeError,x=n.String,v=Math.floor,h=l(m),y=l("".slice),w=l(1..toFixed),j=function(t,e,o){return 0===e?o:e%2==1?j(t,e-1,o*t):j(t*t,e/2,o)},C=function(data,t,e){for(var o=-1,r=e;++o<6;)r+=t*data[o],data[o]=r%1e7,r=v(r/1e7)},k=function(data,t){for(var e=6,o=0;--e>=0;)o+=data[e],data[e]=v(o/t),o=o%t*1e7},$=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=x(data[t]);s=""===s?e:s+h("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:_((function(){return"0.000"!==w(8e-5,3)||"1"!==w(.9,0)||"1.25"!==w(1.255,2)||"1000000000000000128"!==w(0xde0b6b3a7640080,0)}))||!_((function(){w({})}))},{toFixed:function(t){var e,o,r,n,l=d(this),m=c(t),data=[0,0,0,0,0,0],_="",v="0";if(m<0||m>20)throw f("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return x(l);if(l<0&&(_="-",l=-l),l>1e-21)if(o=(e=function(t){for(var e=0,o=t;o>=4096;)e+=12,o/=4096;for(;o>=2;)e+=1,o/=2;return e}(l*j(2,69,1))-69)<0?l*j(2,-e,1):l/j(2,e,1),o*=4503599627370496,(e=52-e)>0){for(C(data,0,o),r=m;r>=7;)C(data,1e7,0),r-=7;for(C(data,j(10,r,1),0),r=e-1;r>=23;)k(data,1<<23),r-=23;k(data,1<<r),C(data,1,1),k(data,2),v=$(data)}else C(data,0,o),C(data,1<<-e,0),v=$(data)+h("0",m);return v=m>0?_+((n=v.length)<=m?"0."+h("0",m-n)+v:y(v,0,n-m)+"."+y(v,n-m)):_+v}})},375:function(t,e,o){t.exports=o.p+"img/back.348644f.png"},376:function(t,e,o){t.exports=o.p+"img/forward.3580a4b.png"},405:function(t,e,o){t.exports=o.p+"img/goal.b78c322.jpg"},406:function(t,e,o){t.exports=o.p+"img/idea-text.11b4556.svg"},407:function(t,e,o){t.exports=o.p+"img/idea.0027325.jpg"},408:function(t,e,o){t.exports=o.p+"img/logo-bg-1.777bfa9.jpg"},409:function(t,e,o){t.exports=o.p+"img/logo-bg-2.58c6b2f.jpg"},410:function(t,e,o){t.exports=o.p+"img/logo-car.628f4c9.png"},411:function(t,e,o){t.exports=o.p+"img/logocar.54d0364.jpg"},412:function(t,e,o){t.exports=o.p+"img/main.79bb098.jpg"},413:function(t,e,o){t.exports=o.p+"img/solution-group.cb2bc70.jpg"},414:function(t,e,o){t.exports=o.p+"img/solution-logo.4635dbe.svg"},465:function(t,e,o){var content=o(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(59).default)("0260e7c9",content,!0,{sourceMap:!1})},503:function(t,e,o){"use strict";o(465)},504:function(t,e,o){var r=o(58)(!1);r.push([t.i,'body.project-route66,body.project-route66 .header.active-bg,body.project-route66 .nav{background-color:#9c1c1c}body.project-route66 .nav.active-nav .nav-s-area__container:before{background:linear-gradient(0deg,#9c1c1c,transparent 49%,transparent 51%,#9c1c1c);transition:opacity 0s}body.project-route66 .project-preview-item .cover{background-color:#fff}body.project-route66 .project-next{border-top-left-radius:100px;border-top-right-radius:100px;background-color:#9c1c1c;position:relative}body.project-route66 .project-next:after{content:"";position:absolute;top:-200px;height:100%;width:100%;background-color:#fff;z-index:-1}@media screen and (max-width:767px){body.project-route66 .project-next{border-top-left-radius:30px;border-top-right-radius:30px}}.route66{color:#242424;position:relative;z-index:2}.route66__header{background-color:#fff}@media screen and (max-width:1023px){.route66__header img{min-height:615px;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover}}.route66 .land-text,.route66 .land-title{color:#242424}.route66__content{background-color:#fff}.route66__content img{border-radius:10px}@media screen and (max-width:767px){.route66__goal{padding-left:0;padding-right:0;padding-bottom:0}.route66__goal img{border-radius:0}.route66__goal .land-text{padding-left:16px;padding-right:16px}}.route66__goal-img{width:100%;max-width:1072px}.route66__idea{position:relative}.route66__idea .land-text,.route66__idea .land-title{position:relative;z-index:2}@media screen and (max-width:1023px){.route66__idea{padding-left:0;padding-right:0}.route66__idea .land-text{padding-bottom:250px;padding-left:16px;padding-right:16px}}@media screen and (max-width:767px){.route66__idea .land-text{padding-bottom:170px}}.route66__idea-decor{position:absolute;bottom:0;left:60px;height:100%}.route66__idea-decor img{height:100%;width:auto}@media screen and (max-width:1023px){.route66__idea-decor{max-height:300px;transform:translateY(-100%)}}@media screen and (max-width:767px){.route66__idea-decor{max-height:160px;left:16px}}.route66__idea-img{width:100%;max-width:1072px}.route66__logo{padding-bottom:500px;overflow:hidden;max-width:100%}@media screen and (max-width:1023px){.route66__logo{padding-bottom:150px}}@media screen and (max-width:767px){.route66__logo{padding-bottom:100px}}@media screen and (min-width:1024px){.route66__logo-inner{align-items:flex-start;flex-direction:row-reverse}}@media screen and (max-width:1023px){.route66__logo-inner{padding-top:0;flex-direction:column}}.route66__logo-text{width:100%;max-width:600px;padding-bottom:100px}@media screen and (min-width:1024px){.route66__logo-text{max-width:480px;padding-bottom:0}.route66__logo-text .land-text,.route66__logo-text .land-title{padding:0;text-align:left}}.route66__logo-imgs{position:relative;margin-right:100px}@media screen and (max-width:1023px){.route66__logo-imgs{margin-right:0;display:flex;align-items:flex-start;justify-content:space-between}.route66__logo-imgs .route66__logo-img{max-width:45%;flex:0 0 100%}.route66__logo-imgs .route66__logo-img:nth-child(2){margin-top:25%}}.route66__logo-imgs .route66__logo-img:first-child{width:100%}@media screen and (min-width:1024px){.route66__logo-imgs .route66__logo-img:first-child{max-width:462px}}@media screen and (min-width:1024px){.route66__logo-imgs .route66__logo-img:nth-child(2){position:absolute;top:40%;left:0;transform:translateX(120%);width:100%}}.route66__logo-imgs .route66__logo-car{position:absolute;bottom:0;width:300%;left:-90%;transform:translateY(60%)}@media screen and (max-width:1023px){.route66__logo-imgs .route66__logo-car{width:150%;left:-35%;transform:translateY(25%)}}.route66__car img,.route66__solution img{max-width:1070px}@media screen and (max-width:767px){.route66__car{padding-left:0;padding-right:0;padding-bottom:0}.route66__car img{border-radius:0}}.route66 .route66__solution-logo img{max-width:50vw}',""]),t.exports=r},520:function(t,e,o){"use strict";o.r(e);var r={name:"ProjectRoute66",mixins:[o(329).a],data:function(){return{landThemeClass:"dark-theme"}},head:function(){return{title:"Проект - Route66"}},computed:{},beforeMount:function(){},mounted:function(){},beforeDestroy:function(){},unmounted:function(){},methods:{ww:function(){this.$router.push({path:this.localePath("search"),query:{q:this.q}}),this.$router.push("/project/navigator")}}},n=(o(503),o(21)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("LocomotiveScroll",{ref:"scroller",staticClass:"content project__inner",class:{"mob-scroll":!t.$device.isDesktop},attrs:{"getted-options":{smooth:t.$device.isDesktop,direction:"vertical",smartphone:{smooth:t.$device.isDesktop,direction:"vertical"},tablet:{smooth:t.$device.isDesktop,direction:"vertical"}}}},[r("div",{staticClass:"scrollable__container land"},[r("div",{staticClass:"route66"},[r("div",{staticClass:"route66__header fc"},[r("img",{staticClass:"lazyloaded img-full",attrs:{src:o(412),alt:"route66"}})]),t._v(" "),r("div",{staticClass:"land__content route66__content"},[r("div",{staticClass:"route66__goal land__block d-f-center column ptb container"},[r("h2",{staticClass:"land-title"},[t._v("\n            Задача\n          ")]),t._v(" "),r("p",{staticClass:"land-text"},[t._v("\n            Создать фирменный стиль для новой сети кафе в соответствии с названием\n            и передать атмосферу романтики Road-Trip 40-x годов\n          ")]),t._v(" "),r("div",{staticClass:"pt route66__goal-img"},[r("img",{staticClass:"lazyloaded img-full",attrs:{src:o(405),alt:"goal"}})])]),t._v(" "),r("div",{staticClass:"route66__idea land__block d-f-center column pt container"},[r("h2",{staticClass:"land-title"},[t._v("\n            идея\n          ")]),t._v(" "),r("p",{staticClass:"land-text"},[t._v("\n            За основу логотипа была взята разметка старой дороги роут 66, автомобильное колесо и тематика байкерских клубов.\n          ")]),t._v(" "),r("div",{staticClass:"route66__idea-decor"},[r("img",{staticClass:"lazyloaded",attrs:{src:o(406),alt:"goal"}})]),t._v(" "),r("div",{staticClass:"pt route66__idea-img"},[r("img",{staticClass:"lazyloaded img-full",attrs:{src:o(407),alt:"idea"}})])]),t._v(" "),r("div",{staticClass:"route66__logo land__block pt"},[r("div",{staticClass:"route66__logo-inner pt d-f-center container"},[r("div",{staticClass:"route66__logo-text"},[r("h2",{staticClass:"land-title"},[t._v("\n                Логотип\n              ")]),t._v(" "),r("p",{staticClass:"land-text"},[t._v("\n                За основу логотипа была взята разметка старой дороги роут 66, автомобильное колесо и тематика байкерских клубов.\n              ")])]),t._v(" "),r("div",{staticClass:"route66__logo-imgs"},[r("div",{staticClass:"route66__logo-img"},[r("img",{staticClass:"lazyloaded img-full",attrs:{src:o(408),alt:"logo-1"}})]),t._v(" "),r("div",{staticClass:"route66__logo-img"},[r("img",{staticClass:"lazyloaded img-full",attrs:{src:o(409),alt:"logo-2"}})]),t._v(" "),r("div",{staticClass:"route66__logo-car"},[r("img",{staticClass:"lazyloaded img-full",attrs:{src:o(410),alt:"logo-car"}})])])])]),t._v(" "),r("div",{staticClass:"route66__car container d-f-center ptb"},[r("img",{staticClass:"lazyloaded img-full",attrs:{src:o(411),alt:"car"}})]),t._v(" "),r("div",{staticClass:"route66__solution land__block d-f-center column ptb container"},[r("h2",{staticClass:"land-title"},[t._v("\n            РЕШЕНИЕ\n          ")]),t._v(" "),r("p",{staticClass:"land-text"},[t._v("\n            За основу логотипа была взята разметка старой дороги роут 66, автомобильное колесо и тематика байкерских клубов.\n          ")]),t._v(" "),r("div",{staticClass:"ptb route66__solution-img"},[r("img",{staticClass:"lazyloaded img-full",attrs:{src:o(413),alt:"solution"}})]),t._v(" "),r("h2",{staticClass:"land-title"},[t._v("\n            РЕШЕНИЕ\n          ")]),t._v(" "),r("p",{staticClass:"land-text"},[t._v("\n            За основу логотипа была взята разметка старой дороги роут 66, автомобильное колесо и тематика байкерских клубов.\n          ")]),t._v(" "),r("div",{staticClass:"pt route66__solution-logo"},[r("img",{staticClass:"lazyloaded img-full",attrs:{src:o(414),alt:"solution"}})])])])]),t._v(" "),r("LandNext",{staticClass:"project-next--navigator",attrs:{url:"navigator","back-image":o(375),"front-image":o(376)}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandNext:o(328).default})}}]);