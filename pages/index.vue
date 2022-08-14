<template>
  <div></div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
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
