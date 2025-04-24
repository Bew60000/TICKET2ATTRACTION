"use client";

import { useCartContext } from "@/context/useCartContext";
import { useCart } from "../../lib/useCart";

import Discount from "./Discount";
import ProductCart from "./ProductCart";

export default function Cart() {
  const { cart, setCart } = useCartContext();
  const {
    total,
    increaseQuantity,
    decreaseQuantity,
    code,
    setCode,
    handleApplyCode,
    discountData,
    discountAmount,
    grandTotal,
  } = useCart(cart, setCart);

  return (
    <div className="bg-white rounded shadow max-w-[550px] min-w-[380px]">
      <h1 className="text-2xl p-4 font-bold mb-4 text-center bg-[#FFA619] text-white rounded-t">
        Cart
      </h1>

      <ul>
        {cart.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center text-sm p-4"
          >
            <ProductCart
              item={item}
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
            />
          </li>
        ))}
      </ul>

      <LayoutText>
        <p>Total: </p>
        <p>{total.toLocaleString()} THB</p>
      </LayoutText>

      <div className="px-4 flex items-center justify-between">
        <p className="font-bold">Discount: </p>
        <Discount
          code={code}
          setCode={setCode}
          handleApplyCode={handleApplyCode}
          discountData={discountData}
          discountAmount={discountAmount}
        />
      </div>

      <LayoutText>
        <p>Grand Total:</p>
        <p>{grandTotal.toLocaleString()} THB</p>
      </LayoutText>
    </div>
  );
}

function LayoutText({ children }: { children: React.ReactNode }) {
  return <div className="flex justify-between font-bold p-4 ">{children}</div>;
}
