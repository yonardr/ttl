<template>
  <article>
    <div class="article__main">
      <div class="a_side">
        <aos-vue animation="fade-right" :duration="1000" placement="top-bottom">
        <h1 class="title">
          Электролаборатория по ремонту промышленного оборудования
        </h1>
        </aos-vue>
        <aos-vue animation="fade-right" :duration="1200" placement="top-bottom">
        <h3 class="description">
          Диагностика и ремонт промышленных регуляторов контактной сварки РКС, промышленное оборудование любой сложности, различных производителей и мощностей, с гарантией 12 месяцев.
        </h3>
        </aos-vue>
        <aos-vue animation="fade-right" :duration="1400" placement="top-bottom">
          <router-link :to="{name: 'main', hash: '#application'}">
        <BlueButton class="btn">Оставить заявку</BlueButton>
          </router-link>
        </aos-vue>
      </div>
      <div class="b_side">
        <div class="img__container">
          <img src="../../assets/home/Creative_process_SVG%201.svg" />
        </div>

      </div>
    </div>

    <div class="article__footer">
        <aos-vue animation="zoom-in" :duration="1000" placement="top-bottom" class="advantages">
        <div class="advantages__item">
          <div style="width: 50px; height: 40px">
              <img src="../../assets/home/Group%2072.svg"/>
              <img src="../../assets/home/Subtract.svg" class="clock"/>
          </div>
          <div class="advantages__name">
            Быстрое выполнение заказа
          </div>
        </div>
        <div class="advantages__item">
          <div>
            <img src="../../assets/home/Group%20292.svg"/>
          </div>
          <div class="advantages__name">
            Принимаем оборудование со всей России
          </div>
        </div>
        <div class="advantages__item">
          <div>
            <img src="../../assets/home/Group%20129.svg"/>
          </div>
          <div class="advantages__name">
            Выгодные условия по ремонту
          </div>
        </div>
        </aos-vue>

    </div>

  </article>
</template>

<script>
import BlueButton from "../UI/BlueButton.vue";
import AosVue from "aos-vue";
export default {
  components: {BlueButton, AosVue},
setup(){

}
}
</script>

<style lang="scss" scoped>
article{
  padding: 0 80px;
  max-width: 1280px;
}
.article__main{
  display: flex;
  align-items: center;

}
.article__footer{
  display: flex;
  flex-direction: row-reverse;
}
.a_side{
  width: 100%;
  z-index: 2;
  .title{
    font-family: GothamBold,serif;
    color: #262626;
    line-height: 55px;
    width: 733px;
    font-size: 48px;
    margin-bottom: 16px;
  }
  .description{
    width: 547px;
    margin-bottom: 32px;
    font-size: 14px;
    font-weight: 500;
    color: #303030;
  }
  .btn{
    width: 268px;
  }
}
.b_side{
  width: 100%;
  z-index: 0;
  .img__container{
    display: flex;
    justify-content: center;
    position: relative;
    top: 80px;
    z-index: -1;
    margin-right: 80px;
  }
}

.advantages{
  position: relative;
  width: 712px;
  height: 164px;
  border-radius: 10px;
  background-color: #F4F7FA;
  display: flex;
  padding: 5px 40px;
  transition: 0.7s !important;
  box-shadow: 0 13px 40px 10px #BBA6FF78;
  //box-shadow: 0 4px 100px 100px #D0DAE357;
  .advantages__item{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin: 0 21px;
    height: 100%;
    .advantages__name{
      font-family: GothamMedium,serif;
      line-height: 26px;
      color: #303030;
      margin-top: 5px;
    }
  }
  &:hover{
    transition: 0.7s;
    padding: 15px 40px;
  }
}

@media (max-width: 1024px) {
article{
padding-top: 200px;
}
  .article__main{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .a_side{
    height: 100%;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .b_side{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 100px;
    .img__container{
      margin-right: 0;
      img{
        width: 100%;
      }
    }
    img{
      opacity: 0.4;
    }
  }

  .article__footer{
    margin-top: 20px;
    flex-direction: row;
    justify-content: center;
  }
  .advantages{
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-shadow: 0 4px 100px 10px #D0DAE357;
    .advantages__item{
      text-align: center;
      margin: 10px;
      align-items: center;
    }
  }
}
.clock{
  position: relative; left: 27px; bottom: 47px;
}
@media (max-width: 590px) {
  .a_side{
    width: 300px;
    .title{
      width: 100%;
      font-size: 30px;
      line-height: 30px;
    }
    .description{
      width: 100%;
    }

  }
  .advantages__item{
      display: flex;
      align-items: center;
    .clock{
      left: 17px; bottom: 47px;
    }
   }

}

@media (max-width: 350px) {
  .a_side{
    width: 280px;
    .title{
      width: 100%;
      font-size: 28px;
      line-height: 30px;
    }

  }

}
</style>