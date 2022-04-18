import { Header } from "@/helpers";

export default ({ app }, inject) => {
  inject("headerAnimations", (parent, icon) => {
    return Header;
  });
};
