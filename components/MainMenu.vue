<template>
  <div class="drawer z-50">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="w-full navbar sticky top-0 bg-base-300">
        <div class="flex-none lg:hidden">
          <label
            for="my-drawer-3"
            aria-label="open sidebar"
            class="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2">Свадьба Валерии и Виталия</div>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <li>
              <NuxtLink :to="{ path: '/', hash: '#section-1' }">О Нас</NuxtLink>
            </li>
            <li>
              <NuxtLink href="#section-2">Приглашение</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{ path: '/', hash: '#section-3' }"
                >Информация</NuxtLink
              >
            </li>
            <li><a>Программа</a></li>
            <li><a>Галерея</a></li>
          </ul>
        </div>
      </div>
      <!-- Page content here -->
      <slot />
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer-3"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200">
        <!-- Sidebar content here -->
        <li><a>О нас</a></li>
        <li><a>Приглашение</a></li>
        <li><a>Инфо</a></li>
        <li><a>Программа</a></li>
        <li><a>Галерея</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
