import React from 'react';
import PropTypes from 'prop-types';
import Input from '../layout/Input';

const EventToolBar = (props) => {
	return (
		<div className='event__toolbar'>
			<Input
				cnames={null}
				label='startRange'
				labelText={<i className='fas dashboard-icon fa-search'></i>}
				type='text'
				value={null}
				placeholder='search here...'
			/>
			<Input
				cnames={null}
				label='startRange'
				labelText='From:'
				type='date'
				value={null}
				placeholder='mm/dd/yyyy'
			/>
			<Input
				cnames={null}
				label='endRange'
				labelText='To:'
				type='date'
				value={null}
				placeholder='mm/dd/yyyy'
			/>
		</div>
	);
};

EventToolBar.propTypes = {};

export default EventToolBar;
