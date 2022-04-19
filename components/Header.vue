<template>
  <header class="header" style="opacity: 0; visibility: hidden">
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
