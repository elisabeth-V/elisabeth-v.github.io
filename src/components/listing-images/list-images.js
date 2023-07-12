import React, { useState, useEffect, useRef } from 'react';
import './list-images-styled.scss';
import Image from './image';

const ListingImages = ({ subTitle }) => {
  
  const [isLoading, setIsLoading] = useState();
  const [isError, setIsError] = useState(false);
  const [imagesOnPageLoad, setImagesOnPageLoad] = useState([]);
  const [loadMoreImages, setLoadMoreImages] = useState([]);
  const [isMoreImage, setIsMoreImage] = useState(false);
  const counterRef = useRef(1);

  //First 10 images loaded by default in the app
  const fetchImages = () =>{
    setIsLoading(true);
    
    fetch('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=12')
    .then(res => res.json())
    .then(
      (response) => {
        setImagesOnPageLoad(response);
        setIsLoading(false);
      },
      (error) => {
          setIsLoading(false);
          setIsError(error);
      }
    );
  }

  //use of the useeffect hook to prevent the function to be called over and over
  useEffect(() => {
    fetchImages();
  }, []);

  //function to navigate through the images - 12 images
  const navigationImages = (isPrevButton) =>{
    setIsLoading(true);
    isPrevButton ? counterRef.current-- : counterRef.current++;
    //console.log('counter ref next',counterRef.current );
    
    fetch('https://jsonplaceholder.typicode.com/photos?_page='+counterRef.current+'&_limit=12')
    .then(res => res.json())
    .then(
      (response) => {
        setLoadMoreImages(response);
        setIsLoading(false);
      },
      (error) => {
        setIsLoading(false);
        setIsError(error);
      }
    );
    setIsMoreImage(true);
  }

  return(
    <>
      <div className="mylisting"> 
        <h1>This a preview of the images fetched</h1>
        <p>{subTitle}</p>
        
        {isLoading && 
          <p className="loadingMessage">Loading</p>
        }
        {isError &&
          <p className="errorMessage">Oops something went wrong !</p>
        }

        <ul className="list" >
          {imagesOnPageLoad.map((images) =>
            <li>
              <Image 
                key={images.id} 
                imgId = {images.id} 
                url = {images.url}
                imgDesc = {images.title}
              />
            </li>
          )}
        </ul>

        {isMoreImage && 
          <>
            <h2>More Image</h2>
            <ul className="list" >
              {loadMoreImages.map((images) =>
                <li>
                  <Image 
                    key={images.id} 
                    imgId = {images.id} 
                    url = {images.url}
                    imgDesc = {images.title}
                  />    
                </li>
              )}
            </ul>
          </>
        }
      </div>
      <div className="buttonsBlock">
        <button onClick={() => navigationImages(true)}> Previous 12 images</button>
        <button onClick={() => navigationImages(false)}> Next 12 images</button>
      </div>
    </>
    );
}

export default ListingImages;