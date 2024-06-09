<template>
  <article>
    <div class="article__main">
      <div class="a_side">
        <h1 class="title">
          Электролаборатория по ремонту промышленного оборудования
        </h1>
        <h3 class="description">
          Диагностика и ремонт промышленных регуляторов контактной сварки РКС, промышленное оборудование любой сложности, различных производителей и мощностей, с гарантией 12 месяцев.
        </h3>
        <BlueButton class="btn">Оставить заявку</BlueButton>
      </div>
      <div class="b_side">
        <div class="img__container">
          <img src="../assets/home/Creative_process_SVG%201.svg" />
        </div>

      </div>
    </div>

    <div class="article__footer">
      <div class="advantages">
        <div class="advantages__item">
          <div>
            <img src="../assets/home/Group%2072.svg"/>
            <img src="../assets/home/Subtract.svg" style="position: relative; top: -14px; left: -14px"/>
          </div>
          <div class="advantages__name">
            Быстрое выполнение заказа
          </div>
        </div>
        <div class="advantages__item">
          <img src="../assets/home/Group%20292.svg"/>
          <div class="advantages__name">
            Принимаем оборудование со всей России
          </div>
        </div>
        <div class="advantages__item">
          <img src="../assets/home/Group%20129.svg"/>
          <div class="advantages__name">
            Выгодные условия по ремонту
          </div>
        </div>
      </div>
    </div>

  </article>
</template>

<script>
import BlueButton from "./UI/BlueButton.vue";

export default {
  components: {BlueButton},
setup(){

}
}
</script>

<style lang="scss" scoped>
article{
  padding: 0 80px;
  width: 1280px;
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
  box-shadow: 0 4px 100px 100px #D0DAE357;
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
}
</style>