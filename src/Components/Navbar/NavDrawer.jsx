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
      <Text color={"Black"} ref={btnRef} onClick={onOpen} cursor={"pointer"}>
        <div style={{ display: "flex" }}>
          <VscThreeBars fontSize={"23px"} color="deeppink" />
          <p style={{ marginLeft: "5px",fontWeight:"600" }}>All</p>
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
            background={"rgb(255,145,187)"}
            color={"white"}
            display={"flex"}
          >
            <FcShop fontSize={"28px"} />
            <span style={{ marginLeft: "10px" }}>All items category</span>
          </DrawerHeader>

          <DrawerBody>
            <Heading as="h4" size="md" color>
              Trending Products
            </Heading>
            <Text fontSize="lg" lineHeight={"30px"} color={"deeppink"}>
              <Link to={"/allproducts?page=1"} onClick={onClose}>All products</Link>
            </Text>
            <Text fontSize="lg" lineHeight={"30px"} color={"deeppink"}>
              Brands
            </Text>
            <hr />
            <br />

            <Heading as="h4" size="md">
              Top Brands
            </Heading>
            <Text fontSize="lg" lineHeight={"30px"} color={"deeppink"}>
              <Link to={"/allproducts?page=1&filterBy=Lakme"}>Lakme</Link>
            </Text>
            <Text fontSize="lg" lineHeight={"30px"} color={"deeppink"}>
              <Link to={"/allproducts?page=1&filterBy=Nivea"}>Nivea</Link>
            </Text>
            <Text fontSize="lg" lineHeight={"30px"} color={"deeppink"}>
              <Link to={"/allproducts?page=1&filterBy=Maybelline"}>Maybelline</Link>
            </Text>
            <Text fontSize="lg" lineHeight={"30px"} color={"deeppink"}>
              <Link to={"/allproducts?page=1&filterBy=Lotus"}>Lotus</Link>
            </Text>
            <Text fontSize="lg" lineHeight={"30px"} color={"deeppink"}>
              <Link to={"/allproducts?page=1&filterBy=MAC"}>MAC</Link>
            </Text>
            <Text fontSize="lg" lineHeight={"30px"} color={"deeppink"}>
              <Link to={"/allproducts?page=1&filterBy=Nykaa"}>Nykaa</Link>
            </Text>
            <hr />
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
