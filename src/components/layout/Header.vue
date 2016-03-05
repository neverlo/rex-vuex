<style lang="stylus">
    .header
        width 100%
        height 30px
        background-color #000101
        text-align center
        label
            color #ffffff
            height 30px
            line-height 30px
            font-size 16px
</style>

<template>
    <div class="header">
        <label>{{cityName}}突发事件预警决策辅助系统</label>
    </div>
</template>

<script>
    import store from '../../vuex/modules/citypanel'

    export default {
      computed: {
        cityName () {
          return store.state.cityName
        }
      }
    }
</script>