import { Handle, Position } from "reactflow";
import { useCallback, useState, useEffect } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  MiniMap,
  Controls,
} from "reactflow";
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
    position: { x: 90, y: -60 },
    data: { name: "PC-Alice", type: "pc", value: 1.0, idx: 1 },
  },
  {
    id: "node-2",
    type: "textUpdater",
    position: { x: 200, y: 100 },
    data: { name: "Repeater", type: "rep", value: 1.0, idx: 2 },
  },
  {
    id: "node-3",
    type: "textUpdater",
    position: { x: 70, y: 250 },
    data: { name: "PC-Bob", type: "pc", value: 1.0, idx: 3 },
  },
];

const handleStyle = { left: 10 };
const textUpdater = (data, isConnectable) => {
  const startPoint = data["data"]["idx"] * 4;
  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.Top}
        id={"source" + (startPoint - 3).toString()}
        style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position={Position.Top}
        id={"source" + (startPoint - 2).toString()}
        isConnectable={isConnectable}
      />
      <div>
        <Grid container style={{ width: 120 }}>
          <Grid item md={4}>
            {data["data"]["type"] === "pc" ? (
              <>
                <div style={{ marginLeft: -3, marginTop: -10 }}>
                  <MDAvatar src={qcomputer} name="qcomputer" size="md" />
                </div>

                <div style={{ fontSize: 6, marginTop: -10, textAlign: "center" }}>
                  <b>{data["data"]["name"]}</b>
                </div>
              </>
            ) : (
              <>
                <div style={{ marginLeft: -1, marginTop: -6 }}>
                  <MDAvatar src={repeater} name="repeater" size="sm" />
                </div>
                <div style={{ fontSize: 6, marginTop: 1, textAlign: "center" }}>
                  <b>Repeater</b>
                </div>
              </>
            )}
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
                  <div style={{ fontSize: 6 }}>0.50</div>
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
        id={"source" + (startPoint - 1).toString()}
        style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id={"source" + startPoint.toString()}
        isConnectable={isConnectable}
      />
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

  useEffect(() => {
    setEdges(generateNodes());
  }, [nodes]);

  const generateNodes = () => {
    const nodeLength = nodes.length;
    const res = [];
    for (let i = 0, j = 1; i <= nodeLength * 4; i += 4, j++) {
      const source1 = i + 3;
      const target1 = i + 5;
      const source2 = i + 4;
      const target2 = i + 6;
      if (target1 >= nodeLength * 4) break;
      res.push({
        id: "edge-" + i,
        source: "node-" + j,
        target: "node-" + (j + 1),
        type: "straight",
        label: " classic",
        labelStyle: { fontSize: 8 },
        labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
        labelBgPadding: [2, 4],
        sourceHandle: "source" + source1.toString(),
      });
      res.push({
        id: "edge-" + (i + 1),
        source: "node-" + j,
        target: "node-" + (j + 1),
        animated: true,
        sourceHandle: "source" + source2.toString(),
        targetHandle: "source" + target2.toString(),
        label: " quantum",
        labelStyle: { fontSize: 9 },
        labelBgStyle: { fill: "lightblue", color: "#fff", fillOpacity: 0.7 },
        style: { stroke: "white" },
        labelBgPadding: [2, 4],
      });
    }
    return res;
  };

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
    >
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}

export default Flow;
