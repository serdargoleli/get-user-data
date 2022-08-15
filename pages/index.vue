<template>
  <main :class="themee">
    <section class="bg-gray-200 dark:bg-gray-800 h-screen">
      <div class="container mx-auto">
        <loader v-if="isLoader === true" />
        <div class="main-content flex" v-else>
          <div class="main-content-left w-6/12 h-full relative">
            <div class="cs-ellipse cs-blue"></div>
            <div class="cs-ellipse cs-green"></div>
            <div class="cs-ellipse cs-red"></div>
            <div class="cs-ellipse cs-yellow"></div>
            <div class="glassmorphism w-3/4">
              <div class="home-card">
                <span class="svg-box">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <h5>Random User Data</h5>
                <p>
                  Bu uygulama <a href="https://randomuser.me" target="_blank" class="">randomuser.me</a> kullanılarak geliştirilmiştir. Herhangi bir
                  kâr amacı gütmemektedir.
                </p>
                <p class="social-media mt-3">
                  <span class="inline-block mr-1">&#8226; <a href="https://github.com/serdargoleli" target="_blank">GitHub</a></span>
                  <span class="inline-block mr-1">&#8226; <a href="https://www.linkedin.com/in/serdargoleli/" target="_blank">Linkedin</a></span>
                  <span class="inline-block">&#8226; <a href="https://www.behance.net/serdargoleli" target="_blank">Behance</a></span>
                  <span class="inline-block mr-1">&#8226; <a href="https://twitter.com/serdargoleli" target="_blank">Twitter</a></span>
                </p>
              </div>
            </div>
          </div>
          <div class="main-content-right w-6/12 relative">
            <card :getData="getData" :user="user" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import card from '~/components/card.vue'
import loader from '~/components/loader.vue'
export default {
  name: 'IndexPage',
  layout: 'default',
  props: ['themee'],
  components: {
    card,
    loader,
  },
  created() {
    this.getData()
  },
  data() {
    return {
      user: {},
      isLoader: true,
      bgImage: '',
    }
  },
  methods: {
    async getData() {
      await this.$axios.$get().then((result) => {
        if (result.results.length > 0) {
          this.user = result.results[0]
          this.isLoader = false
        }
      })
    },
  },
}
</script>

<style lang="postcss">
.cs-ellipse {
  width: 50%;
  height: 320px;
  filter: blur(68px);
  position: absolute;
  border-radius: 50%;
}
.cs-yellow {
  background: #fbbf24;
  transform: translate(5%, 20%);
  z-index: 3;
}
.cs-blue {
  background: #3b82f6;
  transform: translate(70%, 20%);
  z-index: 2;
}
.cs-green {
  background: #34d399;
  transform: translate(5%, 76%);
  z-index: 1;
}
.cs-red {
  background: #b91c1c;
  transform: translate(74%, 76%);
}
.glassmorphism {
  position: absolute;
  transform: translate(15%, 77%);
  z-index: 99;
}
.home-card {
  @apply block p-6 max-w-sm rounded-lg shadow-md bg-gray-300 dark:bg-gray-900;
}
.home-card h5 {
  @apply mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-50;
}
.home-card p {
  @apply font-normal text-gray-600 dark:text-gray-400;
}
.home-card p a {
  @apply font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white;
}

.svg-box {
  @apply mb-3 inline-flex items-center justify-center p-2 rounded-md shadow-lg
  bg-gray-200 dark:bg-yellow-400 
  text-gray-900;
}
</style>
