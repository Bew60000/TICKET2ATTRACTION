import { ArrowDown, ArrowUp } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type SearchSortProps = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  sortKey: "title" | "price";
  setSortKey: Dispatch<SetStateAction<"title" | "price">>;
  setSortDirection: Dispatch<SetStateAction<"asc" | "desc">>;
  sortDirection: "asc" | "desc";
};

export default function SearchSort({
  searchTerm,
  setSearchTerm,
  sortKey,
  setSortKey,
  setSortDirection,
  sortDirection,
}: SearchSortProps) {
  return (
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
        {sortDirection === "asc" ? (
          <ArrowUp size={14} />
        ) : (
          <ArrowDown size={14} />
        )}
      </button>
    </div>
  );
}
