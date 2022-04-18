import { Circle } from "@/helpers";

export default ({ app }, inject) => {
  inject("customMouse", (parent, icon) => {
    Circle.parent = parent;
    Circle.element = icon;
    Circle.init();
  });
};
