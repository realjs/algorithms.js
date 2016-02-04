# How to become a contributor

- Always search for a related issue before starting a new issue.
- Always choose a concise, helpful issue name.
- Always stay on-topic. If you've got a new bug report or feature request, put it in its own issue.
- Always be polite to other people.
- Never post private information, such as torrent or tracker names, IP addresses, etc.

Issues that break the rules may be deleted and locked without warning.

## Contributor License Agreements

We'd love to accept your patches! Before we can take them, we
have to jump a couple of legal hurdles.

Please ensure that your contributions are licenced under an MIT Licence or have a licence that is compartible with the MIT Licence.



## How to prepare

* You need a [GitHub account](https://github.com/signup/free)
* Submit an [issue ticket](https://github.com/realjs/algorithms.js/issues) for your issue if there is no one yet.
    * Describe the issue and include steps to reproduce if it's a bug.
    * Ensure to mention the earliest version that you know is affected.
* If you are able and want to fix this, fork the repository on GitHub


## Make Changes

* In your forked repository, create a topic branch for your upcoming patch. (e.g. `feature--autoplay` or `bugfix--ios-crash`)
    * Usually this is based on the master branch.
    * Create a branch based on master; `git branch
    fix/master/my_contribution master` then checkout the new branch with `git
    checkout fix/master/my_contribution`.  Please avoid working directly on the `master` branch.
* Make sure you stick to the coding style that is used already.
* Make use of the `.editorconfig`-file if provided with the repository.
* Make commits of logical units and describe them properly.
* Check for unnecessary whitespace with `git diff --check` before committing.

* Submit tests to your patch / new feature so it can be tested easily.
* Assure nothing is broken by running all the tests.

## Submit Changes


1. Submit an issue describing your proposed change to the repo in question.
1. The repo owner will respond to your issue promptly.
1. Fork the desired repo, develop and test your code changes.
1. Ensure that your code adheres to Airbnb Ecmascript Style Guide. Refer to the
   [AirBnB: Javascript Styleguide](https://github.com/airbnb/javascript/) for the
   recommended coding standards for this organization.
1. Ensure that your code has an appropriate set of unit tests which all pass.
1. Submit a pull request.

## Additional Resources

* [General GitHub documentation](http://help.github.com/)
* [GitHub pull request documentation](http://help.github.com/send-pull-requests/)
* [Read the Issue Guidelines by @necolas](https://github.com/necolas/issue-guidelines/blob/master/CONTRIBUTING.md) for more details
