import { Divider, Stack, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { BackgroundImage, Container } from '../components';
import { useWindow } from "../hooks";

export function Texts() {
  const { t } = useTranslation('home')
  const isMobile = useWindow()

  return <Stack gap={4}>
    {[1, 2, 3].map(i => <BackgroundImage key={i} srcList={`/static/assets/photos/${i}.jpg`} brightness={isMobile ? 40 : 20} sx={{ backgroundSize: 'cover' }}>
      <Container>
        <Stack sx={{alignItems: 'center', justifyContent: 'center'}}>
          <Stack gap={2} sx={{p: 2, color: '#fff'}}>
            <Typography variant='h4' textAlign='center'>{t(`${i}_label`)}</Typography>
            <Divider color="#fff" />
            <Typography variant={isMobile ? 'body1' : 'h6'} textAlign='center'>{t(`${i}`)}</Typography>
          </Stack>
        </Stack>
      </Container>
    </BackgroundImage>)}
  </Stack>
}