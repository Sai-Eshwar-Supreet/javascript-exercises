const removeFromArray = function(arr, ...filteredItems) {
    return arr.filter((item) => !filteredItems.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
