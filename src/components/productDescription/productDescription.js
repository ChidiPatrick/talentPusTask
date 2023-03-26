import React from 'react'
import styles from './productDescription.module.scss'
const productDescription = () => {
  return (
    <div className={styles.courseContentDescriptionWrapper}>
      <h2 className={styles.descriptionHeader}>
        High quality video, audio & live classes
      </h2>
      <p className={styles.descriptionParagraph}>
        high-definition video is video of higher resolution and quality than
        standard definition. while there's no Standard meaning for high
        definition,Generally any Standard video image
      </p>
    </div>
  )
}
export default productDescription
