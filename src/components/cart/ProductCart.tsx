import { Ticket } from "@/model/TicketModel";
import Image from "next/image";

type ProductCartProps = {
    item: Ticket;
    decreaseQuantity: (id: number) => void;
    increaseQuantity: (item: Ticket) => void;
  };

export default function ProductCart({
    item,
    decreaseQuantity,
    increaseQuantity,
  }: ProductCartProps) {
  return (
    <>
      <div className="flex items-center gap-2 w-4/5">
        <Image
          src={item.img}
          alt={item.title}
          width={100}
          height={100}
          className="w-12 h-12 object-cover rounded"
        />
        <div className="flex flex-col">
          <p className="font-medium">{item.title}</p>
          <p className="text-gray-500 text-xs">
            {item.price.toLocaleString()} THB
          </p>
        </div>
      </div>

      <div className="flex gap-2 items-center mt-1">
        <button
          className="px-2 bg-gray-200 rounded text-xs"
          onClick={() => decreaseQuantity(item.id)}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          className="px-2 bg-gray-200 rounded text-xs"
          onClick={() => increaseQuantity(item)}
        >
          +
        </button>
      </div>
    </>
  );
}
