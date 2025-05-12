#include <iostream>
using namespace std;

int main() {
    char alpha;
    cin >> alpha;

    cout << (alpha == 'N' || alpha == 'n' ? "Naver D2" : "Naver Whale") << endl;
    return 0;
}