import * as React from "react";

interface IState {
	term: string
}

interface IProps {
	onSubmit: (term: string) => Promise<void>
}

class SearchBar extends React.Component<IProps, IState>{
	state = {term: ""};
	

	onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		this.props.onSubmit(this.state.term);
	}

	handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {this.setState({term: event.target.value})};

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input 
							type="text" 
							value={this.state.term} 
							onChange={this.handleChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;