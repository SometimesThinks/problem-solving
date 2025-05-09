#include <iostream>
#include <string>
#include <set>
using namespace std;

int main() {
    int n;
    cin >> n;
    string s;
    cin >> s;
    set<char> vowels = {'a', 'e', 'i', 'o', 'u'};
    int cnt = 0;

    for (int i = 0; i < n; i++) {
        if (vowels.count(s[i])) cnt++;
    }
    cout << cnt << endl;
    return 0;
}
