import React from 'react';
import type { Engine, Flag } from '../types/regex';
import { RegexExample } from '../components/RegexExample';

const flags: Record<string, Flag> = {
  g: { 
    index: 'g',
    name: 'Global',
    description: 'Find all matches in the string.',
    example: React.createElement(RegexExample,
      {
        regex: 'a',
        identifier: 'g',
        string: 'banana',
        match: '"a", "a", "a"'
      }
    )
  },
  i: { 
    index: 'i',
    name: 'Case Insensitive',
    description: 'Match letters in a case-insensitive manner.',
    example: React.createElement(RegexExample,
      {
        regex: 'banana',
        identifier: 'i',
        string: 'bANanA',
        match: '"banana"'
      }
    )
  },
  s: { 
    index: 's',
    name: 'Dot All',
    description: 'Make the dot (.) match newlines as well.',
    example: React.createElement(RegexExample,
      {
        regex: 'banana.grape',
        identifier: 's',
        string: 'banana\\ngrape',
        match: 'banana\\ngrape'
      }
    )
  },
  m: { 
    index: 'm',
    name: 'Multiline',
    description: 'Make the caret (^) and dollar sign ($) match the start and end of each line.',
    example: React.createElement(RegexExample,
      {
        regex: '^banana',
        identifier: 'm',
        string: 'banana\\ngrape',
        match: '"banana"'
      }
    )
  },
  u: { 
    index: 'u',
    name: 'Unicode',
    description: 'Enable full Unicode matching.',
    example: React.createElement(RegexExample,
      {
        regex: '\\w+',
        identifier: 'u',
        string: 'bananá',
        match: '"bananá"'
      }
    )
  },
  x: { 
    index: 'x',
    name: 'Extended',
    description: 'Allow whitespace and comments in the regex pattern.',
    example: React.createElement(RegexExample,
      {
        regex: 'b a n a n a',
        identifier: 'x',
        string: 'banana',
        match: '"banana"'
      }
    )
  }
};

const engines: Engine[] = [
  { 
    name: 'JavaScript',
    flags: [flags.g, flags.i, flags.s, flags.m, flags.u],
  },
  { 
    name: 'Python',
    flags: [flags.i, flags.s, flags.m, flags.x, flags.u]
  },
  { 
    name: 'Java',
    flags: [flags.i, flags.m, flags.s, flags.u]
  },
  { 
    name: 'PCRE',
    flags: [flags.g, flags.i, flags.s, flags.m, flags.u, flags.x]
  },
];

export { flags, engines };