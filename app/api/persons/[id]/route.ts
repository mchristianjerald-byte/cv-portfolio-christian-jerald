import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();
  const { firstName, lastName, email, phone, age } = body;

  const person = await prisma.person.update({
    where: { id },
    data: {
      ...(firstName && { firstName: String(firstName) }),
      ...(lastName && { lastName: String(lastName) }),
      ...(email && { email: String(email) }),
      phone: phone ? String(phone) : null,
      age: age !== undefined && age !== "" ? Number(age) : null,
    },
  });

  return NextResponse.json(person);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  await prisma.person.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
