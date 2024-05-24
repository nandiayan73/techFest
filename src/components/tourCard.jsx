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
    <div style={{marginBottom:"10px"}}>
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
            onMouseOver={() => {
              setWidth("110%");
            }}
            onMouseLeave={() => {
              setWidth("100%");
            }}
            maxW={{ base: "100%", sm: width }}
            src={img}
            alt="No image"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md" style={{ color: color }}>
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
