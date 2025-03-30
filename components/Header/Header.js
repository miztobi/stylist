import styles from './Header.module.scss';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Stylist
        </Link>
        <nav className={styles.nav}>
          {/* ナビゲーションリンク */}
          <Link href="/">Home</Link>
          <Link href="/about">About</Link> {/* 例：リンク */}
          <Link href="/contact">Contact</Link> {/* 例：リンク */}
          {/* サインインボタンを追加 */}
          <Link href="/signin" className={styles.signInButton}>
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
}
