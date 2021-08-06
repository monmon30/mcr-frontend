<template>
  <FormLayout
    :form-title="`Consult ${patient.attributes.patient_name}`"
    form-icon="mdi-account-check"
  >
    <v-form
      @submit.prevent="submitConsultation"
      v-model="valid"
      ref="consultationCreateForm"
    >
      <v-row align="center" justify="center" dense>
        <v-col sm="12" md="3">
          <v-text-field
            v-model="form.weight"
            label="Weight"
            type="number"
            outlined
            dense
            lazy-validation
            :rules="[rules.fieldRequired, rules.fieldMinimum]"
          />
        </v-col>
        <v-col sm="12" md="3">
          <v-text-field
            v-model="form.height"
            label="Height"
            type="number"
            outlined
            dense
            lazy-validation
            :rules="[rules.fieldRequired, rules.fieldMinimum]"
          />
        </v-col>
        <v-col sm="12" md="3">
          <v-text-field
            v-model="form.temperature"
            label="Temperature"
            type="number"
            outlined
            dense
            lazy-validation
            :rules="[rules.fieldRequired, rules.fieldMinimum]"
          />
        </v-col>
        <v-col sm="12" md="3">
          <v-text-field
            v-model="form.blood_pressure"
            label="Blood Pressure"
            outlined
            dense
            lazy-validation
            :rules="[rules.fieldRequired, rules.fieldMinimum]"
          />
        </v-col>
      </v-row>

      <v-row align="center" justify="center" dense>
        <v-col sm="12">
          <v-textarea
            v-model="form.findings"
            label="Findings"
            outlined
            dense
            :rules="[rules.fieldRequired, rules.fieldMinimum]"
          />
        </v-col>
      </v-row>

      <v-row align="center" justify="center" dense>
        <v-col sm="12">
          <v-textarea
            v-model="form.prescription"
            label="Prescription"
            outlined
            dense
            :rules="[rules.fieldRequired, rules.fieldMinimum]"
          />
        </v-col>
      </v-row>

      <v-row align="center" justify="center" dense>
        <v-col sm="12">
          <v-textarea
            v-model="form.recommendation"
            label="Recommendation"
            outlined
            dense
            :rules="[rules.fieldRequired, rules.fieldMinimum]"
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
import { mapGetters } from "vuex";

export default {
  name: "ConsultationCreateForm",
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
      findings: "",
      prescription: "",
      recommendation: "",
      weight: null,
      height: null,
      temperature: null,
      blood_pressure: null,
    },
    sex: [
      { value: "F", desc: "Female" },
      { value: "M", desc: "Male" },
    ],
  }),

  methods: {
    async submitConsultation() {
      await this.$store.dispatch("consultation/createConsultation", {
        form: this.form,
        patientId: this.patient.attributes.patient_id,
      });
    },

    clearFields() {
      this.$refs.consultationCreateForm.reset();
    },
  },

  computed: {
    ...mapGetters({
      patient: "consultation/GET_PATIENT_DATA",
    }),
  },
};
</script>
