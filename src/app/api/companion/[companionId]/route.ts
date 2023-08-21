import prismadb from "@/lib/prismadb";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { companionId: string } }
) {
  try {
    const body = await req.json();
    const user = await currentUser();
    const { name, description, instructions, seed, src, categoryId } = body;

    if (!params.companionId) {
      return new NextResponse("No id", { status: 400 });
    }

    if (!user || !user.id || !user.firstName) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
  

    if (
      !src ||
      !name ||
      !description ||
      !instructions ||
      !seed ||
      !categoryId
    ) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const companion = await prismadb.companion.update({
      where: {
        id: params.companionId, userId : user.id
      },
      data: {
        categoryId,
        userId: user.id,
        userName: user.firstName,
        src,
        name,
        description,
        instructions,
        seed
      }
    });
    return new NextResponse(JSON.stringify(companion), { status: 200 });
    //Check for subscription
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
export async function DELETE(
  req: Request,
  { params }: { params: { companionId: string } }
) {
  try {
    const {userId}  = auth()


    if(!userId){ 
      return new NextResponse("Unauthorized", {status: 401})
    }

    const companion = await prismadb.companion.delete({
      where: {
        userId,
        id: params.companionId
      }
    })

    return new NextResponse("Succeed", { status: 200 });
  } catch (error) {
    console.log("DELETE_ERROR",error);
    return new NextResponse("DELETE_ERROR", { status: 500 });
  }
}
