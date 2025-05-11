#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> factorial = {1};
    
    for (int i = 1; i < n + 1; i++) {
        factorial.push_back(factorial[i - 1] * (long long)i);
    }
    cout << factorial[n] << endl;
    return 0;
}
