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

    <DialogLayout getter-val="GET_DIALOG_RESET" setter-val="SET_DIALOG_RESET">
      <UserResetPasswordForm />
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
import UserResetPasswordForm from "@/components/form/UserResetPasswordForm";

export default {
  name: "User",
  components: {
    UserDataTable,
    FormLayout,
    DialogLayout,
    UserCreateForm,
    UserEditForm,
    UserDeleteForm,
    UserResetPasswordForm,
  },
  async mounted() {
    await this.$store.dispatch("user/fetchUsers");
  },

  destroyed() {
    const { commit } = this.$store;
    commit("user/SET_USERS", []);
    commit("user/SET_DELETE_USER_DATA", null);
    commit("user/SET_USER", null);
  },
};
</script>
