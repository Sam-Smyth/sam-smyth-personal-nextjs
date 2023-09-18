'use client'
import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from './hero_banner.module.scss'
import { gsap } from 'gsap'

export default function HeroBanner() {
  const heroButton = useRef();
  const heroButtonTl = useRef();
  const heroImage = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      heroButtonTl.current = gsap.timeline()
        .to(heroButton.current, {
          "--home-button-translate": "120%",
          delay: 1
        })
        .set(heroButton.current, {
          color: "rgb(255, 255, 255)"
        }, "<")
        .set(heroButton.current, {
          color: "rgb(32, 191, 85)"
        }, "<.2");

      gsap.from(heroImage.current, {
        y: -50,
        x: 100,
        autoAlpha: 0
      })
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className={`${styles.hero_wrap} width_content space_between`}>
      <div className={styles.triangle}></div>
      <div className={`${styles.text_wrap} width_half`}>
        <h2>Marketer, Web Designer and Project Manager</h2>

        <p>I specialize in creating, facilitating and optimizing marketing solutions. Marketing strategy, project management, copywriting, web design and digital marketing are what I do best.</p>

        <Link href="#" ref={heroButton} className={`${styles.hero_button} button`}>Find out more</Link>
      </div>

      <div>
        <Image
          src="/sam-smyth-portrait.jpg"
          className={styles.image}
          ref={heroImage}
          priority={true}
          width={400}
          height={565}
          alt='Picture of Sam Smyth next to the ocean in Victoria, BC Canada'
        />
      </div>
    </section>
  )
}