import ChallengePage from './challenge.jsx';
import ChooseUsPage from './chooseUs.jsx';
import ConsultPage from './consult.jsx';
// import ContactUsPage from './contactUs.jsx';
import FlexiblePage from './flexible.jsx';
import FollowPage from './followForm.jsx';
// import CooperationPlatformPage from './cooperationPlatform.tsx';
import NumberPage from './number.jsx';
import PartnerLogoPage from './partnerLogo.jsx';
import ResourceCenterPage from './resourceCenter.jsx';
import SolutionPage from './solution.jsx';

function Index() {
  return (
    <div>
      <ConsultPage />
      <ChallengePage />
      <SolutionPage />
      <ChooseUsPage />
      {/* <CooperationPlatformPage /> */}
      <NumberPage />
      <PartnerLogoPage />
      <FlexiblePage />
      <ResourceCenterPage />
      {/* <ContactUsPage /> */}
      <FollowPage />
    </div>
  );
}

export default Index;
