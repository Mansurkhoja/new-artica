<template>
  <main
    class="content projects scrollable"
  >
    <div class="container container_display">
      <ul class="projects-nav">
        <li class="projects-nav__item">
          <a
            class="projects-nav__link"
            href="javascript:void(0);"
            data-category="all"
            data-splitting
            >Всё</a
          >
        </li>
        <li class="projects-nav__item">
          <a
            class="projects-nav__link"
            href="javascript:void(0);"
            data-category="userinterface"
            data-splitting
            >Пользовательский интерфейс</a
          >
        </li>
        <li class="projects-nav__item">
          <a
            class="projects-nav__link"
            href="javascript:void(0);"
            data-category="graphicdesign"
            data-splitting
            >Графический дизайн</a
          >
        </li>
        <li class="projects-nav__item">
          <a
            class="projects-nav__link"
            href="javascript:void(0);"
            data-category="webdesign"
            data-splitting
            >Веб-дизайн</a
          >
        </li>
        <li class="projects-nav__item">
          <a
            class="projects-nav__link"
            href="javascript:void(0);"
            data-category="identity"
            data-splitting
            >Фирменный стиль</a
          >
        </li>
        <li class="projects-nav__item">
          <a
            class="projects-nav__link"
            href="javascript:void(0);"
            data-category="apps"
            data-splitting
            >Приложения</a
          >
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ProjectsPage',
  methods: {
  },
};
</script>
