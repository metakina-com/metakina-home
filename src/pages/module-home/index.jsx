import ChallengePage from './Challenge.jsx';
import ChooseUsPage from './ChooseUs.jsx';
import ConsultPage from './Consult.jsx';
// import ContactUsPage from './contactUs.jsx';
import FlexiblePage from './Flexible.jsx';
import FollowPage from './FollowForm.jsx';
// import CooperationPlatformPage from './cooperationPlatform.tsx';
import NumberPage from './Number.jsx';
import PartnerLogoPage from './PartnerLogo.jsx';
import ResourceCenterPage from './ResourceCenter.jsx';
import SolutionPage from './Solution.jsx';

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
