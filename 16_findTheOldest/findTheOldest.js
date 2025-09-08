const findTheOldest = function (arr) {
  let oldest = {};
  arr.reduce((prevAge, user) => {
    if (!("yearOfDeath" in user)) {
      user.yearOfDeath = new Date().getFullYear();
    }
    age = user.yearOfDeath - user.yearOfBirth;
    if (age > prevAge) {
      oldest = user;
    }
    return age;
  }, 0);
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
