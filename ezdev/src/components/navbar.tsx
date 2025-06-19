import React from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import ThemeIcon from "../static/theme-icon";
import { useTheme } from "./theme-provider";
import { tools } from "../data/navbar-tools";
import NavbarLogo from "./navbar-logo";

const Navbar: React.FC = () => {
  const { toggleTheme } = useTheme()

  return (
    <nav className="w-full max-h-[75px] flex items-center justify-center select-none border-b-1 ezdev-seperator">
      <div className="flex items-center justify-between w-full h-full mx-5">
        
        {/* Left side */}
        <div className="flex flex-row items-center gap-3">
          <NavbarLogo/>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="ezdev-navbar-menu-trigger">
                    Tools
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 min-w-[700px] h-auto">
                      {tools.map((t) => (
                        <li key={t.title}>
                          <NavigationMenuLink asChild>
                            <a
                              className="flex flex-row items-center justify-start h-full gap-3 p-6 rounded-md group ezdev-select "
                              href={t.href}
                            >
                              {t.svg && React.createElement(t.svg, {className: "size-10 min-w-10 ezdev-text-primary group-hover:fill-purple-500 group-hover:stroke-purple-500 group-hover:text-purple-500 dark:group-hover:fill-purple-500 dark:group-hover:stroke-purple-500 dark:group-hover:text-purple-500"})}
                              <div className="flex flex-col">
                                <div className="mb-1 text-sm font-semibold leading-none"> 
                                  {t.title}
                                </div>
                                <p className="text-sm leading-4 ezdev-text-secondary line-clamp-2">
                                  {t.description}
                                </p>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="ezdev-navbar-menu-trigger">
                    Cheatsheets
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side */}
        <div className="flex flex-row items-center justify-end">
          <ThemeIcon 
            className="ezdev-navbar-button ezdev-text-primary"
            onClick={() => toggleTheme()}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;