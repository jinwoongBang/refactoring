class Account {
  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) {
      result += this.overdraftCharge;
    }
    return result;
  }

  get overdraftCharge() {
    return this.type.overdraftCharge(this.daysOverdrawn);
    // return this.type.overdraftCharge(this);
  }
}

class AccountType {
  overdraftCharge(daysOverdrawn) {
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (daysOverdrawn <= 7) {
        return baseCharge;
      } else {
        return baseCharge + (daysOverdrawn - 7) * 0.85;
      }
    } else {
      return daysOverdrawn * 1.75;
    }
  }
}
// 소스 컨텍스트에서 가져와야할 데이터가 많다면,
// this 를 통해 모두 전달
// class AccountType {
//   overdraftCharge(account) {
//     if (this.type.isPremium) {
//       const baseCharge = 10;
//       if (account.daysOverdrawn <= 7) {
//         return baseCharge;
//       } else {
//         return baseCharge + (account.daysOverdrawn - 7) * 0.85;
//       }
//     } else {
//       return account.daysOverdrawn * 1.75;
//     }
//   }
// }
