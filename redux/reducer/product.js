const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  isOnline: true,
  msg: "",
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case "POST_PRODUCT_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "POST_PRODUCT_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        isOnline: true,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    case "POST_PRODUCT_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data.msg,
      };
    default:
      return state;
  }
};

export default product;
