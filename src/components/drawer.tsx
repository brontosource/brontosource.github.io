import { ReactNode } from "react";
import Footer from "@/components/footer";

type DrawerProps = {
  children: ReactNode;
};

const Drawer = ({ children }: DrawerProps) => {
  return (
    <div className="drawer-end min-h-screen flex flex-col">
      <div className="drawer-content flex flex-col grow justify-between">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Drawer;
