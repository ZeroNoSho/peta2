import dynamic from "next/dynamic";
import Menu from "@components/menu";
import Legen from "@components/legend";
const DynamicMap = dynamic(() => import("./DynamicMap"), {
  ssr: false,
});

// Set default sizing to control aspect ratio which will scale responsively
// but also help avoid layout shift

const Map = (props) => {
  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="flex w-auto h-auto"
    >
      <Menu />
      <DynamicMap {...props} className={"z-0"} />
      <Legen />
    </div>
  );
};

export default Map;
