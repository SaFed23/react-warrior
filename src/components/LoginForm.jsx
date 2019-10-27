import React from "react";
import { callApi, API_KEY_3 } from "../utils/api";

export default class LoginForm extends React.Component {
    constructor() {
        super();

        this.inputNameRef = React.createRef();
        this.state = {
            username: "",
            password: "",
            error: null
        }
    }
    componentDidMount() {
        this.inputNameRef.current.focus();
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = event => {
        event.preventDefault();
        callApi(`/authentication/token/new?api_key=${API_KEY_3}`)
        .then(async data => {
            const { request_token } = data;
            const options = {
                                method: "POST",
                                mode: "cors",
                                headers: {
                                    "content-type": "application/json"
                                },
                                body: JSON.stringify({
                                    username: this.state.username,
                                    password: this.state.password,
                                    request_token: request_token
                                })
                            }
            try {
                await callApi(`authentication/token/validate_with_login?api_key=${API_KEY_3}`, options);
                this.props.updateAuth(true);
            } catch(response) {
                response.then(error => {
                    this.setState({
                        error: error.status_message,
                    });
                });
            };
            // callApi(`authentication/token/validate_with_login?api_key=${API_KEY_3}`, options)
            // .then(data => {
            //     this.props.updateAuth(true);
            // }).catch(response => {
            //     response.then(error => {
            //         this.setState({
            //             error: error.status_message,
            //         });
            //     });
            // });
        });
    }

    render() {
        return (
            <div className="form-login-container">
                <form className="form-login" onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal text-center">
                        Авторизация
                    </h1>
                    <div className="form-group">
                        <label htmlFor="username">Пользователь</label>
                        <input type="text" 
                        name="username" 
                        id="username"
                        className="form-control"
                        placeholder="Пользователь"
                        ref={this.inputNameRef}
                        value={this.state.username}
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                        <input type="password" 
                        name="password" 
                        id="password"
                        className="form-control"
                        placeholder="Пароль"
                        value={this.state.password}
                        onChange={this.onChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-lg btn-primary btn-block">
                        Вход
                    </button>
                    {this.state.error ? (
                    <div className="invalid-feedback">{this.state.error}</div>
                    ) : null}
                </form>
            </div>
        )
    }
}