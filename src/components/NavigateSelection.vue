<template>
  <nav>
    <div class="item">
      О компании
    </div>
    <div class="item">
Услуги
    </div>
    <div class="item">
Направления
    </div>
    <div class="item">
      Контакты
    </div>

  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
nav{
  display: flex;
  padding: 10px 80px;
  font-family: GothamMedium, serif;
  color: #000;
}
.item{
  margin-right: 48px;
  transition: 0.5s ease;
  cursor: pointer;
  &:hover{
    transition: 0.5s ease;
    color: #273895;
  }
}
</style>