export type Ticket = {
  id: number;
  title: string;
  img: string;
  price: number;
  description: string;
  quantity?: number;
};

export type DiscountData = {
  code: string;
  discount: number;
  type: "percentage" | "amount";
};