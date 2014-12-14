'use strict';

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
    'pascalprecht.translate',
    'ngDialog'
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
      // Error
      'ERROR': 'Error',
      'NAN' : 'Not an acceptable money ammount',
      'MUCH' : 'Not enough money in account',
      // home
      'HOME_WELCOME': 'Welcome to the HdM Bank Services',
      'HOME_PAUSED': 'Paused transactions',
      'HOME_PAUSED_NONE': "You don't have any paused transactions",
      'HOME_PAUSED_EXIST': "You have {{pausedTrans}} paused transactions",
      // account
      'ACCOUNT_ACTION' : 'Your current Balance',
      'BALANCE' : 'Balance',
      'BALANCE_DESC' : 'Here you will be able to see your current account balance',
      // transfer
      'TRANSFER_ACTION' : 'Transfer',
      'TRANSFER_HEADER' : 'Transfering Money',
      'TRANSFER_DESC' : 'Doing a transfer involves giving part of you money to other person',
      'START_TRANSFER_BUTTON' : 'Start new trasfer',
      'TRANSFER_CANCEL' : 'Cancel - Stop Transaction',
      'TRANSFER_CANCEL_MSG' : 'Are you sure, you want to stop this transaction?',
      'TRANSFER_CANCEL_MSG1' : 'Stop Transfer',
      'TRANSFER_CANCEL_MSG2' : 'Continue Transfer',
      'TRANSFER_NEXT' : 'Continue to next step &rarr;',
      'TRANSFER_BACK' : 'Back to previous step',
      'TRANSFER_PAUSED' : 'The transaction has been saved for later',
      'TRANSFER_CANCELED' : 'You just canceled the money transfer',
      // transfer 1
      'TRANSFER1_ACTION' : 'Transfer : First Step',
      'TRANSFER1_HEADER' : 'For whom is the money?',
      'TRANSFER1_DESC' : 'Choose the person to whom you want to send the money',
      'TRANSFER1_NEW' : 'Add new recipient',
      // transfer 2
      'TRANSFER2_ACTION' : 'Transfer : Second Step',
      'TRANSFER2_HEADER' : 'How much do you want to transfer to {{recipient}}?',
      'TRANSFER2_DESC' : 'Select the money amount you want to transfer, this amount will be will not be available to you afterwards',
      'TRANSFER2_INPUT' : 'type amount',
      // transfer 3
      'TRANSFER3_ACTION' : 'Transfer : Third Step',
      'TRANSFER3_HEADER' : 'Review',
      'TRANSFER3_DESC' : 'Check that every items is right',
      'TRANSFER3_REP' : 'You want to transfer money to {{recipient}}',
      'TRANSFER3_AMO' : '{{recipient}} will recieve {{amount | currency:"&euro;"}}',
      'TRANSFER3_PAUSE' : 'Hold transfer </br> Print  a copy for verification',
      'TRANSFER3_PAUSE_MSG' : 'You will be able to finish this transaction later',
      'TRANSFER3_PAUSE_MSG_OK' : 'Save for later',
      'TRANSFER3_PAUSE_MSG_BAD' : 'Continue at this moment',
      // transfer 4
      'TRANSFER4_ACTION' : 'Transfer : Forth Step',
      'TRANSFER4_HEADER' : 'Security Code',
      'TRANSFER4_DESC' : 'Type your security PIN, the bank has send a PIN Code to you phone',
      'TRANSFER4_INPUT' : 'Type your PIN',
      //transfer 5
      'TRANSFER5_ACTION' : 'Transfer : Success',
      'TRANSFER5_HEADER' : 'The information bellow is important',
      'TRANSFER5_DESC' : 'You have sent the money to the other person',
      'TRANSFER5_MSG1' : 'Your Transfer was completed : {{recipient}} {{amount | currency:"&euro;"}}',
      'TRANSFER5_MSG2' : 'You have so much money left : {{left | currency:"EUR"}}',
      'TRANSFER5_ACTION1' : 'Go to Account',
      'TRANSFER5_ACTIONSEL' : 'Keep conformation',
      'TRANSFER5_ACTIONSEL1' : 'Download to computer',
      'TRANSFER5_ACTIONSEL2' : 'Send to email',
      'TRANSFER5_ACTIONSEL3' : 'Print confirmation'
    });

    $translateProvider.translations('de', {
      // general navigation
      'HOME': 'Start',
      'ACCOUNT': 'Kontostand',
      'TRANSFER': 'Überweisung',
      'ORDER': 'Dauerauftrag',
      'HELP': 'Hilfe',
      'SIGNOUT': 'Abmelden',
      // Error
      'ERROR': 'Error',
      'NAN' : 'Nicht eine gültige geld Summe',
      'MUCH' : 'Sie haben nicht so viel Geld auf Ihrem Konto',
      // home
      'HOME_WELCOME': 'Willkommen',
      'HOME_PAUSED': 'Überweisungen zur überprüfung',
      'HOME_PAUSED_NONE': "Sie haben keine Überweisungen zur Überprüfung",
      'HOME_PAUSED_EXIST': "Sie haben {{pausedTrans}} zur Überprüfung Überweisungen",
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
      'TRANSFER_CANCEL_MSG' : 'Sind sie sicher?',
      'TRANSFER_CANCEL_MSG1' : 'Überweisung abbrechen',
      'TRANSFER_CANCEL_MSG2' : 'Überweisung weiterführen',
      'TRANSFER_NEXT' : 'Weiter zum nächsten Schritt &rarr;',
      'TRANSFER_BACK' : 'Zurück zum letzten Schritt',
      'TRANSFER_PAUSED' : 'Die Überweisung wurde für später gespeichert',
      'TRANSFER_CANCELED' : 'Die Überweisung wurde abgebrochen',
      // transfer 1
      'TRANSFER1_ACTION' : 'Überweisung : Erster Schritt',
      'TRANSFER1_HEADER' : 'Wem möchten Sie Geld geben?',
      'TRANSFER1_DESC' : 'Wählen Sie die Person, wem möchten Sie das Geld überweisen.',
      'TRANSFER1_NEW' : 'Neuer Empfänger',
      // transfer 2
      'TRANSFER2_ACTION' : 'Überweisung : Zweiter Schritt',
      'TRANSFER2_HEADER' : 'Wieviel Geld möchten {{recipient}} geben?',
      'TRANSFER2_DESC' : 'Wählen Sie den Betrag, den Sie überweisen möchten.',
      'TRANSFER2_INPUT' : 'Geldbetrag eintippen',
      // transfer 3
      'TRANSFER3_ACTION' : 'Überweisung : Dritter Schritt',
      'TRANSFER3_HEADER' : 'Überprüfung',
      'TRANSFER3_DESC' : 'Überprüfen Sie die Eingaben, wenn ja bestätigen Sie die Eingabe.',
      'TRANSFER3_REP' : 'Sie möchten an {{recipient}} Geld überweisen',
      'TRANSFER3_AMO' : '{{recipient}} wird von Ihnen {{amount | currency:"&euro;"}} bekommen',
      'TRANSFER3_PAUSE' : 'Noch nicht überweisen. Erst </br> zur Überprüfung ausdrucken',
      'TRANSFER3_PAUSE_MSG' : 'Die Überweisung wird für später gespeichert',
      'TRANSFER3_PAUSE_MSG_OK' : 'Für später speichern',
      'TRANSFER3_PAUSE_MSG_BAD' : 'Überweisung weiterführen',
      // transfer 4
      'TRANSFER4_ACTION' : 'Überweisung : Letzter Schritt',
      'TRANSFER4_HEADER' : 'Sicherheit Überprüfung',
      'TRANSFER4_DESC' : 'Sie bekommen per SMS eine PIN, geben Sie diese ein.',
      'TRANSFER4_INPUT' : 'PIN Eingeben',
      //transfer 5
      'TRANSFER5_ACTION' : 'Überweisung : Bestätigung',
      'TRANSFER5_HEADER' : 'Die Überweisung wurde ausgeführt',
      'TRANSFER5_DESC' : 'Die Überweisung wurde ausgeführt, folgende Informationen sind wichtig',
      'TRANSFER5_MSG1' : 'Die Überweisung wurde ausgeführt, Sie haben {{recipient}} {{amount | currency:"EUR"}}',
      'TRANSFER5_MSG2' : 'Sie haben jetzt noch {{left | currency:"&euro;"}} auf Ihrem Konto.',
      'TRANSFER5_ACTION1' : 'Zum Kontostand',
      'TRANSFER5_ACTIONSEL' : 'Keep conformation',
      'TRANSFER5_ACTIONSEL1' : 'Bestätigung herunterladen',
      'TRANSFER5_ACTIONSEL2' : 'Als Anhang per Email schicken',
      'TRANSFER5_ACTIONSEL3' : 'Bestätigung ausdrucken'
    });

    $translateProvider.preferredLanguage('en');
  }])
  .config(function ($routeProvider, $locationProvider) {
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
      })

  });
