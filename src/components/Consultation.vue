<template>
  <FormLayout
    class="mb-5"
    form-elevation="15"
    :form-title="consultation.data.attributes.consultation_date"
  >
    <v-text-field
      outlined
      readonly
      :value="consultation.data.attributes.added_by"
      label="Examined by:"
      dense
    />
    <v-row align="center" justify="center" dense>
      <v-col sm="12" md="3">
        <v-text-field
          outlined
          readonly
          :value="consultation.data.attributes.temperature"
          label="Temperature"
          dense
        />
      </v-col>

      <v-col sm="12" md="3">
        <v-text-field
          outlined
          readonly
          :value="consultation.data.attributes.blood_pressure"
          label="Blood Pressure"
          dense
        />
      </v-col>
      <v-col sm="12" md="3">
        <v-text-field
          outlined
          readonly
          :value="consultation.data.attributes.weight"
          label="Weight"
          dense
        />
      </v-col>
      <v-col sm="12" md="3">
        <v-text-field
          outlined
          readonly
          :value="consultation.data.attributes.height"
          label="Height"
          dense
        />
      </v-col>
    </v-row>

    <v-row align="center" justify="center" dense>
      <v-col sm="12" md="6">
        <v-textarea
          outlined
          readonly
          dense
          :value="consultation.data.attributes.findings"
          label="Findings"
        />
      </v-col>
      <v-col sm="12" md="6">
        <v-textarea
          outlined
          readonly
          dense
          :value="consultation.data.attributes.prescription"
          label="Prescription"
        />
      </v-col>
      <v-col sm="12" md="12">
        <v-textarea
          outlined
          readonly
          dense
          :value="consultation.data.attributes.recommendation"
          label="Recommendation"
        />
      </v-col>
    </v-row>
  </FormLayout>
</template>

<script>
import FormLayout from "@/components/layout/FormLayout.vue";
export default {
  name: "Consultation",
  props: {
    consultation: {
      type: Object,
      required: true,
    },
  },

  components: {
    FormLayout,
  },
};
</script>
