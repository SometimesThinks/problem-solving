#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> factorial = {1, 1};

    for (long long i = 2; i < n + 1; i++) factorial.push_back(i * factorial[i - 1]);
    cout << factorial[n] / 7 / 24 / 60 / 60 << endl;
    return 0;
}