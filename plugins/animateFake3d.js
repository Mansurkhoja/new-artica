import { TouchHoverEvents } from "@/helpers";
export default ({ app }, inject) => {
  inject("animateFake3d", (animation1, animation2) => {
    const $elements = document.querySelectorAll(".js-3d-object");
    for (const $element of $elements) {
      $element.addEventListener("mousemove", animation);
      $element.addEventListener("mouseleave", animation);
      $element.addEventListener("touchstart", animation, { passive: true });
      $element.addEventListener("customTouchend", animation);

      const $back = $element.querySelector(".js-3d-object__back");
      const $forward = $element.querySelector(".js-3d-object__forward");
      let moveForward = 1;
      let rotationForward = 1;
      let rotationBack = 1;

      if ($back !== null) {
        if ($back.getAttribute("data-rotation") !== null) {
          rotationBack = $back.getAttribute("data-rotation");
        }
      }
      if ($forward !== null) {
        if ($forward.getAttribute("data-rotation") !== null) {
          rotationForward = $forward.getAttribute("data-rotation");
        }
        if ($forward.getAttribute("data-move") !== null) {
          moveForward = $forward.getAttribute("data-move");
        }
      }
      function animation(event) {
        let x, y, w, h, xValue, yValue;
        if (event.type === "mousemove" || event.type === "touchstart") {
          if (event.type === "mousemove") {
            x = event.clientX;
            y = event.clientY;
          } else if (event.type === "touchstart") {
            x = event.touches[0].clientX;
            y = event.touches[0].clientY;
          }
          x = $element.getBoundingClientRect().x - x;
          y = $element.getBoundingClientRect().y - y;
          w = $element.getBoundingClientRect().width / 2;
          h = $element.getBoundingClientRect().height / 2;
          xValue = -Math.ceil(x + w) / (w + h);
          yValue = Math.ceil(y + h) / (w + h);
        }

        function play() {
          if ($back !== null) {
            animation1 = app.$gsap.timeline().to($back, {
              duration: 1,
              rotationY: xValue * rotationBack,
              rotationX: yValue * rotationBack,
              ease: "power2.out",
            });
          }
          if ($forward !== null) {
            animation2 = app.$gsap.timeline().to($forward, {
              duration: 1,
              x: xValue * moveForward,
              y: -yValue * moveForward,
              rotationY: xValue * rotationForward,
              rotationX: yValue * rotationForward,
              ease: "power2.out",
            });
          }
        }

        function reverse() {
          if ($back !== null) {
            animation1 = app.$gsap.timeline().to($back, {
              duration: 1,
              rotationY: 0,
              rotationX: 0,
              ease: "power2.out",
            });
          }
          if ($forward !== null) {
            animation2 = app.$gsap.timeline().to($forward, {
              duration: 1,
              x: 0,
              y: 0,
              rotationY: 0,
              rotationX: 0,
              ease: "power2.out",
            });
          }
        }
        if (
          (event.type === "mousemove" && !TouchHoverEvents.touched) ||
          event.type === "touchstart"
        ) {
          play();
        } else if (
          (event.type === "mousemove" && !TouchHoverEvents.touched) ||
          event.type === "customTouchend"
        ) {
          reverse();
        }
      }
    }
  });
};
