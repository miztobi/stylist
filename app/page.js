import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}> {/* mainタグを追加 */}
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Stylist!</a> (App Router)
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>app/page.js</code>
        </p>

        {/* サインアップボタンを追加 */}
        <div className={styles.ctaButtonContainer}>
          <Link href="/signup" legacyBehavior>
            <a className={styles.ctaButton}>サインアップして始める</a>
          </Link>
        </div>
      </main> {/* mainタグを閉じる */}
    </div>
  );
}
