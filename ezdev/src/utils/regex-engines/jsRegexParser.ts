import type { RegexEngine, RegexMatch } from "../../interfaces/regex";

export class JavaScriptRegexEngine implements RegexEngine {
  match(regexPattern: string, testString: string, flags: string[]): RegexMatch {
    try {
      const flagsParsed = flags.join(""); 
      const regex = new RegExp(regexPattern, flagsParsed);

      let matches: string[] = [];
      let groups: Record<string,string> | undefined = undefined;

      if(flagsParsed.includes("g")) {
        let match;

        while((match = regex.exec(testString)) !== null) {
          matches.push(match[0]);

          groups = match.groups;
        }
      }

      return {
        matches: matches,
        groups: groups
      }

    } catch (err: any) {
      return {
        matches: null
      }
    }
  }
}