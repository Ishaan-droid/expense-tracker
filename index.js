const _0x4e493d = _0x554e;
(function (_0x11c764, _0x13da3d) {
  const _0x4c1049 = _0x554e,
    _0x2c6660 = _0x11c764();
  while (!![]) {
    try {
      const _0x2b868c =
        (-parseInt(_0x4c1049(0x10b)) / 0x1) * (-parseInt(_0x4c1049(0x112)) / 0x2) +
        (-parseInt(_0x4c1049(0x121)) / 0x3) * (-parseInt(_0x4c1049(0x10f)) / 0x4) +
        -parseInt(_0x4c1049(0x10d)) / 0x5 +
        parseInt(_0x4c1049(0x120)) / 0x6 +
        parseInt(_0x4c1049(0x119)) / 0x7 +
        -parseInt(_0x4c1049(0x131)) / 0x8 +
        (parseInt(_0x4c1049(0x135)) / 0x9) * (parseInt(_0x4c1049(0x110)) / 0xa);
      if (_0x2b868c === _0x13da3d) break;
      else _0x2c6660['push'](_0x2c6660['shift']());
    } catch (_0x2ffeab) {
      _0x2c6660['push'](_0x2c6660['shift']());
    }
  }
})(_0x4237, 0x5247f);
const savingsActivity = document[_0x4e493d(0x133)]('.savingsAddActivity'),
  spendingsActivity = document[_0x4e493d(0x133)]('.spendingsAddActivity'),
  expenseValue = document[_0x4e493d(0x133)](_0x4e493d(0x126)),
  spendingsValue = document['querySelector'](_0x4e493d(0x12a)),
  totalSavingsValue = document[_0x4e493d(0x133)](_0x4e493d(0x113)),
  totalSpendingsValue = document[_0x4e493d(0x133)](_0x4e493d(0x101)),
  setAccumulator = document[_0x4e493d(0x133)]('.accumulatorValue'),
  resetValue = document['querySelector'](_0x4e493d(0x12b));
let savingId = 0x1,
  spendingId = 0x1,
  savingsTotal = 0x0,
  spendingTotal = 0x0,
  savingsArray = [],
  spendingsArray = [],
  accumulator;
