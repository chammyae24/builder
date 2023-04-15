import { testData, testData2 } from "../testData";
import SelectedComponent from "./Navigator/SelectedComponent";

const Navigator = () => {
  return (
    <div className="col-span-1 border-r border-gray-500">
      <SelectedComponent testData={testData} />
      <SelectedComponent testData={testData2} />
    </div>
  );
};

export default Navigator;
