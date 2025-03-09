<script>
import CardAccess from '@/components/CardAccess.vue'

export default {
  components: {
    CardAccess,
  },
  data() {
    return {}
  },
}
</script>

<template>
  <div class="register">
    <CardAccess :card-type="'register'" />
  </div>
</template>

<style></style>
