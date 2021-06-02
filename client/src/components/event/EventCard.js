import React from 'react';
import PropTypes from 'prop-types';

const EventCard = (props) => {
	return (
		<div className='event__card'>
			<img
				src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-0/c0.18.1200.573a/s640x640/180093544_100749318851135_4057799782609863756_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=340051&_nc_ohc=ofUyV_MqLpUAX9Gtc-2&_nc_ht=scontent-sjc3-1.xx&tp=28&oh=6c7f31637b81c58a5eada7bc6e94bc26&oe=60DAEB0B'
				alt=''
			/>
			<main className='event__card-main'>
				<h3 className='event__card-date'>
					SATURDAY, 21 AUGUST 2021 FROM 20:00 PDT-23:00 PDT
				</h3>
				<h2 className='event__card-title'>Pancho Barraza</h2>
				<span className='event__card-location'>Online Event</span>
				<p>348 interested &#8226; 28 going </p>
			</main>
		</div>
	);
};

EventCard.propTypes = {};

export default EventCard;
