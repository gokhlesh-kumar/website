import React from 'react';
import '../components/movie-list.css';

const SearchBox = (props) => {
	return (
		<div className="Card">
			<div className="CardInner">
				<label>Search for your favourite movie</label>
				<div className="container">
					<div className="Icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
					</div>
					<div className="InputContainer">
						<input
							className='form-control'
							value={props.value}
							onChange={(event) => props.setSearchValue(event.target.value)}
							placeholder='Type to search...'
						></input>
					</div>
				</div>
			</div>
		</div>

	);
};

export default SearchBox;
