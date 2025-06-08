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