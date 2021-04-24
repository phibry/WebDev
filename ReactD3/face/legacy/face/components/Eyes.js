// React Component: Eye
export const Eyes = ({ exeOffsetX, eyeOffsetY, eyeRadius }) => (
  <>
    <circle cx={-exeOffsetX} cy={-eyeOffsetY} r={eyeRadius}></circle>
    <circle cx={exeOffsetX} cy={-eyeOffsetY} r={eyeRadius}></circle>
  </>
);
