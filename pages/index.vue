<script setup>
import { useTPPStore } from '@/stores/index'
const store = useTPPStore()
const size = ref(0)

onMounted(() => {
  store.getWidth(elem().value)
  window.addEventListener('resize', () => {
    store.getWidth(elem().value)
  })
})

function elem() {
  size.value = window.innerWidth;
  return size;
}
</script>

<template>
  <div>
    <!-- Navbar -->
    <Navbar />
    <!-- 輪播 -->
    <Carousel/>
    <!-- 主區塊 -->
    <Main
      class="py-4 px-2"
    />
    <!-- Footer -->
    <Footer />
  </div>
</template>
