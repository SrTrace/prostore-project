"use server"

import { CartItem } from "@/types";

export async function addItemToCart(data: CartItem) {
  const d = data;// temp line for eslint
  return {
    success: true,
    message: "Item added to cart",
  };
};
