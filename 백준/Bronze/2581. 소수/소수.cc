#include <cmath>
#include <iostream>
using namespace std;

bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i <= static_cast<int>(sqrt(n)); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    int m, n;
    cin >> m;
    cin >> n;
    int sum = 0;
    int min = 10001;
    // 소수인지 확인
    for (int i = m; i < n + 1; i++) {
        if (isPrime(i)) {
            if (i < min) min = i;
            sum += i;
        }
    }
    // sum > 0 -> 소수 존재
    if (sum) {
        cout << sum << endl;
        cout << min << endl;
    } else {
        cout << -1 << endl;
    }
    return 0;
}
