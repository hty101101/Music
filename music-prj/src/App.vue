<template>
    <div>
      <Header></Header>
      <tab-bar></tab-bar>
      <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/Header/Header'
import TabBar from './components/TabBar/TabBar'
export default {
    data () {
      return {}
    },

    methods: {},

    components: {
      Header,
      TabBar
    },
}
</script>

<style scoped>
</style>