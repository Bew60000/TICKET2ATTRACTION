"use client";

import { discountApi } from "@/app/api/api";
import { DiscountData, Ticket } from "@/model/TicketModel";
import { useState } from "react";

export const useCart = (
  cart: Ticket[],
  setCart: React.Dispatch<React.SetStateAction<Ticket[]>>
) => {
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const [code, setCode] = useState("");
  const [discountData, setDiscountData] = useState<DiscountData | null>(null);
  // const [error, setError] = useState("");

  const handleApplyCode = async () => {
    try {
      const res = await fetch(discountApi);
      const data = await res.json();

      const found = data.discount.find((d: DiscountData) => d.code === code);

      if (found) {
        setDiscountData(found);
      } else {
        setDiscountData(null);
      }
    } catch (err) {
      console.error("Error fetching discount data:", err);
    }
  };

  const calculateDiscount = () => {
    if (!discountData) return 0;

    return discountData.type === "percentage"
      ? (total * discountData.discount) / 100
      : discountData.discount;
  };

  const discountAmount = calculateDiscount();
  const grandTotal = Math.max(total - discountAmount, 0);

  const increaseQuantity = (item: Ticket) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          quantity: (cartItem.quantity || 1) + 1,
        };
      }
      return cartItem;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          const newQty = (item.quantity || 1) - 1;
          if (newQty <= 0) return null;
          return { ...item, quantity: newQty };
        }
        return item;
      })
      .filter((item): item is Ticket => item !== null);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return {
    total,
    increaseQuantity,
    decreaseQuantity,
    code,
    setCode,
    handleApplyCode,
    discountData,
    discountAmount,
    grandTotal,
  };
};
