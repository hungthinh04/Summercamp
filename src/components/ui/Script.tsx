import Script from "next/script";

interface ScriptProps {
  src: string;
  strategy?: "beforeInteractive" | "afterInteractive" | "lazyOnload" | "worker";
  onLoad?: () => void;
}

/**
 * Component để load JS files từ public folder
 * Sử dụng Next.js Script component để tối ưu hóa performance
 */
export const CustomScript: React.FC<ScriptProps> = ({
  src,
  strategy = "afterInteractive",
  onLoad,
}) => {
  return <Script src={src} strategy={strategy} onLoad={onLoad} />;
};
