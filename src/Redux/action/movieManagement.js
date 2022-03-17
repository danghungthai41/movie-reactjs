import axios from "axios";

export const movieManagement = (formData) => async (dispatch) => {
  const formMovie = new FormData();
  formMovie.append("tenPhim", formData.tenPhim);
  formMovie.append("trailer", formData.trailer);
  formMovie.append("moTa", formData.moTa);
  formMovie.append("ngayKhoiChieu", formData.ngayKhoiChieu);
  formMovie.append("dangChieu", formData.dangChieu);
  formMovie.append("sapChieu", formData.sapChieu);
  formMovie.append("hot", formData.hot);
  formMovie.append("danhGia", formData.danhGia);
  formMovie.append("maNhom", formData.maNhom);
  formMovie.append("hinhAnh", formData.hinhAnh[0]);
  try {
    await axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
      method: "POST",
      data: formMovie,
    });
  } catch (error) {
    console.log(error.response?.data);
  }
};
