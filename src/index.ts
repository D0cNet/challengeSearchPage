import { waitForAtomic } from "./utils/atomic";

async function main() {
  await waitForAtomic();
  const searchInterface: HTMLAtomicSearchInterfaceElement =
    document.querySelector("atomic-search-interface")!;

  const organizationId = process.env.ORGANIZATION_ID!;
  const accessToken = process.env.API_KEY!;
  const platformUrl = process.env.PLATFORM_URL!;

  await searchInterface.initialize({
    accessToken,
    organizationId,
    platformUrl,
    analytics: {
      analyticsMode: "legacy",
    },
 
  });
 
  searchInterface.executeFirstSearch();
   
}

main();
