export function hasComparison(comparison) {
  return Boolean(comparison?.preResponses && comparison?.postResponses);
}

/** One titled before/after block per quiz, grid, then-and-now and word item. */
export function buildBlocks(comparison, ctx) {
  const copy = ctx.content.compare;
  const blocks = [];

  if (comparison.quiz) {
    blocks.push({ key: "quiz", kind: "quiz", title: copy.quizTitle, data: comparison.quiz });
  }

  comparison.items.forEach((item) => {
    if (item.type === "grid" || item.type === "retro") {
      blocks.push({
        key: item.title,
        kind: "grid",
        title: ctx.t(item.name),
        intro: item.type === "retro" ? copy.retroIntro : ctx.t(item.title),
        data: item,
      });
    } else if (item.type === "words") {
      blocks.push({ key: item.title, kind: "words", title: ctx.t(item.name), intro: ctx.t(item.title), data: item });
    }
  });

  return blocks;
}
