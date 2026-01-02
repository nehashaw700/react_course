import { Component } from "react";

class UserClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                login: "dummy",
                location: "def Location"
            }
        }

        console.log("User" + props.index + "class Constructor");
    }

    render() {
        const { login, location } = this.state.userInfo;
        console.log("User" + this.props.index + "class Render");

        return (
            <div>
                <h1> User Class </h1>
                <h2>User id: {login}</h2>
                <h2>Location: {location}</h2>
            </div>
        )
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/nehashaw700");
        const json = await data.json();
        console.log("User" + this.props.index + "class componentDidMount");

        console.log(json);
        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate() {
        console.log("User" + this.props.index + "class componentDidUpdate");
    }

    componentWillUnmount(props) {
        // we can do tasks like clearInterval to undo setInterval tasks if any done in the comp
        // this enhances performance
        console.log("User" + this.props.index + "class componentWillUnmount");
    }

    /**
     * User1class Constructor
     * User1class Render
      
     * User2class Constructor
     * User2class Render
      
     * User1class componentDidMount
     * User2class componentDidMount
      
     * api calls -> state variable changes and re renders
      
     * User1class Render
     * User2class Render
     * 
     * User1class componentDidUpdate
     * User2class componentDidUpdate
     * 
     * User1class componentWillUnmount
     * User2class componentWillUnmount
     */
}

export default UserClass;