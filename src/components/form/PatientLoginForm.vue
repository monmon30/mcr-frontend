<template>
  <v-card elevation="10">
    <v-card-title> Login Form </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="login">
        <v-text-field v-model="form.email" outlined dense label="Email" />
        <v-text-field
          v-model="form.password"
          outlined
          dense
          label="Password"
          type="password"
        />
        <v-btn :loading="loading" type="submit" color="primary"> SUBMIT</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "PatientLoginForm",

  data: () => ({
    loading: false,
    form: {
      email: "",
      password: "",
    },
  }),
  methods: {
    login() {
      this.$store.dispatch("patient/login", this.form);
    },
  },
};
</script>
