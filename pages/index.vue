<template>
  <main class="content">
    <!-- <nuxt-link to="/contacts">s</nuxt-link> -->
    <div class="m-slider">
      <section class="home m-slider-slide">
        <div class="container container_display">
          <Logo class="home-logo" />
        </div>
      </section>
      <section class="fast-categories m-slider-slide">
        <div class="container container_display">
          <div class="fast-categories__container row">
            <div 
                v-for="(category, idx) in categories" 
                :key="idx" 
                class="fast-categories-block col-lg-4 col-6">
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
                  data-rotation="10" />
                <div
                  class="label-item js-3d-object__forward"
                  data-rotation="20"
                  data-move="10"
                >
                  <span v-html="categoryIcons[category.name]" />
                  <div
                    v-html="category.testName"
                    class="label-item__title splitted"
                    data-splitting />
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
                  data-rotation="10" />
                <div
                  class="label-item js-3d-object__forward"
                  data-rotation="20"
                  data-move="10"
                >
                  <span v-html="categoryIcons[category.name]" />
                  <div
                    v-html="category.testName"
                    class="label-item__title splitted"
                    data-splitting />
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
              <h2 v-html="project.title" class="project-preview__title splitted" data-splitting />
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
              <NuxtLink 
                to="/" 
                class="project-preview-item js-3d-object"> 
                <div
                  class="image cover js-3d-object__back"
                  data-rotation="2.5"
                >
                  <img
                    class="lazyload"
                    :data-src="require(`~/assets/images/${project.imgBack}`)"
                    alt="bg"
                  >
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
                  >
                </div>
              </NuxtLink>
            </div>
            <div class="label-item" :class="{'label-item_graphic': project.category === 'graphDesign'}">
              <span v-html="categoryIcons[project.category]" />
              <div
                v-html="project.categoryName"
                class="label-item__title splitted" 
                data-splitting  />
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
            :class="{'active': idx === home.slideIndex}"
            :href="`#slide-${idx}`"
            v-for="(i, idx) in 8"
            :key="idx"
          />
        </div>
      </div>
    </div>
  </main>
  <!-- <img src="~/assets/images/Nce/back.png" /> -->
</template>

<script>
import Logo from '~/assets/icons/logo.svg?inline';
import Hammer from '@squadette/hammerjs';
const speed = 1;

