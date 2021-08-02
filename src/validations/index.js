export const fieldRequired = v => !!v || "Field is required!";

export const fieldMinimum = v =>
  (v && v.length >= 2) || "Field must be greater than 2 characters";

export const emailFormatRequired = v =>
  /.+@.+\..+/.test(v) || "E-mail must be valid";
