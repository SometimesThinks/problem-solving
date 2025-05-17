#include <iostream>
using namespace std;

int main() {
    int toSchool, toPC, toAcademy, toHome;
    cin >> toSchool;
    cin >> toPC;
    cin >> toAcademy;
    cin >> toHome;
    int totalSec = toSchool + toPC + toAcademy + toHome;
    
    cout << totalSec / 60 << endl;
    cout << totalSec % 60 << endl;
    return 0;
}