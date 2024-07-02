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
          <swiper-slide v-for="item in data.imgs"
          >
            <img :src="imgUrl(item.path)" />
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
          <swiper-slide v-for="item in data.imgs"
          >
            <img :src="imgUrl(item.path)" />
          </swiper-slide>

        </swiper>

        </div>
      </div>
      <div class="b-side">
        <div class="title">
          {{data.title}}
        </div>
        <div class="des">
          <pre>
            {{data.des}}
          </pre>
        </div>
      </div>
    </main>
    <div class="dls">
      <nav>
        <div @click="changeView" :style="styleView(docs)">Проекты</div>
        <div @click="changeView" :style="styleView(project)">Документы</div>
      </nav>
    </div>
    <div class="docs" v-if="docs" v-for="(item, index) in data.docs">
<a class="item" :href="imgUrl(item.path)">
  <img src="../assets/doc-document-svgrepo-com%20(1).svg"/>
  Документ № {{++index}}
</a>
    </div>
    <div class="project" v-if="project">
      <div v-for="item in arrayProjects">
        <div class="title">
          {{item.title}}
        </div>
        <div class="des">
          {{item.des}}
        </div>
        <div class="img" v-for="i in item.imgs">
          <img :src="imgUrl(i.path)" />
        </div>
      </div>
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
import {ref, watch} from "vue";
import {useFetchProject} from "../components/hooks/useFetchProject.js";

export default {
  components: {HeaderNavBar, NavigateSelection, Swiper, SwiperSlide,},
  setup() {
    const {data} = useFetchOne({id: useRoute().params.id})
    const imgUrl = (path) => new URL(`${import.meta.env.VITE_APP_API_URL}${path}`, import.meta.url).href

    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    const docs = ref(false)
    const project = ref(true)

    const arrayProjects = ref([])

    watch(data, async()=>{
      await data.value.projects.map(async el =>{
         arrayProjects.value.push(await useFetchProject({id: el.id}))
      })
    })


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
      data, imgUrl, thumbsSwiper,
      setThumbsSwiper, docs, project, changeView, styleView, arrayProjects,
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
.project{
  padding: 0 50px;
  .title{
    margin-top: 20px;
    font-size: 24px;
    font-weight: bold;
  }
  .des{
    margin-bottom: 20px;
  }
  img{
    width: 50%;
  }
}
.docs{
  padding: 10px 50px;

  .item{
    font-size: 24px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    color: #273895;
    img{
      width: 40px;
      margin-right: 8px;
    }
  }
}
pre{
  font-family: Gotham, serif;
  word-wrap: normal;
  white-space: pre-wrap;
  display: block;
  height: auto;
  line-height: 1.4;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
@media (max-width: 1024px) {
  .__container{
    width: 100%;
  }
  main{
    padding: 150px 10px;
    padding-bottom: 50px;
  }
}
@media (max-width: 877px){
  main{
    flex-direction: column;
  }
  .container__swiper{
    width: 100% !important;
  }
}
@media (max-width: 460px){
  .dls{
    div{
      padding: 0 20px !important;
    }
  }
}
</style>