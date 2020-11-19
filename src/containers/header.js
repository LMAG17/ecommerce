import { Icon } from "@material-ui/core";
import React, { useState } from "react";
import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Row style={{ backgroundColor: "red" }}>
        <Col xs={4}>
            <img src="https://images.vexels.com/media/users/3/136295/isolated/preview/9293787a09b95e84c856e6474cff8ce0-marca-de-la-tienda-de-licores-by-vexels.png" alt=""  style={{height:"100px",width:"100"}}/>
        </Col>
        <Col xs={4} className="align-self-center" >
          <InputGroup>
            <Input placeholder="Buscar" />
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <SearchIcon />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>

        <Col xs={4} className="align-self-center">
            <ShoppingBasketIcon/>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
