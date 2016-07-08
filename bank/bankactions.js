import constants from './constants';

export default {
  deposit(amount) {
    return {type:constants.DEPOSIT_INTO_ACCOUNT, amount}
  },
  withdraw(amount) {
    return {type:constants.WITHDRAW_FROM_ACCOUNT, amount}
  }
}
