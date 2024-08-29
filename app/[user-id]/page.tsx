"use client";

import React, { useState } from 'react';
import CustomTextarea from '@/components/common/CustomTextarea';
import { Tabs, TabList, Tab, TabPanel } from '@/components/common/CustomTab';

const UserPage = ({ params }: { params: { 'user-id': string } }) => {

  const [userId, setUserId] = useState(params['user-id'] || '');

  const handleUserIdChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserId(e.target.value);
  };

  const [tabs] = useState([
    { label: 'Tab 1', value: 0, content: 'This is the content area of the first tab.' },
    { label: 'Tab 2', value: 1, content: 'This is the content area of the second tab.' },
    { label: 'Tab 3', value: 2, content: 'This is the content area of the third tab.' },
  ]);

  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].value); // 첫 번째 탭의 value로 초기화

  const handleTabChange = (value: number) => { // value 타입을 명시
    setSelectedTab(value);
  };

  return (
    <div style={{ width: '452px', margin: '50px' }}>
      <CustomTextarea 
        label="User ID" placeholder='placeholder' helpText='helpText' maxLength={50} height="300px"
        value={userId}
        onChange={handleUserIdChange}
      />
      <Tabs onChange={handleTabChange} id="default" selectedTab={selectedTab}>
        <TabList align="center">
          {tabs.map((tab) => (
            <Tab key={tab.value} onClick={() => handleTabChange(tab.value)}>
              {tab.label}
            </Tab>
          ))}
        </TabList>
        {tabs.map((tab) => (
          <TabPanel key={tab.value} index={tab.value} isSelected={selectedTab === tab.value}>
            {tab.content}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}

export default UserPage;
