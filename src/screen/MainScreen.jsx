import React from "react";
import { Tabs, Card} from "antd";
import MintScreen from "./MintScreen";
import BurnScreen from './BurnScreen';
import "../App.css"
const MainScreen = () => {
  const data = [
    "Total.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  const { TabPane } = Tabs;
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-4 text-white text-center text-lg-center upperDiv">
            <p>STAKED VALUE</p>
            <h1 className="text-white">$0.00</h1>
          </div> 
          <div className="col-lg-4 text-center mt-4 mt-lg-0 text-white upperDiv">
            <div>
              <p>C-RATIO</p>
              <h1 className="text-white">-% </h1>
            </div>
          </div>
          <div className="col-lg-4  text-center text-white upperDiv">
            <p>ACTIVE DEBT</p>
            <h1 className="text-white">$0.00</h1>
          </div>
        </div>
      </div>
      <hr style={{ background: "#fff" }} />

      <div className="container mx-4">
        <div className="row">
          <div className="col-lg-8 text-center">
            <div>
              <Tabs defaultActiveKey="1">
                <TabPane tab="MINT" key="1"  className="tabClass">
                <MintScreen/>
 
                </TabPane>
                <TabPane tab="BURN" key="2" className="tabClass1">
                  <BurnScreen/>
                </TabPane>
              </Tabs>
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <Card style={{ width: 300 }}>
              <h5>Mint sUSD by staking SNX</h5>
              <p>
                Burn your sUSD debt to unlock your staked SNX. This will
                increase your Collateralization Ratio and reduce your debt.
                Learn more.
              </p>

              <div className="d-flex justify-content-between">
                <p>Total</p>
                <p>0.0000 SNX</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Staked</p>
                <p>0.0000 SNX</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>TRANSFERABLE</p>
                <p>0.0000 SNX</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>C-RATIO</p>
                <p>0.0000 SNX</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>SUSD BALANCE</p>
                <p>0.0000 SNX</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>TOTAL DEBT</p>
                <p>0.0000 SUSD</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainScreen;
