import React, { useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Cascader,
  DatePicker,
  InputNumber,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCinemaByCode,
  fetchCinemaList,
} from "../../../Redux/action/cinema";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Controller, useForm } from "react-hook-form";
import moment from "moment";
import request from "../../../configs/axios";
import Swal from "sweetalert2";
const { Item } = Form;
export default function ShowTimeAdmin() {
  const dispatch = useDispatch();
  const { tenPhim, maPhim } = useParams();
  const { cinemaList, theaterList } = useSelector((state) => state.cinema);
  useEffect(() => {
    dispatch(fetchCinemaList);
  }, []);
  const handleChangeCinema = (value) => {
    dispatch(fetchCinemaByCode(value[0]));
  };
  const handleChangeTheater = (value) => {
    console.log("handleChangeTheater", value);
  };
  // const handleChangeDate = (value) => {};
  // const onOk = (value) => {};
  // const handleChangeInputNumber = (value) => {};
  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      maPhim,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: 0,
    },
  });
  const onSubmit = async (values) => {
   let showTimeSubmit = {...values}
    for (const key in values) {
      if(key === "ngayChieuGioChieu"){
        showTimeSubmit ={...showTimeSubmit, ngayChieuGioChieu: moment(values[key]).format("DD/MM/YYYY hh:mm:ss")}
      } else if (key === "maRap"){
        showTimeSubmit ={...showTimeSubmit, maRap: values[key][0]}
      }
    }
    try {
      await request({
        url: "http://movieapi.cyberlearn.vn/api/QuanLyDatVe/TaoLichChieu",
        method: "POST",
        data: showTimeSubmit
      })
      Swal.fire({
        title: "Thêm Lịch Chiếu Thành Công",
        icon: "success"
      })
    } catch (error) {
      console.log(error.response?.data.content)
    } 
  };
  return (
    <div className="p-4">
      <h1>
        Tạo Lịch Chiếu Phim <span className="text-danger">{tenPhim}</span>{" "}
      </h1>
      <Form
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
        onSubmitCapture={handleSubmit(onSubmit)}
      >
        <Item label="Hệ Thống Rạp">
          <Cascader
            options={cinemaList?.map(({ tenHeThongRap, maHeThongRap }) => ({
              label: tenHeThongRap.toUpperCase(),
              value: maHeThongRap,
            }))}
            onChange={handleChangeCinema}
            placeholder="Chọn Hệ Thống Rạp"
          />
        </Item>

        <Controller
          name="maRap"
          control={control}
          render={({ field }) => (
            <Item label="Cụm Rạp">
              <Cascader
                options={theaterList?.map(({ tenCumRap, maCumRap }) => ({
                  label: tenCumRap,
                  value: maCumRap,
                }))}
                onChange={handleChangeTheater}
                placeholder="Chọn Cụm Rạp"
                {...field}
              />
            </Item>
          )}
        />

        <Controller
          name="ngayChieuGioChieu"
          control={control}
          render={({ field }) => (
            <Item label="Ngày Chiếu Giờ Chiếu">
              <DatePicker
                showTime
                format={"DD/MM/YYYY hh:mm:ss"}
                // onChange={handleChangeDate}
                // onOk={onOk}
                placeholder="Chọn Ngày Giờ Chiếu"
                style={{
                  width: "100%",
                }}
                {...field}
              />
            </Item>
          )}
        />
        <Controller
          name="giaVe"
          control={control}
          render={({ field }) => (
            <Item label="Giá Vé">
              <InputNumber
                min={75000}
                max={150000}
                // onChange={handleChangeInputNumber}
                placeholder="Nhập Giá Vé (75,000đ - 150,000đ)"
                style={{
                  width: "100%",
                }}
                {...field}
              />
            </Item>
          )}
        />

        <div className="text-center">
          <Button htmlType="submit" className="buttonStyle mr-5">
            Tạo Lịch Chiếu
          </Button>
        </div>
      </Form>
    </div>
  );
}
