<template>
  <FormLayout form-title="Reset Password" form-icon="mdi-form-textbox-password">
    <v-form
      @submit.prevent="submitResetPassword"
      ref="resetPasswordForm"
      lazy-validation
    >
      <v-row align="center" justify="center" dense>
        <v-col cols="12">
          <v-text-field
            v-model="form.password"
            label="Enter the password"
            outlined
            dense
            :rules="[rules.fieldRequired]"
            type="password"
            autocomplete="off"
          />
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="confirmPassword"
            label="Confirm Password"
            outlined
            dense
            :rules="[
              rules.fieldRequired,
              v => form.password == v || 'Password didnt matched!',
            ]"
            type="password"
            autocomplete="off"
          />
        </v-col>
      </v-row>

      <v-btn type="submit" dark color="blue"> SUBMIT </v-btn>
    </v-form>
  </FormLayout>
</template>

<script>
import FormLayout from "@/components/layout/FormLayout";
import { fieldRequired } from "@/validations";

export default {
  name: "UserResetPasswordForm",
  components: {
    FormLayout,
  },
  data: () => ({
    rules: {
      fieldRequired,
    },

    form: {
      password: null,
    },

    confirmPassword: null,
  }),

  methods: {
    async submitResetPassword() {
      await this.$store.dispatch("user/resetPassword", this.form);
      this.$refs.resetPasswordForm.reset();
      this.$store.commit("global/SET_DIALOG_RESET", false);
    },
  },

  destroyed() {
    this.form.password = null;
    this.confirmPassword = null;
  },
};
</script>
