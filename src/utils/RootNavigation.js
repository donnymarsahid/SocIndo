// RootNavigation.js

import React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
export function push(name, params) {
  navigationRef.current.push(name, params)
}
export function reset(name, params) {
  navigationRef.current.reset({
    index: 0,
    routes: [{name: name}],
  })
}
