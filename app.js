//Setting Parameters
const savingsActivity = document.querySelector('.savingsAddActivity');
const spendingsActivity = document.querySelector('.spendingsAddActivity');
const expenseValue = document.querySelector('.expenseValue');
const spendingsValue = document.querySelector('.spendingsValue');

const totalSavingsValue = document.querySelector('.savingsTotal');
const totalSpendingsValue = document.querySelector('.spendingsTotal');
const setAccumulator = document.querySelector('.accumulatorValue');
const resetValue = document.querySelector('.resetStyle button');

//Setting some defualt values
let savingId = 1;
let spendingId = 1;
let savingsTotal = 0;
let spendingTotal = 0;
let savingsArray = [];
let spendingsArray = [];
let accumulator;

//Declaring classes to create objects for Savings and Spendings
class Savings {
  constructor(item, value, savingId) {
    this.item = item;
    this.value = value;
    this.savingId = savingId;
  }
}

class Spendings {
  constructor(item, value, spendingId) {
    this.item = item;
    this.value = value;
    this.spendingId = spendingId;
  }
}

//Adding savings items to list

const addSavingItem = () => {
  if (savingsActivity.value !== '' && expenseValue.value !== '') {
    const savingItemObject = new Savings(savingsActivity.value, expenseValue.value, savingId++);
    //console.log(savingItemObject);
    let savingItem = `<div id="savingsItem_${savingItemObject.savingId}" class="savingsItem">
                        <p>${savingItemObject.item.toUpperCase()}</p>
                        <p>$${savingItemObject.value}</p>
                        <button id="deleteButton_${savingItemObject.savingId}">Delete</button>
                        </div>`;
    let element = '.addSavingItemList';

    //Adding item in list
    document.querySelector(element).insertAdjacentHTML('beforeend', savingItem);

    //Adding items to array
    savingsArray.push(savingItemObject);

    //Calulating Total Saving
    if (savingItemObject.value !== '') {
      savingsTotal += parseInt(savingItemObject.value);
      totalSavingsValue.textContent = `$${savingsTotal}`;
    } else {
      totalSavingsValue.textContent = `$${savingsTotal}`;
    }

    //Button to delete savings items from list
    document
      .getElementById(`deleteButton_${savingItemObject.savingId}`)
      .addEventListener('click', () =>
        deleteSavingItem(savingItemObject.savingId, savingItemObject.value)
      );

    //Deleting savings items from list.
    const deleteSavingItem = (id, value) => {
      //Deleting item from list
      document.getElementById(`savingsItem_${id}`).remove();

      //Calculating total savings
      savingsTotal -= parseInt(value);

      //Changing UI for savings
      totalSavingsValue.textContent = `$${savingsTotal}`;

      //Updating Accumulator
      setAccumulator.textContent = '';
    };
  }

  //Clearing values
  savingsActivity.value = '';
  expenseValue.value = '';
  savingsActivity.focus();
};

//Adding spending items to list

const addSpendingItem = () => {
  if (spendingsActivity.value !== '' && spendingsValue.value !== '') {
    const spendingItemObject = new Spendings(
      spendingsActivity.value,
      spendingsValue.value,
      spendingId++
    );
    console.log(spendingItemObject);
    let spendingItem = `<div id="spendingsItem_${
      spendingItemObject.spendingId
    }" class="spendingsItem">
                            <p>${spendingItemObject.item.toUpperCase()}</p>
                            <p>$${spendingItemObject.value}</p>
                            <button id="deleteButtonSpending_${
                              spendingItemObject.spendingId
                            }">Delete</button>
                            </div>`;
    let element = '.addSpendingItemList';

    //Adding item in list
    document.querySelector(element).insertAdjacentHTML('beforeend', spendingItem);

    //Adding items to array
    spendingsArray.push(spendingItemObject);

    //Calulating Total Spending
    if (spendingItemObject.value !== '') {
      spendingTotal += parseInt(spendingItemObject.value);
      totalSpendingsValue.textContent = `$${spendingTotal}`;
    } else {
      totalSpendingsValue.textContent = `$${spendingTotal}`;
    }

    //Button to delete Spending items from list
    document
      .getElementById(`deleteButtonSpending_${spendingItemObject.spendingId}`)
      .addEventListener('click', () =>
        deleteSpendingItem(spendingItemObject.spendingId, spendingItemObject.value)
      );

    //Deleting spendings items from list.
    const deleteSpendingItem = (id, value) => {
      //Deleting item from list
      document.getElementById(`spendingsItem_${id}`).remove();

      //Calculating total spendings
      spendingTotal -= parseInt(value);

      //Changing UI for spendings
      totalSpendingsValue.textContent = `$${spendingTotal}`;

      //Updating Accumulator
      setAccumulator.textContent = '';
    };
  }

  //Clearing values
  spendingsActivity.value = '';
  spendingsValue.value = '';
  spendingsActivity.focus();
};

//Resetting Values
const resetFields = () => {
  location.reload();
};

//Button to submit savings item

document.querySelector('.addSaving').addEventListener('click', addSavingItem);

expenseValue.addEventListener('keydown', event => {
  if (event.keyCode === 13 && savingsActivity.value !== '') addSavingItem();
});

//Button to submit spendings item
document.querySelector('.addSpending').addEventListener('click', addSpendingItem);

spendingsValue.addEventListener('keydown', event => {
  if (event.keyCode === 13 && spendingsActivity.value !== '') addSpendingItem();
});

//Updating date for header
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
const months = [
  'Janauary',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
let headerDate = `Budget for ${months[month]},${year}`;

document.querySelector('#header h3').textContent = headerDate;

//Updating Accumulator
document.querySelector('.accumulator button').addEventListener('click', () => {
  accumulator = savingsTotal - spendingTotal;
  setAccumulator.textContent = `$${accumulator}`;
});

//Resetting Values
resetValue.addEventListener('click', resetFields);
