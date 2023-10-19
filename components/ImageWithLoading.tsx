import React from "react";
import Image from "next/image";


const IMAGE_SIZE = 300;

const ImageWithLoading = ({ imgUrl }: { imgUrl: string }) => {
    return (<Image
        src={imgUrl}
        alt="Image or GIF"
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        priority
        loading="eager"
        />
    );
}

export default ImageWithLoading;
