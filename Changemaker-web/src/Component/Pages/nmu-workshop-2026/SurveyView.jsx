import clsx from "./clsx";
import { AverageBar, Bar, Columns, WordCloud } from "./charts";
import {
  OTHER_OPTION,
  fill,
  formatDecimal,
  localizeScaleHelp,
  stripSectionNumber,
} from "./surveyText";
import { isItemShown, isWideItem } from "./surveyItems";
import styles from "./NmuWorkshop2026.module.css";

function isPassportSection(section) {
  return /your passport/i.test(section.title || "");
}

function FillLegend({ ctx }) {
  const { labels } = ctx.content;
  return (
    <div className={styles.fillLegend} aria-label={labels.barLegendAria}>
      <span>
        <span className={clsx(styles.fillSwatch, styles.fillSwatchMore)} aria-hidden="true" />
        {labels.barMore}
      </span>
      <span>
        <span className={clsx(styles.fillSwatch, styles.fillSwatchLess)} aria-hidden="true" />
        {labels.barLess}
      </span>
    </div>
  );
}

function Headline({ value, label }) {
  return (
    <div className={styles.headline}>
      <span className={styles.headlineValue}>{value}</span>
      <span className={styles.headlineLabel}>{label}</span>
    </div>
  );
}

function ChoiceItem({ item, ctx }) {
  const options = item.type === "multi" ? [...item.options].sort((a, b) => b.count - a.count) : item.options;
  const top = Math.max(...options.map((o) => o.count));
  const countOnly = /which session are you in/i.test(item.title || "");
  return (
    <>
      <div className={styles.bars}>
        {options.map((option) => (
          <Bar
            key={option.label}
            label={option.label === OTHER_OPTION ? ctx.content.labels.other : ctx.t(option.label)}
            count={option.count}
            total={item.answered}
            format={ctx.format}
            highlight={option.count === top && top > 0}
            showPercent={!countOnly}
          />
        ))}
      </div>
      {item.type === "multi" && <p className={styles.note}>{ctx.content.labels.multiNote}</p>}
    </>
  );
}

function ScaleItem({ item, ctx }) {
  const { labels } = ctx.content;
  const rows = [...item.distribution].reverse();
  const top = Math.max(...rows.map((r) => r.count));
  return (
    <>
      <Headline
        value={formatDecimal(item.average)}
        label={`${labels.average} · ${fill(labels.outOf, { max: item.max })}`}
      />
      <div className={styles.bars}>
        {rows.map((row) => (
          <Bar
            key={row.value}
            label={String(row.value)}
            count={row.count}
            total={item.answered}
            format={ctx.format}
            highlight={row.count === top && top > 0}
          />
        ))}
      </div>
      {(item.lowLabel || item.highLabel) && (
        <p className={styles.note}>
          {item.min} = {ctx.t(item.lowLabel)} · {item.max} = {ctx.t(item.highLabel)}
        </p>
      )}
    </>
  );
}

function NpsItem({ item, ctx }) {
  const { labels } = ctx.content;
  const segments = [
    { key: "promoters", value: item.promoters, className: styles.npsPromoters },
    { key: "passives", value: item.passives, className: styles.npsPassives },
    { key: "detractors", value: item.detractors, className: styles.npsDetractors },
  ];
  return (
    <>
      <Headline value={item.nps ?? "—"} label={labels.nps} />
      <div className={styles.stacked}>
        {segments.map((s) => (
          <div key={s.key} className={s.className} style={{ width: `${s.value}%` }} />
        ))}
      </div>
      <div className={styles.npsLegend}>
        {segments.map((s) => (
          <span key={s.key}>
            <span className={clsx(styles.legendSwatch, s.className)} />
            {labels[s.key]} · <strong>{s.value}%</strong>
          </span>
        ))}
      </div>
      <p className={styles.note}>
        {labels.average}: {formatDecimal(item.average)} · {fill(labels.outOf, { max: item.max })}
      </p>
    </>
  );
}

function GridItem({ item, ctx }) {
  return (
    <>
      {item.help && <p className={styles.scaleHelp}>{localizeScaleHelp(item.help, ctx.locale)}</p>}
      <div className={styles.bars}>
        {item.rows.map((row) => (
          <AverageBar
            key={row.label}
            label={ctx.t(row.label)}
            value={row.average}
            min={item.min}
            max={item.max}
            note={row.reverse ? ctx.content.labels.reverse : null}
          />
        ))}
      </div>
    </>
  );
}

