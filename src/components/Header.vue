<style lang="scss" scoped>
  .header {
    border: solid 1px red;

    &__body {
      border: solid 1px red;
      height: 100px;
    }

    &__user {
      display: flex;
      flex-flow: row;
      margin-left: auto;
      border: solid 1px red;
      height: 50px;
      width: 200px;

      &__content {
        background-color: blue;
        width: 100%;
        height: 100%;
      }

      &__border {
        width: 100%;
        height: 100%;
        background: yellow;
        border-radius: 50%
      }
    }
  }
</style>
<template>
  <div class="header">
    <div class="header__body">

    </div>
    <div class="header__user">

    </div>
  </div>
</template>

<script>
    export default {
        name: 'my-header',
        data() {
            return {}
        }
    }
</script>
