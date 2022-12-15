import styles from "./TopBrands.module.css";
import { SmallHead } from './../SmallComp/SmallHead';

 export function EachDiv({ src, head, line }) {
  return (
    <>
      <div className={styles.each}>
        <img src={src} alt="i" className={styles.img} />
        <div>
          <h1 className={styles.head}>{head}</h1>
          <p className={styles.line}>{line}</p>
        </div>
      </div>
    </>
  );
}

export function TopBrands() {
  return (
    <div>
      <SmallHead head='Top Brands' line='In The Spotlight'/>
      <div className={styles.mainDiv}>
        <EachDiv
          src="https://images-static.nykaa.com/uploads/1627c7ba-910a-4517-b98c-e3be18ad9f72.gif?tr=w-400,cm-pad_resize"
          head="Picture Perfect Hair, Picture Perfect Journeys"
          line="Pick a travel combo kit on ₹1859, Mini on ₹1199"
        />
        <EachDiv
          src="https://images-static.nykaa.com/uploads/bf97e2a2-52b2-4dd4-bc35-bf5d5295abbb.jpg?tr=w-400,cm-pad_resize"
          head="Up To 15% Off"
          line="#1 Dermatologist Recommended Brand in India"
        />
        <EachDiv
          src="https://images-static.nykaa.com/uploads/d623abec-7014-49f6-8143-7d6b30d3342f.jpg?tr=w-400,cm-pad_resize"
          head="e.l.f.ing amazing new launches"
          line="Flat 15% off + lipstick on ₹799"
        />
        <EachDiv
          src="https://images-static.nykaa.com/uploads/29721c46-753f-434a-8da5-037422f1c780.jpg?tr=w-400,cm-pad_resize"
          head="Up To 35% Off"
          line="Makeup That Stays Through The Day!"
        />
        <EachDiv
          src="https://images-static.nykaa.com/uploads/5abf6c68-ac00-49d8-ad4b-76da5c1b8df1.png?tr=w-400,cm-pad_resize"
          head="25% Off On Combos + Face Scrub On ₹799"
          line="Build Your Winter Anti-Dandruff Routine"
        />
        <EachDiv
          src="https://images-static.nykaa.com/uploads/d75e91cc-9456-4440-9c06-5ff5d447d97d.jpg?tr=w-400,cm-pad_resize"
          head="Flat 10% Off On The Entire Range"
          line="Quality Haircare Without Compromise"
        />
        <EachDiv
          src="https://images-static.nykaa.com/uploads/90f9bebe-9dd1-46b4-9c5a-4bced3e570c8.jpg?tr=w-400,cm-pad_resize"
          head="Up To 20% Off"
          line="On Entire Range"
        />
        <EachDiv
          src="https://images-static.nykaa.com/uploads/38886827-0fd8-431a-86fe-b3808ad3e3c2.jpg?tr=w-400,cm-pad_resize"
          head="Holiday Gift Set Up To 40% Off"
          line="+ Exciting Gifts on purchase!"
        />
        <EachDiv
          src="https://images-static.nykaa.com/uploads/697352c8-e151-4e34-87ad-2ad6d5e4ed26.jpg?tr=w-400,cm-pad_resize"
          head="Complete Your Party Look In Minutes"
          line="With Huda Beauty's Lovefest Collection"
        />
      </div>
    </div>
  );
}
