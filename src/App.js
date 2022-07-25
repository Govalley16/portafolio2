import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import { primaryColorPalette, secondaryColorPalette } from './color-palette';
//import MenuIcon from '@mui/icons-material/Menu';
import {Navbar, CenteredText, TextWithImage}  from './components';

const myContent = [{
  title: 'PERSONAL SHOPPER',
  subTitle:'Nunc auctor nulla id commodo porttitor. Aenean et orci vel nibh rhoncus',
  descriptions:['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies vehicula ultricies. Ut a justo mollis, tempus massa in, maximus erat. Donec tincidunt lobortis purus, sed tincidunt nibh fermentum non.',
  'Sed pharetra, leo nec mollis iaculis, libero ex congue ex, eget sagittis mi tortor ac dolor. Donec ut augue vel dolor dapibus viverra a sit amet elit.'],
  finishigText: 'Sed in fringilla justo. Donec vestibulum ante a neque ultricies, ut cursus justo pretium.',
  img: 'https://i.blogs.es/6ce95c/shrek/840_560.jpg'
  },
  {
    title: 'PERSONAL SHOPPER MEN',
    subTitle:'Fusce non commodo mi. Suspendisse odio diam, aliquam eget lorem sed, cursus consectetur leo.',
    descriptions:['Cras elementum placerat arcu id finibus. Sed mollis, mauris mollis finibus venenatis, elit tortor consequat eros, non ultrices risus ipsum sed arcu.',
    'Duis ac magna lobortis nibh dignissim ullamcorper mollis in elit. ',
    'Nunc faucibus ligula nunc, nec dignissim lectus sodales at. Maecenas sagittis risus vel fermentum commodo.'],
    finishigText: 'Curabitur urna ligula, aliquam id purus ac, dignissim vehicula odio.',
    img: 'https://d9zuehkdkxba0.cloudfront.net/wp-content/uploads/2020/04/ETmebq2XkAEXAoB-990x743.jpg'
    }
];

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColorPalette[500],
      ligth: primaryColorPalette[300]
    },
    secondary: {
      main: secondaryColorPalette[500],
      light:secondaryColorPalette[200],
        // dark: secondaryColorPalette[700]
    }   
  },
});

function App() {
  return (
    // <div className="App">
    <>
        <ThemeProvider theme={theme}> 
          <Navbar />
          <CenteredText />
            { 
              myContent.map((item,index) => <TextWithImage textToTheRight={index % 2 === 0} content={item}/>)
            }
        {/* </div> */}
        </ThemeProvider>
    </>
  );
}

export default App;
