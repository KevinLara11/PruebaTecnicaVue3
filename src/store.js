import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      cart: [],
    };
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
  },
  actions: {
    addProductToCart({ commit }, product) {
      commit('addToCart', product);
    },
  },
});

export default store;