<template>
    <main class="ii" style="padding-top: 100px">
        <div class="s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Assumenda, ea harum perferendis incidunt nesciunt provident nobis, esse 
        aspernatur nemo modi nihil ut eveniet 
        necessitatibus dicta voluptates rerum! Repudiandae, ipsa distinctio.</div>
    </main>
</template>

<script>
export default {
//    transition: {
//         name: 'custom',
//         appear: true,
//         css: false,
//         enter(el, done) {
//             // el.style.transform = `translateY(-80px)`
//             console.log("Enter Parent Home", el);
//             done()
//         },
//         leave(el, done) {
//             console.log("Leave Parent Home", el);
//             // el.style.transform = `translateY(0)`
//             done()
//         },   
//    },
  name: "TestPage",
  computed: {
  },
  mounted() {
  },
  methods: {
    beforeEnter(el) {
      el.style.transform = `translateY(-60px)`
      console.log('beforeEnter');
    },
    enter(el, done) {
      console.log('enter');
      done();
      console.log('enter-done');
    },
    afterEnter(el) {
      console.log('afterEnter');
    },
    enterCancelled(el) {
      console.log('enterCancelled');
    },

    beforeLeave(el) {
      console.log('beforeLeave');
    },
    
    leave(el, done) {
      console.log('leave');
      done();
      console.log('leave-done');
    },
    afterLeave(el) {
      console.log('afterLeave');
    },
    // leaveCancelled only available with v-show
    leaveCancelled(el) {
      console.log('leaveCancelled');
    },
  },
};
</script>