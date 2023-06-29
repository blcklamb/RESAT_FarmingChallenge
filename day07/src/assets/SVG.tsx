interface SVGProps {
  name: T_SVG;
  width: number;
  height: number;
}

/**
 * @example
 * <Icon name="close" width={10} height={10} />
 */
const SVG = ({ name, width, height }: SVGProps) => {
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

type T_SVG =
  | "miniintern-logo-PC"
  | "miniintern-logo-mobile"
  | "hamburger-bar"
  | "white-arrow"
  | "question-mark-tooltip"
  | "blue-arrow"
  | "card-label-employment"
  | "card-label-education"
  | "card-button-heart"
  | "button-instagram"
  | "close";
