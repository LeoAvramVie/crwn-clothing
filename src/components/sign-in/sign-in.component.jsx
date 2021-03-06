import React, {Component} from 'react';
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password:''
        }
    }

    onHandleChange = event =>{
        const {value, name} = event.target;

        this.setState({[name]: value});
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email:'',
            password:''
        })
    }

    render() {
        return (
            <div className='sign-in'>
               <h2>I already have an account</h2>
               <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.onHandleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.onHandleChange}
                        label='passward'
                        required
                    />
                    <CustomButton type="submit">SIGN IN</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;