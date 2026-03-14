import RoleEmptyState from "../_components/RoleEmptyState";
import { getUser } from "../../utils/getUser";

export default async function Page() {
  const user = await getUser();

  return (
    <div className="flex min-h-[calc(100dvh-12rem)] w-full items-center justify-center">
      <RoleEmptyState role={user?.role} entity="class" />
    </div>
  );
}
