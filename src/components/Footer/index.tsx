import styled from "styled-components";

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    padding: 20px 0;
    border-top: thin solid rgba(255, 255, 255, .02);
    background-color: rgba(0, 0, 0, .05);

        p:nth-child(1) {
            color: #ffcc03;
            padding-bottom: 5px;
            font-weight: lighter;
        }

        p:nth-child(2) {
            color: rgba(255, 204, 3, .5);
            padding-bottom: 5px;
            font-weight: bolder;
        }
`;