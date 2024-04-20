<template>
  <MainMenuV2 />
  <section class="h-screen w-full z-0 relative flex flex-col items-center">
    <img
      src="/img/IMG_6485.webp"
      class="absolute h-full w-full object-cover -z-10"
    />
    <!-- <img
      src="/img/IMG_1224.webp"
      class="absolute left-20 top-[130px] h-[350px] w-[300px] rounded-xl blur-[2px] -rotate-3 -z-10"
    />

    <img
      src="/img/IMG_1135.webp"
      class="absolute left-24 top-[300px] h-[350px] w-[300px] rounded-xl blur-[2px] rotate-6 -z-10"
    />

    <img
      src="/img/IMG_1318.webp"
      class="absolute right-20 top-[130px] h-[350px] w-[300px] rounded-xl blur-[2px] rotate-3 -z-10"
    />

    <img
      src="/img/IMG_1174.webp"
      class="absolute right-24 top-[300px] h-[350px] w-[300px] rounded-xl blur-[2px] -rotate-6 -z-10"
    /> -->
    <div class="absolute top-28 text-center flex flex-col gap-3">
      <p class="text-3xl font-bold">
        <span class="text-white mix-blend-difference">Валерия</span>
        <span class="animate-pulse">💖</span>
        <span class="text-white mix-blend-difference">Виталий</span>
      </p>
      <p class="text-2xl font-bold text-white mix-blend-difference">
        13.07.2024
      </p>
    </div>

    <CountDown id="main" class="absolute bottom-20 text-white" />
  </section>
  <div class="max-w-[640px] mx-auto">
    <section class="h-[1000px] bg-slate-400" id="section-1">Section 1</section>
    <section class="h-[1000px] bg-red-400" id="section-2">Section 2</section>
    <section class="h-[1000px] bg-blue-400" id="section-3">Section 3</section>
  </div>
</template>

<script setup lang="ts">
// class="h-screen w-full z-0 relative bg-gradient-to-r from-cyan-100 to-pink-200 flex flex-col items-center justify-center"
</script>

<style scoped></style>
