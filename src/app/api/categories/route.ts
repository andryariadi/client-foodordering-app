import { NextResponse } from "next/server";

export const GET = () => {
  return new NextResponse("Hello bree", { status: 200 });
};
