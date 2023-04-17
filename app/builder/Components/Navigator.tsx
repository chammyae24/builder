import { testData, testData2, testData3 } from "../data-type";
import SelectedComponent from "./Navigator/SelectedComponent";

const Navigator = () => {
  return (
    <div className=" w-[273px] border-r border-gray-500">
      <SelectedComponent element={testData} />
      <SelectedComponent element={testData2} />
      <SelectedComponent element={testData3} />
    </div>
  );
};

export default Navigator;
