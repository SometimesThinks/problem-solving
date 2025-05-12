#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int cnt;
    cin >> cnt;
    vector<int> divisors(cnt);

    for (int i = 0; i < cnt; i++) cin >> divisors[i];
    sort(divisors.begin(), divisors.end());
    cout << divisors[0] * divisors[cnt - 1] << endl;
    return 0;
}