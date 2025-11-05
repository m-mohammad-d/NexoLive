import React from "react";
import { notFound } from "next/navigation";

import { StreamPlayer } from "@/components/stream-player";
import { isBlockedByUser } from "@/service/block-service";
import { isFollowingUser } from "@/service/follow-service";
import { getUserByUsername } from "@/service/user-service";

interface UserPageProps {
  params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: UserPageProps) {
  const { username } = await params;
  return {
    title: username,
  };
}

export default async function UserPage({ params }: UserPageProps) {
  const { username } = await params;

  const user = await getUserByUsername(username);

  if (!user || !user.stream) notFound();

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  if (isBlocked) notFound();

  return (
    <StreamPlayer user={user} isFollowing={isFollowing} stream={user.stream} />
  );
}
