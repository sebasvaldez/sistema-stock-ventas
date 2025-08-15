import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Paper,
  TextField,
} from "@mui/material";

import { useForm } from "../../hooks/useForm";

export const LoginPage = () => {
  const { email, password, onInputChange } = useForm({
    email: "sebas@gmail.com",
    password: "sebas123",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
        <Avatar
          sx={{
            mx: "auto",
            bgcolor: "secondary.main",
            textAlign: "center",
            mb: 2,
          }}
        >
          <LockOutlined />
        </Avatar>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ my: 2 }}>
          <TextField
            placeholder="Ingrese su correo"
            fullWidth
            required
            autoFocus
            sx={{ mb: 2 }}
            name="email"
            onChange={onInputChange}
            value={email}
          />
          <TextField
            placeholder="Ingrese su contraseña"
            fullWidth
            required
            autoFocus
            sx={{ mb: 2 }}
            type="password"
            name="password"
            onChange={onInputChange}
            value={password}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
            Ingresar
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
