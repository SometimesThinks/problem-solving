#include <iostream>
using namespace std;

int main() {
    int wave;
    cin >> wave;

    if (wave >= 620 && wave <= 780) cout << "Red" << endl;
    else if (wave >= 590) cout << "Orange" << endl;
    else if (wave >= 570) cout << "Yellow" << endl;
    else if (wave >= 495) cout << "Green" << endl;
    else if (wave >= 450) cout << "Blue" << endl;
    else if (wave >= 425) cout << "Indigo" << endl;
    else cout << "Violet" << endl;
    return 0;
}