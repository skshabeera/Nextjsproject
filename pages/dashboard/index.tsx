import React from 'react';
import {
  Container,
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { styled } from '@mui/system';
import { useRouter } from 'next/router';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
}));

const projects = [
  { id: 1, name: 'Project 1' },
  { id: 2, name: 'Project 2' },
  { id: 3, name: 'Project 3' },
  // Add more projects for testing
];

const Dashboard = () => {
  const router = useRouter();

  const handleCreateProject = () => {
    router.push('/dashboard/create');
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {project.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCreateProject}
          >
            Create New Project
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
