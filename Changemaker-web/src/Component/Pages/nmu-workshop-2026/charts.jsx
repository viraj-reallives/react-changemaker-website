import clsx from "./clsx";
import { formatDecimal, formatDelta, percent } from "./surveyText";
import styles from "./NmuWorkshop2026.module.css";

/** Share of respondents for one answer option. */
export function Bar({ label, count, total, format, highlight = false, showPercent = true }) {
  const pct = percent(count, total);
  return (
    <div className={styles.barRow}>
      <div className={styles.barMeta}>
        <span className={styles.barLabel}>{label}</span>
        <span className={styles.barValue}>
          {showPercent ? (
            <>
              {pct}% <span className={styles.barCount}>· {format(count)}</span>
            </>
          ) : (
            format(count)
          )}
        </span>
      </div>
      <div className={styles.barTrack}>
        <div
          className={clsx(styles.barFill, highlight && styles.barFillHighlight)}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/** An average on a min–max scale, e.g. a grid row rated 1–5. */
export function AverageBar({ label, value, min, max, note }) {
  const width = value == null ? 0 : ((value - min) / (max - min)) * 100;
  return (
    <div className={styles.barRow}>
      <div className={styles.barMeta}>
        <span className={styles.barLabel}>
          {label}
          {note && <span className={styles.rowNote}>{note}</span>}
        </span>
        <span className={styles.barValue}>{formatDecimal(value)}</span>
      </div>
      <div className={styles.barTrack}>
        <div className={clsx(styles.barFill, styles.barFillHighlight)} style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

/** Before and after averages on the same min–max track. */
export function Dumbbell({ label, pre, post, min, max, note }) {
  const position = (value) => ((value - min) / (max - min)) * 100;
  const hasBoth = pre != null && post != null;
  const left = hasBoth ? Math.min(position(pre), position(post)) : 0;
  const right = hasBoth ? Math.max(position(pre), position(post)) : 0;

  return (
    <div className={styles.dumbbellRow}>
      <div className={styles.barMeta}>
        <span className={styles.barLabel}>
          {label}
          {note && <span className={styles.rowNote}>{note}</span>}
        </span>
        <span className={styles.dumbbellValues}>
          <span className={styles.preValue}>{formatDecimal(pre)}</span>
          <span aria-hidden="true">→</span>
          <span className={styles.postValue}>{formatDecimal(post)}</span>
        </span>
      </div>
      <div className={styles.dumbbellTrack}>
        {hasBoth && (
          <div className={styles.dumbbellLine} style={{ left: `${left}%`, width: `${right - left}%` }} />
        )}
        {pre != null && <span className={clsx(styles.dot, styles.dotPre)} style={{ left: `${position(pre)}%` }} />}
        {post != null && <span className={clsx(styles.dot, styles.dotPost)} style={{ left: `${position(post)}%` }} />}
      </div>
    </div>
  );
}

/** Two percentage bars (before and after) for one question. */
export function PairedBars({ label, pre, post, preLabel, postLabel }) {
  return (
    <div className={styles.pairedRow}>
      <div className={styles.barMeta}>
        <span className={styles.barLabel}>{label}</span>
        <span className={styles.dumbbellValues}>
          <span className={styles.preValue}>{pre}%</span>
          <span aria-hidden="true">→</span>
          <span className={styles.postValue}>{post}%</span>
        </span>
      </div>
      <div className={styles.pairedBars}>
        <div className={styles.barTrack} title={preLabel}>
          <div className={clsx(styles.barFill, styles.barFillPre)} style={{ width: `${pre}%` }} />
        </div>
        <div className={styles.barTrack} title={postLabel}>
          <div className={clsx(styles.barFill, styles.barFillHighlight)} style={{ width: `${post}%` }} />
        </div>
      </div>
    </div>
  );
}

export function Legend({ preLabel, postLabel }) {
  return (
    <div className={styles.legend}>
      <span><span className={clsx(styles.legendSwatch, styles.dotPre)} />{preLabel}</span>
      <span><span className={clsx(styles.legendSwatch, styles.dotPost)} />{postLabel}</span>
    </div>
  );
}

/** Before → after headline figure. */
export function ChangeStat({ name, pre, post, caption, digits = 1 }) {
  const delta = formatDelta(pre, post, digits);
  const improved = pre != null && post != null && post > pre;
  return (
    <div className={styles.changeCard}>
      <span className={styles.changeName}>{name}</span>
      <div className={styles.changeFigures}>
        <span className={styles.changePre}>{formatDecimal(pre, digits)}</span>
        <span className={styles.changeArrow} aria-hidden="true">→</span>
        <span className={styles.changePost}>{formatDecimal(post, digits)}</span>
      </div>
      <div className={styles.changeFooter}>
        {delta && <span className={clsx(styles.delta, improved && styles.deltaUp)}>{delta}</span>}
        <span className={styles.changeCaption}>{caption}</span>
      </div>
    </div>
  );
}

export function Columns({ data, format }) {
  const max = Math.max(1, ...data.map((d) => d.value));
  return (
    <div className={styles.columns}>
      {data.map((d) => (
        <div key={d.label} className={styles.column}>
          <span className={styles.columnValue}>{format(d.value)}</span>
          <div className={styles.columnTrack}>
            <div className={styles.columnFill} style={{ height: `${percent(d.value, max)}%` }} />
          </div>
          <span className={styles.columnLabel}>{d.label}</span>
        </div>
      ))}
    </div>
  );
}

export function WordCloud({ words, tone = "post" }) {
  if (!words?.length) return null;
  const max = Math.max(...words.map((w) => w.count));
  const min = Math.min(...words.map((w) => w.count));
  return (
    <ul className={clsx(styles.wordCloud, tone === "pre" && styles.wordCloudPre)}>
      {words.map((w) => {
        const weight = max === min ? 1 : (w.count - min) / (max - min);
        return (
          <li key={w.word} style={{ fontSize: `${0.85 + weight * 1.15}rem`, opacity: 0.6 + weight * 0.4 }} title={String(w.count)}>
            {w.word}
          </li>
        );
      })}
    </ul>
  );
}
