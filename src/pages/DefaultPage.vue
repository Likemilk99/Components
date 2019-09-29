<template>
  <div class="page">
      Hi
  </div>
</template>

<script>
    export default {
        name: "my-dishes",
        props: {
            data: {
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
  .page {
    background: #B3C0D1;
  }

</style>