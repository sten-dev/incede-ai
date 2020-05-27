import React from 'react';
import Layout from '../../components/Layout';
import Transition from '../../Transition';
import CampaignBanking from '../../components/campaign-bankings/CampaignBanking';

export default class CampaignBankingPage extends React.Component {
  render() {
    return (
      <>
        {/* <Layout pageTitle='Campaign Bankings | Incede'> */}
        <Transition>
          <CampaignBanking />
        </Transition>
        {/* </Layout> */}
      </>
    );
  }
}
