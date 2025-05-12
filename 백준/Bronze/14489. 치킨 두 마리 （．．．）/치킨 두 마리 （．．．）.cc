#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    int c;
    cin >> c;
    int sum = a + b;

    cout << (sum >= 2 * c ? sum - 2 * c : sum) << endl;
    return 0;
}