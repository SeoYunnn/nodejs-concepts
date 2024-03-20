const candyMachine = {
  status: {
    name: "node",
    count: 5,
  },
  getCandy: function () {
    this.status.count--;
    return this.status.count;
  },
};
const getCandy = candyMachine.getCandy;
const count = candyMachine.count;