#include <iostream>
using namespace std;

int main() {
    int r, c;
    cin >> r;
    cin >> c;

    for (int i = 0; i < r; i++) {
        string row;
        for (int j = 0; j < c; j++) {
            row += '*';
        }
        cout << row << endl;
    }
    return 0;
}