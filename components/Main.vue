<script setup>
import { useTPPStore } from '@/stores/index'
const store = useTPPStore()
const { filterKeyWord } = storeToRefs(store)

onMounted(() => {
  store.getProducts()
})

watch(
  () => filterKeyWord.value,
  (newVal) => {
    if (newVal) {
      store.filterData(newVal)
    } else {
      store.getProducts()
    }
  },
  {immediate: true}
)
</script>

<template>
  <div class="container productPage">
    <div class="row">
      <div class="col-md-2 d-none d-sm-block">
        <Accordion />
      </div>
      <div class="col-md-10">
        <ProductCard />
      </div>
    </div>
  </div>
</template>
