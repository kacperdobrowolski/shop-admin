<template>
  <div class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4 mt-16" aria-label="Table navigation">
    <div class="inline-flex items-center">
      <button
        class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        @click.prevent="changePage(props.pagination.currentPage - 1)"
      >
        <span class="sr-only">Poprzedni</span>
        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      </button>

      <button
        class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        @click.prevent="changePage(props.pagination.currentPage + 1)"
      >
        <span class="sr-only">Następny</span>
        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
      </button>

      <span class="block ml-4">
        Strona {{ props.pagination.currentPage }} z {{ props.pagination.maxPage }} ({{ props.pagination.total }} produktów)
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  type Props = {
    pagination: {
      total: number;
      currentPage: number;
      perPage: number;
      maxPage: number;
    };
  };

  const props = defineProps<Props>();

  const emit = defineEmits(['page-changed']);

  function changePage(page: number): void {
    if (page < 1 || page > props.pagination.maxPage) return;
    emit('page-changed', page);
  }
</script>
