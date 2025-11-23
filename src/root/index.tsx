import { Stack } from '@mui/material';
import { About } from './about';
import { Brands } from './brands';
import { Texts } from './texts';
import { Container } from '../components';
import { Catalog } from './catalog';
import { Banner } from './banner';

export function Root() {
  return <Stack gap={8}>
    <Banner />
    <Container>
      <Stack gap={4}>
        <About />
        <Brands />
      </Stack>
    </Container>
    <Texts />
    <Catalog />
  </Stack>
}
