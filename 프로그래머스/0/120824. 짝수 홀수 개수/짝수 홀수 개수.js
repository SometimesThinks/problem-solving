function solution(num_list) {
    return [num_list.filter((e) => e % 2 === 0).length, num_list.filter((e) => e % 2 === 1).length]
}