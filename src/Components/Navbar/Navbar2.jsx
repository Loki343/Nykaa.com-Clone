import React from "react";
import styles from "./Navbar.module.css";
import { BiMobileAlt } from "react-icons/bi";
import { BiHelpCircle } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineGift } from "react-icons/ai";

const Navbar2 = () => {
  return (
    <div className={styles.mainDownNav}>
      <div className={styles.mainDownNav1}>
        <div style={{ fontWeight: "600" }}>
          Sale upto 50% off and get exciting offers on Cards
        </div>
        <div style={{ display: "flex", gap: "8px", fontWeight: "400" }}>
          <span style={{ marginTop: "4px" }}>
            <BiMobileAlt fontSize={"20px"} />
          </span>
          GET APP |
          <span style={{ marginTop: "4px" }}>
            <HiOutlineLocationMarker fontSize={"20px"} />
          </span>
          Store & Events |{" "}
          <span style={{ marginTop: "4px" }}>
            <AiOutlineGift fontSize={"20px"} />
          </span>
          Gift Cards |{" "}
          <span style={{ marginTop: "4px" }}>
            <BiHelpCircle fontSize={"20px"} />
          </span>
          Help
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
