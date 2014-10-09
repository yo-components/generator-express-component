'use strict';

/* Endpoint defaluts */
module.exports.defaults = {
  'route': 'server/api/<%= name %>/index.js',
  'register-route': 'server/routes.js',
  'routes-needle': '// Insert routes below',
  'controller': 'server/api/<%= name %>/<%= name %>.controller.js',
  'route-url': '/api/<%= name %>',
  'pluralize-routes': true,

  'socket': 'server/api/<%= name %>/<%= name %>.socket.js',
  'insert-sockets': 'server/config/socketio.js',
  'sockets-needle': '// Insert sockets below'
};

/* Endpoint config prompts */
module.exports.prompts = function(when, whenRoute, whenSocket) {
  return [{
    name: 'route',
    message: 'What path should be used for endpoint routes',
    when: when('route')
  }, {
    name: 'register-route',
    message: 'What file should your endpoint routes be registered in',
    when: whenRoute('register-route')
  }, {
    name: 'routes-needle',
    message: 'What will be the insert point for registering routes',
    when: whenRoute('routes-needle')
  }, {
    name: 'controller',
    message: 'What path should be used for endpoint controllers',
    when: whenRoute('controller')
  }, {
    name: 'route-url',
    message: 'What url should be used for endpoints',
    when: whenRoute('route-url')
  }, {
    type: 'confirm',
    name: 'pluralize-routes',
    message: 'Should endpoint names be pluralized',
    when: whenRoute('pluralize-routes')
  }, {
    name: 'socket',
    message: 'What path should be used for endpoint sockets',
    when: when('socket')
  }, {
    name: 'insert-sockets',
    message: 'What file should your endpoint sockets be registered in',
    when: whenSocket('insert-sockets')
  }, {
    name: 'sockets-needle',
    message: 'What will be the insert point for registering sockets',
    when: whenSocket('sockets-needle')
  }];
};