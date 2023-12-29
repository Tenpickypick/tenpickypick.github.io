<script setup>
const store = useTPPStore()
const { product } = storeToRefs(store)
const productItem = ref(null)

watch(
  () => product.value,
  (item) => {
    if (item) {
      productItem.value = item
    }
  }
)
</script>

<template>
  <div class="modal fade" tabindex="-1" ref="modalRef" id="toggleMyModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <img :src="productItem?.detail.imgName" class="d-block w-100 mb-3" alt="">
          <h3 class="fw-bold" :class="{'mb-1' : productItem?.detail.description, 'mb-3' : !productItem?.detail.description}">
            {{ productItem?.detail.productName }}
          </h3>
          <p v-if="productItem?.detail.description">
            {{ productItem?.detail.description }}
          </p>
          <div class="info">
            <p class="mb-0">
              產地：{{ productItem?.detail.placeOfOrigin }}
            </p>
            <p class="mb-0">
              保存方式：{{ productItem?.detail.storageMethod }}
            </p>
            <p v-if="productItem?.detail.limitDate" class="mb-0">
              保存期限：{{ productItem?.detail.limitDate }}
            </p>
            <p
              v-if="productItem?.detail.unit"
              class="mb-0"
            >
              規格：{{ productItem?.detail.unit }}
            </p>
            <p
              v-if="productItem?.detail.netWeight"
              class="mb-0"
            >
              重量：{{ productItem?.detail.netWeight }}
            </p>
            <p
              v-if="productItem?.detail.containment"
              class="mb-0"
            >
              容量：{{ productItem?.detail.containment }}
            </p>
            <p
              v-if="productItem?.detail.alcoholConcentration"
              class="mb-0"
            >
              濃度：{{ productItem?.detail.alcoholConcentration }}
            </p>
            <p
              v-if="productItem?.detail.note"
              class="mb-0"
            >
              備註：{{ productItem?.detail.note }}
            </p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>