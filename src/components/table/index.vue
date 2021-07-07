<template>
  <div class="container">
    <table class="table table-striped ">
      <slot name="thead">
        <thead>
          <tr>
            <td v-for="(th, index) in tableHeader" :key="index">
              <slot :name="`header-${th}`" :item="th"> {{ th }}</slot>
            </td>
          </tr>
        </thead>
      </slot>
      <slot name="tbody" :item="items">
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <td v-for="(key, idx) in tableItemsKey" :key="idx">
              <slot :name="key" :item="item">{{ item[key] }}</slot>
            </td>
          </tr>
        </tbody>
      </slot>
    </table>
  </div>
</template>

<script>
import table from "../../views/table.vue";
export default {
  components: { table },
  props: {
    tableOption: {
      type: Array,
      default: () => null,
    },
    items: {
      type: Array,
      default: () => null,
    },
  },
  computed: {
    tableHeader() {
      if (this.tableOption === null) {
        return [];
      }
      return this.tableOption.map((el) => el.label);
    },
    tableItemsKey() {
      if (this.tableOption === null) {
        return [];
      }
      return this.tableOption.map((el) => el.key);
    },
  },
};
</script>

<style lang="scss" scoped></style>
