import React from 'react';
import HashIcon from "../static/hash-icon";
import Base64Icon from "../static/base64-icon";
import RegexIcon from "../static/regex-icon";

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

export { tools };