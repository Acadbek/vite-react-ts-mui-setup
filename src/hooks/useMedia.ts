import { useMediaQuery } from "react-responsive";

export default function useMedia() {
  const isTablet = useMediaQuery({
    query: "(max-width: 920px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  const isSmallMobile = useMediaQuery({
    query: "(max-width: 428px)",
  });

  return { isMobile, isSmallMobile, isTablet };
}
