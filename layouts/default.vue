<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900">
    <VitePwaManifest />
    <AppNavigation />
    <AppSidebar />

    <main class="min-h-screen p-4 md:ml-64 h-auto pt-20 text-gray-900 dark:text-white">
      <slot></slot>
    </main>

    <AppAlerts />
  </div>
</template>

<script setup lang="ts">
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

  const { $alert, $pwa } = useNuxtApp();

  let offlineInterval: NodeJS.Timeout;

  onMounted(() => {
    // initAccordions();
    // initCarousels();
    // initCollapses();
    // initDials();
    // initDismisses();
    // initDrawers();
    // initDropdowns();
    // initModals();
    // initPopovers();
    // initTabs();
    // initTooltips();

    $pwa?.install();

    window.addEventListener('offline', function() {
      $alert.error('Utracono połączenie z internetem', {
        location: 'bottom-right',
      });

      let attemps = 9;

      offlineInterval = setInterval(() => {
        $pwa?.updateServiceWorker()
        if (attemps) {
          $alert.error('Utracono połączenie z internetem', {
            location: 'bottom-right',
          });
          attemps--;
        } else {
          clearInterval(offlineInterval);
        }
      }, 5000);
    });

    window.addEventListener('online', function() {
      if (offlineInterval) clearInterval(offlineInterval);
    });
  })
</script>
