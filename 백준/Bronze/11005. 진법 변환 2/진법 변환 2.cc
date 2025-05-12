#include <algorithm>
#include <iostream>
#include <unordered_map>
using namespace std;

string decToBase(int num, int base) {
    unordered_map<int, char> charToVal;
    for (int i = 0; i < 26; i++) charToVal[10 + i] = 'A' + i;
    int share = num;
    string newNum;
    
    while (share) {
        int remain = share % base;
        share = share / base;
        newNum += (remain < 10 ? '0' + remain : charToVal[remain]);
    };
    reverse(newNum.begin(), newNum.end());
    return newNum.length() ? newNum : "0";
}

int main() {
    int n, b;
    cin >> n >> b;

    cout << decToBase(n, b) << endl;
    return 0;
}