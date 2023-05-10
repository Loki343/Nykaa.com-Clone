import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
  Tooltip,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import styles from "./Navbar.module.css";
import ButtonLogout from "./ButtonLogout";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import img from "../Assets/trendy1.jpeg"
import NavDrawer from "./NavDrawer";

const NAV_ITEMS = [
  {
    label: "Products",
    href: "/",
  },
  {
    label: "MiniTV",
    href: "/",
  },
  {
    label: "BestSeller",
    href: "/",
  },
  {
    label: "Mobiles",
    href: "/",
  },
  {
    label: "CustomerService",
    href: "/",
  },

  {
    label: "Electronics",
    href: "/",
  }
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const toast = useToast();

  const logoutSuccess = () => {
    toast({
      title: "Logout Successful.",
      description: "You are Logged out now",
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <>
      <Box
        position={"sticky"}
        top={"0px"}
        zIndex={"1000"}
      >
        <Flex
          bg={"rgb(19,25,33)"}
          color={useColorModeValue("gray.600", "white")}
          minH={"70px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              <Link to={"/"}>
                <img
                  src={img}
                  alt="img"
                  width={"100px"}
                />
              </Link>
            </Text>

            <Flex display={{ base: "none", md: "flex", lg: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            {localStorage.getItem("name") ? (
              <>
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  href={"/cart"}
                  color={"black"}
                >
                  <BsFillBagCheckFill />
                  <Tooltip
                    label={`You have ${0} items in the cart`}
                    fontSize="md"
                    background="lightgrey"
                    color={"white"}
                  >
                    <span style={{ marginLeft: "4px" }}>
                      Cart : {0}
                    </span>
                  </Tooltip>
                </Button>

                <Button className={styles.name}>
                  <span>{localStorage.getItem("name")}</span>
                  <span style={{ marginLeft: "2px" }}>
                    <FaUserCircle />{" "}
                  </span>
                </Button>
                <>
                  <ButtonLogout
                    style={{ marginRight: "10px" }}
                    logout={() => {
                      logoutSuccess();
                      localStorage.clear();
                      window.location.reload();
                    }}
                  />
                </>
              </>
            ) : (
              <>
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  href={"/signin"}
                  color={"white"}
                  // bg={"blue"}
                >
                  Sign In
                </Button>
                <Button
                border={"1px solid white"}
                  as={"a"}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"black"}
                  href={"/signup"}
                  _hover={{
                    bg: "rgb(64,66,68)",
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
}

const DesktopNav = () => {
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const [query, setQuery] = useState("");
  const [suggation, setSuggation] = useState([]);

  const products = [
    {
      id: 1,
      title: "Soho Heritage Harrington Jacket",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/93FB0DD4-CC1E-4F10-8A59-975E389BA547?$BBY_V2_SL_1x1$&wid=1251&hei=1251",
      price: 1890.0,
      price_c: 2490.0,
      discount: 24,
      size: "XL",
      color: "Black",
      label: "RELAXED FIT",
      category: "Jacket",
    },
    {
      id: 2,
      title: "Logo Appliqué Lightweight Hooded Jacket",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/369E2F9B-9CD2-4000-9794-887E1BD7F277?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 1350.0,
      price_c: 2490.0,
      discount: 73,
      size: "XXL",
      color: "Ink",
      label: "New in",
      category: "Jacket",
    },
    {
      id: 3,
      title: "Mid-length Kensington Heritage Trench Coat",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/5479F2F2-9F2B-4909-88FE-AB243C1EFCFC?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 2490.0,
      price_c: 2990.0,
      discount: 20,
      size: "XL",
      color: "Honey",
      label: "RELAXED FIT",
      category: "Coat",
    },
    {
      id: 4,
      title: "Short Camden Heritage Car Coat",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/3C346B48-4969-4B83-B147-DB00C1BF44BF?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 2050.0,
      price_c: 2490.0,
      discount: 22,
      size: "XL",
      color: "Blue",
      label: "RELAXED FIT",
      category: "Coat",
    },
    {
      id: 5,
      title: "Check Wool Cotton Oversized Overshirt",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/A80B9959-1F32-4920-8419-F028387AB474?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 1550.0,
      price_c: 2550.0,
      discount: 39,
      size: "L",
      color: "Marigold",
      label: "New in",
      category: "Jacket",
    },
    {
      id: 6,
      title: "Diamond Quilted Thermoregulated Gilet",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/9A6E87FD-7BD7-47DB-B624-EC3485CEFDFB?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 1250.0,
      price_c: 2500.0,
      discount: 50,
      size: "M",
      color: "Black",
      label: "COMING SOON",
      category: "Jacket",
    },
    {
      id: 7,
      title: "Wool Cashmere Tailored Coat",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/C92BEB1E-6E9E-48C7-B23F-2A7DB15D1C46?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 2350.0,
      price_c: 4850.0,
      discount: 62,
      size: "XL",
      color: "Camel",
      label: "RELAXED FIT",
      category: "Coat",
    },
    {
      id: 8,
      title: "Check Cotton Gabardine Car Coat",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/70750554-817D-4F76-8A17-3553B60DE1FF?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 2490.0,
      price_c: 6290.0,
      discount: 60,
      size: "XXL",
      color: "Soft Fawn",
      label: "COMING SOON",
      category: "Coat",
    },
    {
      id: 9,
      title: "EKD Funnel Neck Puffer Jacket",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/C9FC1044-CDD8-426C-9CEA-902460F0716F?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 3250.0,
      price_c: 5250.0,
      discount: 38,
      size: "M",
      color: "Monochrome",
      label: "New in",
      category: "Jacket",
    },
    {
      id: 10,
      title: "Logo Appliqué Nylon Puffer Coat",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/F418793D-B9EC-4F76-B2D0-01EA75EF4F22?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 1890.0,
      price_c: 4290.0,
      discount: 68,
      size: "XL",
      color: "Black",
      label: "New in",
      category: "Coat",
    },
    {
      id: 11,
      title: "Leather, Suede and Check Cotton Sneakers",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/6E08AD06-C494-4C4E-97C2-5016770B011B?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 690.0,
      price_c: 1690.0,
      discount: 9,
      size: "39",
      color: "White",
      label: "New in",
      category: "Sneakers",
    },
    {
      id: 12,
      title: "Leather, Suede and Vintage Check Cotton Sneakers",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/0340F148-1E85-4CD3-AFC8-418122D17BA2?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 1890.0,
      price_c: 4290.0,
      discount: 58,
      size: "40",
      color: "Charcoal",
      label: "New in",
      category: "Coat",
    },
    {
      id: 13,
      title: "Logo Print Suede and Leather Sneakers",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/5CF25AE8-53A3-4379-AA15-067B6C6F9AB0?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 850.0,
      price_c: 1250.0,
      discount: 3,
      size: "40",
      color: "Red",
      label: "COMING SOON",
      category: "Sneakers",
    },
    {
      id: 14,
      title: "Vintage Check Cotton and Neoprene High-top Sneakers",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/BB727EE5-7B8C-496D-B749-12ECCA29561E?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 920.0,
      price_c: 1220.0,
      discount: 5,
      size: "41",
      color: "Brown",
      label: "New in",
      category: "Sneakers",
    },
    {
      id: 15,
      title: "Logo print Leather and Nylon Arthur Sandals",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/A9E2738E-378F-4E1B-91F9-64A41347532E?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 920.0,
      price_c: 1420.0,
      discount: 77,
      size: "39",
      color: "Black",
      label: "New in",
      category: "Sandals",
    },
    {
      id: 16,
      title: "Cut-out Detail Check Cotton Canvas Slides",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/EA14F4A7-8E96-49AC-8B25-38C7F288575B?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 720.0,
      price_c: 2420.0,
      discount: 21,
      size: "40",
      color: "Brown",
      label: "New in",
      category: "Sandals",
    },
    {
      id: 17,
      title: "Logo Detail Slides",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/1B73EFE1-D66D-45B6-A9AC-5867888C6613?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 370.0,
      price_c: 570.0,
      discount: 35,
      size: "42",
      color: "Blue",
      label: "New in",
      category: "Sandals",
    },
    {
      id: 18,
      title: "Monogram Motif Leather Sandals",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/06CE3F7B-8C24-4FED-A8F3-57B761CEB8F0?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 690.0,
      price_c: 990.0,
      discount: 30,
      size: "41",
      color: "Brown",
      label: "COMING SOON",
      category: "Sandals",
    },
    {
      id: 19,
      title: "Check Panel Leather Loafers",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/720E63D7-C04A-4BA9-9386-E0F634F3D28F?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 820.0,
      price_c: 1820.0,
      discount: 55,
      size: "43",
      color: "Black",
      label: "New in",
      category: "Formal",
    },
    {
      id: 20,
      title: "Coin Detail Leather Penny Loafers",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/D30079BD-1524-45F8-81AF-CF02F2258D05?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 790.0,
      price_c: 1090.0,
      discount: 27,
      size: "40",
      color: "Brown",
      label: "New in",
      category: "Formal",
    },
    {
      id: 70,
      title: "Vintage Check Panel Leather Derby Shoes",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/BB524C6A-76ED-4848-B275-02AFC47B8FDD?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 870.0,
      price_c: 1270.0,
      discount: 39,
      size: "39",
      color: "Black",
      label: "COMING SOON",
      category: "Formal",
    },
    {
      id: 71,
      title: "Monogram Motif Leather Derby Shoes",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/89DFE71C-BD62-40BB-A32E-F7453721A606?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 790.0,
      price_c: 1090.0,
      discount: 58,
      size: "42",
      color: "Black",
      label: "New in",
      category: "Formal",
    },
    {
      id: 72,
      title: "Vintage Check Detail Leather Chelsea Boots",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/91270E29-9DE1-468F-A0C4-A988305771F1?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 920.0,
      price_c: 1920.0,
      discount: 52,
      size: "40",
      color: "Brown",
      label: "New in",
      category: "Boots",
    },
    {
      id: 73,
      title: "Floral Print Maxi Dress",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/BCEF3E60-4037-42F9-915A-FCAD7BD58714?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 1790.0,
      price_c: 2090.0,
      discount: 19,
      size: "43",
      color: "Black",
      label: "LIMITED AVAILABILITY",
      category: "Boots",
    },
    {
      id: 74,
      title: "Leather and Suede Tor Boots",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/639AC430-30AC-4389-9CB5-AAA914FADB3C?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 1290.0,
      price_c: 1890.0,
      discount: 48,
      size: "42",
      color: "Orange",
      label: "LIMITED AVAILABILITY",
      category: "Boots",
    },
    {
      id: 75,
      title: "Sonny Bum Bag",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/3A2155B6-ACFD-498D-BC33-2E8D71F947BF?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 1000.0,
      price_c: 1500.0,
      discount: 33.33,
      size: "",
      color: "Charcoal",
      label: "New in",
      category: "Bag",
    },
    {
      id: 76,
      title: "Charcoal Check Rocco Backpack Bag",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/D669222C-897A-4D72-8C1F-6FA3FFAE5883?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 1750.0,
      price_c: 1950.0,
      discount: 10,
      size: "",
      color: "Charcoal",
      label: "LIMITED AVAILABILITY",
      category: "Bag",
    },
    {
      id: 77,
      title: "Square Paddy Bag",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/715EA701-52E6-4EB0-9397-37A5ACCC9D87?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 910.0,
      price_c: 1110.0,
      discount: 18,
      size: "",
      color: "Black",
      label: "New in",
      category: "Bag",
    },
    {
      id: 78,
      title: "Exaggerated Check and Leather Holdall Bag",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/8597DF75-940C-48F9-A4CB-7BFD1FE21520?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 2250.0,
      price_c: 3250.0,
      discount: 21,
      size: "",
      color: "Brown",
      label: "New in",
      category: "Bag",
    },
    {
      id: 79,
      title: "Ainsworth Briefcase Bag",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/A0180EFD-D0AE-4EC9-9340-F8C714E98321?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 2150.0,
      price_c: 2550.0,
      discount: 72,
      size: "",
      color: "Black",
      label: "LIMITED AVAILABILITY",
      category: "Bag",
    },
    {
      id: 80,
      title: "Charcoal Check and Leather Large Messenger Bag",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/0E4D4EC8-B689-4F0D-8267-2E5C42376319?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 1550.0,
      price_c: 1650.0,
      discount: 66,
      size: "",
      color: "Charcoal",
      label: "New in",
      category: "Bag",
    },
    {
      id: 81,
      title: "Short-sleeve Check Silk Wool Jacquard Top",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/50508ED1-575E-41FD-B257-733CEE1D8D24?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 840.0,
      price_c: 1240.0,
      discount: 16,
      size: "L",
      color: "Soft Fawn",
      label: "BACK IN STOCK",
      category: "Clothing",
    },
    {
      id: 82,
      title: "Check Silk Wool Jacquard Shorts",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/BA3B0295-537E-405F-82E3-507DAFD84BA3?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 720.0,
      price_c: 1120.0,
      discount: 32,
      size: "M",
      color: "Archive Beige",
      label: "BACK IN STOCK",
      category: "Clothing",
    },
    {
      id: 83,
      title: "Check Hood Cotton Zip Hoodie",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/20365E75-F6C9-4575-8917-5EFA0E8D270A?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 990.0,
      price_c: 1290.0,
      discount: 65,
      size: "XL",
      color: "Black",
      label: "New in",
      category: "Clothing",
    },
    {
      id: 84,
      title: "Prorsum Label Cotton Sweatshirt",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/6436B9EA-C980-476A-81D2-4D58C556626B?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 960.0,
      price_c: 1660.0,
      discount: 46,
      size: "L",
      color: "Blue",
      label: "New in",
      category: "Clothing",
    },
    {
      id: 85,
      title: "Embroidered Monogram EKD Cotton Hoodie",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/9049F837-2D3B-4139-A2A0-C41B375C36A8?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 960.0,
      price_c: 1360.0,
      discount: 24,
      size: "XXL",
      color: "Camel",
      label: "New in",
      category: "Clothing",
    },
    {
      id: 86,
      title: "Logo Detail Cotton Piqué Polo Shirt",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/5A152009-D8AD-403E-A9D0-0BD18D2479B3?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 510.0,
      price_c: 1010.0,
      discount: 16,
      size: "S",
      color: "Marigold",
      label: "BACK IN STOCK",
      category: "Clothing",
    },
    {
      id: 87,
      title: "Monogram Motif Cotton Piqué Polo Shirt",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/8E6F13D2-AD97-4955-988A-13BBB021B263?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 480.0,
      price_c: 680.0,
      discount: 29,
      size: "L",
      color: "White",
      label: "New in",
      category: "Clothing",
    },
    {
      id: 88,
      title: "Logo Print Cotton Jersey T-shirt",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/BBA1E1CC-A693-48E2-A073-ED1D0B80BDAF?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 480.0,
      price_c: 680.0,
      discount: 4,
      size: "M",
      color: "Blue",
      label: "New in",
      category: "Clothing",
    },
    {
      id: 89,
      title: "Check Print Mesh Vest",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/D5ED853D-7039-4ADC-A294-ECFEC8432A45?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 820.0,
      price_c: 920.0,
      discount: 41,
      size: "S",
      color: "Brown",
      label: "Lightweight",
      category: "Clothing",
    },
    {
      id: 90,
      title: "Monogram Motif Cotton T-shirt",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/5CBDAB75-5D34-4ACA-A819-91B20D212FC9?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 840.0,
      price_c: 1240.0,
      discount: 59,
      size: "M",
      color: "Black",
      label: "RELAXED FIT",
      category: "Clothing",
    },
    {
      id: 91,
      title: "Exaggerated Check Cashmere Scarf",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/99009739-F572-4010-A6BD-A5C4A13CDF02?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 520.0,
      price_c: 590.0,
      discount: 15,
      size: "",
      color: "Blue",
      label: "New in",
      category: "Scarf",
    },
    {
      id: 92,
      title: "The Burberry Check Cashmere Scarf",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/83FBD92B-4826-4D3A-A019-A2EE57535A59?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 520.0,
      price_c: 590.0,
      discount: 12,
      size: "",
      color: "Charcoal",
      label: "New in",
      category: "Scarf",
    },
    {
      id: 93,
      title: "Monogram Print and Leather Card Case",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/4B337DE5-DAA2-4631-A0E1-1ABCFC5A1CFB?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 230.0,
      price_c: 250.0,
      discount: 8,
      size: "",
      color: "Blue",
      label: "Pre-order",
      category: "Wallet",
    },
    {
      id: 94,
      title: "Grainy Leather TB Bifold Wallet",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/9B92A134-9ABB-45EB-A6DF-1B33DC36853D?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 440.0,
      price_c: 540.0,
      discount: 18,
      size: "",
      color: "Blue",
      label: "PERSONALISE",
      category: "Wallet",
    },
    {
      id: 95,
      title: "Leather Reversible TB Belt",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/F65E9F86-78C5-4D7B-9D4F-B4C23537BEA7?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 580.0,
      price_c: 630.0,
      discount: 8,
      size: "75",
      color: "Black",
      label: "PERSONALISE",
      category: "Belt",
    },
    {
      id: 96,
      title: "Check and Leather Reversible TB Belt",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/1D4DDA83-336D-411F-B419-FD23848CBA2F?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 550.0,
      price_c: 650.0,
      discount: 15,
      size: "80",
      color: "Brown",
      label: "PERSONALISE",
      category: "Belt",
    },
    {
      id: 97,
      title: "Monogram Motif Tropical Gabardine Baseball Cap",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/5B218C79-61CC-43DC-9B9A-2B86E826EFFA?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 440.0,
      price_c: 490.0,
      discount: 10,
      size: "M",
      color: "Black",
      label: "New in",
      category: "Cap",
    },
    {
      id: 98,
      title: "Embroidered Logo Check Cotton Baseball Cap",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/0EEFD644-6B7F-40FC-AF20-A5DB077DEE23?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 440.0,
      price_c: 500.0,
      discount: 11,
      size: "XL",
      color: "Brown",
      label: "New in",
      category: "Cap",
    },
    {
      id: 99,
      title: "Monogram Motif Tropical Gabardine Cap",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/07F35EB5-9DEB-4200-831D-0BF431B47098?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 410.0,
      price_c: 450.0,
      discount: 8,
      size: "S",
      color: "Honey",
      label: "New in",
      category: "Cap",
    },
    {
      id: 21,
      title: "Check Nylon Hooded Jacket",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/9D71914D-BC2E-4CC3-8D7B-03E737742992?$BBY_V2_SL_3x4$&wid=1278&hei=1700",
      price: 1350.0,
      price_c: 1499.0,
      discount: 10,
      size: "XL",
      color: "Blue",
      label: "New in",
      category: "Jacket",
    },
    {
      id: 22,
      title: "Nylon Lightweight Hooded Jacket",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/19E899B3-0802-4D7E-9E1D-2E6DD93FAABB?$BBY_V2_SL_3x4$&wid=1278&hei=1700",
      price: 1250.0,
      price_c: 1499.0,
      discount: 16,
      size: "L",
      color: "Black",
      label: "Lightweight",
      category: "Jacket",
    },
    {
      id: 23,
      title: "Stonewashed Denim Oversized Field Jacket",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/3C3235CB-7D3F-49FA-83DC-056861D35B06?$BBY_V2_SL_3x4$&wid=1278&hei=1700",
      price: 2350.0,
      price_c: 2999.0,
      color: "Blue",
      size: "M",
      discount: 21,
      label: "New in",
      category: "Jacket",
    },
    {
      id: 24,
      title: "Sleeveless Stonewashed Denim Jacket",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/31FC82B1-C95C-4E68-B47E-69502B619AAF?$BBY_V2_SL_1x1$&wid=2500&hei=2500",
      price: 2050.0,
      price_c: 2499.0,
      discount: 22,
      color: "Blue",
      size: "S",
      label: "Pre-order",
      category: "Jacket",
    },
    {
      id: 25,
      title: "Detachable Hood Two-tone Nylon Puffer Gilet",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/88C220F8-4F8E-4B98-85E7-816DC572A62F?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 2590.0,
      price_c: 3200.0,
      discount: 19,
      color: "White",
      size: "S",
      label: "New in",
      category: "Jacket",
    },
    {
      id: 26,
      title: "Long Waterloo Heritage Trench Coat",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/FF066228-3413-4BC5-9840-9D2319949EEF?$BBY_V2_SL_1x1$&wid=2500&hei=2500",
      price: 2490.0,
      price_c: 2990.0,
      discount: 66,
      color: "Black",
      size: "L",
      label: "Regular Fit",
      category: "Coat",
    },
    {
      id: 27,
      title: "Mid-length Kensington Heritage Trench Coat",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/4F01F12F-6405-4F13-85EF-81CD2F6CC58C?$BBY_V2_SL_1x1$&wid=2500&hei=2500",
      price: 2490.0,
      price_c: 2790.0,
      discount: 21,
      color: "Honey",
      size: "L",
      label: "Regular Fit",
      category: "Coat",
    },
    {
      id: 28,
      title: "Diamond Quilted Waxed Cotton Jacket",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/57B062E6-DFBC-446C-8C2B-1D13C31DEDB7?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 2090.0,
      price_c: 2490.0,
      discount: 19,
      color: "Brown",
      size: "M",
      label: "Slim fit",
      category: "Jacket",
    },
    {
      id: 29,
      title: "Technical Cotton Faille Hooded Car Coat",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/3EA8E3E4-5C14-49BC-A3D1-164293A14FF2?$BBY_V2_SL_1x1$&wid=2500&hei=2500",
      price: 1890.0,
      price_c: 2590.0,
      discount: 33.33,
      color: "Honey",
      size: "L",
      label: "New in",
      category: "Coat",
    },
    {
      id: 30,
      title: "Reversible Check Wool Coat",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/0F9B3A41-A615-423F-B8B0-F500CC77AC6E?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 3150.0,
      price_c: 3550.0,
      discount: 49,
      color: "Archive Beige",
      size: "XL",
      label: "LIMITED AVAILABILITY",
      category: "Jacket",
    },
    {
      id: 31,
      title: "Detachable Hood Puffer Coat",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/ED278E8F-9FD5-4ECE-99B5-4F98F7120A4E?$BBY_V2_SL_1x1$&wid=1251&hei=1251",
      price: 1450.0,
      price_c: 1990.0,
      discount: 44,
      color: "Black",
      size: "L",
      label: "Slim fit",
      category: "Coat",
    },
    {
      id: 32,
      title: "Reversible Check Wool Cape",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/D37D4043-C193-48DC-B729-E8262E25CFC1?$BBY_V2_SL_1x1$&wid=1251&hei=1251",
      price: 1090.0,
      price_c: 1590.0,
      discount: 31,
      color: "Black",
      size: "M",
      label: "New in",
      category: "Cape",
    },
    {
      id: 33,
      title: "College Graphic Cotton Hooded Poncho",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/EA258FAD-CA8A-48C2-831E-89BA3B65C908?$BBY_V2_SL_1x1$&wid=1251&hei=1251",
      price: 1000.0,
      price_c: 1450.0,
      discount: 38,
      color: "Black",
      size: "M",
      label: "New in",
      category: "Poncho",
    },
    {
      id: 34,
      title: "Mini TB Bucket Bag",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/F6B72237-0D5E-4B75-B487-8501FFE508EC?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 1750.0,
      price_c: 2250.0,
      discount: 22,
      color: "Blue",
      size: "",
      label: "New in",
      category: "Bag",
    },
    {
      id: 35,
      title: "Mini Frances Bag",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/07C44457-BA6C-4025-B99A-A382CD976D8B?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 2590.0,
      price_c: 3190.0,
      discount: 18,
      color: "Brown",
      size: "",
      label: "PERSONALISE",
      category: "Bag",
    },
    {
      id: 36,
      title: "Note Bag",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/25DA77E2-C733-4804-9538-96AE367A0D23?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 1790.0,
      price_c: 2190.0,
      discount: 80,
      color: "Brown",
      size: "",
      label: "New in",
      category: "Bag",
    },
    {
      id: 37,
      title: "Check Cotton Medium London Tote Bag",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/442BB2E3-DB10-48FC-A60F-A05C4F2219F5?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 1950.0,
      price_c: 2590.0,
      discount: 29,
      color: "Brown",
      size: "",
      label: "PERSONALISE",
      category: "Bag",
    },
    {
      id: 38,
      title: "Small Lola Bag",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/437964D3-3FBB-4030-847A-3970ADB0ED41?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 3850.0,
      price_c: 4490.0,
      discount: 14,
      color: "Black",
      size: "",
      label: "COMING SOON",
      category: "Bag",
    },
    {
      id: 39,
      title: "Check Cotton and Leather Sneakers",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/6BA0BE0D-7BD3-4D83-B249-C7B1A0D06473?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 570.0,
      price_c: 890.0,
      discount: 3,
      color: "Honey",
      size: "35",
      label: "New in",
      category: "Sneakers",
    },
    {
      id: 40,
      title: "Check Cotton Sneakers",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/FC9DE590-6A2F-4A94-BFCC-A22D31FA2C28?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 620.0,
      price_c: 990.0,
      discount: 37,
      color: "Blue",
      size: "36",
      label: "New in",
      category: "Sneakers",
    },
    {
      id: 41,
      title: "Vintage Check Cotton Sneakers",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/8F8C3BC3-3C71-4619-8D7F-09E790AE8C55?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 620.0,
      price_c: 1020.0,
      discount: 79,
      color: "Archive Beige",
      size: "37",
      label: "COMING SOON",
      category: "Sneakers",
    },
    {
      id: 42,
      title: "Leather, Nylon and Check Sneakers",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/37926625-1B95-40FF-807F-00381B6276D3?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 820.0,
      price_c: 1250.0,
      discount: 20,
      color: "Honey",
      size: "38",
      label: "New in",
      category: "Sneakers",
    },
    {
      id: 43,
      title: "Monogram Motif Leather Sandals",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/ABDB0533-E5A5-4096-85AE-46CA43E09571?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 720.0,
      price_c: 1020.0,
      discount: 39,
      color: "Black",
      size: "35",
      label: "New in",
      category: "Sandals",
    },
    {
      id: 44,
      title: "Vintage Check Patent Leather Sandals",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/644FFE9F-FBDA-4174-B998-6478175F7729?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 890.0,
      price_c: 1350.0,
      discount: 53,
      color: "Archive Beige",
      size: "36",
      label: "LIMITED AVAILABILITY",
      category: "Sandals",
    },
    {
      id: 45,
      title: "Monogram Motif Leather Mules",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/90629C69-C400-4B6E-8FA7-0BC3224AEBB1?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 820.0,
      price_c: 1120.0,
      discount: 6,
      color: "Black",
      size: "37",
      label: "New in",
      category: "Sandals",
    },
    {
      id: 46,
      title: "Monogram Motif Leather Point-toe Pumps",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/79AD6F88-9C77-4B9A-BD20-DB3FB4FE3375?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 890.0,
      price_c: 1350.0,
      discount: 34,
      color: "Pink",
      size: "37",
      label: "New in",
      category: "Pumps",
    },
    {
      id: 47,
      title: "Monogram Motif Leather Slingback Pumps",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/2078FC45-8003-42F6-B307-30FB916DEF93?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 920.0,
      price_c: 1420.0,
      discount: 35,
      color: "Honey",
      size: "38",
      label: "New in",
      category: "Pumps",
    },
    {
      id: 48,
      title: "Monogram Motif Leather Point-toe Pumps",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/5540617D-CE06-4C3E-BFA0-1783DCB01745?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 890.0,
      price_c: 1350.0,
      discount: 34,
      color: "Pink",
      size: "36",
      label: "COMING SOON",
      category: "Pumps",
    },
    {
      id: 49,
      title: "Monogram Motif Leather Slingback Point-toe Ballerinas",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/5648A464-5709-48E4-9EE8-12365663893F?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 920.0,
      price_c: 1420.0,
      discount: 44,
      color: "Blue",
      size: "37",
      label: "New in",
      category: "Flats",
    },
    {
      id: 50,
      title: "Monogram Motif Point-toe Ballerinas",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/351B19CF-F4FA-4193-BFE4-AED26EC5C7EF?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 820.0,
      price_c: 1120.0,
      discount: 49,
      color: "Black",
      size: "35",
      label: "New in",
      category: "Flats",
    },
    {
      id: 51,
      title: "Coin Detail Leather Penny Loafers",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/6B52C3B5-677B-4496-804A-9BA7EAF4CAA0?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 790.0,
      price_c: 1090.0,
      discount: 27,
      color: "Black",
      size: "39",
      label: "COMING SOON",
      category: "Flats",
    },
    {
      id: 52,
      title: "House Check and Leather Ankle Boots",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/6347BD49-E500-4CF0-A026-22AEBB55712F?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 920.0,
      price_c: 1420.0,
      discount: 79,
      color: "Brown",
      size: "38",
      label: "New in",
      category: "Boots",
    },
    {
      id: 53,
      title: "Knitted Check Sock Boots",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/CD494173-FD3B-449B-ACD5-F90C6725DF90?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 990.0,
      price_c: 1490.0,
      discount: 11,
      color: "Brown",
      size: "38",
      label: "New in",
      category: "Boots",
    },
    {
      id: 54,
      title: "Vintage Check Bouclé Ankle Boots",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/45ACA5EF-3057-4D79-A95B-D44644DE7A83?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 1290.0,
      price_c: 1690.0,
      discount: 68,
      color: "Archive Beige",
      size: "39",
      label: "COMING SOON",
      category: "Boots",
    },
    {
      id: 55,
      title: "Check Panel and Leather Ankle Boots",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/B6203184-A39C-4D12-9F5B-2FF915F186B5?$BBY_V2_SL_3x4$&wid=400&hei=534",
      price: 1290.0,
      price_c: 1690.0,
      discount: 71,
      color: "Black",
      size: "",
      label: "PERSONALISE",
      category: "Boots",
    },
    {
      id: 56,
      title: "Embossed Leather TB Continental Wallet",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/F49495CF-5617-48C4-9AD1-1FFB249FDA18?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 830.0,
      price_c: 930.0,
      discount: 10.75,
      size: "",
      color: "Black",
      label: "PERSONALISE",
      category: "Wallet",
    },
    {
      id: 57,
      title: "Embossed Leather TB Compact Wallet",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/C07CFA5F-8AFA-4D10-886A-E34303FC76BC?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 680.0,
      price_c: 750.0,
      discount: 9,
      size: "",
      color: "Red",
      label: "New in",
      category: "Wallet",
    },
    {
      id: 58,
      title: "Grainy Leather TB Card Case Wallet",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/C96EBB9E-7318-45B6-BF44-B7DE525B8515?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 300.0,
      price_c: 350.0,
      discount: 7,
      size: "",
      color: "Honey",
      label: "New in",
      category: "Wallet",
    },
    {
      id: 59,
      title: "College Graphic Wool Silk Jacquard Scarf",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/1742582A-CF50-4DBE-ABFA-DA62CE8CCAC7?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 380.0,
      price_c: 410.0,
      discount: 5,
      size: "",
      color: "Blue",
      label: "New in",
      category: "Scarf",
    },
    {
      id: 60,
      title: "Montage Check Wool Cashmere Scarf",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/07544E04-138C-425F-89CA-B11D1136C060?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 660.0,
      price_c: 750.0,
      discount: 12,
      size: "",
      color: "Archive Beige",
      label: "New in",
      category: "Scarf",
    },
    {
      id: 61,
      title: "Embroidered Logo Cotton Gabardine Baseball Cap",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/E1B16575-48ED-4DD9-9444-37BBC2F980F7?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 420.0,
      price_c: 850.0,
      discount: 50,
      size: "S",
      color: "Pink",
      label: "New in",
      category: "Cap",
    },
    {
      id: 62,
      title: "Monogram Motif Tropical Gabardine Visor Cap",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/D4BE863D-35E5-4B69-AE8E-A24F45111746?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 410.0,
      price_c: 450.0,
      discount: 38,
      size: "M",
      color: "Black",
      label: "Lightweight",
      category: "Cap",
    },
    {
      id: 63,
      title: "Vintage Check Olympia Pouch Wallet",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/6A498CFB-87AB-45E8-B27B-1DAA8D14FB0A?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 860.0,
      price_c: 1050.0,
      discount: 48,
      size: "",
      color: "Archive Beige",
      label: "New in",
      category: "Wallet",
    },
    {
      id: 64,
      title: "Monogram Raffia-effect Zip Pouch Wallet",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/AC7999B4-7B29-4B98-86A8-4AE454FE03AB?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 1090.0,
      price_c: 1150.0,
      discount: 55,
      size: "",
      color: "Black",
      label: "New in",
      category: "Wallet",
    },
    {
      id: 65,
      title: "Check and Leather Belt",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/A92FCF1F-8B14-46CE-B074-BC116014396E?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 590.0,
      price_c: 750.0,
      discount: 21,
      size: "80",
      color: "Archive Beige",
      label: "New in",
      category: "Belt",
    },
    {
      id: 66,
      title: "Check and Leather Reversible TB Belt",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/E1A726CA-A811-4C24-ADCF-DD1E2D6D7201?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 510.0,
      price_c: 810.0,
      discount: 37,
      size: "75",
      color: "Archive Beige",
      label: "New in",
      category: "Belt",
    },
    {
      id: 67,
      title: "Wool Oversized Cardigan",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/1264F9C5-4010-4FD0-823A-E4800B7C6284?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 1890.0,
      price_c: 2490.0,
      discount: 61,
      size: "M",
      color: "White",
      label: "New in",
      category: "Clothing",
    },
    {
      id: 68,
      title: "Monogram Wool Silk Blend Polo Shirt",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/8FFC6634-E8AA-49CF-8B41-C3840E0AF803?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 1150.0,
      price_c: 1550.0,
      discount: 33,
      size: "L",
      color: "Camel",
      label: "New in",
      category: "Clothing",
    },
    {
      id: 69,
      title: "Monogram Wool Silk Blend Jacquard Mini Skirt",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/EEE1AE6B-F8C0-42D9-996B-16B4CB3A6DC5?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 960.0,
      price_c: 1160.0,
      discount: 11,
      size: "S",
      color: "Archive Beige",
      label: "New in",
      category: "Clothing",
    },
    {
      id: 700,
      title: "Prorsum Label Cotton Hoodie",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/9214842E-A1E7-409A-AE67-E1CDEA860B2D?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 860.0,
      price_c: 1060.0,
      discount: 49,
      size: "XL",
      color: "Black",
      label: "New in",
      category: "Sweatshirts",
    },
    {
      id: 701,
      title: "Logo Print Cotton T-shirt",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/CE038FFE-668D-4D9C-993C-94626DCB93CB?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 480.0,
      price_c: 680.0,
      discount: 15,
      size: "S",
      color: "Pink",
      label: "New in",
      category: "Clothing",
    },
    {
      id: 702,
      title: "Check Cotton Gabardine Shirt Dress",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/978DC55A-D1BE-4391-B49B-DC717C7DE893?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 1850.0,
      price_c: 2180.0,
      discount: 25,
      size: "L",
      color: "Honey",
      label: "New in",
      category: "Clothing",
    },
    {
      id: 703,
      title: "Sleeveless Lace Trim Mesh Dress",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/6550614E-3A00-43CE-BF07-94F3CDF81509?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 1550.0,
      price_c: 1850.0,
      discount: 55,
      size: "M",
      color: "Black",
      label: "LIMITED AVAILABILITY",
      category: "Clothing",
    },
    {
      id: 704,
      title: "EKD Silk Jacquard Wide-leg Trousers",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/1931540C-1E3A-4675-82D0-CDFF471B098A?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 1550.0,
      price_c: 1850.0,
      discount: 60,
      size: "XXL",
      color: "Blue",
      label: "LIMITED AVAILABILITY",
      category: "Clothing",
    },
    {
      id: 705,
      title: "Wool Wide-leg Trousers",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/367A3157-EC88-4626-80F8-87E78DE53BF2?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 1150.0,
      price_c: 1350.0,
      discount: 30,
      size: "L",
      color: "Grey",
      label: "Pre-order",
      category: "Clothing",
    },
    {
      id: 706,
      title: "EKD Stretch Tulle Turtleneck Bodysuit",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/2009F9DB-1C83-40FA-B017-03BADEE02E3E?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 1890.0,
      price_c: 2190.0,
      discount: 10,
      size: "M",
      color: "Blue",
      label: "Regular Fit",
      category: "Clothing",
    },
    {
      id: 707,
      title: "Logo Detail Vintage Check Bra Top",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/A8000FDD-C6F0-4AA2-A164-D88533861D14?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 440.0,
      price_c: 640.0,
      discount: 11,
      size: "S",
      color: "Archive Beige",
      label: "Regular Fit",
      category: "Clothing",
    },
    {
      id: 708,
      title: "Vintage Check Wool Kilt",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/C52D2231-AA47-4116-9E88-8946603E73D3?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 1050.0,
      price_c: 1250.0,
      discount: 27,
      size: "S",
      color: "Archive Beige",
      label: "New in",
      category: "Clothing",
    },
    {
      id: 709,
      title: "Viscose Blend Knitted Pencil Skirt",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/E063764D-4EC5-41F5-A904-E95DA3A98B76?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 1250.0,
      price_c: 1450.0,
      discount: 71,
      size: "M",
      color: "Black",
      label: "New in",
      category: "Clothing",
    },
    {
      id: 710,
      title: "Macramé Lace Shorts",
      image:
        "https://assets.burberry.com/is/image/Burberryltd/86503E9D-F2E6-4A6B-A988-A35E77645A7E?$BBY_V2_SL_1x1$&wid=1023&hei=1023",
      price: 1250.0,
      price_c: 1450.0,
      discount: 80,
      size: "M",
      color: "Black",
      label: "New in",
      category: "Clothing",
    },
  ];

  useEffect(() => {
    //run some logic
    if (query === "") {
      setSuggation([]);
    } else {
      // console.log(query);
      let newSuggestions = products.filter((item) => {
        return item.title.toLowerCase().indexOf(query) !== -1 ? true : false;
      });
      setSuggation(newSuggestions);
    }
  }, [query]);

  return (
    <Stack direction={"row"} spacing={4} align="center">
      <NavDrawer/>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                to={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                <p
                  className={styles.label}
                  style={{ color: "white", fontWeight: "550" }}
                >
                  {navItem.label}
                </p>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
                bgColor={"black"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        border={"1px solid white"}
        padding={"5px"}
        fontSize={"14px"}
        height={"25px"}
        color={"white"}
        className={styles.searchInput}
        placeholder="Search on TrendyShop"
      />
      {query.length > 0 && (
        <div
          className={styles.searchLogo}
          style={{ marginTop: "4px", color: "white" }}
        >
          <span style={{ cursor: "pointer" }}>
            <RxCross1
              color="white"
              onClick={() => {
                setQuery("");
              }}
              cursor={"pointor"}
            />
          </span>
        </div>
      )}
      {suggation.length > 0 && (
        <Box
          border={"1px solid black transparent"}
          maxH={"200px"}
          position={"absolute"}
          w={"30%"}
          left={"37%"}
          top={"69px"}
          zIndex={"10"}
          bg={"lightgray"}
          borderRadius={"5px"}
          overflow={"hidden scroll"}
          opacity={".9"}
          padding={"10px"}
        >
          {suggation.map((item) => {
            return (
              <Link
                onClick={() => {
                  setQuery("");
                  window.reload();
                }}
                to={`/product/${item.id}`}
              >
                <Text textAlign={"center"} color={"black"} cursor={"pointer"}>
                  {item.title}
                </Text>
              </Link>
            );
          })}
        </Box>
      )}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("gray.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            color={"whiteAlpha.600"}
            transition={"all .3s ease"}
            _groupHover={{ color: "white" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text
            fontSize={"sm"}
            color={"whiteAlpha.700"}
            _groupHover={{ color: "white" }}
          >
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"gray.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
