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
  .config(function ( $httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  })
  .config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
      // general navigation
      'HOME': 'Home',
      'ACCOUNT': 'Account',
      'TRANSFER': 'Transfer',
      'ORDER': 'Standing Order',
      'HELP': 'Help',
      'SIGNOUT': 'Sign Out',
      'FONT' : 'Font Size',
      'COLOR' : 'Colours',
      'LANG' : 'Language',
      // Error
      'ERROR': 'Error',
      'NAN' : 'Please enter a correct amount, e.g. 99,50',
      'MUCH' : 'Not enough money in account',
      // home
      'HOME_WELCOME': 'Welcome to the HdM Bank Services',
      'HOME_PAUSED': 'Paused transactions',
      'HOME_PAUSED_NONE': "You don't have any paused transactions",
      'HOME_PAUSED_EXIST': "You have {{pausedTrans}} paused transactions",
      // account
      'ACCOUNT_ACTION' : 'Your current balance',
      'BALANCE' : 'Balance',
      'BALANCE_DESC' : 'Here you will be able to see your current account balance',
      // standing order / Dauerauftrag 
      'STANDORDER_ACTION': 'Standing Order',
      'STANDORDER_HEADER': 'Create a new standing order',
      'STANDORDER_DESC': 'A standing order is a way of telling your bank that is should transfer some money (always the same amount) to a specific person or organisation on a regular basis (for example, every month).',
      'STANDORDER_BUTTON_START': 'Start creating a standing order',
      // transfer
      'TRANSFER_ACTION' : 'Transfer',
      'TRANSFER_HEADER' : 'Transferring Money',
      'TRANSFER_DESC' : 'Making a transfer means that you give part of you money to another person',
      'START_TRANSFER_BUTTON' : 'Start new transfer',
      'TRANSFER_CANCEL' : 'Cancel - Stop Transaction',
      'TRANSFER_CANCEL_MSG' : 'Are you sure that you want to stop this transaction?',
      'TRANSFER_CANCEL_MSG1' : 'Stop Transfer',
      'TRANSFER_CANCEL_MSG2' : 'Continue Transfer',
      'TRANSFER_NEXT' : 'Continue to next step &rarr;',
      'TRANSFER_BACK' : 'Back to previous step',
      'TRANSFER_PAUSED' : 'The transaction has been saved for later',
      'TRANSFER_CANCELED' : 'You have just cancelled the money transfer',
      // transfer 1
      'TRANSFER1_ACTION' : 'Transfer : First Step',
      'TRANSFER1_HEADER' : 'Who is the money for?',
      'TRANSFER1_DESC' : 'Choose the person to whom you want to send the money',
      'TRANSFER1_NEW' : 'Add new recipient',
      // transfer 2
      'TRANSFER2_ACTION' : 'Transfer : Second Step',
      'TRANSFER2_HEADER' : 'How much do you want to transfer to {{recipient}}?',
      'TRANSFER2_DESC' : 'Select the amount of money you want to transfer; this amount will be will not be available to you afterwards',
      'TRANSFER2_INPUT' : 'type amount',
      // transfer 3
      'TRANSFER3_ACTION' : 'Transfer : Third Step',
      'TRANSFER3_HEADER' : 'Review',
      'TRANSFER3_DESC' : 'Check that every item is correct',
      'TRANSFER3_QUES' : 'Is this correct?',
      'TRANSFER3_REP' : 'You want to transfer money to {{recipient}}',
      'TRANSFER3_AMO' : '{{recipient}} will recieve {{amount | currency:"EUR"}}',
      'TRANSFER3_PAUSE' : 'Hold transfer </br> Print  a copy for verification',
      'TRANSFER3_PAUSE_MSG' : 'You will be able to finish this transaction later',
      'TRANSFER3_PAUSE_MSG_OK' : 'Save for later',
      'TRANSFER3_PAUSE_MSG_BAD' : 'Continue at this moment',
      // transfer 4
      'TRANSFER4_ACTION' : 'Transfer : Fourth Step',
      'TRANSFER4_HEADER' : 'Security Code',
      'TRANSFER4_DESC' : 'Type your security TAN. The bank has sent a PIN Code to your phone.',
      'TRANSFER4_MSG' : 'The bank has sent a TAN Code to your phone.',
      'TRANSFER4_INPUT' : 'Type your TAN',
      'TRANSFER4_NEXT' : 'Transfer money',
      //transfer 5
      'TRANSFER5_ACTION' : 'Transfer : Success',
      'TRANSFER5_HEADER' : 'The information below is important',
      'TRANSFER5_DESC' : 'You have sent the money to the other person',
      'TRANSFER5_MSG1' : 'Your transfer was completed : {{recipient}} {{amount | currency:"EUR"}}',
      'TRANSFER5_MSG2' : 'You have  {{left | currency:"EUR"}} left in your account.',
      'TRANSFER5_ACTION1' : 'Go to Account',
      'TRANSFER5_ACTIONSEL' : 'Keep conformation',
      'TRANSFER5_ACTIONSEL1' : 'Download to computer',
      'TRANSFER5_ACTIONSEL2' : 'Send by e-mail',
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
      'FONT' : 'Schriftgröße',
      'COLOR' : 'Farbe',
      'LANG' : 'Sprache',
      // Error
      'ERROR': 'Fehler',
      'NAN' : 'Bitte geben Sie den Überweisungsbetrag an (z.B. 99,50)',
      'MUCH' : 'Sie haben nicht genug Geld auf Ihrem Konto',
      // home
      'HOME_WELCOME': 'Willkommen',
      'HOME_PAUSED': 'Überweisungen zur Überprüfung',
      'HOME_PAUSED_NONE': "Sie haben zurzeit keine Überweisungen zur Überprüfung",
      'HOME_PAUSED_EXIST': "Sie haben {{pausedTrans}} Überweisungen zur Überprüfung",
      // account
      'ACCOUNT_ACTION' : 'Kontostand',
      'BALANCE' : 'Kontostand',
      'BALANCE_DESC' : 'Hier erfahren Sie wie viel Geld Sie in ihrem Konto haben.',
      // standing order / Dauerauftrag 
      'STANDORDER_ACTION': 'Dauerauftrag',
      'STANDORDER_HEADER': 'Einen neuen Dauerauftrag machen',
      'STANDORDER_DESC': 'Sie können einen Dauerauftrag einrichten, wenn Sie wollen, dass die Bank zum Beispiel jeden Monat immer den gleichen Betrag an eine bestimmte Person oder Firma bezahlt.',
      'STANDORDER_BUTTON_START': 'Jetzt einen neuen Dauerauftrag machen',
      // transfer
      'TRANSFER_ACTION' : 'Überweisung',
      'TRANSFER_HEADER' : 'Überweisung durchführen',
      'TRANSFER_DESC' : 'Bei einer Überweisung geben Sie einer anderen Person einen Teil von Ihrem Geld.',
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
      'TRANSFER2_HEADER' : 'Wieviel Geld möchten Sie {{recipient}} geben?',
      'TRANSFER2_DESC' : 'Wählen Sie den Betrag, den Sie überweisen möchten.',
      'TRANSFER2_INPUT' : 'Geldbetrag eintippen',
      // transfer 3
      'TRANSFER3_ACTION' : 'Überweisung : Dritter Schritt',
      'TRANSFER3_HEADER' : 'Überprüfung',
      'TRANSFER3_DESC' : 'Überprüfen Sie die Eingaben. Sind sie richtig? Wenn ja, bitte bestätigen Sie die Eingaben.',
      'TRANSFER3_QUES' : 'Richtig?',
      'TRANSFER3_REP' : 'Sie möchten an {{recipient}} Geld überweisen',
      'TRANSFER3_AMO' : '{{recipient}} wird von Ihnen {{amount | currency:"EUR"}} bekommen',
      'TRANSFER3_PAUSE' : 'Noch nicht überweisen. Erst </br> zur Überprüfung ausdrucken',
      'TRANSFER3_PAUSE_MSG' : 'Die Überweisung wird für später gespeichert',
      'TRANSFER3_PAUSE_MSG_OK' : 'Für später speichern',
      'TRANSFER3_PAUSE_MSG_BAD' : 'Überweisung weiterführen',
      // transfer 4
      'TRANSFER4_ACTION' : 'Überweisung : Letzter Schritt',
      'TRANSFER4_HEADER' : 'Geben Sie Ihre TAN ein',
      'TRANSFER4_DESC' : 'Sie können eine TAN nur einmal verwenden. Sie bekommen per SMS eine PIN; geben Sie diese ein.',
      'TRANSFER4_MSG' : 'Sie bekommen eine TAN von der Bank als SMS auf Ihr Handy zugeschickt.',
      'TRANSFER4_INPUT' : 'TAN Eingeben',
      'TRANSFER4_NEXT' : 'Geld überweisen',
      //transfer 5
      'TRANSFER5_ACTION' : 'Überweisung : Bestätigung',
      'TRANSFER5_HEADER' : 'Die Überweisung wurde ausgeführt',
      'TRANSFER5_DESC' : 'Die Überweisung wurde ausgeführt, folgende Informationen sind wichtig',
      'TRANSFER5_MSG1' : 'Die Überweisung wurde ausgeführt, Sie haben an {{recipient}} {{amount | currency:"EUR"}} überwiesen',
      'TRANSFER5_MSG2' : 'Sie haben jetzt noch {{left | currency:"EUR"}} auf Ihrem Konto.',
      'TRANSFER5_ACTION1' : 'Zum Kontostand',
      'TRANSFER5_ACTIONSEL' : 'Bestätigung speichern',
      'TRANSFER5_ACTIONSEL1' : 'Bestätigung herunterladen',
      'TRANSFER5_ACTIONSEL2' : 'Als Anhang per E-Mail schicken',
      'TRANSFER5_ACTIONSEL3' : 'Bestätigung ausdrucken'
    });

    $translateProvider.preferredLanguage('de');
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
