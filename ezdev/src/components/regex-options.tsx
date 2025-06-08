import React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import type { Engine } from "../types/regex";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

type RegexOptionsProps = {
  engines: Engine[];
  currentEngine: Engine;
  setCurrentEngine: (engine: Engine) => void;
  currentFlags: string[];
  setCurrentFlags: (flags: string[]) => void;
};

const RegexOptions: React.FC<RegexOptionsProps> = ({ engines, currentEngine, setCurrentEngine, currentFlags, setCurrentFlags }) => {

  return (
    <div className="flex flex-row w-full h-full items-center justify-start gap-5">
      <p className="font-semibold">
        Options:
      </p>

      {/* Engines */}
      <Select value={currentEngine.name}
        onValueChange={(value) => {
          const newEngine = engines.find((engine) => engine.name === value);
          if (newEngine) {
            setCurrentEngine(newEngine);
          }
        }}
      >
        <SelectTrigger className="w-[130px]">
          <SelectValue/>
        </SelectTrigger>
        <SelectContent className="bg-gray-100/20 dark:bg-gray-950/20 backdrop-blur-md">
          <SelectGroup>
            <SelectLabel>Engines</SelectLabel>
            {
              engines.map((engine) => {
                return (
                  <SelectItem 
                    value={engine.name}
                    className="hover:bg-gray-100 dark:hover:bg-zinc-800 hover:!text-purple-500 hover:fill-purple-500"
                  >
                    {engine.name}
                  </SelectItem>
                )
              })
            }
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Flags */}
      <ToggleGroup 
        type="multiple"
        value={currentFlags}
        onValueChange={(value) => setCurrentFlags(value)}
      >
        {currentEngine.flags.map((flag) => {
          return (
            <HoverCard>
              <HoverCardTrigger>
                <ToggleGroupItem 
                  value={flag.index}
                >
                  {flag.index}
                </ToggleGroupItem>
              </HoverCardTrigger>
              <HoverCardContent className="w-fit max-w-[400px] bg-gray-100/20 dark:bg-gray-950/20 backdrop-blur-md">
                <div className="flex flex-col gap-2 w-full h-full justify-center items-start">
                  <p className="text-md font-semibold">{flag.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{flag.description}</p>
                  {flag.example}
                </div>
              </HoverCardContent>
            </HoverCard>
          )
        })}
      </ToggleGroup>

    </div>
  )
}

export default RegexOptions;