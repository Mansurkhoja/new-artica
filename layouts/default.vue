<template>
  <div class="layout layout--main">
    <div class="wrapper disabled">
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
  name: 'DefaultLayout',
  data () {
    return {
      animation1: null,
      animation2: null
    }
  },
  // head () {
  //   return {
  //     htmlAttrs: {
  //       class: this.isDark
  //     }
  //   }
  // },
  computed: {
    isDark () {
      const isDark = this.$store.getters['theme/isDark']
      return isDark ? 'dark-theme' : 'light-theme'
    }
    // isPreloaderDelay () {
    //   const isFinishedDelay = this.$store.getters['preloader/isFinishedDelay']
    //   return isFinishedDelay
    // }
  },
  watch: {},
  mounted () {
    this.addClassTheme()
    this.$touchHoverEvents()
    // this.$animateFake3d(this.animation1, this.animation2)
  },
  methods: {
    addClassTheme () {
      // document.documentElement.classList.remove('d-none')
      document.documentElement.classList.remove('dark-theme')
      document.documentElement.classList.remove('light-theme')
      document.documentElement.classList.add(this.isDark)
    },
    updateTheme () {
      this.$store.dispatch('theme/updateTheme')
      this.addClassTheme()
    }
  }
}
</script>

<style lang="scss">
</style>
