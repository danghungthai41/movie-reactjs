import { FETCH_MOVIE_INFO } from "../constants";

const initialState = {
  movieInfo: {
    tenPhim: "",
    trailer: "",
    moTa: "",
    ngayKhoiChieu: "",
    dangChieu: "",
    sapChieu: "",
    hot: "",
    danhGia: "",
    maNhom: "GP09",
    hinhAnh: {},
  },
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIE_INFO:
      return { ...state, movieInfo: payload };

    default:
      return state;
  }
};
export default reducer;
