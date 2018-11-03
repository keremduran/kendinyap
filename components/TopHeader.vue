<template>
  <header class="top-header util__container">
    <div class="util__flex logo-container util__flex-se">
      <a href="/" class="top-header__logo">
        <img src="//a.storyblok.com/f/42016/1096x313/0353bf6654/logo2.png">
      </a>
    </div>
    <nav class="util__flex util__flex-sb">
      <div class="top-header__col">
        <ul class="util__flex util__flex-se top-header__nav top-header__first-navi">
          <li class="link-container" :key="index" v-for="(navitem, index) in $store.state.settings.main_navi">
            <nuxt-link :class="'top-header__link top-header__'+navitem.name" :to="navitem.link.cached_url">
              {{ navitem.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="top-header__col">
        <ul class="util__flex util__flex-se top-header__nav top-header__lang-navi">
          <li class="link-container">
            <nuxt-link
              class="top-header__link"
              :class="isLangActive('en')"
              to="/">English</nuxt-link>
          </li>
          <li class="link-container">
            <nuxt-link
              class="top-header__link"
              :class="isLangActive('tr')"
              to="/tr">Turkish</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    isLangActive(lang){
      return lang === this.$store.state.language ? 'active-language' : ''
    }
  }
}
</script>


<style lang="scss">
  .top-header {
    padding-top: .5rem;
    padding-bottom: .5rem;
    ul {
      margin: 0;
      padding: 0;
    }
    li {
      list-style-type: none;
    }
  }

  .top-header__col {
    min-width: 9.5rem; 
    li {
      margin-right: .5rem;
      margin-left: .5rem;
    }
  }

  .top-header__link {
    text-decoration: none;
    color: black;
  }

  .top-header__first-navi {
    .nuxt-link-exact-active {
      border-bottom: .1rem solid black;
    }
  }

  // hard-coded Blog to keep the border with child comp
  .nuxt-link-active.top-header__Blog {
      border-bottom: .1rem solid black;
  }

  .top-header__logo {
    img {
      height: 4rem;
      width: 13.5rem;
    }
  }

  .top-header__lang-navi {
    .active-language {
      border-bottom: .1rem solid black;
    }
  }
</style>