<template>
  <main class="dark">
    <section class="border-gray-300 dark:bg-gray-800 h-screen">
      <div class="container mx-auto">
        <loader v-if="isLoader === true" />
        <div class="main-content flex" v-else>
          <div class="main-content-left w-6/12 h-full relative">
            <div class="cs-ellipse cs-blue"></div>
            <div class="cs-ellipse cs-green"></div>
            <div class="cs-ellipse cs-red"></div>
            <div class="cs-ellipse cs-yellow"></div>
            <div class="glassmorphism w-3/4">
              <div
                class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-700"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Random User Data</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
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
          /*  this.bgImage = "background-image: url('" + this.user.picture.medium */
          this.isLoader = false
        }
      })
    },
  },
}
</script>

<style lang="css">
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
  padding: 20px;
  position: absolute;
  transform: translate(0, 110%);
  z-index: 99;
}
</style>
