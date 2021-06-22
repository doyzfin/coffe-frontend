import axiosApiIntances from "../../utils/axios";

export const getAllPromo = (token, limit, page) => {
  return {
    type: "GET_ALL_PROMO",
    payload: axiosApiIntances.get(`promo?limit=${limit}&page=${page}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
  };
};
