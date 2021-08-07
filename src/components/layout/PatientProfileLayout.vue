<template>
  <FormLayout :form-title="`${patient.data.attributes.firstname} PROFILE`">
    <v-text-field
      readonly
      dense
      label="Fullname"
      :value="patient.data.attributes.fullname"
      outlined
    />

    <v-row align="center" justify="center" dense>
      <v-col cols="12" md="6">
        <v-text-field
          readonly
          dense
          label="Birthday"
          :value="patient.data.attributes.birthday"
          outlined
        />
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          readonly
          dense
          label="Sex"
          :value="patient.data.attributes.sex"
          outlined
        />
      </v-col>
    </v-row>

    <v-row align="center" justify="center" dense>
      <v-col cols="12" md="4">
        <v-text-field
          readonly
          dense
          label="Email"
          :value="patient.data.attributes.email"
          outlined
        />
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          readonly
          dense
          label="Contact Number"
          :value="patient.data.attributes.contact_number"
          outlined
        />
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          readonly
          dense
          label="Landline"
          :value="patient.data.attributes.landline"
          outlined
        />
      </v-col>
    </v-row>
    <v-textarea
      readonly
      dense
      label="Address"
      :value="patient.data.attributes.address"
      outlined
    />
  </FormLayout>
</template>

<script>
import FormLayout from "@/components/layout/FormLayout.vue";

export default {
  name: "PatientFormLayout",
  components: {
    FormLayout,
  },
  props: {
    patient: {
      type: Object,
      required: true,
    },
  },
};
</script>
