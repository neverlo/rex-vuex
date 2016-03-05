<style lang="stylus">
    .citypanel
        width auto
        height auto
        position absolute
        top 0
        left 0

    .h-button
        width auto
        height 30px
        label
            color #fff
            font-size 16px
            height 30px
            line-height 30px

    .cityList
        width 250px
        height 175px
        border 1px solid #000
        background-color red
        display none
        ul
            li
                list-style-type none
                float left
                padding 5px 5px
                a
                    text-decoration none
                    cursor pointer
                    &:hover
                        color yellow
</style>

<template>
    <div class="citypanel">
        <div class="h-button">
            <label @mouseover="showList" @mouseout="hideList">{{cityName}}</label>
        </div>
        <div class="cityList" @mouseover="showList" @mouseout="hideList">
            <ul>
                <li v-for="city in cityList" @click="modifyCity(city.cityName,city.cityCode)"><a>{{city.cityName}}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import * as actions from '../vuex/modules/citypanel'

    export default {
        data () {
          return {
              cityList: [
                  {cityCode: '1', cityName: '广州市'},
                  {cityCode: '2', cityName: '深圳市'},
                  {cityCode: '3', cityName: '东莞市'},
                  {cityCode: '4', cityName: '潮州市'},
                  {cityCode: '5', cityName: '阳江市'},
                  {cityCode: '6', cityName: '惠州市'},
                  {cityCode: '7', cityName: '佛山市'},
                  {cityCode: '8', cityName: '珠海市'},
                  {cityCode: '9', cityName: '中山市'},
                  {cityCode: '10', cityName: '韶关市'},
                  {cityCode: '11', cityName: '云浮市'},
                  {cityCode: '12', cityName: '湛江市'},
                  {cityCode: '13', cityName: '清远市'}
              ]
          }
        },
        methods: {
          showList: function(){
              if(this.list){
                  clearTimeout(this.list)
              }
              this.$el.lastElementChild.style.display = 'block'
          },
          hideList: function(){
              var eleObj = this.$el.lastElementChild
              this.list = window.setTimeout(function(){
                  eleObj.style.display = 'none'
              }, 150)
          }
        },
        vuex: {
            state: {
                cityName: state => state.cityName
            },
            actions: actions
        }
    }
</script>