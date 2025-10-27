"use server";

import { blockUser, unblockUser } from "@/service/block-service";

export const onBlock = async (id: string) => {
  try {
    const blockedUser = await blockUser(id);
    return blockedUser;
  } catch (error) {
    console.error("Error blocking user:", error);
    return null;
  }
};

export const onUnblock = async (id: string) => {
  try {
    const unblockedUser = await unblockUser(id);
    return unblockedUser;
  } catch (error) {
    console.error("Error unblocking user:", error);
    return null; 
  }
};
