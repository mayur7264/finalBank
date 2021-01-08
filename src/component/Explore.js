import React,{ Component } from 'react'
import { Link } from 'react-router-dom'



class Explore extends Component{







    render(){
        return(<div>
            <h1>Explore Component</h1>
            <Link to="/"> <button className="btn btn-secondary">Back</button> </Link>
        
            

        </div>)
    }
}


export default Explore;