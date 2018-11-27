import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import { FormBtn } from "../components/Form";
import { Container, Col, Row } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Home extends Component {
    state = {
        trends: []
    };

    handleInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    // handleSaveBook = event => {
    //     event.preventDefault();
    //     let newBook = this.state.books
    //     let save = event.target.getAttribute('id');
    //     newBook.map(book => {
    //         // console.log(book)
    //         if(save === book.id) {
    //             // console.log(book)
    //             API.createBook({
    //                 title: book.volumeInfo.title, 
    //                 author: book.volumeInfo.authors,
    //                 description: book.volumeInfo.description,
    //                 link: book.volumeInfo.infoLink,
    //                 image: book.volumeInfo.imageLinks.thumbnail
    //             })
    //             .then(res => {
    //                 console.log(res.data._id);
    //                 window.location.replace("/saved/:id");
    //             })
    //             .catch(err => console.log(err))
    //             }
    //     })
    // };

    handleSubmitTrend = event => {
        event.preventDefault();
        API.getTrends()
        .then(res => {
            console.log(res.data);
            this.setState({ 
                trends: res.data
            });
        })
        .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron/>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <Container>
                                <Row>
                                    <Col size="md-12">
                                        <FormBtn onClick={this.handleSubmitTrend}></FormBtn>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <br></br>
                    <Container>
                    <h4>Search Results:</h4>
                    <br></br>
                    {this.state.trends.length ? (
                        <Row>
                        <Col size="xs-12">
                            <List>
                                {this.state.trends.map(trend => (
                                    <ListItem 
                                        key={trend.query}
                                        name={trend.name}
                                        url={trend.url}
                                        >
                                    </ListItem>
                                 ))}
                            </List>
                        </Col>
                    </Row>
                    ) : (
                        <h5>results appear here</h5>
                    )}
                    </Container>
                </Container>
            </div>
        )
    };
};

export default Home;