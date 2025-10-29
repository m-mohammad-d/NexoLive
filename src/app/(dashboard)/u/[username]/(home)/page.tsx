import { getUserByUsername } from "@/service/user-service";
import { currentUser } from "@clerk/nextjs";


interface CreatorPageProps {
  params: {
    username: string;
  };
}

const CreatorPage = async ({ params }: CreatorPageProps) => {
  const externalUser = await currentUser();
  const user = await getUserByUsername(params.username);

  if (!user || user.externalUserId !== externalUser?.id) {
    throw new Error("Unauthorized");
  }

  return (
    <div className="h-full">
    </div>
  );
};

export default CreatorPage;
