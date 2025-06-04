#include <iostream>
using namespace std;

int main() {
    int s, f;
    cin >> s;
    cin >> f;

    cout << (s <= f ? "high speed rail" : "flight") << endl;
    return 0;
}