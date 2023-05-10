import styles from "./MidFooter.module.css";

export function MidFooter(){
return (
    <div style={{background:'gray',height:'auto',fontFamily:'Inter, Roboto, Arial, sans-serif'}}>
        <div className={styles.mainDiv}>
            {/* 1st */}
        <div style={{width:'20%'}}>
            <p style={{fontSize:'28px',color:'white',fontWeight:'600'}}>Nykaa</p>
            <p className={styles.each}>Who are we?</p>
            <p className={styles.each}>Careers</p>
            <p className={styles.each}>Authenticity</p>
            <p className={styles.each}>Press</p>
            <p className={styles.each}>Testimonials</p>
            <p className={styles.each}>Responsible Disclosure</p>
            <p className={styles.each}>Investor Relation</p>
            <p className={styles.each}>Who are we?</p>
        </div>
        {/* 2nd */}
        <div style={{width:'20%'}}>
            <p className={styles.head}>Help</p>
            <p className={styles.each}>Contact us</p>
            <p className={styles.each}>Frequently asked question</p>
            <p className={styles.each}>Store location</p>
            <p className={styles.each}>Cancellation & return</p>
            <p className={styles.each}>Shipping & Delivery</p>
            <p className={styles.each}>Sell on Nykaa</p>
        </div>
        {/* 3rd */}
        <div style={{width:'20%'}}>
            <p className={styles.head}>Inspire Me</p>
            <p className={styles.each}>Beauty Book</p>
            <p className={styles.each}>Nykaa TV</p>
            <p className={styles.each}>Nykaa Networks</p>
            <p className={styles.each}>Buying Guides</p>
        </div>
        {/* 4th */}
        <div style={{width:'20%'}}>
            <p className={styles.head}>Quick Links</p>
            <p className={styles.each}>Offer zone</p>
            <p className={styles.each}>New Launches</p>
            <p className={styles.each}>Nykaa Man</p>
            <p className={styles.each}>Nykaa Fashion</p>
            <p className={styles.each}>Nykaa Pro</p>
           
        </div>
        {/* 5th */}
        <div style={{width:'20%'}}>
            <p className={styles.head}>Top Categories</p>
            <p className={styles.each}>Makeup</p>
            <p className={styles.each}>Skin</p>
            <p className={styles.each}>Hair</p>
            <p className={styles.each}>Bath & Beauty</p>
            <p className={styles.each}>Appliances</p>
            <p className={styles.each}>Mom and Baby</p>
            <p className={styles.each}>Wellness</p>
            <p className={styles.each}>Fragrance</p>
            <p className={styles.each}>Natural</p>
            <p className={styles.each}>Luxe</p>
        </div>
        </div>
    </div>
)
}