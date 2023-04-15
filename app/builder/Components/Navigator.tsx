import SelectedComponent from "./Navigator/SelectedComponent";

export interface TestData {
  type: string;
  children: TestData | null;
}

const testData: TestData = {
  type: "div",
  children: {
    type: "span",
    children: {
      type: "h1",
      children: {
        type: "div",
        children: {
          type: "span",
          children: null
        }
      }
    }
  }
};
const testData2: TestData = {
  type: "input",
  children: {
    type: "div",
    children: null
  }
};

const Navigator = () => {
  return (
    <div className="col-span-1 border-r border-gray-500">
      <SelectedComponent testData={testData} />
      <SelectedComponent testData={testData2} />
    </div>
  );
};

export default Navigator;
