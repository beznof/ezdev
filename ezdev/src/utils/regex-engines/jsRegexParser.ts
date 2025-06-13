import type { RegexEngine, RegexMatch } from "../../interfaces/regex";

export class JavaScriptRegexEngine implements RegexEngine {
  match(regexPattern: string, testString: string, flags: string[]): RegexMatch {
    try {
      const flagsParsed = flags.toString();

      const regex = new RegExp(regexPattern, flagsParsed);
      const result = testString.match(regex);

      const match = regex.exec(testString);
      const groups = match?.groups || undefined;

      return {
        matches: result,
        groups: groups
      }

    } catch (err: any) {
      return {
        matches: null
      }
    }
  }
}