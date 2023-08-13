import React from "react";

const Loader = () => {
    return (
        <div className="circle-container">
            <h2>Circle Loader</h2>
            <div className="orbit-effect">
                <div className="orbit-container">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
