import React from "react";
import { ImgComparisonSlider } from '@img-comparison-slider/react';

const Project = (props) => {
    const {image1, image2} = props;
    return (
        <div id="img-box" className="container">

            <div id="image-slider">
                <ImgComparisonSlider>
                    <img slot="first" src="src/assets/before1.webp" alt="An untended backyard area" />
                    <img slot="second" src="src/assets/after1edited.jpg" alt="A well-maintained backyard patio space" />
                </ImgComparisonSlider>
            </div>
        </div>
    );
};

export default Project;