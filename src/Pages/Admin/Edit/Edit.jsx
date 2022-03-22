import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import { useForm, Controller, set } from "react-hook-form";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { fetchMovieInfo } from "../../../Redux/action/movieManagement";
import img from "../../../Theme/icons";
import request from "../../../configs/axios";
import {
  fetchMovieInfo,
  handleUpdateMovieUpload,
} from "../../../Redux/action/movieManagement";
import { Watch } from "@material-ui/icons";

const Edit = () => {
  const { movieInfo } = useSelector((state) => state.movieManagement);
  const dispatch = useDispatch();
  const [imgPreview, setImgPreview] = useState();

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    watch,
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      biDanh: movieInfo.biDanh,
      maPhim: movieInfo.maPhim,
      tenPhim: movieInfo.tenPhim,
      trailer: movieInfo.trailer,
      moTa: movieInfo.moTa,
      ngayKhoiChieu: moment(movieInfo.ngayKhoiChieu),
      dangChieu: movieInfo.dangChieu,
      sapChieu: movieInfo.sapChieu,
      hot: movieInfo.hot,
      danhGia: movieInfo.danhGia,
      maNhom: "GP09",
      hinhAnh: [],
    },
  });

  const watchImg = watch("hinhAnh", []);

  useEffect(() => {
    console.log("watchImg",watchImg)
    if (watchImg.length < 1) return;
    const fileReader = new FileReader();

    fileReader.readAsDataURL(watchImg[0]);
    fileReader.onload = (e) => {
      setImgPreview(e.target.result);
    };
  }, [watchImg]);

  const onSubmit = (values) => {
    const formData = new FormData();
    // for (const key in values) {
    //   if(key !== "hinhAnh"){
    //     formData.append(key, values[key]);
    //   } else if(values.hinhAnh) {
    //     formData.append('hinhAnh', imgPreview);
    //   }
    // }

    formData.append("maPhim", values.maPhim);
    formData.append("tenPhim", values.tenPhim);
    formData.append("trailer", values.trailer);
    formData.append("moTa", values.moTa);
    formData.append("ngayKhoiChieu", values.ngayKhoiChieu.format("DD/MM/YYYY"));
    formData.append("dangChieu", values.dangChieu);
    formData.append("sapChieu", values.sapChieu);
    formData.append("hot", values.hot);
    formData.append("danhGia", values.danhGia);
    if (values.hinhAnh >= 1) {
      formData.append("hinhAnh", imgPreview);
    }
    formData.append("maNhom", values.maNhom);
    formData.append("biDanh", values.biDanh);
    dispatch(handleUpdateMovieUpload(formData));
  };

  const handleChangeDatePicker = (values) => {
    const ngayKhoiChieu = moment(values);
    setValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  return movieInfo ? (
    <>
      <h1 style={{ fontSize: 24 }}>CẬP NHẬT PHIM</h1>
      <Form
        onSubmitCapture={handleSubmit(onSubmit)}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: "large",
        }}
        size="large"
      >
        <Controller
          name="tenPhim"
          control={control}
          render={({ field }) => (
            <Form.Item label="Tên Phim">
              <Input {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="trailer"
          control={control}
          render={({ field }) => (
            <Form.Item label="Trailer">
              <Input {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="moTa"
          control={control}
          render={({ field }) => (
            <Form.Item label="Mô Tả">
              <Input
                {...field}
                // value={movieInfo.moTa}
              />
            </Form.Item>
          )}
        />

        <Controller
          name="ngayKhoiChieu"
          control={control}
          render={({ field }) => (
            <Form.Item label="Ngày Khởi Chiếu">
              <DatePicker
                format={"DD/MM/YYYY"}
                {...field}
                onChange={handleChangeDatePicker}
              />
            </Form.Item>
          )}
        />

        <Controller
          name="dangChieu"
          control={control}
          render={({ field }) => (
            <Form.Item label="Đang Chiếu">
              <Switch {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="sapChieu"
          control={control}
          render={({ field }) => (
            <Form.Item label="Sắp Chiếu">
              <Switch {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="hot"
          control={control}
          render={({ field }) => (
            <Form.Item label="Hot">
              <Switch {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="danhGia"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Form.Item label="Đánh Giá">
              <InputNumber {...field} min={1} max={10} />
            </Form.Item>
          )}
        />
        <Form.Item label="Hình Ảnh">
          <input
            type="file"
            name="hinhAnh"
            {...register("hinhAnh")}
            accept="image/png, image/jpeg, image/jpg, image/gif"
          />
          <img
            src={imgPreview ? imgPreview : movieInfo.hinhAnh}
            style={{ width: 200, height: 200, position: "relative" }}
            alt=""
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = "https://picsum.photos/200/300";
            }}
          />
        </Form.Item>

        <Form.Item label="Button">
          <button className="buttonStyle" type="submit">
            Cập Nhật
          </button>
        </Form.Item>
      </Form>
    </>
  ) : (
    <div className="loader">
      <img src={img.spin} alt="" className="loading rotating" />
    </div>
  );
};

export default Edit;
