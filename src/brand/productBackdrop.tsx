import { Backdrop, Stack, Typography } from '@mui/material'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Product } from '../utils/JSONTypes'
import { Image } from '../components'
import { useWindow } from '../hooks'

interface ProductBackdropProps {
  selectedProduct: Product | null
  brandLabel: string
  onClose: () => void
}

export function ProductBackdrop({ selectedProduct, brandLabel, onClose }: ProductBackdropProps) {
  const [, i18n] = useTranslation('brand')
  const isMobile = useWindow()

  return (
    <Backdrop
      sx={{ 
        color: '#fff', 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: 'rgba(0, 0, 0, 0.8)',
        p: 4
      }}
      open={selectedProduct !== null}
      onClick={onClose}
    >
      {selectedProduct && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: 16,
            maxWidth: isMobile ? '98vw' : '90vw',
            maxHeight: '98vh',
            position: 'relative'
          }}
        >
          <Image 
            srcList={selectedProduct.image} 
            alt={selectedProduct.name[i18n.language]}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: isMobile ? '85vh' : '90vh',
              objectFit: 'contain',
              borderRadius: 8
            }}
          />
          
          <Stack gap={1} alignItems="center" sx={{ textAlign: 'center' }}>
            <Typography variant='h4' color='white' fontWeight="bold">
              {selectedProduct.name[i18n.language]}
            </Typography>
            <Typography variant='h5' color='primary.main'>
              {brandLabel}
            </Typography>
            <Typography variant='h6' color='rgba(255, 255, 255, 0.8)'>
              {selectedProduct.category.name[i18n.language]}
            </Typography>
          </Stack>
        </motion.div>
      )}
    </Backdrop>
  )
}