// that was a repetitive use of function!
    const returnFirstTwoDrivers = function (drivers) {
        return drivers.slice(0, 2);
    }

    const returnLastTwoDrivers = function (drivers) {
        return drivers.slice(2);
    }

    const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
    //so, you cannot re-declare a blocked-scope. And again, const can't be re-assigned or re-declared

    const createFareMultiplier = function (fareMultiplier) {
        return function (fareQuintupler) {
            return fareMultiplier * fareQuintupler;
        }
    }

    const fareDoubler = createFareMultiplier(2)
    const fareTripler = createFareMultiplier(3)

    const selectDifferentDrivers = function (drivers, arrayOfDrivers) {
        return arrayOfDrivers(drivers)
    }