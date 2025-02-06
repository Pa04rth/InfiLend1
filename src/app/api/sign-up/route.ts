import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";

import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { username, email, password } = await request.json();

    const user = await UserModel;
  } catch (error) {
    console.error("Error registering user", error);
    return Response.json(
      {
        status: "error",
        message: "Error registering user",
      },
      { status: 500 }
    );
  }
}
