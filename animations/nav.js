const speed = 1;
import gsap from 'gsap';
export const Nav = {
    init: function() {
      this.$nav = document.querySelector('.nav');
      this.$toggle = document.querySelector('.nav-toggle');
      this.state = false;
      this.available = true;
      this.$links = this.$nav.querySelectorAll('a');
      this.$nav_m = document.querySelector('.nav-m');
      this.$nav_s = document.querySelectorAll('.nav-s');
      this.$nav_m_links = document.querySelectorAll('.nav-m__link');
      this.$nav_m_items = document.querySelectorAll('.nav-m__item');
      this.$nav_m_links.forEach(($link)=>{gsap.set($link, {scale:0.66, xPercent:-17, autoAlpha:1})})
      this.$nav_s_links = document.querySelectorAll('.nav-s__link');
      this.$nav_s_items = document.querySelectorAll('.nav-s__item');
      this.scrollbar = {};
      this.scrollable = false;
      /* ===== Gsap effects ===== */
      gsap.registerEffect({
        name: "active",
        effect: ($target) => {
          return gsap.to($target, {duration:speed,scale:1,xPercent:0,autoAlpha:1,ease:'power2.out'});
        }
      });
      gsap.registerEffect({
        name: "hover1",
        effect: ($target) => {
          return gsap.to($target, {duration:speed/2,scale:0.68,xPercent:-16,autoAlpha:1,ease:'power2.out'});
        }
      });
      gsap.registerEffect({
        name: "hover2",
        effect: ($target) => {
          return gsap.to($target, {duration:speed/2,scale:0.68,xPercent:-16,autoAlpha:0.6,ease:'power2.out'});
        }
      });
      gsap.registerEffect({
        name: "default",
        effect: ($target) => {
          return gsap.to($target, {duration:speed/2,scale:0.66,xPercent:-17,autoAlpha:0.15,ease:'power2.out'});
        }
      });
      gsap.registerEffect({
        name: "vertical",
        effect: ($target, y) => {
          return gsap.to($target, {duration:speed, y:y, ease:'power2.out'});
        }
      });
  
      /* ===== Toggle Nav Events ===== */
      this.$toggle.addEventListener('click', ()=> {
        if(this.available==true) {
          this.available=false;
          if(this.state==false) {
            this.open();
          } else {
            this.close();
          }
        }
      })
  
      /* ===== Sub Nav Scrollbars ===== */
      this.initScrollbars();
  
      /* ===== Events ===== */
      this.$nav_s_links.forEach(($link)=>{
        $link.addEventListener('click', (event)=>{
          let data = $link.getAttribute('data-category');
          if(data!==null) {
            event.preventDefault();
            // Projects.tabClick($link);
          }
        })
      })
  
      this.$nav_m_links.forEach(($link)=>{
        /* ===== Click ===== */
        $link.addEventListener('click', (event)=>{
          event.preventDefault();
          clearTimeout(this.timeout)
          let data = $link.getAttribute('data-list');
          if(data!==null) {
            this.$nav_s_active = document.querySelector(`.nav-s[data-list='${data}']`);
          } else {
            this.$nav_s_active = undefined;
          }
  
          if(this.$nav_m_link_active!==undefined) {
            this.$nav_m_link_active.parentNode.classList.remove('disabled');
            gsap.to(Nav.$nav_m_link_active, {duration:speed/2, scale:0.66, xPercent:-17, autoAlpha:0.1, ease:'power2.out'});
          }
  
          this.$nav_m_link_active = $link;
          gsap.effects.active($link);
          $link.parentNode.classList.add('disabled');
          this.vertical_nav_m_links_moving();
          this.toggle_nav_s();
        })
        /* ===== Mouseenter ===== */
        $link.addEventListener('mouseenter', ()=>{
          clearTimeout(this.timeout)
          if(this.$nav_m_link_active!==undefined) {
            gsap.effects.hover2($link);
          } else {
             this.$nav_m_links.forEach(($element)=>{
              if($element==$link) {
                gsap.effects.hover1($element);
              } else {
                gsap.effects.default($element);
              }
            })
          }
        })
        /* ===== Mouseleave ===== */
        $link.addEventListener('mouseleave', ()=>{
          clearTimeout(this.timeout)
          if(this.$nav_m_link_active!==undefined) {
            if($link!==this.$nav_m_link_active) {
              gsap.effects.default($link);
            }
          } else {
            this.timeout = setTimeout(()=>{
              gsap.effects.hover1(this.$nav_m_links);
            },500)
          }
        })
      })
      /* ===== Mouseleave ===== */
      this.$nav_m.addEventListener('mouseleave', ()=>{
        clearTimeout(this.timeout)
        if(this.$nav_m_link_active==undefined) {
          gsap.effects.hover1(this.$nav_m_links);
        } 
      })
  
      this.change();
    },
    getNavAnimation: function(callback) {
      let fromVal = 0;
      this.$nav_m_links.forEach(($link, index)=>{
        if($link==this.$nav_m_link_active) {
          fromVal=index;
        }
      })
      /* ===== Toggle Nav Animations ===== */
      this.animation = gsap.timeline({paused:true})
        .fromTo(Nav.$toggle.querySelector('span:first-child'), {y:0}, {duration:speed*0.5, y:8, ease:'power2.in'})
        .fromTo(Nav.$toggle.querySelector('span:last-child'), {y:0}, {duration:speed*0.5, y:-8, ease:'power2.in'}, `-=${speed*0.5}`)
        .fromTo(Nav.$toggle.querySelector('span:nth-child(2)'), {autoAlpha:1}, {duration:speed*0.25, autoAlpha:0}, `-=${speed*0.25}`)   //0.5
        .fromTo(Nav.$toggle.querySelector('span:first-child'), {rotation:0}, {duration:speed*0.75, rotation:45, ease:'power2.out'})
        .fromTo(Nav.$toggle.querySelector('span:last-child'), {rotation:0}, {duration:speed*0.75, rotation:135, ease:'power2.out'}, `-=${speed*0.75}`) //1.25
        .fromTo(Nav.$nav, {autoAlpha:0}, {duration:speed/2, autoAlpha:1, ease:'power2.inOut'}, `-=${speed*1.25}`) //1.25
        .fromTo(Nav.$nav_m_items, {autoAlpha:0}, {autoAlpha:1, ease:'power2.inOut', duration:speed, stagger:{amount:speed*0.15, from:fromVal}}, `-=${speed*0.9}`)
        .fromTo(Nav.$nav_m_items, {x:-200}, {x:0, ease:'power2.out', duration:speed, stagger:{amount:speed*0.15, from:fromVal}}, `-=${speed*1.15}`)
      
      if(callback!==undefined) {
        callback();
      }
    },
    vertical_nav_m_links_moving: function() {
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
          gsap.effects.vertical($link, moving_height);
          this.$nav_m_links.forEach(($this, i)=>{
            if(i==1 || i==2) {
              gsap.effects.vertical($this, -moving_height/2);
            }
          })
        } else if(index==1) {
          gsap.effects.vertical($link, '0');
          this.$nav_m_links.forEach(($this, i)=>{
            if(i==0) {
              gsap.effects.vertical($this, moving_height/2);
            } else if(i==2) {
              gsap.effects.vertical($this, -moving_height/2);
            }
          })
        } else {
          gsap.effects.vertical($link, -moving_height);
          this.$nav_m_links.forEach(($this, i)=>{
            if(i==0 || i==1) {
              gsap.effects.vertical($this, moving_height/2);
            } 
          })
        }
      } else {
        this.$nav_m_links.forEach(($this, i)=>{
          if(i==0) {
            gsap.effects.vertical($this, moving_height*0.15);
          } else if(i==1) {
            gsap.effects.vertical($this, '0');
          } else {
            gsap.effects.vertical($this, -moving_height*0.15);
          }
        })
      }
  
    },
    toggle_nav_s: function() {
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
    scrollToActiveLink: function(scrollSpeed) {
      let i;
      this.$nav_s.forEach(($nav, index)=>{
        if($nav==this.$nav_s_active) {
          i = index;
        } 
      })
      if(this.$nav_s_link_active!==undefined && this.$nav_s_link_active.closest('.nav-s')==this.$nav_s_active) {
        let val, $link = this.$nav_s_link_active;
        let h1 = $link.getBoundingClientRect().height;
        let h2 = this.scrollbar[i].navHeight();
        if(h1>h2) {
          val = this.scrollbar[i].$scrollarea.getBoundingClientRect().top-$link.getBoundingClientRect().top-((h1-h2)/2);
        } else {
          val = this.scrollbar[i].$scrollarea.getBoundingClientRect().top-$link.getBoundingClientRect().top;
        }
        this.scrollbar[i].scrollTo(val, scrollSpeed);
      } else {
        this.scrollbar[i].scrollTo(0, scrollSpeed);
      }
    },
    change: function() {
      let href = window.location.pathname+window.location.search;
      let count = 0;
      this.$nav_s_links.forEach(($link)=>{
        let attr = $link.getAttribute('href');
        if(attr==href) {
          count++;
          this.$nav_s_link_active = $link;
          this.$nav_s_active = $link.closest('.nav-s');
          $link.classList.add('active');
        } else {
          $link.classList.remove('active');
        }
      })
  
  
      if(count==0) {
        this.$nav_s_active = undefined;
        this.$nav_s_link_active = undefined;
      } else {
        count=0;
      }
    
      this.$nav_m_links.forEach(($link)=>{
        let attr = $link.getAttribute('href'),
            data = $link.getAttribute('data-list'),
            list = this.$nav_s_active!==undefined ? this.$nav_s_active.getAttribute('data-list') : false;
        if(attr==href || data==list) {
          count++;
          if($link!==this.$nav_m_link_active) {
            $link.parentNode.classList.add('disabled');
            gsap.effects.active($link);
            this.$nav_m_link_active = $link;
          }
        } else {
          $link.parentNode.classList.remove('disabled');
          gsap.effects.default($link);
        }
      })
      if(count==0) {
        this.$nav_m_link_active = undefined;
        gsap.effects.hover1(this.$nav_m_links);
      }
  
      this.vertical_nav_m_links_moving();
      this.toggle_nav_s();
  
      if(this.state) {
        setTimeout(()=>{
          this.close();
        },speed*500)
      }
    },
    initScrollbars: function() {
      let $parent = document.querySelector('.nav-s-area'),
          $container = document.querySelector('.nav-s-area__container');
      let setHeight=()=>{
        let values = [];
        this.$nav_s.forEach(($list, index)=>{
          values[index] = $list.querySelector('ul').getBoundingClientRect().height;
        })
        let h = Math.min.apply(null, values);
        $container.style.height = `${h}px`;
      };
  
    //   $parent.addEventListener('mouseenter', ()=>{
    //     if(device.desktop()) {
    //       this.scrollable = true;
    //     }
    //   })
    //   $parent.addEventListener('mouseleave', ()=>{
    //     if(device.desktop()) {
    //       this.scrollable = false;
    //     }
    //   })
      $parent.addEventListener('touchstart', ()=>{
        this.scrollable = true;
      })
      $parent.addEventListener('touchend', ()=>{
        this.scrollable = false;
      })
      setHeight();
      window.addEventListener('resize', function() {
        setHeight();
      })
  
      this.$nav_s.forEach(($nav, index)=>{
        let $scrollbar = this.scrollbar[index] = [];
        $scrollbar.$scrollarea = $nav.querySelector('ul');
        $scrollbar.ease = 0.05;
        $scrollbar.currentY = 0;
        $scrollbar.targetY = 0;
        $scrollbar.inscroll = false;
        $scrollbar.navHeight = () => {
          let h = $nav.querySelectorAll('a')[0].getBoundingClientRect().height;
          $nav.style.height = `${h}px`;
          return h;
        }
        $scrollbar.navHeight();
        $scrollbar.height = () => {return $scrollbar.$scrollarea.getBoundingClientRect().height - $scrollbar.navHeight()};
        // $scrollbar.instance = new VirtualScroll({passive:false})
        // $scrollbar.instance.on((event)=>{
        //   if(this.scrollable==true && !$scrollbar.inscroll && $nav==this.$nav_s_active) {
        //     $scrollbar.targetY += event.deltaY;
        //     $scrollbar.targetY = Math.max(-$scrollbar.height(), $scrollbar.targetY);
        //     $scrollbar.targetY = Math.min(0, $scrollbar.targetY);
        //   }
        // });
        $scrollbar.animation = () => {
          requestAnimationFrame($scrollbar.animation);
          if(!$scrollbar.inscroll) {
            $scrollbar.currentY += ($scrollbar.targetY - $scrollbar.currentY) * $scrollbar.ease;
            $scrollbar.currentY = $scrollbar.currentY > -0.1 ? 0 : $scrollbar.currentY;
            $scrollbar.$scrollarea.style.transform = `translate3d(0, ${$scrollbar.currentY}px, 0)`;
          }
        }
        $scrollbar.animation();
        $scrollbar.scrollTo=(value, s=speed)=>{
          $scrollbar.inscroll = true;
          if($scrollbar.animationScroll!==undefined) {
            $scrollbar.animationScroll.pause();
          }
          $scrollbar.animationScroll = gsap.fromTo($scrollbar.$scrollarea, {y:$scrollbar.currentY}, {duration:s, y:value, ease:'power2.inOut',onComplete:function() {
            $scrollbar.inscroll = false;
          }})
          $scrollbar.currentY = value;
          $scrollbar.targetY = value;
        }
      })
      
    
    },
    open: function() {
      Nav.state=true;
    //   Header.show();
      Nav.$toggle.classList.add('disabled');
      Nav.getNavAnimation(()=>{
        Nav.animation.play();
        Nav.animation.eventCallback("onComplete",()=>{
          Nav.available=true;
        });
      })
      //subnav anims
      if(this.nav_s_animation) {
        setTimeout(()=>{
          this.nav_s_animation.play();
        }, speed*250)
      }
    },
    close: function() {
      Nav.state=false;
      Nav.getNavAnimation(()=>{
        Nav.animation.reverse(0);
        Nav.animation.eventCallback("onReverseComplete",()=>{
          Nav.$toggle.classList.remove('disabled');
          Nav.available=true;
        });
      })
      if(this.nav_s_animation) {
        this.nav_s_animation.reverse();
      }
    }
  }