/**
 * @example
 * <Icon name="close" width={10} height={10} />
 */
const SVG = ({ name, width, height }) => {
  return (
    <svg
      style={{ pointerEvents: "none" }}
      width={width.toString()}
      height={height.toString()}
      stroke="none"
    >
      <use href={`#${name}`} />
    </svg>
  );
};

export default SVG;
