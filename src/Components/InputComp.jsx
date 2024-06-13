import React from "react";
import "./InputComp.scss"

const InputComp = React.forwardRef(
  ({ className = "", label, name, placeholder = "", ...props }, ref) => {
    return (
      <>
        <label className="lable-sty">{label}</label>
        <input type="text" className={`inp-field ${className}`} placeholder={placeholder} name={name} ref={ref} />
      </>
    );
  }
);

export default InputComp;
