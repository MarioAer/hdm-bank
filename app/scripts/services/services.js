angular.module('swFrontApp')
  .factory('billDrawer', function () {
    return {
      draw : function (ammount) {
        var money = [
          { value : 100, quantity : 0, name: 'bill hundred' },
          { value : 50, quantity : 0, name: 'bill fifty' },
          { value : 20, quantity : 0, name: 'bill twenty' },
          { value : 10, quantity : 0, name: 'bill ten' },
          { value : 5, quantity : 0, name: 'bill five' },
          { value : 2, quantity : 0, name: 'bill two' },
          { value : 1, quantity : 0, name: 'bill one' },
          { value : 0.5, quantity : 0, name: 'coin c-fifty' },
          { value : 0.2, quantity : 0, name: 'coin c-twenty' },
          { value : 0.1, quantity : 0, name: 'coin c-ten' },
          { value : 0.05, quantity : 0, name: 'coin c-five' },
          { value : 0.01, quantity : 0, name: 'coin c-ten' }
        ]

        var divide = function (bills , step, value) {
          if (value > 0.009 && step < 11 ) {
            if (value > bills[step].value) {
              bills[step].quantity =  Math.floor(value / bills[step].value);
              value = value - bills[step].quantity * bills[step].value;
            }
            step = step + 1;
            divide(bills, step, value);
          } else {
            return bills;
          }
        }

        divide(money, 0, ammount);
        return money;

      }
    }
  })
