import ExpandingDots from "../ExpandingDots/ExpandingDots";

export interface FancyTBXProps {
  open: boolean;
}

const FancyTBX = ({ open }: FancyTBXProps) => (
  <dialog className="FancyTBX" open={open}>
    <p>It’s very fancy</p>
    <ExpandingDots />
  </dialog>
);

export default FancyTBX;
