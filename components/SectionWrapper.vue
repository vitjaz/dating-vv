<template>
  <div
    class="max-w-[640px] mx-auto flex items-center justify-center"
    :class="disableHScreen ? 'h-full' : 'h-screen'"
    :id="`section-${$props.id}`"
  >
    <section class="max-sm:px-4">
      <slot />
    </section>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  id: string;
  disableHScreen?: boolean;
}

defineProps<IProps>();
</script>

<style scoped></style>
