//import { Order } from "../types/interface";

import { type Order } from "../types/interface";

export const useOrder = () => {
  const getOrders = async () => {
    const { page } = useUtils();
    const orders = await useMyFetch<{ data: Order[]; totalPages: number }>(
      "/orders",
      {
        lazy: true,
        server: false,
        query: { page: page },
        watch: [page],
      }
    );

    return orders;
  };

  const getOrdersByUser = async () => {
    const { page } = useUtils();
    const orders = await useMyFetch<{ data: Order[]; totalPages: number }>(
      "/orders/user",
      {
        lazy: true,
        server: false,
        query: { page: page },
        watch: [page],
      }
    );

    return orders;
  };

  const getOrderById = async (id: string) => {
    const order = await useMyFetch<Order>(`/orders/${id}`, {
      lazy: true,
      server: false,
    });

    return order;
  };

  return { getOrders, getOrderById, getOrdersByUser };
};
