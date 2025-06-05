import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

type Engine = {
  name: string;
}

type OptionsProps = {
  engines: Engine[];
}

const RegexOptions: React.FC<OptionsProps> = ( {engines} ) => {
  return (
    <div className="flex flex-row w-full h-full items-center justify-start gap-5">
      Options:

      {/* Engines */}
      <Select defaultValue={engines[0].name}>
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
                  >{engine.name}</SelectItem>
                )
              })
            }
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Flags */}
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="global">
            global
        </ToggleGroupItem>
        <ToggleGroupItem value="ignore-case">
            ignore case
        </ToggleGroupItem>
        <ToggleGroupItem value="multiline">
            multiline
        </ToggleGroupItem>
      </ToggleGroup>

    </div>
  )
}

export default RegexOptions;