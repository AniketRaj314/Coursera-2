import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
function RenderDishDetail({ dish }) {
    if (dish != null) {
        return (
            <div className="row">
                <div className="col-12 col-sm-5 m-1">
                    <Card>
                        <CardImg object src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-sm-5 m-1">
                    <h3>Comments</h3>
                    <ul className="list-unstyled">
                        {dish.comments.map(element => {
                            return (
                                <li>
                                    <p>{element.comment}</p>
                                    <p>-- {element.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(element.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            null
        );
    }
}

const DishDetail = props => {
    return (
        <RenderDishDetail dish={props.dish} />
    );
}


export default DishDetail;