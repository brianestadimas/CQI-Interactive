import React, { useCallback } from "react";
import ReactFlow, { Controls, useNodesState, useEdgesState, addEdge, Node, Edge } from "reactflow";
import { FiFile } from "react-icons/fi";

import "reactflow/dist/base.css";
import "./index.css";
import TurboNode, { TurboNodeData } from "./TurboNode.tsx";
import TurboEdge from "./TurboEdge.tsx";
import FunctionIcon from "./FunctionIcon.tsx";

const edgeTypes = {
  turbo: TurboEdge,
};

const defaultEdgeOptions = {
  type: "turbo",
  markerEnd: "edge-circle",
};

const Flow = ({ getNodes, getEdges, imageUpdater, textUpdater, gateUpdater, waveUpdater }) => {
  const node: Node<TurboNodeData>[] = getNodes?.map((node) => node);

  const edge: Edge[] = getEdges?.map((edge) => edge);

  const nodeTypes = {
    turbo: TurboNode,
    text: textUpdater,
    gate: gateUpdater,
    image: imageUpdater,
    wave: waveUpdater,
  };

  const [nodes, setNodes, onNodesChange] = useNodesState(node);
  const [edges, setEdges, onEdgesChange] = useEdgesState(edge);

  const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), []);

  return (
    <ReactFlow
      nodes={node}
      edges={edge}
      // onNodesChange={onNodesChange}
      // onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      defaultEdgeOptions={defaultEdgeOptions}
      zoomOnScroll={false}
      panOnScroll={false}
      panOnDrag={false}
    >
      <Controls showInteractive={true} />
      <svg>
        <defs>
          <linearGradient id="edge-gradient">
            <stop offset="0%" stopColor="#ae53ba" />
            <stop offset="100%" stopColor="#2a8af6" />
          </linearGradient>

          <marker
            id="edge-circle"
            viewBox="-5 -5 10 10"
            refX="0"
            refY="0"
            markerUnits="strokeWidth"
            markerWidth="10"
            markerHeight="10"
            orient="auto"
          >
            <circle stroke="#2a8af6" strokeOpacity="0.75" r="2" cx="0" cy="0" />
          </marker>
        </defs>
      </svg>
    </ReactFlow>
  );
};

export default Flow;
