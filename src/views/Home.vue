<template>
  <div class="my-container" :style="{ height: fullHeight+'px' }" >
    <h1>Лизиметрическая станция <br> почвенного стационара МГУ</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      fullHeight: null
    }
  },
  methods: {
    // whenever the document is resized, re-set the 'fullHeight' variable
    handleResize () {
      this.fullHeight = (document.documentElement.clientHeight - parseInt(window.getComputedStyle(document.getElementById('nav')).height))
    }
  },
  // bind event handlers to the `handleResize` method (defined below)
  mounted: function () {
    this.fullHeight = (document.documentElement.clientHeight - parseInt(window.getComputedStyle(document.getElementById('nav')).height))
    // this.fullHeight = (document.documentElement.clientHeight - parseInt(window.getComputedStyle(document.getElementById('nav')).height))
    window.addEventListener('load', this.handleResize)
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('load', this.handleResize)
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="scss" scoped>
.my-container {
  display: flex;
  justify-content: center;
  background: url(../../public/img/grass.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #ffffff;
}
  h1 {
    height: max-content;
    font-size: 55px;
    margin-top: 30vh;
    text-align: center;
    font-family: $font-title;
    background-color: rgba(96, 175, 27, 0.65);
    padding: 0px 10px 10px 10px;
  }

@media screen and (max-width: 600px) {
  h1 {
    font-size: 35px ;
  }
}

</style>
