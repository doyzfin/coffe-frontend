import axiosApiIntances from "../../utils/axios";

export const getProduct = (id, token) => {
  return {
    type: "GET_PRODUCT",
    payload: axiosApiIntances.get(`/product/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
  };
};
export const postProduct = (data, token) => {
  return {
    type: "POST_PRODUCT",
    payload: axiosApiIntances.post("/product", data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
  };
};
export const updateProduct = (id, data, token) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: axiosApiIntances.patch(`/product/${id}`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
  };
};
export const deleteProduct = (id, token) => {
  return {
    type: "DELETE_PRODUCT",
    payload: axiosApiIntances.delete(`/product/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
  };
};
