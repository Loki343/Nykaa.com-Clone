import styles from "./GiftAtNykaa.module.css";
import { SmallHead } from "./../SmallComp/SmallHead";
// import { TwoImage } from "../OneImage/OneImage";

export function GiftAtNykaa() {
  return (
    <div>
      <div>
        <SmallHead head="Gifting At Nykaa" line="Give The Present of Beauty" />
        <div className={styles.TIdiv}>
          <img
            src="https://images-static.nykaa.com/uploads/a92dac26-400d-4158-af51-a7d247658835.jpg?tr=w-600,cm-pad_resize"
            alt=""
            className={styles.twoImage}
          />
          <img
            src="https://images-static.nykaa.com/uploads/fc68d953-2b29-42f9-8df6-5ee176ad8d01.jpg?tr=w-600,cm-pad_resize"
            alt=""
            className={styles.twoImage}
          />
        </div>
      </div>
    </div>
  );
}
