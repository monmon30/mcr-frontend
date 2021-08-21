<template>
  <FormLayout form-title="User Management">
    <UserDataTable />

    <DialogLayout getter-val="GET_DIALOG_CREATE" setter-val="SET_DIALOG_CREATE">
      <UserCreateForm />
    </DialogLayout>

    <DialogLayout getter-val="GET_DIALOG_EDIT" setter-val="SET_DIALOG_EDIT">
      <UserEditForm />
    </DialogLayout>

    <DialogLayout getter-val="GET_DIALOG_DELETE" setter-val="SET_DIALOG_DELETE">
      <UserDeleteForm />
    </DialogLayout>
  </FormLayout>
</template>

<script>
import UserDataTable from "@/components/UserDataTable";
import FormLayout from "@/components/layout/FormLayout";
import DialogLayout from "@/components/layout/DialogLayout";
import UserCreateForm from "@/components/form/UserCreateForm";
import UserEditForm from "@/components/form/UserEditForm";
import UserDeleteForm from "@/components/form/UserDeleteForm";

export default {
  name: "User",
  components: {
    UserDataTable,
    FormLayout,
    DialogLayout,
    UserCreateForm,
    UserEditForm,
    UserDeleteForm,
  },
  async mounted() {
    await this.$store.dispatch("user/fetchUsers");
  },

  destroyed() {
    this.$store.commit("user/SET_USERS", []);
  },
};
</script>
