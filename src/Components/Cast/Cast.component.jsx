import { Box, CardMedia, styled, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

//styling theme
const CastImage = styled(CardMedia)(({ theme }) => ({
  height: "100px",
  width: "100px",
  borderRadius: "50px",
  marginBottom: "20px",
  marginRight: "10px",
}));
const CastWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

//fetching data from API (Google custom search/ google cloud)
const fetchImage = async (name) => {
  try {
    console.log(name);
    const response = await axios.get(
      "https://www.googleapis.com/customsearch/v1",
      {
        params: {
          key: "AIzaSyCJbFAQtfs_BRbCV0VQ_FZ_M7zgoLgQB7Y", // Replaced with your actual API key
          cx: "a52353fb05845465b", // Replaced with your actual CSE ID
          q: `image of ${name}`,
          searchType: "image",
        },
      }
    );
    // console.log(response);
    return response.data.items[0].link;
  } catch {
    console.error("Error fetching image");
  }
};


//the Cast component
const Cast = ({ cast }) => {

  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedImages = await Promise.all(
        cast.map(async (castName) => {
          const imageUrl = await fetchImage(castName);
          return { name: castName, imageUrl }; // Return image URL for each cast member
        })
      );
      setImages(fetchedImages); // Set all images once fetched
    //   console.log(fetchedImages);
    };

    fetchData(); // Call fetchData only once when component mounts
  }, []); // Empty dependency array ensures it runs only once

  // the component starts here 
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {images.length === 0 ? (
        <Typography>Loading...</Typography> // Show loading message until images are fetched
      ) : (
        images.map((image) => (
          <CastWrapper key={image.name}>
            <CastImage
              component="img"
              image={image.imageUrl}
              alt={`Cast member ${image.name}`} // Display cast name as alt text
            />
            <Typography variant="h6">{image.name}</Typography>
          </CastWrapper>
        ))
      )}
    </Box>
  );
};

export default Cast;
