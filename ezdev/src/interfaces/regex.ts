export type RegexMatch = {
  matches: string[] | null;
  groups?: Record<string,string>
}

export interface RegexEngine {
  match(pattern: string, text: string, flags: string[]): RegexMatch;
}