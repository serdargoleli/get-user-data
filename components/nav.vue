<template>
  <header :class="themee" class="header">
    <nav class="nav">
      <div class="nav-container">
        <a href="https://serdargoleli.github.io/" class="nav-logo">
          <span class="logo">SERDAR GÖLELİ</span>
          <span>Random User Data</span>
        </a>

        <div class="nav-menu" id="navbar-default">
          <ul class="nav-menu-list">
            <li class="nav-menu-list-item">
              <a href="https://github.com/serdargoleli/sgiphy" target="_blank">sgiphy</a>
            </li>
            <li class="nav-menu-list-item">
              <a href="https://vue3-yenilikler.vercel.app/#/" target="_blank">Vue 3</a>
            </li>
            <li class="">
              <button class="btn-dark-mode" @click="selectThemee">
                <template v-if="themee === 'dark'">
                  <light-mode />
                </template>
                <template v-else>
                  <dark-mode />
                </template>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import lightMode from '~/components/light-mode.vue'
import darkMode from '~/components/dark-mode.vue'
export default {
  components: {
    lightMode,
    darkMode,
  },
  data() {
    return {
      themee: 'dark',
    }
  },
  methods: {
    selectThemee() {
      this.themee = this.themee === 'dark' ? 'light' : 'dark'
    },
  },
}
</script>
