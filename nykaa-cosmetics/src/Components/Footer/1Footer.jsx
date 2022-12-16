import { TopFooter } from "./TopFooter";
import { MidFooter } from './MidFooter';
import { ButtomFooter } from "./ButtomFooter";

export function Footer(){
return (
    <div style={{marginTop:'30px'}}>
        <TopFooter/>
        <MidFooter/>
        <ButtomFooter/>
    </div>
)
}