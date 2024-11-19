Pseudokode for bubblesort

BubbleSort(array)
    n = length(array)
    repeat
        swapped = false
        for i = 1 to n-1 do
            if array[i-1] > array[i] then
                swap(array[i-1], array[i])
                swapped = true
        end for
    until not swapped
end BubbleSort
