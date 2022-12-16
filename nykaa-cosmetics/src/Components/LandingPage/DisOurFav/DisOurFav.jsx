import { Heading } from "@chakra-ui/react";
import { SmallHead } from "../SmallComp/SmallHead";
import styles from "./DisOurFav.module.css";
import { OneImage } from './../OneImage/OneImage';

export function MyCard({src,cap}) {
  return (
    <div
      style={{
        minWidth: "230px",
        maxWidth: "300px",
        height: "310px",
        marginRight: "25px",
        color: "white",
        position: "relative",
        marginLeft:'-10px'
      }}
    >
      <img
        src={src}
        width="100%"
        alt="i"
        style={{ borderRadius: "10px" }}
      />
      <div
        style={{
          color: "black",
          position: "absolute",
          top: "270px",
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

export function DisOurFav() {
  const btnpressprev = () => {
    let box = document.querySelector(".productContainer");
    box.scrollLeft -= 300;
  };

  const btnpressnext = () => {
    let box = document.querySelector(".productContainer");
    box.scrollLeft += 300;
  };

  return (
    <div>
      <SmallHead head='Discover Our Favourites' line='Selection Of Our Finest 10 Products'/>
      <OneImage src='https://images-static.nykaa.com/uploads/82eed1ab-64b2-4cb9-818b-9b39cd9284ec.jpg?tr=w-1200,cm-pad_resize'/>
      <div className={styles.productCarousal}>
        <button onClick={btnpressprev} className={styles.preBtn}>
          <p>⇐</p>
        </button>
        <button onClick={btnpressnext} className={styles.nextBtn}>
          <p>⇒</p>
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
          <MyCard src="https://images-static.nykaa.com/uploads/4162f650-31a3-4d41-a420-ac02caccce89.jpg?tr=w-240,cm-pad_resize" cap="Highlighters"/>
          <MyCard src='https://images-static.nykaa.com/uploads/b21dc0cc-ff53-44e6-988c-624c0cc95c18.jpg?tr=w-240,cm-pad_resize' cap='Moisturisers'/>
          <MyCard src='https://images-static.nykaa.com/uploads/d8c3d941-15e0-442c-80c9-a1b57e54495b.jpg?tr=w-240,cm-pad_resize' cap='Fragrances' />
          <MyCard src='https://images-static.nykaa.com/uploads/144c95cd-e1d3-4b0d-8d5a-a9ecda42e737.jpg?tr=w-240,cm-pad_resize' cap='Foundations' />
          <MyCard src='https://images-static.nykaa.com/uploads/4ea35342-cbb3-44ef-a556-9f1c0f749d93.jpg?tr=w-240,cm-pad_resize' cap='Feminine' />
          <MyCard src='https://images-static.nykaa.com/uploads/0d1737ff-11ae-42e4-95df-937ef71a752b.jpg?tr=w-240,cm-pad_resize' cap='More sets' />
          <MyCard src='https://images-static.nykaa.com/uploads/8d0d6d65-4c38-461a-8fa2-81c43b4e3052.jpg?tr=w-240,cm-pad_resize' cap='Eyeliners'/>
          <MyCard src='https://images-static.nykaa.com/uploads/58177876-f4ee-4744-ae45-642ba8b97a4d.jpg?tr=w-240,cm-pad_resize' cap='Body Lotions' />
          <MyCard src='https://images-static.nykaa.com/uploads/c99834e6-8953-41b7-bfe4-a75a84db09a6.jpg?tr=w-240,cm-pad_resize' cap='Moisturiser' />
          <MyCard src='https://images-static.nykaa.com/uploads/144c95cd-e1d3-4b0d-8d5a-a9ecda42e737.jpg?tr=w-240,cm-pad_resize' cap='Foundations'/>
        </div>
      </div>
    </div>
  );
}
