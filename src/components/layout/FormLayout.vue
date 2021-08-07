<template>
  <v-card elevation="formElevation">
    <v-card-title>
      <v-icon left>
        {{ formIcon }}
      </v-icon>
      {{ formTitle }}
    </v-card-title>
    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "FormLayout",
  props: {
    formTitle: {
      type: String,
    },
    formIcon: {
      type: String,
    },
    formElevation: {
      type: [String, Number],
      default: 10,
    },
  },
};
</script>
