<template>
  <el-aside>
    <el-menu :default-openeds="['1', '3']" style="height: 100%">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-reading"></i>Components</template>
        <el-menu-item-group>
          <el-menu-item index="1-1"
                        @click="() => $router.push({name: 'dishes', params: {values: [1,2,3,4,5,6,7,8,9,10]} })">Плитка
          </el-menu-item>
          <el-menu-item index="1-2" @click="() => $router.push('dish')">Элемент плитки</el-menu-item>
          <el-menu-item index="1-3" @click="() => $router.push('header')">Header</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
    export default {
        name: "my-menu",
        props: {
            data: {
                type: Array,
                default: () => ([])
            }
        },
        data() {
            return {}
        },
        methods() {

        }
    }
</script>

<style scoped>

</style>