import type { Offer } from "../types/interface";

export const useOffer = (id: string = "") => {
  const { page, offerCategory } = useUtils();
  /* const getOffers = async():Promise<Object> => {
    //const { data } = await useFetch<Offer[]>('https://apipaloverde.vercel.app/api/offers');
    const { pending, data: offers, error } = await useFetch('https://paloverde-production.up.railway.app/api/offers', {
      lazy: true,
    })
    console.log(offers, error);
    return { pending, offers };
  } */
  const getOffers = async () => {
    const offers = await useMyFetch<{ data: Offer[]; totalPages: number }>(
      "/offers",
      {
        lazy: true,
        query: { page: page, material: offerCategory },
        watch: [page, offerCategory],
      }
    );

    return offers;
  };

  const getOfferById = async (id: string) => {
    const offers = await useMyFetch<Offer>(`/offers/${id}`, {
      lazy: true,
      query: { page: page },
      watch: [page],
    });

    return offers;
  };
  const getOffersAdmin = async () => {
    const offers = await useMyFetch<{ data: Offer[]; totalPages: number }>(
      "/offers/admin",
      {
        lazy: true,
        server: false,
        query: { page: page },
        watch: [page],
      }
    );

    return offers;
  };
  /*  const getProductById = async(íd: string): Promise<Product> => {
    const { data } = await useFetch<Product>(`https://apininas.vercel.app/api/products/${íd}`);
    return data;
  } */

  return { getOffers, getOffersAdmin, getOfferById };
};
