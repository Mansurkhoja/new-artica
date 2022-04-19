<template>
  <header ref="header" class="header" style="opacity: 0; visibility: hidden">
    <div class="container">
      <div class="header__container">
        <div class="logo">
          <NuxtLink to="/" class="logo__link">
            <Logo class="logo__icon" />
          </NuxtLink>
        </div>
        <!--.lang-toggle.lang-toggle__current ru
            ul.lang-toggle__list
              li.lang-toggle__item
                a(href="javascript:void(0);").lang-toggle__toggle 
              li.lang-toggle__item
                a(href="javascript:void(0);").lang-toggle__toggle 
            -->
        <div class="mode-toggle">
          <span class="mode-toggle__trigger" data-cursor @click="$emit('updateTheme')"></span>
          <!-- <a
            class="mode-toggle__trigger js-dark-toggle"
            href="javascript:void(0);"
          ></a> -->
        </div>
        <div
          data-cursor
          class="nav-toggle"
          :class="{ hover: isHover, disabled: isNavOpen }"
          @click="toggleNav"
          @mouseleave="hoverNav"
          @mouseenter="hoverNav"
        >
          <span /><span /><span />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/assets/icons/logo.svg?inline';
export default {
  name: 'NuxtHeader',
  components: {
    Logo
  },
  data() {
    return {
      refHeader: null,
      isHover: false,
      isNavOpen: false,
      speed: 1,
      isVisible: false,
      animation: null
    };
  },
  computed: {
    isPreloaderDelay () {
      const isFinishedDelay = this.$store.getters['preloader/isFinishedDelay']
      return isFinishedDelay
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
    if (this.isPreloaderDelay) {
      this.fadeIn()
    }
    // this.$headerAnimations().fadeIn();
    // this.$headerAnimations(this.$refs.header).init()
  },
  methods: {
    opens() {
      this.$store.commit("menu/showMenu");
    },
    hoverNav() {
      this.isHover = !this.isHover;
    },
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    fadeIn() {
      this.$gsap.to(this.refHeader, { duration: this.speed, autoAlpha: 1, ease: 'power2.inOut' });
    },
    show() {
      if (!this.isVisible) {
        this.isVisible = true;
        if (this.animation) this.animation.pause();
        this.animation = this.$gsap
          .timeline()
          .to(this.refHeader, { yPercent: 0, duration: this.speed, ease: 'power2.out' });
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
        .to(this.refHeader, { yPercent: -100, duration: this.speed, ease: 'power2.in' });

      // window.addEventListener('ScrollBottom', () => {
      //   this.hide();
      // });

      // window.addEventListener('ScrollTop', () => {
      //   this.show();
      // });
    },
  },
};
</script>

<style lang="scss">
</style>
