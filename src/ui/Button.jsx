import React from "react"
import { Link } from "react-router-dom"

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block rounded-full font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed"

  const styles = {
    primary:
      base +
      " bg-yellow-400 px-4 py-3 sm:px-6 sm:py-4 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300",
    secondary: `${base} bg-transparent border-2 border-stone-300 px-4 py-2.5 sm:px-6 sm:py-3.5 text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:ring-stone-200 focus:bg-stone-300 focus:text-stone-800`,
    small:
      base +
      " bg-yellow-400 px-4 py-2 md:px-5 md:py-2.5 text-xs hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300",
  }

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    )
  }

  if (onClick) {
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    )
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  )
}
