import VuexPersistence from "vuex-persist";

export default ({ store }) => {
  new VuexPersistence({
    key: "artica",
    storage: window.localStorage,
    // storage: window.sessionStorage ,
    reducer: (state) => {
      return {
        // modules
        theme: {
          isDark: state.theme.isDark,
        },
      };
    },
  }).plugin(store);
};
