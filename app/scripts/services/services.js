angular.module('swFrontApp')
  .factory('billDrawer', function () {
    return {
      draw : function (ammount) {
        var currency = [
          { type:'bill', value : 500, quantity : 0, name: 'bill fivehundred' },
          { type:'bill', value : 100, quantity : 0, name: 'bill hundred' },
          { type:'bill', value : 50, quantity : 0, name: 'bill fifty' },
          { type:'bill', value : 20, quantity : 0, name: 'bill twenty' },
          { type:'bill', value : 10, quantity : 0, name: 'bill ten' },
          { type:'bill', value : 5, quantity : 0, name: 'bill five' },
          { type:'coin', value : 2, quantity : 0, name: 'coin two' },
          { type:'coin', value : 1, quantity : 0, name: 'coin one' },
          { type:'coin', value : 0.5, quantity : 0, name: 'coin c-fifty' },
          { type:'coin', value : 0.2, quantity : 0, name: 'coin c-twenty' },
          { type:'coin', value : 0.1, quantity : 0, name: 'coin c-ten' },
          { type:'coin', value : 0.05, quantity : 0, name: 'coin c-five' },
          { type:'coin', value : 0.01, quantity : 0, name: 'coin c-one' }
        ]

        var divide = function (currency, step, value) {
          if (value > 0.009 && step < 13 ) {
            if (value >= currency[step].value) {
              currency[step].quantity =  Math.floor(value / currency[step].value);
              value = (value - (currency[step].quantity * currency[step].value)).toFixed(2);
            }
            step = step + 1;
            divide(currency, step, value);
          } else {
            return currency;
          }
        }

        divide(currency, 0, parseFloat(ammount));
        return currency;

      }
    }
  })
