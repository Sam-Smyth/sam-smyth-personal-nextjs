'use client'
import { useLayoutEffect, useRef } from 'react';
import styles from './skills_bars.module.scss'
import { gsap } from 'gsap'

const skills = [
  { label: 'Project Management', proficiency: 95 },
  { label: 'Marketing Strategy', proficiency: 90 },
  { label: 'Web Design', proficiency: 95 },
  { label: 'Copywriting', proficiency: 85 }
]

export default function SkillsBars() {
  const skillBarRefs = skills.map(() => useRef(null));

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(skillBarRefs.map(ref => ref.current), {
        x: '0%',
        stagger: 0.2,
        duration: 1,
        ease: "power4.inOut"
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id='skills' className="space_between width_content">
      <div className={`${styles.skills_bars} width_half_narrow`}>
        {skills.map(({ label, proficiency }, index) => (
          <div key={label}>
            <h3 className={styles.bar_heading}>{label}</h3>
            <div className={styles.bar_container}>
              <span ref={skillBarRefs[index]} className={styles.bar_fill} style={{ width: `${proficiency}%` }}></span>
            </div>
          </div>
        ))}
      </div>

      <div className={`${styles.text} width_half`}>
        <h2>Skills and interests</h2>
        <p>{'I love making things work better and I love asking questions. "Why are we doing this?" "Who are we speaking to?" "Are we reaching our goals?" "How can we do this faster and more effectively?" Optimizing processes while creating some killer content is what drives my interest.'}</p>
      </div>
    </section>
  )
}
