import { Page1 } from './src/screens/Page1';
import { Page2 } from './src/screens/Page2';
import { Page3 } from './src/screens/Page3';
import { Page4 } from './src/screens/Page4';
import { Page5 } from './src/screens/Page5';
import { Page6 } from './src/screens/Page6';
import { Dispatch, SetStateAction, useState } from 'react'
import { useFonts, Slackey_400Regular } from '@expo-google-fonts/slackey';

export interface IPagina {
  setPageI: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [page, setPage] = useState(1)
  const [fontsLoaded] = useFonts({
    Slackey_400Regular
  });
  if (!fontsLoaded) {
    return null;
  }
  
  if (page == 1) {
    return <Page1 setPageI={setPage} />
  } else if (page == 2) {
    return <Page2 setPageI={setPage} />
  } else if (page == 3) {
    return <Page3 setPageI={setPage} />
  } else if (page == 4) {
    return <Page4 setPageI={setPage} />
  } else if (page == 5) {
    return <Page5 setPageI={setPage} />
  } else {
    return <Page6 setPageI={setPage} />
  }
};