import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-5 m-1">
                    <Card>
                        <CardImg object src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                        <CardBody>
                            <CardTitle>{this.props.selectedDish.name}</CardTitle>
                            <CardText>{this.props.selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-sm-5 m-1">
                    <h3>Comments</h3>
                    <ul className="list-unstyled">
                        {this.props.selectedDish.comments.map(element => {
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
    }
}

export default Dishdetail;