"use strict";

function Person(name, friends) {
  this.name = name;
  this.friends = friends;
}

Person.prototype.displayFriends = function () {
  var _this = this;

  console.log("Listing friends for " + this.name);
  this.friends.forEach(function (friend) {
    console.log(friend + " is friends with " + _this.name);
  });
};
var steven = new Person("Steven", ["Jeff", "Josh", "Joe"]);
steven.displayFriends();
