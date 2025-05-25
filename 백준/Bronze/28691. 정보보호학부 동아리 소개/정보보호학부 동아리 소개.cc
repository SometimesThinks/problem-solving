#include <iostream>
using namespace std;

int main() {
    char c;
    cin >> c;
    string club;

    if (c == 'M') club = "MatKor";
    else if (c == 'W') club = "WiCys";
    else if (c == 'C') club = "CyKor";
    else if (c == 'A') club = "AlKor";
    else club = "$clear";
    cout << club << endl;
    return 0;
}