const findTheOldest = function(people) {
    const getValidYOD = (yod) => (yod ?? (new Date()).getFullYear());
    let oldest = people.reduce((oldest, person) =>{
        let oldestAge = getValidYOD(oldest.yearOfDeath) - oldest.yearOfBirth;
        let personAge = getValidYOD(person.yearOfDeath) - person.yearOfBirth;

        return oldestAge > personAge ? oldest : person;
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
