<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :vuestaData="vuestaData"/>
  <button class="morebtn" @click="more">더보기</button>


  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- tap 맨드는거 -->
<!--  <div v-if="step == 0">내용0</div>-->
<!--  <div v-if="step == 1">내용1</div>-->
<!--  <div v-if="step == 2">내용2</div>-->
<!--  <button @click=" step= 0 ">버튼0</button>-->
<!--  <button @click=" step= 1 ">버튼1</button>-->
<!--  <button @click=" step= 2 ">버튼2</button>-->

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
  },
  components: {
    Container :Container,

  }
}
</script>

<style>
@import './assets/style.css';

</style>
