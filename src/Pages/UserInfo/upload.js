import React from "react";
import { IconButton, Avatar } from "@material-ui/core";
import img from "../../Theme/icons";
export default function File() {
  const [file, setFile] = React.useState(
    localStorage.getItem("avatar")
      ? JSON.parse(localStorage.getItem("avatar"))
      : img.catCry
  );

  const handleChange = function loadFile(event) {
    if (event.target.files.length > 0) {
      const file = URL.createObjectURL(event.target.files[0]);
      setFile(file);
      localStorage.setItem("avatar", JSON.stringify(file));
    }
  };
  return (
    <div className="App">
      <input
        type="file"
        onChange={handleChange}
        id="upload"
        accept="image/*"
        style={{ display: "none" }}
      />
      <label htmlFor="upload">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <Avatar
            id="avatar"
            src={file}
            style={{
              width: "200px",
              height: "200px",
              border: "4px solid #fff",
            }}
          />
        </IconButton>
      </label>
      <label htmlFor="avatar" />
    </div>
  );
}
