<template>
    <div>
        <Banner>
            <slot></slot>
        </Banner>
        <div class="recSonglist">
            <div class="recSonglist_header">
                <p>推荐歌单</p>
            </div>
            <div class="recSonglist_body">
                <ul>
                    <a href="" v-for="(value) in recsongList" v-bind:key="value.id">
                        <li>
                            <span>{{value.playCount|chedkplayCount}}</span>
                            <img :src="value.picUrl" alt="">
                        </li>
                        <p class="reduce">{{value.name}}</p>
                    </a>
                </ul>
            </div>

        </div>
        <div class="lastestMusic">
            <div class="lastestMusic_header">
                <p>最新音乐</p>
            </div>
            <div class="lastestMusic_body">
                <ul>
                    <a href="" v-for="(value) in latestMusic" v-bind:key="value.id">
                        <div class="lastestMusic_body_head">
                           <div class="text">{{value.name}} <span>{{value.song.alias[0]}}</span></div> 
                           <div class="text_bottom">{{value.song.artists[0].name}}-{{value.song.name}}</div> 
                        </div>
                        <div class="lastestMusic_body_img">
                            <img src="../../assets/bfimg.png" alt="">
                        </div>
                    </a>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
import Banner from '../Banner/Banner'
export default {
    data () {
      return {
          bannerURL:"http://localhost:3000/banner?type=1",
          recSongListURL:"http://localhost:3000/personalized?limit=6",
          lastestMusicURL:"http://localhost:3000/personalized/newsong",
          banners:[],
          recsongList:[],
          latestMusic:[]
      }
    },
    filters: {
        chedkplayCount(x){
            let m=parseInt(x/10000)  //商
            let d=(x%10000)/10 //榆树
            return `${m}万`
        }
    },
    created () {

        this.axios.all([this.getBanner(),this.getSongList(),this.getLatestMusic()])
        .then(
            this.axios.spread((bannerData,SongListData,lastMusicData)=>{
            //console.log(bannerData,SongListData,lastMusicData)
            this.banners=bannerData.data.banners
            this.recsongList=SongListData.data.result
            this.latestMusic=lastMusicData.data.result
            //console.log(this.latestMusic)
        }))  
    },
    methods: {
        getBanner(){
            return this.axios.get(this.bannerURL)
        },
        getSongList(){
             return this.axios.get(this.recSongListURL)
        },
        getLatestMusic(){
             return this.axios.get(this.lastestMusicURL)
        }
    },

    components: {
        Banner
    },
}
</script>

