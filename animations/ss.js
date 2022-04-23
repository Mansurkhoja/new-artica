
const Contacts = {
    init: function(callback) {
      this.$form = document.querySelector('.contacts-form');
      this.$form_container = this.$form.querySelector('.contacts-form__content');
      this.$form_message = this.$form.querySelector('.contacts-form__succes-message');
      this.$inputs = this.$form.querySelectorAll('.input__element');
      this.$submit = this.$form.querySelector('.contacts-form-button');
      this.animations = [];
      this.sending = false;
      //validation
      this.constraints = {
        name: {
          presence: {allowEmpty: false},
          format: {
            pattern: /[A-zА-яЁё ]+/
          },
          length: {minimum: 2, maximum: 50}
        },
        phone: {
          format: {
            pattern: /^\+7 \d{3}\ \d{3}\-\d{4}$/
          }
        },
        text: {
          presence: {allowEmpty: false},
          length: {minimum: 2, maximum: 200}
        }
      };
      this.mask = Inputmask({
        mask: "+7 999 999-9999",
        showMaskOnHover: false,
        clearIncomplete: false
      }).mask('[name="phone"]');
  
      //add events
      this.$inputs.forEach(($input)=>{
        $input.addEventListener('focus',(event)=>{this.checkInputs($input, event.type)});
        $input.addEventListener('blur',(event)=>{this.checkInputs($input, event.type)});
        $input.addEventListener('input',(event)=>{this.checkInputs($input, event.type)});
      })
      
      //submit
      this.$form.addEventListener('submit', (event)=>{
        event.preventDefault();
        this.submitEvent();
      });
  
      this.getAnimations(()=>{
        if(callback!==undefined) {
          callback();
        }
      })
    },
    getAnimations: function(callback) {
      let $items = document.querySelectorAll('.contacts__animate-item'),
          $hidden;
  
      if(localStorage.getItem('message_sent')==undefined) {
        $hidden = this.$form_message;
      } else {
        $hidden = this.$form_container;
      }
  
      this.enterAnimation = gsap.timeline({paused:true})
        .set(window.$container, {autoAlpha:1})
        .set($hidden, {autoAlpha:0})
        .fromTo($items, {autoAlpha:0}, {autoAlpha:1, duration:speed*0.8, ease:'power2.inOut', stagger:{amount:speed*0.2 ,from:'random'}})
  
      if(callback!==undefined) {
        callback();
      }
    },
    checkInputs: function($input, eventType) {
      //focus
      if(eventType=='focus') {
        $input.parentNode.classList.add('focused')
      } 
      //blur
      else if(eventType=='blur') {
        let value = $input.value;
        if(value=='' || validate.single(value, {presence: {allowEmpty: false}})!==undefined) {
          $input.value = '';
          $input.parentNode.classList.remove('focused');
        }
      }
      //input
      else if(eventType=='input') {
        this.values = {
          name: this.$form.querySelector('[name="name"]').value,
          text: this.$form.querySelector('[name="text"]').value,
          phone: this.$form.querySelector('[name="phone"]').value
        }
  
        let resault = validate(this.values, this.constraints),
            states = [];
  
        this.$inputs.forEach(($input, index)=>{
          states[index] = true;
        })
  
        if(resault!==undefined) {
          Object.keys(resault).forEach((id)=>{
            this.$inputs.forEach(($input, index)=>{
              if($input.getAttribute('id')==id) {
                states[index] = false;
              }
            })
          })
        }
  
        this.$inputs.forEach(($input, index)=>{
          let $parent = $input.parentNode;
          if(states[index] && !$parent.classList.contains('valid')) {
            $parent.classList.add('valid');
            /* check animation */
            let $icon = $parent.querySelector('.input__icon'),
                $check = $icon.querySelector('path'),
                w = $check.getTotalLength();
            this.animations[index] = gsap.timeline()
              .set($icon, {autoAlpha:1})
              .set($check, {css:{'stroke-dasharray':w}})
              .fromTo($check, {css:{'stroke-dashoffset':w}}, {duration:speed,css:{'stroke-dashoffset':0}, ease:'power2.out'})
          } else if(!states[index] && $parent.classList.contains('valid')) {
            $parent.classList.remove('valid');
            this.animations[index].timeScale(2).reverse();
          }
        })
  
        if(resault==undefined) {
          this.valid = true;
          this.$submit.classList.add('active');
        } else { 
          this.valid = false;
          this.$submit.classList.remove('active');
        }
      }
    },
    submitEvent: function() {
      if(this.valid && !this.sending && localStorage.getItem('message_sent')==undefined) {
        this.sending = true;
        //hide
        gsap.to(this.$form_container, {autoAlpha:0.5, duration:speed/2, ease:'power2.inOut'})
        this.$form_container.classList.add('loading');
        //event
        let request = new XMLHttpRequest();
        request.open('POST', '../smtp/send.php', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.send(`name=${encodeURIComponent(this.values.name)}&phone=${encodeURIComponent(this.values.phone)}&text=${encodeURIComponent(this.values.text)}`)
        //succes
        request.addEventListener('load', (event)=>{
          if(request.status==200) {
            this.submitedEvent();
          }
        });
      }
    },
    submitedEvent: function() {
      localStorage.setItem('message_sent', 'true');
      LocalStorage.update();
      gsap.timeline()
        .to(this.$form_container, {autoAlpha:0, duration:speed/2, ease:'power2.in'})
        .to(this.$form_message, {autoAlpha:1, duration:speed, ease:'power2.inOut'})
    }
  }