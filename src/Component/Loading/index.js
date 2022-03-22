import React, { Fragment } from "react";
import { HashLoader } from "react-spinners";
import { css } from "@emotion/react";

export default function Loader() {
  const override = css`
    display: block;
    margin: 0 auto;
  `;
  return (
    <div className="loader">
      <div className="loading">
        <HashLoader color={"00ffff"} loading={true} css={override} size={50} />
      </div>
    </div>
  );
}
