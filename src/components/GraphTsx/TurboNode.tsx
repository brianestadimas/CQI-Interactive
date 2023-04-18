import React, { memo, ReactNode } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { FiCloud } from "react-icons/fi";
import MDAvatar from "components/MDAvatar";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import Icon from "@mui/material/Icon";
import Slider from "components/QuantumGraph/slider";

export type TurboNodeData = {
  title: string;
  icon?: ReactNode;
  subline?: string;
  state?: string;
  gate?: string;
};

export default memo(({ data }: NodeProps<TurboNodeData>) => {
  return (
    <>
      <div className="cloud gradient">
        <div>{data.state}</div>
      </div>
      <div className="wrapper gradient">
        <div className="inner">
          <div className="body" style={{ marginLeft: -15 }}>
            {data.icon && <MDAvatar src={data.icon} name="repeater" size="md" />}
            <div>
              <div className="title">{data.title}</div>
              {data.subline && <div className="subline">{data.subline}</div>}
              <MDBox>
                <div style={{ fontSize: 8, marginLeft: -5, marginBottom: 1 }}>
                  <span>
                    &nbsp;<b>Fidelity :</b>
                  </span>
                </div>
                <Slider />
                <Grid container style={{ width: 90 }} mt={-5} mb={1}>
                  <Grid item md={2} mr={1.9}>
                    <div style={{ fontSize: 6 }}>0.00</div>
                  </Grid>
                  <Grid item md={2} mr={2}>
                    <div style={{ fontSize: 6 }}>0.50</div>
                  </Grid>
                  <div style={{ fontSize: 6 }}>1.00</div>
                </Grid>
              </MDBox>
            </div>
          </div>
          <Handle type="target" position={Position.Left} />
          <Handle type="source" position={Position.Right} />
        </div>
      </div>
    </>
  );
});
