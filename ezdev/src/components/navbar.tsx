import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="w-full max-w-h-[75px] flex items-center justify-center bg-blue-800 px-5">
            <div className="flex w-full h-full items-center justify-between transition-all hover:animate-bounce">
                <a className="flex items-baseline flex-row gap-1 select-none cursor-pointer" href="/">
                    <span className="italic text-[50px] h-fit font-light neon-purple font-bebas tracking-normal">
                        EZ
                    </span>
                    <span className="font-bebas text-[30px] text-white">
                        dev
                    </span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;