export default {
  name: "IndexPage",
  components: {
    Logo
  },
  data() {
    return {
      // animation: null,
      // href: 0,
      categories: [
        {
          name: "marketing",
          link: "http://marketingline.ru/",
          isLinkTarget: true,
          testName: 'Маркетинг'
        },
        {
          name: "ui",
          link: "/contacts",
          isLinkTarget: false,
          testName: 'Пользовательский<br>интерфейс'
        },
        {
          name: "graphDesign",
          link: "/contacts",
          isLinkTarget: false,
          testName: 'Графический<br>дизайн'
        },
        {
          name: "webDesign",
          link: "/contacts",
          isLinkTarget: false,
          testName: 'Веб-дизайн'
        },
        {
          name: "style",
          link: "/contacts",
          isLinkTarget: false,
          testName: 'Фирменный<br>стиль'
        },
        {
          name: "app",
          link: "/contacts",
          isLinkTarget: false,
          testName: 'Приложения'
        },
      ],
      categoryIcons: {
        ui: `<svg class="icon" viewBox="0 0 86 109">
                    <path d="M86,66.2V0L73,0v66.2c0,8.2-2.9,15.3-8.8,21.1C58.3,93.1,51.3,96,43,96s-15.3-2.9-21.2-8.7  C15.9,81.5,13,74.4,13,66.2V0L0,0l0,66.2C0,78,4.2,88.1,12.6,96.5C21,104.8,31.1,109,43,109c11.8,0,22-4.2,30.3-12.5  C81.8,88.1,86,78,86,66.2z"></path>
                  </svg>`,
        graphDesign: `<svg class="icon" viewBox="0 0 109 109">
                    <path d="M108.7,48.5H46.5v12h50.1C93.7,81.1,76,97,54.5,97C31,97,12,78,12,54.5S31,12,54.5,12c15.7,0,29.5,8.5,36.8,21.3l0.6,1h13.3l-1.3-2.8C95.2,12.9,76.4,0,54.5,0C24.4,0,0,24.4,0,54.5S24.4,109,54.5,109c30.1,0,54.5-24.4,54.5-54.5c0-1.4-0.1-2.8-0.2-4.2L108.7,48.5z"></path>
                  </svg>`,
        webDesign: `<svg class="icon" viewBox="0 0 187.3 109">
                    <path d="M72.5,0l49.8,83.5L172.1,0l15.2,0l-65,109L57.3,0L72.5,0z M130,0l-21.2,35.5l-7.6-12.7L114.8,0L130,0z M15.2,0  L65,83.5l13.5-22.7l7.6,12.7L65,109L0,0L15.2,0z"></path>
                  </svg>`,
        style: `<svg class="icon" viewBox="0 0 13 109">
                    <path d="M0,0h13v109H0V0z"></path>
                  </svg>`,
        marketing: `<svg class="icon" viewBox="0 0 127.1 108.9">
                        <path d="M63.5,83.5L13.8,0L0.5,0l0,0L0,0l0,108.9l13.6,0V25.2l49.9,83.8l49.9-83.8v83.8h13.6l0-108.9l-0.7,0l-13.1,0L63.5,83.5z"></path>
                      </svg>`,
        app: `<svg class="icon" viewBox="0 0 129 109">
                        <path d="M64.5,25.5l49.4,83.5H129L64.5,0L0,109h15.1L64.5,25.5z"></path>
                      </svg>`
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
          category: "graphDesign",
          isHasLink: true,
          name: "route66",
          categoryName: 'Графический<br>дизайн'
        },
        {
          title: "Patron",
          description: "Краткое описание проекта «Patron»",
          img: "Patron/forward.png",
          imgBack: "Patron/back.png",
          imgCard: "Patron/card.jpg",
          category: "graphDesign",
          isHasLink: false,
          name: "patron",
          categoryName: 'Графический<br>дизайн'
        },
        {
          title: "Навигатор",
          description: "Краткое описание проекта «Навигатор»",
          img: "Navigator/forward.png",
          imgBack: "Navigator/back.png",
          imgCard: "Navigator/card.png",
          category: "ui",
          isHasLink: false,
          name: "navigator",
          categoryName: 'Пользовательский<br>интерфейс'
        },
        {
          title: "Майолика",
          description: "Краткое описание проекта «Майолика»",
          img: "Majolika/forward.png",
          imgBack: "Majolika/back.png",
          imgCard: "Majolika/card.jpg",
          link: "https://remeslo36.ru/",
          linkName: "remeslo36.ru",
          category: "webDesign",
          isHasLink: true,
          name: "majolika",
          categoryName: 'Веб-дизайн'
        },
        {
          title: "National <br/> company Eurasia",
          description: "Краткое описание проекта «NCE»",
          img: "Nce/forward.png",
          imgBack: "Nce/back.png",
          imgCard: "Nce/card.jpg",
          category: "style",
          isHasLink: false,
          name: "eurasia",
          categoryName: 'Фирменный<br>стиль'
        },
        {
          title: "Twonp",
          description: "Краткое описание проекта «Twonp»",
          img: "Twonp/forward.png",
          imgBack: "Twonp/back.jpg",
          imgCard: "Twonp/card.png",
          link: "https://twonp.ru/",
          linkName: "twonp.ru",
          category: "webDesign",
          isHasLink: true,
          name: "twonp",
          categoryName: 'Веб-дизайн'
        },
      ],
      home: {
        initialized: null,
        swipearea: null,
        available: true,
        lineAnimation: null,
        pagtrigger: null,
        pagination: null,
        pagitems: null,
        slides: null,
        slider: null,
        slideIndex: 0,
        slide: null,
        direction: null,
        back: null,
        forward: null,
        secondary: null,
        swiped: false,
        triggerNextAnimation: null,
        animationTime: 0,
        triggerPrevAnimation: null,
        triggerAnimation: null,
        enterAnimation: null
      }
    };
  },
  computed: {
    isPreloaderFinished() {
      const isFinished = this.$store.getters["preloader/isFinished"];
      return isFinished;
    },
    isHashZero() {
      return this.$route.hash
    }
  },
  watch: {
    isPreloaderFinished() {
      this.init().then(() => {
        this.$animateCatCards();
        this.home.enterAnimation.play().eventCallback("onComplete", () => {
        });
      });
    },
    isHashZero(val) {
      if (!val && this.home.slideIndex !== 0) {
        this.change(0)
      }
    }
  },
  mounted() {
    this.home.slideIndex = this.$route?.hash ? this.$route.hash.replace( /^\D+/g, '') : 0
    this.$splitting()
    this.$animateFake3d()
    if (this.isPreloaderFinished) {
      this.$animateCatCards();
      this.init().then(() => {
        this.home.enterAnimation.play();
      });
    }
  },
  beforeDestroy() {
    this.home.enterAnimation.reverse(0);
    this.destroy();
  },
  methods: {
    scrollListener (event) {
      if(event.target.closest('.m-slider')!==null && this.home.available) {
        if(event.deltaY>0 && this.home.slides.length>this.home.slideIndex+1) {
          this.home.available=false;
          this.change(this.home.slideIndex+1);
        } else if(event.deltaY<0 && this.home.slideIndex>0) {
          this.home.available=false;
          this.change(this.home.slideIndex-1);
        }
      }
    },
    destroy() {
      this.home.initialized = false;
      this.home.swipearea.destroy();
      window.removeEventListener("wheel", this.scrollListener, false);
      window.removeEventListener("keyup", this.keyListener, false);
      this.home.lineAnimation.reverse();
      this.$gsap.to(this.home.pagtrigger, {duration:speed, scaleX:0, xPercent:100*(this.home.slideIndex-1), ease:'power2.in'})
    },
    change(index) {
      for(let $this of this.home.slides) {
        $this.classList.remove('active');
      }
      for(let $this of this.home.pagitems) {
        $this.classList.remove('active');
      }
      // this.home.pagitems[index].classList.add('active');
      this.home.slide = this.home.slides[index];
      this.home.slide.classList.add('active');
      this.home.slideIndex<index ? this.home.direction='next' : this.home.direction='prev';
      this.home.slideIndex=index;

      if(this.home.direction=='next') {
        this.home.back.progress()==0 ? this.home.back.reverse(0) : this.home.back.reverse();
        this.home.back.eventCallback('onReverseComplete',()=>{
          this.home.forward.play();
          this.home.secondary.play(0);
        })
      } else {
        this.home.forward.progress()==0 ? this.home.forward.reverse(0) : this.home.forward.reverse();
        this.home.forward.eventCallback('onReverseComplete',()=>{
          this.home.back.play();
          this.home.secondary.play(0);
        })
      }

      if(this.home.swiped==true) {
        this.home.swiped=false;
        if(this.home.direction=='next') {
          this.home.triggerNextAnimation.play(this.home.animationTime);
        } else {
          this.home.triggerPrevAnimation.play(this.home.animationTime);
        }
        this.home.animationTime=0;
        this.getAnimations();
      } else {
        this.getAnimations().then(()=>{
          this.home.triggerAnimation.play();
        });
      }

      this.home.forward.eventCallback('onComplete',()=>{
        this.home.available = true;
      })
      this.home.back.eventCallback('onComplete',()=>{
        this.home.available = true;
      })      
      if (index !== 0) {
        this.$router.push({hash: `slide-${index}`})
      }
    },
    getAnimations() {return new Promise((resolve, reject)=>{
      let index = this.home.slideIndex,
          $this = this.home.slide;
      const gsap = this.$gsap;
      //второстепенные анимации
      this.home.secondary = gsap.timeline(),
      this.home.forward = gsap.timeline({paused:true}),
      this.home.back = gsap.timeline({paused:true}),
      this.home.triggerAnimation = gsap.timeline({paused:true}),
      this.home.triggerNextAnimation = gsap.timeline({paused:true}),
      this.home.triggerPrevAnimation = gsap.timeline({paused:true}),
      this.home.enterAnimation = gsap.timeline({paused:true});

      //trigger
      this.home.triggerAnimation
        .to(this.home.pagtrigger, {duration:speed*2, xPercent:100*index, ease:'power2.inOut'})
        .to(this.home.pagtrigger, {duration:speed, scaleX:1.5, ease:'power2.in'},`-=${speed*2}`)
        .to(this.home.pagtrigger, {duration:speed, scaleX:1, ease:'power2.out'},`-=${speed}`)
      this.home.triggerNextAnimation
        .to(this.home.pagtrigger, {duration:speed*2, xPercent:100*(index+1), ease:'power2.inOut'})
        .to(this.home.pagtrigger, {duration:speed, scaleX:1.5, ease:'power2.in'},`-=${speed*2}`)
        .to(this.home.pagtrigger, {duration:speed, scaleX:1, ease:'power2.out'},`-=${speed}`)
      this.home.triggerPrevAnimation
        .to(this.home.pagtrigger, {duration:speed*2, xPercent:100*(index-1), ease:'power2.inOut'})
        .to(this.home.pagtrigger, {duration:speed, scaleX:1.5, ease:'power2.in'},`-=${speed*2}`)
        .to(this.home.pagtrigger, {duration:speed, scaleX:1, ease:'power2.out'},`-=${speed}`)

      //categories
      if(this.home.slide.classList.contains('fast-categories')) {
        
        let $slides = $this.querySelectorAll('.fast-categories-block');
        this.home.forward
          .set($this, {autoAlpha:1})
          .fromTo($slides, {autoAlpha:0}, {duration:speed*0.7, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.3}})
          .fromTo($slides, {xPercent:50}, {immediateRender:false, duration:speed*0.7, xPercent:0, ease:'power2.out', stagger:{amount:speed*0.3}},`-=${speed}`)
        this.home.back
          .set($this, {autoAlpha:1})
          .fromTo($slides, {autoAlpha:0}, {duration:speed*0.7, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.3,from:'end'}})
          .fromTo($slides, {xPercent:-50}, {immediateRender:false, duration:speed*0.7, xPercent:0, ease:'power2.out', stagger:{amount:speed*0.3,from:'end'}},`-=${speed}`)
        this.home.enterAnimation
          .set($this, {autoAlpha:1})
          .fromTo($slides, {autoAlpha:0}, {duration:speed*0.7, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.3}})
          .fromTo($slides, {yPercent:50}, {immediateRender:false, duration:speed*0.7, yPercent:0, ease:'power2.out', stagger:{amount:speed*0.3}},`-=${speed}`)
      }
      //projects
      else if(this.home.slide.classList.contains('project-preview')) {
        let $image = $this.querySelector('.project-preview__image'),
            $icon = $this.querySelector('.label-item .icon'),
            $iconback = $this.querySelector('.label-item__title'),
            $iconletters = $this.querySelectorAll('.label-item__title .char'),
            $line = $this.querySelectorAll('.project-preview__line, .project-preview__link .line'),
            $textchars = $this.querySelectorAll('.project-preview__text .char'),
            $titlechars = $this.querySelectorAll('.project-preview__title .char'),
            $linkchars = $this.querySelectorAll('.project-preview__link .char');

        this.home.forward
          .set($this, {autoAlpha:1})
          .fromTo($image, {autoAlpha:0}, {duration:speed, autoAlpha:1, ease:'power2.inOut',
            onStart:function(){
              gsap.fromTo($line, {scaleX:0, xPercent:-50}, {duration:speed*2,scaleX:1,xPercent:0,ease:'power2.out'})
            }})
          .fromTo($line, {autoAlpha:0}, {duration:speed, autoAlpha:1, ease:'power2.inOut'}, `-=${speed}`)
          .fromTo($image, {xPercent:30}, {immediateRender:false, duration:speed, xPercent:0, ease:'power2.out'}, `-=${speed}`)
          //text
          .fromTo($titlechars, {autoAlpha:0}, {duration:speed*0.7, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.3}},`-=${speed}`)
          .fromTo($titlechars, {x:50}, {immediateRender:false, duration:speed*0.7, x:0, ease:'power2.out', stagger:{amount:speed*0.3}},`-=${speed}`)
          .fromTo($textchars, {autoAlpha:0}, {duration:speed*0.7, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.3}},`-=${speed}`)
          .fromTo($textchars, {x:50}, {immediateRender:false, duration:speed*0.7, x:0, ease:'power2.out', stagger:{amount:speed*0.3}},`-=${speed}`)
          .fromTo($linkchars, {autoAlpha:0}, {duration:speed*0.7, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.3}},`-=${speed}`)
          .fromTo($linkchars, {x:50}, {immediateRender:false, duration:speed*0.7, x:0, ease:'power2.out', stagger:{amount:speed*0.3}},`-=${speed}`)
          //icon label
          .fromTo($icon, {autoAlpha:0}, {duration:speed, autoAlpha:1, ease:'power2.inOut'}, `-=${speed}`)
          .fromTo($icon, {yPercent:50}, {duration:speed, yPercent:0, ease:'power2.out'}, `-=${speed}`)
          .fromTo($iconletters, {autoAlpha:0,yPercent:100}, {duration:speed*0.7,autoAlpha:1,yPercent:0,ease:'power2.out', stagger:{amount:speed*0.3}}, `-=${speed}`)
          .fromTo($iconback, {yPercent:100,autoAlpha:0}, {duration:speed,yPercent:0,autoAlpha:1,ease:'power2.out'},`-=${speed}`)
        
        this.home.back
          .set($this, {autoAlpha:1})
          .fromTo($image, {autoAlpha:0}, {duration:speed, autoAlpha:1, ease:'power2.inOut',
            onStart:function(){
              gsap.fromTo($line, {scaleX:0, xPercent:-50}, {duration:speed*2,scaleX:1,xPercent:0,ease:'power2.out'})
            }})
          .fromTo($line, {autoAlpha:0}, {duration:speed, autoAlpha:1, ease:'power2.inOut'}, `-=${speed}`)
          .fromTo($image, {xPercent:-30}, {immediateRender:false, duration:speed, xPercent:0, ease:'power2.out'}, `-=${speed}`)
          //text
          .fromTo($titlechars, {autoAlpha:0}, {duration:speed*0.7, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.3, from:'end'}},`-=${speed}`)
          .fromTo($titlechars, {xPercent:-50}, {immediateRender:false, duration:speed*0.7, xPercent:0, ease:'power2.out', stagger:{amount:speed*0.3, from: "end"}},`-=${speed}`)
          .fromTo($textchars, {autoAlpha:0}, {duration:speed*0.7, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.3, from:'end'}},`-=${speed}`)
          .fromTo($textchars, {x:-50}, {immediateRender:false, duration:speed*0.7, x:0, ease:'power2.out', stagger:{amount:speed*0.3, from: "end"}},`-=${speed}`)
          .fromTo($linkchars, {autoAlpha:0}, {duration:speed*0.7, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.3, from: "end"}},`-=${speed}`)
          .fromTo($linkchars, {x:-50}, {immediateRender:false, duration:speed*0.7, x:0, ease:'power2.out', stagger:{amount:speed*0.3, from: "end"}},`-=${speed}`)
          //icon label
          .fromTo($icon, {autoAlpha:0}, {duration:speed, autoAlpha:1, ease:'power2.inOut'}, `-=${speed}`)
          .fromTo($icon, {yPercent:-50}, {duration:speed, yPercent:0, ease:'power2.out'}, `-=${speed}`)
          .fromTo($iconletters, {autoAlpha:0,yPercent:-100}, {duration:speed*0.7,autoAlpha:1,yPercent:0,ease:'power2.out', stagger:{amount:speed*0.3, from:'end'}},`-=${speed}`)
          .fromTo($iconback, {yPercent:-100,autoAlpha:0}, {duration:speed,yPercent:0,autoAlpha:1,ease:'power2.out'},`-=${speed}`)

        this.home.enterAnimation
          .set($this, {autoAlpha:1})
          .fromTo($image, {autoAlpha:0, scale:0.95}, {immediateRender:false,duration:speed, autoAlpha:1, scale:1, ease:'power2.inOut'})
          .fromTo($line, {autoAlpha:0,scaleX:0.5, xPercent:-25}, {duration:speed, autoAlpha:1,scaleX:1,xPercent:0, ease:'power2.inOut'},`-=${speed}`)
          .fromTo($titlechars, {autoAlpha:0}, {duration:speed*0.7, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.3, from:'random'}},`-=${speed}`)
          .fromTo($textchars, {autoAlpha:0}, {duration:speed*0.6, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.4, from:'random'}},`-=${speed}`)
          .fromTo($linkchars, {autoAlpha:0}, {duration:speed*0.6, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.4, from:'random'}},`-=${speed}`)
          //icon label
          .fromTo($icon, {autoAlpha:0}, {duration:speed, autoAlpha:1, ease:'power2.inOut'},`-=${speed}`)
          .fromTo($iconletters, {autoAlpha:0}, {duration:speed*0.6,autoAlpha:1,ease:'power2.inOut', stagger:{amount:speed*0.4, from:'random'}}, `-=${speed}`)
          //.fromTo($iconback, {autoAlpha:0}, {duration:speed,yPercent:0,autoAlpha:1,ease:'power2.inOut'}, `-=${speed}`)
        
        if(this.home.slide.classList.contains('navigator-preview')) {
          let $images = this.home.slide.querySelectorAll('.image');
          this.home.secondary
            .fromTo($images[0], {rotation:180}, {duration:speed*2, rotation:0, ease:'power2.inOut'})
            .fromTo($images[1], {rotation:-360}, {duration:speed*2, rotation:0, ease:"back.out(5)"},`-=${speed*2}`)
        } 
        else if(this.home.slide.classList.contains('patron-preview')) {
          let $image = this.home.slide.querySelectorAll('.image')[1];
          this.home.secondary
            .fromTo($image, {scale:0.7, rotation:45}, {duration:speed*2, scale:1, rotation:0, ease:'power2.out'})
        } 
        else {
          let $image = this.home.slide.querySelectorAll('.image')[1];
          this.home.secondary
            .fromTo($image, {scale:0.5}, {duration:speed*2, scale:1, ease:'power2.out'})
        } 

      }
      //home
      else {
        let $logo = $this.querySelector('.home-logo'),
            $words = $logo.querySelectorAll('path');
        //animation
        this.home.forward = gsap.timeline({paused:true})
          .set($this, {autoAlpha:1})
          .fromTo($logo, {scale:1.1}, {immediateRender:false, duration:speed, scale:1, ease:'power2.out'})
          .fromTo($words, {autoAlpha:0}, {duration:speed*0.8, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.2, from:'random'}}, `-=${speed}`)
        this.home.back = this.home.forward;

        this.home.enterAnimation = this.home.forward;
        // if(App.initialized) {
        //   this.enterAnimation = this.forward;
        // } else {
        //   this.enterAnimation = gsap.timeline({paused:true})
        //     .set([$words, $this], {autoAlpha:1})
        //     .fromTo($logo, {scale:1.1, autoAlpha:0}, {duration:Preloader.duration_final, scale:1, autoAlpha:1, ease:'power3.inOut'})
        // }

      }

      if(!this.home.initialized) {
        // let delay = App.initialized?0:Preloader.delay;
        let delay = 0;
        //line
        this.home.lineAnimation = gsap.timeline({paused:true})
          .fromTo(this.home.pagination, {autoAlpha:0}, {duration:speed, autoAlpha:1, ease:'power2.inOut'})
          .fromTo(this.home.pagination, {y:20}, {duration:speed, y:0, ease:'power2.out'}, `-=${speed}`)

        this.home.enterAnimation.eventCallback('onStart', ()=>{
          // gsap.set(window.$container, {autoAlpha:1});
          let wrapper = document.querySelector('.content')
          gsap.set(wrapper, {autoAlpha:1});
          // setTimeout(()=>{
          //   gsap.fromTo(Home.pagtrigger, {scaleX:0.5,xPercent:100*(Home.slideIndex-0.25)}, {duration:speed, scaleX:1, xPercent:100*Home.slideIndex, ease:'power2.out'})
          //   this.lineAnimation.play();
          // }, delay*1000)
           gsap.fromTo(this.home.pagtrigger, {scaleX:0.5,xPercent:100*(this.home.slideIndex-0.25)}, {duration:speed, scaleX:1, xPercent:100*this.home.slideIndex, ease:'power2.out'})
            this.home.lineAnimation.play();
        })
      }

      resolve();
    })},
    keyListener (event) {
      if (this.home.available) {
        if (this.home.slideIndex + 1 < this.home.slides.length) {
            if (event.key === 'ArrowRight') { 
              this.home.available = false;
              this.change(this.home.slideIndex + 1)
            }
        }
        if (this.home.slideIndex > 0) {
          if (event.key === 'ArrowLeft') { 
            this.home.available = false;
            this.change(this.home.slideIndex - 1)
          }
        }
      }
    },
    init() {return new Promise((resolve, reject)=>{
      const gsap = this.$gsap;
      gsap.config({
        nullTargetWarn: false,
        trialWarn: false,
      });
      //flag
      this.home.available=true;
      this.home.pagination = document.querySelector('.m-slider-pagination');
      this.home.pagitems = document.querySelectorAll('.m-slider-pagination__link');
      this.home.pagtrigger = document.querySelector('.m-slider-pagination__item');
      this.home.pagtrigger.setAttribute('style',`width:${100/this.home.pagitems.length}%;`)
      this.home.slides = document.querySelectorAll('.m-slider-slide');
      this.home.slider = document.querySelector('.m-slider');
      //check start slide
      // this.home.slideIndex = 0;
      // this.home.slide = this.home.slides[0];
      this.home.slide = this.home.slides[this.home.slideIndex];
      this.home.slides.forEach(($element,index)=>{
        if($element.classList.contains('active')) {
          this.home.slideIndex = index;
          this.home.slide = $element;
        }
      })
      this.home.slide.classList.add('active');
      //animations
      gsap.set(this.home.pagtrigger, {xPercent:(100*this.home.slideIndex)});
      this.home.swipearea = new Hammer.Manager(this.home.slider);
      this.home.swipearea.add(new Hammer.Pan().set({threshold:1}));
      //event click
      this.home.pagitems.forEach((element,index)=>{
        element.addEventListener('click',(event)=>{
          event.preventDefault();
          // if(!barba.transitions.isRunning && this.available) {
          if(this.home.available) {
            this.home.available=false;
            this.change(index);
          }
        })
      })
      if (this.$device.isDesktop) {
        //event keyup
        window.addEventListener('keyup', (event)=>{this.keyListener(event)});
        //event scroll
        window.addEventListener('wheel', (event)=>{this.scrollListener(event)});
      }
      //event swipe
      let cursorPos = {
            current: {
              x:0,
              y:0
            },
            start: {
              x:0,
              y:0,
              update: function(callback, func) {
                cursorPos.start.x = cursorPos.current.x;
                cursorPos.start.y = cursorPos.current.y;
                if(callback=='onComplete') {
                  func();
                }
              }
            }
          },
          swipeLength = 150,
          maxTime = 0.5,
          swipeForward = false,
          swipeBack  = false,
          direction = false;

      this.home.swipearea.on("panleft panend panstart panup pandown panright", (event)=>{
        cursorPos.current.x = event.center.x;
        cursorPos.current.y = event.center.y;
        
        // if(!barba.transitions.isRunning && this.available) {
        if(this.home.available) {
          //если поставили палец
          if(event.type=='panstart') {
            this.home.swiped = true;
            cursorPos.start.update();
          } 
          //подняли палец с дисплея
          else if(event.type=='panend') {
            this.home.swiped = false;
            direction = false;
            this.home.animationTime = 0;
            if(swipeForward == true) {
              this.home.back.play();
              this.home.triggerNextAnimation.reverse();
            } else if(swipeBack == true) {
              this.home.forward.play();
              this.home.triggerPrevAnimation.reverse();
            }
            swipeForward = false;
            swipeBack = false;
          }
          //если длина свайпа достаточная
          else if(this.home.animationTime>=maxTime) {
            this.home.available=false;
            //Circle.rotation((speed*2)-this.animationTime);
            direction = false;
            if(swipeForward == true) {
              this.change(this.home.slideIndex+1);
            } else if(swipeBack == true) {
              this.change(this.home.slideIndex-1);
            }
            swipeForward = false;
            swipeBack = false;
          }
          //процесс ерзанья пальцами
          else if(this.home.swiped==true) {
            let pos;
            if(direction==false) {
              if(event.type=='panup' || event.type=='pandown') {
                direction = 'vertical';
              } else if(event.type=='panright' || event.type=='panleft') {
                direction = 'horizontal';
              }
            }

            if(direction == 'vertical') {
              pos = event.center.y - cursorPos.start.y;
            } else if(direction == 'horizontal') {
              pos = event.center.x - cursorPos.start.x;
            }

            //управление временем анимации
            if(event.type=='panup' || event.type=='panleft') {
              if(swipeBack == false) {
                swipeForward = true;
                if(this.home.slideIndex == this.home.slides.length-1) {
                  this.home.animationTime = (-pos/(swipeLength-pos))*maxTime;
                } else {
                  this.home.animationTime = (-pos/swipeLength)*maxTime;
                }
              } else {
                if(this.home.slideIndex == 0) {
                  this.home.animationTime = (pos/(swipeLength+pos))*maxTime;
                } else {
                  this.home.animationTime = (pos/swipeLength)*maxTime;
                }
                if(this.home.animationTime<=0) {
                  swipeBack = false;
                  this.home.animationTime = 0;
                }
              }
            } else {
              if(swipeForward == false) {
                swipeBack = true;
                if(this.home.slideIndex == 0) {
                  this.home.animationTime = (pos/(swipeLength+pos))*maxTime;
                } else {
                  this.home.animationTime = (pos/swipeLength)*maxTime;
                }
              } else {
                if(this.home.slideIndex == this.home.slides.length-1) {
                  this.home.animationTime = (-pos/(swipeLength-pos))*maxTime;
                } else {
                  this.home.animationTime = (-pos/swipeLength)*maxTime;
                }
                if(this.home.animationTime<=0) {
                  swipeForward = false;
                }
              }
            }

            //последняя корректировка
            if(this.home.animationTime>maxTime) {
              this.home.animationTime = maxTime;
            } else if(this.home.animationTime==-0 || this.home.animationTime<0) {
              this.home.animationTime = 0;
            }

            if(swipeForward == true) {
              this.home.back.reverse(speed - this.home.animationTime);
              this.home.triggerNextAnimation.play(this.home.animationTime);
              this.home.back.pause();
              this.home.triggerNextAnimation.pause();
            } else if(swipeBack == true) {
              this.home.forward.reverse(speed - this.home.animationTime);
              this.home.triggerPrevAnimation.play(this.home.animationTime);
              this.home.forward.pause();
              this.home.triggerPrevAnimation.pause();
            }
          }
        }
      });
      // document.querySelector('.eurasia-preview .project-preview__title .word').insertAdjacentHTML('afterEnd', '</br>');
      this.getAnimations().then(()=>{
        this.home.initialized = true;
        resolve();
      });
    })},
  },
};
</script>
