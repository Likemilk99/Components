<template>
  <div class="root">
    <template v-for="(item, i) in values" >
      <my-dish :key="i"></my-dish>
    </template>
  </div>
</template>

<script>
    export default {
        name: "my-dishes",
        props: {
            values: {
                type: Array,
                default: () => ([])
            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
  .root {
    display: flex;
    flex-wrap: wrap;
  }
  div > .dish {
    margin: 10px;
  }

</style>