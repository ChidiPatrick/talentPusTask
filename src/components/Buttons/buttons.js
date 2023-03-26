import React from 'react'
import styles from './buttons.module.scss'
export const ButtonFull = ({ children }) => {
  return (
    <button className={[styles.btnTransparent, styles.btn].join(' ')}>
      {children}
    </button>
  )
}
export const ButtonTransparent = ({ children }) => {
  return (
    <button className={[styles.btnFull, styles.btn].join(' ')}>
      {children}
    </button>
  )
}
