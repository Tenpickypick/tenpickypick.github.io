<template>
  <div class="footer bg-primary">
    <div class="container">
      <div class="row info align-center">
        <div class="px-3 px-md-2 col-md-5 mb-5 mb-sm-0">
          <img src="../assets/image/LOGO.png" class="d-block ms-md-auto footer_logo" alt="">
        </div>
        <div class="col-md-7">
          <div class="row align-top">
            <div class="px-3 px-md-2 col-md-6 mb-5 text-secondary">
              <h5 class="mb-3 mb-md-4 footerItem">社交媒體</h5>
              <div class="d-flex social_media_icon">
                <a href="https://www.fb.com/tenpickypick" class="text-secondary" target="_blank"><i class="bi bi-facebook me-4"></i></a>
                <a href="https://lin.ee/H2CMPJY" class="text-secondary" target="_blank"><i class="bi bi-line me-4"></i></a>
                <a href="https://www.instagram.com/tppick_2022/" class="text-secondary" target="_blank"><i class="bi bi-instagram"></i></a>
              </div>
            </div>
            <div class="px-3 px-md-2 col-md-6 text-secondary">
              <h5 class="mb-3 mb-md-4 footerItem">聯絡我們</h5>
              <div class="mb-2"><i class="bi bi-telephone me-2"></i>(04) 2238-0181</div>
              <div class="mb-2"><i class="bi bi-geo-alt me-2"></i>台中市北屯區崇德五路128號</div>
              <div class="mb-2"><i class="bi bi-envelope me-2"></i>tenpickypick@gmail.com</div>
              <div class="mb-2"><i class="bi bi-calendar-week me-2"></i>週一至週五 09:00-18:00</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="px-3 px-md-2 col text-center text-secondary">© 2023 Tenpickypick. All rights reserved.</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.footer {
  padding: 40px 0;
}
.info {
  margin-bottom: 24px;
  align-items: center;
}
.footerItem {
  padding-block: 4px;
  font-weight: bold;
  display: inline-block;
  border-bottom: 3px solid $secondary;
}
.footer_logo {
  margin: 0 auto;
  width: 200px;
  @media screen and ( max-width: 768px) {
    margin: 0;
    width: 180px;
  }
}
.social_media_icon {
  font-size: 32px;
}
</style>
