"use client";

import Image from "next/image";
import { useTickets } from "../lib/useTickets";
import { useCartContext } from "@/context/useCartContext";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function Tickets() {
  const { cart, setCart } = useCartContext();
  const {
    // tickets,
    expandedIndex,
    toggleDescription,
    truncateText,
    addToCart,
    searchTerm,
    setSearchTerm,
    sortKey,
    setSortKey,
    setSortDirection,
    sortDirection,
    sortedTickets,
  } = useTickets(cart, setCart);

  return (
    <div className="bg-white rounded shadow max-w-[650px]">
      <h1 className="text-2xl p-4 font-bold mb-4 text-center bg-[#FFA619] text-white rounded-t">
        Tickets
      </h1>

      <div className="flex justify-end items-center p-4 gap-2">
        <input
          type="text"
          placeholder="Search tickets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded max-h-[32px]"
        />

        <select
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value as "title" | "price")}
          className="px-3 py-1 rounded bg-[#FFA619] text-white font-semibold text-[14px]"
        >
          <option value="title">Sort by Title</option>
          <option value="price">Sort by Price</option>
        </select>

        <button
          onClick={() =>
            setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))
          }
          className="text-sm border px-2 py-2 rounded bg-[#FFA619] text-white"
        >
          {sortDirection === "asc" ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
        </button>
      </div>

      {sortedTickets.map((ticket, index) => (
        <div key={index} className=" rounded p-4 shadow transition flex">
          <Image
            src={ticket.img}
            alt={ticket.title}
            width={100}
            height={100}
            className="w-20 h-20 object-cover rounded mr-4"
            unoptimized
          />
          <div className="flex flex-col w-3/4">
            <h2 className="text-lg font-semibold">{ticket.title}</h2>
            <p className="text-gray-700 text-sm mr-4">
              {expandedIndex === index
                ? ticket.description
                : truncateText(ticket.description, 80)}
              {ticket.description.length > 80 && (
                <button
                  onClick={() => toggleDescription(index)}
                  className="text-gray-500 ml-2 hover:underline text-xs"
                >
                  {expandedIndex === index ? "short" : "read more"}
                </button>
              )}
            </p>
          </div>

          <div className="flex justify-end items-center w-2/4 gap-4">
            <p className="text-gray-700 font-semibold flex items-center ">
              {ticket.price.toLocaleString()} THB
            </p>

            <button
              onClick={() => addToCart(ticket)}
              className="bg-white text-[#FFA619] font-bold border-2 border-[#FFA619] px-3 py-1 rounded text-sm"
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
