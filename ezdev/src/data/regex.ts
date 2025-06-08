import React from "react";
import type { Engine, Flag  } from "../types/regex";
import { GlobalExample } from "./RegexExamples";

const flags: Record<string, Flag> = {
  g: { 
    index: "g",
    name: "Global",
    description: "Find all matches in the string.",
    example: React.createElement(GlobalExample)
  },
  i: { 
    index: "i",
    name: "Case Insensitive",
    description: "Match letters in a case-insensitive manner.",
    example: '/banana/i : "bANanA" => ["banana"]'
  },
  s: { 
    index: "s",
    name: "Dot All",
    description: "Make the dot (.) match newlines as well.",
    example: '/banana.grape/s : "banana\\ngrape" => ["banana\ngrape"]'
  },
  m: { 
    index: "m",
    name: "Multiline",
    description: "Make the caret (^) and dollar sign ($) match the start and end of each line.",
    example: '/^banana/m : "banana\ngrape" => ["banana"]'
  },
  u: { 
    index: "u" ,
    name: "Unicode",
    description: "Enable full Unicode matching.",
    example: '/\\w+/u : "bananá" => ["bananá"]'
  },
  x: { 
    index: "x",
    name: "Extended",
    description: "Allow whitespace and comments in the regex pattern.",
    example: '/b a n a n a/x : "banana" => ["banana"]'
  }
}

const engines: Engine[] = [
  { 
    name: 'JavaScript',
    flags: [flags.g, flags.i, flags.s, flags.m, flags.u],
  },
  { 
    name: 'Python',
    flags: [flags.i, flags.s, flags.m, flags.x, flags.u]
  },
  { 
    name: 'Java',
    flags: [flags.i, flags.m, flags.s, flags.u]
  },
  { 
    name: 'PCRE',
    flags: [flags.g, flags.i, flags.s, flags.m, flags.u, flags.x]
  },
]

export { flags, engines };