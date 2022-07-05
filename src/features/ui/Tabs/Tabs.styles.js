import styled from "styled-components";

// a styled component for the tab
export const Tab = styled.span`
  padding: 12px 10px 12px 0;
  margin: 10px;
  position: relative;
  text-align: left;
  color: ${(props) => (props.tabId === props.activeTab ? "#1A3B58" : "#1A3B5854")};
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 101.1%;
  &:hover {
    cursor: pointer;
  }
`;
// a styled component for the tab
export const TabBodyWrapper = styled.div`
  height: ${(props) => (props.height ? props.height : "100%")};
`;
// a styled component for the tab
export const TabContent = styled.div`
  display: ${(props) => (props.tabId === props.activeTab ? "block" : "none")};
`;

// a styled component for showing the active tab
export const TabHighlight = styled.div`
  display: ${(props) => (props.tabId === props.activeTab ? "block" : "none")};
  background-color: black;
  width: 17px;
  height: 2px;
  paddin: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
`;
