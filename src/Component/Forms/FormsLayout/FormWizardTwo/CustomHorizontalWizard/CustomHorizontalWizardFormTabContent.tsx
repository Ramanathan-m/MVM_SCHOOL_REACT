import React from 'react'
import { BusinessFormCommonProps } from '../../../../../Types/Forms/FormsLayout/FormsWizardTwo';
import { TabContent, TabPane } from 'reactstrap';
import PersonalInfoForm from './PersonalInfoForm';
import BankInfoForm from './BankInfoForm';
import InquiresForm from './InquiresForm';
import FinishForm from './FinishForm';

const CustomHorizontalWizardFormTabContent:React.FC<BusinessFormCommonProps> = ({activeTab,callbackActive,differentId}) => {
  return (
    <TabContent className=" dark-field " activeTab={activeTab}>
      <TabPane tabId={1}>
        <PersonalInfoForm callbackActive={callbackActive} />
      </TabPane>
      <TabPane tabId={2}>
        <BankInfoForm callbackActive={callbackActive}  />
      </TabPane>
      <TabPane tabId={3}>
        <InquiresForm callbackActive={callbackActive} differentId={differentId} />
      </TabPane>
      <TabPane tabId={4}>
        <FinishForm/>
      </TabPane>
    </TabContent>
  );
};

export default CustomHorizontalWizardFormTabContent