import React from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import RegexIcon from "../static/regex-icon";


const tools: { title: string, href: string, description: string, svg?: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
    {
        title: "Regex Tester",
        href: "/regex",
        description: "Test and validate your regular expressions with ease.",
        svg: RegexIcon
    },
    {
        title: "JWT Decoder",
        href: "/regex",
        description: "Decode and inspect JSON Web Tokens."
    },
    {
        title: "Hash Generator",
        href: "/regex",
        description: "Generate hashes"
    },
    {
        title: "Base64 Encode & Decoder",
        href: "/regex",
        description: "Decode and encode Base64 strings"
    },
];

const Navbar: React.FC = () => {
    return (
        <nav className="w-full max-w-h-[75px] flex items-center justify-center border-b-1 border-zinc-200 bg-white">
            <div className="flex w-full h-full items-center justify-start transition-all mx-5 gap-3">
                <a className="flex items-baseline flex-row gap-1 select-none cursor-pointer bg-white hover:bg-zinc-100 rounded-xl p-1 m-3 transition-all" href="/">
                    <span className="italic text-[50px] h-fit font-light neon-purple font-bebas tracking-normal">
                        EZ
                    </span>
                    <span className="font-bebas text-[30px] text-black dark:text-white">
                        dev
                    </span>
                </a>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                            <NavigationMenuContent className="bg-white-100">
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 w-[600px] h-auto">
                                    {tools.map((t) => (
                                        <li key={t.title}>
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="bg-white hover:bg-zinc-100 hover:text-purple-500 hover:fill-purple-500 flex flex-row justify-start rounded-md bg-linear-to-b p-6 gap-3 h-full"
                                                    href={t.href}
                                                >
                                                    <RegexIcon className="size-10 fill-amber-300"/>
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
        </nav>
    )
}

export default Navbar;