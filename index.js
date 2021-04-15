const _0x5ea4 = [
  'click',
  'spendingsItem_',
  'July',
  'May',
  'textContent',
  '\x22\x20class=\x22savingsItem\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>',
  '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22deleteButton_',
  'October',
  'August',
  '.resetStyle\x20button',
  'keyCode',
  '.spendingsTotal',
  'querySelector',
  'remove',
  '#header\x20h3',
  'spendingId',
  '<div\x20id=\x22spendingsItem_',
  'value',
  'keydown',
  'Budget\x20for\x20',
  '.expenseValue',
  'item',
  '.addSpendingItemList',
  '<div\x20id=\x22savingsItem_',
  'beforeend',
  '\x22>Delete</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>',
  '.spendingsAddActivity',
  'March',
  'push',
  '.addSavingItemList',
  'toUpperCase',
  'December',
  '.savingsTotal',
  'addEventListener',
  '.accumulatorValue',
  'deleteButtonSpending_',
  '.savingsAddActivity',
  'November',
  'September',
  'February',
  '\x22\x20class=\x22spendingsItem\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>',
  'savingId',
  'log',
  'focus',
  'getElementById',
  'reload',
  '.addSpending',
  'getFullYear',
  '\x22>Delete</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>',
  'insertAdjacentHTML',
  'getMonth',
];
(function (_0x2fb3b1, _0x5ea40c) {
  const _0x514984 = function (_0xda4ba6) {
    while (--_0xda4ba6) {
      _0x2fb3b1['push'](_0x2fb3b1['shift']());
    }
  };
  _0x514984(++_0x5ea40c);
})(_0x5ea4, 0x12c);
const _0x5149 = function (_0x2fb3b1, _0x5ea40c) {
  _0x2fb3b1 = _0x2fb3b1 - 0x0;
  let _0x514984 = _0x5ea4[_0x2fb3b1];
  return _0x514984;
};
const savingsActivity = document[_0x5149('0x12')](_0x5149('0x2a')),
  spendingsActivity = document['querySelector'](_0x5149('0x20')),
  expenseValue = document[_0x5149('0x12')](_0x5149('0x1a')),
  spendingsValue = document[_0x5149('0x12')]('.spendingsValue'),
  totalSavingsValue = document[_0x5149('0x12')](_0x5149('0x26')),
  totalSpendingsValue = document[_0x5149('0x12')](_0x5149('0x11')),
  setAccumulator = document[_0x5149('0x12')](_0x5149('0x28')),
  resetValue = document[_0x5149('0x12')](_0x5149('0xf'));
let savingId = 0x1,
  spendingId = 0x1,
  savingsTotal = 0x0,
  spendingTotal = 0x0,
  savingsArray = [],
  spendingsArray = [],
  accumulator;
