import styles from "./OneImage.module.css";

export function OneImage({ src }) {
  return (
    <div>
      <div className={styles.mainDiv}>
        <img width="100%" src={src} alt="" className={styles.image} />
      </div>
    </div>
  );
}

export function TwoImage() {
  return (
    <div>
      <div className={styles.TIdiv}>
      <img src='https://images-static.nykaa.com/uploads/c7ae3973-167e-4ce1-b572-1364e1f5c2e2.jpg?tr=w-600,cm-pad_resize' alt="" className={styles.twoImage} />
      <img src='https://images-static.nykaa.com/uploads/14dab399-cf31-4731-992e-1845321187d6.jpg?tr=w-600,cm-pad_resize' alt="" className={styles.twoImage} />
      </div>
    </div>
  );
}
