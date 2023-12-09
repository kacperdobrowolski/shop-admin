export const useApiRequest = async (
  url: string,
  options?: Record<string, any>,
): Promise<any> => {
  const runtimeConfig = useRuntimeConfig();
  const { $alert } = useNuxtApp();

  try {
    return await $fetch(url, {
      ...options,
      headers: {
        ...options?.headers,
      },
      baseURL: `${runtimeConfig.baseUrl || runtimeConfig.public.baseURL}/api`,
    });
  } catch (error: any) {
    let message = error?.response?._data?.message || null;

    if (Array.isArray(message) && message[0]) {
      message = message[0];
    }

    $alert.error(message, {
      location: 'bottom-right',
    });

    throw error;
  }
}
