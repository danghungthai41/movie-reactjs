import React, { Fragment } from "react";

// import styled from "styled-components";

// const Loading = styled.div`
//   border: 16px solid #f3f3f3;
//   border-radius: 50%;
//   border-top: 16px solid #3498db;
//   width: 120px;
//   height: 120px;
//   -webkit-animation: spin 2s linear infinite; /* Safari */
//   animation: spin 2s linear infinite;
//   position: absolute;
//   left: 50%;
//   top: 50%;
// `;

export default function Loader() {
  return (
    <div
      class="lds-default"
      Style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
     <div className="text-4xl text-dark">Loading ...</div>
    </div>
  );
}

// ${(props) => (props.primary ? "#3498db" : "red")}
