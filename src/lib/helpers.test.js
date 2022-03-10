import { padding, sluggify } from "./helpers";

describe("padding", () => {
  it("returns a string of n length", () => {
    const four = padding(4);
    const eight = padding(8);

    expect(four.length).toEqual(4);
    expect(eight.length).toEqual(8);
  });
});

describe("padding", () => {
  it("converts capitals to lowercase", () => {
    const slug = sluggify("Title");
    expect(slug).toEqual("title");
  });

  it("converts spaces to hyphens", () => {
    const slug = sluggify("my title");
    expect(slug).toEqual("my-title");
  });

  it("strips non-alpha-numeric characters", () => {
    const slug = sluggify("Me nan's Yorkie pudd!");
    expect(slug).toEqual("me-nans-yorkie-pudd");
  });

  it("trims trailing and leading whitespace", () => {
    const slug = sluggify(" WHY?? ?");
    expect(slug).toEqual("why");
  });

  it("limits length to 32 characters", () => {
    const slug = sluggify("x".repeat(100));
    expect(slug.length).toEqual(32);
  });
});
