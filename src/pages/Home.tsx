import { Box, Button, Grid2, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { decrementar, incrementar, reset } from "../store/modules/counterSlice";
import { themeColors } from "../config/global/themeColors";

export function Home() {
  const counterRedux = useAppSelector((state) => state.counter);

  const dispatch = useAppDispatch();

  const handleIncrementar = () => dispatch(incrementar());
  const handleDecrementar = () => dispatch(decrementar());
  const handleReset = () => dispatch(reset());

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "100vh",
        backgroundColor: themeColors.background,
        color: themeColors.text,
        padding: 4,
      }}
    >
      {/* Mensagem de boas-vindas */}
      <Typography
        variant="h4"
        sx={{
          color: themeColors.primary,
          fontWeight: "bold",
          mb: 4,
        }}
      >
        Bem-vindo ao meu espaço de estudos e novidades!
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: themeColors.text,
          mb: 4,
          maxWidth: 600,
        }}
      >
        Aqui você vai encontrar um mix de ideias fresquinhas, insights legais e
        coisas que me inspiram no dia a dia. O objetivo? Aprender junto,
        compartilhar descobertas e trocar figurinhas sobre o que está rolando
        de interessante por aí.
        <br />
        <br />
        Então, puxa uma cadeira, pegue seu café (ou chá, sem julgamentos!) e
        fique à vontade. Vamos explorar, aprender e nos divertir juntos!
        <br />
        <br />
        Você está em casa.
      </Typography>

      {/* Contador */}
      <Typography
        variant="h6"
        sx={{
          color: themeColors.primary,
          fontWeight: "bold",
          mb: 4,
        }}
      >
        Contador: {counterRedux.value}
      </Typography>

      {/* Botões do contador */}
      <Grid2 container spacing={2} sx={{ maxWidth: 400 }}>
        <Grid2 size={4}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: themeColors.primary,
              color: themeColors.text,
              "&:hover": {
                backgroundColor: themeColors.accent,
              },
            }}
            fullWidth
            onClick={handleIncrementar}
          >
            Incrementar
          </Button>
        </Grid2>
        <Grid2 size={4}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: themeColors.secondary,
              color: themeColors.text,
              "&:hover": {
                backgroundColor: themeColors.accent,
              },
            }}
            fullWidth
            onClick={handleDecrementar}
          >
            Decrementar
          </Button>
        </Grid2>
        <Grid2 size={4}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: themeColors.accent,
              color: themeColors.background,
              "&:hover": {
                backgroundColor: themeColors.primary,
              },
            }}
            fullWidth
            onClick={handleReset}
          >
            Zerar
          </Button>
        </Grid2>
      </Grid2>

      {/* Player de Áudio */}
      <Box
        sx={{
          mt: 4,
          p: 2,
          backgroundColor: themeColors.secondary,
          borderRadius: 2,
          boxShadow: 2,
          maxWidth: 400,
          width: "100%",
        }}
      >
        <Typography variant="body1" sx={{ mb: 2 }}>
          Ouça a música enquanto interage:
        </Typography>
        <audio controls style={{ width: "100%" }}>
          <source
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            type="audio/mp3"
          />
          Seu navegador não suporta o elemento de áudio.
        </audio>
      </Box>
    </Box>
  );
}
