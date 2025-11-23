import { Stack, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { motion, Variants } from 'motion/react'

const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

export function About() {
  const { t } = useTranslation('home')
  
  return <Stack gap={2}>
    <motion.div
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      style={{display: 'flex', flexDirection: 'column', gap: 16}}
    >
      <motion.div variants={item}>
        <Typography variant='h3' color='primary' sx={{textAlign: 'center'}}>{t('about_label')}</Typography>
      </motion.div>
      <motion.div variants={item}>
        <Typography variant='h6' sx={{textAlign: 'center'}}>{t('about')}</Typography>
      </motion.div>
    </motion.div>
  </Stack>
}