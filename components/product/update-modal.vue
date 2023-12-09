<template>
  <AppModal id="updateProductModal" ref="updateProductModal">
    <template #header>
      Aktualizuj produkt
    </template>

    <form @submit.prevent="updateProduct">
      <div class="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nazwa</label>
          <input
            type="text"
            name="name"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Nazwa produktu"
            v-model="form.name"
          />
        </div>

        <div>
          <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cena</label>
          <input
            type="text"
            name="price"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Cena produktu"
            v-model="form.price"
          />
        </div>

        <div class="sm:col-span-2">
          <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Opis</label>
          <textarea
            id="description"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Opis produktu"
            v-model="form.description"
          ></textarea>                    
        </div>
      </div>

      <button type="submit" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        Zatwierdź
      </button>
    </form>
  </AppModal>
</template>

<script setup lang="ts">
  const { $alert } = useNuxtApp();

  type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
  };

  type UpdateProductForm = {
    name?: string;
    price?: number;
    description?: string;
  };

  const form = ref<UpdateProductForm>({
    name: '',
    price: 0,
    description: '',
  });

  const productId = ref<number>();

  const emit = defineEmits(['product-updated']);
  const updateProductModal = ref<any>();

  async function updateProduct() {
    try {
      await useApiRequest(`/api/admin/catalog/product/${productId.value}`, {
        method: 'patch',
        body: {
          ...form.value,
        },
      });

      form.value = {
        name: '',
        price: 0,
        description: '',
      };

      updateProductModal.value.closeButton.click();
      emit('product-updated');
      $alert.success('Pomyślnie zaktualizowano produkt', {
        location: 'bottom-right',
      });
    } catch (error) {
      console.error(error);
    }
  }

  function setProduct(product: Product): void {
    form.value = {
      name: product.name,
      price: product.price,
      description: product.description,
    };
    productId.value = product.id;
  }

  defineExpose({
    setProduct,
  });
</script>
