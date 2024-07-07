<template>
  <article>
<h2>Направления</h2>
<div class="des">
  для всех и для каждого
</div>

    <aos-vue animation="zoom-in" :delay="75" placement="top-bottom">
      <router-link :to="{name: 'catalog', hash: '#header'}" style="text-decoration: none" class="section">
    <section class="direction">
      <img src="../../assets/directions/undraw_Gift_card_re_5dyy%205.png"/>
      <div>
      <h1 class="direction__title">Ремонт промышленной электроники</h1>
      <div class="direction__description">Выполняем ремонт различной промышленной электроники и оборудования, производим ремонт высокой сложности на уровне электронных компонентов с гарантией 12 месяцев.</div>
      </div>
    </section>
      </router-link>
    </aos-vue>

    <aos-vue animation="zoom-in" :delay="75" placement="top-bottom">
      <router-link :to="{name: 'catalog', hash: '#header'}" style="text-decoration: none" class="section">
        <section class="direction">
          <img src="../../assets/directions/undraw_Gift_card_re_5dyy%202.png"/>
          <div>
            <h1 class="direction__title">Техническое обслуживание</h1>
            <div class="direction__description">Выполняем сервисное техническое обслуживание автоматики инженерных систем, технологического оборудования и производственных линий. Мы предоставляем услугу на базе постоянного договора на разовые (аварийные) выезды и плановое техническое обслуживание. </div>
          </div>
        </section>
      </router-link>
    </aos-vue>

    <aos-vue animation="zoom-in" :delay="75" placement="top-bottom">
      <router-link :to="{name: 'catalog', hash: '#header'}" style="text-decoration: none" class="section">
        <section class="direction">
          <img src="../../assets/directions/undraw_Gift_card_re_5dyy%204.png"/>
          <div>
            <h1 class="direction__title">Ремонт и модернизация</h1>
            <div class="direction__description">Услуги по ремонту и модернизации оборудования, производственных линий и станков. Услуги выездного слесаря КИП. Регламентные и сервисные работы. Станки и оборудование. Инженерные системы. Краны и подъемное оборудование</div>
          </div>
        </section>
      </router-link>
    </aos-vue>
    <aos-vue animation="zoom-in" :delay="75" placement="top-bottom">
      <router-link :to="{name: 'catalog', hash: '#header'}" style="text-decoration: none" class="section">
        <section class="direction">
          <img src="../../assets/directions/undraw_Gift_card_re_5dyy%201.png"/>
          <div>
            <h1 class="direction__title">Программирование ПЛК, HMI и SCADA</h1>
            <div class="direction__description">Ускорьте автоматизацию и оптимизируйте производительность с помощью комплексного решения для программирования промышленных контроллеров (ПЛК), человеко-машинных интерфейсов (HMI) и систем диспетчерского контроля и сбора данных (SCADA).</div>
          </div>
        </section>
      </router-link>
    </aos-vue>
  </article>
</template>

<script>
import AosVue from "aos-vue";
export default {
  components: {AosVue}
}
</script>

<style lang="scss" scoped>
article{
  max-width: 1062px;
  margin: 0 auto;
}
.des{
  text-align: center;
}

.direction{
  display: flex;
  background-color: #fff;
  border-radius: 20px;
  margin: 16px;
  padding: 55px 187px 55px 110px;
  transition: 1s;
  color: #404040;
  img{
    margin-right: 39px;
    width: 220px;
    border: 1px solid #BBA6FF78;
    box-shadow: 0 4px 50px 10px #BBA6FF78;
    border-radius: 15px;
  }
  .direction__title{
    font-family: "Gotham Pro Medium",serif;
    margin-bottom: 16px;
  }
  .direction__description{
    width: 600px;
    line-height: 20px;
    font-size: 16px;
  }
  &:hover{
    transition: 1s;
    padding: 65px 187px 65px 110px;
  }
}
@media (max-width: 1070px) {
  article{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;
  }
  .direction{
    width: 100%;
    flex-direction: column;
    height: 100%;
    padding: 30px;
    align-items: center;
    .direction__title{
      font-family: "Gotham",serif;
      font-weight: bold;
      text-align: center;
    }
    .direction__description{
      width: 100%;
      text-align: center;
    }
    img{
      width: 80%;
      margin-bottom: 10px;
      margin-right: 0;
    }
    &:hover{
      padding: 30px;
    }
  }

  .section{
    display: flex;
    align-items: center;
  }
}
</style>