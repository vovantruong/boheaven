import React from "react";
import classNames from "classnames/bind";
import styles from "./SelectOption.module.scss";
import Select from "react-select";

const cx = classNames.bind(styles);

const customStyleSelect = {
  control: (provided, state) => ({
    // ...provided,
    display: "flex",
    height: "3.4rem",
    alignItems: "center",
    background: "transparent",
    border: "1px solid #ABABAB",
    borderRadius: "4px",
    cursor: 'text',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "#cbcdd0",
  }),
  indicatorSeparator: () => ({}),
};

const SelectOption = ({
  className,
  options,
  value,
  onChange,
  placeholder = "Select...",
}) => {
  return (
    <Select
      className={cx(className)}
      styles={customStyleSelect}
      placeholder={placeholder}
      options={options}
      onChange={onChange}
      value={value}
      defaultValue={value}
    />
  );
};
export default SelectOption;
