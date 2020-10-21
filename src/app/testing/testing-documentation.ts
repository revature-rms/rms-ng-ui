// ---------------------
// TESTING DOCUMENTATION
// ---------------------
 
// RESOURCES: 
    // https://jasmine.github.io/
    // https://angular.io/guide/testing
        // look at the stackblitz example code
    // https://github.com/angular/components/issues/4438
        // Testing with Angular Materials
        

// STATUS:

    // Services:
        // The intent was the mock REST methods, 
        // using spies and stubs to prevent an actual http request from going through,
        // but only GET methods seemed to work without issue. There's probably a way to implement
        // the post/put/deletes, but it doesn't appear to be the same as get (for some genius reason)
            // and jasmine / angular documentation didn't seem to help.
        // In some angular testing examples, they created full-on mock services, named something like
            // mock-user-service.spec.ts
        // which basically provided the same functionality as the regular service, 
        // except the the methods didn't handle http; only returned preset data. 
            // If it sounds fake, it's because it is, but it works.
        // Taking this a step further, instead of creating a mocked service class, I just defined
        // functions within the spec body itself 
            // (sometimes within the define block or outside it for scope)
        // which in essence returned the same value as we put in, then checked it.
        // Is it fake? Yes. But its the same thing as mocking an httpclient and telling it to return
        // literally the same values that you intend to check, so it isn't much different, 
        // just less complicated.

        // It's important to note that the tests look like pointless wastes of time
            // due to their simplicity,
        // but that's also because the classes and methods themselves are incredibly simple,
            // as we are, in essence, just doing REST methods and handling data. 
                // Minimal actual programming logic is included.

    //  Components:
        // These aren't done very well. 
        // Many components called get requests on init, which would throw errors
            // if the httpclient and other dependencies weren't injected corrently.
        // To save time, we just mocked the methods using functions found at the bottom of
        // the testing component while trying to test the same logic.
            // This explains why so many lines are commented out at the top of several components.


// ISSUES / TODO:
    // Code style varies. 
        // Ex: Some services return promises, others don't.
        // TODO:
            // Services / Components need to be standardized, at least with the copy-paste similar ones.

    // HTTP methods other than GET couldn't be mocked.
        // At least not in the same way as GET was. 
            // From employee service spec ts:

                //httpClientSpy.post.and.returnValue(asyncData(expectedData)); 
                    // //this.http.post is not a function <error
                //For some reason, the post/put/delete methods don't work in the same way the get methods do
                //for the time being, we're just using a function to return the expected data
                //which was already what the httpclientspy was doing in the first place

                //Referenced with following angular examples:
                //https://stackblitz.com/angular/dmjlxyljaqm?file=src%2Fapp%2Fmodel%2Ftesting%2Ftest-hero.service.ts
                //https://stackblitz.com/angular/oembpkqkdje?file=src%2Ftesting%2Fhttp-client.spec.ts
                    //fun fact: these examples implement spy get methods, but not post/put
        // TODO:
            // Figure out a better way? Good luck.
                // You'll probably feel like you're Indiana Jones on an adventure through the vast
                    // deserts of Jasmine/Karma documentation,
                    // searching for the forbidden texts on implementing put/post spy handling.
                // Try stackoverflow, because (at this moment) Angular conveniently decided not
                    // to include put/post/delete methods in their test examples.

    // Some of the tests didn't get fully updated with the components/services
        // toward the end of sprint.
        // TODO:
            // Update the tests.

    // Dependency injection should be more properly implemented in tests.  
        // It's cleaner than just using mock-methods which don't reflect on code coverage.
        // The biggest example are most of the components with commented-out define code blocks.
            // Since they GET data oninit, they would otherwise throw several errors in the test
        // TODO:
            // Inject mocked services (that the class depends on)
                // have those service methods return specified data with logic as needed
            // All so we can directly call the SUT's methods directly so it can reflect on coverage.
    
    // No current HTML-related tests
        // This is mostly to test whether components were properly populating
            // the data into the tables, etc.
        // It requires a lot of extra work to do, using harnesses and such.
        // But we stopped trying when it was found that there were current open issues
            // with testing Angular materials in this way.

        // TODO: 
            // If it is able to be implemented, implement it.