<template>
  <article>
    <h2>
      Техническое обслуживание
    </h2>
    <div class="des">
      Выполняет сервисное техническое обслуживание автоматики инженерных систем, технологического оборудования и
      производственных линий.
    </div>
    <div class="_container" :style="{background: `url(${vector}) center no-repeat` , backgroundSize: '100% 100%'}">
      <div class="wrapper">
        <div>
          <aos-vue animation="zoom-in" :delay="75" placement="top-bottom">
          <section>
            <img src="../../assets/technical/0d08ee8206cd204c25aa666b918a8d3c.jpg"/>
            <div class="title">
              Техническое обслуживание автоматики систем вентиляции и отопления
            </div>
          </section>
          </aos-vue>
          <aos-vue animation="zoom-in" :delay="75" placement="top-bottom">
          <section>
            <img src="../../assets/technical/ddb17a6baa11039ec3465a3471ec1764.jpg"/>
            <div class="title">
              Техническое обслуживание автоматики аварийного освещения и питания
            </div>
          </section>
          </aos-vue>
        </div>
        <aos-vue animation="zoom-in" :delay="75" placement="top-bottom">
        <section class="long__section">
          <div>
          <img src="../../assets/technical/a2fdf39f439e3ea4db8c3d6bf9feda69.jpg" />
          <div class="title">
            Техническое обслуживание автоматики тепловых пунктов
          </div>
          </div>
          <div>
          <img src="../../assets/technical/d4570fe2c46ae29c087db7e5fa7bb41f.jpg" height="527" width="700"/>
          <div class="title">
            Техническое обслуживание автоматики котельных
          </div>
          </div>
        </section>
        </aos-vue>
        <div>
          <aos-vue animation="zoom-in" :delay="75" placement="top-bottom">
          <section>
            <img src="../../assets/technical/b2e1b60de6dbdb0fb02bb59ed43f9901.jpg" />
            <div class="title">
              Техническое обслуживание автоматики насосных станций и КНС
            </div>
          </section>
          <section>
            <img src="../../assets/technical/c3ec2c653a1c6398155b9faadfc530c6.jpg"/>
            <div class="title">
              Техническое обслуживание автоматики производственного оборудования и линий
            </div>
          </section>
          </aos-vue>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import vector from '../../assets/technical/background-vector.svg'
import AosVue from "aos-vue";

export default {
  components: {AosVue},
  setup() {
    return {vector}
  }
}
</script>

<style lang="scss" scoped>
h2{
  margin-top: 100px;
}
.des{
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 10px;
}
.wrapper{
  justify-content: center;
  display: flex;
  align-items: center;
}
.long__section{
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
section {
  width: 300px;
  box-shadow: 0 4px 100px 30px rgba(208, 218, 227, 0.57);
  background: #fff;
  border-radius: 20px;
  padding: 32px;
  margin: 16px;
  transition: 1s;
//&:hover{
//  transition: 1s;
//  padding: 42px;
//}
  img {
    border-radius: 20px;
    width: 100%;
    height: 200px;
  }

  .title {
    font-family: GothamMedium, serif;
    margin: 5px;
    margin-bottom: 0;
    
  }
}
@media (max-width: 1070px) {
  .wrapper{
    width: 100%;
    flex-wrap: wrap;
  }
  section{
    width: 250px;
    .title{
      text-align: center;
    }
  }

}
</style>