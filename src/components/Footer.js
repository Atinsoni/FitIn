import Container from "react-bootstrap/Container";
import "./Footer.css";

function Footer(){

    return(
        <Container className="footer text-center align-items-center p-3 bgdarkgrey" fluid>
            <p className="m-0 mb-2" >Copyright © 2023 FitIn.</p>
            <p className="m-0">Created with ❤ by: 
                <a className = "link" href="https://github.com/Atinsoni">Atin Soni</a>, 
            </p>
        </Container>
    );
}
export default Footer