import React from "react";
import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
const Header = (props) => {

  return (
    <div>
      <Row style={{ backgroundColor: "red" }}>
        <Col xs={4}>
          <img src="https://images.vexels.com/media/users/3/136295/isolated/preview/9293787a09b95e84c856e6474cff8ce0-marca-de-la-tienda-de-licores-by-vexels.png" alt="" style={{ height: "100px", width: "100" }} />
        </Col>
        <Col xs={4} className="align-self-center" >
          <InputGroup>
            <Input placeholder="Buscar" />
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <a>Buscar</a>
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>

        <Col xs={4} className="align-self-center">
          <a >Carrito</a>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
