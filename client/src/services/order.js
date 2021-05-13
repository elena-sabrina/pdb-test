import api from "./api";

export const createOrder = async (data) => {
  console.log("createOrder running");
  const response = await api.post("/product", data);
  const order = response.data.order;
  console.log("create order feedback order", order);
  return order;
};

export const loadOrderforConfirmation = async (id) => {
  console.log(" loadOrderforConfirmation running");
  const response = await api.get(`product/confirmation/${id}`);
  const order = response.data.order;
  console.log("loadOrderforConfirmation feedback order", order);
  return order;
};
