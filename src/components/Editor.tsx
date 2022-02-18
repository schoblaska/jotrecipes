import React, { Dispatch, SetStateAction } from "react";
import SimpleEditor from "react-simple-code-editor";
import * as prism from "prismjs";
import "prismjs/components/prism-markdown";

const Editor = ({
  value,
  setValue,
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) => (
  <div className="min-h-screen w-full bg-gray-800">
    <div className="mx-auto max-w-4xl">
      <SimpleEditor
        value={value}
        onValueChange={(v) => setValue(v)}
        highlight={(v) => prism.highlight(v, prism.languages.md, "markdown")}
        className="resize-none p-4 font-mono text-sm text-gray-100"
        textareaClassName="outline-0"
        padding={24}
      />
    </div>
  </div>
);

export default Editor;
