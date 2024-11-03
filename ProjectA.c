#include <stdio.h>
#include <errno.h>    // Include to get error code
#include <string.h>   // Include for strerror
// Function to display file contents
void displayMyfileContents(const char *filename) {
    FILE *fp;
    char ch;

    // Opening the file in read mode
    fp = fopen(filename, "r");

    // Checking if the file is opened successfully
    if (fp == NULL) {
        printf("Error while opening your file '%s':%s\n",filename,strerror(errno));  //Print the detailed error
        return;  // Exit the function if file opening failed
    }

    printf("The contents present in the file are printed below:\n");
    
    // Reading and printing each character until the end of the file
    while ((ch = fgetc(fp)) != EOF) {
        printf("%c", ch);
    }

    fclose(fp);  // Closing the file after reading
}

int main() {
    char filename[1000];

    printf("Enter the name of the file: ");
    scanf("%s", filename);

    // Displaying file contents
    displayMyfileContents(filename);

    return 0;
}
