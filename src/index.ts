
import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';


/**
 * A plugin for the jupyterlab_epotheme
 */
const plugin: JupyterLabPlugin<void> = {
  id: 'jupyterlab_epotheme:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
    manager.register({
      name: 'LSST Minimal',
      load: function() {
        return manager.loadCSS('jupyterlab_epotheme/index.css');
      },
      unload: function() {
        return Promise.resolve(void 0);
      }
    });
  },
  autoStart: true
};


export default plugin;
