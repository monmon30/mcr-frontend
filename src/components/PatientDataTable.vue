<template>
  <FormLayout form-title="List of Patients" form-icon="mdi-account-group">
    <v-data-table
      v-if="loading === false"
      :headers="headers"
      :items="patients"
      :items-per-page="patientResponse.data.meta.per_page"
      dense
      :loading="loading"
    >
      <template v-slot:item.actions="{ item }">
        <v-row align="center" justify="center" dense>
          <v-col sm="12" md="4">
            <v-btn color="green" dark small @click="setEditData(item)">
              EDIT
            </v-btn>
          </v-col>
          <v-col sm="12" md="4">
            <v-btn color="red" dark small @click="setDeleteData(item)">
              DELETE
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog.edit" max-width="1000">
      <FormLayout form-title="Edit Patient" form-icon="mdi-account-edit">
        <v-form
          @submit.prevent="updatePatient"
          v-model="valid"
          ref="patientUpdateForm"
        >
          <v-row align="center" justify="center" dense>
            <v-col sm="12" md="3">
              <v-text-field
                v-model="editForm.firstname"
                label="Firstname"
                outlined
                dense
                lazy-validation
                :rules="[rules.fieldRequired, rules.fieldMinimum]"
              />
            </v-col>
            <v-col sm="12" md="3">
              <v-text-field
                v-model="editForm.middlename"
                label="Middlename"
                outlined
                dense
                :rules="[rules.fieldRequired, rules.fieldMinimum]"
              />
            </v-col>
            <v-col sm="12" md="3">
              <v-text-field
                v-model="editForm.lastname"
                label="Lastname"
                outlined
                dense
                :rules="[rules.fieldRequired, rules.fieldMinimum]"
              />
            </v-col>
            <v-col sm="12" md="3">
              <v-text-field
                v-model="editForm.suffix"
                label="Suffix"
                outlined
                dense
              />
            </v-col>
          </v-row>

          <v-row align="center" justify="center" dense>
            <v-col sm="12" md="6">
              <v-text-field
                v-model="editForm.birthday"
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
                v-model="editForm.sex"
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
                v-model="editForm.address"
                outlined
                dense
                :rules="[rules.fieldRequired, rules.fieldMinimum]"
              />
            </v-col>
          </v-row>

          <v-row align="center" justify="center" dense>
            <v-col sm="12" md="4">
              <v-text-field
                v-model="editForm.contact_number"
                label="Contact Number"
                outlined
                dense
                :rules="[rules.fieldRequired]"
              />
            </v-col>

            <v-col sm="12" md="4">
              <v-text-field
                v-model="editForm.landline"
                label="Landline"
                outlined
                dense
              />
            </v-col>

            <v-col sm="12" md="4">
              <v-text-field
                v-model="editForm.email"
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
            <v-btn color="grey darken-3" @click="dialog.edit = false" dark>
              CANCEL
            </v-btn>
          </v-card-actions>
        </v-form>
      </FormLayout>
    </v-dialog>

    <DialogLayout getter-val="GET_DIALOG_DELETE" setter-val="SET_DIALOG_DELETE">
      <PatientDelete />
    </DialogLayout>
  </FormLayout>
</template>

<script>
import { mapGetters } from "vuex";
import {
  fieldRequired,
  fieldMinimum,
  emailFormatRequired,
} from "@/validations";
import FormLayout from "@/components/layout/FormLayout.vue";
import DialogLayout from "@/components/layout/DialogLayout.vue";
import PatientDelete from "@/components/PatientDelete.vue";

export default {
  name: "PatientDataTable",

  async mounted() {
    await this.$store.dispatch("patient/fetchPatients");
  },

  components: {
    FormLayout,
    DialogLayout,
    PatientDelete,
  },
  data: () => ({
    sex: [
      { value: "F", desc: "Female" },
      { value: "M", desc: "Male" },
    ],
    valid: true,
    rules: {
      fieldRequired,
      fieldMinimum,
      emailFormatRequired,
    },
    headers: [
      {
        text: "Name",
        align: "start",
        sortable: false,
        value: "data.attributes.fullname",
      },
      { text: "Email", value: "data.attributes.email", sortable: false },
      {
        text: "Contact Number",
        value: "data.attributes.contact_number",
        sortable: false,
      },
      { text: "Sex", value: "data.attributes.sex", sortable: false },
      { text: "Actions", value: "actions" },
    ],
    editId: null,
    editForm: {
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
    deleteForm: null,
    dialog: {
      edit: false,
      delete: false,
    },
  }),

  methods: {
    setEditData(item) {
      this.editId = item.data.patient_id;
      this.editForm.id = item.data.patient_id;
      this.editForm.firstname = item.data.attributes.firstname;
      this.editForm.middlename = item.data.attributes.middlename;
      this.editForm.lastname = item.data.attributes.lastname;
      this.editForm.suffix = item.data.attributes.suffix;
      this.editForm.birthday = item.data.attributes.birthday;
      this.editForm.sex = item.data.attributes.sex;
      this.editForm.address = item.data.attributes.address;
      this.editForm.contact_number = item.data.attributes.contact_number;
      this.editForm.landline = item.data.attributes.landline;
      this.editForm.email = item.data.attributes.email;
      this.dialog.edit = true;
    },

    setDeleteData(item) {
      const { commit, dispatch } = this.$store;
      commit("patient/SET_PATIENT", item);
      dispatch("global/openDialog", "SET_DIALOG_DELETE");
    },

    clearFields() {
      this.$refs.patientUpdateForm.reset();
    },

    async updatePatient() {
      await this.$store.dispatch("patient/updatePatient", {
        form: this.editForm,
        id: this.editId,
      });
    },
  },

  computed: {
    ...mapGetters({
      patients: "patient/GET_PATIENTS",
      patientResponse: "patient/GET_PATIENT_RESPONSE",
      loading: "patient/GET_LOADING",
    }),
  },
};
</script>
