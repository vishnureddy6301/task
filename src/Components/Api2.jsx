import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Api2 = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((response) => {
                console.log("Response", response);
                setProducts(response.data.products); 
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <Container>
            {products && products.length > 0 && (
                products.reduce((rows, product, index) => {
                    const rowNumber = Math.floor(index / 3); // 3 products per row
                    if (!rows[rowNumber]) {
                        rows[rowNumber] = [];
                    }
                    rows[rowNumber].push(product);
                    return rows;
                }, []).map((row, rowIndex) => (
                    <Row key={rowIndex} className='m-6'>
                        {row.map((product) => (
                            <Col key={product.id} xs={12} sm={6} md={4} lg={4} xl={4} className="mb-4">
                                <Card style={{ width: '100' }}>
                                    {product.images ? (
                                        <Card.Img 
                                            variant="top" 
                                            src={product.images[0] } 
                                            alt={`Product ${product.id} image 0`}
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        {/* <div>No Image Available</div> */}
                                    )}
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>{product.id}</Card.Text>
                                        <Card.Text>Brand:{product.brand}</Card.Text>
                                        <Card.Text>Rating:{product.rating}</Card.Text>
                                        <Card.Text> price:{product.price}$</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ))
            )}
        </Container>
    );
}

export default Api2;