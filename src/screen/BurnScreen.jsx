import React from "react";
import { Input, Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

const BurnScreen = () => {
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  return (
    <>
      <div className="row mt-5">
        <div className="col-lg-7 ">
          <Input placeholder="Please Approve" />
        </div>
        <div className="col-lg-5 d-flex">
      <span className="ms-1 text-white me-2"> Approve/Harvest</span> 
          <Switch
            
            defaultChecked
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

export default BurnScreen;
