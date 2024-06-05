import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  const questions = await sql`SELECT * FROM questionAnBang`;
  return NextResponse.json({ questions }, { status: 200 });
}
