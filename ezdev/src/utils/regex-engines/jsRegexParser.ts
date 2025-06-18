import type { RegexEngine } from "../../interfaces/regex";
import type { RegexMatch, CaptureGroup } from "../../types/regex";

export class JavaScriptRegexEngine implements RegexEngine {
  match(regexPattern: string, testString: string, flags: string[]): RegexMatch[] {
    try {
      // Regex setup
      const flagsParsed = flags.join("") + "d";                   // Joining the flags array into a string
      const regex = new RegExp(regexPattern, flagsParsed);  
      
      // Initializing values
      const regexMatches: RegexMatch[] = [];

      // Matching
      let match;
      while((match = regex.exec(testString)) !== null) {
        const indices = (match as any).indices as [number,number][] | undefined;
        const captureGroups: Record<number, CaptureGroup> = {};
        const namedGroups: Record<string, CaptureGroup> = {};

        // Saving nameless capture groups
        for(let i = 1; i < match.length; i++) {
          const value = match[i];
          if(value === undefined) continue;

          const startIndex = indices && indices[i] ? indices[i][0] : testString.indexOf(value);
          const endIndex = indices && indices[i] ? indices[i][1] : startIndex + value.length;

          captureGroups[i] = { startIndex, endIndex, value};
        }
        // Saving named capture groups
        if(match.groups) {
          for(const [name, value] of Object.entries(match.groups)){
            if(value === undefined) continue;
            
            const groupIndices = (match as any).indices?.groups?.[name];
            const startIndex = groupIndices?.[0] ?? testString.indexOf(value);
            const endIndex = groupIndices?.[1] ?? startIndex + value.length;

            namedGroups[name] = { value, startIndex, endIndex};
          }
        }

        regexMatches.push({
          fullMatch: match[0],
          startIndex: match.index,
          endIndex: match.index + match[0].length,
          captureGroups,
          namedGroups
        });

        if (!flagsParsed.includes("g")) break;
      }

      return regexMatches;
    } catch (err: any) {
      return [];
    }
  }
}
