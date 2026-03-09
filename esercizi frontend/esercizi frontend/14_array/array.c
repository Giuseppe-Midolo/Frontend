#include <stdio.h>

int main() {
    // Declare and initialize an array of integers
    int numbers[5] = {10, 20, 30, 40, 50};
   
    // Print the elements of the array
    printf("Array elements:\n");
    for (int i = 0; i < 6; i++) {
        printf("%d\n", numbers[i]);
    }

    return 0;
}
