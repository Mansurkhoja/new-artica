<template>
  <header class="header" style="opacity: 0; visibility: hidden">
    <div class="container">
      <div class="header__container">
        <div class="logo">
          <NuxtLink to="/" class="logo__link">
            <svg class="logo__icon" viewBox="0 0 160.5 32">
              <path d="M92.8,10.4h-3.5V32h3.5V10.4z"></path>
              <path
                d="M111.1,10.2c-2.9,0-5.7,1.1-7.7,3.2c-2.1,2.1-3.2,4.8-3.2,7.7s1.1,5.7,3.2,7.7c2.1,2.1,4.8,3.2,7.7,3.2c3.2,0,6.2-1.4,8.3-3.8l-2.6-1.6c-1.5,1.5-3.5,2.4-5.6,2.4c-4.4,0-7.9-3.6-7.9-7.9s3.6-7.9,7.9-7.9c2.1,0,4.1,0.8,5.6,2.4l2.6-1.6C117.2,11.6,114.2,10.2,111.1,10.2z"
              ></path>
              <path
                d="M141.5,7.1l0.1,0.1L156.3,32h4.3l-19-32l-19,32h4.3l14.7-24.7L141.5,7.1z"
              ></path>
              <path
                d="M50.9,22.5l0.1,0c2.8-0.6,4.8-3.1,4.8-6c0-3.4-2.7-6.1-6.1-6.1H36.1l1.9,3.1h11.8c1.7,0,3,1.4,3,3.1c0,1.7-1.3,3.1-3,3.1h-0.6h-2v3.1v0.1l5.5,9.2h3.8L51,22.6L50.9,22.5z"
              ></path>
              <path
                d="M81.7,13.6v-3.3H63v3.3h7.5h0.1v0.1V32h3.5V13.7v-0.1h0.1H81.7z"
              ></path>
              <path
                d="M0,32h4.3L19,7.3L19,7.1l0.1,0.1L33.8,32h4.3L19,0L0,32z"
              ></path>
            </svg>
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
export default {
  name: "NuxtHeader",
  data() {
    return {
      isHover: false,
      isNavOpen: false,
    };
  },
  computed: {
    // isDark () {
    //   const isDark = this.$store.getters['theme/isDark']
    //   return isDark
    // }
  },
  mounted() {
    this.$headerAnimations().init()
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
  },
};
</script>

<style lang="scss">
</style>
