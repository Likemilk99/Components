<template>
  <el-container style="height: -webkit-fill-available;">
    <el-header style="border-bottom: solid 1px #e6e6e6;">
      <el-row style="text-align: right; ">
        <el-button icon="el-icon-s-home"  @click="() => $router.push('/')">Домой</el-button>
      </el-row>
    </el-header>

    <el-container>
      <my-menu></my-menu>
      <el-main style="margin:0; padding: 0">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
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
