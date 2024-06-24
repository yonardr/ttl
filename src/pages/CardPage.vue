<template>
  <div class="__container">
    <div class="radial"></div>
    <HeaderNavBar id="header"/>
    <NavigateSelection/>
    <main>
      <div class="a-side">
        <div class="container__swiper">
        <swiper
            :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
            :spaceBetween="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="mySwiper2"
        >
          <swiper-slide
          >
            <img src="../assets/technical/a2fdf39f439e3ea4db8c3d6bf9feda69.jpg" height="527" width="700"/>
          </swiper-slide>
          <swiper-slide
          >
            <img src="../assets/technical/a2fdf39f439e3ea4db8c3d6bf9feda69.jpg" height="527" width="700"/>
          </swiper-slide><swiper-slide
        >
          <img src="../assets/technical/a2fdf39f439e3ea4db8c3d6bf9feda69.jpg" height="527" width="700"/>
        </swiper-slide>
        </swiper>
        <swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="10"
            :slidesPerView="4"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper"
        >
          <swiper-slide
          >
            <img src="../assets/technical/a2fdf39f439e3ea4db8c3d6bf9feda69.jpg" height="527" width="700"/>
          </swiper-slide>
          <swiper-slide
          >
            <img src="../assets/technical/a2fdf39f439e3ea4db8c3d6bf9feda69.jpg" height="527" width="700"/>
          </swiper-slide>
          <swiper-slide
          >
            <img src="../assets/technical/a2fdf39f439e3ea4db8c3d6bf9feda69.jpg" height="527" width="700"/>
          </swiper-slide>
        </swiper>

        </div>
      </div>
      <div class="b-side">
        <div class="title">
          {{data.title}}
        </div>
        <div class="des">
          {{data.des}}
        </div>
      </div>
    </main>
    <div class="dls">
      <nav>
        <div @click="changeView" :style="styleView(docs)">Проекты</div>
        <div @click="changeView" :style="styleView(project)">Документы</div>
      </nav>
    </div>
    <div class="docs" v-if="docs">
      {{data.docs}}
    </div>
    <div class="project" v-if="project">
      {{data.projects}}
    </div>
  </div>
</template>

<script>
import NavigateSelection from "../components/MainPage/NavigateSelection.vue";
import HeaderNavBar from "../components/MainPage/HeaderNavBar.vue";
import {useRoute} from "vue-router";
import {useFetchOne} from "../components/hooks/useFetchOne.js";

import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import {ref} from "vue";

export default {
  components: {HeaderNavBar, NavigateSelection, Swiper, SwiperSlide,},
  setup() {
    const {data} = useFetchOne({id: useRoute().params.id})
    const imageUrl = (value) => new URL(`${process.env.VUE_APP_API_URL}/services/${value}`, import.meta.url).href

    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    const docs = ref(false)
    const project = ref(true)

    const styleView = (vl) => {
      if(!vl){
        return {'background-color': '#FFFFFF',
          'color': '#273895'}
      }
    }

    function changeView (){
      docs.value = !docs.value
      project.value =!project.value
    }

    return {
      data, imageUrl, thumbsSwiper,
      setThumbsSwiper, docs, project, changeView, styleView,
      modules: [FreeMode, Navigation, Thumbs],
    }
  }
}
</script>

<style lang="scss" scoped>
.__container{
  width: 1440px;
  margin: 0 auto;
}
main{
  padding: 80px;
  display: flex;
}
.a-side{
  .container__swiper{
    width: 550px;
  }
}
.b-side{
margin-left: 50px;
  .title{
    font-family: GothamBold, serif;
    font-size: 30px;
  }
  .des{
    margin-top: 20px;
    font-family: GothamMedium, serif;
    font-size: 20px;
  }
}
.dls{
  nav{
    display: flex;
    height: 75px;
    border: 5px solid #273895;
    background-color: #273895;
    color: #fff;
    border-radius: 20px;
    font-family: GothamMedium, serif;
    font-size: 18px;
    div{
      transition: 0.7s;
      margin-left: 25px;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 50px;
      border-radius: 20px;
      &:hover{
        transition: 0.7s;
        background-color: #FFFFFF;
        color: #273895;
      }
    }
  }
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>