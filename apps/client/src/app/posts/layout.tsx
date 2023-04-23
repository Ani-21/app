import styles from './styles.module.css'

const PostsLayout = ({ children }: { children: React.ReactNode }) => (
  <main className={styles.main}>{children}</main>
)

export default PostsLayout
