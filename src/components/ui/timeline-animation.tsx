"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface TimelineContentProps {
  children: React.ReactNode
  animationNum: number
  timelineRef: React.RefObject<HTMLDivElement>
  customVariants?: any
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function TimelineContent({
  children,
  animationNum,
  timelineRef,
  customVariants,
  className,
  as: Component = "div",
  ...props
}: TimelineContentProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    root: timelineRef,
    margin: "-100px 0px -100px 0px"
  })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  const defaultVariants = {
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: animationNum * 0.1
      } 
    },
    hidden: { 
      opacity: 0, 
      y: 50 
    }
  }

  const variants = customVariants || defaultVariants

  return (
    <Component
      ref={ref}
      className={className}
      animate={controls}
      initial="hidden"
      variants={variants}
      {...props}
    >
      {children}
    </Component>
  )
}
