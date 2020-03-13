import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import ImageView from './ImageView/ImageView';

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact />
                <Route paths="/image/:id" component={ImageView} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;