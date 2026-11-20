import clsx from "./clsx";
import { ChangeStat, Dumbbell, Legend, PairedBars, WordCloud } from "./charts";
import { buildBlocks, hasComparison } from "./comparisonBlocks";
import { fill } from "./surveyText";
import styles from "./NmuWorkshop2026.module.css";

function QuizBlock({ quiz, ctx }) {
  const copy = ctx.content.compare;
  return (
    <>
      <Legend preLabel={copy.before} postLabel={copy.after} />
      <div className={styles.bars}>
        {quiz.questions.map((q) => (
          <PairedBars
            key={q.title}
            label={ctx.t(q.title)}
            pre={q.pre}
            post={q.post}
            preLabel={copy.before}
            postLabel={copy.after}
          />
        ))}
      </div>
    </>
  );
}

function GridBlock({ item, ctx }) {
  const copy = ctx.content.compare;
  const isRetro = item.type === "retro";
  return (
    <>
      <Legend
        preLabel={isRetro ? copy.retroBefore : copy.before}
        postLabel={isRetro ? copy.retroAfter : copy.after}
      />
      <div className={styles.bars}>
        {item.rows.map((row) => (
          <Dumbbell
            key={row.label}
            label={ctx.t(row.label)}
            pre={row.pre}
            post={row.post}
            min={item.min}
            max={item.max}
            note={row.reverse ? ctx.content.labels.reverse : null}
          />
        ))}
      </div>
      {item.rows.some((row) => row.reverse) && <p className={styles.note}>{copy.reverseNote}</p>}
    </>
  );
}

function WordsBlock({ item, ctx }) {
  const copy = ctx.content.compare;
  return (
    <>
      <div className={styles.wordsCompare}>
        <div>
          <h3 className={styles.subheading}>{copy.before}</h3>
          <WordCloud words={item.pre} tone="pre" />
        </div>
        <div>
          <h3 className={styles.subheading}>{copy.after}</h3>
          <WordCloud words={item.post} />
        </div>
      </div>
      <p className={styles.note}>{copy.wordsNote}</p>
    </>
  );
}

const BLOCK_BODIES = {
  quiz: ({ block, ctx }) => <QuizBlock quiz={block.data} ctx={ctx} />,
  grid: ({ block, ctx }) => <GridBlock item={block.data} ctx={ctx} />,
  words: ({ block, ctx }) => <WordsBlock item={block.data} ctx={ctx} />,
};

/** Numbered heading, intro and chart card for one before/after block. */
export function CompareBlock({ index, block, ctx }) {
  const Body = BLOCK_BODIES[block.kind];
  return (
    <>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber}>{String(index).padStart(2, "0")}</span>
        <h2 className={styles.sectionTitle}>{block.title}</h2>
      </div>
      {block.intro && <p className={styles.sectionIntro}>{block.intro}</p>}
      <article className={styles.card}>
        <Body block={block} ctx={ctx} />
      </article>
    </>
  );
}

export function ChangeStatGrid({ comparison, ctx, className }) {
  const copy = ctx.content.compare;
  const headlineItems = comparison.items.filter(
    (item) => item.type === "grid" || item.type === "scale" || item.type === "retro",
  );

  return (
    <section className={clsx(styles.changeGrid, className)}>
      {comparison.quiz && (
        <ChangeStat
          name={copy.quizName}
          pre={comparison.quiz.pre}
          post={comparison.quiz.post}
          caption={fill(copy.outOf, { max: comparison.quiz.max })}
        />
      )}
      {headlineItems.map((item) => (
        <ChangeStat
          key={item.title}
          name={ctx.t(item.name)}
          pre={item.pre}
          post={item.post}
          caption={fill(copy.outOf, { max: item.max })}
          digits={2}
        />
      ))}
    </section>
  );
}

export default function ComparisonView({ comparison, ctx }) {
  const copy = ctx.content.compare;

  if (!hasComparison(comparison)) {
    return <p className={styles.state}>{copy.waiting}</p>;
  }

  return (
    <>
      <p className={styles.viewIntro}>{copy.intro}</p>

      <ChangeStatGrid comparison={comparison} ctx={ctx} />

      {buildBlocks(comparison, ctx).map((block, index) => (
        <section key={block.key} className={styles.section}>
          <CompareBlock index={index + 1} block={block} ctx={ctx} />
        </section>
      ))}
    </>
  );
}