export function QuizScores({ item, ctx }) {
  const { labels } = ctx.content;
  return (
    <>
      <Headline
        value={`${formatDecimal(item.averageScore)} / ${item.maxScore}`}
        label={labels.averageScore}
      />
      <p className={styles.subheading}>{labels.scoreDistribution}</p>
      <Columns
        data={item.scoreDistribution.map((d) => ({ label: String(d.score), value: d.count }))}
        format={ctx.format}
      />
    </>
  );
}

export function QuizQuestions({ item, ctx, className }) {
  const { labels } = ctx.content;
  return (
    <div className={clsx(styles.bars, className)}>
      {item.questions.map((q) => (
        <div key={q.title} className={styles.barRow}>
          <div className={styles.barMeta}>
            <span className={styles.barLabel}>{ctx.t(q.title)}</span>
            <span className={styles.barValue}>{q.correctPct}%</span>
          </div>
          <div className={styles.barTrack}>
            <div className={clsx(styles.barFill, styles.barFillHighlight)} style={{ width: `${q.correctPct}%` }} />
          </div>
          <p className={styles.correctAnswer}>
            {labels.correctAnswer}: {ctx.t(q.correctAnswer)}
          </p>
        </div>
      ))}
    </div>
  );
}

function QuizItem({ item, ctx }) {
  return (
    <>
      <QuizScores item={item} ctx={ctx} />
      <QuizQuestions item={item} ctx={ctx} className={styles.quizQuestions} />
    </>
  );
}

function NumberItem({ item, ctx }) {
  const { labels } = ctx.content;
  return (
    <>
      <Headline value={formatDecimal(item.average)} label={`${labels.average} · ${labels.median} ${item.median ?? "—"}`} />
      <div className={styles.bars}>
        {item.buckets.map((b) => (
          <Bar key={b.label} label={b.label} count={b.count} total={item.answered} format={ctx.format} />
        ))}
      </div>
    </>
  );
}

function WordsItem({ item, ctx }) {
  return (
    <>
      <WordCloud words={item.words} />
      <p className={styles.note}>{ctx.content.compare.wordsNote}</p>
    </>
  );
}

function TextItem({ item, ctx }) {
  if (!item.quotes?.length) return <p className={styles.note}>{ctx.content.labels.noQuotes}</p>;
  return (
    <div className={styles.quotes}>
      {item.quotes.map((quote, index) => (
        <blockquote key={index} className={styles.quote}>
          {(ctx.locale === "th" ? quote.th : quote.en) || quote.en || quote.th}
        </blockquote>
      ))}
    </div>
  );
}

const ITEM_COMPONENTS = {
  choice: ChoiceItem,
  multi: ChoiceItem,
  scale: ScaleItem,
  nps: NpsItem,
  grid: GridItem,
  quiz: QuizItem,
  number: NumberItem,
  words: WordsItem,
  text: TextItem,
};

function itemTitle(item, ctx) {
  if (item.type === "quiz") return null;
  return ctx.t(item.title);
}

export function SectionHeading({ number, section, ctx }) {
  return (
    <div className={styles.sectionHeader}>
      <span className={styles.sectionNumber}>{String(number).padStart(2, "0")}</span>
      <h2 className={styles.sectionTitle}>{stripSectionNumber(ctx.t(section.title))}</h2>
      {isPassportSection(section) && <FillLegend ctx={ctx} />}
    </div>
  );
}

/** `children` replaces the default chart, e.g. when the PDF report splits a quiz across two cards. */
export function SurveyItemCard({ item, ctx, wide = false, showMeta = true, className, children }) {
  const Component = ITEM_COMPONENTS[item.type];
  const title = itemTitle(item, ctx);
  return (
    <article className={clsx(styles.card, wide && styles.cardWide, className)}>
      {title && <h3 className={styles.cardTitle}>{title}</h3>}
      {showMeta && (
        <p className={styles.cardMeta}>{fill(ctx.content.labels.answers, { count: ctx.format(item.answered) })}</p>
      )}
      {children ?? <Component item={item} ctx={ctx} />}
    </article>
  );
}

export default function SurveyView({ survey, ctx }) {
  if (!survey.responses) return <p className={styles.state}>{ctx.content.labels.empty}</p>;

  return survey.sections.map((section, sectionIndex) => (
    <section key={section.title || sectionIndex} className={styles.section}>
      <SectionHeading number={sectionIndex + 1} section={section} ctx={ctx} />
      <div className={styles.questionGrid}>
        {section.items.filter(isItemShown).map((item, itemIndex) => (
          <SurveyItemCard key={item.title || itemIndex} item={item} ctx={ctx} wide={isWideItem(item)} />
        ))}
      </div>
    </section>
  ));
}
