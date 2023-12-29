<script setup>
const store = useTPPStore()
const { filterKeyWord, isMobileSize } = storeToRefs(store)

watch(
  () => filterKeyWord.value,
  (val) => {
    if (isMobileSize.value && (val === '' || val)) {
      document.querySelector('.navbar-toggler').click()
    }
  }
)
</script>

<template>
  <nav class="navbar fix-top navbar-light bg-primary py-0">
    <div class="container px-2">
      <!-- 小版才顯示 -->
      <button
        id="switchOffcanvas"
        class="navbar-toggler d-block d-sm-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon bar-icon"></span>
      </button>
      <div
        id="offcanvasNavbar"
        class="offcanvas offcanvas-start bg-primary"
        tabindex="-1"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close text-reset ms-auto"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div class="offcanvas-body">
          <Accordion />
        </div>
      </div>
      <a class="navbar-brand mx-0" href="#">
        <img src="../assets/image/header-logo.png" class="d-block header_logo" alt="">
      </a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
.navbar-toggler {
  border-width: 2px;
  border-color: $secondary;
  padding: 8px;
  outline: none;
}
.navbar-toggler:focus {
  outline: none !important;
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(204, 163, 20, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.header_logo {
  width: 100px;
}
.offcanvas {
  width: 80%;
  border-radius: 0 20px 20px 0;
  &.offcanvas-start {
    width: 80%;
  }
}
.btn-close {
  filter: invert(1) sepia(0) saturate(10000%) hue-rotate(0deg) brightness(100%);
}
</style>