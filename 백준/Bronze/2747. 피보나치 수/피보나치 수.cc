#include <iostream>
#include <vector>
using namespace std;

int fibonacci(int n, vector<int>& arr) {
    for (int i = 0; i <= n; i++) {
        if (i <= 1) arr[i] = i;
        else arr[i] = arr[i - 1] + arr[i - 2];
    }
    return 0;
}

int main() {
    int n;
    cin >> n;
    vector<int> memo(n + 1, -1);
    
    fibonacci(n, memo);
    cout << memo[n] << endl;
    return 0;
}
