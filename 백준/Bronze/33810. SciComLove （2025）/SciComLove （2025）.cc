#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    string origin = "SciComLove";
    int cnt = 0;

    for (int i = 0; i < s.length(); i++) {
        if (origin[i] != s[i]) cnt++;
    }
    cout << cnt << endl;
    return 0;
}
