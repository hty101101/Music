<template>
    <div>
        <div class="Search_header">
            <li class="inputheard">
                <div class="igcon">
                    <img @click="tiaozhuan" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg==">
                </div>
                <input type="text" class="inputtext" placeholder="搜索歌曲、歌手、专辑">
            </li>
        </div>
        <div class="Serach_body">
            <p>热门搜索</p>
            <ul class="list">
                <li v-for="(value,index) in HotSearch" v-bind:key="index">
                    <a href="">{{value.first}}</a>
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
          HotSearchURL:"http://localhost:3000/search/hot",
          HotSearch:[]
      }
    },
    created () {
      this.getMessage()  
    },
    methods: {
        getMessage(){
            this.axios.get(this.HotSearchURL).then((HotSearchData)=>{
                this.HotSearch=HotSearchData.data.result.hots
                console.log(this.HotSearch)
            })
        },
        tiaozhuan(){
            //跳转路由到Recmusic模块
            this.$router.push({path:'/Recmusic'});
        }
    },

    components: {},
}
</script>

<style scoped>
.Search_header{
    width: 100%;
    height: auto;
    background: white;
    padding: 20px 0;
    text-align: center;
    border-bottom:solid 1px rgba(0,0,0,0.2) ;
}
.inputheard{
    width: 90%;
    height: 30px;
    border-radius:20px ;
    background: #ebecec;
    margin: auto;
    position: relative;
}
.inputheard>.inputtext{
    width: 85%;
    height: 100%;
    line-height: 50px;
    outline: none;
    text-decoration: none;
    background-color: none;
    border: 0px;
    background: rgba(0,0,0,0);
    padding-left:10px ;
}
.igcon{
    width: 5%;
    height: 5%;
    position: absolute;
    top: 20%;
    left: 2%;
}
.Serach_body{
    width: 100%;
    height: auto;
    background: white;
    padding-top:10px ;
    padding-left: 10px;
}
.Serach_body>p{
    font-size:16px ;
    color: gray;
}
.Serach_body>.list{
    width: 100%;
    height: auto;
}
.Serach_body>.list>li{
    width: auto;
    height: 30px;
    display: inline-block;
    border: solid 1px rgba(0,0,0,0.2);
    border-radius:20px ;
    padding: 0 8px;
    margin-top:10px ;
    margin-left: 8px;

}
.Serach_body>.list>li>a{
    text-decoration: none;
    color: black;
    line-height: 30px;
    font-size: 14px;
}
</style>