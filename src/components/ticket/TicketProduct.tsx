import { Ticket } from "@/model/TicketModel";
import Image from "next/image";

type TicketProductProps = {
  index: number;
  ticket: Ticket;
  expandedIndex: number | null;
  toggleDescription: (index: number) => void;
  truncateText: (text: string, maxLength: number) => string;
};

export default function TicketProduct({
  index,
  ticket,
  expandedIndex,
  toggleDescription,
  truncateText,
}: TicketProductProps) {
  return (
    <>
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
    </>
  );
}
