<template>
  <iframe
    :src="$store.getters['global/GET_PDF']"
    frameborder="5"
    height="1000"
    width="800"
  />
</template>

<script>
export default {
  name: "PdfLayout",
};
</script>
