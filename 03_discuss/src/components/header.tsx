import { auth } from "@/auth";
import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import pathHelper from "@/path";

async function Header() {
  const session = await auth();

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
        <NavbarItem>
          {session?.user ? <div>Signed In</div> : <div>Signed Out</div>}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
