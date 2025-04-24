"use client";


import { useTickets } from "../../lib/useTickets";
import { useCartContext } from "@/context/useCartContext";
import SearchSort from "./SearchSort";
import TicketProduct from "./TicketProduct";

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

      <SearchSort
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortKey={sortKey}
        setSortKey={setSortKey}
        setSortDirection={setSortDirection}
        sortDirection={sortDirection}
      />

      {sortedTickets.map((ticket, index) => (
        <div key={index} className=" rounded p-4 shadow transition flex">
          <TicketProduct
          index={index}
            ticket={ticket}
            expandedIndex={expandedIndex}
            toggleDescription={toggleDescription}
            truncateText={truncateText}
          />

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
