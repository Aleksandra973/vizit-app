<template>
  <div >
    <nav id="nav" class="navbar navbar-expand-sm bg-dark navbar-dark my-nav">
      <div class="container pl-5 pr-5">
        <!-- Navbar brand -->
        <router-link class="navbar-brand" to="/"><img src="img/logo.png" style="width:50px"></router-link>

        <!-- Collapse button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span
          class="navbar-toggler-icon"></span></button>

        <!-- Collapsible content -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent1">

          <!-- Links -->
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-for="item in navMenu" :key="item.name">
              <router-link class="nav-link" :to="item.path"><span>{{item.name}}</span></router-link>
            </li>
          </ul>
          <!-- Links -->
        </div>
      </div>
      <!-- Collapsible content -->

    </nav>
  </div>
</template>

<script>

export default {
  name: 'Nav',

  data () {
    return {
      navMenu: [
        {
          name: 'О лизиметрах',
          path: '/about'
        },
        {
          name: 'Исследования',
          path: '/research'
        },
        {
          name: 'Фото',
          path: '/photo'
        },
        {
          name: 'Конференции',
          path: '/conference'
        },
        {
          name: 'Контакты',
          path: '/contacts'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
span {
  color: #ffffff;
  &:hover {
    color: darken(white, 10%);
  }
}
.my-nav {
  background-image: linear-gradient(to right, rgb(96, 175, 27), #8bcc2f, rgb(96, 175, 27)) !important;
  white-space: nowrap;
}
</style>
