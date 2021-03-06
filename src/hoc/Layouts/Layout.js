import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../Aux/Aux';
import styles from './Layout.css';
import TooBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: false
        }
    }
    sideDrawerClosedHandler = () =>{ 
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });   
    }
    render(){
        return (
            <Aux>
            <TooBar isAuth={this.props.isAuthenticated}
                drawerToggleClicked={this.sideDrawerToggleHandler} />
            <SideDrawer 
                isAuth={this.props.isAuthenticated}
                open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={styles.Content}> 
                    {this.props.children}
                </main>
        </Aux>
        );
    }
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps, null)(Layout);