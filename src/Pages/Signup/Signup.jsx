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
import { useToast } from "@chakra-ui/react";

function Signup() {
  const [Password, setPassword] = useState("");
  const [rePass, setRePass] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [load, setload] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const signupSuccess = () => {
    toast({
      title: "Signup Successful.",
      description: "Please login and continue shopping",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  const emailExist = () => {
    toast({
      title: "Email Already Exist.",
      description: "Please Enter New Email.",
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const fillRequiredData = () => {
    toast({
      title: "Please fill required data correctly",
      description: "Please Share required info",
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const postdata = async () => {
    setload(true);
    // for mail existance check
    try {
      let res = await fetch(
        "https://wandering-clam-jacket.cyclic.app/NykaaUsers"
      );
      let data = await res.json();
      console.log(data);
      var mailAuth = false;
      for (let i in data) {
        if (data[i].email === email) {
          mailAuth = true;
          break;
        }
      }

      if (mailAuth === true) {
        emailExist();
        setload(false);
        return;
      }
    } catch (error) {
      console.log(error);
    }
    // for mail existance check
    if (
      email.includes("@gmail.com") &&
      email.length > 0 &&
      Password.length > 0 &&
      name.length > 0 &&
      Password === rePass
    ) {
      try {
        await fetch(`https://wandering-clam-jacket.cyclic.app/NykaaUsers`, {
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
        setload(false);
      } catch (error) {
        setload(false);
        console.log(error);
      }
      signupSuccess();
      navigate("/signin");
      setname("");
      setemail("");
      setPassword("");
    } else {
      fillRequiredData();
      setload(false);
    }
  };

  return (
    <div>
      <div className={styles.mainDiv}>
        <Heading
          fontFamily="cursive"
          textAlign="center"
          color="rgb(252,39,121)"
        >
          Sign up
        </Heading>
        <FormControl>
          <FormLabel>User Name</FormLabel>
          <Input
            placeholder="Your User Name (*6 characters required)"
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            maxLength={6}
          />
          <FormLabel>Full Name</FormLabel>
          <Input placeholder="Your Full Name" type="text" />
          <FormLabel>Country</FormLabel>
          <Select placeholder="Select country">
            <option>India</option>
            <option>England</option>
            <option>Australia</option>
            <option>USA</option>
            <option>UAE</option>
            <option>Japan</option>
          </Select>
          <FormLabel>Phone Number</FormLabel>
          <Input placeholder="Your Phone Number" type="number" />
          <FormLabel>Email address</FormLabel>
          <Input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Your Email Address (*required)"
          />
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Your Password (*required)"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <FormLabel>Re-Enter Password</FormLabel>
          <Input
            placeholder="Re-Enter Your Password (*required)"
            type="password"
            value={rePass}
            onChange={(e) => setRePass(e.target.value)}
          />
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
