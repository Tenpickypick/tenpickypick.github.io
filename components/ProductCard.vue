<script setup>
// const { $bootstrap } = useNuxtApp()

const store = useTPPStore()
const { filterProduct, product } = storeToRefs(store)

const perPage = ref(12)
const currentPage = ref(1)
const productAll = ref(null)

const totalPage = computed(() => {
  // Math.ceil() 取最小整數
  if (filterProduct.value) {
    return Math.ceil(filterProduct.value.length / perPage.value)
  } else {
    return []
  }
})

const pageStart = computed(() => {
  // 取得該頁第一個值的 index
  return (currentPage.value - 1) * perPage.value
})

const pageEnd = computed(() => {
  // 取得該頁最後一個值的 index
  return currentPage.value * perPage.value
})

const filterProductList = computed(() => {
  const result = productAll.value.map((item) => {
    if (item.subTitle.length > 20) {
      return {
        ...item,
        subTitle: item.subTitle.substring(0, 18) + '...'
      }
    } else {
      return item
    }
  })

  return result.slice(pageStart.value, pageEnd.value)
})

watch(
  () => filterProduct.value,
  (val) => {
    currentPage.value = 1
    productAll.value = val
  },
  { immediate: true }
)

function setPage (page) {
  if (page <= 0 || page > totalPage.value) {
    return false
  }
  currentPage.value = page
  window.scrollTo(0, 0)
}

function chooseItem(item) {
  store.getProduct(item)
}

</script>

<template>
  <div class="container">
    <div class="row mb-3">
      <div
        v-for="item in filterProductList"
        :key="item.id"
        class="col-6 col-md-4 col-lg-3 mb-3"
      >
        <div class="card h-100">
          <img :src="item.detail.imgName" class="d-block card-img-top h-100" alt="...">
          <div class="card-body product_body">
            <div class="mb-4">
              <h5 class="card-title mb-2 title">
                {{ item.title }}
              </h5>
              <p class="card-text sub_title">
                {{ item.subTitle }}
              </p>
              <div v-if="item.org_price || item.discount_price">
                <span
                  class="org_price"
                  :class="{'two_price me-1': item.org_price && item.discount_price}"
                >
                  {{ item.org_price }}
                </span>
                <span class="discount_price">{{ item.discount_price }}</span>
              </div>
            </div>
            <button
              type="button"
              class="d-block btn btn-outline-primary"
              @click="chooseItem(item)"
              data-bs-toggle="modal"
              data-bs-target="#toggleMyModal"
            >
              詳細說明
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <nav
      v-if="totalPage > 1"
      aria-label="Page navigation example"
    >
      <ul class="pagination mb-0">
        <li
          class="page-item"
          @click="setPage(currentPage - 1)"
        >
          <a class="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          v-for="(n, index) in totalPage"
          :key="index"
          class="page-item"
          :class="{'active' : (currentPage === (n))}"
          @click="setPage(n)"
        >
          <a class="page-link">{{ n }}</a>
        </li>
        <li
          class="page-item"
          @click="setPage(currentPage + 1)"
        >
          <a class="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- Modal -->
    <ProductModal />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

@media screen and (min-width: 768px) {
  .container {
    min-height: 600px;
  }
}
.card {
  box-shadow: 0 5px 5px -2px rgba($primary, 0.25);
  transition-duration: 0.3s;
}
.card:hover {
  box-shadow: 0 15px 5px -10px rgba($primary, 0.25);
}
.product_body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.title {
  font-weight: bold;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
}
.sub_title {
  font-size: 14px;
  color: #7c7c7c;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
}
.page-item {
  cursor: pointer;
}
.info {
  font-size: 14px;
  line-height: 1.5;
  color: grey;
}
.org_price{
  font-size: 20px;
  font-weight: bold;
  color: $primary;
  &.two_price {
    font-size: 16px;
    font-weight: normal;
    color: #c3c3c3;
    text-decoration: line-through;
  }
}
.discount_price{
  font-size: 20px;
  font-weight: bold;
  color: $primary;
}
</style>