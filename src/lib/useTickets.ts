"use client";
import { ticketsApi } from "@/app/api/api";
import { Ticket } from "@/model/TicketModel";
import { useEffect, useState } from "react";

export const useTickets = (
  cart: Ticket[],
  setCart: React.Dispatch<React.SetStateAction<Ticket[]>>
) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const addToCart = (ticket: Ticket) => {
    const existingIndex = cart.findIndex((item) => item.id === ticket.id);
  
    let updatedCart: Ticket[];
  
    if (existingIndex !== -1) {
      updatedCart = cart.map((item, index) => {
        if (index === existingIndex) {
          return { ...item, quantity: (item.quantity || 1) + 1 };
        }
        return item;
      });
    } else {
      updatedCart = [...cart, { ...ticket, quantity: 1 }];
    }
  
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    fetch(ticketsApi)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTickets(data);
        } else if (Array.isArray(data.tickets)) {
          setTickets(data.tickets);
        } else {
          console.error("Unexpected data format:", data);
        }
      });
  }, []);

  const [sortKey, setSortKey] = useState<"title" | "price">("title");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const [searchTerm, setSearchTerm] = useState("");

  const filteredTickets = tickets.filter((ticket) =>
    ticket.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTickets = [...filteredTickets].sort((a, b) => {
    if (sortKey === "title") {
      return sortDirection === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    } else {
      return sortDirection === "asc" ? a.price - b.price : b.price - a.price;
    }
  });

  return {
    tickets,
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
  };
};
