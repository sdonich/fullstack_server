import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

const Header = (props) => {
	const renderContent = () => {
		switch (props.auth) {
			case null:
				return;
			case false:
				return <li><a href="/auth/google">Login With Google</a></li>;
			default:
				return [
					<li key="1"><Payments /></li>,
					<li key="3" style={{margin: '0 10px'}}>
						Credits: {props.auth.credits}
					</li>,
					<li key="2"><a href="/api/logout">Logout</a></li>
				];
		}
	}

	return (
		<nav>
			<div className="nav-wrapper">
				<Link
					to={props.auth ? '/surveys' : '/'}
					className="left brand-logo"
				>
					Emaily
				</Link>
				<ul className="right">
					{renderContent()}
				</ul>
			</div>
		</nav>
	);
}

const mapStateToProps = ({ auth }) => {
	return { auth }
}

export default connect(mapStateToProps)(Header);