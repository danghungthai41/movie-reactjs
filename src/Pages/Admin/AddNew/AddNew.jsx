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
import { useForm, Controller } from "react-hook-form";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addNewMovie } from "../../../Redux/action/movieManagement";

export default function AddNew() {
  const dispatch = useDispatch();
  const [imgPreview, setImgPreview] = useState("");
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
    control,
    setValue,
    getValues,
    value,
  } = useForm({
    defaultValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      maNhom: "GP09",
      hinhAnh: null,
    },
  });

  const watchImg = watch("hinhAnh", []);

  useEffect(() => {
    if (!watchImg[0]) return;
    const fileReader = new FileReader();

    fileReader.readAsDataURL(watchImg[0]);
    fileReader.onload = (e) => {
      setImgPreview(e.target.result);
    };
  }, [watchImg]);

  const onSubmit = (values) => {
    const formData = new FormData();
    for (const key in values) {
      if (key !== "hinhAnh"){
        formData.append(key, values[key]);
      } else {
        formData.append('hinhAnh', values.hinhAnh[0]);
      }
    }
    dispatch(addNewMovie(formData));
  };
  const handleChangeDatePicker = (values) => {
    setValue("ngayKhoiChieu", moment(values).format("DD/MM/YYYY"));
  };

  return (
    <>
      <h1 style={{ fontSize: 24 }}>THÊM PHIM MỚI</h1>
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
              <Input {...field} />
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
                value={value}
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
              <InputNumber {...field} min={1} max={10} defaultValues={1} />
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
            src={imgPreview}
            style={{ width: 200, height: 200, position: "relative" }}
            alt=""
          />
        </Form.Item>

        <Form.Item label="Button">
          <button className="buttonStyle" type="submit">
            Thêm Phim
          </button>
        </Form.Item>
      </Form>
    </>
  );
}
