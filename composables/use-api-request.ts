export const useApiRequest = async (
  url: string,
  options?: Record<string, any>,
) => {
  const runtimeConfig = useRuntimeConfig();

  try {
    const result: any = await $fetch(url, {
      ...options,
      headers: {
        ...options?.headers,
      },
      baseURL: `${runtimeConfig.baseUrl || runtimeConfig.public.baseURL}/api`,
    });

    return result;
  } catch (error) {
    console.error(error);
  }
}
