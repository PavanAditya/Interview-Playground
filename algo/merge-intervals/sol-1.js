function merge(intervals) {
    if (!intervals || intervals.length <= 1) return intervals || [];

    intervals.sort((a, b) => a[0] - b[0]); // Sort by start times

    const merged = [];
    let currentInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const nextInterval = intervals[i];

        if (nextInterval[0] <= currentInterval[1]) { // Overlap
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
        } else { // No overlap
            merged.push(currentInterval);
            currentInterval = nextInterval;
        }
    }

    merged.push(currentInterval); // Add the last interval

    return merged;
}

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Intervals [1,3] and [2,6] overlap, so they are merged into [1,6].

// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.   

// Example 3 (Edge Case - Empty Input):

// Input: intervals = []
// Output: []


// Solution Explanation:
// Sort the intervals by their start times.
// Iterate through the sorted intervals, merging overlapping intervals.
// If an interval overlaps with the current merged interval, update the end time of the merged interval.
// If no overlap, add the current merged interval to the result and start a new merged interval.

// Time Complexity: O(n log n) due to sorting.
// Space Complexity: O(n) in the worst case (if no intervals overlap, the merged array will store all intervals).