<template>
  <div class="navbar backdrop-blur-sm bg-white/30 fixed top-0 z-50">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <NuxtLink href="#main">Главная</NuxtLink>
          </li>
          <li>
            <NuxtLink href="#section-1">О нас</NuxtLink>
          </li>
          <li><NuxtLink href="#section-2">Ответы на вопросы</NuxtLink></li>
          <li>
            <NuxtLink href="#section-3">План меропрития</NuxtLink>
          </li>
          <li>
            <NuxtLink href="#section-4">Фотографии</NuxtLink>
          </li>
          <li>
            <NuxtLink href="#section-5">Телеграмм</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost montserrat-regular uppercase text-xl"
        >Приглашение на свадьбу</a
      >
    </div>
    <div class="navbar-end">&nbsp;</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
