<template>
  <v-app>
    <v-app-bar app color="blue" dark>
      <div class="d-flex align-center font-weight-bold">
        {{ headerTitle }}
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DashboadrdLayout",
  props: {
    headerTitle: {
      type: String,
    },
  },
};
</script>
