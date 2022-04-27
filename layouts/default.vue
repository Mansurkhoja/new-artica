<template>
  <div class="layout layout--main">
    <div class="wrapper disabled">
      <div class="scrollbar">
        <div class="scrollbar__container">
          <div class="scrollbar__scroller"></div>
        </div>
      </div>
      <Header @updateTheme="updateTheme" />
      <Navigation />
      <Nuxt />
    </div>
    <CursorCircle v-if="$device.isDesktop" />
    <Preloader />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      animation1: null,
      animation2: null,
    };
  },
  // head () {
  //   return {
  //     htmlAttrs: {
  //       class: this.isDark
  //     }
  //   }
  // },
  computed: {
    isDark() {
      const isDark = this.$store.getters["theme/isDark"];
      return isDark ? "dark-theme" : "light-theme";
    },
    isTransition() {
      const isTransition = this.$store.getters["transition/isTransition"];
      return isTransition;
    },
  },
  watch: {},
  mounted() {
    this.addClassTheme();
    this.$touchHoverEvents();
  },
  methods: {
    addClassTheme() {
      document.documentElement.classList.remove("dark-theme");
      document.documentElement.classList.remove("light-theme");
      document.documentElement.classList.add(this.isDark);
    },
    updateTheme() {
      this.$store.dispatch("theme/updateTheme");
      this.addClassTheme();
    },
  },
};
</script>

