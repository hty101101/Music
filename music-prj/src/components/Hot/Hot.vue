<template>
    <div>
         <div class="HotMusic">
            <div class="HotMusic_header">
                <img src="../../assets/Hotimg.png" alt="">
            </div>
            <div class="HotMusic_body" >
                <ul ref="color">
                    <a href="" v-for="(value,index) in HotData.slice(0, 20)" v-bind:key="index" >
                        <div class="HotMusic_body_head">
                            <div class="HotMusic_body_head_pm">
                                <span id="pmcolor" >{{index+1|checkIndex}}</span>
                            </div>
                           <div class="text">{{value.name}} <span>{{value.alia[0]}}</span></div> 
                           <div class="text_bottom">{{value.ar[0].name}}--{{value.al.name}}</div> 
                        </div>
                        <div class="HotMusic_body_img">
                            <img src="../../assets/bfimg.png" alt="">
                        </div>
                    </a>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
          HotURL:"http://localhost:3000/top/list?idx=1",
          HotData:[]
      }
    },
    created () {
      this.getmessage() 
    },
    filters: {
      checkIndex(x){
          if(x<10)
          {
              return "0"+x
          }else{
              return x
          }
      }  
    },
    mounted () {
       
    },
    methods: {
        getmessage(){
            this.axios.get(this.HotURL).then((Data)=>{
                this.HotData=Data.data.playlist.tracks
                console.log(this.HotData)
            })
        },
        checkColor(){
            
        }
    },

    components: {},
}
</script>

<style scoped>
.HotMusic{
    width: 100%;
    height: auto;
    background: white;
}
.HotMusic_header{
    width: 100%;
    height: auto;
}
.HotMusic_header>img{
    width: 100%;
    height: auto;
}
.HotMusic>.HotMusic_body{
    width: 100%;
    height: 400px;
}
.HotMusic>.HotMusic_body>ul{
    width: 100%;
    height: auto ;
}
.HotMusic>.HotMusic_body>ul>a{
    display: block;
    width: 100%;
    height: 80px;
    background: white;
    text-decoration: none;
    padding:6px 0 ;
    padding-left: 10px;
    border-bottom:solid 1px rgba(0, 0, 0, 0.1) ;
    outline-color: none;
}
.HotMusic>.HotMusic_body>ul>a>.HotMusic_body_head{
    width: 80%;
    height: 98%;
    background: white;
    display: inline-block;
    padding-top: 10px;
    padding-left:10% ;
    position: relative;
    
}
.HotMusic>.HotMusic_body>ul>a>.HotMusic_body_img
{
    width: 15%;
    height: 100%;
    float:right;
    background: white;
    position: relative;
}
.HotMusic>.HotMusic_body>ul>a>.HotMusic_body_img>img{
    width: 50%;
    height: 50%;
    font-size:5px ;
    float:right;
    position: absolute;
    top: 25%;
    left: 40%;
}
.HotMusic>.HotMusic_body>ul>a>.HotMusic_body_head>.text{
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
.HotMusic>.HotMusic_body>ul>a>.HotMusic_body_head>.text>span{
     font-size:18px ;
    color: #888;
    text-align: center;
}
.HotMusic>.HotMusic_body>ul>a>.HotMusic_body_head>.text_bottom{
     width: 100%;
    height: 50%;
    font-size:14px ;
    color: #888;
    margin-top: 5px;
}
.HotMusic_body_head_pm{
    position: absolute;
    top: 25%;
    left: 0;
}
.HotMusic_body_head_pm>span{
    font-size:28px ;

}

.HotMusic_body>ul>a:nth-child(1),:nth-child(2),:nth-child(3),:nth-child(4)+#pmcolor{
    color: red ;
}
</style>