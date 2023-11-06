import React from "react";
import Button from "@mui/material/Button";

export default function Cart() {
  function retriveCart() {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    console.log(cart);
    return cart;
  }

  return (
    <div>
      <h1>Cart</h1>
      <Button variant="outlined" onClick={() => retriveCart()}>
        Outlined
      </Button>
    </div>
  );
}
