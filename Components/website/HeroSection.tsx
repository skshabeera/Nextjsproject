import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "next/image";

type Props = {
  initialHeading: string;
  initialText: string;
  imageUrl: string;
};

const HeroSection: React.FC<Props> = ({ initialText, imageUrl, initialHeading }) => {
  const [heading, setHeading] = useState(initialHeading);
  const [text, setText] = useState(initialText);

  const handleHeadingChange = (event: React.FocusEvent<HTMLHeadingElement>) => {
    setHeading(event.target.innerText);
  };

  const handleTextChange = (event: React.FocusEvent<HTMLParagraphElement>) => {
    setText(event.target.innerText);
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          py: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            p: 2,
            order: { xs: 2, md: 1 },
          }}
        >
          <Typography
            variant="h2"
            mb={2}
            contentEditable={true}
            onBlur={handleHeadingChange}
            suppressContentEditableWarning={true}
          >
            {heading}
          </Typography>

          <Typography
            variant="body1"
            mb={2}
            contentEditable={true}
            onBlur={handleTextChange}
            suppressContentEditableWarning={true}
          >
            {text}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
            order: { xs: 1, md: 2 },
          }}
        >
          <Image src={imageUrl} alt="Hero image" width={500} height={300} />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
