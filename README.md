# simple-genetic-algorithm
A demonstration of genetic algorithms in Javascript. By hosting the code on an Html 5 and Javascript platform, I hope to make the code more accessible and easier for users to change.

Q. Why not Java?
A. There are a lot of GA demos in Java. However, running Java applets is somewhat less common now that Java security problems have led many to uninstall Java. JavaScript remains ubiquitous in the modern HTML 5 environment.

The project aims to demonstrate best practices in HTML development in addition to the raw GA code. This includes the use of JQuery and JSON files for parameter settings.

The project aims to demonstrate more than the basic GA with roulette wheel selection, one-point crossover, and mutation. Again, this kind of demonstration has been done many times. In addition to the basic functions, this project will include a linkage to population dynamics. 

Most GA (or broader evolutionary computation, EC) systems use a statically sized populaiton. This made sense in tems of ease of creation in older, array-based implementations of the population. Of course, it isn't close to the biological inspiration for GA. Varying population size also is a source of changing selection pressure, if that is something you want to study. Certainly, population bottlenecks are known to be the cause of important features of real-world species.

The project also aims to associate population size with problem size. Many demonstrations have very basic evaluation functions that don't demonstrate issues in problem size vs. population size, or allow the user to build different functions out of subproblems.

In summary, the project aims to go beyond a clear and effective demonstration of the algorithm to explore why you would want to use such an algorith in the first place, and what are some of the tradeoffs involved.

Lessons learned

Putting the web worker script in a separate file means you must use a web server, even just a local one, to deliver the page to the browser. You can't read from file:// to open the page because you won't be able to read the web worker .js file from local storage due to security resrictions.

You also need to make sure your web server is set up to work effectively as a development environment. In particular, the server should tell the browser not to cache HTML, JavaScript, or CSS files. The following instructions can be added to your httpd.conf
or similar server config file. If you are not sure what to do, get help. This is copied from a few spots on the web, and some of the headers listed try to handle very old browser and http combinations.

<filesMatch "\.(html|js|css)$">
  FileETag None
  Header unset ETag
  Header set Cache-Control "max-age=0, no-cache, no-store, must-revalidate"
  Header set Pragma "no-cache"
  Header set Expires "Wed, 11 Jan 1984 05:00:00 GMT"
</filesMatch>

