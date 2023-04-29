import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export type AboutUsItem = {
    imageUrl: string;
    title: string;
    description: string;
};

type Props = {
    items: AboutUsItem[];
};

const AboutUs: React.FC<Props> = ({ items }) => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 4 }}>
                <Typography variant='h4' textAlign={"center"}>About us</Typography>

                <Grid container spacing={4}>
                    {items.map((item, index) => (
                        <Grid item key={index} xs={12} sm={6} md={3}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.imageUrl}
                                    alt={item.title}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="div" align="center">
                                        {item.title}
                                    </Typography>
                                    <Typography align="center">{item.description}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default AboutUs;
