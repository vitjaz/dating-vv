<template>
  <div
    class="grid grid-flow-col gap-5 text-center auto-cols-max backdrop-blur-sm bg-white/30 p-3 rounded-xl"
  >
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span ref="days" style="--value: 0"></span>
      </span>
      дней
    </div>
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span ref="hours" style="--value: 0"></span>
      </span>
      часов
    </div>
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span ref="minutes" style="--value: 0"></span>
      </span>
      минут
    </div>
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span ref="seconds" style="--value: 0"></span>
      </span>
      секунд
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTimer } from "vue-timer-hook";

const days = ref<HTMLElement | null>(null);
const hours = ref<HTMLElement | null>(null);
const minutes = ref<HTMLElement | null>(null);
const seconds = ref<HTMLElement | null>(null);
const currentDate = new Date();
const vDate = new Date("2024-07-13T12:00:00");
const diff = vDate.getTime() - currentDate.getTime();
const timer = useTimer(currentDate.getTime() + diff, true);

watch(
  () => timer,
  () => {
    days.value?.style.setProperty("--value", timer.days.value.toString());
    hours.value?.style.setProperty("--value", timer.hours.value.toString());
    minutes.value?.style.setProperty("--value", timer.minutes.value.toString());
    seconds.value?.style.setProperty("--value", timer.seconds.value.toString());
  },
  {
    deep: true,
  }
);
</script>

<style scoped></style>
