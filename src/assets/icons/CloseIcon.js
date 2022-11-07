import React from "react";

function CloseIcon({ fill }) {
  return (
    <svg
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="24px"
      height="24px"
      style={{cursor:'pointer'}}
    >
      <path
        fill="none"
        stroke={fill}
        stroke-miterlimit="10"
        stroke-width="4"
        d="M7.741 7.741L42.359 42.359M42.258 7.742L7.618 42.382"
      />
    </svg>
  );
}

export default CloseIcon;
