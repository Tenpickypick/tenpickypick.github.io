<script setup></script>

<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <!-- 第一組 Banner -->
      <div class="carousel-item active">
        <img src="../assets/image/BN_mobile.jpg" class="d-block w-100 d-md-none" alt="手機版Banner">
        <img src="../assets/image/BN.jpg" class="d-block w-100 d-none d-md-block" alt="電腦版Banner">
      </div>
      <!-- 第二組 Banner -->
      <div class="carousel-item">
        <img src="../assets/image/BN_mobile2.jpg" class="d-block w-100 d-md-none" alt="手機版Banner">
        <img src="../assets/image/BN2.jpg" class="d-block w-100 d-none d-md-block" alt="電腦版Banner">
      </div>
    </div>
    <!-- 控制項 -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
