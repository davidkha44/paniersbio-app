import React from 'react';

type index = number;

const SubsContext = React.createContext({
  subsArray: [true, false, false],
  setSubsArray: (index: index) => {},
  subType: 0,
  setSubType: (index: index) => {},
});

export default SubsContext;
