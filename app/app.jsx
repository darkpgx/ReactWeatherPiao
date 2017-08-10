var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Load foundation: use loaders 'style!css!' to load foundation.min.css
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
