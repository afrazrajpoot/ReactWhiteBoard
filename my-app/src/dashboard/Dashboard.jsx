
// import { useOrganization } from "@clerk/nextjs";

import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";
import DashboardLayout from "./Layout";


const DashboardPage = ({
  searchParams,
}) => {
//   const { organization } = useOrganization();

  return ( 
    <DashboardLayout>

    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
          <EmptyOrg />
          ) : (
              <BoardList
              orgId={organization.id}
              query={searchParams}
              />
              )}
    </div>
              </DashboardLayout>
   );
};
 
export default DashboardPage;