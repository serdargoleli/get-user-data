<template>
  <header>
    <navbar />
  </header>
</template>
<script>
import Navbar from '~/components/nav.vue'
export default {
  name: 'default',
  components: {
    Navbar,
  },
  data() {
    return {
      themee: 'dark',
    }
  },
}
</script>
