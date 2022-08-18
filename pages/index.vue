<template>
  <main :class="themee">
    <section class="bg-gray-100 dark:bg-gray-800">
      <div class="container w-11/12 md:w-full mx-auto">
        <div class="main-content">
          <div class="main-content-left">
            <div class="cs-ellipse cs-blue"></div>
            <div class="cs-ellipse cs-green"></div>
            <div class="cs-ellipse cs-red"></div>
            <div class="cs-ellipse cs-yellow"></div>
            <div class="glassmorphism">
              <div class="home-card">
                <span class="svg-box">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <h5>{{ $t('HomeCardTitle') }}</h5>
                <p v-html="$t('HomeCardContent')"></p>
                <p class="social-media mt-3">
                  <span class="inline-block mr-1">&#8226; <a href="https://github.com/serdargoleli" target="_blank">GitHub</a></span>
                  <span class="inline-block mr-1">&#8226; <a href="https://www.linkedin.com/in/serdargoleli/" target="_blank">Linkedin</a></span>
                  <span class="inline-block">&#8226; <a href="https://www.behance.net/serdargoleli" target="_blank">Behance</a></span>
                  <span class="inline-block mr-1">&#8226; <a href="https://medium.com/@serdargoleli" target="_blank">Medium</a></span>
                </p>
              </div>
            </div>
          </div>
          <div class="main-content-right">
            <card :getData="getData" :user="user" :loading="isLoader" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import card from '~/components/card.vue'

export default {
  name: 'IndexPage',
  layout: 'default',
  props: ['themee'],
  components: {
    card,
  },
  created() {
    if (Object.keys(this.user).length === 0) {
      this.getData()
    } else {
      this.isLoader = false
    }
  },
  data() {
    return {
      user: {},
      isLoader: true,
    }
  },
  computed: {
    getCurrentLanguage() {
      let lang = this.$i18n.locales.find((i) => i.code === this.$i18n.locale)
      return lang
    },
  },
  methods: {
    async getData() {
      this.isLoader = true
      await this.$axios.$get().then((response) => {
        if (response.results.length > 0) {
          this.user = response.results[0]
        }
        this.isLoader = false
      })
    },
  },
  watch: {
    $route(to, from) {
      this.getData()
    },
  },
}
</script>

<style lang="postcss" src="../assets/css/home.postcss"></style>
