export const state = () => ({
  isFinished: false,
  isFinishedDelay: false,
});

export const mutations = {
  setFinish(state) {
    state.isFinished = !state.isFinished;
  },
  setFinishDelay(state) {
    state.isFinishedDelay = !state.isFinishedDelay;
  },
  
};
export const getters = {
  isFinished: (state) => state.isFinished,
  isFinishedDelay: (state) => state.isFinished,
};
