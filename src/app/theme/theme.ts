import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  styles: {
    global: () => ({
      body: {
        bg: 'rgb(243 246 247)',
      },
    }),
  },
});
