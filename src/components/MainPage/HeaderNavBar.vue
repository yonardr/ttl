<template>
  <div>
  <header class="scroll">
      <div class="info">
        <router-link :to="{name: 'main', hash: '#header'}">
        <div class="img__container">
          <img src="../../assets/logo/logo.svg" />
        </div>
        </router-link>
        <div class="descriptions">
          <div class="item">
            Автоматизация технологических процессов
          </div>
          <div class="item">
            Ремонт промышленной электроники
          </div>
        </div>
      </div>
     <div class="contacts">
       <a href="tel:88432407717" style="text-decoration: none">
       <div class="phone">
         8 (843) 240-77-17
       </div>
       </a>
       <div>
         <a href="tel:88432407717" style="text-decoration: none">
         <BlueButton>Позвонить</BlueButton>
         </a>
       </div>
     </div>



      <div class="burger" :class="{active: burger_active}" @click="burger_active=!burger_active"><span></span>
      </div>

    <div class="navbar_tel" :class="{active: burger_active}">
      <ul class="menu_table">
        <li>
          <router-link class="menu_button" :to="{name:'main', hash: '#header'}" @click="burger_active=!burger_active">Главная</router-link>
        </li>
        <li>
          <router-link class="menu_button" :to="{name:'catalog', hash: '#header'}" @click="burger_active=!burger_active">Услуги</router-link>
        </li>
        <li>
          <router-link class="menu_button" :to="{name:'main', hash: '#directions'}" @click="burger_active=!burger_active">Направления</router-link>
        </li>
        <li>
          <router-link class="menu_button" :to="{name:'main', hash: '#contact'}" @click="burger_active=!burger_active">Контакты</router-link>
        </li>
      </ul>
    </div>


  </header>
  </div>
</template>

<script>
import BlueButton from "../UI/BlueButton.vue";

export default {
  components: {BlueButton},
  data(){
    return{
      pageOffset: 0,
      burger_active : false
    }
  },

}
</script>

<style lang="scss" scoped>
header{
  display: flex;
  padding: 20px 80px;
  justify-content: space-between;
  align-items: center;

}
.info{
  display: flex;
  align-items: center;
  font-size: 12px;
  .descriptions{
    margin-left: 64px;
  }
}
.contacts{
  display: flex;
  align-items: center;
  .phone{
    color: #000;
    margin-right: 38px;
    font-weight: bold;
  }
}

.burger{
  display: none;
}
//Добавил

.navbar_tel{
  position: fixed;
  top: -200%;
  left: 0;
  width: 100%;
  height: 100%;
  background: hsla(0, 20%, 4%, 0.1);
  backdrop-filter: blur(2rem);
  -webkit-backdrop-filter: blur(20px);
  transition: all 0.3s ease 0s;
  z-index: 15;
}
.menu_table{
  display: block;
  margin: 100px 45% 0 5%;
  padding: 7px 0;
  font-size: 30px;
  line-height: 200%;
  list-style: none;
}
.menu_button{
  text-decoration: none;
  color: #000000;
}

@media (max-width: 1024px) {
  header{
    justify-content: flex-start;
    max-height: 50px ;


    position: fixed;
    z-index: 999;
    background: #FFFFFF;
    transition: all 0.6s ease 0s;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 0px 0px 0px;
    width: 100%;
    padding: 20px 0px;
  }
  .img__container{
    margin-left: 20px;
    img{
      width: 150px;
    }
  }
  .descriptions, .contacts{
    display: none;
  }
  .navbar_tel.active{
    top:0 ;
  }
  .logo{
    margin-left: 10px;
    z-index: 99;
  }
  .burger{
    display: block;
    position: fixed;
    left: 90%;
    width: 30px;
    height: 20px;
    top: 34px;
    z-index: 50;
    span{
      position: absolute;
      background-color: #1B1B1C;
      left:0;
      width: 100%;
      height: 2px;
      top: 9px;
      transition:all 0.3s ease 0s;
    }

    &:before,
    &:after{
      content: '';
      background-color: #1B1B1C;
      position:absolute;
      width: 100%;
      height: 2px;
      left:0;
      transition:all 0.3s ease 0s;
    }
    &:before{
      top: 0;
    }
    &:after{
      bottom: 0;
    }
    &.active:before{
      transform:rotate(45deg);
      top:9px;
    }
    &.active:after{
      transform:rotate(-45deg);
      bottom:9px;
    }
    &.active span{
      transform: scale(0);
    }
  }
  .scroll{
    background : rgb(245, 245, 247);
    transition: all 0.6s ease 0s;
    box-shadow: rgba(0, 0, 0, 0.07) 15px 15px 15px 15px;
  }
}



</style>