<template>
    <div>
        <ul>
            <router-link to="/Recmusic" tag="li">推荐音乐</router-link> 
            <router-link to="/Hot" tag="li">热歌榜</router-link> 
            <router-link to="/Search" tag="li">搜索</router-link> 
        </ul>
    </div>
</template>

<script>
export default {
    data () {
      return {}
    },

    methods: {},

    components: {},
}
</script>

<style scoped>
ul{
    width: 100%;
    height: 40px;
    border-bottom:1px solid #efefef ;
    display: flex;
}
ul>li{
    width: 33.33%;
    text-align: center;
    line-height: 40px;
    font-size:20px ;

}
.active{
    color: red;
    font-weight:bold ;
}
</style>