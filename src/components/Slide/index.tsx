import { ReactNode, useEffect, useState } from "react";
import { SlideControl } from "./SlideControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

type SlideProps = {
    children: ReactNode;
}

export const Slide = ({ children }: SlideProps) => {
    const [changeSlide, setChangeSlide] = useState(0);

    const slides: NodeListOf<Element> = document.querySelectorAll('.slide-item');

    useEffect(() => {
        validate();
    }, [changeSlide]);

    slides.forEach((slide) => {
        slide.style.left = - changeSlide * (445.38 / 2) + 'px';
        slide.classList.add('slide-transition');
    });

    const validate = () => {
        if (changeSlide < 0) {
            setChangeSlide(slides.length - 1);
        }

        if(changeSlide == slides.length) {
            setChangeSlide(0);
        }
    }
    
    const handleClickUp = () => {
        setChangeSlide(changeSlide + 1);
    }

    const handleClickDown = () => {
        setChangeSlide(changeSlide - 1);
    }

    return (
        <div className="slide">
            <SlideControl onClick={handleClickDown}>
                <FontAwesomeIcon icon={faChevronCircleLeft} />
            </SlideControl>

            <div className="slide-box">
                {children}
            </div>

            <SlideControl onClick={handleClickUp}>
                <FontAwesomeIcon icon={faChevronCircleRight} />
            </SlideControl>
        </div>
    );
}
