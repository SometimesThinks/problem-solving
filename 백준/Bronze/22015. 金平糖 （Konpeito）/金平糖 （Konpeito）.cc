#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> candy(3);
    int cnt = 0;
    
    for (int i = 0; i < 3; i++) cin >> candy[i];
    sort(candy.begin(), candy.end());
    for (int i = 0; i < 2; i++) cnt += candy[2] - candy[i];
    cout << cnt << endl;
    return 0;
}