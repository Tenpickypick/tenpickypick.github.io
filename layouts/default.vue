<script setup>
useHead({
  title: '拾夯 Tenpickypick',
  htmlAttrs: {
    lang: 'zh_tw'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '在資訊爆炸的社會，集結三位笑年狼的才能、智慧以及心血，即將打造精緻的組合，為各位帶來大大的方便。' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'description', content: '在資訊爆炸的社會，集結三位笑年狼的才能、智慧以及心血，即將打造精緻的組合，為各位帶來大大的方便。' },
    { name: 'keywords', content: '拾夯, 伴手禮, 下酒菜, tenpickypick, 台中伴手禮' },
    { hid: 'og:title', property: 'og:title', content: '拾夯' },
    { hid: 'og:description', property: 'og:description', content: '在資訊爆炸的社會，集結三位笑年狼的才能、智慧以及心血，即將打造精緻的組合，為各位帶來大大的方便。' },
    { hid: 'og:url', property: 'og:url', content: 'https://tenpickypick.com/' },
    { hid: 'og:image', property: 'og:image', content: 'https://tenpickypick.com/ogImg.jpg' },
    { hid: 'og:type', property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style scoped></style>
