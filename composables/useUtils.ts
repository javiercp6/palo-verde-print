export const useUtils = () => {
  const route = useRoute();
  const router = useRouter();
  const page = computed(() =>
    route.query.page ? Number(route.query.page) : 1
  );
  const offerCategory = computed(() =>
    route.query.category ? route.query.category : "Paper"
  );
  const lastRoute = computed(() =>
    router.options.history.state.back
      ? `${router.options.history.state.back}`
      : "/offer"
  );

  return { page, offerCategory, lastRoute };
};
