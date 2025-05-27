#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    string label = "WelcomeToSMUPC";

    cout << label[(n - 1) % 14] << endl;
    return 0;
}