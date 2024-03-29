import {
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import styles from "./Login.module.css";
import { useToast } from "@chakra-ui/react";

function Login() {
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [load, setload] = useState(false);
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const toast = useToast();

  const signupSuccess = () => {
    toast({
      title: "Signin Successful.",
      description: "Thank You for signin",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  const signupfailure = () => {
    toast({
      title: "Email or password wrong",
      description: "Please enter your right credentials",
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  const submitLogin = async () => {
    setload(true);
    console.log(load);
    try {
      let res = await fetch(
        `https://wandering-clam-jacket.cyclic.app/NykaaUsers`
      );
      let data = await res.json();
      console.log(data);
      let Auth = false;
      for (let i in data) {
        if (data[i].email === email && data[i].Password === Password) {
          localStorage.setItem("name", data[i].name);
          Auth = true;
          loginUser(data[i].name);
          // console.log(data[i].name);
          break;
        }
      }
      setload(false);
      if (Auth === false) {
        signupfailure();
        // alert("Please enter right email or password!");
      } else {
        // alert("Login Successfull!");
        signupSuccess();
        navigate("/");
        window.location.reload();
      }
      console.log(Auth);
    } catch (error) {
      setload(false);
      console.log(error);
    }
    setemail("");
    setPassword("");
  };

  return (
    <div>
      <div className={styles.mainDiv}>
        <Heading
          fontFamily="cursive"
          color="rgb(252,39,121)"
          textAlign="center"
        >
          Sign in
        </Heading>
        {/* <Button onClick={logoutUser} marginLeft='80%'>Sign out</Button> */}
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
          />

          <FormLabel>Password</FormLabel>
          <Input
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password Address"
            type="password"
          />
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
            onClick={submitLogin}
          >
            Sign in
          </Button>
        </FormControl>
      </div>
    </div>
  );
}

export default Login;
