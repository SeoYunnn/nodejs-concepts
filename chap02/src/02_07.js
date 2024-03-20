var relationship1 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logFrineds: function () {
    var that = this; // relationshop1을 가리키는 this 를 that 에 저장
    this.friends.forEach(function (friend) {
    });
  },
};

relationship1.logFrineds();

const relationship2 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logFrineds() {
    this.friends.forEach(friend => {
      console.log(this.name, friend);
    });
  },
};

relationship2.logFrineds();