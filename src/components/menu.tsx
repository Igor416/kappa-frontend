import { Drawer, Grid2, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useRoutes, useWindow } from "../hooks";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Image } from "./image";
import { Close, MenuOutlined } from "@mui/icons-material";
import { useCallback, useState } from "react";

export function Menu() {
  const isMobile = useWindow()
  const { routes } = useRoutes()
  const { i18n } = useTranslation()
  const [opened, open] = useState(false)

  const onClose = useCallback(() => {
    open(false)
  }, [])

  return <Stack direction='row' sx={{
      zIndex: 1500,
      py: 2,
      width: '100%',
      position: isMobile ? 'relative' : 'fixed',
      top: 0,
      bgcolor: 'primary.contrastText',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
    <Link to='/'>
      <Stack sx={{justifyContent: 'center', height: '100%', width: 32 * 8, px: 4}}>
        <Image srcList='/static/assets/logo.png' alt='Kappa Spirits Logo' style={{width: '100%', aspectRatio: 2.1}}/>
      </Stack>
    </Link>
    {isMobile ? <MenuOutlined onClick={() => open(true)} sx={{mr: 4, fontSize: 40}} /> : <Stack direction='row' sx={{flex: 1, alignItems: 'center'}}>
      <Stack direction='row' sx={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
        {routes.filter(r => r.href != '/').map((r, i) => <Link to={r.href} key={i}>
          <Stack sx={{justifyContent: 'center', height: '100%'}}>
            <Image srcList={`/static/assets/logos${r.href}-black.png`} alt={`${r.href} brand`} style={{width: 'calc(60vw / 7)', height: 'auto'}} />
          </Stack>
        </Link>)}
      </Stack>
      <ToggleButtonGroup
        sx={{width: 24 * 8, px: 4}}
        value={i18n.language}
        exclusive
        onChange={(_, val) => i18n.changeLanguage(val)}
      >
        {['en', 'ro'].map((l, i) => <ToggleButton key={i} value={l} sx={{
          '&.Mui-selected, &.Mui-selected:hover': {
            bgcolor: i18n.language === l ? 'primary.main' : 'default'
          },
          borderColor: 'primary.main',
          transition: '0.5s'
        }}>
          <Typography
            key={i}
            variant='h6'
            sx={{color: i18n.language === l ? 'primary.contrastText' : 'secondary.contrastText', transition: '0.5s'}}
            onClick={() => i18n.changeLanguage(l)}
          >{l}</Typography>
        </ToggleButton>)}
      </ToggleButtonGroup>
    </Stack>}
    <Drawer sx={{zIndex: 1600}} anchor='right' open={opened} onClose={onClose} closeAfterTransition={true}>
      <Stack gap={4} sx={{p: 2, width: '100vw'}}>
        <Stack onClick={onClose} gap={4} direction='row' sx={{justifyContent: 'space-between', alignItems: 'center'}}>
          <Link to='/'>
            <Stack sx={{justifyContent: 'center', height: '100%', width: 32 * 4}}>
              <Image srcList='/static/assets/logo.png' alt='Kappa Spirits Logo' style={{width: '100%', aspectRatio: 2.1}}/>
            </Stack>
          </Link>
          <Close onClick={onClose} sx={{fontSize: 40}}/>
        </Stack>
        <Grid2 container columns={2} rowSpacing={4}>
          {routes.filter(r => r.href != '/').map((r, i) => <Grid2  onClick={onClose} key={i} size={i === routes.length - 2 ? 2 :  1}>
            <Link to={r.href} key={i}>
              <Stack sx={{justifyContent: 'center', alignItems: 'center'}}>
                <Image srcList={`/static/assets/logos${r.href}-black.png`} alt={`${r.href} brand`} sx={{width: i === routes.length - 2 ?'50%' : '100%'}} />
              </Stack>
            </Link>
          </Grid2>)}
        </Grid2>
      </Stack>
    </Drawer>
  </Stack>
}