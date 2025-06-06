export type Flag = {
  index: string;
  card?: React.FC;
}

export type Engine = {
  name: string;
  flags: Flag[]
}