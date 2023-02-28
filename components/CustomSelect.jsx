import { Field, useFormikContext, ErrorMessage } from "formik";
import { useEffect, useState } from "react";

const CustomSelect = ({ title, price_str, price_num, piece, product_id, id }) => {
  const { values, setFieldValue } = useFormikContext();
  const [size, setSize] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [])

  const onChange = (event) => {
    setSize(event.target.value);
    setFieldValue("product", {
      ...values.product,
      options2: event.target.value
    });
};

  const options = [
    { value: '', label: 'SELECT SIZE' },
    { value: 'S', label: 'Small' },
    { value: 'M', label: 'Medium' },
    { value: 'L', label: 'Large' },
    { value: 'XL', label: 'XLarge' },
    { value: '2XL', label: '2XLarge' },
    { value: '3XL', label: '3XLarge' },
  ];
  return (
    <div className="div-block-89">
      <div
        style={{
            width:"100%",
            padding: "40px 0 40px 0",
            color: "black",
            fontSize: windowWidth > 720 ? "20px" : "15px",
            lineHeight: "20px"
        }}>
        <select
          // name={name}
          value={size}
          onChange={(e) => onChange(e)}
          onBlur={() => setFieldValue("sizeTouched", true)}
          // disabled={disabled}
          style={{
              width:"100%",
              padding: "5px",
              color: "black",
              fontSize: windowWidth > 720 ? "20px" : "15px",
              lineHeight: "20px",
              borderRadius: "6px",
              display: "flex",

          }}>
          {options.map(option => (
            <option key={option.value}
              value={option.value}
              style={{
                  width:"100%",
                  padding: "0px 40px 0 40px",
                  color: "black",
                  fontSize: windowWidth > 720 ? "20px" : "15px",
                  lineHeight: "20px"
              }}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;
