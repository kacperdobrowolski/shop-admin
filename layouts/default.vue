<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900">
    <AppNavigation />
    <AppSidebar />

    <main class="min-h-screen p-4 md:ml-64 h-auto pt-20 text-gray-900 dark:text-white">
      <slot></slot>
    </main>

    <AppAlerts />
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { 
    initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips,
  } from 'flowbite';

  onMounted(() => {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
  });
</script>
