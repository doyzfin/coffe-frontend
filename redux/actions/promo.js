import axiosApiIntances from "../../utils/axios";

export const getProduct = (token, search, limit, page, category) => {
  return {
    type: "GET_PRODUCT",
    payload: axiosApiIntances.get(
      `product?search=${search}&limit=${limit}&page=${page}&category=${category}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    ),
  };
};
