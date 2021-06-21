import axiosApiIntances from "../../utils/axios";

export const updateStatus = (id, token) => {
  return {
    type: "UPDATE_STATUS",
    payload: axiosApiIntances.patch(`/invoice/update-status/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
  };
};
