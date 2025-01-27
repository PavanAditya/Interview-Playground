function canAttendAllMeetings(intervals) {
    if (!intervals || intervals.length <= 1) return true;
  
    intervals.sort((a, b) => a[0] - b[0]); // Sort by start times
  
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] < intervals[i - 1][1]) {
        return false; // Overlap found
      }
    }
  
    return true;
}


// Solution Explanation:

// Sort the intervals by their start times.
// Iterate through the sorted intervals and check if the start time of the current meeting is less than the end time of the previous meeting. If it is, there's an overlap, and the person cannot attend all meetings.


// Time Complexity: O(n log n) due to sorting.
// Space Complexity: O(1) if the sorting is done in place (depending on the sorting algorithm implementation).