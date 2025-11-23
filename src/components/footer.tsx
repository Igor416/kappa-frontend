import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useWindow } from "../hooks";

export function Footer() {
  const { t } = useTranslation('footer')
  const isMobile = useWindow()

  return <Stack gap={4} direction={isMobile ? 'column' : 'row'} sx={{
    px: isMobile ? 2 : 32,
    py: isMobile ? 2 : 4,
    mt: 8,
    bgcolor: 'primary.main',
    color: 'primary.contrastText'
  }}>
    <Stack sx={{flex: 1}}>
      <Typography variant='h6'>{t('phones')}: (+373) 69 200 463</Typography>
      <Typography variant='h6'>
        {t('emails') + ': '}
        <Link to='mailto:sales@kappaspirits.com' color='primary.contrastText'>sales@kappaspirits.com</Link>
        {' / '}
        <Link to='mailto:office@apriori.wine' color='primary.contrastText'>office@apriori.wine</Link>
      </Typography>
    </Stack>
    <Stack sx={{flex: 1, justifyContent: 'flex-end', textWrap: 'wrap'}}>
      <Typography>© S.R.L. “KAPPA COMPANY” Republic of Moldova, Chișinău. All rights reserved</Typography>
    </Stack>
  </Stack>
}