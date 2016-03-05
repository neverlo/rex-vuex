<style lang="stylus">
    body
        margin 0
</style>

<template>
    <div>
        <v-header></v-header>
        <v-citypanel></v-citypanel>
    </div>
</template>

<script>
import header from './components/layout/Header.vue'
import CityPanel from './components/CityPanel.vue'

export default {
  components: {
    'v-header': header,
    'v-citypanel': CityPanel
  }
}
</script>