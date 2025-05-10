#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> divisors = {1};

    for (int i = 2; i < n + 1; i++) {
        if (n % i == 0) divisors.push_back(i);
        if (divisors.size() >= k) break;
    }
    if (divisors.size() >= k) cout << divisors[k - 1] << endl;
    else cout << 0 << endl;
    return 0;
}
