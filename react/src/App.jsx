// Ricardo Castro de Matos

import * as React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
export default function HomePage() {
return (
<Container maxWidth="sm">
<Box
sx={{
height: '100vh', display: 'flex', flexDirection: 'column',
justifyContent: 'center', alignItems: 'center', textAlign: 'center', }}
>
<Typography variant="h4" gutterBottom>
Bem-vindo, Ricardo!
</Typography>
<Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
Esta é uma página simples feita com o framework React, com a build Vite e com a biblioteca responsiva
Material UI. </Typography>
<Button variant="contained" color="primary">
Iniciar
</Button>
</Box>
</Container>
);
}

