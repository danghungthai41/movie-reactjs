const initialState = {
  myRef: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "MY_REF":
      state.myRef = payload;

      return { ...state };

    default:
      return state;
  }
};
export default reducer;
