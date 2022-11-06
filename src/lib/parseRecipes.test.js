import parseRecipes from "./parseRecipes";

it("parses a minimal example", () => {
  const recipes = parseRecipes("# Title\nbody");

  expect(recipes.length).toEqual(1);
  expect(recipes[0].title).toEqual("Title");
  expect(recipes[0].body).toEqual(["body"]);
});

it("extracts text from titles", () => {
  const recipes = parseRecipes(
    "# [Sassy eggs](http://recipeblog.biz/sassy-eggs)\nbody"
  );

  expect(recipes[0].titleText).toEqual("Sassy eggs");
});
