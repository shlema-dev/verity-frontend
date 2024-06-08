import { sendMail } from "@/utils/send-mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("POST request submitted, running...");
  let response = { message: "Invalid Request" };
  const data = await request.formData();
  const firstName = data.get("firstname") as string;
  const lastName = data.get("lastname") as string;
  const email = data.get("email") as string;
  const message = data.get("message") as string;

  if (!firstName || !lastName || !email || !message) {
    response = { message: "Please fill out all required Fields." };
  } else {
    try {
      console.log("Calling sendMail action...");
      const res = await sendMail(firstName, lastName, email, message);
      response = { message: "Success" };
      console.log("Successfully sent mail, returning success from api route.");
      return NextResponse.json(response, { status: 200 });
    } catch (error) {
      response = { message: "Error" };
      console.log("Failed to send Mail, returning from api route.");
      return NextResponse.json(response, { status: 500 });
    }
  }
}
