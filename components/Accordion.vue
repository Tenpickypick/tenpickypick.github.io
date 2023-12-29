<script setup>
const store = useTPPStore()
const { filterKeyWord, getMenuItem } = storeToRefs(store)

const showMenuItem = getMenuItem

function filterData (key) {
  filterKeyWord.value = key
}
</script>

<template>
  <div>
    <button
      class="rounded-3 categoryItem w-100 mb-2"
      style="padding: 16px 20px"
      type="button"
      @click="filterData('')"
    >
      全部
    </button>
    <button
      v-for="item in showMenuItem"
      :key="item.id"
      class="rounded-3 categoryItem w-100 mb-2"
      style="padding: 16px 20px"
      type="button"
      @click="filterData(item.category)"
    >
      {{ item.title }}
    </button>
    <!-- 宣導BN -->
    <img src="../assets/image/post.jpg" class="d-block w-100 mt-5" alt="">
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
.categoryItem {
  font-weight: bold;
  text-align: left;
  display: block;
  border: 1px solid rgba($primary, 0.5);
  border-radius: 60px !important;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    color: white;
    border: none;
    border-radius: 0;
    &:hover {
      background-color: transparent;
    }
  }
  &:hover {
    background-color: rgba($primary, 0.25);
    color: $primary;
    @media screen and (max-width: 768px) {
      background-color: transparent;
      color: white;
    }
  }
}
</style>