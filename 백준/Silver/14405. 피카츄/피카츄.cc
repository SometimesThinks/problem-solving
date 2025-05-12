#include <iostream>
#include <unordered_set>
using namespace std;

int main() {
    string s;
    cin >> s;
    unordered_set<string> pron = {"pi", "ka", "chu"};
    string temp;

    for (int i = 0; i < s.length(); i++) {
        temp += s[i];
        if (pron.count(temp)) temp = "";
    }
    cout << (temp.length() ? "NO" : "YES") << endl;
    return 0;
}