import { TouchHoverEvents } from '@/helpers'

export default ({ app }, inject) => {
  inject('animateCatCards', () => {
    for (const $card of document.querySelectorAll('.fast-categories-block')) {
      const $icon = $card.querySelector('.icon'),
            $text = $card.querySelector('.label-item__title'),
            $chars = $card.querySelectorAll('.char'),
            $bg = $card.querySelector('.fast-categories-block__bg'),
            $item = $card.querySelector('.fast-categories-block__container');
      let rotation = 0,
          interval;
      const letters = app.$gsap
        .timeline({ paused: true })
        .fromTo(
          $bg,
          { scale: 0.9 },
          { duration: 1 / 2, scale: 1, ease: 'power2.inOut' }
        )
        .fromTo(
          $text,
          { yPercent: 100, autoAlpha: 0 },
          { duration: 1, yPercent: 0, autoAlpha: 1, ease: 'power2.inOut' },
          `-=${1 / 2}`
        )
        .fromTo(
          $chars,
          { autoAlpha: 0, yPercent: 100 },
          {
            duration: 1 * 0.7,
            autoAlpha: 1,
            yPercent: 0,
            ease: 'power2.inOut',
            stagger: { amount: 1 * 0.3 }
          },
          `-=${1}`
        );

      function randomAnimation () {
        if (getRandom(1, 2) === 1 && rotation < 360) {
          rotation = rotation + 180
        } else if (rotation > -360) {
          rotation = rotation - 180
        }
        $icon.setAttribute('style', `transform:rotate(${rotation}deg)`)
        interval = setTimeout(randomAnimation, getRandom(1, 5) * 1000)
      }

      interval = setTimeout(randomAnimation, getRandom(1, 5) * 1000);

      $item.addEventListener('mouseenter', event);
      $item.addEventListener('mouseleave', event);
      $item.addEventListener('touchstart', event);
      $item.addEventListener('customTouchend', event);

      function event (event) {
        if ((event.type === 'mouseenter' && !TouchHoverEvents.touched) || event.type === 'touchstart') {
          letters.play()
          $icon.setAttribute('style', 'transform:rotation(0deg)')
          clearTimeout(interval)
        } else if (
          (event.type === 'mouseleave' && !TouchHoverEvents.touched) ||
          event.type === 'customTouchend'
        ) {
          letters.reverse()
          interval = setTimeout(randomAnimation, getRandom(1, 5) * 1000)
        }
      }
    }
  });
};
function getRandom (min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
