import React from "react";
import { notFound } from "next/navigation";
import { isFollowingUser } from "@/service/follow-service";
import { getUserByUsername } from "@/service/user-service";
import { Actions } from "./_components/actions";

interface UserPageProps {
  params: Promise<{ username: string }>;
}

export default async function UserPage({ params }: UserPageProps) {
  const { username } = await params;
  const user = await getUserByUsername(username);

  if (!user) notFound();

  const isFollowing = await isFollowingUser(user.id);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{user.username}</h1>
      <p className="mt-2">{user.bio}</p>
      <p className="mt-2 text-sm text-gray-500">
        Followers: {user._count.followedBy}
      </p>
      <p className="mt-2 text-sm text-gray-500">
        {isFollowing
          ? "You are following this user"
          : "You are not following this user"}
      </p>
      <Actions userId={user.id} isFollowing={isFollowing} />
    </div>
  );
}
