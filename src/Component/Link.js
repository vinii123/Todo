import React from "react";

const Link = ({ active, onClick, children }) => {
  return (
    <div>
      <button
      onClick={onClick }
      disabled={active}
      style={{marginLeft: '4px'}}
      >{children}</button>
    </div>
  );
};

export default Link;
