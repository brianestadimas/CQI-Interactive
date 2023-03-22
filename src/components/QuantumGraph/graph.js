import { Handle, Position } from "reactflow";
import { useCallback, useState, useMemo } from "react";
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges } from "reactflow";
import "reactflow/dist/style.css";
import "./style.css";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDAvatar from "components/MDAvatar";
import Icon from "@mui/material/Icon";
import qcomputer from "assets/images/quantumcomputer.png";
import repeater from "assets/images/repeater.jpg";
import Slider from "./slider";

const rfStyle = {
  backgroundColor: "#B8CEFF",
};

const initialNodes = [
  {
    id: "node-1",
    type: "textUpdater",
    position: { x: 0, y: 0 },
    data: { name: "PC-Alice", type: "pc", value: 1.0 },
  },
  {
    id: "node-2",
    type: "textUpdater",
    position: { x: 200, y: 100 },
    data: { name: "Repeater", type: "rep", value: 1.0 },
  },
  {
    id: "node-3",
    type: "textUpdater",
    position: { x: 70, y: 250 },
    data: { name: "PC-Bob", type: "pc", value: 1.0 },
  },
];

const handleStyle = { left: 10 };
const textUpdater = (data) => {
  console.log(data);
  const isConnectable = true;
  return (
    <div className="text-updater-node">
      <Handle
        type="source"
        position={Position.Top}
        id="1"
        style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle type="source" position={Position.Top} id="2" isConnectable={isConnectable} />
      <div>
        <Grid container style={{ width: 120 }}>
          <Grid item md={4}>
            {data["data"]["type"] === "pc"
              ? [
                  <div style={{ marginLeft: -3, marginTop: -10 }}>
                    <MDAvatar src={qcomputer} name="qcomputer" size="md" />
                  </div>,
                  <div style={{ fontSize: 6, marginTop: -10, textAlign: "center" }}>
                    <b>{data["data"]["name"]}</b>
                  </div>,
                ]
              : [
                  <div style={{ marginLeft: -1, marginTop: -6 }}>
                    <MDAvatar src={repeater} name="repeater" size="sm" />
                  </div>,
                  <div style={{ fontSize: 6, marginTop: 1, textAlign: "center" }}>
                    <b>{data["data"]["name"]}</b>
                  </div>,
                ]}
          </Grid>
          <Grid item md={6}>
            <MDBox mt={-0.5} ml={0.5}>
              <div style={{ fontSize: 8, marginTop: 3, marginBottom: 3 }}>
                <span style={{ fontSize: 8 }}>
                  <Icon fontSize="inherit" color="inherit">
                    settings
                  </Icon>
                </span>
                <span>
                  &nbsp;<b>Fidelity :</b>
                </span>
              </div>
              <Slider />
              <Grid container style={{ width: 90 }} mt={-5}>
                <Grid item md={2} mr={1.9}>
                  <div style={{ fontSize: 6 }}>0.00</div>
                </Grid>
                <Grid item md={2} mr={2}>
                  <div style={{ fontSize: 6 }}>0.5</div>
                </Grid>
                <div style={{ fontSize: 6 }}>1.00</div>
              </Grid>
            </MDBox>
          </Grid>
        </Grid>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="3"
        style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle type="source" position={Position.Bottom} id="4" isConnectable={isConnectable} />
    </div>
  );
};

const nodeTypes = { textUpdater: textUpdater };

function Flow() {
  const defaultViewport = { x: 0, y: 0, zoom: 0.0001 };
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      style={rfStyle}
      defaultViewport={defaultViewport}
    />
  );
}

export default Flow;
