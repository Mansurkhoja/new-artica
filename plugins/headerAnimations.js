import { Header } from '@/helpers';

export default ({ app }, inject) => {
  inject('headerAnimations', (header) => {
    Header.$header = header;
    return Header;
  });
};
