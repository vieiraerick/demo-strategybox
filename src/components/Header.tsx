"use client";

import { Link } from "@nextui-org/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Image from "next/image";
import React from "react";

import Logo from "../../public/logo.svg";
import { useWindowSize } from "../helpers/hooks";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const width = useWindowSize();

  const menuItems = ["Menu 1", "Menu 2", "Menu 3"];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="flex items-center justify-start"
    >
      {width <= 640 && (
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      )}

      <NavbarBrand className="max-w-max">
        <Image width={150} alt="Logotipo" src={Logo} color="#7159c1" />
      </NavbarBrand>

      {width > 640 ? (
        <NavbarContent>
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <Link className="w-full" color="foreground" href="#">
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      ) : (
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full" color="foreground" href="#" size="lg">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
}
