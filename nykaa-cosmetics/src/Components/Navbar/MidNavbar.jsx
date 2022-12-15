import { Stack, Input, Image, Text, Link } from "@chakra-ui/react";
import styles from "./MidNavbar.module.css";

export function MidNavbar() {
  return (
    <div className={styles.mainDiv}>
      <Stack
        marginLeft="17.5%"
        w="65%"
        spacing={5}
        direction="row"
        align="center"
      >
        <Image
          src="https://cdn.iconscout.com/icon/free/png-256/nykaa-3384872-2822953.png"
          w="7.5%"
          marginLeft="55"
        />
        <Text className={styles.sec}>Categories</Text>
        <Text className={styles.sec}>Brands</Text>
        <Text className={styles.sec}>Luxe</Text>
        <Text className={styles.sec}>NykaaFashion</Text>
        <Text className={styles.sec}>BeautyAdvice</Text>
        <div style={{ marginLeft: "90px" }}>
          <Input
            placeholder="🔍 Search on Nykaa"
            fontSize="12px"
            padding="2px"
            h="35px"
            w="240%"
          />
        </div>
        <Link>
          <button className={styles.signin}>Sign in</button>
        </Link>
        <Link>
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
