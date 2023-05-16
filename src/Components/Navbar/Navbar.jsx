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
import img from "../Assets/nykaa.png";
import NavDrawer from "./NavDrawer";
import axios from "axios";

const NAV_ITEMS = [
  {
    label: "Brands",
    children: [
      {
        label: "Lakme",
        subLabel: "India's largest brand",
        href: "/allproducts?page=1",
      },
      {
        label: "Nivea",
        subLabel: "India's oldest trustable brand",
        href: "/allproducts?page=1",
      },
      {
        label: "Maybelline",
        subLabel: "India's most selling brand",
        href: "/allproducts?page=1",
      },
      {
        label: "Lotus",
        subLabel: "Get your best choice",
        href: "/allproducts?page=1",
      },
      {
        label: "MAC",
        subLabel: "World's best cosmetics",
        href: "/allproducts?page=1",
      },
      {
        label: "Nykaa",
        subLabel: "Get your best product at low cost",
        href: "/allproducts?page=1",
      },
    ],
  },
  {
    label: "Products",
    href: "/allproducts?page=1",
  },
  {
    label: "Categories",
    href: "/",
  },
  {
    label: "Luxe",
    href: "/",
  },
  {
    label: "NykaaFashion",
    href: "/",
  },

  {
    label: "BeautyAdvice",
    href: "/",
  },
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const toast = useToast();
  const [state, setState] = useState([]);

  const getCartData = async () => {
    let res = await axios.get(
      "https://wandering-clam-jacket.cyclic.app/NykaaCart"
    );
    console.log(res.data);
    setState(res.data);
  };

  useEffect(() => {
    getCartData();
  }, []);
console.log(state.length);
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
        top={"-1px"}
        zIndex={"1000"}
        border={"1px solid lightgray"}
        background={"white"}
      >
        <Flex
          bg={"white"}
          color={useColorModeValue("gray.600", "white")}
          maxH={"70px"}
          minH={"70px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
          width={"92.8%"}
          margin={"auto"}
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
                <img src={img} alt="img" width={"100px"} />
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
                    label={`Click to go into the cart`}
                    fontSize="md"
                    background="rgb(248,79,144)"
                    color={"white"}
                  >
                    <span style={{ marginLeft: "4px" }}>Cart</span>
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
                  color={"deeppink"}
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
                  bg={"deeppink"}
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
  const [query, setQuery] = useState("");
  const [suggation, setSuggation] = useState([]);

  const products = [
    {
      id: 1,
      title: "Maybelline New York Fit Me Matte+Poreless Liquid",
    },
    {
      id: 2,
      title: "Lakme 9 To 5 Primer + Matte Powder Compact",
    },
    {
      id: 3,
      title: "Nykaa So Creme! Creamy Matte Lipstick",
    },
    {
      id: 4,
      title: "M.A.C Strobe Cream / Mini Hydratant Lumineux Pinklite",
    },
    {
      id: 5,
      title: "Maybelline New York Lash Sensational Sky High",
    },
    {
      id: 6,
      title: "Lakme Absolute Skin Dew Serum Foundation",
    },
    {
      id: 7,
      title: "Nykaa All Day Matte Waterproof, Transfer Proof",
    },
    {
      id: 8,
      title: "M.A.C Powder Kiss Velvet Blur Slim Stick",
    },
    {
      id: 9,
      title: "Lakme 9 to 5 Primer + Matte Powder Foundation Compact",
    },
    {
      id: 10,
      title: "Nykaa Matte To Last ! Liquid Lipstick",
    },
    {
      id: 11,
      title: "Lotus Professional Phyto-Rx Whitening & Brightening Serum",
    },
    {
      id: 12,
      title: "Nivea Soft Light Moisturizer Cream Playful Peach For Hands",
    },
    {
      id: 13,
      title: "Nykaa Eyes On Me! 10-in-1 Eyeshadow Palette",
    },
    {
      id: 14,
      title: "NIVEA Fruity Shine Lip Balm",
    },
    {
      id: 15,
      title: "Lakme Absolute Matte Ultimate Lip Color",
    },
    {
      id: 16,
      title: "Nivea Soft Berry Blossom Moisturizing Cream And",
    },
    {
      id: 17,
      title: "Lotus Herbals Radiant Gold Cellular Glow Facial Kit",
    },
    {
      id: 18,
      title: "Maybelline New York Instant Age Rewind Eraser Dark Circles",
    },
    {
      id: 19,
      title: "Nivea Soft Combo Pack Of 3",
    },
    {
      id: 20,
      title: "Lotus Herbals YouthRx Anti-Ageing Transforming Crème",
    },
    {
      id: 21,
      title: "MAC Studio fix fluid",
    },
    {
      id: 22,
      title: "Lotus Professional Retemin Plant Retinol & Vitamin C ",
    },
    {
      id: 23,
      title: "Maybelline New York Fit Me Mono Blush",
    },
    {
      id: 24,
      title: "MAC Retro Lipstick",
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
      <NavDrawer />
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
                  style={{ color: "black", fontWeight: "550" }}
                >
                  {navItem.label}
                </p>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                p={4}
                rounded={"xl"}
                minW={"sm"}
                bgColor={"rgba(241,206,226,.9)"}
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
        // border={"1px solid deeppink"}
        padding={"5px"}
        fontSize={"16px"}
        height={"35px"}
        color={"deeppink"}
        className={styles.searchInput}
        placeholder="Search on Nykaa"
      />
      {query.length > 0 && (
        <div
          className={styles.searchLogo}
          style={{ marginTop: "4px", color: "white" }}
        >
          <span style={{ cursor: "pointer" }}>
            <RxCross1
              color="black"
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
          border={"1px solid lightgray"}
          maxH={"200px"}
          position={"absolute"}
          w={"30%"}
          left={"37%"}
          top={"69px"}
          zIndex={"10"}
          bg={"rgb(250,237,242)"}
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
                to={`/allproducts/${item.id}`}
              >
                <Text
                  textAlign={"center"}
                  color={"deeppink"}
                  cursor={"pointer"}
                >
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
            color={"deeppink"}
            transition={"all .3s ease"}
            _groupHover={{ color: "deeppink" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text
            fontSize={"sm"}
            color={"deeppink"}
            _groupHover={{ color: "deeppink" }}
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
