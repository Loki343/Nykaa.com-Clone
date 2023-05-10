import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import { FcShop } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Text color={"white"} ref={btnRef} onClick={onOpen} cursor={"pointer"}>
        <div style={{ display: "flex" }}>
          <VscThreeBars fontSize={"23px"} />
          <p style={{ marginLeft: "5px" }}>All</p>
        </div>
      </Text>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            background={"rgb(40,55,69)"}
            color={"white"}
            display={"flex"}
          >
            <FcShop fontSize={"28px"} />
            <span style={{ marginLeft: "10px" }}>All items category</span>
          </DrawerHeader>

          <DrawerBody>
            <Heading as="h4" size="md">
              Trending Products
            </Heading>
            <Text fontSize="lg" lineHeight={"30px"}>
              <Link to={"/products"}>All products</Link>
            </Text>
            <Text fontSize="lg" lineHeight={"30px"}>
              Electronics
            </Text>
            <Text fontSize="lg" lineHeight={"30px"}>
              Mobile sale
            </Text>
            <Text fontSize="lg" lineHeight={"30px"}>
              Summer sale
            </Text>
            <hr />
            <br />

            <Heading as="h4" size="md">
              Top Products
            </Heading>
            <Text fontSize="lg" lineHeight={"30px"}>
              iPhone 14 pro max
            </Text>
            <Text fontSize="lg" lineHeight={"30px"}>
              Boat Headphones
            </Text>
            <Text fontSize="lg" lineHeight={"30px"}>
              ADIDAS shoes
            </Text>
            <hr />
            <br />

            <Heading as="h4" size="md">
              Summer sale products
            </Heading>
            <Text fontSize="lg" lineHeight={"30px"}>
              Summer T-shirt
            </Text>
            <Text fontSize="lg" lineHeight={"30px"}>
              Summer Slippers
            </Text>
            <Text fontSize="lg" lineHeight={"30px"}>
              Summer supliments
            </Text>
            <Text fontSize="lg" lineHeight={"30px"}>
              Summer fruits
            </Text>
            <hr />
            <br />

            <Heading as="h4" size="md">
              Children Zone
            </Heading>
            <Text fontSize="lg" lineHeight={"30px"}>
              T-shirt
            </Text>
            <Text fontSize="lg" lineHeight={"30px"}>
              Pants
            </Text>
            <Text fontSize="lg" lineHeight={"30px"}>
              Shoes
            </Text>
            <Text fontSize="lg" lineHeight={"30px"}>
              baby food
            </Text>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
