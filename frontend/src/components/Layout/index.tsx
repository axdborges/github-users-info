type LayoutProps = {
    children: React.ReactNode
  }

const Layout = ({children}: LayoutProps) => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen h-full bg-[#f9f9f9]">
      {children}
    </div>
  );
};

export default Layout;
