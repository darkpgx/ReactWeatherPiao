var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  //Need the following lifeCycle method to mount modal
  componentDidMount: function() {
    var {title, message} = this.props;
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    //The following code is added as react doesn't work too well with third party module such as Foundation
    //This will change jsx markup to string version
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    //Use ReactDOM.findDOMNode to locate current div and change html to modal
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {
    return(
      <div></div>
    );
  }
});

module.exports = ErrorModal;
