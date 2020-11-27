<template>
  <div class="container">
    <div class="page-title">
      Контакты
    </div>
    <div class="content">
      <p class="content-title">Адрес</p>
      <p>Россия, Москва, ул. Ленинские горы</p>
      <p class="content-title">Телефон</p>
      <p>84959398787</p>
      <p class="content-title">Электронная почта</p>
      <p>msu@gmail.com</p>
    </div>
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A7175e478db744b53712b68ef14d7afb5efe47481d813dfa20034a26ac82c4a5d&amp;source=constructor"
      width="100%" height="350" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style scoped>
.content-title {
  font-weight: bold;
}
</style>
