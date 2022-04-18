<template>
  <div ref="parent" class="trigger-round hidden">
    <svg class="trigger-round-icon">
      <circle ref="icon" class="trigger-round-circle" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'NuxtCursorCircle',
  computed: {
  },
  // watch: {
  //   isPreloaderDelay (val) {
  //     if (val) {
  //       console.log('ss');
  //       this.$customMouse(this.$refs.parent, this.$refs.icon)
  //     }
  //   }
  // },
  // computed: {
  //   isPreloaderDelay () {
  //     const isFinishedDelay = this.$store.getters['preloader/isFinishedDelay']
  //     return isFinishedDelay
  //   }
  // },
  mounted () {
    // setTimeout(() => {
    //   this.$customMouse(this.$refs.parent, this.$refs.icon)
    // }, 100);
    this.$customMouse(this.$refs.parent, this.$refs.icon)
  }
}
</script>
