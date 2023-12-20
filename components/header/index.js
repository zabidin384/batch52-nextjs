import Link from 'next/link'
import styles from './styles.module.css'

export default function Header() {
  return <div className={styles.header}>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/profile">Profile</Link></li>
      <li><Link href="/users">Users</Link></li>
    </ul>
  </div>
}