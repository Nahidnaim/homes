<template>
  <ICountUp :delay="delay" :endVal="endVal" />
</template>

<script>
import ICountUp from 'vue-countup-v2'
export default {
  name: 'Counter',
  components: {
    ICountUp,
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['endVal'],
  data() {
    return {
      delay: 1000,
    }
  },
}
</script>

<style scoped></style>
