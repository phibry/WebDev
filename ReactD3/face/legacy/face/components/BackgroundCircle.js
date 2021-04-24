// React Component: BackgroundCircle
// pass variables as props
// named export, -> curcly braces in import
export const BackgroundCircle = ({ radius, strokeWidth }) => (
  <circle
    r={radius}
    fill="yellow"
    stroke="black"
    strokeWidth={strokeWidth}
  ></circle>
);
