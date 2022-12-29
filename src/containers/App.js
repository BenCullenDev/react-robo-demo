import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchinput: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json()
        }).then(users => {
            this.setState({robots: users})
        })
    }

    onSearchChange = (event) => {
        this.setState({searchinput: event.target.value})
        
       
    }

    render(){
        const { robots, searchinput } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchinput.toLowerCase())
        })
        if (!robots.length) {
           return <h1>LOADING...</h1>
        } else {
            return (
        <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots} />
                </ErrorBoundry>
                
            </Scroll>
        </div>
            )  }
      
    }
    }

export default App