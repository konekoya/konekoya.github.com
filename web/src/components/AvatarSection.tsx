import { useEffect, useMemo, useState } from 'react'
import styles from './AvatarSection.module.css'
import reactLogo from '../assets/react.svg'

const GITHUB_API_URL = 'https://api.github.com/users/konekoya'

export function AvatarSection() {
  const [avatarUrl, setAvatarUrl] = useState<string>('')
  const [loaded, setLoaded] = useState(false)

  const fallback = useMemo(() => reactLogo, [])

  useEffect(() => {
    let canceled = false

    async function run() {
      try {
        const res = await fetch(GITHUB_API_URL)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        if (!canceled) {
          setAvatarUrl(data?.avatar_url || fallback)
        }
      } catch (e) {
        if (!canceled) setAvatarUrl(fallback)
      } finally {
        // add a tiny delay to let CSS transitions feel intentional
        setTimeout(() => {
          if (!canceled) setLoaded(true)
        }, 300)
      }
    }

    run()
    return () => {
      canceled = true
    }
  }, [fallback])

  return (
    <section className={`${styles.avatar} ${loaded ? styles.isLoaded : ''}`}>
      <div className={styles.profileWrap}>
        <h1 className={styles.title}>Joshua</h1>
        <img className={styles.img} src={avatarUrl} alt="Joshua's Picture" />
        <span className={styles.text}>Profile</span>
      </div>
      <div className={styles.hintWrap}>
        <div className={styles.mouse} aria-hidden />
        <span className={styles.scrollText}>Scroll down</span>
      </div>
    </section>
  )
}

