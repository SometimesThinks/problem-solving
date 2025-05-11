#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> spies = {};
    int cnt = 0;

    for (int i = 0; i < 5; i++) {
        string line;
        getline(cin, line);
        if (line.find("FBI") != string::npos) {
            spies.push_back(i + 1);
            cnt++;
        };
    };
    // 결과 출력
    if (cnt) {
        for (int i = 0; i < cnt; i++) {
            cout << spies[i];
            if (i != cnt - 1) cout << ' ';
        }
        cout << endl;
    }
    else cout << "HE GOT AWAY!" << endl;
    return 0;
}
