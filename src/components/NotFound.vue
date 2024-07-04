<template>
  <div class="wrapper">
    <h1>404 Not Found</h1>
    <p>К сожалению, страница, которую вы ищете, не существует.</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.wrapper{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h1 {
  color: #273895;
  font-family: GothamBold, serif;
  font-size: 40px;
}

p {
  font-size: 18px;
  font-family: GothamMedium, serif;
  text-align: center;
}
</style>