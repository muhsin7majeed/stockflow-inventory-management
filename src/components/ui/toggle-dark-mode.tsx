import { Button, IconButton } from "@chakra-ui/react";
import { ColorModeIcon, useColorMode } from "@/components/ui/color-mode";

const ToggleDarkMode = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      variant="outline"
      onClick={toggleColorMode}
      aria-label="Toggle dark mode"
    >
      <ColorModeIcon />
    </IconButton>
  );
};

export default ToggleDarkMode;
