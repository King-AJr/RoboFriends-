import React,{ Component } from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import robots from '../robots'


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots:[],
            Searchfield: ""
        }
    }

   /* componentDidMount (){
        fetch({robots})
        .then(response =>response.json())
        .then(users => this.setState({ robots: users}));
       
    }*/
    componentDidMount(){
        this.setState({ robots: robots})
    }

    OnSearchChange = (event) => {
        this.setState({Searchfield: event.target.value})
        
    }

    render(){
        const { robots, Searchfield } = this.state
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(Searchfield.toLowerCase());
        })
    if(    this.state.robots === 0){
        return <h1>LOADING</h1>
    }   
    else{
    return (
        <div className="tc">
            <h1 className="f1"> RoboFriends</h1>
            <SearchBox SearchChange={this.OnSearchChange} />
            <Scroll>
            <Cardlist robots={filteredRobot}/>
            </Scroll>
        </div>
    );}}
}
export default App;