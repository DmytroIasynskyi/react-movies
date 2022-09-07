import React from "react";

export class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    }

    handleSearch = (event) => {
        this.setState({search: event.target.value})
    }

    handleKey = event => {
        if (event.key === 'Enter') {
            this.props.getMovie(this.state.search, this.state.type)
        }
    }

    handleFilter = event => {
        this.setState(() => ({type: event.target.dataset.type}), () => this.props.getMovie(this.state.search, this.state.type))
    }

    render() {
        const {search} = this.state;
        return(
            <div className="row">
                <div className="input-field">
                    <input
                        placeholder={"search"}
                        type={"search"}
                        className="validate"
                        value={search}
                        onChange={this.handleSearch}
                        onKeyDown={this.handleKey}
                    />
                    <button className={'btn search-btn'} onClick={() => this.props.getMovie(this.state.search, this.state.type)}>Search</button>
                </div>
                <div className={"types"}>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type={'all'}
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type={'movie'}
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type={'series'}
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'}
                        />
                        <span>Series</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type={'game'}
                            onChange={this.handleFilter}
                            checked={this.state.type === 'game'}
                        />
                        <span>Game</span>
                    </label>
                </div>
            </div>
        )
    }
}