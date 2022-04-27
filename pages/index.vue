<template>
  <main class="content home-content">
    <div class="m-slider">
      <section class="home m-slider-slide">
        <div class="container container_display">
          <Logo class="home-logo" style="transfor: scale(1.1)" />
        </div>
      </section>
      <section class="fast-categories m-slider-slide">
        <div class="container container_display">
          <div class="fast-categories__container row">
            <div
              v-for="(category, idx) in categories"
              :key="idx"
              class="fast-categories-block col-lg-4 col-6"
            >
              <a
                v-if="category.isLinkTarget"
                class="fast-categories-block__container js-3d-object"
                :href="category.link"
                data-cursor="reversed"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span
                  class="fast-categories-block__bg js-3d-object__back"
                  data-rotation="10"
                />
                <div
                  class="label-item js-3d-object__forward"
                  data-rotation="20"
                  data-move="10"
                >
                  <span v-html="categoryIcons[category.name]" />
                  <div
                    v-html="category.testName"
                    class="label-item__title splitted"
                    data-splitting
                  />
                </div>
              </a>
              <NuxtLink
                v-else
                class="fast-categories-block__container js-3d-object"
                :to="category.link"
                data-cursor="reversed"
              >
                <span
                  class="fast-categories-block__bg js-3d-object__back"
                  data-rotation="10"
                />
                <div
                  class="label-item js-3d-object__forward"
                  data-rotation="20"
                  data-move="10"
                >
                  <span v-html="categoryIcons[category.name]" />
                  <div
                    v-html="category.testName"
                    class="label-item__title splitted"
                    data-splitting
                  />
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
      <section
        v-for="(project, idx) in projects"
        :key="idx"
        class="project-preview m-slider-slide"
        :class="`${project.name}-preview`"
      >
        <div class="container container_display">
          <div class="project-preview__container row">
            <div class="project-preview__content col-lg-5 order-lg-1 order-2">
              <h2
                v-html="project.title"
                class="project-preview__title splitted"
                data-splitting
              />
              <span class="project-preview__line"></span>
              <p class="project-preview__text" data-splitting>
                {{ project.description }}
              </p>
              <a
                v-if="project.isHasLink"
                class="project-preview__link"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                data-splitting
              >
                {{ project.linkName }}
                <span class="line" />
              </a>
            </div>
            <div class="project-preview__image col-lg-7 order-lg-2">
              <NuxtLink :to="project.projectLink" class="project-preview-item js-3d-object">
                <div class="image cover js-3d-object__back" data-rotation="2.5">
                  <img
                    class="lazyload"
                    :data-src="require(`~/assets/images/${project.imgBack}`)"
                    alt="bg"
                  />
                </div>
                <div
                  class="image contain js-3d-object__forward"
                  data-rotation="5"
                  data-move="10"
                >
                  <img
                    class="lazyload"
                    :data-src="require(`~/assets/images/${project.img}`)"
                    alt="bg"
                  />
                </div>
              </NuxtLink>
            </div>
            <div
              class="label-item"
              :class="{
                'label-item_graphic': project.category === 'graphicdesign',
              }"
            >
              <span v-html="categoryIcons[project.category]" />
              <div
                v-html="project.categoryName"
                class="label-item__title splitted"
                data-splitting
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="m-slider-pagination">
      <div class="container">
        <div class="m-slider-pagination__container">
          <span class="m-slider-pagination__item" />
          <a
            class="m-slider-pagination__link"
            :href="`#${idx}`"
            v-for="(i, idx) in 8"
            :key="idx"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Logo from "~/assets/icons/logo.svg?inline";
