"use client";
import React, { useState, useEffect, useCallback } from "react";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Cart(props: any) {
  let cart = props.cart;
  const [cartTotal, setCartTotal] = useState(0);
  const [cartEmpty, setCartEmpty] = useState(true);

  useEffect(() => {
    let total = 0;
    cart.forEach((cart: any) => {
      total += cart.price * cart.quantity;
    });
    setCartTotal(total);

    if (cart.length > 0) {
      setCartEmpty(false);
    } else {
      setCartEmpty(true);
    }
  }, [cart]);

  function clearCart() {
    localStorage.removeItem("cart");
    cart = [];
    setCartTotal(0);
    setCartEmpty(true);
  }

  return (
    <div>
      {cartEmpty ? (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Your cart is empty</h1>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-5">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((cartItem: any) => (
                  <TableRow
                    key={cartItem.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{cartItem.name}</TableCell>
                    <TableCell align="right">{cartItem.quantity}</TableCell>
                    <TableCell align="right">{"£ " + cartItem.price}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell align="right">Total</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">{"£ " + cartTotal}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button onClick={() => clearCart()}>Clear All</Button>
          </TableContainer>
        </div>
      )}
    </div>
  );
}
