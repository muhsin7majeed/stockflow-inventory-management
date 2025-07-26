import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  Text,
  Drawer,
  type BoxProps,
  type FlexProps,
  Menu,
  Avatar,
  Portal,
  Button,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiGrid,
  FiPackage,
  FiShoppingCart,
  FiUsers,
  FiTag,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { useColorModeValue } from "../ui/color-mode";
import { useState } from "react";
import ToggleDarkMode from "../ui/toggle-dark-mode";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: FiGrid },
  { name: "Products", icon: FiPackage },
  { name: "Categories", icon: FiTag },
  { name: "Orders", icon: FiShoppingCart },
  { name: "Users", icon: FiUsers },
  { name: "Settings", icon: FiSettings },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      pos={{ base: "relative", md: "fixed" }}
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        px={{ base: 0, md: "8" }}
        alignItems="center"
        w="full"
        justifyContent="space-between"
      >
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          StockFlow
        </Text>

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
      >
        <FiMenu />
      </IconButton>

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        StockFlow
      </Text>

      <HStack gap={{ base: "0", md: "6" }}>
        <IconButton size="lg" variant="ghost" aria-label="open menu">
          <FiBell />
        </IconButton>

        <ToggleDarkMode />

        <Flex alignItems={"center"}>
          <Menu.Root>
            <Menu.Trigger asChild>
              <HStack>
                <Avatar.Root>
                  <Avatar.Fallback name="Segun Adebayo" />
                  <Avatar.Image src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9" />
                </Avatar.Root>

                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  gap="1px"
                  ml="2"
                >
                  <Text fontSize="sm">John Doe</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>

                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </Menu.Trigger>

            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="profile">Profile</Menu.Item>
                  <Menu.Item value="settings">Settings</Menu.Item>
                  <Menu.Item value="sign-out">Sign out</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Flex>
      </HStack>
    </Flex>
  );
};

const SidebarWithHeader = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box minH="100vh">
      <SidebarContent
        onClose={() => setOpen(false)}
        display={{ base: "none", md: "block" }}
        borderRight="1px solid"
        borderRightColor="gray.200"
        bg={useColorModeValue("white", "gray.900")}
        w={{ base: "full", md: 60 }}
      />

      <Drawer.Root
        open={open}
        placement="start"
        onOpenChange={(e) => setOpen(e.open)}
      >
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Body overflow="hidden">
                <SidebarContent onClose={() => setOpen(false)} />
              </Drawer.Body>

              <Drawer.Footer>
                <Button variant="outline" colorScheme="red">
                  Sign out
                </Button>
              </Drawer.Footer>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>

      {/* mobilenav */}
      <MobileNav
        onOpen={() => setOpen(true)}
        borderBottom="1px solid"
        borderBottomColor="gray.200"
      />
      <Box ml={{ base: 0, md: 60 }}>
        <Box m="4" p="4" bg={useColorModeValue("gray.100", "gray.900")}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
