import { NextResponse } from "next/server";
import { actorWhereInputObjectZodSchema } from "../../../../prisma/generated/schemas/objects/actorWhereInput.schema";

export function validateActorWhere(where: any) {
  if (!where) return null;
  const result = actorWhereInputObjectZodSchema.safeParse(where);
  if (!result.success) {
    return NextResponse.json(
      { error: "Invalid where parameter", details: result.error },
      { status: 400 }
    );
  }
  return null;
}
// ...existing code...
