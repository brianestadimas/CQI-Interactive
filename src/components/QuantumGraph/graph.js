import { useCallback, useState, useEffect, useMemo } from "react";
import { addEdge, applyEdgeChanges, applyNodeChanges, Handle, Position } from "reactflow";
import Flow from "components/GraphTsx/index.tsx";
import qcomputer from "assets/images/quantumcomputer.png";
import { TypeAnimation } from "react-type-animation";
import "reactflow/dist/base.css";
import MDAvatar from "components/MDAvatar";
import { Img } from "react-image";
import fig10 from "assets/images/fig10.png";
import hadamard from "assets/images/hadamard.png";
import measurement from "assets/images/measurement.png";
import MDBox from "components/MDBox";
import { defineState } from "./helper";
import Signal from "components/Signal";

const initialNodes = [
  {
    id: "1",
    position: { x: -50, y: 0 },
    data: {
      icon: qcomputer,
      title: "Alice",
      subline: "Quantum PC",
    },
    type: "turbo",
  },
  {
    id: "2",
    position: { x: 450, y: 0 },
    data: {
      icon: qcomputer,
      title: "Bob",
      subline: "Quantum PC",
    },
    type: "turbo",
  },
];

const node1 = [
  {
    id: "1",
    position: { x: -50, y: 0 },
    data: {
      icon: qcomputer,
      title: "Alice",
      subline: "Quantum PC",
    },
    type: "turbo",
  },
  {
    id: "2",
    position: { x: 450, y: 0 },
    data: {
      icon: qcomputer,
      title: "Bob",
      subline: "Quantum PC",
    },
    type: "turbo",
  },
  {
    id: "3",
    position: { x: -70, y: 150 },
    data: {
      sequence: ["Distribute entanglement between Alice and Bob", 4000, ""],
    },
    type: "text",
  },
];

const defaultState = (
  <span>
    Φ<sup>+</sup>
  </span>
);
const node2 = (seq, noise, state1 = defaultState, state2 = defaultState) => [
  {
    id: "1",
    position: { x: -50, y: 0 },
    data: {
      icon: qcomputer,
      title: "Alice",
      subline: "Quantum PC",
      state: state1,
    },
    type: "turbo",
  },
  {
    id: "2",
    position: { x: 450, y: 0 },
    data: {
      icon: qcomputer,
      title: "Bob",
      subline: "Quantum PC",
      state: state2,
    },
    type: "turbo",
  },
  {
    id: "3",
    position: { x: -70, y: 150 },
    data: {
      sequence: [seq],
    },
    type: "text",
  },
];

const node3 = (noise) => [
  {
    id: "11",
    position: { x: -50, y: 0 },
    data: {
      icon: qcomputer,
      title: "Alice",
      subline: "Quantum PC",
      state: (
        <span>
          Φ<sup>+</sup>
        </span>
      ),
    },
    type: "turbo",
  },
  {
    id: "2",
    position: { x: 450, y: 0 },
    data: {
      icon: qcomputer,
      title: "Bob",
      subline: "Quantum PC",
      state: (
        <span>
          Φ<sup>+</sup>
        </span>
      ),
    },
    type: "turbo",
  },
  {
    id: "3",
    position: { x: -70, y: 150 },
    data: {
      sequence: ["Applying encode for Alice"],
    },
    type: "text",
  },
  {
    id: "4",
    position: { x: 130, y: -55 },
    data: {
      component: (
        <div style={{ width: "330px", height: "50px" }}>
          <Signal />
        </div>
      ),
    },
    type: "wave",
  },
];

const node4 = (noise) => [
  {
    id: "1",
    position: { x: -50, y: 0 },
    data: {
      icon: qcomputer,
      title: "Alice",
      subline: "Quantum PC",
      state: defineState(2, noise, "A"),
    },
    type: "turbo",
  },
  {
    id: "12",
    position: { x: 450, y: 0 },
    data: {
      icon: qcomputer,
      title: "Bob",
      subline: "Quantum PC",
      state: (
        <span>
          Φ<sup>+</sup>
        </span>
      ),
    },
    type: "turbo",
  },
  {
    id: "3",
    position: { x: -70, y: 150 },
    data: {
      sequence: ["Alice is Encoded, applying encoding for Bob"],
    },
    type: "text",
  },
  {
    id: "4",
    position: { x: 130, y: 32 },
    data: {
      component: (
        <div style={{ width: "310px", height: "50px" }}>
          <Signal />
        </div>
      ),
    },
    type: "wave",
  },
];

