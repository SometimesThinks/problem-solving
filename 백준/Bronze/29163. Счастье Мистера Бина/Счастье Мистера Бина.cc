#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> seq(n);
    int odd = 0;
    int even = 0;

    for (int i = 0; i < n; i++) {
        cin >> seq[i];
        if (seq[i] % 2) odd++;
        else even++;
    }
    cout << (even > odd ? "Happy" : "Sad") << endl;
    return 0;
}