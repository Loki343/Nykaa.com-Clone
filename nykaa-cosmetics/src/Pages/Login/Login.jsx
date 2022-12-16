import {
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";
import styles from "./Login.module.css";

function Login() {
  return (
    <div>
      <div className={styles.mainDiv}>
        <Heading textAlign="center" color="rgb(252,39,121)">
          Signin
        </Heading>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input placeholder="Your Email Address" type="email" />
          
          <FormLabel>Password</FormLabel>
          <Input placeholder="Your Password Address" type="password" />
          <FormHelperText>
            We'll never share your Email & Password.
          </FormHelperText>
          <FormHelperText>
            If have no account click{" "}
            <Link color="rgb(252,39,121)" href="/signup">
              Signup
            </Link>
          </FormHelperText>
          <Button
            w="100px"
            marginLeft="42%"
            marginTop="30px"
            color="white"
            background="rgb(252,39,121)"
          >
            Signin
          </Button>
        </FormControl>
      </div>
    </div>
  );
}

export default Login;
