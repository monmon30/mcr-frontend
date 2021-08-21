<template>
  <FormLayout form-title="Add User Account">
    <v-form v-model="isValid" ref="userCreateForm" @submit.prevent="submitUser">
      <v-row align="center" justify="center" dense>
        <v-col sm="12" md="4">
          <v-text-field
            outlined
            dense
            v-model="form.firstname"
            label="Firstname"
            :rules="[rules.fieldRequired]"
          />
        </v-col>

        <v-col sm="12" md="4">
          <v-text-field
            outlined
            dense
            v-model="form.middlename"
            label="Middlename"
            :rules="[rules.fieldRequired]"
          />
        </v-col>

        <v-col sm="12" md="4">
          <v-text-field
            outlined
            dense
            v-model="form.lastname"
            label="Lastname"
            :rules="[rules.fieldRequired]"
          />
        </v-col>

        <v-col sm="12">
          <v-text-field
            outlined
            dense
            v-model="form.birthday"
            type="date"
            label="Birthday"
            :rules="[rules.fieldRequired]"
          />
        </v-col>
      </v-row>

      <v-row align="center" justify="center" dense>
        <v-col sm="12">
          <v-select
            :items="roles"
            outlined
            dense
            v-model="form.roles"
            label="Roles"
            :rules="[rules.fieldRequired]"
          />
        </v-col>

        <v-col sm="12">
          <v-text-field
            outlined
            dense
            v-model="form.email"
            label="Email"
            type="email"
            :rules="[rules.fieldRequired, rules.emailFormatRequired]"
          />
        </v-col>
      </v-row>
      <v-row align="center" justify="center" dense>
        <v-col sm="12" md="6">
          <v-text-field
            outlined
            dense
            v-model="form.password"
            label="Password"
            type="password"
            :rules="[rules.fieldRequired]"
          />
        </v-col>

        <v-col sm="12" md="6">
          <v-text-field
            outlined
            dense
            label="Confirm Password"
            type="password"
            v-model="confirmPassword"
            :rules="[
              rules.fieldRequired,
              v => v === form.password || 'Password didnt matched!',
            ]"
          />
        </v-col>
      </v-row>

      <v-row justify="end">
        <v-col>
          <v-btn
            :disabled="!isValid"
            type="submit"
            color="blue"
            :dark="isValid"
          >
            SUBMIT
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </FormLayout>
</template>

<script>
import FormLayout from "@/components/layout/FormLayout";
import { ROLES } from "@/constants";
import {
  fieldRequired,
  fieldMinimum,
  emailFormatRequired,
} from "@/validations";
export default {
  name: "UserCreateForm",
  components: {
    FormLayout,
  },
  data: () => ({
    roles: ROLES,
    isValid: true,
    rules: {
      fieldRequired,
      fieldMinimum,
      emailFormatRequired,
    },
    confirmPassword: null,
    form: {
      firstname: null,
      middlename: null,
      lastname: null,
      birthday: null,
      email: null,
      roles: null,
      password: null,
    },
  }),

  methods: {
    async submitUser() {
      const userCreateForm = this.$refs.userCreateForm;
      if (userCreateForm.validate()) {
        await this.$store.dispatch("user/createUser", this.form);
        await userCreateForm.reset();
      }
    },
  },
};
</script>
