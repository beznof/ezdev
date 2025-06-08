import type { JSX } from "react";

export type Flag = {
  index: string;
  name: string;
  description: string;
  example: string | (() => JSX.Element);
}

export type Engine = {
  name: string;
  flags: Flag[]
}