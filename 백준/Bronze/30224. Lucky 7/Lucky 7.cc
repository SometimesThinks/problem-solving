#include <iostream>
using namespace std;

int main() {
    string n;
    cin >> n;
    bool lucky = false;

    for (int i = 0; i < n.length(); i++) {
        if (n[i] == '7') lucky = true;
    }
    
    int intN = stoi(n);

    if (!lucky) {
        if (intN % 7) cout << 0 << endl;
        else cout << 1 << endl;
    } else {
        if (intN % 7) cout << 2 << endl;
        else cout << 3 << endl;
    }
    return 0;
}