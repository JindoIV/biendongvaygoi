import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  const questions = await sql`SELECT * FROM questionSongTu`;
  return NextResponse.json({ questions }, { status: 200 });
}
