import React from 'react';

type index = number;
type uuid = number;

const SubsContext = React.createContext({
  subsArray: [true, false, false],
  setSubsArray: (index: index) => {},
  subType: 0,
  setSubType: (index: index) => {},
  requestUUID: 0,
  setRequestUUID: (uuid: uuid) => {},
});

export default SubsContext;
