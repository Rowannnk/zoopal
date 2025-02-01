import User from "@/Models/User";
import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await dbConnect();

    const url = new URL(request.url);
    const userId = url.searchParams.get("user-id"); // Extract user-id from the URL query params

    if (!userId) {
      return NextResponse.json(
        { message: "User not authenticated" },
        { status: 401 }
      );
    }

    // Find user by ID
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: "success",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during fetching user data:", error);
    return NextResponse.json({ message: "failure" }, { status: 500 });
  }
}
