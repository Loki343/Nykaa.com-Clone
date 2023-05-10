import styles from "./OnlyAtNykaa.module.css";
import { SmallHead } from "./../SmallComp/SmallHead";
import { EachDiv } from "../TopBrands/TopBrands";

export function OnlyAtNykaa() {
  return (
    <div style={{ marginTop: "50px", background: "rgb(255,246,249)" }}>
      <SmallHead
        head="Only At Nykaa"
        line="Exciting Deals On Exclusive Brands"
      />
      <div className={styles.mainDiv}>
        <EachDiv
          src="https://images-static.nykaa.com/uploads/f6b40ada-c1cb-4541-832d-98f33e59ba59.png?tr=w-400,cm-pad_resize"
          head="Upto 20% Off + Free Face Scrub on Rs.799"
          line="Gold Infused Skincare"
        />
        <EachDiv
          src="https://images-static.nykaa.com/uploads/d9243659-d500-4168-82b2-5a64a557b0d0.jpg?tr=w-400,cm-pad_resize"
          head="2 Bestseller Minis On All Orders"
          line="Irresistibly Scented, Moisturising Body Besties!"
        />
        <EachDiv
          src="https://images-static.nykaa.com/uploads/908fe2ff-8770-4537-b90a-a308cfcbc766.jpg?tr=w-400,cm-pad_resize"
          head="Up To 40% off"
          line="Buy 3 get an additional 5% off"
        />
        <EachDiv
          src="https://images-static.nykaa.com/uploads/dfec4b31-ef3f-4b0e-9cc4-2ba669b8711b.jpg?tr=w-400,cm-pad_resize"
          head="Min 20% Off; Combos Under 599"
          line="Secret Santa Gifting Guide"
        />
        <EachDiv
          src="https://images-static.nykaa.com/uploads/0a5105a3-c88e-4e35-ac1b-9e87752bd5bb.jpg?tr=w-400,cm-pad_resize"
          line="Exciting offers waiting for you"
          head="On ₹3000: 4 Piece Gift Set"
        />
        <EachDiv
          src="https://images-static.nykaa.com/uploads/a21a0d6b-958c-4b8a-b02d-6c33844ef0bb.jpg?tr=w-400,cm-pad_resize"
          line="Sample On All Orders"
          head="₹950 Gifts On ₹1100"
        />
      </div>
    </div>
  );
}
