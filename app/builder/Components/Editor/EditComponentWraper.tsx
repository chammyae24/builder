import { ReactNode } from "react";

const EditComponentWraper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-4 items-center gap-2 border-b border-builder-darker p-2">
      {children}
    </div>
  );
};

export default EditComponentWraper;
