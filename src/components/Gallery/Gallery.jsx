import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../utils/AuthContext";
import Footer from "../footer";
import {
  Box,
  Button,
  Text,
  Heading,
  Center,
  SimpleGrid,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Stack,
  Card
} from "@chakra-ui/react";

import Header from "../header";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const [galleryPosts, setGalleryPosts] = useState([]);
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  const [loggedInUserType, setLoggedInUserType] = useState(null);
  const { isLoggedIn, user } = useAuth();
  const [width, setWidth] = useState("100%");
  const [theme, setTheme] = useState("white");
  const [color, setColor] = useState("black");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/v1/posts");
        const posts = response.data.data.allPosts;
        const sortedPosts = posts.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        setGalleryPosts(sortedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    const fetchLoggedInUser = async () => {
      try {
        const response = await axios.get("https://fest-backend-wr4i.onrender.com/api/v1/users/current-user");
        const user = response.data.data;
        setLoggedInUserId(user._id);
        setLoggedInUserType(user.userType);
      } catch (error) {
        console.error("Error fetching logged in user:", error);
      }
    };

    fetchPosts();

    if (isLoggedIn) {
      fetchLoggedInUser();
    }
  }, [isLoggedIn]);

  const handleDeleteButton = async (postId) => {
    try {
      await axios.delete(`https://fest-backend-wr4i.onrender.com/api/v1/posts/delete/${postId}`);
      setGalleryPosts((prevPosts) =>
        prevPosts.filter((post) => post._id !== postId)
      );
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <>
    <Box style={{ backgroundColor: "black" }}>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Center>
        <Heading style={{ color: "white" }} as="h3" size="lg" mb={8} mt={8}>
          Gallery
        </Heading>
      </Center>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} padding={4}>
        {galleryPosts.map((post) => (

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
            maxW={{ base: "100%", sm: "100%" }}
            src={post.postedContent}
            alt="No image"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md" style={{ color: color }}>
            {post.username}
            </Heading>
              {post.caption}
            <Text>{post.caption}</Text>
            <Text>{post.description}</Text>
            {loggedInUserId === post.userId || loggedInUserType === "ADMIN" ? (
              <Button
                mt={4}
                colorScheme="red"
                onClick={() => handleDeleteButton(post._id)}
              >
                Delete
              </Button>
            ) : null}
          </Stack>
        </CardBody>
      </Card>
    </div>
        ))}
      </SimpleGrid>
    </Box>
    <Footer></Footer>
    </>
    
  );
};

export default Gallery;
