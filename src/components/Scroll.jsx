import { WiDirectionUp } from "react-icons/wi";

const Scroll = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="scroll-to-top" onClick={scrollTop}>
      <WiDirectionUp className="direction" />
    </div>
  );
};

export default Scroll;
