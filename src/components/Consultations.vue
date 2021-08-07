<template>
  <div>
    <Consultation
      v-for="(consultation, index) in consultations"
      :key="index"
      :consultation="consultation"
    />
  </div>
</template>

<script>
import Consultation from "@/components/Consultation";
export default {
  name: "Consultations",
  components: {
    Consultation,
  },

  props: {
    consultations: {
      type: Array,
      required: true,
    },
  },
};
</script>
