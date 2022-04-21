<template>
  <header ref="header" class="header" style="opacity: 0; visibility: hidden">
    <div class="container">
      <div class="header__container">
        <div class="logo">
          <NuxtLink v-if="$route.name !== 'index'" to="/" class="logo__link">
            <Logo class="logo__icon" />
          </NuxtLink>
          <span v-else class="logo__link" @click="homeFirstSlide" data-cursor>
            <Logo class="logo__icon" />
          </span>
        </div>
        <div class="mode-toggle">
          <span class="mode-toggle__trigger" data-cursor @click="$emit('updateTheme')"></span>
        </div>
        <div
          ref="toggle"
          data-cursor
          class="nav-toggle"
        >
          <span /><span /><span />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/assets/icons/logo.svg?inline';
import {Home} from '~/animations/home'
const speed = 1
export default {
  name: 'NuxtHeader',
  components: {
    Logo
  },
  data() {
    return {
      refHeader: null,
      refToggle: null,
      isVisible: false,
      animation: null,
      // animationNav: null,
      // toggleNavDisable: false,
      // isToggle: true
    };
  },
  computed: {
    isPreloaderDelay() {
      const isFinishedDelay = this.$store.getters['preloader/isFinishedDelay']
      return isFinishedDelay
    },
    isNav() {
      return this.$store.getters['nav/isNav']
    }
  },
  watch: {
    isPreloaderDelay(val) {
     if (val === true) {
       this.fadeIn()
     }
    },
  },
  mounted() {
    this.refHeader = this.$refs.header
    // this.refToggle = this.$refs.toggle
    if (this.isPreloaderDelay) {
      this.fadeIn()
    }
    // this.animationToggle =  this.$gsap.timeline({paused:true})
    //     .fromTo(this.refToggle.querySelector('span:first-child'), {y:0}, {duration:speed*0.5, y:8, ease:'power2.in'})
    //     .fromTo(this.refToggle.querySelector('span:last-child'), {y:0}, {duration:speed*0.5, y:-8, ease:'power2.in'}, `-=${speed*0.5}`)
    //     .fromTo(this.refToggle.querySelector('span:nth-child(2)'), {autoAlpha:1}, {duration:speed*0.25, autoAlpha:0}, `-=${speed*0.25}`)   //0.5
    //     .fromTo(this.refToggle.querySelector('span:first-child'), {rotation:0}, {duration:speed*0.75, rotation:45, ease:'power2.out'})
    //     .fromTo(this.refToggle.querySelector('span:last-child'), {rotation:0}, {duration:speed*0.75, rotation:135, ease:'power2.out'}, `-=${speed*0.75}`) //1.25
  },
  methods: {
    homeFirstSlide() {
      let hash = this.$route?.hash ? this.$route.hash.replace( /^\D+/g, '') : 0
      if (hash > 0) {
        Home.change(0)
      }
      this.$router.push({hash: ''})
    },
    fadeIn() {
      this.$gsap.to(this.refHeader, { duration: speed, autoAlpha: 1, ease: 'power2.inOut' });
    },
    show() {
      if (!this.isVisible) {
        this.isVisible = true;
        if (this.animation) this.animation.pause();
        this.animation = this.$gsap
          .timeline()
          .to(this.refHeader, { yPercent: 0, duration: speed, ease: 'power2.out' });
      }
    },
    hide() {
      // if (
      //   this.isVisible &&
      //   Scroll.y < -this.$header.getBoundingClientRect().height &&
      //   !Nav.state
      // ) {
      //   this.isVisible = false;
      //   if (this.animation) this.animation.pause();
      //   this.animation = gsap
      //     .timeline()
      //     .to(this.$header, { yPercent: -100, duration: speed, ease: 'power2.inOut' });
      // }
    },
    init() {
      this.isVisible = true;
      this.animation = this.$gsap
        .timeline({ paused: true })
        .to(this.refHeader, { yPercent: -100, duration: speed, ease: 'power2.in' });

      // window.addEventListener('ScrollBottom', () => {
      //   this.hide();
      // });

      // window.addEventListener('ScrollTop', () => {
      //   this.show();
      // });
    },
    // toggleNav() {
    //   if(this.isToggle===true) {
    //     this.isToggle=false;
    //     if(this.isNav===false) {
    //       this.toggleNavDisable = true
    //       this.$store.dispatch('nav/updateNav')
    //        this.animationToggle.play().eventCallback("onComplete",()=>{
    //             this.isToggle=true;
    //         });
    //     } else {
    //       this.toggleNavDisable = false
    //        this.$store.dispatch('nav/updateNav')
    //        this.animationToggle.reverse(0).eventCallback("onReverseComplete",()=>{
    //             this.isToggle=true;
    //         });
    //     }
    //   }
    // },
  },
};
</script>

<style lang="scss">
</style>
