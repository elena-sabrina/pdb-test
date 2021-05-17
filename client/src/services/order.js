import api from "./api";

export const createOrder = async (data) => {
  const response = await api.post("/product", data);
  const order = response.data.order;

  return order;
};

export const loadOrderforCheckout = async (id) => {
  const response = await api.get(`product/checkout/${id}`);
  const order = response.data.order;

  return order;
};

export const finalizeOrder = async (id, data) => {
  const response = await api.patch(`product/checkout/${id}`, data);
  const order = response.data.order;
  console.log("asdfasfasdgfasdgasdg");
  return order;
};

export const loadOrderforConfirmation = async (id) => {
  console.log(" loadOrderforConfirmation running");
  const response = await api.get(`product/confirmation/${id}`);
  const order = response.data.order;
  console.log("loadOrderforConfirmation feedback order", order);
  return order;
};
