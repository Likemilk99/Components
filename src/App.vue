<template>
  <div id="app">
    <my-dishes :data="dishes"></my-dishes>
  </div>
</template>

<script>

    export default {
        name: 'app',
        computed: {
            dishes: {
                get() {
                    return [...Array(100).keys()]
                },
                set() {

                }
            }
        }
    }
</script>

<style>

</style>
