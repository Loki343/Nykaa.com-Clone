import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";

function Signup() {
  const [Password, setPassword] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [load, setload] = useState(false);
  const navigate = useNavigate();

  const postdata = async () => {
    setload(true);
    try {
      let res = await fetch(`https://mockserver-fhbg.onrender.com/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          Password,
        }),
      });
      let data = await res.json();
      console.log(data);
      setload(false);
      alert("Signup Successfull!");
      navigate("/login");
    } catch (error) {
      setload(false);
      console.log(error);
    }

    setname("");
    setemail("");
    setPassword("");
  };

  return (
    <div>
      <div className={styles.mainDiv}>
        <Heading fontFamily='cursive' textAlign="center" color="rgb(252,39,121)">
          Sign up
        </Heading>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
          />
          <FormLabel>Country</FormLabel>
          <Select placeholder="Select country">
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
          </Select>
          <FormLabel>Phone Number</FormLabel>
          <Input placeholder="Your Phone Number" type="number" />
          <FormLabel>Email address</FormLabel>
          <Input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Your Email Address"
          />
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Your Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
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
          {load ? (
            <Button
              isLoading
              w="100px"
              marginLeft="42%"
              marginTop="30px"
              color="white"
              background="rgb(252,39,121)"
              colorScheme="teal"
              variant="solid"
            >
              Email
            </Button>
          ) : (
            <Button
              onClick={postdata}
              loadingText="Submitting"
              w="100px"
              marginLeft="42%"
              marginTop="30px"
              color="white"
              background="rgb(252,39,121)"
              _hover={{
                bg: "blue.500",
              }}
            >
              Sign up
            </Button>
          )}
        </FormControl>
      </div>
    </div>
  );
}

export default Signup;
