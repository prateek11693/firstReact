import React,{Component} from "react"

class Header extends Component{

    constructor(){
        super()
        this.state={
            title:"News App",
            userText:""   
             }
    }

    handleChange=(event)=>{
        this.setState({userText:event.target.value})
        this.props.userText(this.state.userText)

    }


render(){
    return(
    <header>
        <center>
    <h1>{this.state.title}</h1>
    <input type="text" onChange={this.handleChange}/>
    <p> {this.state.userText}</p>
    </center>
    <hr/>
    </header>);
}



}

export default Header;