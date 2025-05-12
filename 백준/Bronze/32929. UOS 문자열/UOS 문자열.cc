#include <iostream>
using namespace std;

int main() {
    int x;
    cin >> x;
    int mod = x % 3;
    
    if (mod == 1) cout << 'U' << endl;
    else if (mod == 2) cout << 'O' << endl;
    else cout << 'S' << endl;
    return 0;
}