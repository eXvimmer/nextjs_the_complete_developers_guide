import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import pathHelper from "@/path";
import HeaderAuth from "./header-auth";

function Header() {
  return (
    <Navbar className="mb-6 shadow">
      <NavbarBrand>
        <Link href={pathHelper.home()} className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input placeholder="Search..." />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
