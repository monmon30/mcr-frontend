<template>
  <FormLayout form-title="Patient Appointments">
    <v-data-table
      v-if="appointments !== null"
      dense
      :headers="headers"
      :items="appointments"
      :loading="loading"
    >
      <template v-slot:item.actions="{ item }">
        <v-row align="center" justify="center">
          <v-col sm="12" md="3">
            <v-btn color="green" dark small @click="setConsultData(item)">
              CONSULT
            </v-btn>
          </v-col>
          <!-- <v-col sm="12" md="3">
            <v-btn color="red" dark small> DELETE </v-btn>
          </v-col> -->
          <v-spacer></v-spacer>
        </v-row>
      </template>
    </v-data-table>
    <DialogLayout getter-val="GET_DIALOG_CREATE" setter-val="SET_DIALOG_CREATE">
      <ConsultationCreateForm />
    </DialogLayout>
  </FormLayout>
</template>

<script>
import FormLayout from "@/components/layout/FormLayout.vue";
import DialogLayout from "@/components/layout/DialogLayout.vue";
import ConsultationCreateForm from "@/components/form/ConsultationCreateForm.vue";

import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  components: {
    FormLayout,
    DialogLayout,
    ConsultationCreateForm,
  },

  methods: {
    setConsultData(item) {
      const { commit, dispatch } = this.$store;
      commit("consultation/SET_PATIENT_DATA", item.data);
      dispatch("global/openDialog", "SET_DIALOG_CREATE");
    },
  },

  computed: {
    ...mapGetters({
      loading: "appointment/GET_LOADING",
      appointments: "appointment/GET_APPOINTMENTS",
    }),

    headers() {
      return [
        {
          text: "Patient Name",
          align: "start",
          sortable: false,
          value: "data.attributes.patient_name",
        },
        {
          text: "Schedule",
          value: "data.attributes.schedule",
          sortable: false,
        },
        {
          text: "Reason",
          value: "data.attributes.reason",
          sortable: false,
        },

        {
          text: "Action",
          value: "actions",
        },
      ];
    },
  },
};
</script>
