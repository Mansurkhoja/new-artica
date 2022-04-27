<template>
  <header class="header" style="opacity: 0; visibility: hidden">
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
          <span
            class="mode-toggle__trigger"
            data-cursor
            @click="$emit('updateTheme')"
          ></span>
        </div>
        <div data-cursor class="nav-toggle"><span /><span /><span /></div>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "~/assets/icons/logo.svg?inline";
import { Home, Header } from "~/animations";
export default {
  name: "NuxtHeader",
  components: {
    Logo,
  },
  data() {
    return {};
  },
  computed: {
    isPreloaderDelay() {
      const isFinishedDelay = this.$store.getters["preloader/isFinishedDelay"];
      return isFinishedDelay;
    },
  },
  watch: {
    isPreloaderDelay(val) {
      if (val === true) {
        Header.fadeIn();
      }
    },
  },
  mounted() {
    Header.init();
    if (this.isPreloaderDelay) {
      Header.fadeIn();
    }
  },
  methods: {
    homeFirstSlide() {
      let hash = this.$route?.hash ? this.$route.hash.replace(/^\D+/g, "") : 0;
      if (hash > 0) {
        Home.change(0);
      }
      this.$router.push({ hash: "" });
    },
  },
};
</script>

<style lang="scss">
</style>
