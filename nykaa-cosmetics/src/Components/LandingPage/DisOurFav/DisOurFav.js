import styles from "./DisOurFav.module.css";

function MyCard({ cardno }) {
  return (
    <div
      style={{
        minWidth: "300px",
        maxWidth: "300px",
        height: "400px",
        background: "black",
        margin: "10px",
        color: "white",
      }}
    >
      card No. {cardno}
    </div>
  );
}

export function DisOurFav() {
  
  const btnpressprev = () => {
  //   let width = "200px";
  //   box.scrollLeft = box.scrollLeft - width;
  //   console.log(width);
  let box = document.querySelector('.productContainer')
    box.scrollLeft -= 300;
  };

  const btnpressnext = () => {
    let box = document.querySelector('.productContainer')
    box.scrollLeft += 300;
    // console.log(width);
  };

  return (
    <div>
      <div className={styles.productCarousal}>
        <button onClick={btnpressprev} className={styles.preBtn}>
          <p>&lt;</p>
        </button>
        <button onClick={btnpressnext} className={styles.nextBtn}>
          <p>&gt;</p>
        </button>
        <div
          className="productContainer"
          style={{
            padding: "0 10px",
            display: "flex",
            overflowX: "hidden",
            scrollBehavior: "smooth",
          }}
        >
          <MyCard className="e" cardno="1" />
          <MyCard cardno="2" />
          <MyCard cardno="3" />
          <MyCard cardno="4" />
          <MyCard cardno="5" />
          <MyCard cardno="6" />
          <MyCard cardno="7" />
          <MyCard cardno="8" />
          <MyCard cardno="9" />
          <MyCard cardno="10" />
          <MyCard cardno="11" />
          <MyCard cardno="12" />
        </div>
      </div>
    </div>
  );
}
