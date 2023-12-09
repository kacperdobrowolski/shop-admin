<template>
  <li :class="`Alert Alert--${props.type}`">
    {{ props.message }}
  </li>
</template>

<script setup lang="ts">
  interface Props {
    message: string,
    type: string,
  }

  const props = defineProps<Props>();
</script>

<style lang="scss">
  .Alert {
    padding: 1rem;
    border-radius: 0.3rem;
    font-size: 1rem;
    
    &.Alert--success {
      color: rgba(var(--color-white), 1);
      background: rgba(var(--color-green-500), 1);
    }

    &.Alert--error {
      color: rgba(var(--color-white), 1);
      background-color: rgba(var(--color-red-500), 1);
    }
  }
</style>
