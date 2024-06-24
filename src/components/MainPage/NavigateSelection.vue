<template>
  <nav>
    <router-link :to="{name: 'main', hash: '#header'}" class="item">
      Главная
    </router-link>
    <router-link :to="{name: 'catalog', hash: '#header'}" class="item">
Услуги
    </router-link>
    <router-link :to="{name: 'main', hash: '#directions'}" class="item">
Направления
    </router-link>
    <router-link :to="{name: 'main', hash: '#contact'}" class="item">
      Контакты
    </router-link>

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
}
.item{
  margin-right: 48px;
  transition: 0.5s ease;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  &:hover{
    transition: 0.5s ease;
    color: #273895;
  }
}

@media (max-width: 1024px) {
  nav{
    display: none;
  }
}
</style>