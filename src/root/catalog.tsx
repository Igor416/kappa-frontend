import { Button, Dialog, DialogActions, DialogContent, Fab, Stack, Typography, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { Image } from '../components';
import { useUrlRoot, useWindow } from '../hooks';
import { Description, Download, GetApp } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { motion } from 'motion/react';

export function Catalog() {
  const { t } = useTranslation('catalog')
  const root = useUrlRoot()
  const isMobile = useWindow()
  const [opened, open] = useState(false)
  
  const handleOpen = () => {
    open(true)
    // Remove focus from the FAB to prevent accessibility issues
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }
  
  const handleClose = () => {
    open(false)
  }

  return <Stack>
    <Dialog
      open={opened}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      maxWidth='md'
      fullWidth
      hideBackdrop
      sx={{
        zIndex: 9999,
        '& .MuiDialog-paper': {
          margin: isMobile ? 1 : 3,
          width: isMobile ? 'calc(100% - 16px)' : 'auto',
          maxHeight: isMobile ? 'calc(100% - 32px)' : 'auto',
          borderRadius: 3,
          bgcolor: 'background.paper',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      }}
    >
      <Box sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        p: 3,
        textAlign: 'center'
      }}>
        <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', mb: 1 }}>
          📋 Catalog Kappa Spirits
        </Typography>
      </Box>

      <DialogContent sx={{
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        gap: 3, 
        alignItems: 'center',
        p: 4,
        bgcolor: 'background.default'
      }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ position: 'relative' }}
        >
          <Link to={`${root}/media/catalogs/Catalog%20Kappa%20WEB.pdf`} target='_blank'>
            <Paper elevation={8} sx={{ 
              borderRadius: 2,
              overflow: 'hidden',
              position: 'relative',
              background: 'linear-gradient(145deg, #ffffff, #f0f0f0)'
            }}>
              <Image 
                srcList='/static/assets/logo-small.png' 
                alt='small logo' 
                sx={{
                  width: isMobile ? '220px' : '180px',
                  height: 'auto',
                  display: 'block'
                }} 
              />
              <Box sx={{
                position: 'absolute',
                top: 0,
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'primary.main',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                '&:hover': {
                  opacity: 0.9
                }
              }}>
                <Stack alignItems="center" spacing={1}>
                  <GetApp sx={{ fontSize: '48px', color: 'primary.contrastText' }} />
                  <Typography variant='h6' color='primary.contrastText' sx={{textAlign: 'center'}}>
                    {t('download')}
                  </Typography>
                </Stack>
              </Box>
            </Paper>
          </Link>
        </motion.div>

        <Box sx={{ 
          flex: 1, 
          textAlign: isMobile ? 'center' : 'left',
          p: 2
        }}>
          <Typography variant={isMobile ? 'h5' : 'h4'} sx={{ 
            fontWeight: 'bold', 
            mb: 2,
            color: 'primary.main'
          }}>
            {t('title')}
          </Typography>
          <Typography variant='body1' sx={{ 
            color: 'text.secondary',
            lineHeight: 1.6,
            mb: 2
          }}>
            {t('desc')}
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ 
        flexDirection: isMobile ? 'column' : 'row',
        gap: 2,
        p: 3,
        bgcolor: 'background.default'
      }}>
        <Button 
          onClick={handleClose}
          fullWidth={isMobile}
          size='large'
          variant='outlined'
          sx={{ 
            minHeight: '48px',
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 'bold'
          }}
        >
          Close
        </Button>
        <Link to={`${root}/media/catalogs/Catalog%20Kappa%20WEB.pdf`} target='_blank' style={{ width: isMobile ? '100%' : 'auto' }}>
          <Button 
            onClick={handleClose} 
            autoFocus
            variant='contained'
            fullWidth={isMobile}
            size='large'
            startIcon={<Download />}
            sx={{ 
              minHeight: '48px',
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 'bold',
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              '&:hover': {
                bgcolor: 'primary.dark'
              }
            }}
          >
            Download Catalog
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
    <Fab onClick={handleOpen} color='secondary' variant='extended' size='medium' aria-label='catalog' sx={{position: 'absolute', bottom: '5vh', right: '3vw'}}>
      <Description sx={{color: 'primary.contrastText'}} />
      <Typography sx={{ml: 1, color: 'primary.contrastText'}}>{t('open')}</Typography>
    </Fab>
  </Stack>
}