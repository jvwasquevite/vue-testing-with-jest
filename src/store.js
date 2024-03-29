/**
 * This class changes the state of items array
 * based on three diferent mutations methods
 */

export default {
  state: {
    items: [],
  },

  mutations: {
    /**
     * record(): push a new item to shopping list array
     * completed(): set done attribute as true
     * remove(): removes item from shopping list array
     */

    record(state, item) {
      state.items.push(item)
    },

    completed(state, item) {
      let index = state.items.indexOf(item)
      state.items[index].done = true
    },

    remove(state, item) {
      let index = state.items.indexOf(item)
      state.items.splice(index, 1)
    },
  },
}
