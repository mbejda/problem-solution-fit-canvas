# ng-pagealert
Angularjs Full Width Animated Alert Box is a beatifull way to show your app user information, a succesfull product post message or a error when something went wrong.

# Requirements

- ([AngularJS](http://code.angularjs.org/1.2.1/angular.js))
- ([Bootstrap](https://github.com/twbs/bootstrap))
- ([angular-bootstrap](https://github.com/angular-ui/bootstrap))

# Installation

Installation is easy as ng-pagealert has minimal dependencies - only the AngularJS, Angular-UI Bootstrap and Twitter Bootstrap's CSS are required.

## Install with Bower
```sh
$ bower install --save ng-pagealert
```
Alternatively you can add it to your `bower.json` like this:
```
    dependencies: {
        "ng-pagealert": "latest"
    }
```
And then run `bower install`

# Usage

This will copy the ng-pagealert files into your `components` folder, along with its dependencies. Load the script and style files in your application:

To include the module into your app, first call the necessary .js files from your `index.html`

```
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
<script src="bower_components/ng-pagealert/dist/js/ng-pagealert.js"></script>
```
For the CSS Styling
```
<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap-theme.min.css">
<link rel="stylesheet" href="bower_components/ng-pagealert/dist/css/ng-pagealert.min.css">
```

Add the ngPageAlert module as a dependency to your application module:

    var app = angular.module('SuperAwesomeApp', ['ui.bootstrap',
    'ngPageAlert'])

To show the alerts messages, include the directive `<page-alert></page-alert>` into your root html template.

It's recommended to place it under the navbar but you can place it anywhere depending in where you want to show the messages.

Choose the controller and inject the dependency like this

    yourBaconCtrl.$inject = ['$scope', '$pageAlert'];

## Success message
To invoke a success page alert, you call the method:

    $pageAlert.success({msg:'Your awesome success message', ttl:1000});

- **msg**: A string with the message you want to bind into the alert
- **ttl**: Time of living value for the message to dissapear in miliseconds.

## Info message
To invoke a information page alert:

    $pageAlert.info({msg:'Info', ttl:500});

## Warning message
To invoke a information page alert:

    $pageAlert.warning({msg:'SPOILEER ALEEERT', ttl:500});

## Error message
To invoke a information page alert:

    $pageAlert.error({msg:'404, this module is too sexy to show', ttl:500});

Happy coding!
