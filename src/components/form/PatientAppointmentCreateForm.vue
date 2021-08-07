<template>
  <FormLayout form-title="Create an Appointment">
    <v-form
      @submit.prevent="submitAppointment"
      v-model="valid"
      ref="patientCreateForm"
    >
      <v-row align="center" justify="center" dense>
        <v-col>
          <v-text-field
            v-model="form.schedule"
            label="Schedule"
            type="datetime-local"
            outlined
            dense
            lazy-validation
            :rules="[rules.fieldRequired]"
          />
        </v-col>
      </v-row>

      <v-row align="center" justify="center" dense>
        <v-col sm="12">
          <v-textarea
            label="Reason"
            v-model="form.reason"
            outlined
            dense
            :rules="[rules.fieldRequired, rules.fieldMinimum]"
          />
        </v-col>
      </v-row>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!valid"
          :loading="$store.getters['patient/GET_LOADING']"
          color="blue"
          type="submit"
          :dark="valid"
        >
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
import { fieldRequired, fieldMinimum } from "@/validations";

export default {
  name: "PatientAppointmentCreateForm",
  components: {
    FormLayout,
  },
  data: () => ({
    rules: {
      fieldRequired,
      fieldMinimum,
    },
    valid: true,
    form: {
      schedule: null,
      reason: null,
    },
  }),

  methods: {
    async submitAppointment() {
      await this.$store.dispatch("patient/createAppointment", this.form);
      this.clearFields();
    },

    clearFields() {
      this.$refs.patientCreateForm.reset();
    },
  },
};
</script>
