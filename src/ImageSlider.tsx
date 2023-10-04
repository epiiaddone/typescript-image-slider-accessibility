import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import { useState } from "react";
import "./image-slider.css";

type ImageSliderProps = {
    images: {
        url: string,
        alt: string,
    }[]
}

export const ImageSlider = ({ images }: ImageSliderProps) => {
    const [imageIndex, setImageIndex] = useState(0);

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return images.length - 1;
            else return index - 1;
        })
    }

    function showNextImage() {
        setImageIndex(index => {
            if (index === images.length - 1) return 0;
            else return index + 1;
        })
    }

    return (
        <section aria-label="Image Slider" className="img-slider">
            <a href="#after-image-slider-controls" className="skip-link">Skip Image Slider Controls</a>
            <div className="img-slider--carosel">
                {images.map(({ url, alt }, index) => (//load all images to page so no loading during scrolling
                    <img
                        key={url}
                        src={url}
                        aria-label={alt}
                        aria-hidden={imageIndex !== index}
                        className="img-slider--img"
                        style={{ translate: `${-100 * imageIndex}%` }}
                    />
                ))}
            </div>
            <button
                onClick={showPrevImage}
                className="img-slider--btn"
                style={{ left: 0 }}
                aria-label="View Previous Image"
            >
                <ArrowBigLeft aria-hidden />
            </button>
            <button
                onClick={showNextImage}
                className="img-slider--btn"
                style={{ right: 0 }}
                aria-label="View Next Image"
            >
                <ArrowBigRight aria-hidden />
            </button>
            <div className="image-slider--btn-container">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setImageIndex(index)}
                        className="img-slider--dot-btn"
                        aria-label={`View Image ${index}`}
                    >
                        {index === imageIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}
                    </button>
                ))}
            </div>
            <div id="after-image-slider-controls" />
        </section>
    )
}