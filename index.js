function arraySubset(arr, sub) {
    if (sub.length > arr.length) {
        return false;
    }

    const arrCount = {};

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (arrCount[item]) {
            arrCount[item]++;
        } else {
            arrCount[item] = 1;
        }
    }

    for (let i = 0; i < sub.length; i++) {
        const currentItem = sub[i];
        if (!arrCount[currentItem]) { //it makes sure there is no items left
            return false;
        }

        arrCount[currentItem]--;
        if (arrCount[currentItem] === 0) {
            delete arrCount[currentItem];
        }
    }

    return true;
}
arraySubset([2, 1, 3], [1, 2, 3]);