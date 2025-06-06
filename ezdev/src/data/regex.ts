import type { Engine, Flag  } from "../types/regex";

const flags: Record<string, Flag> = {
  g: { index: "g" },
  i: { index: "i" },
  s: { index: "s" },
  m: { index: "m" },
  u: { index: "u" },
  x: { index: "x" },
  d: { index: "d" }
}

const engines: Engine[] = [
  { 
    name: 'JavaScript',
    flags: [flags.g, flags.i, flags.s, flags.m, flags.u, flags.d],
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