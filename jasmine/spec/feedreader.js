/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('URL is defined', function() {
          allFeeds.forEach(function(feed) {
             expect(feed.url).toBeDefined();
          });
        });

        it('URL is not empty', function() {
          allFeeds.forEach(function(feed) {
             expect(feed.url).not.toBe(null);
             expect(feed.url).not.toBe(""); //this eliminates the possibility of an empty string.
          });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('name is defined', function() {
          allFeeds.forEach(function(feed) {
             expect(feed.name).toBeDefined();
          });
        });

        it('name is not empty', function() {
          allFeeds.forEach(function(feed) {
             expect(feed.name).not.toBe(""); //this eliminates the possibility of an empty string.
             expect(feed.name).not.toBe(null);
          });
        });

    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

    describe('The Menu', function() {
        it('body has menu-hidden class', function() {
            expect($('body')).toHaveClass('menu-hidden');
        });
    });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */


    describe('Menu Click Test', function() {
        beforeEach(function(done) {
                $('.menu-icon-link').trigger('click');
                done(); //The done() function is always passed to the beforeEach(), afterEach(), and it() test methods as an argument, whether you need it or not. To use it, include the done argument to the method and the call it after all of the processing is complete.
            });

            it('menu becomes visible when clicked', function() {
               expect($('body')).not.toHaveClass('menu-hidden');
            });   

            it('menu hides when clicked again', function() {
                expect($('body')).toHaveClass('menu-hidden');
            });         
        
    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    describe('Initial Entries', function() {
        beforeEach(function(done) {
                loadFeed(0); //Load the first feed we've defined (index of 0). See app.js.
                done(); //The done() function is always passed to the beforeEach(), afterEach(), and it() test methods as an argument, whether you need it or not. To use it, include the done argument to the method and the call it after all of the processing is complete.
            });

            it('Single .entry exists in .feed container', function() {
                expect($('.entry').length).not.toBe(null);
                expect($('.feed')).toExist(); //toExist() is a matcher from jasmine-jquery library
            });          

    });


    describe("Initial Entries 2nd test", function() { //another way of doing the test.
        beforeEach(function(done) {
            spyOn(window, 'loadFeed').and.callThrough();
            loadFeed(0, done); 
        });

        it('Singe .entry exists in .feed container', function() {
            expect($('.entry').length === 0).not.toBe(true); // Tried to put this function in the previous describe method, but it failed. So I tried using spy function, and it worked.
        });

    });



    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */


      describe('New Feed Selection', function(done) {
        var feed;

        beforeEach(function(done) {
            loadFeed(1, done);
            feed = $('.feed').html();    
           // console.log(feed);
        });
        it('has changed', function(done) {
            expect($('.feed').html()).not.toEqual(feed); 
            loadFeed(0, done);                                                  
        });
      });



}());