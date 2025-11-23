import { Stack } from "@mui/material";
import { useWindow } from "../hooks";

export function Container({ children }: { children: React.ReactNode }) {
  const isMobile = useWindow()

  return <Stack sx={{px: isMobile ? 2 : 32, py: isMobile ? 2 : 8, transition: '1s'}}>
    {children}
  </Stack>
}