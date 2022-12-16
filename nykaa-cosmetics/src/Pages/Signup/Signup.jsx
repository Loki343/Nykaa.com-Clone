import React from "react";
import styles from "./Signup.module.css";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Button,
  Link,
  Select,
} from "@chakra-ui/react";

function Signup() {
  return (
    <div>
      <div className={styles.mainDiv}>
        <Heading textAlign="center" color="rgb(252,39,121)">
          Signup
        </Heading>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Your Name" />
          <FormLabel>Country</FormLabel>
          <Select placeholder="Select country">
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
          </Select>
          <FormLabel>Phone Number</FormLabel>
          <Input placeholder="Your Phone Number" type="number" />
          <FormLabel>Email address</FormLabel>
          <Input placeholder="Your Email Address" type="email" />
          <FormLabel>Password</FormLabel>
          <Input placeholder="Your Password" type="password" />
          <FormLabel>Re-Enter Password</FormLabel>
          <Input placeholder="Re-Enter Your Password" type="password" />
          <FormHelperText>
            We'll never share your Email & Password.
          </FormHelperText>
          <FormHelperText>
            If have an account click{" "}
            <Link color="rgb(252,39,121)" href="/login">
              Signin
            </Link>
          </FormHelperText>
          <Button
            w="100px"
            marginLeft="42%"
            marginTop="30px"
            color="white"
            background="rgb(252,39,121)"
          >
            Signup
          </Button>
        </FormControl>
      </div>
    </div>
  );
}

export default Signup;
