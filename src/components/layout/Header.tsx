import React from "react";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Logo from "../common/Logo";
import MobileNav from "./MobileNav";
import { ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/constants/nav";
import { type MainMenuItem, type SubMenuItem } from "@/types";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SubMenuItemSection = ({ item }: { item: SubMenuItem }) => {
  if (!item.children) {
    return (
      <MenubarItem asChild>
        <Link
          href={item.href}
          className="flex w-full cursor-pointer items-center py-2 font-semibold text-primary hover:bg-accent"
        >
          <span className="text-base">{item.title}</span>
        </Link>
      </MenubarItem>
    );
  }

  return (
    <MenubarSub>
      <MenubarSubTrigger className="flex w-full items-center justify-between px-2 py-2 font-semibold text-primary hover:bg-accent/50 data-[state=open]:bg-accent/50">
        <Link href={item.href} className="text-base">
          {item.title}
        </Link>
      </MenubarSubTrigger>
      <MenubarSubContent
        className="min-w-[200px] bg-popover p-2"
        alignOffset={-5}
      >
        {item.children.map((child) => (
          <MenubarItem key={child.title} asChild className="p-0">
            <Link
              href={child.href}
              className="flex w-full cursor-pointer items-center rounded-sm px-4 py-2.5 text-base font-semibold text-primary hover:bg-accent/50"
            >
              {child.title}
            </Link>
          </MenubarItem>
        ))}
      </MenubarSubContent>
    </MenubarSub>
  );
};

const Header = () => {
  return (
    <header className="w-full border-b bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Logo scale={1.45} />
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <Menubar className="border-none">
              {NAV_ITEMS.map((item: MainMenuItem) => (
                <MenubarMenu key={item.title}>
                  {item.subMenuItems?.length ? (
                    <>
                      <MenubarTrigger className="group h-10 px-4 text-base font-semibold text-primary hover:bg-accent focus:bg-transparent data-[state=open]:bg-accent">
                        {item.title}
                        <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </MenubarTrigger>
                      <MenubarContent
                        className="min-w-[200px] bg-popover p-2"
                        align="start"
                        sideOffset={8}
                      >
                        {item.subMenuItems?.map((subItem) => (
                          <SubMenuItemSection
                            key={subItem.title}
                            item={subItem}
                          />
                        ))}
                      </MenubarContent>
                    </>
                  ) : (
                    <MenubarTrigger asChild>
                      <Link
                        href={item.href}
                        className="flex h-10 items-center px-4 font-semibold text-primary hover:bg-accent focus:bg-transparent"
                      >
                        <span className="text-base">{item.title}</span>
                      </Link>
                    </MenubarTrigger>
                  )}
                </MenubarMenu>
              ))}
            </Menubar>
          </div>
          <div className="hidden flex-shrink-0 lg:block">
            <Link
              href="/lending/customers/loan-application"
              className={cn(buttonVariants(), "rounded-full")}
            >
              Apply for a loan
            </Link>
          </div>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
