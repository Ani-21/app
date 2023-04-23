import styles from './styles.module.css'

const UsersLayout = ({ children }: { children: React.ReactNode }) => (
  <main className={styles.main}>{children}</main>
)

export default UsersLayout
