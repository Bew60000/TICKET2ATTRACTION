import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    discount : [
        {
          "code": "10%OFF",
          "discount": 10,
          "type": "percentage"
        },
        {
          "code": "200OFF",
          "discount": 200,
          "type": "amount"
        },
        {
          "code": "50%OFF",
          "discount": 50,
          "type": "percentage"
        }
      ]
  });
}
