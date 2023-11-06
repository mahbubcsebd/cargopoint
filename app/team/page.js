import Banner from '@/components/Banner';
import LeadTeam from '@/components/team/LeadTeam';
import Leading from '@/components/team/Leading';
import OperationTeam from '@/components/team/OperationTeam';

export const metadata = {
    title: 'Logistic | Team',
};

const page = () => (
    <div id="team-page" className="team-page">
        <div className="team-page-area">
            <Banner text="Our Team" title="Meet Our Squad" />
            <LeadTeam />
            <OperationTeam />
            <Leading />
        </div>
    </div>
);

export default page;
