<template>
  <header class="header">
    <nav class="nav border-gray-200 dark:border-gray-600">
      <div class="nav-container">
        <a href="https://serdargoleli.github.io/" target="_blank" class="nav-logo">
          <span class="logo">SERDAR GÖLELİ</span>
          <span>{{ $t('HomeCardTitle') }} </span>
        </a>
        <div class="nav-menu relative" id="navbar-default">
          <button class="btn-dark-mode pr-0" @click="selectThemee">
            <template v-if="themee === 'dark'">
              <light-mode />
            </template>
            <template v-else>
              <dark-mode />
            </template>
          </button>
          <span class="cs-divide"><span></span></span>
          <!-- Current Language -->
          <button class="btn-dropdown-language" @click="toggleLanguageList = !toggleLanguageList">
            <country-flag class="transition-none rounded" :country="getCurrentLanguage.flag" size="normal" />
            <span>{{ getCurrentLanguage.name }}</span>
            <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <!-- Language List  -->
          <div id="dropdown" class="dropdown-language" :class="toggleLanguageList == false ? 'hidden' : 'block'">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
              <li v-for="lang in $i18n.locales" :key="lang.code">
                <nuxt-link class="select-language" :to="switchLocalePath(lang.code)" @click.native="toggleLanguageList = !toggleLanguageList" :class="getCurrentLanguage.code === lang.code ? ' active' : ''">
                  <country-flag class="rounded" :country="lang.flag" size="normal" /> <span>{{ lang.name }}</span>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import lightMode from '~/components/light-mode.vue'
import darkMode from '~/components/dark-mode.vue'
import CountryFlag from 'vue-country-flag'
export default {
  props: ['selectThemee', 'themee'],
  components: {
    lightMode,
    darkMode,
    CountryFlag,
  },
  data() {
    return {
      toggleLanguageList: false,
    }
  },
  computed: {
    getCurrentLanguage() {
      let lang = this.$i18n.locales.find((i) => i.code === this.$i18n.locale)
      return lang
    },
  },
}
</script>

<style lang="postcss" src="../assets/css/navbar.postcss"></style>
