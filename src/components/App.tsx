import React, { useState, useRef } from "react";
import placeholder from "lib/placeholder";
import parseRecipes from "lib/parseRecipes";
import Recipe from "components/Recipe";
import Editor from "components/Editor";
import Nav from "components/Nav";

const App = ({ initialText }: { initialText?: string }) => {
  const [text, setText] = useState(initialText || placeholder);
  const recipes = parseRecipes(text);
  const printRef = useRef<HTMLDivElement>(null);

  return (
    <div className="grid grid-cols-2">
      <div className="flex h-screen flex-col bg-gray-500">
        <div className="no-scrollbar overflow-scroll">
          <Editor value={text} setValue={setText} />
        </div>
      </div>
      <div className="no-scrollbar h-screen overflow-scroll p-6">
        <div
          className="mx-auto max-w-prose font-serif print:pt-20"
          ref={printRef}
        >
          <Nav printRef={printRef} text={text} />
          {recipes.map((recipe, i) => (
            <Recipe recipe={recipe} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
