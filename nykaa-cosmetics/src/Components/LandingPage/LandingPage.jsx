import { DisOurFav } from "./DisOurFav/DisOurFav";
import { OneImage, TwoImage } from "./OneImage/OneImage";
import { OnlyAtNykaa } from "./OnlyAtNykaa/OnlyAtNykaa";
import { SlideShow } from "./SlideshowButton/Slideshow";
import { TopBrands } from "./TopBrands/TopBrands";
export function LandingPage() {
  return (
    <div>
      <SlideShow />
      <OneImage src='https://images-static.nykaa.com/uploads/ede59af5-1112-4c73-bbf8-e0aa0c08444b.jpg?tr=w-1200,cm-pad_resize'/>
      <TopBrands/>
      <TwoImage/>
      <OnlyAtNykaa/>
      <DisOurFav/>
    </div>
  );
}
