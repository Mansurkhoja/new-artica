(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{556:function(t,e,n){"use strict";n.r(e);n(9),n(26),n(40);var o=n(32),r={name:"CategoriesPage",transition:{name:"categories",appear:!0,css:!1,enter:function(t,e){this.$store.getters["preloader/isFinished"]?t.classList.contains("projects")&&(o.g.toggle(),o.a.getAnimations().then((function(){o.a.enterAnimation.play().eventCallback("onComplete",(function(){o.a.isEnter=!0,e()}))}))):e()},leave:function(t,e){o.a.enterAnimation?(o.a.enterAnimation.reverse(0),o.g.toggle(),o.a.animations.forEach((function(t){t.timeScale(2).reverse().eventCallback("onReverseComplete",(function(){setTimeout((function(){o.a.isEnter=!1,e()}),500)}))}))):e()}},head:function(){return{title:"Проекты - Артика"}},computed:{isPreloaderFinished:function(){return this.$store.getters["preloader/isFinished"]}},watch:{isPreloaderFinished:function(){o.a.getAnimations().then((function(){o.a.enterAnimation.play(),o.a.isEnter=!0}))}},mounted:function(){this.$nextTick((function(){}))}},c=n(21),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("LocomotiveScroll",{ref:"scroller",staticClass:"content projects",attrs:{"getted-options":{smooth:!0,direction:"vertical",smartphone:{smooth:!0,direction:"vertical"},tablet:{smooth:!0,direction:"vertical"}}}},[n("div",{staticClass:"container container_display scrollable__container"},[n("ul",{staticClass:"projects-nav"},[n("li",{staticClass:"projects-nav__item"},[n("nuxt-link",{staticClass:"projects-nav__link splitted",attrs:{"data-splitting":"",to:"/category/all"}},[t._v("\n          Всё\n        ")])],1),t._v(" "),n("li",{staticClass:"projects-nav__item"},[n("nuxt-link",{staticClass:"projects-nav__link splitted",attrs:{"data-splitting":"",to:"/category/webdesign"}},[t._v("\n          Веб-дизайн\n        ")])],1),t._v(" "),n("li",{staticClass:"projects-nav__item"},[n("nuxt-link",{staticClass:"projects-nav__link splitted",attrs:{"data-splitting":"",to:"/category/identity"}},[t._v("\n          Фирменный стиль\n        ")])],1),t._v(" "),n("li",{staticClass:"projects-nav__item projects-nav__item--unactive"},[n("nuxt-link",{staticClass:"projects-nav__link splitted",attrs:{"data-splitting":"",to:"/category/userinterface"}},[t._v("\n          Пользовательский интерфейс\n        ")])],1),t._v(" "),n("li",{staticClass:"projects-nav__item projects-nav__item--unactive"},[n("nuxt-link",{staticClass:"projects-nav__link splitted",attrs:{"data-splitting":"",to:"/category/graphicdesign"}},[t._v("\n          Графический дизайн\n        ")])],1),t._v(" "),n("li",{staticClass:"projects-nav__item projects-nav__item--unactive"},[n("nuxt-link",{staticClass:"projects-nav__link splitted",attrs:{"data-splitting":"",to:"/category/apps"}},[t._v("\n          Приложения\n        ")])],1)]),t._v(" "),n("div",{staticClass:"projects__container"},[n("NuxtChild",{key:t.$route.params.id,attrs:{appear:""}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);