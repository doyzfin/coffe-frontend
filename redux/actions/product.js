import axiosApiIntances from "../../utils/axios";

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
