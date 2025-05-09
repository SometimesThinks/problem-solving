#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a;
    cin >> b;

    cout << (a > b ? 1 : a < b ? -1 : 0) << endl;
    return 0;
}
