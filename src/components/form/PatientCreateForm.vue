<template>
  <FormLayout form-title="Add Patient">
    <v-form
      @submit.prevent="submitPatient"
      v-model="valid"
      ref="patientCreateForm"
    >
      <v-row align="center" justify="center" dense>
        <v-col sm="12" md="3">
          <v-text-field
            v-model="form.firstname"
            label="Firstname"
            outlined
            dense
            lazy-validation
            :rules="[rules.fieldRequired, rules.fieldMinimum]"
          />
        </v-col>
        <v-col sm="12" md="3">
          <v-text-field
            v-model="form.middlename"
            label="Middlename"
            outlined
            dense
            :rules="[rules.fieldRequired, rules.fieldMinimum]"
          />
        </v-col>
        <v-col sm="12" md="3">
          <v-text-field
            v-model="form.lastname"
            label="Lastname"
            outlined
            dense
            :rules="[rules.fieldRequired, rules.fieldMinimum]"
          />
        </v-col>
        <v-col sm="12" md="3">
          <v-text-field v-model="form.suffix" label="Suffix" outlined dense />
        </v-col>
      </v-row>

      <v-row align="center" justify="center" dense>
        <v-col sm="12" md="6">
          <v-text-field
            v-model="form.birthday"
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
            v-model="form.sex"
            :items="sex"
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
            v-model="form.address"
            outlined
            dense
            :rules="[rules.fieldRequired, rules.fieldMinimum]"
          />
        </v-col>
      </v-row>

      <v-row align="center" justify="center" dense>
        <v-col sm="12" md="4">
          <v-text-field
            v-model="form.contact_number"
            label="Contact Number"
            outlined
            dense
            :rules="[rules.fieldRequired]"
          />
        </v-col>

        <v-col sm="12" md="4">
          <v-text-field
            v-model="form.landline"
            label="Landline"
            outlined
            dense
          />
        </v-col>

        <v-col sm="12" md="4">
          <v-text-field
            v-model="form.email"
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
        <v-btn color="grey darken-3" @click="clearFields" dark>
          CLEAR FIELDS
        </v-btn>
      </v-card-actions>
    </v-form>
  </FormLayout>
</template>

<script>
import FormLayout from "@/components/layout/FormLayout.vue";
import {
  fieldRequired,
  fieldMinimum,
  emailFormatRequired,
} from "@/validations";

export default {
  name: "PatientCreateForm",
  components: {
    FormLayout,
  },
  data: () => ({
    rules: {
      fieldRequired,
      fieldMinimum,
      emailFormatRequired,
    },
    valid: true,
    form: {
      firstname: "",
      middlename: "",
      lastname: "",
      suffix: "",
      birthday: "",
      sex: "",
      address: "",
      contact_number: "",
      landline: "",
      email: "",
    },
    sex: [
      { value: "F", desc: "Female" },
      { value: "M", desc: "Male" },
    ],
  }),

  methods: {
    async submitPatient() {
      await this.$store.dispatch("patient/createPatient", this.form);
      this.clearFields();
    },

    clearFields() {
      this.$refs.patientCreateForm.reset();
    },
  },
};
</script>
