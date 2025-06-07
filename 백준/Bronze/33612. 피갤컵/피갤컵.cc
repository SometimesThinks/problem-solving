#include <iostream>
#include <map>
using namespace std;

int main() {
    int n;
    cin >> n;
    map <int, string> psCup = {
        {1, "2024 8"},
        {2, "2025 3"},
        {3, "2025 10"},
        {4, "2026 5"},
        {5, "2026 12"}
    };
    
    cout << psCup[n] << endl;
    return 0;
}