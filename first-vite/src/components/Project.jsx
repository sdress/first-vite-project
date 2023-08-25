import React from "react";
import {Button, ButtonToggle} from "reactstrap";

const Project = (props) => {
    const {image1, image2} = props;
    return (
        <div>
            <div>
                <Button color="outline-primary">
                    Click to see Before and After
                </Button>
            </div>
            <p>(Placeholder for before and after photos)</p>
        </div>
    )
};

export default Project;