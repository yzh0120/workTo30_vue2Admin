import {
  resolve
} from "core-js/fn/promise"

const getters = {
  dataItem: (state) => {
    if (state.const.dataItem.length == 0) {
      setTimeout((() => {
        state.const.dataItem = {
          demo: [1, 2]
        }
        // state.commit("const/dataItem_fn",[{}])
        // console.log(state.const.dataItem , "-----")
      }), 1000)


    }
    return state.const.dataItem

  },
}
export default getters
/*
computed: {
    dataItem() {
      return this.$store.getters.dataItem;
    },
  },

*/
