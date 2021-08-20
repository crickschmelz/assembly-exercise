import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import ImageThumb from './ImageThumb';
import ImageModal from './ImageModal';
import { GlobalStyles, InnerStyles, Container } from "../styles/AppStyles";

const App = () => {
  // stores array of image data sets
  const [images, setImages] = useState();
  // stores selected image that will populate data listed in pop-up modal
  const [selected, setSelected] = useState(null);
  // stores input as user types
  const [input, setInput] = useState("");
  // stores array of images filtered by user input
  const [filteredImages, setFilteredImages] = useState(images);

  // API call to fetch Reddit images
  const getImages = () => {
		return fetch(`http://www.reddit.com/r/pics/.json?jsonp=`)
			.then((response) => response.json())
			.then((data) => {
				setImages(data.data.children);
			})
			.catch((err) => console.log(err));
	}

  // will call API when page renders
  useEffect(() => {
    getImages();
  }, []);

  // will update filtered list of images based on user input
  useEffect(() => {
		setFilteredImages(images && images.filter((image) =>
			image.data.title.toLowerCase().includes(input.toLowerCase())
		))
	}, [input, images])

  // sets a new user input with each new character typed, can be expensive with longer queries
  const filterImages = (e) => {
		setInput(e.target.value);
	}

  // open pop-up modal when image is selected
  const openModal = (image) => {
		setSelected(image);
	}

  // close pop-up modal when exit button is clicked
	const closeModal = () => {
		setSelected(null);
	}

  return (
    <div>
      {selected && <ImageModal image={selected} closeModal={closeModal}/>}
      <GlobalStyles />
      <Navbar filterImages={filterImages} input={input} />
      <InnerStyles>
        <Container>
          {filteredImages && filteredImages.map(image => {
            return (
              <ImageThumb key={image.data.id} image={image} openModal={openModal} />
            )
          })}
        </Container>
      </InnerStyles>
    </div>
  )
}

export default App;
