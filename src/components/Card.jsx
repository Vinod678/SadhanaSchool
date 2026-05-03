import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true }) {
  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-md ${hover ? 'hover:shadow-xl' : ''} transition-shadow duration-300 ${className}`}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
