import React from "react";
import classNames from "classnames";

class MovieTabs extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.sort_by !== this.props.sort_by) {
            return true;
        }
        else {
            return false;
        }
    }
    
    getClassLink = value => classNames("nav-link", {"active": this.props.sort_by === value});
    handleClick = value => () => { this.props.updateSortBy(value); }

    render() {    
        return (
            <ul className="tabs nav nav-pills">
                <li className="nav-item">
                    <div className={this.getClassLink("popularity.desc")}
                        onClick={this.handleClick("popularity.desc")}
                        >
                        Popularity desc
                    </div>
                </li>
                <li className="nav-item">
                    <div className={this.getClassLink("revenue.desc")}
                        onClick={this.handleClick("revenue.desc")}
                        >
                        Revenue desc
                    </div>
                </li>
                <li className="nav-item">
                    <div className={this.getClassLink("vote_average.desc")}
                        onClick={this.handleClick("vote_average.desc")}
                        >
                        Vote average desc
                    </div>
                </li>
            </ul>
        );
    }
}

export default MovieTabs;