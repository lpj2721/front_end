import React from 'react';
import { Router } from 'dva/router';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      name: 'IndexPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/IndexPage'));
        });
      },
    },
    {
      path: 'login',
      getComponent (nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/login'));
          cb(null, require('./routes/login/index'))
        }, 'login')
      },
    },
    {
      path: 'interface',
      name: 'InterfacePage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/Interface'));
          cb(null, require('./routes/Interface/Interface'));
        });
      },
    },
    {
      path: 'headerConfig',
      name: 'headerConfigPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          console.log(333);
          registerModel(app, require('./models/headerConfig'));
          cb(null, require('./routes/Interface/HeaderConfig'));
        });
      },
    },
  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
