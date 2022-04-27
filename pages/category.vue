<template>
  <main class="content projects scrollable">
    <div class="container container_display">
      <ul class="projects-nav">
        <li class="projects-nav__item">
          <nuxt-link
            class="projects-nav__link splitted"
            data-splitting
            to="/category/all"
          >
            Всё
          </nuxt-link>
          <!-- <a
            class="projects-nav__link"
            href="javascript:void(0);"
            data-category="all"
            data-splitting
            >Всё</a
          > -->
        </li>
        <li class="projects-nav__item">
          <nuxt-link
            class="projects-nav__link splitted"
            data-splitting
            to="/category/userinterface"
            >Пользовательский интерфейс</nuxt-link
          >
          <!-- <a
            class="projects-nav__link"
            href="javascript:void(0);"
            data-category="userinterface"
            data-splitting
            >Пользовательский интерфейс</a
          > -->
        </li>
        <li class="projects-nav__item">
          <nuxt-link
            class="projects-nav__link splitted"
            data-splitting
            to="/category/graphicdesign"
            >Графический дизайн</nuxt-link
          >
          <!-- <a
            class="projects-nav__link"
            href="javascript:void(0);"
            data-category="graphicdesign"
            data-splitting
            >Графический дизайн</a
          > -->
        </li>
        <li class="projects-nav__item">
          <nuxt-link
            class="projects-nav__link splitted"
            data-splitting
            to="/category/webdesign"
            >Веб-дизайн</nuxt-link
          >
          <!-- <a
            class="projects-nav__link"
            href="javascript:void(0);"
            data-category="webdesign"
            data-splitting
            >Веб-дизайн</a
          > -->
        </li>
        <li class="projects-nav__item">
          <nuxt-link
            class="projects-nav__link splitted"
            data-splitting
            to="/category/identity"
            >Фирменный стиль</nuxt-link
          >
          <!-- <a
            class="projects-nav__link"
            href="javascript:void(0);"
            data-category="identity"
            data-splitting
            >Фирменный стиль</a
          > -->
        </li>
        <li class="projects-nav__item">
          <nuxt-link
            class="projects-nav__link splitted"
            data-splitting
            to="/category/apps"
            >Приложения</nuxt-link
          >
          <!-- <a
            class="projects-nav__link"
            href="javascript:void(0);"
            data-category="apps"
            data-splitting
            >Приложения</a
          > -->
        </li>
      </ul>
      <div class="projects__container">
        <NuxtChild appear keep-alive :key="$route.params.id" />
      </div>
    </div>
  </main>
</template>

<script>
import { Category, Scroll } from "~/animations";

export default {
  name: "CategoriesPage",
  transition: {
    name: "categories",
    appear: true,
    css: false,
    enter(el, done) {
      if (this.$store.getters["preloader/isFinished"]) {
        if (el.classList.contains("projects")) {
          Scroll.init();
          Category.getAnimations().then(() => {
            Category.enterAnimation.play().eventCallback("onComplete", () => {
              done();
            });
          });
        }
      } else {
        done();
      }
    },
    leave(el, done) {
      if (Category.enterAnimation) {
        Category.enterAnimation.reverse(0);
        Scroll.destroy();
        Category.animations.forEach(($this) => {
          $this
            .timeScale(2)
            .reverse()
            .eventCallback("onReverseComplete", () => {
              setTimeout(() => {
                done();
              }, 500);
            });
        });
      } else {
        Scroll.destroy();
        done();
      }
    },
  },
  computed: {
    isPreloaderFinished() {
      const isFinished = this.$store.getters["preloader/isFinished"];
      return isFinished;
    },
  },
  watch: {
    isPreloaderFinished() {
      Category.getAnimations().then(() => {
        Category.enterAnimation.play();
      });
      Scroll.init();
    },
  },
  beforeCreate() {
    if (!this.$route.name === "category-id") {
      this.$router.push("/category/all");
    }
  },
};
</script>
