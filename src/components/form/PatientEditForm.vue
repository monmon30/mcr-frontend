<template>
  <FormLayout form-title="Edit Patient" form-icon="mdi-account-edit">
    <v-form
      @submit.prevent="updatePatient"
      v-model="valid"
      ref="patientUpdateForm"
    >
      <v-row align="center" justify="center" dense>
        <v-col sm="12" md="3">
          <v-text-field
            v-model="firstname"
            label="Firstname"
            outlined
            dense
            lazy-validation
            :rules="[rules.fieldRequired, rules.fieldMinimum]"
          />
        </v-col>
        <v-col sm="12" md="3">
          <v-text-field
            v-model="middlename"
            label="Middlename"
            outlined
            dense
            :rules="[rules.fieldRequired, rules.fieldMinimum]"
          />
        </v-col>
        <v-col sm="12" md="3">
          <v-text-field
            v-model="lastname"
            label="Lastname"
            outlined
            dense
            :rules="[rules.fieldRequired, rules.fieldMinimum]"
          />
        </v-col>
        <v-col sm="12" md="3">
          <v-text-field v-model="suffix" label="Suffix" outlined dense />
        </v-col>
      </v-row>

      <v-row align="center" justify="center" dense>
        <v-col sm="12" md="6">
          <v-text-field
            v-model="birthday"
            label="Birthday"
            type="date"
            outlined
            dense
            :rules="[rules.fieldRequired]"
          />
        </v-col>

        <v-col sm="12" md="6">
          <v-select
            label="Sex"
            v-model="sex"
            :items="constants.SEX_OPTIONS"
            item-value="value"
            item-text="desc"
            type="date"
            outlined
            dense
            :rules="[rules.fieldRequired]"
          />
        </v-col>
      </v-row>

      <v-row align="center" justify="center" dense>
        <v-col sm="12">
          <v-textarea
            label="Address"
            v-model="address"
            outlined
            dense
            :rules="[rules.fieldRequired, rules.fieldMinimum]"
          />
        </v-col>
      </v-row>

      <v-row align="center" justify="center" dense>
        <v-col sm="12" md="4">
          <v-text-field
            v-model="contact_number"
            label="Contact Number"
            outlined
            dense
            :rules="[rules.fieldRequired]"
          />
        </v-col>

        <v-col sm="12" md="4">
          <v-text-field v-model="landline" label="Landline" outlined dense />
        </v-col>

        <v-col sm="12" md="4">
          <v-text-field
            v-model="email"
            label="Email Address"
            outlined
            dense
            :rules="[rules.fieldRequired, rules.emailFormatRequired]"
          />
        </v-col>
      </v-row>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="!valid" color="blue" type="submit" :dark="valid">
          submit
        </v-btn>
        <v-btn
          color="grey darken-3"
          @click="$store.dispatch('global/closeDialog', 'SET_DIALOG_EDIT')"
          dark
        >
          CANCEL
        </v-btn>
      </v-card-actions>
    </v-form>
  </FormLayout>
</template>

<script>
import FormLayout from "@/components/layout/FormLayout.vue";
import { SEX_OPTIONS } from "@/constants";
import { getSet } from "@/utils";
import {
  fieldRequired,
  fieldMinimum,
  emailFormatRequired,
} from "@/validations";

export default {
  name: "PatientEditForm",

  components: {
    FormLayout,
  },

  data: () => ({
    valid: true,
    constants: {
      SEX_OPTIONS,
    },
    rules: {
      fieldRequired,
      fieldMinimum,
      emailFormatRequired,
    },
  }),

  methods: {
    async updatePatient() {
      await this.$store.dispatch("patient/updatePatient");
    },

    clearFields() {
      this.$refs.patientUpdateForm.reset();
    },
  },

  computed: {
    firstname: getSet("patient", "GET_EDIT_FIRSTNAME", "SET_EDIT_FIRSTNAME"),
    middlename: getSet("patient", "GET_EDIT_MIDDLENAME", "SET_EDIT_MIDDLENAME"),
    lastname: getSet("patient", "GET_EDIT_LASTNAME", "SET_EDIT_LASTNAME"),
    suffix: getSet("patient", "GET_EDIT_SUFFIX", "SET_EDIT_SUFFIX"),
    birthday: getSet("patient", "GET_EDIT_BIRTHDAY", "SET_EDIT_BIRTHDAY"),
    sex: getSet("patient", "GET_EDIT_SEX", "SET_EDIT_SEX"),
    address: getSet("patient", "GET_EDIT_ADDRESS", "SET_EDIT_ADDRESS"),
    contact_number: getSet(
      "patient",
      "GET_EDIT_CONTACT_NUMBER",
      "SET_EDIT_CONTACT_NUMBER"
    ),
    landline: getSet("patient", "GET_EDIT_LANDLINE", "SET_EDIT_LANDLINE"),
    email: getSet("patient", "GET_EDIT_EMAIL", "SET_EDIT_EMAIL"),
  },
};
</script>
