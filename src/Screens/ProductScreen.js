import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

function ProductScreen({match}) {
    const {id}  = useParams();
    const product = products.find((p) => p._id === id)
    return (
        <div>
            {product.name}
        </div>
    )
}

export default ProductScreen
