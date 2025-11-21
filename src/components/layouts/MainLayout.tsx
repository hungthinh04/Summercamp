import { Header } from "./Header";
import { Footer } from "./Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="tm-page">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
