import { Stack, Input, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./MidNavbar.module.css";

export function MidNavbar() {
  return (
    <div className={styles.mainDiv} style={{position:'sticky',top:'38px',zIndex:'10',backgroundColor:'white'}}>
      <Stack
        marginLeft="10%"
        w="80%"
        spacing={5}
        direction="row"
        align="center"
      >
      <Link style={{width:'100px',marginLeft:'70px',height:'100px'}} to='/'> <Image
          src="https://cdn.iconscout.com/icon/free/png-256/nykaa-3384872-2822953.png"
          w="100%"
          // marginLeft="55"
        /></Link> 
        <Link to="/allproducts"><Text className={styles.sec}>
          AllProducts
        </Text></Link>
        <Text className={styles.sec}>Categories</Text>
        <Text className={styles.sec}>Brands</Text>
        <Text className={styles.sec}>NykaaFashion</Text>
        <Text className={styles.sec}>BeautyAdvice</Text>
        <div style={{ marginLeft: "90px" }}>
          <Input
            placeholder="🔍 Search on Nykaa"
            fontSize="12px"
            padding="2px"
            h="35px"
            w="180%"
          />
        </div>
        <Link to='/login'>
          <button className={styles.signin}>Sign in</button>
        </Link>
        <Link to='/cart'>
          <Image
            marginLeft="5"
            src="https://cdn-icons-png.flaticon.com/128/5337/5337564.png"
            w="15%"
          />
        </Link>
        <hr />
      </Stack>
    </div>
  );
}
