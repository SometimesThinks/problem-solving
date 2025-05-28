#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> seq(n);
    long long sum = 0;

    for (int i = 0; i < n; i++) {
        cin >> seq[i];
        sum += seq[i];
    }
    sort(seq.begin(), seq.end());

    vector<long long> ans = {sum, sum - seq[n - 1] - seq[n - 2] + seq[n - 1] * seq[n - 2] * 2, sum - seq[0] - seq[1] + seq[0] * seq[1] * 2};

    cout << *max_element(ans.begin(), ans.end()) << endl;
    return 0;
}