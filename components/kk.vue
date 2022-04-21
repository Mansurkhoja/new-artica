<template>
  <nav ref="nav" class="nav">
    <div class="container">
      <div class="nav__container">
        <div class="nav-m">
          <ul class="nav-m__list">
            <!-- <li class="nav-m__item disabled">
            </li> -->
              <!-- <span class="nav-m__link" data-list="categories" data-cursor>
              </span> -->
            <nuxt-link to="/category" custom v-slot="{ isActive }">
              <li class="nav-m__item" :class="isActive ? 'disabled' : ''">
                <a
                  href="#"
                  class="nav-m__link"
                  :class="isActive ? 'active' : ''"
                  data-list="categories"
                  @click.prevent="openList('categories', false, 0)">
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
                  @click.prevent="openList('projects', false, 1)">
                  Мы Проекты
                </a>
              </li>
            </nuxt-link>
            <nuxt-link to="/contacts" custom v-slot="{ isActive }">
              <li class="nav-m__item" :class="isActive ? 'disabled' : ''">
                <a
                  href="/contacts"
                  class="nav-m__link"
                  :class="isActive ? 'active' : ''"
                  @click.prevent="openList(false, 'contacts', 2)">
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
                  <nuxt-link to="/category" custom v-slot="{ isActive }">
                    <a 
                      href="/category" 
                      class="nav-s__link"
                      data-category="all"
                      :class="isActive ? 'active' : ''"
                      @click.prevent="openLink(2)">
                      Всё
                    </a>
                  </nuxt-link>
                </li>
                <li class="nav-s__item">
                  <nuxt-link to="/category/1" custom v-slot="{ isActive }">
                    <a 
                      href="/category/1" 
                      class="nav-s__link"
                      data-category="ui"
                      :class="isActive ? 'active' : ''"
                      @click.prevent="openLink(2)">
                      Пользовательский интерфейс
                    </a>
                  </nuxt-link>
                </li>
                <li class="nav-s__item">
                  <nuxt-link to="/category/2" custom v-slot="{ isActive }">
                    <a 
                      href="/category/2" 
                      class="nav-s__link"
                      data-category="graphicdesign"
                      :class="isActive ? 'active' : ''"
                      @click.prevent="openLink(2)">
                      Графический дизайн
                    </a>
                  </nuxt-link>
                </li>
                <li class="nav-s__item">
                  <nuxt-link to="/category/3" custom v-slot="{ isActive }">
                    <a 
                      href="/category/3" 
                      class="nav-s__link"
                      data-category="webdesign"
                      :class="isActive ? 'active' : ''"
                      @click.prevent="openLink(2)">
                      Веб-дизайн
                    </a>
                  </nuxt-link>
                </li>
                <li class="nav-s__item">
                  <nuxt-link to="/category/4" custom v-slot="{ isActive }">
                    <a 
                      href="/category/4" 
                      class="nav-s__link"
                      data-category="identity"
                      :class="isActive ? 'active' : ''"
                      @click.prevent="openLink(2)">
                      Фирменный стиль
                    </a>
                  </nuxt-link>
                </li>
                <li class="nav-s__item">
                  <nuxt-link to="/category/5" custom v-slot="{ isActive }">
                    <a 
                      href="/category/5" 
                      class="nav-s__link"
                      data-category="apps"
                      :class="isActive ? 'active' : ''"
                      @click.prevent="openLink(2)">
                      Приложения
                    </a>
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <!--projects-->
            <div class="nav-s" data-list="projects">
              <ul class="nav-s__list">
                <li class="nav-s__item">
                  <nuxt-link to="/projects/1" custom v-slot="{ isActive }">
                    <a 
                      href="/projects/1" 
                      class="nav-s__link"
                      :class="isActive ? 'active' : ''"
                      @click.prevent="openLink(2)">
                      Навигатор
                    </a>
                  </nuxt-link>
                </li>
                <li class="nav-s__item">
                  <nuxt-link to="/projects/2" custom v-slot="{ isActive }">
                    <a 
                      href="/projects/2" 
                      class="nav-s__link"
                      :class="isActive ? 'active' : ''"
                      @click.prevent="openLink(2)">
                      Майолика
                    </a>
                  </nuxt-link>
                </li>
                <li class="nav-s__item">
                  <nuxt-link to="/projects/3" custom v-slot="{ isActive }">
                    <a 
                      href="/projects/3" 
                      class="nav-s__link"
                      :class="isActive ? 'active' : ''"
                      @click.prevent="openLink(2)">
                      Route 66
                    </a>
                  </nuxt-link>
                </li>
                <li class="nav-s__item">
                  <nuxt-link to="/projects/4" custom v-slot="{ isActive }">
                    <a 
                      href="/projects/4" 
                      class="nav-s__link"
                      :class="isActive ? 'active' : ''"
                      @click.prevent="openLink(2)">
                      Patron
                    </a>
                  </nuxt-link>
                </li>
                <li class="nav-s__item">
                  <nuxt-link to="/projects/5" custom v-slot="{ isActive }">
                    <a 
                      href="/projects/5" 
                      class="nav-s__link"
                      :class="isActive ? 'active' : ''"
                      @click.prevent="openLink(2)">
                      Twonp
                    </a>
                  </nuxt-link>
                </li>
                <li class="nav-s__item">
                  <nuxt-link to="/projects/6" custom v-slot="{ isActive }">
                    <a 
                      href="/projects/6" 
                      class="nav-s__link"
                      :class="isActive ? 'active' : ''"
                      @click.prevent="openLink(2)">
                      Inpool
                    </a>
                  </nuxt-link>
                </li>
                <li class="nav-s__item">
                  <nuxt-link to="/projects/7" custom v-slot="{ isActive }">
                    <a 
                      href="/projects/7" 
                      class="nav-s__link"
                      :class="isActive ? 'active' : ''"
                      @click.prevent="openLink(2)">
                      NCE
                    </a>
                  </nuxt-link>
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
import VirtualScroll from 'virtual-scroll'
const speed = 1
export default {
  name: 'NuxtNavigation',
  data() {
    return {
    };
  },
  computed: {
    isNav() {
      return this.$store.getters['nav/isNav']
    }
  },
  watch: {
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init() {
      this.$nav = document.querySelector('.nav');
      this.$toggle = document.querySelector('.nav-toggle');
      this.state = false;
      this.available = true;
      this.$links = this.$nav.querySelectorAll('a');
      this.$nav_m = document.querySelector('.nav-m');
      this.$nav_m_links = document.querySelectorAll('.nav-m__link');
      this.$nav_m_link_active = document.querySelector('.nav-m__link.active');
      this.$nav_m_items = document.querySelectorAll('.nav-m__item');
      this.$nav_m_links.forEach(($link)=>{this.$gsap.set($link, {scale:0.66, xPercent:-17, autoAlpha:1})})
      this.$nav_s = document.querySelectorAll('.nav-s');
      this.$nav_s_links = document.querySelectorAll('.nav-s__link');
      this.$nav_s_items = document.querySelectorAll('.nav-s__item');
      this.scrollbar = {};
      this.scrollable = false;
      /* ===== Gsap effects ===== */
      this.$gsap.registerEffect({
        name: "active",
        effect: ($target) => {
          return this.$gsap.to($target, {duration:speed,scale:1,xPercent:0,autoAlpha:1,ease:'power2.out'});
        }
      });
      this.$gsap.registerEffect({
        name: "hover1",
        effect: ($target) => {
          return this.$gsap.to($target, {duration:speed/2,scale:0.68,xPercent:-16,autoAlpha:1,ease:'power2.out'});
        }
      });
      this.$gsap.registerEffect({
        name: "hover2",
        effect: ($target) => {
          return this.$gsap.to($target, {duration:speed/2,scale:0.68,xPercent:-16,autoAlpha:0.6,ease:'power2.out'});
        }
      });
      this.$gsap.registerEffect({
        name: "default",
        effect: ($target) => {
          return this.$gsap.to($target, {duration:speed/2,scale:0.66,xPercent:-17,autoAlpha:0.15,ease:'power2.out'});
        }
      });
      this.$gsap.registerEffect({
        name: "vertical",
        effect: ($target, y) => {
          return this.$gsap.to($target, {duration:speed, y:y, ease:'power2.out'});
        }
      });

      /* ===== Toggle Nav Events ===== */
      this.$toggle.addEventListener('click', ()=> {
        if(this.available==true) {
          this.available=false;
          if(this.isNav==false) {
            this.open();
          } else {
            this.close();
          }
        }
      })
      /* ===== Sub Nav Scrollbars ===== */
    },
    getNavAnimation(callback) {
      let fromVal = 0;
      this.$nav_m_links.forEach(($link, index)=>{
        if($link==this.$nav_m_link_active) {
          fromVal=index;
        }
      })
      /* ===== Toggle Nav Animations ===== */
      this.animation = this.$gsap.timeline({paused:true})
        .fromTo(this.$toggle.querySelector('span:first-child'), {y:0}, {duration:speed*0.5, y:8, ease:'power2.in'})
        .fromTo(this.$toggle.querySelector('span:last-child'), {y:0}, {duration:speed*0.5, y:-8, ease:'power2.in'}, `-=${speed*0.5}`)
        .fromTo(this.$toggle.querySelector('span:nth-child(2)'), {autoAlpha:1}, {duration:speed*0.25, autoAlpha:0}, `-=${speed*0.25}`)   //0.5
        .fromTo(this.$toggle.querySelector('span:first-child'), {rotation:0}, {duration:speed*0.75, rotation:45, ease:'power2.out'})
        .fromTo(this.$toggle.querySelector('span:last-child'), {rotation:0}, {duration:speed*0.75, rotation:135, ease:'power2.out'}, `-=${speed*0.75}`) //1.25
        .fromTo(this.$nav, {autoAlpha:0}, {duration:speed/2, autoAlpha:1, ease:'power2.inOut'}, `-=${speed*1.25}`) //1.25
        .fromTo(this.$nav_m_items, {autoAlpha:0}, {autoAlpha:1, ease:'power2.inOut', duration:speed, stagger:{amount:speed*0.15, from:fromVal}}, `-=${speed*0.9}`)
        .fromTo(this.$nav_m_items, {x:-200}, {x:0, ease:'power2.out', duration:speed, stagger:{amount:speed*0.15, from:fromVal}}, `-=${speed*1.15}`)
      
      if(callback!==undefined) {
        callback();
      }
    },
    toggle_nav_s() {
      let $nav = this.$nav_s_active, index = 0;
      if($nav!==undefined) {
        let $items = $nav.querySelectorAll('.nav-s__item');
        //get active link index
        $nav.querySelectorAll('.nav-s__link').forEach(($link,i)=>{
          if($link==this.$nav_s_link_active) {
            index = i;
          }
        })
        //animation
        this.nav_s_animation = gsap.timeline({paused:true})
          .set($nav, {autoAlpha:1})
          .fromTo($items, {autoAlpha:0}, {duration:speed, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.25, from:index}})
          .fromTo($items, {x:100}, {duration:speed, x:0, ease:'power2.out', stagger:{amount:speed*0.25, from:index}}, `-=${speed*1.25}`)
        let s; //scroll to link speed
        if(this.$nav_s_old==undefined || this.$nav_s_active!==this.$nav_s_old) {
          s=0;
          if(Nav.state) this.nav_s_animation.play();
          if(this.$nav_s_active!==this.$nav_s_old) {
            gsap.timeline().to(Nav.$nav_s_old, {duration:speed/2, autoAlpha:0, ease:'power2.out'});
          }
        } 
        else {
          s=speed;
          if(Nav.state) this.nav_s_animation.progress(1);
        }
        this.scrollToActiveLink(s);
      } 
      else if(this.$nav_s_old!==undefined) {
        //let $navOld = this.$nav_s_old;
        gsap.timeline().to(Nav.$nav_s_old, {duration:speed/2, autoAlpha:0, ease:'power2.out'});
        this.nav_s_animation = undefined;
      }
      this.$nav_s_old = this.$nav_s_active;
    },
    open() {
      this.$store.dispatch('nav/updateNav')
      // Header.show();
      this.$toggle.classList.add('disabled');
      this.getNavAnimation(()=>{
        this.animation.play();
        this.animation.eventCallback("onComplete",()=>{
          this.available=true;
        });
      })
      //subnav anims
      if(this.nav_s_animation) {
        setTimeout(()=>{
          this.nav_s_animation.play();
        }, speed*250)
      }
    },
    close() {
      this.$store.dispatch('nav/updateNav')
      this.getNavAnimation(()=>{
        this.animation.reverse(0);
        this.animation.eventCallback("onReverseComplete",()=>{
          this.$toggle.classList.remove('disabled');
          this.available=true;
        });
      })
      if(this.nav_s_animation) {
        this.nav_s_animation.reverse();
      }
    },
    vertical_nav_m_links_moving() {
      let nav_height = this.$nav_m.getBoundingClientRect().height,
          item_height = this.$nav_m_links[0].parentNode.getBoundingClientRect().height,
          item_margin = (nav_height-(item_height*3))/2,
          moving_height = item_height + item_margin,
          index;
      if(this.$nav_m_link_active!==undefined) {
        let $link = this.$nav_m_link_active;
        this.$nav_m_links.forEach(($this, i)=>{
          if($this==$link) {
            index = i;
          }
        })
        //vertical move
        if(index==0) {
          this.$gsap.effects.vertical($link, moving_height);
          this.$nav_m_links.forEach(($this, i)=>{
            if(i==1 || i==2) {
              this.$gsap.effects.vertical($this, -moving_height/2);
            }
          })
        } else if(index==1) {
          this.$gsap.effects.vertical($link, '0');
          this.$nav_m_links.forEach(($this, i)=>{
            if(i==0) {
              this.$gsap.effects.vertical($this, moving_height/2);
            } else if(i==2) {
              this.$gsap.effects.vertical($this, -moving_height/2);
            }
          })
        } else {
          this.$gsap.effects.vertical($link, -moving_height);
          this.$nav_m_links.forEach(($this, i)=>{
            if(i==0 || i==1) {
              this.$gsap.effects.vertical($this, moving_height/2);
            } 
          })
        }
      } else {
        this.$nav_m_links.forEach(($this, i)=>{
          if(i==0) {
            this.$gsap.effects.vertical($this, moving_height*0.15);
          } else if(i==1) {
            this.$gsap.effects.vertical($this, '0');
          } else {
            this.$gsap.effects.vertical($this, -moving_height*0.15);
          }
        })
      }
    },
    openList(list, link, idx) {
      // clearTimeout(this.timeout)
      this.$nav_m_links.forEach(el => {
        el.classList.remove('active')
        el.parentNode.classList.remove('disabled');
        this.$gsap.effects.default(el)
      });
      
      
      if (list) {
         this.$nav_s_active = document.querySelector(`.nav-s[data-list='${list}']`);
      } else {
        this.$nav_s_active = undefined;
        // this.close()
      }
      if(this.$nav_m_link_active!==undefined) {
        this.$nav_m_link_active.parentNode.classList.remove('disabled');
        // this.$gsap.to(this.$nav_m_link_active, {duration:speed/2, scale:0.66, xPercent:-17, autoAlpha:0.1, ease:'power2.out'});
      }
      this.$nav_m_link_active = this.$nav_m_links[idx]
      // this.$gsap.effects.active(this.$nav_m_link_active);
      this.$nav_m_link_active.parentNode.classList.add('disabled');
      this.vertical_nav_m_links_moving();
      // this.toggle_nav_s();
    },
  },
   
};
</script>

<style lang="scss">
</style>
