import React, {Fragment} from 'react';
import TimeAgo from 'react-timeago';

const Comment = ({comment, loading}) => {
    const { _id, text, name, user, createdAt } = comment;

    return (
        <Fragment>
        {!loading && <Fragment>
            <section className="row comment mt-2"> 
            <header className="row profile__header">
                <div className="comment__thumb">
                    <img src="images/default.png" alt="profile thumbnail" className="comment__thumb"/>
                </div>
                <div className="poster__name">
                <a className='anchor' href="/profile/">
                    <p className='options'>{name}</p>
                </a>
                <span className='timestamp' > 
        
                    <TimeAgo date={createdAt} />
                </span>
                </div>
                <div className="content-options">
                    <input type="checkbox" className="content-options__checkbox" id='option-toggle<%= comment._id %>' />
                    <label htmlFor="option-toggle<%= comment._id %>">
                        <i className="fa fa-cog options user-options" aria-hidden="true" ></i>
                    </label>
                    <nav className="content-options__nav">
                        <ul className="content-options__list">
                            <a className='content-options__link' href="#" data-target="#delete<%= comment._id %>CommentModal" data-toggle="modal">
                            <li className="content-options__item">
                                <i className="fas fa-trash-alt"></i><span>Delete Comment</span>
                            </li>
                            </a>
                                <a className='content-options__link' href="#">
                                    <li className="content-options__item">
                                        <i className="fas fa-user-edit"></i> <span>Edit Comment</span> 
                                </li>
                            </a>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="comment__text">
                <p>{text}</p>
            </div>
            </section> 
            </Fragment>}
        </Fragment>
    )
}

export default Comment;



/* loading && (<Fragment>
    <section className="row comment mt-2"> 
    <header className="row profile__header">
        <div className="comment__thumb">
            <img src="images/default.png" alt="profile thumbnail" className="comment__thumb"/>
        </div>
        <div className="poster__name">
        <a className='anchor' href="/profile/">
            <p className='options'>{name}</p>
        </a>
        <span className='timestamp' > 

            24h
        </span>
        </div>
        <div className="content-options">
            <input type="checkbox" className="content-options__checkbox" id='option-toggle<%= comment._id %>' />
            <label htmlFor="option-toggle<%= comment._id %>">
                <i className="fa fa-cog options user-options" aria-hidden="true" ></i>
            </label>
            <nav className="content-options__nav">
                <ul className="content-options__list">
                    <a className='content-options__link' href="#" data-target="#delete<%= comment._id %>CommentModal" data-toggle="modal">
                    <li className="content-options__item">
                        <i className="fas fa-trash-alt"></i><span>Delete Comment</span>
                    </li>
                    </a>
                        <a className='content-options__link' href="#">
                            <li className="content-options__item">
                                <i className="fas fa-user-edit"></i> <span>Edit Comment</span> 
                        </li>
                    </a>
                </ul>
            </nav>
        </div>
    </header>
    <div className="comment__text">
        <p>This is hardcoded comment text</p>
    </div>
    </section> 
    </Fragment>)}s */