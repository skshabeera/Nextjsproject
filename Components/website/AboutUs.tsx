import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export type AboutUsItem = {
    image: string;
    title: string;
    description: string;
};

type Props = {
    items: AboutUsItem[];
};

const AboutUs: React.FC<Props> = ({ items }) => {
    const [editableItems, setEditableItems] = useState(items);

    const handleTextChange = (
        event: React.FocusEvent<HTMLHeadingElement | HTMLParagraphElement>,
        index: number,
        key: 'title' | 'description'
    ) => {
        const newItems = [...editableItems];
        newItems[index][key] = event.target.innerText;
        setEditableItems(newItems);
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 4 }}>
                <Typography variant="h4" textAlign={"center"}>
                    About us
                </Typography>

                <Grid container spacing={4}>
                    {editableItems.map((item, index) => (
                        <Grid item key={index} xs={12} sm={6} md={3}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.image}
                                    alt={item.title}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                        align="center"
                                        contentEditable={true}
                                        onBlur={(e) => handleTextChange(e, index, 'title')}
                                        suppressContentEditableWarning={true}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        align="center"
                                        contentEditable={true}
                                        onBlur={(e) => handleTextChange(e, index, 'description')}
                                        suppressContentEditableWarning={true}
                                    >
                                        {item.description}
                                    </Typography>
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
