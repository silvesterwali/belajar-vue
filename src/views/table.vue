<template>
  <div class="container">
    <h4>Belajar Table</h4>
    <div class="form-group">
      <input class="form-control" placeholder="cari" v-model="search" >
    </div>
    <BTable :table-option="tableOption" :filterItems="['name','id']" :items="items" :search="search" >
        <template #actions="{item}">
            <button class="btn btn-primary btn-sm">{{item.id}}</button>
        </template>
        <template #completed="{item}">
            <span class="badge rounded-pill" :class="{'bg-success':item.completed,'bg-danger':!item.completed}">
                {{item.completed?'Yes':'NO'}}</span>
        </template>
    </BTable>
  </div>
</template>

<script>
export default {
  components: {
    BTable: () => import("../components/table/index.vue"),
  },
  beforeMount(){
      this.getTodos()
  },
  data() {
    return {
      search:null,
      tableOption: [
        {
          key: "title",
          label: "Title",
        },
        {
          key: "completed",
          label: "Completed",
        },
        {
            key:"actions",
            label:"Actions"
        }
      ],
      items: [],
    };
  },
  methods: {
    getTodos() {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => (this.items = json));
    },
  },
};
</script>

<style lang="scss" scoped></style>
