<template>
  <el-container class="dish">
    <el-header>
      <el-row>
        <div style="float: left">
          <el-button>Soup</el-button>
        </div>
        <!--        <div style="float: center">-->
        <!--          <el-button>Test</el-button>-->
        <!--        </div>-->
        <div style="float: right">
          <el-button>Порции</el-button>
        </div>
      </el-row>
    </el-header>
    <el-main class="body">
      <div class="info">
        <el-card style="flex-basis: 200px; flex-grow: 1;" shadow="hover">
          <div v-for="o in 4" :key="o" class="text item">
            {{'List item ' + o }}
          </div>
        </el-card>

        <el-container class="dish-video-player">
          <div v-for="o in 4" :key="o" class="text item">
            {{'List item ' + o }}
          </div>
        </el-container>

        <el-card style="flex-basis: 200px; flex-grow: 1;" shadow="hover">
          <div v-for="(o, i) in dishСompositions" :key="i" class="text item">
            {{o.name }}
          </div>
        </el-card>
      </div>
      <el-card shadow="hover">
        <div>
          <el-steps direction="vertical" :active="1">
            <el-step style="height: 100px" v-for="(item, i) in steps" :key="i" :title="item.name"></el-step>
          </el-steps>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
    export default {
        name: 'my-dish',
        data() {
            return {
                dishСompositions: [
                    {
                        id: 1,
                        name: 'спагетти'
                    },
                    {
                        id: 2,
                        name: '300 г фарша'
                    },
                    {
                        id: 3,
                        name: '2 луковицы'
                    },
                    {
                        id: 4,
                        name: '1 морковь'
                    },
                    {
                        id: 5,
                        name: '2 свежих помидора'
                    },
                    {
                        id: 6,
                        name: '50 г томатной пасты'
                    },
                    {
                        id: 7,
                        name: 'щепотка тертого мускатного ореха'
                    },
                    {
                        id: 8,
                        name: 'зубчик чеснока'
                    },
                    {
                        id: 9,
                        name: 'соль, перец по вкусу'
                    },
                    {
                        id: 10,
                        name: 'оливковое масло'
                    },
                ],
                steps: [
                    {
                        id: 1,
                        name: 'Step One',
                        date: ' 20:46'
                    },
                    {
                        id: 2,
                        name: 'Step Two',
                        date: '20:55'
                    },
                    {
                        id: 3,
                        name: 'Step Three',
                        date: '21:05'
                    },
                    {
                        id: 4,
                        name: 'Step Three',
                        date: '21:05'
                    },
                    {
                        id: 5,
                        name: 'Step Three',
                        date: '21:05'
                    },
                    {
                        id: 6,
                        name: 'Step Three',
                        date: '21:05'
                    },
                    {
                        id: 7,
                        name: 'Step Three',
                        date: '21:05'
                    },
                    {
                        id: 8,
                        name: 'Step Three',
                        date: '21:05'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../mixins/styleMixin";

  .dish {
    flex-basis: 600px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    /*min-height: 300px;*/
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .header {
    margin: 5px;
    border: solid 1px blue;
  }

  .dish-body {
    margin: 5px;
    border: solid 1px black;
  }

  .dish-substance-composition {

  }

  .dish-video-player {
    flex-basis: 300px;
    flex-grow: 1;
    border: solid 1px red;
  }

  .dish-composition {

  }

  .dish-steps {

  }

  .body > * {
    margin: 5px;
  }

  .info {
    display: flex;
    flex-wrap: wrap;
    > * {
      margin: 5px;
    }
  }

  .info-row {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .info-column {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
</style>