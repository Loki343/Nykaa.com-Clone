import styles from "./BeautyAdvice.module.css";
import { SmallHead } from "./../SmallComp/SmallHead";


function MyCard({src,cap}) {
    return (
      <div
        style={{
          minWidth: "230px",
          maxWidth: "300px",
          height: "310px",
          marginRight: "25px",
          color: "white",
          position: "relative",
          marginLeft:'-10px',
          border:'1px solid rgb(220,220,220)',
          borderRadius:'10px'
        }}
      >
        <img
          src={src}
          width="100%"
          alt="i"
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}
        />
        <div
          style={{
            color: "black",
            position: "absolute",
            top: "250px",
            background: "rgba(255,255,255,0.64)",
            display: "block",
            width: "100%",
            height: "40px",
            paddingLeft: "15px",
            paddingTop:'6px',
            fontWeight:'600',
            fontSize:'17px'
          }}
        >
          {cap}
        </div>
      </div>
    );
  }

export function BeautyAdvice() {
  const btnpressprev = () => {
    let box = document.querySelector(".productContainer1");
    box.scrollLeft -= 300;
  };

  const btnpressnext = () => {
    let box = document.querySelector(".productContainer1");
    box.scrollLeft += 300;
  };
  return (
    <div>
      <SmallHead head="Beauty Advice" line="Discover Latest Tips & Tricks" />
      <div className={styles.mainDiv}>
        <div className={styles.each}>
          <img
            className={styles.img}
            src="https://images-static.nykaa.com/uploads/71c7558d-637c-40ee-b09b-7dfda35cf125.jpg?tr=w-600,cm-pad_resize"
            alt="i"
            width="100%"
          />
          <p className={styles.cap}>
            Catch Up On Top Trends, Expert Advice, Fresh Launches & More
          </p>
          <p className={styles.cap2}>Watch Now</p>
        </div>
        <div className={styles.each}>
          <img
            className={styles.img}
            src="https://images-static.nykaa.com/uploads/a3720b61-fd58-40ff-90cd-72eb5b5ee3d4.jpg?tr=w-600,cm-pad_resize"
            alt="i"
            width="100%"
          />
          <p className={styles.cap}>
            Catch Up On Top Trends, Expert Advice, Fresh Launches & More
          </p>
          <p className={styles.cap2}>Read More</p>
        </div>
      </div>

      <div className={styles.productCarousal}>
        <button onClick={btnpressprev} className={styles.preBtn}>
          <p>⇐</p>
        </button>
        <button onClick={btnpressnext} className={styles.nextBtn}>
          <p>⇒</p>
        </button>
        <div
          className="productContainer1"
          style={{
            padding: "0 10px",
            display: "flex",
            overflowX: "hidden",
            scrollBehavior: "smooth"
          }}
        >
          <MyCard
            src="https://images-static.nykaa.com/uploads/1208f0cc-cb69-4c28-8aa7-fe8da2dc1ad4.jpg?tr=w-240,cm-pad_resize"
            cap="On Entire Range"
          />
          <MyCard
            src="https://images-static.nykaa.com/uploads/7fe21db0-badf-4cb9-98e5-ef3f57523240.jpg?tr=w-240,cm-pad_resize"
            cap="The Holistic Nutrition"
          />
          <MyCard
            src="https://images-static.nykaa.com/uploads/c788bac1-8369-433f-beb6-3bbf032f9bed.jpg?tr=w-240,cm-pad_resize"
            cap="On Entire range"
          />
          <MyCard
            src="https://images-static.nykaa.com/uploads/af1d8eba-e91b-4952-bae0-5c42f4080a94.jpg?tr=w-240,cm-pad_resize"
            cap="Extra 5% Off "
          />
          <MyCard
            src="https://images-static.nykaa.com/uploads/b9984d64-309c-4ee2-829f-48376374ebaa.jpg?tr=w-240,cm-pad_resize"
            cap="More Beauty"
          />
          <MyCard
            src="https://images-static.nykaa.com/uploads/90cb2b2f-ce05-4e9b-bbf7-c2c7d1498fe8.jpg?tr=w-240,cm-pad_resize"
            cap="More sets"
          />
          <MyCard
            src="https://images-static.nykaa.com/uploads/af1ac090-6db8-4a71-9166-3a34d5c93db2.jpg?tr=w-240,cm-pad_resize"
            cap="On Makeup"
          />
          <MyCard
            src="https://images-static.nykaa.com/uploads/8f350915-b498-497b-b626-36bd29e98d2e.jpg?tr=w-240,cm-pad_resize"
            cap="Global Faves"
          />
        </div>
      </div>
    </div>
  );
}
