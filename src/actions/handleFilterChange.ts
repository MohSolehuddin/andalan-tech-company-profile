"use server";
import { redirect } from "next/navigation";

export async function handleFilterChange(formData: FormData) {
  const key = formData.get("key") as string;
  const value = formData.get("value") as string;
  const currentPath = "/";
  const params = new URLSearchParams();
  if (value === "") {
    params.delete(key);
  } else {
    params.set(key, value);
  }

  redirect(`${currentPath}?${params.toString()}`);
}
