<template>
  <div class="header">
    <ul class="header-button-left">
      <li  @click="step--" >Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if=" step == 1"  @click="step++">Next</li>
      <li v-if=" step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

<!-- tap btn  -->
<!--  <div class="tapmenus">-->
<!--    <button @click=" step = 0 ">Main</button>-->
<!--    <button @click=" step = 1 ">Filter</button>-->
<!--    <button @click=" step = 2 ">Write</button>-->
<!--  </div>-->

<!-- container -->
  <Container @write="write = $event " :vuestaData="vuestaData" :step="step" :imgfile="imgfile" />
  <button class="morebtn" @click="more">더보기</button>


  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" accept="image/" @change="upload" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- tap 맨드는거 -->
<!--  <div v-if="step == 0">내용0</div>-->
<!--  <div v-if="step == 1">내용1</div>-->
<!--  <div v-if="step == 2">내용2</div>-->
<!--  <button @click=" step = 0 ">Main</button>-->
<!--  <button @click=" step = 1 ">Filter</button>-->
<!--  <button @click=" step = 2 ">Write</button>-->

</template>//end

<script>
import Container from './components/Container'
import Vustadata from './assets/Vustadata'
import axios from 'axios'

export default {
  name: 'App',
  data (){
    return{
      vuestaData: Vustadata,
      moredata: 0,
      step: 0,
      imgfile: '',
      write: '',
    }
  },
  methods:{
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.moredata}.json`)
          .then( 결과 =>{
            console.log(결과.data);
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
         likes: 77,
         date: "July 7",
         liked: true,
         content: this.write,
         filter: "perpetua"
       }
       this.vuestaData.unshift(mywrite);
       this.step = 0;
    },
  },
  components: {
    Container :Container,

  }
}
</script>

<style>
@import './assets/style.css';

</style>
