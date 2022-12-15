import styles from "./ButtomFooter.module.css";

export function ButtomFooter() {
  return (
    <>
    <div
      style={{
        background: "rgb(243,243,243)",
        height: "200px",
        fontFamily: "Inter, Roboto, Arial, sans-serif",
      }}
    >
      <div className={styles.mainDiv}>
        {/* 1st */}
        <div style={{ width: "20%", display: "flex"}}>
          <img
            src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg"
            alt="logo"
            width='25%'
          />
          <hr />
          <div style={{ marginLeft: "10px" }}>
            <p className={styles.head}>FREE SHIPPING</p>
            <p className={styles.line}>On Orders Above ₹299</p>
          </div>
        </div>
        {/* 2nd */}
        <div style={{ width: "20%", display: "flex"}}>
          <img
            src="https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg"
            alt="logo"
            width='25%'
          />
          <hr />
          <div style={{ marginLeft: "10px" }}>
            <p className={styles.head}>EASY RETURNS</p>
            <p className={styles.line}>15-Day Return Policy</p>
          </div>
        </div>
        {/* 3rd */}
        <div style={{ width: "20%", display: "flex"}}>
          <img
            src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg"
            alt="logo"
            width='25%'
          />
          <hr />
          <div style={{ marginLeft: "10px" }}>
            <p className={styles.head}>100% AUTHENTIC</p>
            <p className={styles.line}>Products Sourced Directly</p>
          </div>
        </div>
        {/* 4th */}
        <div style={{ width: "20%", display: "flex"}}>
          <img
            src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg"
            alt="logo"
            width='25%'
          />
          <hr />
          <div style={{ marginLeft: "10px" }}>
            <p className={styles.head}>1900+ BRANDS</p>
            <p className={styles.line}>1.2 Lakh+ Products</p>
          </div>
        </div>
        <div style={{ width: "20%"}}>
          <p style={{fontSize:'12px',textAlign:'center',fontWeight:'600',lineHeight:'16px',padding:'10px 10px'}}>Show us some love ❤ on social media</p>
          <div style={{display:'flex',marginLeft:'20px',gap:'7px'}}>
            <img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-instagram-filled.svg" alt="" />
            <img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-facebook-filled.svg" alt="" />
            <img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-youtube-filled.svg" alt="" />
            <img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-twitter-filled.svg" alt="" />
            <img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-pinterest-filled.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div style={{background:'rgb(252,39,121)'}}>
        <div style={{display:'flex',width:'35%',margin:'auto',gap:'20px'}}>
            <p style={{padding:'7px',color:'white',fontSize:'14px'}}>Terms & Conditions</p>
            <p style={{padding:'7px',color:'white',fontSize:'14px'}}>Shipping Policy</p>
            <p style={{padding:'7px',color:'white',fontSize:'14px'}}>Cancellation</p>
            <p style={{padding:'7px',color:'white',fontSize:'14px'}}>Privacy Policy</p>
        </div>
        <p style={{textAlign:'center',padding:'7px',fontSize:'13px',color:'white'}}>© 2022 Nykaa E-Retail Pvt. Ltd. All Rights Reserved.</p>
        <div style={{color:'white',height:'50px',background:'white'}}>kausik</div>
    </div>
    </>
  );
}
