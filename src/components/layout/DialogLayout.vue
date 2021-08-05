<template>
  <v-dialog v-model="dialogEdit" max-width="1000">
    <slot></slot>
  </v-dialog>
</template>

<script>
// import { getSet } from "@/utils";
import { debounce } from "lodash";

export default {
  name: "DialogLayout",

  props: {
    getterVal: {
      type: String,
      require: true,
    },
    setterVal: {
      type: String,
      require: true,
    },
  },
  computed: {
    dialogEdit: {
      get() {
        return this.$store.getters[`global/${this.getterVal}`];
      },
      set: debounce(function (val) {
        this.$store.commit(`global/${this.setterVal}`, val);
      }, 0.5),
    },
  },
};
</script>
