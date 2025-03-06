import { Box, Button, Container, Paper, Typography } from '@mui/material';
// import './App.css';

const serviceList = ['Service 1', 'Service 2', 'Service 3'];
function App() {
  return (
    <>
      <Container>
        <Typography
          variant="h1"
          sx={{ my: 4, textAlign: 'center', color: 'primary.main' }}
        >
          Services
        </Typography>
        <Typography variant="h2">Overview</Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          {serviceList.map((service) => (
            <Paper elevation={3} xs={{ width: { sm: 1, md: 320 } }}>
              <Box sx={{ m: 3 }}>
                <Typography variant="h3">{service}</Typography>
                <Typography sx={{ mt: 2 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit ducimus esse natus, blanditiis pariatur officia
                  soluta neque iure quo alias saepe doloremque incidunt aliquam
                  similique placeat, excepturi, voluptate nisi optio quaerat
                  veniam? Non doloribus totam dolores eligendi, quam nam
                  delectus animi molestias necessitatibus, culpa quia, illum
                  iusto maxime sed nulla.
                </Typography>
                <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                  Learn More
                </Button>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </>
  );
}

export default App;
