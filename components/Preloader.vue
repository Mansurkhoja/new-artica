<template>
  <div ref="preloader" class="preloader">
    <Logo ref="preloaderIcon" class="preloader__icon" />
  </div>
</template>

<script>
import Logo from '~/assets/icons/logo.svg?inline';

export default {
  name: 'NuxtPreloader',
  components: {
    Logo,
  },
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
      this.$store.commit("preloader/setFinish");
      this.$splitting()
      setTimeout(() => {
        this.$store.commit("preloader/setFinishDelay");
        this.$headerAnimations().fadeIn();
        this.$animateFake3d(this.animation1, this.animation2)
        document.querySelector('.wrapper').classList.remove('disabled');
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