function _0x4237() {
  const _0x56d9d9 = [
    '.addSaving',
    'beforeend',
    '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22deleteButtonSpending_',
    '.expenseValue',
    '.addSavingItemList',
    'focus',
    'keyCode',
    '.spendingsValue',
    '.resetStyle\x20button',
    'getMonth',
    'deleteButton_',
    'February',
    'value',
    'May',
    '3808168DWvqCt',
    'deleteButtonSpending_',
    'querySelector',
    '\x22>Delete</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>',
    '9dykCGS',
    '.addSpendingItemList',
    'push',
    'remove',
    'April',
    'September',
    '.spendingsTotal',
    'insertAdjacentHTML',
    'October',
    'spendingsItem_',
    'getElementById',
    'textContent',
    'getFullYear',
    'November',
    'item',
    'log',
    '1gqoyvO',
    'addEventListener',
    '3353815mEzNXs',
    'click',
    '230844gQxecc',
    '3383830MZnGeE',
    '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22deleteButton_',
    '340754WETFml',
    '.savingsTotal',
    '.accumulator\x20button',
    'Budget\x20for\x20',
    '\x22\x20class=\x22spendingsItem\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>',
    'Janauary',
    'reload',
    '1945664lBRTqa',
    'keydown',
    'savingId',
    'December',
    'toUpperCase',
    'spendingId',
    '\x22>Delete</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>',
    '3143772MVuXcc',
    '9hIOooE',
    '\x22\x20class=\x22savingsItem\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>',
  ];
  _0x4237 = function () {
    return _0x56d9d9;
  };
  return _0x4237();
}
class Savings {
  constructor(_0x3f926d, _0x274ca5, _0x22c9a8) {
    const _0xec6425 = _0x4e493d;
    (this[_0xec6425(0x109)] = _0x3f926d),
      (this['value'] = _0x274ca5),
      (this[_0xec6425(0x11b)] = _0x22c9a8);
  }
}
function _0x554e(_0x113c27, _0x5a46df) {
  const _0x423706 = _0x4237();
  return (
    (_0x554e = function (_0x554e9f, _0x15762b) {
      _0x554e9f = _0x554e9f - 0xfd;
      let _0x4f7745 = _0x423706[_0x554e9f];
      return _0x4f7745;
    }),
    _0x554e(_0x113c27, _0x5a46df)
  );
}
class Spendings {
  constructor(_0x2c9b62, _0x3aa42f, _0x4bd15b) {
    const _0x36f84e = _0x4e493d;
    (this[_0x36f84e(0x109)] = _0x2c9b62),
      (this[_0x36f84e(0x12f)] = _0x3aa42f),
      (this[_0x36f84e(0x11e)] = _0x4bd15b);
  }
}
const addSavingItem = () => {
    const _0x518243 = _0x4e493d;
    if (savingsActivity[_0x518243(0x12f)] !== '' && expenseValue['value'] !== '') {
      const _0x447162 = new Savings(
        savingsActivity[_0x518243(0x12f)],
        expenseValue[_0x518243(0x12f)],
        savingId++
      );
      let _0x1f2414 =
          '<div\x20id=\x22savingsItem_' +
          _0x447162[_0x518243(0x11b)] +
          _0x518243(0x122) +
          _0x447162[_0x518243(0x109)][_0x518243(0x11d)]() +
          '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>$' +
          _0x447162['value'] +
          _0x518243(0x111) +
          _0x447162['savingId'] +
          _0x518243(0x11f),
        _0xbdad4f = _0x518243(0x127);
      document[_0x518243(0x133)](_0xbdad4f)[_0x518243(0x102)](_0x518243(0x124), _0x1f2414),
        savingsArray[_0x518243(0xfd)](_0x447162);
      _0x447162['value'] !== ''
        ? ((savingsTotal += parseInt(_0x447162[_0x518243(0x12f)])),
          (totalSavingsValue[_0x518243(0x106)] = '$' + savingsTotal))
        : (totalSavingsValue[_0x518243(0x106)] = '$' + savingsTotal);
      document['getElementById'](_0x518243(0x12d) + _0x447162['savingId'])['addEventListener'](
        'click',
        () => _0x53853e(_0x447162[_0x518243(0x11b)], _0x447162[_0x518243(0x12f)])
      );
      const _0x53853e = (_0x2e6659, _0x4bae5e) => {
        const _0x43cea6 = _0x518243;
        document[_0x43cea6(0x105)]('savingsItem_' + _0x2e6659)[_0x43cea6(0xfe)](),
          (savingsTotal -= parseInt(_0x4bae5e)),
          (totalSavingsValue[_0x43cea6(0x106)] = '$' + savingsTotal),
          (setAccumulator[_0x43cea6(0x106)] = '');
      };
    }
    (savingsActivity[_0x518243(0x12f)] = ''),
      (expenseValue[_0x518243(0x12f)] = ''),
      savingsActivity[_0x518243(0x128)]();
  },
  addSpendingItem = () => {
    const _0x3735a5 = _0x4e493d;
    if (spendingsActivity[_0x3735a5(0x12f)] !== '' && spendingsValue[_0x3735a5(0x12f)] !== '') {
      const _0x1ed184 = new Spendings(
        spendingsActivity[_0x3735a5(0x12f)],
        spendingsValue[_0x3735a5(0x12f)],
        spendingId++
      );
      console[_0x3735a5(0x10a)](_0x1ed184);
      let _0x218bbd =
          '<div\x20id=\x22spendingsItem_' +
          _0x1ed184[_0x3735a5(0x11e)] +
          _0x3735a5(0x116) +
          _0x1ed184[_0x3735a5(0x109)][_0x3735a5(0x11d)]() +
          '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>$' +
          _0x1ed184[_0x3735a5(0x12f)] +
          _0x3735a5(0x125) +
          _0x1ed184[_0x3735a5(0x11e)] +
          _0x3735a5(0x134),
        _0x4e27d7 = _0x3735a5(0x136);
      document[_0x3735a5(0x133)](_0x4e27d7)[_0x3735a5(0x102)](_0x3735a5(0x124), _0x218bbd),
        spendingsArray[_0x3735a5(0xfd)](_0x1ed184);
      _0x1ed184[_0x3735a5(0x12f)] !== ''
        ? ((spendingTotal += parseInt(_0x1ed184[_0x3735a5(0x12f)])),
          (totalSpendingsValue[_0x3735a5(0x106)] = '$' + spendingTotal))
        : (totalSpendingsValue[_0x3735a5(0x106)] = '$' + spendingTotal);
      document['getElementById'](_0x3735a5(0x132) + _0x1ed184[_0x3735a5(0x11e)])[
        'addEventListener'
      ](_0x3735a5(0x10e), () =>
        _0x1d5b27(_0x1ed184[_0x3735a5(0x11e)], _0x1ed184[_0x3735a5(0x12f)])
      );
      const _0x1d5b27 = (_0x56a13c, _0x4640e4) => {
        const _0x1dc4be = _0x3735a5;
        document[_0x1dc4be(0x105)](_0x1dc4be(0x104) + _0x56a13c)[_0x1dc4be(0xfe)](),
          (spendingTotal -= parseInt(_0x4640e4)),
          (totalSpendingsValue[_0x1dc4be(0x106)] = '$' + spendingTotal),
          (setAccumulator[_0x1dc4be(0x106)] = '');
      };
    }
    (spendingsActivity[_0x3735a5(0x12f)] = ''),
      (spendingsValue['value'] = ''),
      spendingsActivity[_0x3735a5(0x128)]();
  },
  resetFields = () => {
    const _0x430996 = _0x4e493d;
    location[_0x430996(0x118)]();
  };
