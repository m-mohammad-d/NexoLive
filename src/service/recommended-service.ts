import { db } from "@/lib/db";

export const getRecommended = async () => {
  const users = await db.user.findMany();
  return users;
};
