import { DiscountData } from "@/model/TicketModel";
import { Dispatch, SetStateAction } from "react";

type DiscountProps = {
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
  handleApplyCode: () => Promise<void>;
  discountData: DiscountData | null;
  discountAmount: number;
};

export default function Discount({
  code,
  setCode,
  handleApplyCode,
  discountData,
  discountAmount,
}: DiscountProps) {
  return (
    <>
      <div className="ml-0">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your discount code"
          className="border px-3 py-1 rounded-l w-1/3 ml-4 h-[30px]"
        />
        <button
          onClick={handleApplyCode}
          className="ml-0 px-2 py-1 bg-[#FFA619] text-white rounded-r hover:bg-amber-600"
        >
          Code
        </button>
      </div>

      <div className="font-bold text-red-600">
        {discountData ? (
          <p>-{discountAmount.toLocaleString()} THB</p>
        ) : (
          <p>0 THB</p>
        )}
      </div>
    </>
  );
}
