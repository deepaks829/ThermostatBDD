Thermostat BDD
===============

Using Jasmine-JQuery to BDD a simple thermostat

The server.rb file can be used to serve the single page app:

```ruby
ruby server.rb
open http://localhost:9292/index.html # app
open http://localhost:9292/SpecRunner.html # tests
```

Or if you would like to run in chrome from the file system without [cross site scripting](http://en.wikipedia.org/wiki/Cross-site_scripting) issues:

1. Shut down any existing running instances of Google Chrome

2. Run the following commands (from the project root) in sequence
```sh
open -a Google\ Chrome --args --disable-web-security
open index.html # app
open SpecRunner.html # tests
```

Or if you are in a hurry here's a single line to get the tests running:

```
open -a Google\ Chrome --args --disable-web-security `pwd`/SpecRunner.html
```

