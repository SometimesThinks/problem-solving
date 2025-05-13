#include <iomanip>
#include <iostream>
using namespace std;

int main() {
    float w, h;
    cin >> w >> h;

    cout << fixed << setprecision(1) << w * h * 0.5 << endl;
    return 0;
}