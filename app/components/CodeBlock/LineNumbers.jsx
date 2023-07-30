import styles from './LineNumbers.module.scss';

export default function LineNumbers({ code }) {
    const lineCount = code.match(/\r?\n/g)?.length;
    const lines = typeof lineCount === 'number' ? lineCount + 1 : 1;

    return (
        <span className={styles.container}>
      {Array.from({ length: lines }).map((_, i) => (
          <span key={i} className={styles.counter} />
      ))}
    </span>
    );
}