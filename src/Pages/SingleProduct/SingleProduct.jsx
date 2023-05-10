/*import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styles from "./SingleProduct.module.css"
import axios from 'axios'
import { Heading } from '@chakra-ui/react'

export function SingleProduct() {
    const {id} = useParams()
    console.log(id);
    const [data,setData] = useState([])
useEffect(()=>{
    axios(`http://localhost:8080/products/${id}`)
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
},[])
  return (
    <div style={{backgroundColor:'rgb(253,234,242)',marginTop:'-10px',marginBottom:'-30px',paddingBottom:'30px'}}>
        <Heading fontFamily='cursive' color='rgb(252,39,121)' fontWeight='500' marginTop='10px' textAlign='center'>{data.brand} Product</Heading>
      <div className={styles.mainDiv}>
        <img className={styles.photo} src={data.image} alt="" />
        <div className={styles.container}>
            <p className={styles.title}>{data.title}</p>
            <p className={styles.rating}>★ ★ ★ ★ ☆ 4/5 | 3274 ratings & 1693 reviews</p>
            <p className={styles.price}>MRP ₹ {data.price} 34% 0ff</p>
            <p className={styles.caption}>inclusive of all taxes</p>
            <div className={styles.extra}>
                <img width='100%' src="https://images-static.nykaa.com/uploads/fc68d953-2b29-42f9-8df6-5ee176ad8d01.jpg?tr=w-600,cm-pad_resize" alt="i" />
            </div>
            <p style={{marginTop:'10px',cursor:'pointer',marginLeft:'18px'}}>Click here for more offers!</p>
            <button className={styles.button}>Add to Cart 👜</button>
        </div>
      </div>
    </div>
  )
}
*/

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping, MdLocalOffer } from "react-icons/md";
import { useParams } from "react-router-dom";

export function SingleProduct() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios(`https://wandering-clam-jacket.cyclic.app/NykaaProducts/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={data.image}
            // fit={"cover"}
            align={"center"}
            w={"60%"}
            h={"400px"}
            // border={"1px solid"}
            margin={"auto"}
            mt={"0px"}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {data.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              MRP ₹{" "}
              <span style={{ color: "deeppink", fontWeight: "600" }}>
                {data.price}
              </span>{" "}
              34% 0ff
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              {/* <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </Text> */}
              <Text fontSize={"lg"}>
                All are our unique and special products and these products are
                specially made for caring skin, you will get special discount on
                every product, Thank you for choosing this product.
              </Text>
              <img
                width="100%"
                src="https://images-static.nykaa.com/uploads/fc68d953-2b29-42f9-8df6-5ee176ad8d01.jpg?tr=w-600,cm-pad_resize"
                alt="i"
              />
            </VStack>
            {/* <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{" "}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box> */}
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Brand:
                  </Text>{" "}
                  {data.brand}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Rating:
                  </Text>{" "}
                  ★ ★ ★ ★ ☆ 4/5 | 3274 ratings & 1693 reviews
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Ingradients:
                  </Text>{" "}
                  Totally natural Ingradients
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    color:
                  </Text>{" "}
                  extract from fruits
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Lasting:
                  </Text>{" "}
                  Long Lasting
                </ListItem>
              </List>
            </Box>
          </Stack>
          <Stack
            direction="row"
            color={"deeppink"}
            cursor={"pointer"}
          >
            <MdLocalOffer />
            <Text>click here to get exciting offers</Text>
          </Stack>
          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Add to Cart 👜
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
