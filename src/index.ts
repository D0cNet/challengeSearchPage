import { waitForAtomic } from "./utils/atomic";

async function main() {
  await waitForAtomic();
  const searchInterface: HTMLAtomicSearchInterfaceElement =
    document.querySelector("atomic-search-interface")!;

  const organizationId = process.env.ORGANIZATION_ID!;
  const platformEnvironment = process.env.PLATFORM_ENVIRONMENT || "prod";
  const accessToken = process.env.API_KEY!;


  const platformUrlMap: Record<string, string> = {
    dev: "https://dev-platform.cloud.coveo.com",
    stg: "https://staging-platform.cloud.coveo.com",
    prod: "https://platform.cloud.coveo.com",
    hipaa: "https://hipaa-platform.cloud.coveo.com",
  };

  
  await searchInterface.initialize({
    accessToken,
    organizationId,
    platformUrl: platformUrlMap[platformEnvironment] || platformUrlMap["prod"],
    analytics: {
      analyticsMode: "legacy",
    },
 
  });
 
  searchInterface.executeFirstSearch();
   
}

main();
