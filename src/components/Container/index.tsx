import styled from "styled-components"

type ContainerProps = {
    column?: boolean;
    alignCenter?: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row' };
    ${props => props.alignCenter ? 'justify-content' : 'align-items'}: center; 
    width: 100%;
    max-width: 1200px;

        img {
            height: 120px;
        }
`;