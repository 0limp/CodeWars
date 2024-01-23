function catchSignChange(arr) {
    let count = 0;
    arr.filter((e, i, arr) => {
        if (e >= 0 && arr[i + 1] < 0 || e < 0 && arr[i + 1] >= 0) {
            count++
        }
    })
    return count
}