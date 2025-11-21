import Head from "next/head";

interface LinkCSSProps {
  href: string;
  rel?: string;
  type?: string;
  media?: string;
}

/**
 * Component để link CSS file vào head
 * Sử dụng trong layout hoặc page
 */
export const LinkCSS: React.FC<LinkCSSProps> = ({
  href,
  rel = "stylesheet",
  type = "text/css",
  media,
}) => {
  return (
    <link rel={rel} href={href} type={type} media={media} />
  );
};
