<template>
  <div class="header">
    <ul class="header-button-left">
      <li v-if="step == 1 || step == 2 "  @click="step--" >Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if=" step == 1"  @click="step++">Next</li>
      <li v-if=" step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

<!-- vuex store data -->
    <h4>안녕 {{ $store.state.name }}</h4>
    <h5>count: {{ $store.state.age }} </h5>
    <button @click="$store.commit('changename')"> show ID </button>
    <button @click="$store.commit('plusAge', 10 )"> Count Up </button>

<!-- tap btn  -->
  <!--  <div class="tapmenus">-->
  <!--    <button @click=" step = 0 ">Main</button>-->
  <!--    <button @click=" step = 1 ">Filter</button>-->
  <!--    <button @click=" step = 2 ">Write</button>-->
  <!--  </div>-->

<!-- container -->
  <Container :class="chosefilter" @write="write = $event " :vuestaData="vuestaData" :step="step" :imgfile="imgfile" />
  <button class="morebtn" @click="more">더보기</button>


<!-- store actions -->
  <p>{{ 내나이 }}{{age}}{{likes}}</p>
<!--  <button class="morebtn" @click="$store.dispatch('getData')">더보기</button>-->

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" accept="image/" @change="upload" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

</template>//end

<script>
import Container from './components/Container'
import Vustadata from './assets/Vustadata'
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name: 'App',
  data (){
    return{
      vuestaData: Vustadata,
      moredata: 0,
      step: 0,
      imgfile: '',
      write: '',
      likesnumber :'',
      chosefilter :'',
      counter:0,

    }
  },
  computed:{ // 걔계산 결과 저장용 함수
    name(){
      return this.$store.state.name
    },
  },
  methods:{
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.moredata}.json`)
          .then( 결과 =>{
            this.vuestaData.push(결과.data);
            this.moredata++;
        })
    },
    upload(e){
      let 파일 = e.target.files;
       console.log(파일[0]);
      let url = URL.createObjectURL(파일[0]);
       console.log(url);
       this.imgfile = url;
      this.step = 1;
    },
    publish() {
       const mywrite = {
         name: "내가 쓴 게시물",
         userImage: "https://placeimg.com/100/100/arch",
         postImage: this.imgfile,
         likes: this.likesnumber,
         date: "July 7",
         liked: true,
         content: this.write,
         filter: this.chosefilter,
       }
       this.vuestaData.unshift(mywrite);
       // this.likesnumber = Math.random()*100;
       this.likesnumber = Math.floor(Math.random() * 100) + 1 ;
       this.step = 0;

    },
  },
  mounted() {
    this.emitter.on('clickfire', (a) => {
      this.chosefilter = a
    })
  },
  components: {
    Container :Container,

  }
}
</script>

<style>
@import './assets/style.css';

</style>
