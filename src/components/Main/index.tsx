import { Container } from '../Container';
import { Movies } from '../Movies';
import "./styles.css";

export const Main = () => {

    return (
        <main>
            <Container alignCenter>
                <Movies />
            </Container>
        </main>
    );
}