const node6 = (noise) => [
  {
    id: "11",
    position: { x: -50, y: 0 },
    data: {
      icon: qcomputer,
      title: "Alice",
      subline: "Quantum PC",
      state: defineState(2, noise, "A"),
    },
    type: "turbo",
  },
  {
    id: "12",
    position: { x: 450, y: 0 },
    data: {
      icon: qcomputer,
      title: "Bob",
      subline: "Quantum PC",
      state: defineState(2, noise, "B"),
    },
    type: "turbo",
  },
  {
    id: "3",
    position: { x: -70, y: 150 },
    data: {
      sequence: [
        "Applying DCNOT gate to both of parties",
        2000,
        "DCNOT is a distributed control NOT gate. It counterfactual applies consecutive nonlocal CNOT operations between Alice and Bob.",
      ],
    },
    type: "text",
  },
];

const node7 = (noise) => [
  {
    id: "1",
    position: { x: -50, y: 0 },
    data: {
      icon: qcomputer,
      title: "Alice",
      subline: "Quantum PC",
      state: defineState(2, noise, "A"),
    },
    type: "turbo",
  },
  {
    id: "2",
    position: { x: 450, y: 0 },
    data: {
      icon: qcomputer,
      title: "Bob",
      subline: "Quantum PC",
      state: defineState(2, noise, "B"),
    },
    type: "turbo",
  },
  {
    id: "4",
    position: { x: 320, y: 18 },
    data: {
      icon: qcomputer,
      title: "D-CNOT",
      subline: "Gate",
      gate: "true",
      dcnot: true,
    },
    type: "gate",
  },
  {
    id: "3",
    position: { x: -70, y: 100 },
    data: {
      icon: fig10,
      width: "20rem",
    },
    type: "image",
  },
];

const node9 = (noise) => [
  {
    id: "1",
    position: { x: -50, y: 0 },
    data: {
      icon: qcomputer,
      title: "Alice",
      subline: "Quantum PC",
      state: defineState(3, noise, "A"),
    },
    type: "turbo",
  },
  {
    id: "2",
    position: { x: 340, y: 0 },
    data: {
      icon: qcomputer,
      title: "Bob",
      subline: "Quantum PC",
      state: defineState(3, noise, "B"),
    },
    type: "turbo",
  },
  {
    id: "3",
    position: { x: 150, y: 18 },
    data: {
      icon: hadamard,
      width: "3rem",
    },
    type: "image",
  },
  {
    id: "4",
    position: { x: 240, y: 18 },
    data: {
      icon: measurement,
      width: "3rem",
    },
    type: "image",
  },
  {
    id: "5",
    position: { x: 580, y: 18 },
    data: {
      icon: measurement,
      width: "3rem",
    },
    type: "image",
  },
  {
    id: "6",
    position: { x: -70, y: 150 },
    data: {
      sequence: [
        "DCNOT Applied to both parties",
        1000,
        "Applying the Z gate to Alice",
        1000,
        "Applying the Hadamard gate to Bob",
        2000,
        "Measure both parties",
      ],
    },
    type: "text",
  },
];

const node10 = (noise) => [
  {
    id: "1",
    position: { x: -50, y: 0 },
    data: {
      icon: qcomputer,
      title: "Alice",
      subline: "Quantum PC",
      state: defineState(4, noise, "A"),
    },
    type: "turbo",
  },
  {
    id: "2",
    position: { x: 340, y: 0 },
    data: {
      icon: qcomputer,
      title: "Bob",
      subline: "Quantum PC",
      state: defineState(4, noise, "B"),
    },
    type: "turbo",
  },
  {
    id: "3",
    position: { x: 150, y: 18 },
    data: {
      icon: hadamard,
      width: "3rem",
    },
    type: "image",
  },
  {
    id: "4",
    position: { x: 240, y: 18 },
    data: {
      icon: measurement,
      width: "3rem",
    },
    type: "image",
  },
  {
    id: "5",
    position: { x: 580, y: 18 },
    data: {
      icon: measurement,
      width: "3rem",
    },
    type: "image",
  },
  {
    id: "6",
    position: { x: -70, y: 150 },
    data: {
      sequence: ["Measurement is finished between two parties"],
    },
    type: "text",
  },
];

const initialEdges = [
  {
    id: "e1-2",
    // source: "1",
    // target: "2",
    // animated: true,
    // style: { stroke: "white" },
  },
];

