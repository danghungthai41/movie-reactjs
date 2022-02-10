import React from "react";

// class LstGhe {
//   selectedLstSeat=[];
//   abc (){
//   }
  
// }
export default function SeatItem(props) {
  const { gheItem, danhSachGhe } = props;
  const checkLoaiGhe = () => {
    switch (gheItem.loaiGhe) {
      case "Thuong":
        return " thuong";
      case "Vip":
        return " vip";
      default:
        break;
    }
  };
  return (
    <div
      className={`checkOutLeft__seatItem${checkLoaiGhe(gheItem.loaiGhe)}`}
    >
      {gheItem.tenGhe}
    </div>
  );
}
