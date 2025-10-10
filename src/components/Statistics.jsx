import { useState, useEffect, useRef } from 'react'
import '../styles/Statistics.css'

const Statistics = () => {
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    { number: 1250, label: 'Active Students' },
    { number: 27, label: 'Expert Teachers' },
    { number: 15, label: 'Support Staff' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true)
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [animated])

  const Counter = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
      if (animated) {
        let start = 0
        const increment = target / (duration / 16)
        
        const timer = setInterval(() => {
          start += increment
          if (start >= target) {
            setCount(target)
            clearInterval(timer)
          } else {
            setCount(Math.floor(start))
          }
        }, 16)

        return () => clearInterval(timer)
      }
    }, [animated, target, duration])

    return <span className="stat-number">{count}</span>
  }

  return (
    <section id="statistics" className="statistics-section section" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              {animated ? (
                <Counter target={stat.number} />
              ) : (
                <span className="stat-number">0</span>
              )}
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics