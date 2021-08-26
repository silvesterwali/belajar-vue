<template>
  <div>
    {{ word }}
  </div>
</template>

<script>
import { CurrencyToWords } from "currency-to-words";
export default {
  computed: {
    word() {
      const words = CurrencyToWords(0.01,'koma' ,'rupiah');
      return words;
    },
  },
};
</script>

<style lang="scss" scoped></style>
