import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    tickets: [
      {
        id: 1,
        title: "Siam Amazing Park",
        img: "/assets/tickets-img/siam.jpeg",
        price: 1000,
        description:
          "สัมผัสความสนุกสุดมันส์กับสวนสนุกและสวนน้ำที่ใหญ่ที่สุดในกรุงเทพฯ! เครื่องเล่นสุดหวาดเสียว สวนน้ำขนาดยักษ์ และโซนเด็กเล็กครบครันทั้งครอบครัว!",
      },
      {
        id: 2,
        title: "Safari World",
        img: "/assets/tickets-img/safari.avif",
        price: 1200,
        description:
          "เปิดประสบการณ์ซาฟารีสุดตื่นเต้น! ขับรถชมสัตว์แบบใกล้ชิด พร้อมโชว์แสนสนุกจากโลมา ลิงอวกาศ และนกแก้วพูดได้!",
      },
      {
        id: 3,
        title: "Dream World",
        img: "/assets/tickets-img/dream.jpg",
        price: 1500,
        description:
          "โลกแห่งจินตนาการที่กลายเป็นจริง! สนุกกับเครื่องเล่นสุดมันส์ บ้านหิมะสุดฟิน และมุมถ่ายรูปแฟนตาซีสุดอลังการ!",
      },
      {
        id: 4,
        title: "Sea Life Bangkok Ocean World",
        img: "/assets/tickets-img/sea.jpg",
        price: 2000,
        description:
          "ดำดิ่งสู่โลกใต้ทะเลสุดตระการตา! พบสัตว์ทะเลหายาก ฉลามตัวเป็น ๆ และอุโมงค์น้ำสุดอลังการ ใจกลางเมือง!",
      },
    ],
  });
}
