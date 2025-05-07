#include <iostream>
#include <string>
using namespace std;

int main() {
    string slogan;
    cin >> slogan;

    if (slogan == "SONGDO") {
        cout << "HIGHSCHOOL" << endl;
    } else if (slogan == "CODE") {
        cout << "MASTER" << endl;
    } else if (slogan == "2023") {
        cout << "0611" << endl;
    } else if (slogan == "ALGORITHM") {
        cout << "CONTEST" << endl;
    }
    return 0;
}
