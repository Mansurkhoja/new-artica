(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{384:function(t,n,e){"use strict";e.r(n);e(9),e(29),e(42);var l=e(46),r={name:"CategoriesPage",transition:{name:"categories",appear:!0,css:!1,enter:function(t,n){this.$store.getters["preloader/isFinished"]?t.classList.contains("projects")&&(l.g.init(),l.a.getAnimations().then((function(){l.a.enterAnimation.play().eventCallback("onComplete",(function(){n()}))}))):n()},leave:function(t,n){l.a.enterAnimation?(l.a.enterAnimation.reverse(0),l.g.destroy(),l.a.animations.forEach((function(t){t.timeScale(2).reverse().eventCallback("onReverseComplete",(function(){setTimeout((function(){n()}),500)}))}))):(l.g.destroy(),n())}},head:function(){return{title:"Проекты - Артика"}},computed:{isPreloaderFinished:function(){return this.$store.getters["preloader/isFinished"]}},watch:{isPreloaderFinished:function(){l.a.getAnimations().then((function(){l.a.enterAnimation.play()})),l.g.init()}}},o=e(28),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",{staticClass:"content projects scrollable"},[e("div",{staticClass:"container container_display"},[e("ul",{staticClass:"projects-nav"},[e("li",{staticClass:"projects-nav__item"},[e("nuxt-link",{staticClass:"projects-nav__link splitted",attrs:{"data-splitting":"",to:"/category/all"}},[t._v("\n          Всё\n        ")])],1),t._v(" "),e("li",{staticClass:"projects-nav__item"},[e("nuxt-link",{staticClass:"projects-nav__link splitted",attrs:{"data-splitting":"",to:"/category/userinterface"}},[t._v("\n          Пользовательский интерфейс\n        ")])],1),t._v(" "),e("li",{staticClass:"projects-nav__item"},[e("nuxt-link",{staticClass:"projects-nav__link splitted",attrs:{"data-splitting":"",to:"/category/graphicdesign"}},[t._v("\n          Графический дизайн\n        ")])],1),t._v(" "),e("li",{staticClass:"projects-nav__item"},[e("nuxt-link",{staticClass:"projects-nav__link splitted",attrs:{"data-splitting":"",to:"/category/webdesign"}},[t._v("\n          Веб-дизайн\n        ")])],1),t._v(" "),e("li",{staticClass:"projects-nav__item"},[e("nuxt-link",{staticClass:"projects-nav__link splitted",attrs:{"data-splitting":"",to:"/category/identity"}},[t._v("\n          Фирменный стиль\n        ")])],1),t._v(" "),e("li",{staticClass:"projects-nav__item"},[e("nuxt-link",{staticClass:"projects-nav__link splitted",attrs:{"data-splitting":"",to:"/category/apps"}},[t._v("\n          Приложения\n        ")])],1)]),t._v(" "),e("div",{staticClass:"projects__container"},[e("NuxtChild",{key:t.$route.params.id,attrs:{appear:"","keep-alive":""}})],1)])])}),[],!1,null,null,null);n.default=component.exports}}]);