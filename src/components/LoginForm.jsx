import React from "react";

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="form-login-container">
                <form className="form-login">
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
                        />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                        <input type="password" 
                        name="password" 
                        id="password"
                        className="form-control"
                        placeholder="Пароль"
                        />
                    </div>
                    <button type="submit" className="btn btn-lg btn-primary btn-block">
                        Вход
                    </button>
                </form>
            </div>
        )
    }
}