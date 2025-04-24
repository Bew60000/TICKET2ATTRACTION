import Image from "next/image";

export default function Header() {
  const title = "Ticket2Attraction";
  return (
    <div className="h-[60px] bg-[#FFA619] flex items-center p-3 ">
      <Image
        src="/assets/logo.webp"
        alt="logo"
        width={80}
        height={80}
        className="mr-4"
      />
      <p className="text-2xl font-semibold text-white">{title.toUpperCase()}</p>
    </div>
  );
}
