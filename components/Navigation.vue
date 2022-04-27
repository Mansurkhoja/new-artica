<template>
  <nav ref="nav" class="nav">
    <div class="container">
      <div class="nav__container">
        <div class="nav-m">
          <ul class="nav-m__list">
            <nuxt-link to="/category" custom v-slot="{ isActive }">
              <li class="nav-m__item" :class="isActive ? 'disabled' : ''">
                <a
                  href="/category"
                  class="nav-m__link"
                  :class="isActive ? 'active' : ''"
                  data-list="categories"
                >
                  Мы делаем
                </a>
              </li>
            </nuxt-link>
            <nuxt-link to="/projects" custom v-slot="{ isActive }">
              <li class="nav-m__item" :class="isActive ? 'disabled' : ''">
                <a
                  href="/projects"
                  class="nav-m__link"
                  :class="isActive ? 'active' : ''"
                  data-list="projects"
                >
                  Проекты
                </a>
              </li>
            </nuxt-link>
            <nuxt-link to="/contacts" custom v-slot="{ isActive }">
              <li class="nav-m__item" :class="isActive ? 'disabled' : ''">
                <a
                  href="/contacts"
                  class="nav-m__link"
                  :class="isActive ? 'active' : ''"
                >
                  Контакты
                </a>
              </li>
            </nuxt-link>
          </ul>
        </div>
        <div class="nav-s-area">
          <div class="nav-s-area__container">
            <!--categories-->
            <div class="nav-s" data-list="categories">
              <ul class="nav-s__list">
                <li class="nav-s__item">
                  <!-- {{$route.path=="/category"}} -->
                  <nuxt-link
                    active-class="active"
                    class="nav-s__link"
                    to="/category/all/"
                    >Всё</nuxt-link
                  >
                </li>
                <li class="nav-s__item">
                  <nuxt-link
                    active-class="active"
                    class="nav-s__link"
                    to="/category/userinterface/"
                    >Пользовательский интерфейс</nuxt-link
                  >
                </li>
                <li class="nav-s__item">
                  <nuxt-link
                    active-class="active"
                    class="nav-s__link"
                    to="/category/graphicdesign/"
                    >Графический дизайн</nuxt-link
                  >
                </li>
                <li class="nav-s__item">
                  <nuxt-link
                    active-class="active"
                    class="nav-s__link"
                    to="/category/webdesign/"
                    >Веб-дизайн</nuxt-link
                  >
                </li>
                <li class="nav-s__item">
                  <nuxt-link
                    active-class="active"
                    class="nav-s__link"
                    to="/category/identity/"
                    >Фирменный стиль</nuxt-link
                  >
                </li>
                <li class="nav-s__item">
                  <nuxt-link
                    active-class="active"
                    class="nav-s__link"
                    to="/category/apps/"
                    >Приложения</nuxt-link
                  >
                </li>
              </ul>
            </div>
            <!--projects-->
            <div class="nav-s" data-list="projects">
              <ul class="nav-s__list">
                <li class="nav-s__item">
                  <nuxt-link
                    active-class="active"
                    class="nav-s__link"
                    to="/projects/navigator/"
                    >Навигатор</nuxt-link
                  >
                </li>
                <li class="nav-s__item">
                  <nuxt-link
                    active-class="active"
                    class="nav-s__link"
                    to="/projects/majolika/"
                    >Майолика</nuxt-link
                  >
                </li>
                <li class="nav-s__item">
                  <nuxt-link
                    active-class="active"
                    class="nav-s__link"
                    to="/projects/route66/"
                    >Route 66</nuxt-link
                  >
                </li>
                <li class="nav-s__item">
                  <nuxt-link
                    active-class="active"
                    class="nav-s__link"
                    to="/projects/patron/"
                    >Patron</nuxt-link
                  >
                </li>
                <li class="nav-s__item">
                  <nuxt-link
                    active-class="active"
                    class="nav-s__link"
                    to="/projects/twonp/"
                    >Twonp</nuxt-link
                  >
                </li>
                <li class="nav-s__item">
                  <nuxt-link
                    active-class="active"
                    class="nav-s__link"
                    to="/projects/inpool/"
                    >Inpool</nuxt-link
                  >
                </li>
                <li class="nav-s__item">
                  <nuxt-link
                    active-class="active"
                    class="nav-s__link"
                    to="/projects/nce/"
                    >NCE</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import VirtualScroll from "virtual-scroll";
