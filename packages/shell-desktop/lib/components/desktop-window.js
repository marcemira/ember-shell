import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/desktop-window';
import WindowElement from 'ember-shell/mixins/element/window';

export default Ember.Component.extend(WindowElement, {
  layout,
  tagName: 'shell-window',
  manager: Ember.inject.service('shell-manager'),

  init(){
    this._super(...arguments);
    this.set('app.window', this);
    this.updateStylesRenderPersist([
      { declaration: 'sizeable', property: 'size.width', value: 320 },
      { declaration: 'sizeable', property: 'size.height', value: 240 },
      { declaration: 'positionable', property: 'position.x', value: 50 },
      { declaration: 'positionable', property: 'position.y', value: 50 }
    ]);
  },

  moveToFront(){
    const appPid = this.get('app.pid');
    this.get('manager.apps').forEach( app => {
      if(appPid !== app.get('pid')) {
        app.get('window').updateStyleRenderPersist('positionable', 'position.z', 1);
      }
    });
    this.updateStyleRenderPersist('positionable', 'position.z', 2);
  },

  draggStartCallback(){
    this.moveToFront();
  }

});