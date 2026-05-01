
function Merge()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N log N)";
    document.getElementById("Time_Average").innerText="Θ(N log N)";
    document.getElementById("Time_Best").innerText="Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(N)";

    c_delay=0;

    merge_sort(0, array_size - 1);

    enable_buttons();
}

function merge_sort(start, end)
{
    if (start < end)
    {
        var mid = Math.floor((start + end) / 2);
        
        merge_sort(start, mid);
        merge_sort(mid + 1, end);
        merge(start, mid, end);
    }
}

function merge(start, mid, end)
{
    var p = start;
    var q = mid + 1;
    var arr = [];
    var arr_index = 0;

    // Mark elements being compared
    for (var k = start; k <= end; k++)
    {
        div_update(divs[k], div_sizes[k], "yellow"); // Color update
    }

    // Merge two sorted subarrays
    while (p <= mid && q <= end)
    {
        if (div_sizes[p] <= div_sizes[q])
        {
            arr[arr_index++] = div_sizes[p++];
        }
        else
        {
            arr[arr_index++] = div_sizes[q++];
        }
    }

    // Copy remaining elements from left subarray
    while (p <= mid)
    {
        arr[arr_index++] = div_sizes[p++];
    }

    // Copy remaining elements from right subarray
    while (q <= end)
    {
        arr[arr_index++] = div_sizes[q++];
    }

    // Copy merged elements back to original array and update visualization
    for (var i = 0; i < arr.length; i++)
    {
        div_sizes[start + i] = arr[i];
        div_update(divs[start + i], div_sizes[start + i], "red"); // Height update
    }

    // Mark merged elements as sorted (green)
    for (var k = start; k <= end; k++)
    {
        div_update(divs[k], div_sizes[k], "green"); // Color update
    }
}
