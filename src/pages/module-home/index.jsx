import ChallengePage from './challenge.jsx';
import ConsultPage from './consult.jsx';
import ContactUsPage from './contactUs.jsx';
import CooperationPlatformPage from './cooperationPlatform.tsx';
import CoreTeamPage from './coreTeam.jsx';
import NumberPage from './number.jsx';
import SolutionPage from './solution.jsx';

function Index() {
  return (
    <div>
      <ConsultPage />
      <ChallengePage />
      <SolutionPage />
      <CoreTeamPage />
      <CooperationPlatformPage />
      <NumberPage />
      <ContactUsPage />
    </div>
  );
}

export default Index;
