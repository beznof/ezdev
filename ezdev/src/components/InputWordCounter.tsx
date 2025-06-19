import { cn } from "../lib/utils";

type InputWordCounterProps = {
  wordCount: number;
  wordLimit: number;
  className?: string;
}

const InputWordCounter: React.FC<InputWordCounterProps> = ({ wordCount, wordLimit, className }) => {
  return (
    <div className={cn("select-none text-[10px] font-mono dark:bg-zinc-950/80 bg-white/80 px-[5px] rounded-sm ezdev-text-primary transition-all", className)}>
      {wordLimit - wordCount}
    </div>
  )
}

export default InputWordCounter;