<template>
  <div class="projects-category active">
    <div class="row">
      <div class="projects-block" v-for="(item, idx) in items" :key="idx">
        <div class="projects-block__container">
          <NuxtLink
            class="projects-block__image js-3d-object"
            :to="item.projectLink"
          >
            <div class="image cover js-3d-object__back" data-rotation="2.5">
              <img
                class="lazyload"
                :data-src="require(`~/assets/images/${item.imgCard}`)"
                alt="image"
              />
            </div>
            <div
              class="projects-block-label js-3d-object__forward"
              data-rotation="5"
              data-move="10"
            >
              <div class="projects-block-label__text splitted" data-splitting>
                Открыть кейс
              </div>
            </div>
          </NuxtLink>
          <div class="projects-block__text">
            <h4 class="projects-block__title">{{ item.title }}</h4>
            <p class="projects-block__description">{{ item.descr }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Category } from "~/animations";
const categoriesBlockItems = [
  {
    projectLink: "/projects/navigator/",
    imgCard: "Navigator/card.png",
    title: "Навигатор",
    descr: "Краткое описание проекта «Навигатор»",
    category: "userinterface",
  },
  {
    projectLink: "/projects/route66/",
    imgCard: "Route66/card.jpg",
    title: "Route 66",
    descr: "Краткое описание проекта «Route 66»",
    category: "graphicdesign",
  },
  {
    projectLink: "/projects/patron/",
    imgCard: "Patron/card.jpg",
    title: "Patron",
    descr: "Краткое описание проекта «Patron»",
    category: "graphicdesign",
  },
  {
    projectLink: "/projects/twonp/",
    imgCard: "Twonp/card.png",
    title: "Twonp",
    descr: "Краткое описание проекта «Twonp»",
    category: "webdesign",
  },
  {
    projectLink: "/projects/inpool/",
    imgCard: "Inpool/card.jpg",
    title: "Inpool",
    descr: "Краткое описание проекта «Inpool»",
    category: "apps",
  },
  {
    projectLink: "/projects/majolika/",
    imgCard: "Majolika/card.jpg",
    title: "Майолика",
    descr: "Краткое описание проекта Майолика",
    category: "webdesign",
  },
  {
    projectLink: "/projects/nce/",
    imgCard: "Nce/card.jpg",
    title: "National company Eurasia",
    descr: "Краткое описание проекта «NCE»",
    category: "identity",
  },
];
const categories = [
  "userinterface",
  "graphicdesign",
  "webdesign",
  "identity",
  "all",
  "apps",
];
export default {
  name: "Category",
  transition: {
    name: "category",
    appear: true,
    css: false,
    enter(el, done) {
      if (this.$store.getters["preloader/isFinished"]) {
        if (el.classList.contains("projects-category")) {
          Category.change();
          done();
        }
      } else {
        done();
      }
    },
    leave(el, done) {
      Category.animations.forEach(($this) => {
        $this
          .timeScale(2)
          .reverse()
          .eventCallback("onReverseComplete", () => {
            done();
          });
      });
    },
  },
  asyncData({ route, redirect }) {
    let catId = route.params.id;
    if (!categories.includes(catId)) {
      redirect("/category/all");
    }
    let categoriesBlock = categoriesBlockItems;
    if (catId !== "all" && categoriesBlock) {
      categoriesBlock = categoriesBlock.filter((cat) => {
        return cat.category === catId;
      });
    }
    const items = categoriesBlock;

    return { items };
  },
  data() {
    return {};
  },
  computed: {
    isPreloaderFinished() {
      const isFinished = this.$store.getters["preloader/isFinished"];
      return isFinished;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("Scroll", Category.getVisibleProjects);
      window.addEventListener("resize", Category.createGrid);
      this.$animateFake3d();
      this.$splitting();
      Category.addHoverEvents();
    });
  },
  destroyed() {
    window.removeEventListener("resize", Category.createGrid);
    window.removeEventListener("Scroll", Category.getVisibleProjects);
  },
  watch: {
    isPreloaderFinished() {
      Category.change();
    },
  },
};
</script>