const speed = 1;
import { Nav } from "~/animations";
export default {
  name: "NuxtNavigation",
  data() {
    return {
      isFistTime: true,
    };
  },
  computed: {
    isNav() {
      return this.$store.getters["nav/isNav"];
    },
  },
  watch: {
    $route() {
      if (!this.isFistTime) {
        this.$nextTick(() => {
          setTimeout(() => {
            this.change();
          }, 50);
        });
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
      this.isFistTime = false;
    });
  },
  methods: {
    init() {
      this.$nav = document.querySelector(".nav");
      this.$toggle = document.querySelector(".nav-toggle");
      this.available = true;
      this.$links = this.$nav.querySelectorAll("a");
      this.$nav_m = document.querySelector(".nav-m");
      this.$nav_s = document.querySelectorAll(".nav-s");
      this.$nav_m_links = document.querySelectorAll(".nav-m__link");
      this.$nav_m_items = document.querySelectorAll(".nav-m__item");
      this.$nav_m_links.forEach(($link) => {
        this.$gsap.set($link, { scale: 0.66, xPercent: -17, autoAlpha: 1 });
      });
      this.$nav_s_links = document.querySelectorAll(".nav-s__link");
      this.$nav_s_items = document.querySelectorAll(".nav-s__item");
      this.scrollbar = {};
      this.scrollable = false;
      /* ===== Gsap effects ===== */
      this.$gsap.registerEffect({
        name: "active",
        effect: ($target) => {
          return this.$gsap.to($target, {
            duration: speed,
            scale: 1,
            xPercent: 0,
            autoAlpha: 1,
            ease: "power2.out",
          });
        },
      });
      this.$gsap.registerEffect({
        name: "hover1",
        effect: ($target) => {
          return this.$gsap.to($target, {
            duration: speed / 2,
            scale: 0.68,
            xPercent: -16,
            autoAlpha: 1,
            ease: "power2.out",
          });
        },
      });
      this.$gsap.registerEffect({
        name: "hover2",
        effect: ($target) => {
          return this.$gsap.to($target, {
            duration: speed / 2,
            scale: 0.68,
            xPercent: -16,
            autoAlpha: 0.6,
            ease: "power2.out",
          });
        },
      });
      this.$gsap.registerEffect({
        name: "default",
        effect: ($target) => {
          return this.$gsap.to($target, {
            duration: speed / 2,
            scale: 0.66,
            xPercent: -17,
            autoAlpha: 0.15,
            ease: "power2.out",
          });
        },
      });
      this.$gsap.registerEffect({
        name: "vertical",
        effect: ($target, y) => {
          return this.$gsap.to($target, {
            duration: speed,
            y: y,
            ease: "power2.out",
          });
        },
      });

      /* ===== Toggle Nav Events ===== */
      this.$toggle.addEventListener("click", () => {
        if (this.available === true) {
          this.available = false;
          if (this.isNav === false) {
            this.open();
          } else {
            this.close();
          }
        }
      });
      /* ===== Sub Nav Scrollbars ===== */
      this.initScrollbars();

      /* ===== Events ===== */

      this.$nav_m_links.forEach(($link) => {
        /* ===== Click ===== */
        $link.addEventListener("click", (event) => {
          event.preventDefault();
          clearTimeout(this.timeout);
          let data = $link.getAttribute("data-list");
          if (data !== null) {
            this.$nav_s_active = document.querySelector(
              `.nav-s[data-list='${data}']`
            );
          } else {
            this.$nav_s_active = undefined;
            this.$router.push($link.getAttribute("href"));
          }

          if (this.$nav_m_link_active !== undefined) {
            this.$nav_m_link_active.parentNode.classList.remove("disabled");
            this.$gsap.to(this.$nav_m_link_active, {
              duration: speed / 2,
              scale: 0.66,
              xPercent: -17,
              autoAlpha: 0.1,
              ease: "power2.out",
            });
          }

          this.$nav_m_link_active = $link;
          this.$gsap.effects.active($link);
          $link.parentNode.classList.add("disabled");
          this.vertical_nav_m_links_moving();
          this.toggle_nav_s();
        });
        /* ===== Mouseenter ===== */
        $link.addEventListener("mouseenter", () => {
          clearTimeout(this.timeout);
          if (this.$nav_m_link_active !== undefined) {
            this.$gsap.effects.hover2($link);
          } else {
            this.$nav_m_links.forEach(($element) => {
              if ($element == $link) {
                this.$gsap.effects.hover1($element);
              } else {
                this.$gsap.effects.default($element);
              }
            });
          }
        });
        /* ===== Mouseleave ===== */
        $link.addEventListener("mouseleave", () => {
          clearTimeout(this.timeout);
          if (this.$nav_m_link_active !== undefined) {
            if ($link !== this.$nav_m_link_active) {
              this.$gsap.effects.default($link);
            }
          } else {
            this.timeout = setTimeout(() => {
              this.$gsap.effects.hover1(this.$nav_m_links);
            }, 500);
          }
        });
      });
      /* ===== Mouseleave ===== */
      this.$nav_m.addEventListener("mouseleave", () => {
        clearTimeout(this.timeout);
        if (this.$nav_m_link_active == undefined) {
          this.$gsap.effects.hover1(this.$nav_m_links);
        }
      });

      this.change();
    },
    getNavAnimation(callback) {
      let fromVal = 0;
      this.$nav_m_links.forEach(($link, index) => {
        if ($link == this.$nav_m_link_active) {
          fromVal = index;
        }
      });
      /* ===== Toggle Nav Animations ===== */
      this.animation = this.$gsap
        .timeline({ paused: true })
        .fromTo(
          this.$toggle.querySelector("span:first-child"),
          { y: 0 },
          { duration: speed * 0.5, y: 8, ease: "power2.in" }
        )
        .fromTo(
          this.$toggle.querySelector("span:last-child"),
          { y: 0 },
          { duration: speed * 0.5, y: -8, ease: "power2.in" },
          `-=${speed * 0.5}`
        )
        .fromTo(
          this.$toggle.querySelector("span:nth-child(2)"),
          { autoAlpha: 1 },
          { duration: speed * 0.25, autoAlpha: 0 },
          `-=${speed * 0.25}`
        ) //0.5
        .fromTo(
          this.$toggle.querySelector("span:first-child"),
          { rotation: 0 },
          { duration: speed * 0.75, rotation: 45, ease: "power2.out" }
        )
        .fromTo(
          this.$toggle.querySelector("span:last-child"),
          { rotation: 0 },
          { duration: speed * 0.75, rotation: 135, ease: "power2.out" },
          `-=${speed * 0.75}`
        ) //1.25
        .fromTo(
          this.$nav,
          { autoAlpha: 0 },
          { duration: speed / 2, autoAlpha: 1, ease: "power2.inOut" },
          `-=${speed * 1.25}`
        ) //1.25
        .fromTo(
          this.$nav_m_items,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            ease: "power2.inOut",
            duration: speed,
            stagger: { amount: speed * 0.15, from: fromVal },
          },
          `-=${speed * 0.9}`
        )
        .fromTo(
          this.$nav_m_items,
          { x: -200 },
          {
            x: 0,
            ease: "power2.out",
            duration: speed,
            stagger: { amount: speed * 0.15, from: fromVal },
          },
          `-=${speed * 1.15}`
        );

      if (callback !== undefined) {
        callback();
      }
    },
    vertical_nav_m_links_moving() {
      let nav_height = this.$nav_m.getBoundingClientRect().height,
        item_height =
          this.$nav_m_links[0].parentNode.getBoundingClientRect().height,
        item_margin = (nav_height - item_height * 3) / 2,
        moving_height = item_height + item_margin,
        index;
      if (this.$nav_m_link_active !== undefined) {
        let $link = this.$nav_m_link_active;
        this.$nav_m_links.forEach(($this, i) => {
          if ($this == $link) {
            index = i;
          }
        });
        //vertical move
        if (index == 0) {
          this.$gsap.effects.vertical($link, moving_height);
          this.$nav_m_links.forEach(($this, i) => {
            if (i == 1 || i == 2) {
              this.$gsap.effects.vertical($this, -moving_height / 2);
            }
          });
        } else if (index == 1) {
          this.$gsap.effects.vertical($link, "0");
          this.$nav_m_links.forEach(($this, i) => {
            if (i == 0) {
              this.$gsap.effects.vertical($this, moving_height / 2);
            } else if (i == 2) {
              this.$gsap.effects.vertical($this, -moving_height / 2);
            }
          });
        } else {
          this.$gsap.effects.vertical($link, -moving_height);
          this.$nav_m_links.forEach(($this, i) => {
            if (i == 0 || i == 1) {
              this.$gsap.effects.vertical($this, moving_height / 2);
            }
          });
        }
      } else {
        this.$nav_m_links.forEach(($this, i) => {
          if (i == 0) {
            this.$gsap.effects.vertical($this, moving_height * 0.15);
            // this.$gsap.to($this, {duration:speed/2, y:moving_height*0.15, ease:'power2.inOut'})
          } else if (i == 1) {
            this.$gsap.effects.vertical($this, "0");
            // this.$gsap.to($this, {duration:speed/2, y:0, ease:'power2.inOut'})
          } else {
            // this.$gsap.to($this, {duration:speed/2, y:-moving_height*0.15, ease:'power2.inOut'})
            this.$gsap.effects.vertical($this, -moving_height * 0.15);
          }
        });
      }
    },
    toggle_nav_s() {
      let $nav = this.$nav_s_active,
        index = 0;
      if ($nav !== undefined) {
        let $items = $nav.querySelectorAll(".nav-s__item");
        //get active link index
        $nav.querySelectorAll(".nav-s__link").forEach(($link, i) => {
          if ($link == this.$nav_s_link_active) {
            index = i;
          }
        });
        //animation
        this.nav_s_animation = this.$gsap
          .timeline({ paused: true })
          .set($nav, { autoAlpha: 1 })
          .fromTo(
            $items,
            { autoAlpha: 0 },
            {
              duration: speed,
              autoAlpha: 1,
              ease: "power2.inOut",
              stagger: { amount: speed * 0.25, from: index },
            }
          )
          .fromTo(
            $items,
            { x: 100 },
            {
              duration: speed,
              x: 0,
              ease: "power2.out",
              stagger: { amount: speed * 0.25, from: index },
            },
            `-=${speed * 1.25}`
          );
        let s; //scroll to link speed
        if (
          this.$nav_s_old == undefined ||
          this.$nav_s_active !== this.$nav_s_old
        ) {
          s = 0;
          if (this.isNav) this.nav_s_animation.play();
          if (this.$nav_s_active !== this.$nav_s_old) {
            this.$gsap
              .timeline()
              .to(this.$nav_s_old, {
                duration: speed / 2,
                autoAlpha: 0,
                ease: "power2.out",
              });
          }
        } else {
          s = speed;
          if (this.isNav) this.nav_s_animation.progress(1);
        }
        this.scrollToActiveLink(s);
      } else if (this.$nav_s_old !== undefined) {
        //let $navOld = this.$nav_s_old;
        this.$gsap
          .timeline()
          .to(this.$nav_s_old, {
            duration: speed / 2,
            autoAlpha: 0,
            ease: "power2.out",
          });
        this.nav_s_animation = undefined;
      }
      this.$nav_s_old = this.$nav_s_active;
    },
    scrollToActiveLink(scrollSpeed) {
      let i;
      this.$nav_s.forEach(($nav, index) => {
        if ($nav == this.$nav_s_active) {
          i = index;
        }
      });
      if (
        this.$nav_s_link_active !== undefined &&
        this.$nav_s_link_active.closest(".nav-s") == this.$nav_s_active
      ) {
        let val,
          $link = this.$nav_s_link_active;
        let h1 = $link.getBoundingClientRect().height;
        let h2 = this.scrollbar[i].navHeight();
        if (h1 > h2) {
          val =
            this.scrollbar[i].$scrollarea.getBoundingClientRect().top -
            $link.getBoundingClientRect().top -
            (h1 - h2) / 2;
        } else {
          val =
            this.scrollbar[i].$scrollarea.getBoundingClientRect().top -
            $link.getBoundingClientRect().top;
        }
        this.scrollbar[i].scrollTo(val, scrollSpeed);
      } else {
        this.scrollbar[i].scrollTo(0, scrollSpeed);
      }
    },
    change() {
      let count = 0;
      let active_s_link = document.querySelector(".nav-s__link.active");

      if (active_s_link) {
        count++;
        this.$nav_s_link_active = active_s_link;
        this.$nav_s_active = active_s_link.closest(".nav-s");
      }
      if (count === 0) {
        this.$nav_s_active = undefined;
        this.$nav_s_link_active = undefined;
      } else {
        count = 0;
      }

      this.$nav_m_links.forEach(($link) => {
        let data = $link.getAttribute("data-list"),
          list =
            this.$nav_s_active !== undefined
              ? this.$nav_s_active.getAttribute("data-list")
              : false;
        if ($link.classList.contains("active") || data == list) {
          count++;
          if ($link !== this.$nav_m_link_active) {
            $link.parentNode.classList.add("disabled");
            $link.classList.add("active");
            this.$gsap.effects.active($link);
            this.$nav_m_link_active = $link;
          }
        } else {
          $link.parentNode.classList.remove("disabled");
          $link.classList.remove("active");
          this.$gsap.effects.default($link);
        }
      });
      if (count == 0) {
        this.$nav_m_link_active = undefined;
        this.$gsap.effects.hover1(this.$nav_m_links);
      }
      this.toggle_nav_s();
      this.vertical_nav_m_links_moving();
      if (this.isNav) {
        setTimeout(() => {
          this.close();
        }, speed * 500);
      }
    },
    initScrollbars() {
      let $parent = document.querySelector(".nav-s-area"),
        $container = document.querySelector(".nav-s-area__container");
      let setHeight = () => {
        let values = [];
        this.$nav_s.forEach(($list, index) => {
          values[index] = $list
            .querySelector("ul")
            .getBoundingClientRect().height;
        });
        let h = Math.min.apply(null, values);
        $container.style.height = `${h}px`;
      };

      $parent.addEventListener("mouseenter", () => {
        if (this.$device.isDesktop) {
          this.scrollable = true;
        }
      });
      $parent.addEventListener("mouseleave", () => {
        if (this.$device.isDesktop) {
          this.scrollable = false;
        }
      });
      $parent.addEventListener("touchstart", () => {
        this.scrollable = true;
      });
      $parent.addEventListener("touchend", () => {
        this.scrollable = false;
      });
      setHeight();
      window.addEventListener("resize", function () {
        setHeight();
      });

      this.$nav_s.forEach(($nav, index) => {
        let $scrollbar = (this.scrollbar[index] = []);
        $scrollbar.$scrollarea = $nav.querySelector("ul");
        $scrollbar.ease = 0.05;
        $scrollbar.currentY = 0;
        $scrollbar.targetY = 0;
        $scrollbar.inscroll = false;
        $scrollbar.navHeight = () => {
          let h = $nav.querySelectorAll("a")[0].getBoundingClientRect().height;
          $nav.style.height = `${h}px`;
          return h;
        };
        $scrollbar.navHeight();
        $scrollbar.height = () => {
          return (
            $scrollbar.$scrollarea.getBoundingClientRect().height -
            $scrollbar.navHeight()
          );
        };
        $scrollbar.instance = new VirtualScroll({ passive: false });
        $scrollbar.instance.on((event) => {
          if (
            this.scrollable == true &&
            !$scrollbar.inscroll &&
            $nav == this.$nav_s_active
          ) {
            $scrollbar.targetY += event.deltaY;
            $scrollbar.targetY = Math.max(
              -$scrollbar.height(),
              $scrollbar.targetY
            );
            $scrollbar.targetY = Math.min(0, $scrollbar.targetY);
          }
        });
        $scrollbar.animation = () => {
          requestAnimationFrame($scrollbar.animation);
          if (!$scrollbar.inscroll) {
            $scrollbar.currentY +=
              ($scrollbar.targetY - $scrollbar.currentY) * $scrollbar.ease;
            $scrollbar.currentY =
              $scrollbar.currentY > -0.1 ? 0 : $scrollbar.currentY;
            $scrollbar.$scrollarea.style.transform = `translate3d(0, ${$scrollbar.currentY}px, 0)`;
          }
        };
        $scrollbar.animation();
        $scrollbar.scrollTo = (value, s = speed) => {
          $scrollbar.inscroll = true;
          if ($scrollbar.animationScroll !== undefined) {
            $scrollbar.animationScroll.pause();
          }
          $scrollbar.animationScroll = this.$gsap.fromTo(
            $scrollbar.$scrollarea,
            { y: $scrollbar.currentY },
            {
              duration: s,
              y: value,
              ease: "power2.inOut",
              onComplete: function () {
                $scrollbar.inscroll = false;
              },
            }
          );
          $scrollbar.currentY = value;
          $scrollbar.targetY = value;
        };
      });
    },
    open() {
      this.$store.dispatch("nav/updateNav");
      Nav.state = true;
      // Header.show();
      this.$toggle.classList.add("disabled");
      this.getNavAnimation(() => {
        this.animation.play();
        this.animation.eventCallback("onComplete", () => {
          this.available = true;
        });
      });
      //subnav anims
      if (this.nav_s_animation) {
        setTimeout(() => {
          this.nav_s_animation.play();
        }, speed * 250);
      }
    },
    close() {
      this.$store.dispatch("nav/updateNav");
      Nav.state = false;
      this.getNavAnimation(() => {
        this.animation.reverse(0);
        this.animation.eventCallback("onReverseComplete", () => {
          this.$toggle.classList.remove("disabled");
          this.available = true;
        });
      });
      if (this.nav_s_animation) {
        this.nav_s_animation.reverse();
      }
    },
  },
};
</script>

<style lang="scss">
</style>
