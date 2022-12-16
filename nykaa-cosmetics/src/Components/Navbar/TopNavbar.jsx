import styles from "./TopNavbar.module.css";
export function TopNavbar() {
  return (
    <div style={{position:'sticky',top:'0px',zIndex:'10'}}>
      <div className={styles.mainDiv}>
        <div className={styles.innerDiv}>
          <div>BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals</div>
          <div style={{display:'flex',alignItems:'centre',gap:'5px'}}>
            <img className={styles.logo} src="https://cdn-icons-png.flaticon.com/128/244/244210.png" alt="" />
            <span className={styles.logoText}>Get App |</span>
            <img className={styles.logo} src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png" alt="" />
            <span className={styles.logoText}>Store & Events |</span>
            <img className={styles.logo} src="https://cdn-icons-png.flaticon.com/128/1332/1332607.png" alt="" />
            <span className={styles.logoText}>Gift Card |</span>
            <img className={styles.logo} src="https://cdn-icons-png.flaticon.com/128/906/906794.png" alt="" />
            <span className={styles.logoText}>Help</span>
          </div>
        </div>
      </div>
    </div>
  );
}
