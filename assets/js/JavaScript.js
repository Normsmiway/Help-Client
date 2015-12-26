// Registration routes(Norms)

state('registration', {
    url: '/registration',
    template: '<div ui-view class="fade-in-right-big smooth"></div>',
    abstract: true
}).state('registration.individual', {
    url: '/individual',
    templateUrl: "assets/views/help-pages/form_reg_individual.html",
    title: 'Individual Registration Form',
    ncyBreadcrumb: {
        label: 'Individual'
    },
    resolve: loadSequence('wizardCtrl')
}).state('registration.ngo', {
    url: '/ngo',
    templateUrl: "assets/views/help-pages/form_reg_organization.html",
    title: 'Individual Registration Form',
    ncyBreadcrumb: {
        label: 'Individual'
    },
    resolve: loadSequence('wizardCtrl')
}).state('registration.collationer', {
    url: '/collationer',
    templateUrl: "assets/views/help-pages/form_reg_collationer.html",
    title: 'Individual Registration Form',
    ncyBreadcrumb: {
        label: 'Individual'
    },
    resolve: loadSequence('wizardCtrl')
});