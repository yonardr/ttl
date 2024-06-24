<template>
  <footer>
    <div class="info">
      <div class="img__container">
        <img src="../../assets/logo/logo.svg" />
      </div>
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
    </div>
  </footer>
</template>

<script>
import BlueButton from "../UI/BlueButton.vue";

export default {
  components: {BlueButton}

}
</script>

<style lang="scss" scoped>
footer{
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
</style>