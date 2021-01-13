import React, {Component} from "react";
import LoginRegister from "./LoginRegister";



class Home extends Component {

    state = {
        
    }

    componentDidMount(){
      window.scrollTo(0, 0)
  }
    

   

    
    render() {
       
        
        return (
          <div>
            <LoginRegister/>
          </div>
        );
    }
}




export default (Home);
