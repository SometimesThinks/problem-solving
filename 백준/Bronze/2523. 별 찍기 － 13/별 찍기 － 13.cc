#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 0; i < n; i++) {
        string stars;
        for (int j = 0; j < i + 1; j++) {
            stars += '*';
        }
        cout << stars << endl;
    }
    for (int i = n - 1; i > 0; i--) {
        string stars;
        for (int j = 0; j < i; j++) {
            stars += '*';
        }
        cout << stars << endl;
    }
    return 0;
}
