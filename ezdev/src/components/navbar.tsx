import React from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";


const tools: { title: string, href: string, description: string }[] = [
    {
        title: "Regex Tester",
        href: "/regex",
        description: "Test and validate your regular expressions with ease."
    },
    {
        title: "JWT Decoder",
        href: "/regex",
        description: "Decode and inspect JSON Web Tokens."
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
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 w-[500px]">
                                    {tools.map((t) => (
                                        <li key={t.title}>
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="bg-white hover:bg-zinc-100 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6"
                                                    href={t.href}
                                                >
                                                    <div className="text-sm leading-none font-medium">
                                                        {t.title}
                                                    </div>
                                                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                                        {t.description}
                                                    </p>
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