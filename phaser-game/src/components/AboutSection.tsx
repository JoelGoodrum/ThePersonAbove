import React, { useEffect, useState } from '../react'

const API_BASE = 'https://api-the-person-above.game-stats.workers.dev'

type Stats = {
  websiteVisits: string
  totalCompletions: string
  averageCompletionTime: string
}

export const AboutSection = () => {
  const [stats, setStats] = useState<Stats>({
    websiteVisits: '0',
    totalCompletions: '0',
    averageCompletionTime: '0 minutes',
  })

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await fetch(`${API_BASE}/stats`)
        const data = await res.json()

        const avgSeconds = data.average_completion_seconds ?? 0
        const avgMinutes = Math.round(avgSeconds / 60)

        setStats({
          websiteVisits: String(data.total_visits ?? 0),
          totalCompletions: String(data.total_beats ?? 0),
          averageCompletionTime: `${avgMinutes} minutes`,
        })
      } catch (err) {
        console.error('Failed to load stats', err)
      }
    }

    loadStats()
  }, [])

  return (
    <section aria-label="About section" className="about-section">
      <p>
        The Person Above is a top down 2d story driven indie game developed by Joel Goodrum. I have
        developed many game prototypes before but this is my first completed project from start to
        finish.
      </p>

      <ul>
        <li>Website visits: {stats.websiteVisits}</li>
        <li>Total times game has been completed: {stats.totalCompletions}</li>
        <li>Average time to completion: {stats.averageCompletionTime}</li>
      </ul>
    </section>
  )
}