class Savings {
  constructor(_0xda4ba6, _0x1c1102, _0x4e22aa) {
    (this[_0x5149('0x1b')] = _0xda4ba6),
      (this[_0x5149('0x17')] = _0x1c1102),
      (this[_0x5149('0x2f')] = _0x4e22aa);
  }
}
class Spendings {
  constructor(_0x53f813, _0x13fffa, _0x1b78ab) {
    (this[_0x5149('0x1b')] = _0x53f813),
      (this[_0x5149('0x17')] = _0x13fffa),
      (this['spendingId'] = _0x1b78ab);
  }
}
(addSavingItem = () => {
  if (savingsActivity[_0x5149('0x17')] !== '' && expenseValue[_0x5149('0x17')] !== '') {
    const _0x4319f1 = new Savings(
      savingsActivity[_0x5149('0x17')],
      expenseValue[_0x5149('0x17')],
      savingId++
    );
    console['log'](_0x4319f1);
    let _0x31d512 =
        _0x5149('0x1d') +
        _0x4319f1['savingId'] +
        _0x5149('0xb') +
        _0x4319f1[_0x5149('0x1b')][_0x5149('0x24')]() +
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>$' +
        _0x4319f1[_0x5149('0x17')] +
        _0x5149('0xc') +
        _0x4319f1[_0x5149('0x2f')] +
        _0x5149('0x1f'),
      _0x1744c0 = _0x5149('0x23');
    document[_0x5149('0x12')](_0x1744c0)[_0x5149('0x4')](_0x5149('0x1e'), _0x31d512),
      savingsArray[_0x5149('0x22')](_0x4319f1);
    _0x4319f1[_0x5149('0x17')] !== ''
      ? ((savingsTotal += parseInt(_0x4319f1[_0x5149('0x17')])),
        (totalSavingsValue[_0x5149('0xa')] = '$' + savingsTotal))
      : (totalSavingsValue[_0x5149('0xa')] = '$' + savingsTotal);
    document[_0x5149('0x32')]('deleteButton_' + _0x4319f1['savingId'])['addEventListener'](
      _0x5149('0x6'),
      () => deleteSavingItem(_0x4319f1[_0x5149('0x2f')], _0x4319f1[_0x5149('0x17')])
    ),
      (deleteSavingItem = (_0x23e97c, _0x4ec9d7) => {
        document['getElementById']('savingsItem_' + _0x23e97c)['remove'](),
          (savingsTotal -= parseInt(_0x4ec9d7)),
          (totalSavingsValue[_0x5149('0xa')] = '$' + savingsTotal),
          (setAccumulator[_0x5149('0xa')] = '');
      });
  }
  (savingsActivity['value'] = ''),
    (expenseValue[_0x5149('0x17')] = ''),
    savingsActivity[_0x5149('0x31')]();
}),
  (addSpendingItem = () => {
    if (spendingsActivity[_0x5149('0x17')] !== '' && spendingsValue[_0x5149('0x17')] !== '') {
      const _0x42f460 = new Spendings(
        spendingsActivity[_0x5149('0x17')],
        spendingsValue[_0x5149('0x17')],
        spendingId++
      );
      console[_0x5149('0x30')](_0x42f460);
      let _0x4dc96b =
          _0x5149('0x16') +
          _0x42f460[_0x5149('0x15')] +
          _0x5149('0x2e') +
          _0x42f460[_0x5149('0x1b')][_0x5149('0x24')]() +
          '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>$' +
          _0x42f460[_0x5149('0x17')] +
          '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22deleteButtonSpending_' +
          _0x42f460[_0x5149('0x15')] +
          _0x5149('0x3'),
        _0x525cbd = _0x5149('0x1c');
      document[_0x5149('0x12')](_0x525cbd)['insertAdjacentHTML'](_0x5149('0x1e'), _0x4dc96b),
        spendingsArray[_0x5149('0x22')](_0x42f460);
      _0x42f460[_0x5149('0x17')] !== ''
        ? ((spendingTotal += parseInt(_0x42f460[_0x5149('0x17')])),
          (totalSpendingsValue['textContent'] = '$' + spendingTotal))
        : (totalSpendingsValue['textContent'] = '$' + spendingTotal);
      document[_0x5149('0x32')](_0x5149('0x29') + _0x42f460[_0x5149('0x15')])[
        _0x5149('0x27')
      ](_0x5149('0x6'), () => deleteSpendingItem(_0x42f460[_0x5149('0x15')], _0x42f460['value'])),
        (deleteSpendingItem = (_0x4b4999, _0x19fb70) => {
          document['getElementById'](_0x5149('0x7') + _0x4b4999)[_0x5149('0x13')](),
            (spendingTotal -= parseInt(_0x19fb70)),
            (totalSpendingsValue[_0x5149('0xa')] = '$' + spendingTotal),
            (setAccumulator[_0x5149('0xa')] = '');
        });
    }
    (spendingsActivity[_0x5149('0x17')] = ''),
      (spendingsValue[_0x5149('0x17')] = ''),
      spendingsActivity[_0x5149('0x31')]();
  }),
  (resetFields = () => {
    location[_0x5149('0x0')]();
  }),
  document['querySelector']('.addSaving')[_0x5149('0x27')](_0x5149('0x6'), addSavingItem),
  expenseValue[_0x5149('0x27')](_0x5149('0x18'), _0x1c5cd6 => {
    if (_0x1c5cd6[_0x5149('0x10')] === 0xd && savingsActivity[_0x5149('0x17')] !== '')
      addSavingItem();
  }),
  document[_0x5149('0x12')](_0x5149('0x1'))[_0x5149('0x27')]('click', addSpendingItem),
  spendingsValue[_0x5149('0x27')](_0x5149('0x18'), _0x175f5a => {
    if (_0x175f5a['keyCode'] === 0xd && spendingsActivity[_0x5149('0x17')] !== '')
      addSpendingItem();
  });
let date = new Date(),
  year = date[_0x5149('0x2')](),
  month = date[_0x5149('0x5')]();
const months = [
  'Janauary',
  _0x5149('0x2d'),
  _0x5149('0x21'),
  'April',
  _0x5149('0x9'),
  'June',
  _0x5149('0x8'),
  _0x5149('0xe'),
  _0x5149('0x2c'),
  _0x5149('0xd'),
  _0x5149('0x2b'),
  _0x5149('0x25'),
];
let headerDate = _0x5149('0x19') + months[month] + ',' + year;
(document[_0x5149('0x12')](_0x5149('0x14'))['textContent'] = headerDate),
  document[_0x5149('0x12')]('.accumulator\x20button')[_0x5149('0x27')](_0x5149('0x6'), () => {
    (accumulator = savingsTotal - spendingTotal),
      (setAccumulator[_0x5149('0xa')] = '$' + accumulator);
  }),
  resetValue[_0x5149('0x27')](_0x5149('0x6'), resetFields);
