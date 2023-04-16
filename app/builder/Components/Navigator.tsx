import { testData, testData2 } from "../data-type";
import SelectedComponent from "./Navigator/SelectedComponent";

const Navigator = () => {
  return (
    <div className="col-span-1 border-r border-gray-500">
      <SelectedComponent element={testData} />
      <SelectedComponent element={testData2} />
    </div>
  );
};

export default Navigator;
