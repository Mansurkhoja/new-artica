(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{468:function(t,e,n){n(42),n(17),n(41),n(9),n(48),n(26),n(49);var o=n(221),r=n(222),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n(63),t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),m=e.children,f=void 0===m?[]:m,v=data.class,_=data.staticClass,style=data.style,d=data.staticStyle,C=data.attrs,h=void 0===C?{}:C,y=r(data,c);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){o(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,_],style:[style,d],attrs:Object.assign({viewBox:"0 0 17 12",fill:"none",stroke:"currentColor"},h)},y),f.concat([n("path",{attrs:{d:"M0.5,6.8l4.8,4.8l11.2-11"}})]))}}},512:function(t,e,n){"use strict";n.r(e);var o=n(11),r=(n(61),n(16),n(19),n(54),n(468)),c=n.n(r),l=n(31),m={name:"ContactsPage",components:{CorrectIcon:c.a},transition:{name:"contacts",appear:!0,css:!1,enter:function(t,e){this.$store.getters["preloader/isFinished"]?t.classList.contains("contacts")&&l.b.getAnimations().then((function(){l.b.enterAnimation.play().eventCallback("onComplete",(function(){e()}))})):e()},leave:function(t,e){l.b.enterAnimation?l.b.enterAnimation.reverse(0).eventCallback("onReverseComplete",(function(){e()})):e()}},data:function(){return{animateItems:null,isSuccess:!1,isLoading:!1,inputPhoneModel:"",form:{name:{id:"name",value:"",isFocus:!1,validate:{pattern:/^[A-zА-яЁё]{2,50}$/},isCorrect:!1},phone:{id:"phone",value:"",isFocus:!1,validate:{pattern:/^\+7 \d{3}\ \d{3}\-\d{4}$/},isCorrect:!1,mask:{mask:"+7 ### ###-##-##",showMaskOnHover:!1,clearIncomplete:!1}},message:{id:"text",value:"",isFocus:!1,validate:{pattern:/^.{2,200}$/},isCorrect:!1}},animation:[],totalCorrects:0}},head:function(){return{title:"Контакты - Артика"}},computed:{isPreloaderFinished:function(){return this.$store.getters["preloader/isFinished"]}},watch:{isPreloaderFinished:function(){l.b.getAnimations().then((function(){l.b.enterAnimation.play()}))}},mounted:function(){this.$nextTick((function(){}))},methods:{inputFocus:function(t){t.isFocus=!0},inputBlur:function(t){t.value.length||(t.isFocus=!1)},input:function(t,e,n){var o=e.parentNode;if(t.validate.pattern.test(t.value)?t.isCorrect=!0:t.isCorrect=!1,t.isCorrect&&!o.classList.contains("valid")){this.totalCorrects+=1,o.classList.add("valid");var r=o.querySelector(".input__icon"),c=r.querySelector("path"),l=c.getTotalLength();this.animation[n]=this.$gsap.timeline().set(r,{autoAlpha:1}).set(c,{css:{"stroke-dasharray":l}}).fromTo(c,{css:{"stroke-dashoffset":l}},{duration:1,css:{"stroke-dashoffset":0},ease:"power2.out"})}else!t.isCorrect&&o.classList.contains("valid")&&(this.totalCorrects-=1,o.classList.remove("valid"),this.animation[n].timeScale(2).reverse())},submit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.totalCorrects<3)){e.next=2;break}return e.abrupt("return");case 2:return t.$gsap.to(".contacts-form__content",{autoAlpha:.5,duration:.5,ease:"power2.inOut"}),t.isLoading=!0,e.prev=4,e.next=7,t.$axios.$post("https://back.artica.art/backend/en/application",{name:t.form.name.value,phone:t.form.phone.value.replace(/\D/g,""),from:t.form.message.value}).then((function(e){t.$gsap.timeline().to(".contacts-form__content",{autoAlpha:0,display:"none",duration:.5,ease:"power2.inOut"}).eventCallback("onComplete",(function(){t.isSuccess=!0,t.isLoading=!1,t.$gsap.to(".contacts-form__succes-message",{autoAlpha:1,duration:.5,ease:"power2.inOut"})})),console.log(e)}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[4,9]])})))()}}},f=n(21),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"content contacts"},[n("div",{staticClass:"container container_display"},[n("div",{staticClass:"row contacts__container"},[t._m(0),t._v(" "),n("div",{staticClass:"contacts-form col-xl-4 col-lg-6"},[n("div",{staticClass:"contacts-form__container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isSuccess,expression:"isSuccess"}],staticClass:"contacts-form__succes-message"},[n("div",{staticClass:"\n                contacts-form__succes-message-text\n                contacts__animate-item\n              "},[t._v("\n              Сообщение успешно отправлено, мы свяжемся с вами в ближайшнее\n              время!\n            ")])]),t._v(" "),n("div",{staticClass:"contacts-form__content",class:{loading:t.isLoading}},[n("h2",{staticClass:"contacts-form__title contacts__animate-item"},[t._v("\n              Обратная связь\n            ")]),t._v(" "),n("form",{staticClass:"contacts-form__form",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[n("div",{staticClass:"contacts-form__group row"},[n("div",{staticClass:"contacts-form__input col-lg-6"},[n("div",{staticClass:"input contacts__animate-item",class:{focused:t.form.name.isFocus}},[n("label",{staticClass:"input__label",attrs:{for:t.form.name.id}},[t._v("Имя")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name.value,expression:"form.name.value"}],staticClass:"input__element",attrs:{id:t.form.name.id,type:"text",name:t.form.name.id},domProps:{value:t.form.name.value},on:{input:[function(e){e.target.composing||t.$set(t.form.name,"value",e.target.value)},function(e){return t.input(t.form.name,e.target,0)}],focus:function(e){return t.inputFocus(t.form.name)},blur:function(e){return t.inputBlur(t.form.name)}}}),n("span",{staticClass:"input__line"}),t._v(" "),n("CorrectIcon",{staticClass:"input__icon"})],1)]),t._v(" "),n("div",{staticClass:"contacts-form__input col-lg-6"},[n("div",{staticClass:"input contacts__animate-item",class:{focused:t.form.phone.isFocus}},[n("label",{staticClass:"input__label",attrs:{for:t.form.phone.id}},[t._v("Телефон")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone.value,expression:"form.phone.value"},{name:"mask",rawName:"v-mask",value:{mask:"+7 999 999-9999",showMaskOnHover:!1,clearIncomplete:!1},expression:"{\n                        mask: '+7 999 999-9999',\n                        showMaskOnHover: false,\n                        clearIncomplete: false,\n                      }"}],ref:t.form.phone,staticClass:"input__element",attrs:{id:t.form.phone.id,type:"text",name:t.form.phone.id},domProps:{value:t.form.phone.value},on:{input:[function(e){e.target.composing||t.$set(t.form.phone,"value",e.target.value)},function(e){return t.input(t.form.phone,e.target,1)}],focus:function(e){return t.inputFocus(t.form.phone)},blur:function(e){return t.inputBlur(t.form.phone)}}}),n("span",{staticClass:"input__line"}),t._v(" "),n("CorrectIcon",{staticClass:"input__icon"})],1)]),t._v(" "),n("div",{staticClass:"contacts-form__input col-12"},[n("div",{staticClass:"input contacts__animate-item",class:{focused:t.form.message.isFocus}},[n("label",{staticClass:"input__label",attrs:{for:t.form.message.id}},[t._v("Текст сообщения")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message.value,expression:"form.message.value"}],staticClass:"input__element",attrs:{id:t.form.message.id,type:"text",name:t.form.message.id},domProps:{value:t.form.message.value},on:{input:[function(e){e.target.composing||t.$set(t.form.message,"value",e.target.value)},function(e){return t.input(t.form.message,e.target,2)}],focus:function(e){return t.inputFocus(t.form.message)},blur:function(e){return t.inputBlur(t.form.message)}}}),n("span",{staticClass:"input__line"}),t._v(" "),n("CorrectIcon",{staticClass:"input__icon"})],1)])]),t._v(" "),n("div",{staticClass:"contacts__animate-item"},[n("button",{staticClass:"button contacts-form-button",class:{active:3===t.totalCorrects},attrs:{type:"submit"}},[t._v("\n                  Отправить\n                  "),n("svg",{staticClass:"contacts-form-button__icon",attrs:{viewBox:"0 0 24.5 7.4",fill:"currentColor"}},[n("path",{attrs:{d:"M24.4,4c0.2-0.2,0.2-0.5,0-0.7l-3.2-3.2C21,0,20.7,0,20.5,0.1c-0.2,0.2-0.2,0.5,0,0.7l2.8,2.8l-2.8,2.8c-0.2,0.2-0.2,0.5,0,0.7c0.2,0.2,0.5,0.2,0.7,0L24.4,4z M0,4.2h24v-1H0L0,4.2z"}})]),t._v(" "),n("svg",{staticClass:"\n                      contacts-form-button__icon contacts-form-button__loader\n                    ",attrs:{viewBox:"0 0 120 30",fill:"currentColor"}},[n("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[n("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),t._v(" "),n("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),n("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[n("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),t._v(" "),n("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),n("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[n("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),t._v(" "),n("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])])])])])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contacts-info col-xl-5 col-lg-6"},[n("div",{staticClass:"contacts-info__container"},[n("div",{staticClass:"contacts-info__head"},[n("h1",{staticClass:"contacts-info__title contacts__animate-item"},[t._v("\n              Контакты\n            ")]),t._v(" "),n("p",{staticClass:"contacts-info__description contacts__animate-item"},[t._v("\n              Свяжитесь с нами удобным для вас способом\n            ")])]),t._v(" "),n("div",{staticClass:"contacts-info__content"},[n("span",{staticClass:"line contacts__animate-item"}),n("a",{staticClass:"contacts-info__link contacts__animate-item",attrs:{href:"tel:89038502052"}},[t._v("8 903 850 2052")]),n("a",{staticClass:"contacts-info__link contacts__animate-item",attrs:{href:"mailto:mailbox@artica.art"}},[t._v("mailbox@artica.art")])])])])}],!1,null,null,null);e.default=component.exports}}]);