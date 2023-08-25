import React from "react";
import { ImgComparisonSlider } from '@img-comparison-slider/react';

const Project = (props) => {
    const {image1, image2} = props;
    return (
        <div id="image-slider">
        <ImgComparisonSlider>
            <img slot="first" src="src/assets/before1.webp" />
            <img slot="second" src="src/assets/after1edited.jpg" />
        </ImgComparisonSlider>
        </div>
    );
};

export default Project;