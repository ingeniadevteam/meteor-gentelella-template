import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import { defaultLayout } from '/imports/ui/layout/layout.html';
import '/imports/ui/layout/layout.js';
import { sidebar } from '/imports/ui/sidebar/sidebar.html';
import '/imports/ui/sidebar/sidebar.js';
import { navbar } from '/imports/ui/navbar/navbar.html';
import '/imports/ui/navbar/navbar.js';
import { dashboard } from '/imports/ui/pages/dashboard/dashboard.html';
import '/imports/ui/pages/dashboard/dashboard.js';
import { footer } from '/imports/ui/footer/footer.html';
import '/imports/ui/footer/footer.js';

BlazeLayout.setRoot('body');

FlowRouter.route('/', {
  name: "Dashboard",
  action: () => {
    BlazeLayout.render('defaultLayout', {
      sidebar: "sidebar",
      navbar: "navbar",
      content: "dashboard",
      footer: "footer",
    });
  }
});
