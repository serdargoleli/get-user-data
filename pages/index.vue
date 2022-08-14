<template>
  <main class="dark">
    <section class="border-gray-300 dark:bg-gray-800 h-screen">
      <div class="container mx-auto">
        <div class="main-content flex">
          <div class="main-content-left w-6/12 h-full relative">
            <div class="cs-ellipse cs-blue"></div>
            <div class="cs-ellipse cs-green"></div>
            <div class="cs-ellipse cs-red"></div>
            <div class="cs-ellipse cs-yellow"></div>
            <div class="cs-img-box img-box" style="background-image: url('https://picsum.photos/800/800')"></div>
            <div class="cs-img-box img-box-content" style="background-image: url('https://picsum.photos/800/800')"></div>
          </div>
          <div class="main-content-right w-6/12 relative">
            <card />
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
  components: {
    card,
  },
  data() {
    return {
      user: {},
    }
  },
  methods: {
    getData() {
      this.$axios.$get().then((result) => {
        if (result.results.length > 0) {
          this.user = result.results[0]
          console.log(this.user)
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
.cs-img-box {
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 47%;
  background-size: cover;
  margin: auto;
}

.img-box {
  z-index: 11;
  width: 411px;
  height: 476px;
  filter: blur(29px);
  transform: translate(-50%, 21%);
}
.img-box-content {
  z-index: 99;
  width: 380px;
  height: 445px;
  transform: translate(-50%, 26%);
  transition: 0.3s all;
}
</style>
