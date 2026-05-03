import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-[#0B3C6D] hover:bg-[#082d52] text-white',
  secondary: 'bg-[#F97316] hover:bg-[#ea6c0a] text-white',
  outline: 'border-2 border-[#0B3C6D] text-[#0B3C6D] hover:bg-[#0B3C6D] hover:text-white',
  outlineWhite: 'border-2 border-white text-white hover:bg-white hover:text-[#0B3C6D]',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({ children, variant = 'primary', size = 'md', className = '', onClick, type = 'button', href }) {
  const base = `inline-flex items-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={base}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={base}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  )
}
