import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleView from './ArticleView';
import { fetchArticle } from '../state/actionCreators';
// import dashify from 'dashify';
import Main from '../partials/Main';

class ArticleContainer extends Component {
  componentDidMount() {
    if (!this.props.fields.title) {
      this.props.dispatch(fetchArticle(this.props.id));
    }
  }

  render() {
    const { title, subtitle, date, body, originalUrl } = this.props.fields;

    return (
      <Main>
        {title
          ? <ArticleView
              title={title}
              subtitle={subtitle}
              date={date}
              body={body}
              originalUrl={originalUrl}
            />
          : <div>Loading</div>}
      </Main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const articleData = state.article[ownProps.id]
    ? state.article[ownProps.id]
    : {};
  return {
    fields: articleData,
  };
};

export default connect(mapStateToProps)(ArticleContainer);
