import gsap from 'gsap';

export const TouchHoverEvents = {
  targets: 'a, [data-cursor], button, label, tr, .jsTouchHover, .js-3d-object',
  touched: false,
  touchEndDelay: 200, // ms
  init() {
    document.addEventListener('touchstart', (event) => {
      this.events(event);
    });
    document.addEventListener('touchend', (event) => {
      this.events(event);
    });
    document.addEventListener(
      'mouseenter',
      (event) => {
        this.events(event);
      },
      true
    );
    document.addEventListener(
      'mouseleave',
      (event) => {
        this.events(event);
      },
      true
    );
    document.addEventListener('mousedown', (event) => {
      this.events(event);
    });
    document.addEventListener('mouseup', (event) => {
      this.events(event);
    });
    document.addEventListener('contextmenu', (event) => {
      this.events(event);
    });
  },
  events(event) {
    const $targets = [];
    $targets[0] =
      event.target !== document ? event.target.closest(this.targets) : null;
    let $element = $targets[0];
    let i = 0;

    while ($targets[0]) {
      $element = $element.parentNode;
      if ($element !== document) {
        if ($element.matches(this.targets)) {
          i++;
          $targets[i] = $element;
        }
      } else {
        break;
      }
    }

    // touchstart
    if (event.type === 'touchstart') {
      this.touched = true;
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      if ($targets[0]) {
        for (const $target of document.querySelectorAll(this.targets)) {
          $target.classList.remove('touch');
        }
        for (const $target of $targets) {
          $target.classList.add('touch');
        }
      }
    } else if (
      event.type === 'touchend' ||
      (event.type === 'contextmenu' && this.touched)
    ) {
      // touchend
      this.timeout = setTimeout(() => {
        this.touched = false;
      }, 500);
      if ($targets[0]) {
        setTimeout(() => {
          for (const $target of $targets) {
            $target.dispatchEvent(new CustomEvent('customTouchend'));
            $target.classList.remove('touch');
          }
        }, this.touchEndDelay);
      }
    }

    // mouseenter
    if (
      event.type === 'mouseenter' &&
      !this.touched &&
      $targets[0] &&
      $targets[0] === event.target
    ) {
      $targets[0].classList.add('hover');
      Circle.enter($targets[0]);
    } else if (
      event.type === 'mouseleave' &&
      !this.touched &&
      $targets[0] &&
      $targets[0] === event.target
    ) {
      // mouseleave
      $targets[0].classList.remove('focus', 'hover');
      Circle.leave();
    }
    if (event.type === 'mousedown' && !this.touched && $targets[0]) {
      // mousedown
      $targets[0].classList.add('focus');
    } else if (event.type === 'mouseup' && !this.touched && $targets[0]) {
      // mouseup
      $targets[0].classList.remove('focus');
    }
  },
};
export const Circle = {
  parent: null,
  element: null,
  init() {
    this.width = this.parent.clientWidth;
    this.height = this.parent.clientHeight;
    this.c = this.width / 2;
    this.r = this.width / 2 - 2;
    this.element.setAttribute('cx', this.c);
    this.element.setAttribute('cy', this.c);
    this.element.setAttribute('r', this.r);
    this.circumference = 2 * Math.PI * this.r;
    this.element.setAttribute(
      'style',
      `stroke-dasharray:${this.circumference} ${this.circumference};stroke-dashoffset:0;`
    );
    this.flag = true;
    let xStart, yStart;

    document.addEventListener('mousemove', (event) => {
      const x = event.clientX;
      const y = event.clientY;
      let speed;
      let timeout;
      // move event
      speed = Math.sqrt(
        (x - xStart) * (x - xStart) + (y - yStart) * (y - yStart)
      );
      if (this.flag === true) {
        if (speed > 10) {
          clearTimeout(timeout);
          this.parent.classList.add('move');
          timeout = setTimeout(() => {
            this.parent.classList.remove('move');
          }, 200);
        } else {
          this.parent.classList.remove('move');
        }
        xStart = x;
        yStart = y;
      }
      // move
      gsap
        .timeline()
        .to(Circle.parent, { duration: 0.5, x, y, ease: 'power2.out' });
    });
    document.addEventListener('mousedown', (event) => {
      this.parent.classList.add('focus');
    });
    document.addEventListener('mouseup', (event) => {
      this.parent.classList.remove('focus');
    });
    document.addEventListener('mouseleave', (event) => {
      this.parent.classList.add('hidden');
    });
    document.addEventListener('mouseenter', (event) => {
      this.parent.classList.remove('hidden');
    });
    this.show();
  },
  enter($target) {
    this.parent.classList.add('hover');
    const attr = $target.getAttribute('data-cursor');
    if (attr) {
      this.parent.classList.add(attr);
    }
  },
  leave() {
    this.parent.classList.remove(
      'hover',
      'black',
      'white',
      'reversed',
      'hidden'
    );
  },
  show() {
    gsap.to(this.parent, { autoAlpha: 1, duration: 1, ease: 'power2.inOut' });
  },
};
