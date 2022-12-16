import { useEffect, useState } from "react";
import { SmallHead } from "../SmallComp/SmallHead";
import styles from "./Slideshow.module.css";
const image1 =
  "https://images-static.nykaa.com/uploads/efecb96d-ecf8-4500-9fd0-d4f57f5e0ec2.png?tr=w-1200,cm-pad_resize";
const image2 =
  "https://images-static.nykaa.com/uploads/d8eed4c9-cdcc-499c-824d-311f3328a89e.jpg?tr=w-1200,cm-pad_resize";
const image3 =
  "https://images-static.nykaa.com/uploads/11cb1bfe-6fe8-4edf-b183-fbb6f519ba39.jpg?tr=w-1200,cm-pad_resize";
const image4 =
  "https://images-static.nykaa.com/uploads/d8c7c209-0ec1-4c12-9073-c84a7d57805e.jpg?tr=w-1200,cm-pad_resize";
const image5 =
  "https://images-static.nykaa.com/uploads/42f8176c-8ca3-43e1-991a-32dfa4ca16f7.jpg?tr=w-1200,cm-pad_resize";
const image6 =
  "https://images-static.nykaa.com/uploads/5f623509-6454-4857-9e39-b48ac1364dad.png?tr=w-1200,cm-pad_resize";

export function SlideShow() {
  const [selectedImage, setSelectedImage] = useState(0);
  const allImage = [image1, image2, image3, image4, image5, image6];

  useEffect(() => {
    setInterval(() => {
      setSelectedImage((selectedImage) =>
        selectedImage > 4 ? 0 : selectedImage + 1
      );
    }, 4000);
  }, []);

  return (
    <div>
      <SmallHead head="Best In Beauty" line="Today's Top Offers" />
      <div className={styles.mainDiv}>
        <img
          className={styles.img}
          src={allImage[selectedImage]}
          width="100%"
          alt=" img"
        />
        <button
          className={styles.leftButton}
          onClick={() => {
            if (selectedImage > 0) setSelectedImage(selectedImage - 1);
          }}
        >
          ⇐
        </button>
        <button
          className={styles.rightButton}
          onClick={() => {
            if (selectedImage < allImage.length - 1)
              setSelectedImage(selectedImage + 1);
          }}
        >
          ⇒
        </button>
      </div>
    </div>
  );
}
