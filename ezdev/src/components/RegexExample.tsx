
type ExampleProps = {
  regex: string;
  identifier: string;
  string: string;
  match: string;
}

const RegexExample: React.FC<ExampleProps> = ({ regex, identifier, string, match }) => {
  return (
    <div className="text-sm font-mono px-2 py-1 rounded-sm bg-zinc-800/80 w-fit">
      <span>
        /{regex}/
        <span className="text-fuchsia-400">
          {identifier}
        </span>
        &nbsp;
      </span>

      <span className="text-fuchsia-200">
        →&nbsp;
      </span>

      <span>
        "
        <span>
          {string}
        </span>
        "&nbsp;
      </span>

      <span className="text-fuchsia-200">
        →&nbsp;
      </span>

      <span className="text-fuchsia-400">
        [
        <span>
          {match}
        </span>
        ]
      </span>
    </div>
  )
}

export { RegexExample };