import styles from "./TopFooter.module.css";
import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

export function TopFooter() {
  return (
    <div style={{ background: "#3f414d" }}>
      <div className={styles.mainDiv}>
        {/* sec1 */}
        <div style={{ width: "33.3%" }}>
          <div style={{ display: "flex", marginTop: "15%" }}>
            <img
              width="20px"
              src="https://cdn-icons-png.flaticon.com/128/4457/4457168.png"
              alt="msg-logo"
            />
            <Text fontWeight="500" color="white" fontSize="14px">
              Get special discount on your inbox
            </Text>
          </div>
          <div style={{ display: "flex",marginTop:"8px" }}>
            <Input
              height="28px"
              width="180px"
              background="transparent"
              type="text"
              placeholder="Your Email"
              fontSize="15px"
              textColor="white"
              borderRadius=''
            />
            <button
              style={{
                border: "2px solid white",
                width: "60px",
                color: "white",
                
              }}
            >
              Send
            </button>
          </div>
        </div>
        {/* sec 2 */}
<div style={{ width: "33.3%",marginLeft:'40px' }}>
          <div style={{ display: "flex", marginTop: "15%" }}>
            <img
              width="20px"
              src="https://cdn-icons-png.flaticon.com/128/2839/2839021.png"
              alt="msg-logo"
            />
            <Text fontWeight="500" color="white" fontSize="13px">
              Enjoy The Nykaa Mobile app
            </Text>
          </div>
          <div style={{ display: "flex",marginTop:"8px" }}>
          <img
              width="5%"
              src="https://cdn-icons-png.flaticon.com/128/888/888857.png"
              alt="msg-logo"
            />
            <Text fontWeight="500" color="white" fontSize="13px">
               Get it on google play
            </Text>
          </div>
          <div style={{ display: "flex",marginTop:"8px" }}>
          <img
              width="7%"
              src="https://cdn-icons-png.flaticon.com/128/518/518714.png"
              alt="msg-logo"
            />
            <Text fontWeight="500" color="white" fontSize="13px">
              Get it on App store
            </Text>
          </div>
        </div>
        {/* sec 3 */}
        <div style={{ width: "33.3%"}}>
          <div style={{ display: "flex", marginTop: "15%" }}>
            <img
              width='10%'
              src="https://cdn-icons-png.flaticon.com/128/484/484525.png"
              alt="msg-logo"
            />
            <Text fontWeight="500" color="white" fontSize="13px">
            FOR ANY HELP, YOU MAY CALL US AT
1800-267-4444
            </Text>
          </div>
          <div style={{ display: "flex",marginTop:"8px" }}>
            <Text fontWeight="400" marginLeft='10%' color="white" fontSize="14px">
            (Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)
            </Text>
          </div>
          
        </div>
      </div>
    </div>
  );
}
