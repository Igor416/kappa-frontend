import { Stack } from '@mui/material';
import { motion, Variants } from 'motion/react'
import { Image } from '../components';
import { useWindow } from '../hooks';

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

export function Banner() {
  const isMobile = useWindow()
  
  return <Stack sx={{
    height: isMobile ? 'auto' : '100vh', 
    minHeight: isMobile ? 'auto' : '100vh',
    width: '100%', 
    bgcolor: 'primary.main', 
    alignItems: 'center', 
    justifyContent: 'center',
    py: isMobile ? 4 : 32,
    px: isMobile ? 2 : 4
  }}>
    <motion.div
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      style={{
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: isMobile ? 12 : 16,
        width: '100%',
        maxWidth: isMobile ? '100%' : '800px'
      }}
    >
      <motion.div variants={item}>
        <Image
          srcList={'/static/assets/banner/logo.jpg'}
          alt='Kappa Spirits Logo'
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: isMobile ? '280px' : '400px'
          }}
        />
      </motion.div>

      <motion.div variants={item}>
        <Image
          srcList={'/static/assets/banner/text1.jpg'}
          alt='Kappa Spirits Text 1'
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: isMobile ? '320px' : '500px'
          }}
        />
      </motion.div>

      <motion.div variants={item}>
        <Image
          srcList={'/static/assets/banner/text2.jpg'}
          alt='Kappa Spirits Text 2'
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: isMobile ? '320px' : '500px'
          }}
        />
      </motion.div>
    </motion.div>
  </Stack>
}