import ChallengePage from "./content/challenge";
import ConsultPage from "./content/consult";
import ContactUsPage from "./content/contactUs";
import CooperationPlatformPage from "./content/cooperationPlatform";
import CoreTeamPage from "./content/coreTeam";
import NumberPage from "./content/number";
import SolutionPage from "./content/solution";

export default function Home() {
  return (
    <>
      <ConsultPage />
      <ChallengePage />
      <SolutionPage />
      <CoreTeamPage />
      <CooperationPlatformPage />
      <NumberPage />
      <ContactUsPage />
    </>
  );
}