document[_0x4e493d(0x133)](_0x4e493d(0x123))[_0x4e493d(0x10c)](_0x4e493d(0x10e), addSavingItem),
  expenseValue[_0x4e493d(0x10c)](_0x4e493d(0x11a), _0x442572 => {
    const _0x1d7d91 = _0x4e493d;
    if (_0x442572[_0x1d7d91(0x129)] === 0xd && savingsActivity[_0x1d7d91(0x12f)] !== '')
      addSavingItem();
  }),
  document[_0x4e493d(0x133)]('.addSpending')['addEventListener'](_0x4e493d(0x10e), addSpendingItem),
  spendingsValue[_0x4e493d(0x10c)](_0x4e493d(0x11a), _0x124ebd => {
    const _0x4033c8 = _0x4e493d;
    if (_0x124ebd['keyCode'] === 0xd && spendingsActivity[_0x4033c8(0x12f)] !== '')
      addSpendingItem();
  });
let date = new Date(),
  year = date[_0x4e493d(0x107)](),
  month = date[_0x4e493d(0x12c)]();
const months = [
  _0x4e493d(0x117),
  _0x4e493d(0x12e),
  'March',
  _0x4e493d(0xff),
  _0x4e493d(0x130),
  'June',
  'July',
  'August',
  _0x4e493d(0x100),
  _0x4e493d(0x103),
  _0x4e493d(0x108),
  _0x4e493d(0x11c),
];
let headerDate = _0x4e493d(0x115) + months[month] + ',' + year;
(document[_0x4e493d(0x133)]('#header\x20h3')[_0x4e493d(0x106)] = headerDate),
  document[_0x4e493d(0x133)](_0x4e493d(0x114))[_0x4e493d(0x10c)]('click', () => {
    const _0x89c74e = _0x4e493d;
    (accumulator = savingsTotal - spendingTotal),
      (setAccumulator[_0x89c74e(0x106)] = '$' + accumulator);
  }),
  resetValue['addEventListener'](_0x4e493d(0x10e), resetFields);
