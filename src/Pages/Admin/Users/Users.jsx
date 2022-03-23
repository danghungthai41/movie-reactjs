import React, { useEffect, useState } from "react";
import { IoTrashOutline, IoPencilOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Input, Table } from "antd";
import { NavLink } from "react-router-dom";
import { fetchUsersList } from "../../../Redux/action/usersManagement";
import request from "../../../configs/axios";
import Swal from "sweetalert2";
const Search = Input;
export default function Users() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchUser, setSearchUser] = useState("");
  const [newUsersList, setNewUsersList] = useState();

  const { usersList } = useSelector((state) => state.usersManagement);
  useEffect(() => {
    dispatch(fetchUsersList());
  }, []);
  useEffect(() => {
    if (usersList.length < 1) return;
    const filterData = usersList.filter((user) =>
      user.hoTen.toLowerCase().includes(searchUser.toLowerCase())
    );
    setNewUsersList(filterData.reverse());
  }, [searchUser, usersList]);

  const handleDeleteUser = async (taiKhoan) => {
    request({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: "DELETE",
      data: taiKhoan,
    })
      .then((res) => {
        Swal.fire({
          title: "Xóa Thành Công",
          icon: "success",
        });
      })
      .catch((err) => {
        Swal.fire({
          title: err.response?.data,
          icon: "warning",
        });
      });
  };
  const columns = [
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
    },
    {
      title: "Họ & Tên",
      dataIndex: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "soDt",
    },
    {
      title: "Mã Loại Người Dùng",
      dataIndex: "maLoaiNguoiDung",
    },
    {
      title: "Hành Động",
      dataIndex: "hanhDong",
      render: (text, desc) => (
        <>
          <p
            className="text-center"
            onClick={() => handleDeleteUser(desc.taiKhoan)}
            style={{ color: "#fb4226" }}
          >
            <IoTrashOutline />
          </p>
          {/* <span
            style={{ cursor: "pointer" }}
          >
            <IoPencilOutline />
          </span> */}
        </>
      ),
    },
  ];
  const data = newUsersList;

  return (
    <div className="p-4">
      <h2>Quản Lý Khách Hàng</h2>
      <Input
        className="mb-3"
        placeholder="Tìm Kiếm Khách Hàng"
        onChange={(e) => setSearchUser(e.target.value)}
      />
      {/* <NavLink to="/dashboard/addnew">
        <button className="buttonStyle mb-2">Thêm Khách Hàng</button>
      </NavLink> */}
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
