(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{372:function(e,t,n){"use strict";n.r(t);var l={name:"LandPlayIcon",props:{isDivider:{type:Boolean,required:!0,default:!0}},data:function(){return{isPlay:!1}},computed:{},mounted:function(){this.$nextTick((function(){}))},methods:{playVideo:function(){var e=this,t=this.$refs.playIcon.parentNode;if(t.querySelector(".video")){var video=t.querySelector(".video");video.play(),this.isPlay=!0,video.addEventListener("ended",(function(){e.isPlay=!1,video.load()}))}else this.isPlay=!0}}},o=n(21),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isDivider?n("div",{staticClass:"land-divider__play",class:{"d-none":e.isPlay}},[n("div",{ref:"playIcon",staticClass:"play-icon",attrs:{"data-cursor":""},on:{click:e.playVideo}}),e._v(" "),n("p",{staticClass:"land-text"},[e._v("\n    Посмотреть видео о сайте\n  ")])]):n("div",{ref:"playIcon",staticClass:"play-icon",class:{"d-none":e.isPlay},attrs:{"data-cursor":""},on:{click:e.playVideo}})}),[],!1,null,null,null);t.default=component.exports}}]);