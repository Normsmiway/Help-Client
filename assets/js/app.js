/** 
  * declare 'nss' module with dependencies
*/
'use strict';
angular.module("nss", [
	'ngAnimate',
	'ngCookies',
	'ngStorage',
	'ngSanitize',
	'ngTouch',
	'ui.router',
	'ui.bootstrap',
	'oc.lazyLoad',
	'cfp.loadingBar',
	'ncy-angular-breadcrumb',
	'duScroll',
	'pascalprecht.translate',
]);