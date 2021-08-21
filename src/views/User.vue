<template>
  <FormLayout form-title="User Management">
    <UserDataTable />

    <DialogLayout getter-val="GET_DIALOG_CREATE" setter-val="SET_DIALOG_CREATE">
      <UserCreateForm />
    </DialogLayout>
  </FormLayout>
</template>

<script>
import UserDataTable from "@/components/UserDataTable";
import FormLayout from "@/components/layout/FormLayout";
import DialogLayout from "@/components/layout/DialogLayout";
import UserCreateForm from "@/components/form/UserCreateForm";

export default {
  name: "User",
  components: {
    UserDataTable,
    FormLayout,
    DialogLayout,
    UserCreateForm,
  },
  async mounted() {
    await this.$store.dispatch("user/fetchUsers");
  },
};
</script>
