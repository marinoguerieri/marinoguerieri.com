import React, { Component } from 'react';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import logo from '../img/mg-logo.svg';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { ThemeProvider } from '@material-ui/styles';
import grey from '@material-ui/core/colors/grey';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Paper from '@material-ui/core/Paper';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: '#ff6d00',
    },
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const IndexPageTemplate = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    /* Box should fill the whole window, thus height=100vh */
    <ThemeProvider theme={theme}>
      <Box bgcolor='primary.light' height='100vh'>
        <AppBar position='static'>
          <Toolbar>
            {/* <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='Menu'
          >
            <MenuIcon />
          </IconButton> */}
            <Box mr={1}>
              <Avatar alt='Marino Guereri' src={logo} m={5} />
            </Box>
            <Typography variant='h6' className={classes.title}>
              Marino Guerieri
            </Typography>
            <Button variant='contained' color='secondary'>
              CONTACT ME
            </Button>
          </Toolbar>
        </AppBar>

        <Paper>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis,
          quas aperiam quam culpa nesciunt vitae tenetur pariatur delectus,
          deserunt aliquam libero distinctio incidunt voluptates ut? Alias
          distinctio pariatur delectus, ut placeat maiores nihil earum
          asperiores officia impedit inventore veniam voluptatum deleniti amet
          enim et repudiandae in. Labore quo ut laudantium neque. Dolorem
          veritatis esse corporis ipsa. Exercitationem nihil nisi sapiente optio
          nobis suscipit quod tempora, dolor, beatae sunt eligendi, impedit
          cupiditate laboriosam hic nostrum aut inventore. Delectus, soluta.
          Minima error, quaerat architecto quis id enim ducimus corrupti qui
          impedit, pariatur quae iure? Impedit, dolor officiis numquam ad
          perferendis porro delectus corporis? Expedita, quia quo suscipit
          magnam aperiam voluptas aspernatur optio consectetur et obcaecati
          ducimus exercitationem! Cupiditate blanditiis dolorem voluptatem porro
          molestiae repellendus pariatur a magnam nulla nemo impedit enim animi,
          recusandae aspernatur fugit quos vitae aperiam hic numquam aliquid
          neque ex. Enim natus quibusdam accusamus. Illo quae quam culpa
          excepturi necessitatibus aliquid architecto. Dicta inventore atque,
          molestiae, quidem illo odit in, eveniet saepe adipisci aperiam quis
          excepturi fuga? Corrupti a provident reiciendis. Quaerat fugiat nulla
          rem pariatur quas sit atque. Nam soluta a sequi beatae molestias vitae
          facere quos laborum vero ut dolores ipsam ratione ex aspernatur
          delectus, deserunt odit! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cumque, modi quae odio debitis sit dolore provident
          dolor pariatur repellat illo assumenda ab nostrum qui placeat
          similique repellendus facere! Repellendus molestiae, autem vitae
          assumenda ex alias nesciunt libero doloremque magni magnam fuga, vero
          facere ab veniam, animi aspernatur temporibus explicabo. Quo at
          facilis incidunt dicta ea eligendi, recusandae tempore, corrupti, odio
          quam dignissimos. Ducimus quia adipisci incidunt voluptates voluptate
          pariatur, explicabo non! Saepe, totam! Numquam, itaque nemo
          repellendus, ipsa ducimus deserunt libero eveniet animi unde eius
          reiciendis exercitationem eaque. Nemo, inventore quam? Quisquam
          suscipit deserunt expedita recusandae neque, eveniet consequatur illo
          mollitia eligendi quaerat reprehenderit quis ratione sequi incidunt
          aut ut perspiciatis nostrum aperiam enim corrupti. Minus iste laborum
          dolore, ducimus, pariatur doloremque non magni officia eveniet
          perferendis rem. Animi vel molestias modi, soluta quo fuga iusto enim
          fugiat inventore adipisci laudantium qui vero beatae esse tenetur.
          Praesentium modi officiis a reprehenderit odio molestiae deserunt
          corrupti inventore nulla maiores. Harum voluptatum laborum eos
          repellat distinctio ullam ducimus officiis eum totam odio minus,
          molestiae aliquam ipsam velit? Sequi quisquam obcaecati est. Soluta
          atque nam maiores dignissimos ducimus placeat possimus dolorum autem,
          laborum animi quaerat ad facilis quasi maxime velit expedita alias
          nobis eius veniam eaque rerum porro nihil sunt? Asperiores, saepe fuga
          a non repellendus quo minima quaerat aperiam dolorem voluptatem beatae
          adipisci ab magni eaque praesentium deleniti atque. Amet error ipsum
          animi sed fugiat doloremque inventore corrupti tenetur exercitationem
          odit sint, aliquam porro excepturi illo, illum necessitatibus est
          incidunt quis voluptatum minima. Et, magnam aperiam quis tempora
          consectetur consequatur. Quidem qui similique iste, ipsam cumque quos
          eveniet ullam suscipit autem, cupiditate, aliquid dolore natus omnis
          dolores laudantium illum dolorem. Ut, doloribus architecto voluptatem
          alias ipsum sit animi perspiciatis quam aliquam temporibus fugiat
          earum accusantium fuga omnis magni! Tenetur illo ipsa corporis harum
          exercitationem deleniti, accusantium fugit! Atque at suscipit
          dignissimos cumque vel mollitia aperiam rerum ad illo eos voluptas ea
          autem, debitis delectus ipsum illum consequatur soluta sapiente nihil
          modi voluptatem voluptates incidunt. Fugit aliquid voluptas totam
          officia veniam omnis corrupti fuga enim porro molestiae praesentium
          accusantium blanditiis doloremque quidem recusandae soluta, dolorum,
          aliquam quam vitae odio aspernatur. Quisquam quidem ipsam quo corporis
          reprehenderit, neque provident aperiam? Tempore perspiciatis voluptate
          aperiam debitis perferendis ad nihil neque aliquam nobis delectus ipsa
          qui vitae dolorum suscipit voluptatem dolores ut saepe optio alias
          totam, esse dignissimos enim tempora. Culpa omnis expedita incidunt!
          Ducimus dolorum, assumenda earum obcaecati necessitatibus ea! In
          voluptates facere, ab doloribus rerum, accusamus blanditiis
          repellendus culpa voluptatum odio libero dolore autem porro? Nulla
          doloribus sint pariatur voluptatibus commodi dolorem perferendis
          doloremque nisi, fuga similique, eos, at praesentium ratione
          reiciendis fugit modi numquam sit non accusamus? Molestias tempora
          amet reiciendis quo maxime nesciunt deserunt autem incidunt tempore
          enim minima, assumenda in fuga ab odit? Blanditiis quas impedit
          corporis dolores dolor eaque facere, adipisci molestias ratione harum,
          earum illo cum laborum vitae! Provident perferendis tenetur beatae
          distinctio tempore consequuntur magnam vel eius modi, suscipit,
          blanditiis natus, pariatur nisi adipisci nulla id nobis rerum
          excepturi veniam minima optio! Voluptas ducimus soluta provident
          reiciendis nesciunt deleniti nemo sequi. Exercitationem debitis
          inventore recusandae? Veniam, animi aliquam. Iste quaerat unde maiores
          illo reprehenderit id veritatis natus cupiditate? Enim exercitationem
          expedita aliquam deleniti omnis consequuntur quia iusto deserunt ab
          rem iste aut tenetur illum dolore minima cumque accusamus sit
          perferendis nostrum facere, provident ad quidem placeat porro.
          Distinctio magnam aut perferendis fuga harum exercitationem deserunt
          pariatur, in nemo ex beatae vitae omnis culpa minima magni dolor
          maxime laborum nostrum ab architecto sequi! Accusamus velit aut natus
          cupiditate, fugit dignissimos est laborum totam voluptas sit
          aspernatur eos quam atque, voluptatem eius ipsa commodi molestias
          debitis alias, quis cum quia magnam sed eum! Quidem sed culpa vitae
          debitis, nihil fugit dolor quod id ea quibusdam eius nostrum facilis
          odio dignissimos, ut voluptatibus. Sit odio neque, inventore quas est
          numquam mollitia officiis voluptate sapiente quia totam ab. Odio,
          delectus aspernatur porro harum, rem in ducimus rerum quas
          necessitatibus magni illo nulla minus! Aspernatur alias laudantium
          aliquam mollitia eligendi dignissimos vel eum, reprehenderit dicta
          maxime nobis, ipsum sapiente amet autem molestias repudiandae error.
          Maiores numquam quo natus doloribus consectetur quos vero dicta
          architecto culpa delectus quasi eaque hic officia incidunt quae
          necessitatibus eveniet expedita corrupti repudiandae voluptate
          consequuntur, rem molestias? Perspiciatis officia repudiandae in amet
          id, eligendi maxime ea velit cum assumenda unde fugit a labore nihil
          eos quasi optio laudantium esse soluta ipsa vero! Pariatur nostrum ea
          nobis qui, consectetur at voluptatem cumque tempora illo obcaecati
          facere. Illo porro reiciendis officiis recusandae, deleniti nemo
          officia architecto a. Veniam error cupiditate quasi in commodi sunt
          earum quaerat iste magni fugiat aut maiores tempora omnis, rem quae
          dolore eaque facilis autem hic? Eveniet nam commodi veniam incidunt
          numquam, ad vero? Ducimus, inventore veritatis, ipsum quod non
          necessitatibus totam aliquam harum saepe cumque, rem minima natus ut
          illum. Asperiores suscipit inventore reiciendis autem corporis culpa
          error hic facere maiores, excepturi eaque fuga laborum harum nulla
          dolorem iusto aperiam assumenda quisquam, provident fugit tenetur
          nihil necessitatibus ducimus? In perspiciatis ipsum autem dignissimos
          placeat laborum temporibus nostrum accusantium aliquid vero deleniti
          voluptas minus reiciendis doloribus eveniet quis sapiente,
          exercitationem et quos nulla. Unde excepturi alias quaerat, provident
          beatae officiis placeat dolores iure repudiandae adipisci. Deserunt
          unde culpa soluta repudiandae reprehenderit delectus temporibus
          eligendi aspernatur illum ullam exercitationem, numquam harum
          accusamus vel dolorum veritatis! Qui possimus molestiae labore quidem.
          Culpa iure quasi sunt maxime aspernatur quos eum eveniet cum porro
          nobis. Autem id veniam quis odio, atque nulla magnam ducimus vel ab
          perferendis beatae mollitia ipsum commodi reprehenderit deserunt
          repellat sapiente maiores aut. Incidunt, quidem reiciendis excepturi
          doloribus corporis dolore iure ab perferendis impedit perspiciatis
          enim vel fugiat rerum in nulla molestias nihil tempore nemo fuga animi
          voluptates illum. Odit atque rerum non nulla earum veritatis assumenda
          voluptate repellat? Debitis earum voluptatum perferendis odio tenetur,
          qui dignissimos excepturi sint sequi non labore esse mollitia commodi
          ratione, quis fugit aliquam quos rerum blanditiis inventore.
          Asperiores repudiandae molestiae ducimus quis, sit reprehenderit
          neque. Atque asperiores sint deleniti culpa.
        </Paper>

        <Box
          style={{
            position: 'absolute',
            bottom: 0,
          }}
        >
          <BottomNavigation
            style={{
              width: '100vw',
            }}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
            <BottomNavigationAction label='Portfolio' icon={<FavoriteIcon />} />
            <BottomNavigationAction label='Blog' icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

class IndexPage extends Component {
  componentWillMount = () => {
    // /* Apply styles to body */
    // document.body.style.backgroundColor = 'green';
  };

  render = () => <IndexPageTemplate />;
}

export default IndexPage;