<style scoped>
.recSonglist{
    width: 100%;
    height: auto;
    padding-top:10px;
}
.recSonglist>.recSonglist_header{
    width: 100%;
    height: 30px;
    margin-bottom:10px ;
}
.recSonglist>.recSonglist_header>p{
    display: inline-block;
    line-height: 30px;
     font-size:20px ;
}
.recSonglist>.recSonglist_header::before{
    content: "|";
    width: 1px;
    height: 12px;
    background: red;
    color: red;
    margin-right:10px ;
}
.recSonglist_body{
    width: 100%;
    height: auto;
    background: white;
}
.recSonglist_body>ul{
    width: 100%;
    height: 450px;
    display: flex;
    flex-wrap:wrap ;
    justify-content: space-between;
}
.recSonglist_body>ul>a{
    width: 32.9%;
    height: 150px;
    position: relative;
    color: black;
}
.recSonglist_body>ul>a>li{
    width: 100%;
    height: 100%;
}
.recSonglist_body>ul>a>li>img{
    width: 100%;
    height: 100%;
}
.recSonglist_body>ul>a>li>span{
    background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjIgMTYuNzc3YzAgMS4yMzMtMS4xMjEgMi4yMzMtMi41MDYgMi4yMzMtMS4zODQgMC0yLjUwNi0xLTIuNTA2LTIuMjMzdi0yLjU1M2MwLTEuMjM0IDEuMTIyLTIuMjMzIDIuNTA2LTIuMjMzLjE3NCAwIC4zNDMuMDE3LjUwNi4wNDZ2LTEuMzdoLS4wMzNjLjAxNy0uMjIuMDMzLS40NDEuMDMzLS42NjZhOCA4IDAgMCAwLTE2IDBjMCAuMjI1LjAxNi40NDYuMDM0LjY2Nkg0djEuMzdjLjE2My0uMDI5LjMzMy0uMDQ2LjUwNS0uMDQ2IDEuMzg0IDAgMi41MDYuOTk5IDIuNTA2IDIuMjMzdjIuNTUzYzAgMS4yMzMtMS4xMjIgMi4yMzMtMi41MDYgMi4yMzNTMiAxOC4wMTEgMiAxNi43Nzd2LTIuNTUzYzAtLjI1OC4wNTktLjUwMS4xNDgtLjczQS45ODIuOTgyIDAgMCAxIDIgMTMuMDAxdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHMxMCA0LjQ3NyAxMCAxMGMwIC4wOS0uMDA5LjE3OC0uMDE0LjI2Ni4wMDIuMDI0LjAxNC4wNDQuMDE0LjA2N3YyYS45ODguOTg4IDAgMCAxLS4zNi43NTNjLjIyNC4zMzQuMzYuNzIuMzYgMS4xMzh2Mi41NTIiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIgZD0iTTIwIDE2Ljc3N2MwIDEuMjMzLTEuMTIxIDIuMjMzLTIuNTA2IDIuMjMzLTEuMzg0IDAtMi41MDYtMS0yLjUwNi0yLjIzM3YtMi41NTNjMC0xLjIzNCAxLjEyMi0yLjIzMyAyLjUwNi0yLjIzMy4xNzQgMCAuMzQzLjAxNy41MDYuMDQ2di0xLjM3aC0uMDMzYy4wMTctLjIyLjAzMy0uNDQxLjAzMy0uNjY2YTggOCAwIDAgMC0xNiAwYzAgLjIyNS4wMTYuNDQ2LjAzNC42NjZIMnYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzUzAgMTguMDExIDAgMTYuNzc3di0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43M0EuOTgyLjk4MiAwIDAgMSAwIDEzLjAwMXYtMi42NjdjMC0uMDIzLjAxMi0uMDQzLjAxMy0uMDY3LS4wMDQtLjA4OC0uMDEzLS4xNzYtLjAxMy0uMjY2IDAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTBjMCAuMDktLjAwOS4xNzgtLjAxNC4yNjYuMDAyLjAyNC4wMTQuMDQ0LjAxNC4wNjd2MmEuOTg4Ljk4OCAwIDAgMS0uMzYuNzUzYy4yMjQuMzM0LjM2LjcyLjM2IDEuMTM4djIuNTUyIi8+PC9zdmc+) no-repeat;
    font-size:5px ;
    position: absolute;
    top: 2%;
    left: 70%;
    color: white;
    z-index: 3;
    padding-left:10% ;
}
.recSonglist_body>ul>a>.reduce{
    width: 100%;
    height: 30%;
    position: absolute;
    padding:2px 5px 0 4px;
    top: 105%;
    left:0;
    display: inline;
    font-size: 16px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
.lastestMusic{
    width: 100%;
    height: auto;
    background: white;
}
.lastestMusic_header{
    width: 100%;
    height: 50px;
}
.lastestMusic_header>p{
    display: inline-block;
     font-size:20px ;
     line-height: 50px;
}
.lastestMusic_header::before{
    content: "|";
    width: 1px;
    height: 12px;
    background: red;
    color: red;
    margin-right:10px ;
}
.lastestMusic>.lastestMusic_body{
    width: 100%;
    height: 400px;
}
.lastestMusic>.lastestMusic_body>ul{
    width: 100%;
    height: auto ;
}
.lastestMusic>.lastestMusic_body>ul>a{
    display: block;
    width: 100%;
    height: 80px;
    background: white;
    text-decoration: none;
    padding:6px 0 ;
    padding-left: 10px;
    border-bottom:solid 1px rgba(0, 0, 0, 0.1) ;
    
}
.lastestMusic>.lastestMusic_body>ul>a>.lastestMusic_body_head{
    width: 80%;
    height: 98%;
    background: white;
    display: inline-block;
    padding-top: 10px;
    
}
.lastestMusic>.lastestMusic_body>ul>a>.lastestMusic_body_img
{
    width: 15%;
    height: 100%;
    float:right;
    background: white;
    position: relative;
}
.lastestMusic>.lastestMusic_body>ul>a>.lastestMusic_body_img>img{
    width: 50%;
    height: 50%;
    font-size:5px ;
    float:right;
    position: absolute;
    top: 25%;
    left: 40%;
}
.lastestMusic>.lastestMusic_body>ul>a>.lastestMusic_body_head>.text{
    width: 100%;
    height: 50%;
    font-size:20px ;
    color: black;
     text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
}
.lastestMusic>.lastestMusic_body>ul>a>.lastestMusic_body_head>.text>span{
     font-size:18px ;
    color: #888;
    text-align: center;
}
.lastestMusic>.lastestMusic_body>ul>a>.lastestMusic_body_head>.text_bottom{
     width: 100%;
    height: 50%;
    font-size:14px ;
    color: #888;
    margin-top: 5px;
}

</style>