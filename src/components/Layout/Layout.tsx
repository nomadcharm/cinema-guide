import { FC, memo, ReactNode } from "react";
import { LayoutProps } from "../../models/ComponentProps";
import { MemoHeader } from "../Header/Header";
import { MemoFooter } from "../Footer/Footer";

const MainLayout: FC<LayoutProps> = ({ children }): ReactNode => {
  return (
    <>
      <MemoHeader />
      <main>
        {children}
      </main>
      <MemoFooter />
    </>
  );
};

export const Layout = memo(MainLayout);
