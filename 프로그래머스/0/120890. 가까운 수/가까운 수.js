function solution(array, n) {
    const diffs = [];

    array.sort((a, b) => a - b);
    array.forEach((e) => diffs.push(Math.abs(e - n)));

    return array[diffs.indexOf(Math.min(...diffs))];
}