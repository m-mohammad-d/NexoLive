import { useViewerToken } from "@/hooks/useVieverToken";
import { Stream, User } from "@prisma/client";

export function StreamPlayer({
  user,
  stream,
  isFollowing,
}: {
  user: User & { stream: Stream | null };
  stream: Stream;
  isFollowing: boolean;
}) {
  const { identity, name, token } = useViewerToken(user.id);
  return <div></div>;
}
