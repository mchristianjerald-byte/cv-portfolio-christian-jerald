import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const persons = await prisma.person.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(persons);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { firstName, lastName, email, phone, age } = body;

  if (!firstName || !lastName || !email) {
    return NextResponse.json({ error: "firstName, lastName and email are required" }, { status: 400 });
  }

  const person = await prisma.person.create({
    data: {
      firstName: String(firstName),
      lastName: String(lastName),
      email: String(email),
      phone: phone ? String(phone) : null,
      age: age !== undefined && age !== "" ? Number(age) : null,
    },
  });

  return NextResponse.json(person, { status: 201 });
}
