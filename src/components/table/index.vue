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
      <slot name="tbody" :item="itemFilter">
        <tbody>
          <tr v-for="(item, i) in itemFilter" :key="i">
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
export default {
  props: {
    tableOption: {
      type: Array,
      default: () => null,
    },
    items: {
      type: Array,
      default: () => null,
    },
    search: {
      type: String,
      default: null,
    },
    filterItems: {
      type: Array,
      default: null,
    },
  },
  computed: {
    tableHeader() {
      if (this.tableOption === null) {
        return [];
      }
      return this.tableOption.map((el) => el.label ?? el.key);
    },
    tableItemsKey() {
      if (this.tableOption === null) {
        return [];
      }
      return this.tableOption.map((el) => el.key);
    },
    tableFilter() {
      if (this.search === '' || this.search === null) {
        return null;
      }
      const obj = {};

      if (this.filterItems !== null) {
        this.filterItems.map((el) => (obj[el] = this.search));
      } else {
        this.tableOption.map((el) => (obj[el.key] = this.search));
      }
      return obj;
    },

    itemFilter() {
      if (this.tableFilter === null || this.tableFilter===undefined) {
        return this.items;
      }

      const self = this;
      return this.items.filter(function(el) {
        if(!el['title'].toLowerCase().includes(self.search.toLowerCase())){
          return false
        }
        return true;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
