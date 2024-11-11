'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Component() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev < 5 ? prev + 1 : prev))
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isInView])

  const steps = [
    {
      title: "Software Kick-off",
      description: "Dive into bi-weekly sprints and rollouts aligned with project timelines.",
    },
    {
      title: "Task Execution & Development",
      description: "Combined team tackles tasks, fulfilling user stories and sprint goals.",
    },
    {
      title: "Daily Stand-ups",
      description: "Daily check-ins led by the Scrum Master to discuss progress and tackle challenges.",
    },
    {
      title: "Feature Quality Check",
      description: "Quality Engineers rigorously test new features, ensuring seamless integration.",
    },
    {
      title: "Backlog Updates",
      description: "Our team keeps the sprint backlog updated, staying on track to meet objectives.",
    },
    {
      title: "Sprint Reflections",
      description: "Post-sprint reflections to refine strategies and enhance future sprints.",
    },
  ]

  return (
    <div className="w-full px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary md:text-4xl">Our Process</h2>
        <p className="mb-12 text-muted-foreground">
          We specialize in engineering custom software that&apos;s both stable and secure, using a variety of tech tools.
        </p>
        
        <div ref={containerRef} className="relative">
          <div className="absolute left-0 right-0 top-8 hidden md:block">
            <motion.div
              className="h-0.5 bg-amber-500"
              initial={{ width: "0%" }}
              animate={{ width: isInView ? "100%" : "0%" }}
              transition={{ duration: 5, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-2 -top-1.5 text-amber-500"
              initial={{ x: "-100vw" }}
              animate={{ x: isInView ? 0 : "-100vw" }}
              transition={{ duration: 5, ease: "easeInOut" }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 20,
                }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  className={`relative rounded-lg p-6 shadow-lg transition-colors ${
                    index <= activeIndex ? 'bg-amber-50' : 'bg-background'
                  }`}
                  animate={{
                    backgroundColor: index <= activeIndex ? 'rgb(255 251 235)' : 'rgb(255 255 255)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 transform"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: index <= activeIndex ? 1 : 0,
                      scale: index <= activeIndex ? 1 : 0,
                    }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-amber-500" />
                  </motion.div>
                  <h3 className="mb-3 text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}