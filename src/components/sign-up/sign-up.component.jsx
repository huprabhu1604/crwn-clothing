import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.style.scss';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("Password do not match with Cofirm Password");
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch(error) {
            console.log(error)
        }
        
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an Account</h2>
                <span>Sign up with your email and password</span>                
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" 
                               name="displayName" 
                               handleChange={this.handleChange} 
                               value={this.state.displayName} 
                               label="Display Name"
                               required/>
                    <FormInput type="email" 
                               name="email" 
                               handleChange={this.handleChange} 
                               value={this.state.email} 
                               label="Email"
                               required/>
                    <FormInput type="password" 
                               name="password" 
                               handleChange={this.handleChange} 
                               value={this.state.password} 
                               label="Password"
                               required/>
                    <FormInput type="password" 
                               name="confirmPassword" 
                               handleChange={this.handleChange} 
                               value={this.state.confirmPassword} 
                               label="Confirm Password"
                               required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign Up</CustomButton>
                    </div>                    
                </form>
            </div>
        )
    }
}

export default SignUp;