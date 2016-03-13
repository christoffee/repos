# repos

## My solution

I used Yeoman to build a simple angular project. I had 2 pages a 'repos' and 'repos detailed' page each with there own controllers.  I then added a service that allowed me to request the data from the github api and then cache it so that i could display the data on the details page with out requesting data again.

I used the orderBy filter to sort the repos by amount of stars the repos had.

## What I want to do next
I wanted to add
    -unit tests
    -empty states
    -styling to each of the pages

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
