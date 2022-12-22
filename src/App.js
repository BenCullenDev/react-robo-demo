import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
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
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchinput.toLowerCase())
        })
      return (
        <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
        </div>
            )  
    }
    }

export default App