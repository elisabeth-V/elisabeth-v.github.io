import { useState, useRef, useEffect } from 'react';

export const GetPlpProducts = (elPerPagelimit : number) => {
    
    const [isLoading, setIsLoading] = useState<boolean>();
    const [isError, setIsError] = useState<boolean>(false);
    const [loadImages, setLoadImages] = useState([]);
    const counterRef = useRef(1);
  
    //function to navigate through the images - 10 images
    const fetchPlpProducts = (isPrevButton: boolean, isOnLoad: boolean) =>{
      setIsLoading(true);
      if ( !isOnLoad ){
        isPrevButton ? counterRef.current-- : counterRef.current++;
        // console.log('click on prev button',counterRef.current );
      }
  
      fetch('https://picsum.photos/v2/list?page='+counterRef.current+'&limit='+elPerPagelimit)
      .then(res => res.json())
      .then(
        (response) => {
          setLoadImages(response);
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
      fetchPlpProducts(false, true);
    }, []);
  
    return {
      isLoading,
      isError,
      loadImages,
      counterRef,
      fetchPlpProducts,
    };
  }