'use strict';

/**
 * @ngdoc overview
 * @name swFrontApp
 * @description
 * # swFrontApp
 *
 * Main module of the application.
 */
angular
  .module('swFrontApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ])
  .config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
      // general navigation
      'HOME': 'Home',
      'ACCOUNT': 'Account',
      'TRANSFER': 'Transfer',
      'ORDER': 'Standing Order',
      'HELP': 'Help',
      'SIGNOUT': 'Sign Out',
      // account
      'ACCOUNT_ACTION' : 'Your current Balance',
      'BALANCE' : 'Balance',
      'BALANCE_DESC' : 'Here you will be able to see your current account balance',
      // transfer
      'TRANSFER_ACTION' : 'Transfer',
      'TRANSFER_HEADER' : 'Transfering Money',
      'TRANSFER_DESC' : 'Doing a transfer involves giving part of you money to other person',
      'START_TRANSFER_BUTTON' : 'Start new trasfer',
      'TRANSFER_CANCEL' : 'Cancel - Keep my money',
      'TRANSFER_NEXT' : 'Continue to next step ',
      'TRANSFER_BACK' : 'Back to previous step',
      // transfer 1
      'TRANSFER1_ACTION' : 'Transfer : First Step',
      'TRANSFER1_HEADER' : 'For whom is the money?',
      'TRANSFER1_DESC' : 'Choose the person to whom you want to send the money',
      // transfer 2
      'TRANSFER2_ACTION' : 'Transfer : Second Step',
      'TRANSFER2_HEADER' : 'How much do you want to transfer to {{transfer_recipient}}?',
      'TRANSFER2_DESC' : 'Select the money amount you want to transfer, this amount will be will not be available to you afterwards',
      'TRANSFER2_INPUT' : 'type amount',
      // transfer 3
      'TRANSFER3_ACTION' : 'Transfer : Third Step',
      'TRANSFER3_HEADER' : 'Review',
      'TRANSFER3_DESC' : 'Check that every items is right',
      'TRANSFER3_SEL_OK' : 'Yes',
      'TRANSFER3_SEL_BAD' : 'No',
      'TRANSFER3_PAUSE' : 'Hold transfer - Print a copy for verification',
      // transfer 3
      'TRANSFER4_ACTION' : 'Transfer : Forth Step',
      'TRANSFER4_HEADER' : 'Security Code',
      'TRANSFER4_DESC' : 'Type your security PIN, the bank has send a PIN Code to you phone',
      'TRANSFER4_INPUT' : 'Type your PIN',
      //transfer 4
      'TRANSFER5_ACTION' : 'Transfer : Success',
      'TRANSFER5_HEADER' : 'The information bellow is important',
      'TRANSFER5_DESC' : 'You have sent the money to the other person',
      'TRANSFER5_MSG1' : 'Your Transfer was completed : {{transfer_recipient}} {{transfer_amount | currency:"EUR"}}',
      'TRANSFER5_MSG2' : 'You have so much money left : {{transfer_left | curreny:"EUR"}}',
      'TRANSFER5_ACTION1' : 'Go to Account',
      'TRANSFER5_ACTION2' : 'Print transfer confirmation'
    });

    $translateProvider.translations('de', {
      // general navigation
      'HOME': 'Start',
      'ACCOUNT': 'Kontostand',
      'TRANSFER': 'Überweisung',
      'ORDER': 'Dauerauftrag',
      'HELP': 'Hilfe',
      'SIGNOUT': 'Abmelden',
      // account
      'ACCOUNT_ACTION' : 'Ihrer Kontostand',
      'BALANCE' : 'Kontostand',
      'BALANCE_DESC' : 'Hier erfahren Sie wie viel Geld Sie in ihrem Konto haben.',
      // transfer
      'TRANSFER_ACTION' : 'Überweisung',
      'TRANSFER_HEADER' : 'Überweisung durchführen',
      'TRANSFER_DESC' : 'Bei einer Überweisung geben Sie einer anderen Person Teil von Ihrem Geld',
      'START_TRANSFER_BUTTON' : 'Zur Überweisung',
      'TRANSFER_CANCEL' : 'Abbrechen : Geld behalten',
      'TRANSFER_NEXT' : 'Weiter zum nächsten Schritt',
      'TRANSFER_BACK' : 'Zurück zum letzten Schritt',
      // transfer 1
      'TRANSFER1_ACTION' : 'Überweisung : Erster Schritt',
      'TRANSFER1_HEADER' : 'Wem möchten Sie Geld geben?',
      'TRANSFER1_DESC' : 'Wählen Sie die Person, wem möchten Sie das Geld überweisen.',
      // transfer 2
      'TRANSFER2_ACTION' : 'Überweisung : Zweiter Schritt',
      'TRANSFER2_HEADER' : 'Wieviel Geld möchten {{transfer_recipient}} geben?',
      'TRANSFER2_DESC' : 'Wählen Sie den Betrag, den Sie überweisen möchten.',
      'TRANSFER2_INPUT' : 'Geldbetrag eintippen',
      // transfer 3
      'TRANSFER3_ACTION' : 'Überweisung : Dritter Schritt',
      'TRANSFER3_HEADER' : 'Überprüfung',
      'TRANSFER3_DESC' : 'Überprüfen Sie die Eingaben, wenn ja bestätigen Sie die Eingabe.',
      'TRANSFER3_SEL_OK' : 'Ja',
      'TRANSFER3_SEL_BAD' : 'Nein',
      'TRANSFER3_PAUSE' : 'Noch nicht überweisen. Erst zur Überprüfung ausdrucken',
      // transfer 3
      'TRANSFER4_ACTION' : 'Überweisung : Letzter Schritt',
      'TRANSFER4_HEADER' : 'Sicherheit Überprüfung',
      'TRANSFER4_DESC' : 'Sie bekommen per SMS eine PIN, geben Sie diese ein.',
      'TRANSFER4_INPUT' : 'PIN Eingeben',
      //transfer 4
      'TRANSFER5_ACTION' : 'Überweisung : Bestätigung',
      'TRANSFER5_HEADER' : 'Die Überweisung wurde ausgeführt',
      'TRANSFER5_DESC' : 'Die Überweisung wurde ausgeführt, folgende Informationen sind wichtig',
      'TRANSFER5_MSG1' : 'Die Überweisung wurde ausgeführt, Sie haben {{transfer_recipient}} {{transfer_amount | currency:"EUR"}}',
      'TRANSFER5_MSG2' : 'Sie haben jetzt noch {{transfer_left | curreny:"EUR"}} auf Ihrem Konto.',
      'TRANSFER5_ACTION1' : 'Zum Kontostand',
      'TRANSFER5_ACTION2' : 'Bestätigung ausdrucken'
    });

    $translateProvider.preferredLanguage('en');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .when('/transfer', {
        templateUrl: 'views/transfer.html',
        controller: 'TransferCtrl'
      })
      .when('/order', {
        templateUrl: 'views/order.html',
        controller: 'OrderCtrl'
      })
      .when('/help', {
        templateUrl: 'views/help.html',
        controller: 'HelpCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
