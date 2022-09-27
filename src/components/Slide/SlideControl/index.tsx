import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ReactNode, useState } from "react";
import './styles.css'

type SlideControlProps = {
    children: ReactNode;
    onClick: () => void;
}

export const SlideControl = ({ children, onClick }: SlideControlProps) => {

    const handleChangeSlide = () => {
        onClick();
    }

    return (
        <div className="icon" onClick={handleChangeSlide}>
            {children}
        </div>
    );
}
