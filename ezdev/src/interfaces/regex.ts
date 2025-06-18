import type { RegexMatch } from "../types/regex";

export interface RegexEngine {
  match(pattern: string, text: string, flags: string[]): Promise<RegexMatch[]>;
}