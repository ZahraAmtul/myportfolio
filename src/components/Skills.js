import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import colorsharp from "../assets/img/colorsharp.png";
import colorsharp1 from "../assets/img/colorsharp1.png";
import { Row, Col } from "react-bootstrap";
export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, iure! Natus quaerat vel libero asperiores tempora laboriosam explicabo porro maiores perferendis quibusdam, suscipit error ipsum aut similique. Harum, minus obcaecati!</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Web Deveopment</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Web Deveopment</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Web Deveopment</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Web Deveopment</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorsharp} alt="" />
        </section>
      )
}