function Graph({ protocol, steps, noise }) {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const textUpdater = (data) => {
    return (
      <div className="text-updater-node">
        <div className="text-updater-node__label">
          <TypeAnimation
            sequence={data?.data?.sequence}
            wrapper="span"
            cursor={true}
            style={{ fontSize: "1em", display: "inline-block" }}
          />
        </div>
      </div>
    );
  };

  const gateUpdater = (data) => {
    return (
      <div className="gate-node">
        {data?.data?.dcnot ? (
          <span style={{ color: "blue", height: 5 }}>DCNOT</span>
        ) : (
          <MDAvatar src={data?.data?.icon} name="repeater" size="md" />
        )}
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </div>
    );
  };

  const imageUpdater = (data) => {
    return (
      <div className="image-node">
        <MDBox component="img" src={data?.data?.icon} alt="Brand" width={data?.data?.width} />
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </div>
    );
  };

  const waveUpdater = (data) => {
    return (
      <div className="image-node">
        {data?.data?.component}
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </div>
    );
  };

  // useEffect(() => {
  //   if (protocol === 3) {
  //     setNodes(initialNodes);
  //   } else {
  //     setNodes(initialNodes2);
  //   }
  // }, [protocol]);

  useEffect(() => {
    if (steps === 0) {
      setNodes(initialNodes);
      setEdges(initialEdges);
    }
    if (steps === 1) {
      setNodes([...node1]);
    }
    if (steps === 2) {
      setEdges([
        {
          id: "e1-2",
          source: "1",
          target: "2",
          animated: true,
        },
      ]);
      setNodes(node2("Entanglement of Alice and Bob is Completed", noise).map((node) => node));
      setTimeout(() => {
        setEdges((prevEdges) => {
          const updatedEdges = prevEdges.map((edge) => {
            if (edge.id === "e1-2") {
              return { ...edge, animated: false };
            }
            return edge;
          });
          return updatedEdges;
        });
      }, 8000);
    }
    if (steps === 3) {
      setNodes(node3(noise).map((node) => node));
      setTimeout(() => {
        setEdges([
          {
            id: "e1-2",
            source: "11",
            target: "2",
            animated: false,
          },
        ]);
      }, 50);
    }
    if (steps === 4) {
      setNodes(node4(noise).map((node) => node));
      setTimeout(() => {
        setEdges([
          {
            id: "e1-2",
            source: "1",
            target: "12",
            animated: false,
          },
        ]);
      }, 50);
    }
    if (steps === 5) {
      setNodes(
        node2(
          "Both parties are encoded and entangled",
          noise,
          defineState(2, noise, "A"),
          defineState(2, noise, "B")
        ).map((node) => node)
      );

      setTimeout(() => {
        setEdges([
          {
            id: "e1-2",
            source: "1",
            target: "2",
            animated: false,
          },
        ]);
      }, 50);
    }
    if (steps === 6) {
      setNodes(node6(noise).map((node) => node));
      setTimeout(() => {
        setEdges([
          {
            id: "e1-2",
            source: "11",
            target: "12",
            animated: false,
          },
        ]);
      }, 50);
    }
    if (steps === 7) {
      setNodes(node7(noise).map((node) => node));
      setTimeout(() => {
        setEdges([
          {
            id: "e1-2",
            source: "1",
            target: "2",
            animated: false,
          },
          {
            id: "e3-4",
            source: "3",
            target: "4",
            animated: false,
          },
        ]);
      }, 50);
    }
    if (steps === 8) {
      setNodes(
        node2(
          "DCNOT Applied to both parties and disentanglement occurs with quantum-states changes",
          noise,
          defineState(3, noise, "A"),
          defineState(3, noise, "B")
        ).map((node) => node)
      );
      setTimeout(() => {
        setEdges([]);
      }, 50);
    }
    if (steps === 9) {
      setNodes(node9(noise).map((node) => node));
      setTimeout(() => {
        setEdges([
          {
            id: "e1-2",
            source: "1",
            target: "4",
            animated: true,
          },
          {
            id: "e2-3",
            source: "2",
            target: "5",
            animated: true,
          },
        ]);
      }, 50);
    }
    if (steps === 10) {
      setNodes(node10(noise).map((node) => node));
      setTimeout(() => {
        setEdges([
          {
            id: "e1-2",
            source: "1",
            target: "4",
            animated: false,
          },
          {
            id: "e2-3",
            source: "2",
            target: "5",
            animated: false,
          },
        ]);
      }, 50);
    }
  }, [steps, noise]);

  return (
    <Flow
      getNodes={nodes}
      getEdges={edges}
      gateUpdater={gateUpdater}
      textUpdater={textUpdater}
      imageUpdater={imageUpdater}
      waveUpdater={waveUpdater}
      setNodes={setNodes}
    />
  );
}

export default Graph;
