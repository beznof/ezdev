import React from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import RegexIcon from "../static/regex-icon";
import Base64Icon from "../static/base64-icon";
import HashIcon from "../static/hash-icon";
import ThemeIcon from "../static/theme-icon";
import { useTheme } from "./theme-provider";


const tools: { title: string, href: string, description: string, svg?: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
    {
        title: "Regex Tester",
        href: "/tools/regex",
        description: "Test and validate your regular expressions with ease.",
        svg: RegexIcon
    },
    {
        title: "Base64 Encoder & Decoder",
        href: "/tools/base64",
        description: "Decode and inspect JSON Web Tokens.",
        svg: Base64Icon
    },
    {
        title: "Hash Generator",
        href: "/tools/hash",
        description: "Generate hashes",
        svg: HashIcon
    },
];

const Navbar: React.FC = () => {
    const { toggleTheme } = useTheme()

    return (
        <nav className="w-full max-h-[75px] flex items-center justify-center select-none border-b-1 border-gray-950/5 dark:border-white/5">
            <div className="flex w-full h-full items-center justify-between transition-all mx-5">
                <div className="flex flex-row items-center gap-3">
                    <a className="hover:opacity-70 flex items-baseline flex-row gap-1 cursor-pointer p-1 m-3 transition-all" href="/">
                        <span className="italic text-[50px] h-fit font-light font-bebas tracking-normal text-fuchsia-400 text-shadow-[0_0_10px_rgba(232,121,249,1)]">
                            EZ
                        </span>
                        <span className="font-bebas text-[30px] text-black dark:text-white">
                            dev
                        </span>
                    </a>
                    <NavigationMenu className="[&_[data-slot=navigation-menu-viewport]]:!bg-transparent">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger
                                    className="bg-white/0 hover:bg-gray-500/10 data-[state=open]:bg-gray-500/5 data-[state=open]:hover:bg-gray-500/10 !transition-none"
                                >
                                    Tools
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-gray-100/20 dark:bg-gray-950/20 backdrop-blur-md">
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 min-w-[700px] h-auto">
                                        {tools.map((t) => (
                                            <li key={t.title}>
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="group bg-gray-100/50 dark:bg-black/25 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-purple-500 hover:fill-purple-500 flex items-center flex-row justify-start rounded-md bg-linear-to-b p-6 gap-3 h-full"
                                                        href={t.href}
                                                    >
                                                        {t.svg && React.createElement(t.svg, {className: "size-10 min-w-10 fill-black stroke-black text-black dark:fill-white dark:stroke-white dark:text-white group-hover:fill-purple-500 group-hover:stroke-purple-500 group-hover:text-purple-500 dark:group-hover:fill-purple-500 dark:group-hover:stroke-purple-500 dark:group-hover:text-purple-500"})}
                                                        <div className="flex flex-col">
                                                            <div className="text-sm leading-none font-medium">
                                                                {t.title}
                                                            </div>
                                                            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
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
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex flex-row items-center justify-end gap-3">
                    <ThemeIcon 
                        className="size-10 rounded-sm p-2 bg-transparent fill-transparent stroke-gray-950 dark:stroke-white hover:bg-gray-500/10"
                        onClick={() => toggleTheme()}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;