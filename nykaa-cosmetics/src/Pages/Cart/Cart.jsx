import React, { useContext } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  Button,
  Center,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  TableContainer,
  Image,
  Heading,
  Link,
} from "@chakra-ui/react";
import { checkout, removeFromCart } from "../../Components/CartContext/action";
import { CartContext } from "../../Components/CartContext/CartContextProvider";
import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const navigate = useNavigate();

  const handleCheckout = () => {
    dispatch(checkout());
    onClose();
    navigate("/");
  };

  return (
    <Box>
      <Heading
        fontFamily="cursive"
        marginTop="15px"
        textAlign="center"
        color="rgb(252,39,121)"
      >
        Your Cart
      </Heading>
      <TableContainer mt="30px">
        <Table
          variant="simple"
          colorScheme="gray"
          size={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
        >
          <TableCaption>No Exchange | No Refunds</TableCaption>
          <Thead>
            <Tr>
              <Th fontSize={{ base: "xs", md: "md" }}>Product Image</Th>
              <Th fontSize={{ base: "xs", md: "md" }}>Product Name</Th>
              <Th fontSize={{ base: "xs", md: "md" }}>Price (INR)</Th>
              <Th fontSize={{ base: "xs", md: "md" }}>Remove From Cart</Th>
            </Tr>
          </Thead>
          <Tbody>
            {state.map((cartItem) => (
              <Tr key={cartItem.id}>
                <Td width="350px" fontSize={{ base: "xs", md: "md" }}>
                  <Image w="30%" src={cartItem.image} alt="" />
                </Td>
                <Td fontSize={{ base: "xs", md: "md" }}>{cartItem.title}</Td>
                <Td fontSize={{ base: "xs", md: "md" }}>{cartItem.price}</Td>
                <Td fontSize={{ base: "xs", md: "md" }}>
                  <Button onClick={() => dispatch(removeFromCart(cartItem.id))}>
                    Remove From Cart
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th fontSize={{ base: "xs", md: "md" }}>Final Price</Th>
              <Th fontSize={{ base: "xs", md: "md" }}>...</Th>
              <Th fontSize={{ base: "xs", md: "md" }}>
                {Math.round(state.reduce((a, c) => a + c.price, 0))}
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

      <Center mt={{ base: 4, md: 8 }}>
        <button className={styles.btn} variant="online" onClick={onOpen}>
          Place Order
        </button>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Place Order
              </AlertDialogHeader>
              <AlertDialogBody>
                Are you sure you want to place this order?
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancle
                </Button>

                <Button colorScheme="red" onClick={handleCheckout} ml={3}>
                  Yes
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Center>
    </Box>
  );
};

export default Cart;
