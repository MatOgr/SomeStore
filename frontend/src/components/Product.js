import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Product.css";

const Product = ({ img, name, price, description, guitar_id, available }) => {
  return (
    <Card className="card">
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link variant="primary" to={`/product/${guitar_id}`}>
          More details
        </Link>
        <br />
        <Card.Text>
          {price} <i className="fas fa-brain"></i>
        </Card.Text>
        <Button variant="primary" disabled={available}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
