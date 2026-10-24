import type { RecipeStepType } from "lib/parseRecipes";
import ReactMarkdown from "react-markdown";

const Step = ({ step }: { step: RecipeStepType }) => (
  <tr>
    <td className="pr-4 pb-4 align-top whitespace-nowrap">{step.title}</td>
    <td className="markdown w-[40%] px-4 pb-2 align-top">
      <ReactMarkdown>{step.ingredients.join("\n")}</ReactMarkdown>
    </td>
    <td className="markdown px-4 pb-2 align-top">
      <ReactMarkdown>{step.body.join("\n")}</ReactMarkdown>
    </td>
  </tr>
);

export default Step;
