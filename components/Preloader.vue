<template>
  <div ref="preloader" class="preloader preloader--hide">
    <svg ref="preloaderIcon" class="preloader__icon" viewBox="0 0 161.1 32.4">
      <path d="M19.3,7.2L34,32.3h4.3l-19-32l-19,32h4.3    L19.3,7.2z" />
      <path
        d="M51.1,22.7L51.1,22.7c2.8-0.6,4.8-3.1,4.8-6    c0-3.4-2.7-6.1-6.1-6.1H36.3l1.9,3.1H50c1.7,0,3,1.4,3,3.1c0,1.7-1.3,3.1-3,3.1h-0.6h-2V23v0.1l5.5,9.2h3.8L51.1,22.7L51.1,22.7z"
      />
      <path
        d="M81.9,14v-3.3H63.3V14h7.5h0.1v0.1v18.2h3.5V14.1    V14h0.1L81.9,14z"
      />
      <path d="M93.1,10.7h-3.5v21.6h3.5V10.7z" />
      <path
        d="M111.4,10.7c-2.9,0-5.6,1.1-7.6,3.2    c-2.1,2.1-3.2,4.8-3.2,7.6s1.1,5.6,3.2,7.6c2.1,2.1,4.8,3.2,7.6,3.2c3.2,0,6.1-1.4,8.2-3.8l-2.6-1.6c-1.5,1.5-3.5,2.4-5.5,2.4    c-4.4,0-7.8-3.6-7.8-7.8s3.6-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.4l2.6-1.6C117.4,12.1,114.4,10.7,111.4,10.7z"
      />
      <path d="M141.9,7.2l14.7,25.1h4.3l-19-32l-19,32h4.3    L141.9,7.2z" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "NuxtPreloader",
  data: () => ({
    loading: false,
    refPreloader: null,
    refPreloaderIcon: null,
    refPreloaderIconPath: null,
    durationInitial: 3,
    durationFinal: null,
    delay: null,
    preloadAnimation: null,
  }),
  beforeMount() {},
  mounted() {
    this.refPreloader = this.$refs.preloader;
    this.refPreloaderIcon = this.$refs.preloaderIcon;
    this.refPreloaderIconPath =
      this.$refs.preloaderIcon.querySelectorAll("path");

    this.init().then(() => {
      this.$store.commit('preloader/setFinish')
      setTimeout(() => {
        this.$store.commit('preloader/setFinishDelay')
        this.$headerAnimations().fadeIn()
      }, this.delay * 2000);
    });
  },
  methods: {
    init() {
      const speed = 1;
      const gsap = this.$gsap;
      const isHome = this.$route.path === "/";
      this.durationFinal = Math.max(this.durationInitial * 0.66, speed);
      this.delay = isHome ? Math.max(this.durationFinal - speed, 0) : 0;
      //animation
      this.preloadAnimation = gsap
        .timeline({ paused: true })
        .set(this.refPreloader, { autoAlpha: 1 })
        .set(this.refPreloaderIconPath, {
          css: {
            "stroke-dasharray": function (index, target, targets) {
              return target.getTotalLength();
            },
          },
        })
        .fromTo(
          this.refPreloaderIcon,
          { scale: 0.8 },
          { duration: speed * 2, scale: 1.1, ease: "power2.out" }
        )
        .fromTo(
          this.refPreloaderIconPath,
          {
            css: {
              "stroke-dashoffset": function (index, target, targets) {
                return target.getTotalLength();
              },
            },
          },
          {
            duration: speed * 1.5,
            css: { "stroke-dashoffset": 0 },
            ease: "linear",
            stagger: { amount: speed * 0.5 },
          },
          `-=${speed * 2}`
        )
        .to(
          this.refPreloaderIconPath,
          {
            duration: speed * 1.5,
            css: { fill: "inherit" },
            ease: "power2.inOut",
            stagger: { amount: speed * 0.5 },
          },
          `-=${speed * 0.5}`
        );

      return new Promise((resolve) => {
        if (this.durationInitial == 0) {
          resolve();
        } else {
          this.preloadAnimation
            .duration(this.durationInitial)
            .play()
            .eventCallback("onComplete", () => {
              //home
              if (isHome) {
                gsap
                  .timeline()
                  .to(this.refPreloaderIcon, {
                    duration: this.durationFinal,
                    scale: 1,
                    ease: "power3.inOut",
                  })
                  .set(this.refPreloader, { autoAlpha: 0 })
                  .eventCallback("onStart", () => {
                    resolve();
                  });
              }
              //else pages
              else {
                gsap
                  .timeline()
                  .to(this.refPreloaderIcon, {
                    duration: this.durationFinal,
                    scale: 1,
                    ease: "power2.inOut",
                  })
                  .to(
                    this.refPreloaderIconPath,
                    {
                      duration: this.durationFinal * 0.8,
                      autoAlpha: 0,
                      ease: "power2.inOut",
                      stagger: {
                        amount: this.durationFinal * 0.2,
                        from: "random",
                      },
                    },
                    `-=${this.durationFinal}`
                  )
                  .set(this.refPreloader, { autoAlpha: 0 })
                  .eventCallback("onComplete", () => {
                    resolve();
                  });
              }
            });
        }
      });
    },
  },
};
</script>

<style scoped>
/* .loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
} */
</style>
