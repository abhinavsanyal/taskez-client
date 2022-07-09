import React from "react";
import errorIcon from "./errorIcon.png";
export const ErrorText = ({ msg }) => {
  return (
    <div
      style={{
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "11px",
        lineHeight: "13px",
        color: "#F65B2A",
        display: "flex",
        gap:"10px"
      }}
    >
      {" "}
      <img src={errorIcon} /> {msg}
    </div>
  );
};

export const displayError = (client_errors, server_error) => {
  if (Object.keys(client_errors).length === 0  && !server_error) {
    return  null;
  } else if( Object.keys(client_errors).length > 0 && !server_error) {
    return <ErrorText msg={Object.values(client_errors)[0]} />
  } else if( server_error && Object.keys(client_errors).length === 0) {
    return <ErrorText msg={server_error} />
  } else {
    return null;
  }
}
