import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Heading,
  Divider,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";

const TourCard = ({ img, text }) => {
  const [width, setWidth] = useState("100%");
  const [theme, setTheme] = useState("white");
  const [color, setColor] = useState("black");

  return (
    <div>
      <Card
        maxW="sm"
        style={{ backgroundColor: theme }}
        onMouseOver={() => {
          setTheme("white"), setColor("#ff1d58");
        }}
        onMouseLeave={() => {
          setTheme("white"), setColor("black");
        }}
      >
        <CardBody>
          <Image
            maxW={{ base: "100%", sm: width }}
            src={img}
            alt="No image"
            borderRadius="lg"
            style={{
              transition: "max-width 0.3s ease",
              transform: "scale(1)",
            }}
            onMouseOver={() => {
              setWidth("110%");

              setScale(1.1);
            }}
            onMouseLeave={() => {
              setWidth("100%");

              setScale(1);
            }}
          />
          <Stack mt="6" spacing="3">
            <Heading
             
              size="md"
              style={{ color: color, textAlign: "center" }}
            >
              {text}
            </Heading>
            <Text></Text>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
