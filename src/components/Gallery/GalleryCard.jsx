import React, { useState } from "react";
import { Card, CardBody, Stack, Heading, Image, Box } from "@chakra-ui/react";
import MediaPlayer from "../utils/MediaPlayer";

const GalleryCard = ({ media, description }) => {
  const [width, setWidth] = useState("100%");
  const [theme, setTheme] = useState("white");
  const [color, setColor] = useState("black");

  return (
    <Card
      maxW="sm"
      style={{ backgroundColor: theme }}
      onMouseOver={() => {
        setTheme("white");
        setColor("#ff1d58");
      }}
      onMouseLeave={() => {
        setTheme("white");
        setColor("black");
      }}
    >
      <CardBody>
        <Box
          onMouseOver={() => {
            setWidth("110%");
          }}
          onMouseLeave={() => {
            setWidth("100%");
          }}
          maxW={{ base: "100%", sm: width }}
        >
          <MediaPlayer
            content={media}
            description={description}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "auto",
              maxWidth: "100%",
            }}
          />
        </Box>
        <Stack mt="6" spacing="3">
          <Heading size="md" style={{ color: color }}>
            {description}
          </Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GalleryCard;
