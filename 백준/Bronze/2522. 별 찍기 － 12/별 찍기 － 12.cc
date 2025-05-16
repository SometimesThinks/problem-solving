#include <iostream>
#include <string>
using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 1; i < n + 1; i++) cout << (string(n - i, ' ') + string(i, '*')) << endl;
    for (int i = n - 1; i > 0; i--) cout << (string(n - i, ' ') + string(i, '*')) << endl;
    return 0;
}