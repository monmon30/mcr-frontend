<template>
  <FormLayout :form-title="`${patient.data.attributes.firstname} PROFILE`">
    <v-text-field
      readonly
      label="Fullname"
      :value="patient.data.attributes.fullname"
      outlined
    />
    <v-row>
      <v-col cols="12" md="3">
        <v-text-field
          readonly
          label="Birthday"
          :value="patient.data.attributes.birthday"
          outlined
        />
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          readonly
          label="Email"
          :value="patient.data.attributes.email"
          outlined
        />
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          readonly
          label="Contact Number"
          :value="patient.data.attributes.contact_number"
          outlined
        />
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          readonly
          label="Landline"
          :value="patient.data.attributes.landline"
          outlined
        />
      </v-col>
    </v-row>
    <v-textarea
      readonly
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
