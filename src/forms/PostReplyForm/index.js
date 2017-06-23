import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import PropTypes from 'prop-types';
import {createPostReply} from '../../actions/replies/post-reply/create';
import {renderInput} from '../../utils/redux-form-fields';


class PostReplyForm extends Component {

	formSubmit = data => {
		const {activeUser, dispatch, postId} = this.props;
		dispatch(createPostReply({
			...data,
			post: postId,
			user: activeUser.id
		}));
	};

	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit(this.formSubmit)}>
				<Field component={renderInput} label="Body" name="body" type="body"/>
				<button className="btn btn-primary" type="submit">Submit</button>
			</form>
		);
	}

}

PostReplyForm.propTypes = {
	postId: PropTypes.number.isRequired,
};

PostReplyForm = reduxForm({
	form: 'PostReplyForm'
})(PostReplyForm);

export default connect(state => ({
	activeUser: state.activeUser
}))(PostReplyForm);
