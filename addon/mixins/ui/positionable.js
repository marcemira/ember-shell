import Ember from 'ember';

const defaults = {
  x: 0, y: 0,  z: 0
};

export default Ember.Mixin.create({
  
  position: Ember.Object.create(defaults),

  setPositions([ x, y, z ]){
    this.get('position').setProperties({ x, y, z });
    return this.getPositions();
  },

  getPositions(){
    return this.get('position').getProperties('x','y','z');
  }

});