export const defineState = (process, encoding, aorb) => {
  console.log(process, encoding, aorb);
  const truthTable = {
    2: {
      1: {
        A: (
          <span>
            Φ<sup>+</sup>
          </span>
        ),
        B: (
          <span>
            Φ<sup>+</sup>
          </span>
        ),
      },
      2: {
        A: (
          <span>
            Ѱ<sup>+</sup>
          </span>
        ),
        B: (
          <span>
            Φ<sup>+</sup>
          </span>
        ),
      },
      3: {
        A: (
          <span>
            Φ<sup>+</sup>
          </span>
        ),
        B: (
          <span>
            Φ<sup>+</sup>
          </span>
        ),
      },
      4: {
        A: (
          <span>
            Φ<sup>-</sup>
          </span>
        ),
        B: (
          <span>
            Ѱ<sup>-</sup>
          </span>
        ),
      },
    },
    3: {
      1: {
        A: <span>0</span>,
        B: <span>+</span>,
      },
      2: {
        A: <span>1</span>,
        B: <span>+</span>,
      },
      3: {
        A: <span>0</span>,
        B: <span>-</span>,
      },
      4: {
        A: <span>1</span>,
        B: <span>-</span>,
      },
    },
    4: {
      1: {
        A: <span>0</span>,
        B: <span>0</span>,
      },
      2: {
        A: <span>1</span>,
        B: <span>0</span>,
      },
      3: {
        A: <span>0</span>,
        B: <span>1</span>,
      },
      4: {
        A: <span>1</span>,
        B: <span>1</span>,
      },
    },
  };
  return truthTable[process][encoding][aorb];
};
