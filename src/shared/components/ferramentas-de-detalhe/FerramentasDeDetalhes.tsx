import { Paper, useTheme, Box, Icon, Button, Divider, Skeleton } from "@mui/material";

interface IFerramentasDeDetalhesProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEVoltar?: boolean;

  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;
  mostrarBotaoSalvarEVoltarCarregando?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEVoltar?: () => void;
}

export const FerramentasDeDetalhes: React.FC<IFerramentasDeDetalhesProps> = ({
  textoBotaoNovo = 'Novo',

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEVoltar = false,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEVoltarCarregando = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEVoltar,
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
      {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
        <Button
          color='primary'
          disableElevation
          variant='contained'
          onClick={aoClicarEmSalvar}
          startIcon={<Icon>save</Icon>}
        >Salvar</Button>)}

      {mostrarBotaoSalvarCarregando && (
        <Skeleton width={110} height={60} />
      )}

      {(mostrarBotaoSalvarEVoltar && !mostrarBotaoSalvarEVoltarCarregando) && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmSalvarEVoltar}
          startIcon={<Icon>save</Icon>}
        >Salvar e Voltar</Button>)}

      {mostrarBotaoSalvarEVoltarCarregando && (
        <Skeleton width={180} height={60} />
      )}

      {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmApagar}
          startIcon={<Icon>delete</Icon>}
        >Apagar</Button>)}

      {mostrarBotaoApagarCarregando && (
        <Skeleton width={112} height={60} />
      )}

      {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando) && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmNovo}
          startIcon={<Icon>add</Icon>}
        >{textoBotaoNovo}</Button>)}

      {mostrarBotaoNovoCarregando && (
        <Skeleton width={95} height={60} />
      )}

      <Divider variant='middle' orientation='vertical' />

      {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmVoltar}
          startIcon={<Icon>arrow_back</Icon>}
        >Voltar</Button>)}

      {mostrarBotaoVoltarCarregando && (
        <Skeleton width={108} height={60} />
      )}
    </Box>
  );
};