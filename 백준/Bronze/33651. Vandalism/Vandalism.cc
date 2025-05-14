#include <iostream>
using namespace std;

int main() {
    string s;
    cin >> s;
    string origin = "UAPC";
    int check[4] = {0,};

    for (int i = 0; i < s.length(); i++) {
        if (s[i] == 'U') check[0] = 1;
        else if (s[i] == 'A') check[1] = 1;
        else if (s[i] == 'P') check[2] = 1;
        else if (s[i] == 'C') check[3] = 1;
    }
    for (int i = 0; i < 4; i++) {
        if (!check[i]) cout << origin[i];
    }
    cout << endl;
    return 0;
}