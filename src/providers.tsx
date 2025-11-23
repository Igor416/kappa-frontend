import { ReactNode } from "react"
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { TranslationProvider } from "./i18n/translation";
import { CssBaseline } from "@mui/material";

export function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <TranslationProvider>
      {children}
    </TranslationProvider>
  </ThemeProvider>
}