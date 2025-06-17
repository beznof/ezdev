export type Flag = {
  index: string;
  name: string;
  description: string;
  example: React.ReactNode;
}

export type Engine = {
  name: string;
  flags: Flag[]
}

export type CaptureGroup = {
  value:string;
  name?:string;
  startIndex: number;
  endIndex: number;
}

export type RegexMatch = {
  fullMatch: string;
  startIndex: number;
  endIndex: number;
  captureGroups: Record<number,CaptureGroup>;
  namedGroups?: Record<string,CaptureGroup>;
}