import { TouchHoverEvents } from '@/helpers';
export default ({ app }, inject) => {
  inject('touchHoverEvents', () => {
    TouchHoverEvents.init();
  });
};
