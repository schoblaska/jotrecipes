import React from "react";
import type { RecipeType } from "lib/parseRecipes";
import ReactMarkdown from "react-markdown";
import Step from "components/Recipe/Step";

const Recipe = ({ recipe }: { recipe: RecipeType }) => (
  <div className="mb-8">
    <div className="mb-2 flex items-end border-b-2 border-gray-700">
      <div className="flex-grow font-bold">
        <ReactMarkdown>{recipe.title}</ReactMarkdown>
      </div>
      <div>
        <ReactMarkdown>{recipe.subtitle}</ReactMarkdown>
      </div>
    </div>
    <div>
      {recipe.body.length > 0 && (
        <div className="markdown border-b border-gray-700 py-2">
          <ReactMarkdown>{recipe.body.join("\n")}</ReactMarkdown>
        </div>
      )}
      {recipe.steps && (
        <table className="mt-4">
          <tbody>
            {recipe.steps.map((step, i) => (
              <Step key={i} step={step} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>
);

export default Recipe;
