import { NextRequest, NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{ id: string }>;
};

// GET /api/items/[id]
export async function GET(_request: NextRequest, { params }: RouteContext) {
  const { id } = await params;

  return NextResponse.json({
    id,
    name: `Item ${id}`,
    status: "active",
  });
}

// PATCH /api/items/[id]
export async function PATCH(request: NextRequest, { params }: RouteContext) {
  const { id } = await params;
  const body = await request.json();

  return NextResponse.json({
    id,
    updated: body,
    message: `Updated item ${id}`,
  });
}

// DELETE /api/items/[id]
export async function DELETE(_request: NextRequest, { params }: RouteContext) {
  const { id } = await params;

  return NextResponse.json({
    id,
    deleted: true,
    message: `Deleted item ${id}`,
  });
}
