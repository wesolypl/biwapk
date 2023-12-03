import { ReactNode } from "react";

const EditLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto p-2 h-full flex items-center justify-center">
      {children}
    </div>
  );
};

export default EditLayout;
