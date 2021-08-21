<template>
  <FormLayout form-title="Add User Account">
    <v-form v-model="isValid" ref="userEditForm" @submit.prevent="submitUser">
      <v-row align="center" justify="center" dense>
        <v-col sm="12" md="4">
          <v-text-field
            outlined
            dense
            v-model="firstname"
            label="Firstname"
            :rules="[rules.fieldRequired]"
          />
        </v-col>

        <v-col sm="12" md="4">
          <v-text-field
            outlined
            dense
            v-model="middlename"
            label="Middlename"
            :rules="[rules.fieldRequired]"
          />
        </v-col>

        <v-col sm="12" md="4">
          <v-text-field
            outlined
            dense
            v-model="lastname"
            label="Lastname"
            :rules="[rules.fieldRequired]"
          />
        </v-col>

        <v-col sm="12">
          <v-text-field
            outlined
            dense
            v-model="birthday"
            type="date"
            label="Birthday"
            :rules="[rules.fieldRequired]"
          />
        </v-col>
      </v-row>

      <v-row align="center" justify="center" dense>
        <v-col sm="12">
          <v-select
            :items="constant.roles"
            outlined
            dense
            v-model="roles"
            label="Roles"
            :rules="[rules.fieldRequired]"
          />
        </v-col>

        <v-col sm="12">
          <v-text-field
            outlined
            dense
            v-model="email"
            label="Email"
            type="email"
            :rules="[rules.fieldRequired, rules.emailFormatRequired]"
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
import { getSet } from "@/utils";
export default {
  name: "UserEditForm",
  components: {
    FormLayout,
  },
  data: () => ({
    constant: {
      roles: ROLES,
    },
    isValid: true,
    rules: {
      fieldRequired,
      fieldMinimum,
      emailFormatRequired,
    },
  }),

  methods: {
    async submitUser() {
      const userEditForm = this.$refs.userEditForm;
      if (userEditForm.validate()) {
        await this.$store.dispatch("user/updateUser");
      }
    },
  },

  computed: {
    firstname: getSet("user", "GET_EDIT_FIRSTNAME", "SET_EDIT_FIRSTNAME"),
    middlename: getSet("user", "GET_EDIT_MIDDLENAME", "SET_EDIT_MIDDLENAME"),
    lastname: getSet("user", "GET_EDIT_LASTNAME", "SET_EDIT_LASTNAME"),
    email: getSet("user", "GET_EDIT_EMAIL", "SET_EDIT_EMAIL"),
    roles: getSet("user", "GET_EDIT_ROLES", "SET_EDIT_ROLES"),
    birthday: getSet("user", "GET_EDIT_BIRTHDAY", "SET_EDIT_BIRTHDAY"),
  },

  destroyed() {
    this.$store.commit("user/UNSET_EDIT_FORM");
  },
};
</script>
