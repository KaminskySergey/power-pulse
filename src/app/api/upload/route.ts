import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { auth } from "@/auth";
import { updateAvatar } from "../../../../actions/profile";

export const POST = async (req: any, _: any) => {
  const formData = await req.formData();
  const session = await auth();
  if (!session) return;
  
  const file = formData.get("file");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = file.name;
  try {
    await writeFile(
      path.join(process.cwd(), "public/uploads/" + filename),
      buffer
    );
    const result = await updateAvatar(filename);
    return NextResponse.json({
      Message: "Success",
      status: 201,
      avatarPath: result.avatarPath,
    });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};
