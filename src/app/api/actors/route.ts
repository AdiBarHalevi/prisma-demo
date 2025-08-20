import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { validateActorWhere } from "./validateActorSelect";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  // Build 'where' from query params
  const params = Object.fromEntries(request.nextUrl.searchParams.entries());
  const where = Object.keys(params).length > 0 ? params : undefined;
  const validationResponse = validateActorWhere(where);
  if (validationResponse) return validationResponse;

  try {
    const actors = await prisma.actor.findMany({
      where,
      take: 10,
    });
    return NextResponse.json(actors);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch actors" },
      { status: 500 }
    );
  }
}
