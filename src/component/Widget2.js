import React,{ Component } from  'react';

import Carousel from 'react-material-ui-carousel';
import Item from 'react-material-ui-carousel'
import { Redirect } from 'react-router-dom'







class Widget2 extends Component{
    constructor(props){
        super(props);
        this.state={
            isExplore:false
        }
    }



    handleExplore = ()=>{
        this.setState({isExplore:true})
    }




    render(){


        if(this.state.isExplore){
            return <Redirect to="/explore"/>
        }


        return(<div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">

                        <Carousel>



                            <Item>
                                <div style={{backgroundImage:'url(./axisimage1.jpg)', backgroundSize:"100% 100%",height:"200px"}} onClick={this.handleExplore}>
                                    
                                </div>
                            </Item>

                            <Item>
                                <div style={{backgroundImage:'url(./axisimage2.jpg)',backgroundSize:"100% 100%",height:"200px"}} onClick={this.handleExplore}>
                                    
                                </div>
                            </Item>

                            <Item>
                                <div style={{backgroundImage:'url(./image1.jpg)',backgroundSize:"100% 100%",height:"200px"}} onClick={this.handleExplore}>
                                    
                                </div>
                            </Item>
                        </Carousel>


                    </div>
                </div>
            </div>
        </div>)
    }
}



export default Widget2;