#include <ctime>
#include <iostream>
using namespace std;

int main() {
    time_t timer = time(NULL) + 9 * 3600;
    struct tm* pTimeInfo = gmtime(&timer);
    int year = pTimeInfo->tm_year + 1900;
    int month = pTimeInfo->tm_mon + 1;
    int day = pTimeInfo->tm_mday;

    cout << year << "-" << (month < 10 ? string("0") + to_string(month) : to_string(month)) << "-" << (day < 10 ? string("0") + to_string(day) : to_string(day)) << endl;
    return 0;
}