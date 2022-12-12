import { Avatar, Drawer, useTheme, Divider, List, ListItemButton, ListItemIcon, ListItemText, Icon, useMediaQuery} from '@mui/material';
import { Box } from '@mui/system';
import { useDrawerContext } from '../../contexts';

interface MenuLateralProps {
  children: React.ReactNode
};

export const MenuLateral: React.FC<MenuLateralProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const {isDrawerOpen, toggleDrawerOpen} = useDrawerContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant= {smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} display="flex" flexDirection='column' height="100%">
          <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
            <Avatar sx={{width: theme.spacing(12), height: theme.spacing(12)}} src='https://practicaltyping.com/wp-content/uploads/2020/08/gon.png' />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>
                    home
                  </Icon>
                </ListItemIcon>
                <ListItemText primary="Página inicial" />
              </ListItemButton>
            </List>
          </Box>

        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
