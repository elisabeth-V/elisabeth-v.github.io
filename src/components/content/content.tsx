import React from "react";
import { Link } from 'react-router-dom';
import Image from "./image";
import { GetPlpProducts } from "../helper/api";
import { ImagesProps, LabelsProps } from "../data/interfaces";
import { InternaLink, StyledLink } from "../../app-styled";

const ContentPage = ({subTitle,loadingMessage, errorMessage} : LabelsProps ) => {
    const {
        isLoading,
        isError,
        loadImages,
        counterRef,
        fetchPlpProducts
    } = GetPlpProducts(10);
    
    return(
        <>
            <h1>My images</h1>
            <p>{subTitle}</p>
            <div className="mylisting"> 
                {isLoading && 
                    <p className="loadingMessage">{loadingMessage}</p>
                }
                {isError &&
                    <p className="errorMessage">{errorMessage}</p>
                }
                <ul className="list" >
                {loadImages.map((images: ImagesProps ) =>
                    <li key={`li-${images.id}`}>
                        <Image 
                            key={images.id} 
                            imgId = {images.id} 
                            url = {images.download_url}
                            imgDesc = {images.author}
                        />    
                    </li>
                )}
                </ul>
            </div>
            <div className="buttonsBlock">
                <Link onClick={() => fetchPlpProducts(true, false)} to={`/content-page?page=${counterRef.current - 1}`}>
                    <InternaLink firstpage={counterRef.current - 1} $isPrimary>Previous</InternaLink>
                </Link>
                <p>Page {counterRef.current}</p>
                <Link onClick={() => fetchPlpProducts(false,false)} to={`/content-page?page=${counterRef.current + 1}`}>
                    <InternaLink firstpage={counterRef.current + 1} $isPrimary={false}>Next</InternaLink>
                </Link>
                
                {/* <StyledLink currentPage={counterRef.current + 1} >Another type of next</StyledLink> */}
            </div>
        </>
    );
}

export default ContentPage;