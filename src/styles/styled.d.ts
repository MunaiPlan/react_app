/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { Theme } from '@mui/material/styles';

import { AppDefaultTheme } from '.';

declare module '@mui/material/styles' {
    interface Theme extends AppDefaultTheme {}

    interface ThemeOptions extends AppDefaultTheme {}
}

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends Theme {}
}
