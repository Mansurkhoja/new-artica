<template>
  <nav class="nav">
    <div class="container">
      <div class="nav__container">
        <div class="nav-m">
          <ul class="nav-m__list">
            <li class="nav-m__item">
                <!-- <span class="nav-m__link" data-list="categories" data-cursor>
                    Мы делаем
                </span> -->
              <a
                class="nav-m__link"
                href="javascript:void(0);"
                data-list="categories"
                >Мы делаем</a
              >
            </li>
            <li class="nav-m__item">
              <a
                class="nav-m__link"
                href="javascript:void(0);"
                data-list="projects"
                >Проекты</a
              >
            </li>
            <li class="nav-m__item">
               <nuxt-link class="nav-m__link" to="/contacts">Контакты</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="nav-s-area">
          <div class="nav-s-area__container">
            <!--categories-->
            <div class="nav-s" data-list="categories">
              <!-- <ul class="nav-s__list">
                <li class="nav-s__item">
                  <a
                    class="nav-s__link"
                    href="/projects/?category=all"
                    data-category="all"
                    data-barba-prevent
                    >Всё</a
                  >
                </li>
                <li class="nav-s__item">
                  <a
                    class="nav-s__link"
                    href="/projects/?category=userinterface"
                    data-category="userinterface"
                    >Пользовательский интерфейс</a
                  >
                </li>
                <li class="nav-s__item">
                  <a
                    class="nav-s__link"
                    href="/projects/?category=graphicdesign"
                    data-category="graphicdesign"
                    >Графический дизайн</a
                  >
                </li>
                <li class="nav-s__item">
                  <a
                    class="nav-s__link"
                    href="/projects/?category=webdesign"
                    data-category="webdesign"
                    >Веб-дизайн</a
                  >
                </li>
                <li class="nav-s__item">
                  <a
                    class="nav-s__link"
                    href="/projects/?category=identity"
                    data-category="identity"
                    >Фирменный стиль</a
                  >
                </li>
                <li class="nav-s__item">
                  <a
                    class="nav-s__link"
                    href="/projects/?category=apps"
                    data-category="apps"
                    >Приложения</a
                  >
                </li>
              </ul> -->
            </div>
            <!--projects-->
            <div class="nav-s" data-list="projects">
              <!-- <ul class="nav-s__list">
                <li class="nav-s__item">
                  <a class="nav-s__link" href="/projects/navigator/"
                    >Навигатор</a
                  >
                </li>
                <li class="nav-s__item">
                  <a class="nav-s__link" href="/projects/majolika/">Майолика</a>
                </li>
                <li class="nav-s__item">
                  <a class="nav-s__link" href="/projects/route66/">Route 66</a>
                </li>
                <li class="nav-s__item">
                  <a class="nav-s__link" href="/projects/patron/">Patron</a>
                </li>
                <li class="nav-s__item">
                  <a class="nav-s__link" href="/projects/twonp/">Twonp</a>
                </li>
                <li class="nav-s__item">
                  <a class="nav-s__link" href="/projects/inpool/">Inpool</a>
                </li>
                <li class="nav-s__item">
                  <a class="nav-s__link" href="/projects/nce/">NCE</a>
                </li>
              </ul> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NuxtNavigation',
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
</style>
