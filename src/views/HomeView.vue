<script>
import CardAccess from '@/components/CardAccess.vue'
export default {
  components: {
    CardAccess,
  },
  data() {},
  methods: {
    props: {},
  },
}
</script>

<template>
  <div class="home">
    <CardAccess :card-type="'login'" />
  </div>
</template>

<style scoped></style>
