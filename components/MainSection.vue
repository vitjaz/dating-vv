<template>
  <section
    class="h-screen w-full z-0 relative flex flex-col items-center shadow-3xl"
  >
    <img
      src="/img/IMG_6485.webp"
      class="absolute h-full w-full object-cover -z-10"
    />
    <!-- <div class="absolute h-full w-full object-cover -z-10 custom-image"></div> -->
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
      <p class="text-3xl font-bold xl:text-4xl">
        <span class="text-zinc-800 lobster-regular">Валерия</span>
        <span class="animate-pulse">💞</span>
        <span class="text-zinc-800 lobster-regular">Виталий</span>
      </p>
      <p class="text-2xl font-bold text-zinc-800">13.07.2024</p>
    </div>
    <CountDown id="main" class="absolute bottom-20 text-white" />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
