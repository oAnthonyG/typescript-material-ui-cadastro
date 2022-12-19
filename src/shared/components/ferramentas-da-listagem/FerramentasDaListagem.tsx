import { Box, Button, Paper, TextField, useTheme, Icon } from "@mui/material";

import { Eviroment } from "../../environment";

interface IFerramentasDeListagemProps {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDeListagemProps> = ({
  textoDaBusca = '',
  mostrarInputBusca = false,
  aoMudarTextoDeBusca,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  aoClicarEmNovo,
}) => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      marginX={1}
      padding={1}
      component={Paper}
      height={theme.spacing(5)}
    >

      {mostrarInputBusca && (
        <TextField
          size="small"
          placeholder={Eviroment.INPUT_DE_BUSCA}
          value={textoDaBusca}
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
        />)}

      <Box flex={1} display="flex" justifyContent="end">
        {mostrarBotaoNovo && (
          <Button
            color='primary'
            disableElevation
            variant='contained'
            onClick={aoClicarEmNovo}
            endIcon={<Icon>add</Icon>}
          >{textoBotaoNovo}</Button>)}
      </Box>
    </Box>

  );
};