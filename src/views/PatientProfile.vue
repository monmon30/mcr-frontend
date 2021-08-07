<template>
  <FormLayout :form-title="`${auth.data.attributes.firstname} PROFILE`">
    <v-text-field
      readonly
      label="Fullname"
      :value="auth.data.attributes.fullname"
      outlined
    />
    <v-row>
      <v-col sm="12" md="3">
        <v-text-field
          readonly
          label="Birthday"
          :value="auth.data.attributes.birthday"
          outlined
        />
      </v-col>
      <v-col sm="12" md="3">
        <v-text-field
          readonly
          label="Email"
          :value="auth.data.attributes.email"
          outlined
        />
      </v-col>
      <v-col sm="12" md="3">
        <v-text-field
          readonly
          label="Contact Number"
          :value="auth.data.attributes.contact_number"
          outlined
        />
      </v-col>
      <v-col sm="12" md="3">
        <v-text-field
          readonly
          label="Landline"
          :value="auth.data.attributes.landline"
          outlined
        />
      </v-col>
    </v-row>
    <v-textarea
      readonly
      label="Address"
      :value="auth.data.attributes.address"
      outlined
    />
  </FormLayout>
</template>

<script>
import { mapGetters } from "vuex";
import FormLayout from "@/components/layout/FormLayout.vue";

export default {
  name: "PatientProfile",
  components: {
    FormLayout,
  },
  computed: {
    ...mapGetters({
      auth: "patient/GET_AUTH_PATIENT",
    }),
  },
};
</script>
