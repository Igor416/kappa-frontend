import { Outlet } from 'react-router-dom';
import { Menu, Footer } from "./components";
import { Stack } from '@mui/material';

export function App() {
  return <Stack>
    <Menu />
    <Outlet />
    <Footer />
  </Stack>
}