import React, { useRef } from "react";
import Iframe from "react-iframe";

const BlochSphere = ({}) => {
  return (
    <div class="container">
      <Iframe className="iframe-zoom" width="900" height="768" src="http://163.180.179.152:8000/" />
    </div>
  );
};

export default BlochSphere;
