import React, { Component } from 'react'
import Cardballance from '../component/cardname/cardbalance';
import Cardorder from '../component/cardname/cardorder';

class Home extends Component {

    render() {
        return (
            <div>
                <Cardballance/>
                <Cardorder/>
            </div>
        )
    }
}

// const Home = ({match,history})

export default Home;