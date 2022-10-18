import React from "react";
import sUsd from "../images/sUSD.svg";
const MintScreen = () => {

  const mintcustom=async()=>
  {
     console.log("Clicked");
  }

  const unstakeBtn=async()=>
  {
     console.log("Clicked unstakeBtn");
  }

  return (
    <>
      <div className="row mt-5">
        <div className="col-lg-12 ">
       
          <button className="btn MintCustom pt-4 text-white " onClick={mintcustom}>
            <img src={sUsd} width="40px" /> <br />
            <p className="mt-2 "> MINT CUSTOM </p>
            <p className=" mintPar"  style={{marginTop:'-1rem'}}>Mint the maximum amount of sUSD</p>

          </button>
        </div>
        <div className="col-lg-12 mt-3">
        <button className="btn MintCustom pt-4 text-white " onClick={unstakeBtn}>
            <img src={sUsd} width="40px" /> <br />
            <p className="mt-2 text-white "> UNSTAKE </p>
            <p className=" mintPar"  style={{marginTop:'-1rem'}}>Mint the maximum amount of sUSD</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default MintScreen;
