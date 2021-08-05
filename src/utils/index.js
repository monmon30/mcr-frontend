import { debounce } from "lodash";

export const getSet = function (storeName, getter, setter) {
  return {
    get() {
      return this.$store.getters[`${storeName}/${getter}`];
    },
    set: debounce(function (val) {
      this.$store.commit(`${storeName}/${setter}`, val);
    }, 0.5),
  };
};
