/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';

describeComponent(
  'shell/desktop-panel',
  'ShellDesktopPanelComponent',
  {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  },
  function() {
    it('renders', function() {
      // creates the component instance
      let component = this.subject();
      // renders the component on the page
      this.render();
      expect(component).to.be.ok;
      expect(this.$()).to.have.length(1);
    });
  }
);