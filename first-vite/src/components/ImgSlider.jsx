import React from "react";
import { ImgComparisonSlider } from '@img-comparison-slider/react';

const ImgSlider = (props) => {
    const {image1, image2} = props;
    return (
        <div id="image-slider">
        <ImgComparisonSlider>
            <img slot="first" src={image1} />
            <img slot="second" src={image2} alt="A well-maintained backyard patio space" />
        </ImgComparisonSlider>
        </div>
    );
};

export default ImgSlider;