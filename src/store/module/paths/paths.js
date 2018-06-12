export const SET_PATH = 'setPath';
export const GET_PATH = 'getPath';

const PATH_BEFORE = 'pathBefore';

export default {
  namespaced: true,
  state: {
    [PATH_BEFORE]: null,
  },
  getters: {
    [GET_PATH]: state => state[PATH_BEFORE],
  },
  mutations: {
    [SET_PATH]: (state, payload) => {
      state[PATH_BEFORE] = payload;
    },
  },
  actions: {},
};