import { Home } from "~/animations";
export default {
  name: "IndexPage",
  transition: {
    name: "home",
    appear: true,
    css: false,
    // mode: "out-in",
    // beforeEnter(el) {
    //   console.log('beforeEnter')
    // },
    enter(el, done) {
      if (this.$store.getters["preloader/isFinished"]) {
        if (el.classList.contains("home-content")) {
          Home.init().then(() => {
            Home.enterAnimation.play().then(() => {
              done();
            });
          });
        }
      } else {
        done();
      }
    },
    // afterEnter(el) {
    //   console.log('afterEnter')
    // },
    // enterCancelled(el) {
    //   console.log('enterCancelled')
    // },
    // beforeLeave(el) {
    //   console.log('beforeLeave')
    // },
    leave(el, done) {
      if (Home.enterAnimation) {
        Home.enterAnimation.reverse(0).then(() => {
          done();
        });
        Home.destroy();
      } else {
        done();
      }
    },
    // afterLeave(el) {
    //   console.log('afterLeave')
    // },
    // leaveCancelled(el) {
    //   console.log('leaveCancelled')
    // },
  },
  components: {
    Logo,
  },
  data() {
    return {
      categories: [
        {
          name: "marketing",
          link: "http://marketingline.ru/",
          isLinkTarget: true,
          testName: "Маркетинг",
        },
        {
          name: "userinterface",
          link: "/category/userinterface",
          isLinkTarget: false,
          testName: "Пользовательский<br>интерфейс",
        },
        {
          name: "graphicdesign",
          link: "/category/graphicdesign",
          isLinkTarget: false,
          testName: "Графический<br>дизайн",
        },
        {
          name: "webdesign",
          link: "/category/webdesign",
          isLinkTarget: false,
          testName: "Веб-дизайн",
        },
        {
          name: "identity",
          link: "/category/identity",
          isLinkTarget: false,
          testName: "Фирменный<br>стиль",
        },
        {
          name: "apps",
          link: "/category/apps",
          isLinkTarget: false,
          testName: "Приложения",
        },
      ],
      categoryIcons: {
        userinterface: `<svg class="icon" viewBox="0 0 86 109">
                    <path d="M86,66.2V0L73,0v66.2c0,8.2-2.9,15.3-8.8,21.1C58.3,93.1,51.3,96,43,96s-15.3-2.9-21.2-8.7  C15.9,81.5,13,74.4,13,66.2V0L0,0l0,66.2C0,78,4.2,88.1,12.6,96.5C21,104.8,31.1,109,43,109c11.8,0,22-4.2,30.3-12.5  C81.8,88.1,86,78,86,66.2z"></path>
                  </svg>`,
        graphicdesign: `<svg class="icon" viewBox="0 0 109 109">
                    <path d="M108.7,48.5H46.5v12h50.1C93.7,81.1,76,97,54.5,97C31,97,12,78,12,54.5S31,12,54.5,12c15.7,0,29.5,8.5,36.8,21.3l0.6,1h13.3l-1.3-2.8C95.2,12.9,76.4,0,54.5,0C24.4,0,0,24.4,0,54.5S24.4,109,54.5,109c30.1,0,54.5-24.4,54.5-54.5c0-1.4-0.1-2.8-0.2-4.2L108.7,48.5z"></path>
                  </svg>`,
        webdesign: `<svg class="icon" viewBox="0 0 187.3 109">
                    <path d="M72.5,0l49.8,83.5L172.1,0l15.2,0l-65,109L57.3,0L72.5,0z M130,0l-21.2,35.5l-7.6-12.7L114.8,0L130,0z M15.2,0  L65,83.5l13.5-22.7l7.6,12.7L65,109L0,0L15.2,0z"></path>
                  </svg>`,
        identity: `<svg class="icon" viewBox="0 0 13 109">
                    <path d="M0,0h13v109H0V0z"></path>
                  </svg>`,
        marketing: `<svg class="icon" viewBox="0 0 127.1 108.9">
                        <path d="M63.5,83.5L13.8,0L0.5,0l0,0L0,0l0,108.9l13.6,0V25.2l49.9,83.8l49.9-83.8v83.8h13.6l0-108.9l-0.7,0l-13.1,0L63.5,83.5z"></path>
                      </svg>`,
        apps: `<svg class="icon" viewBox="0 0 129 109">
                        <path d="M64.5,25.5l49.4,83.5H129L64.5,0L0,109h15.1L64.5,25.5z"></path>
                      </svg>`,
      },
      projects: [
        {
          title: "Route 66",
          description: "Краткое описание проекта «Route 66»",
          img: "Route66/forward.png",
          imgBack: "Route66/back.jpg",
          imgCard: "Route66/card.jpg",
          link: "http://route66.ru/",
          linkName: "route66.ru",
          category: "graphicdesign",
          isHasLink: true,
          name: "route66",
          categoryName: "Графический<br>дизайн",
          projectLink: '/projects/route66/'
        },
        {
          title: "Patron",
          description: "Краткое описание проекта «Patron»",
          img: "Patron/forward.png",
          imgBack: "Patron/back.png",
          imgCard: "Patron/card.jpg",
          category: "graphicdesign",
          isHasLink: false,
          name: "patron",
          categoryName: "Графический<br>дизайн",
          projectLink: '/projects/patron/'
        },
        {
          title: "Навигатор",
          description: "Краткое описание проекта «Навигатор»",
          img: "Navigator/forward.png",
          imgBack: "Navigator/back.png",
          imgCard: "Navigator/card.png",
          category: "userinterface",
          isHasLink: false,
          name: "navigator",
          categoryName: "Пользовательский<br>интерфейс",
          projectLink: '/projects/navigator/'
        },
        {
          title: "Майолика",
          description: "Краткое описание проекта «Майолика»",
          img: "Majolika/forward.png",
          imgBack: "Majolika/back.png",
          imgCard: "Majolika/card.jpg",
          link: "https://remeslo36.ru/",
          linkName: "remeslo36.ru",
          category: "webdesign",
          isHasLink: true,
          name: "majolika",
          categoryName: "Веб-дизайн",
          projectLink: '/projects/majolika/'
        },
        {
          title: "National <br/> company Eurasia",
          description: "Краткое описание проекта «NCE»",
          img: "Nce/forward.png",
          imgBack: "Nce/back.png",
          imgCard: "Nce/card.jpg",
          category: "identity",
          isHasLink: false,
          name: "eurasia",
          categoryName: "Фирменный<br>стиль",
          projectLink: '/projects/nce/'
        },
        {
          title: "Twonp",
          description: "Краткое описание проекта «Twonp»",
          img: "Twonp/forward.png",
          imgBack: "Twonp/back.jpg",
          imgCard: "Twonp/card.png",
          link: "https://twonp.ru/",
          linkName: "twonp.ru",
          category: "webdesign",
          isHasLink: true,
          name: "twonp",
          categoryName: "Веб-дизайн",
          projectLink: '/projects/twonp/'
        },
      ],
    };
  },
  computed: {
    isPreloaderFinished() {
      const isFinished = this.$store.getters["preloader/isFinished"];
      return isFinished;
    },
  },
  watch: {
    isPreloaderFinished(val) {
      Home.preloaderDelay = this.$store.getters["preloader/preloaderDelay"];
      Home.preloaderDurationFinal =
        this.$store.getters["preloader/preloaderDurationFinal"];
      Home.init().then(() => {
        Home.enterAnimation.play();
        Home.isAppInit = val;
      });
    },
  },
  beforeMount() {
    // window.removeEventListener('keyup')
    // window.removeEventListener('keyup', this.scrollListener);
  },
  mounted() {
    Home.isAppInit = this.isPreloaderFinished;
    Home.isDesktop = this.$device.isDesktop;
    this.$splitting();
    this.$animateFake3d();
    let hash = this.$route?.hash ? this.$route.hash.replace(/^\D+/g, "") : 0;
    hash = hash ? Number(hash) : 0;
    if (hash >= 0 && hash <= 7) {
      Home.slideIndex = hash;
    }
  },
};
</script>