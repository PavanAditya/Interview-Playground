### Meeting Rooms - Intervals

#### Problem Statement:

You are given an array of meeting time intervals where ```intervals[i] = [starti, endi]```. Determine if a person could attend all meetings.

#### Sample Input/Output:

**Sample Input 1**: intervals = [[0,30],[5,10],[15,20]]
**Sample Output 1**: false (Meetings overlap)

**Sample Input 2**: intervals = [[7,10],[2,4]]
**Sample Output 2**: true (Meetings don't overlap)

**Sample Input 3 (Edge Case - Empty Input)**: intervals = []
**Sample Output 3**: true (No meetings, so they can attend all)