import React, { useState, useEffect } from "react";
import { Tab, TabContent , TabHighlight, TabBodyWrapper} from "./Tabs.styles";

// Tab component for the Tabs component
const TabItem = ({ tab, onClickHandler , activeTab}) => {
  return (
    <Tab
      onClick={(e) => {
        e.preventDefault();
        onClickHandler(tab);
      }}
      tabId={tab}
      activeTab={activeTab}
    >
      {tab}

      <TabHighlight tabId={tab}  activeTab={activeTab}/>
    </Tab>
  );
};

// TabContent component for displaying the content of a selected tab
const TabBody = ({ tabId, content, activeTab }) => {
    console.log("tabId", tabId, activeTab, content);
  return (
    <TabContent tabId={tabId} activeTab={activeTab}>
      {content}
    </TabContent>
  );
};

// Tabs component to display the tabs and change the content based on the tab selected.
export const Tabs = ({ tabs, contents, height= null }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const onClickHandler = (tab) => {
    setSelectedTab(tab);
  };

  console.log("Tabs::", tabs, contents);

  return (
    <div>
      {tabs.map((tab) => (
        <TabItem key={tab} tab={tab}   activeTab={selectedTab} onClickHandler={onClickHandler} />
      ))}

      <TabBodyWrapper height={height}>

      {contents.map((content) => (
        <TabBody
          key={content.id}
          tabId={content.id}
          content={content.component}
          activeTab={selectedTab}
        />
      ))}

      </TabBodyWrapper>
    </div>
  );
};
