'use strict';

/**
 * @ngdoc overview
 * @name Canvas
 * @description
 * # Canvas
 *
 * Main module of the application.
 */
angular
  .module('canvas', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

angular.module('canvas')
  .controller('MainCtrl', ["$scope", "$timeout", function ($scope,$timeout) {

    $scope.canvas = [];

    $scope.canvas[0] = {
      contentType:{"text":""},
      content:[
    ]}
    $scope.canvas[1] = {
      contentType:{"text":""},
      content:[
    ]}
    $scope.canvas[2] = {
      contentType:{"text":""},
      content:[
    ]}
    $scope.canvas[3] = {
      contentType:{text:'',frequency:''},
      content:[
    ]};
    $scope.canvas[4] = {
      contentType:{'text':'','frequency':''},
      content:[
    ]}
    $scope.canvas[5] = {
      contentType:{'text':'','frequency':''},
      content:[
    ]}
    $scope.canvas[6] = {
      contentType:{"text":""},
      content:[
    ]}
    $scope.canvas[7] = {
      contentType:{"text":""},
      content:[
    ]}
    $scope.canvas[8] = {
      contentType:{"text":""},
      content:[
    ]}
    $scope.canvas[9] = {
      contentType:{"text":""},
      content:[
      ]}
    $scope.canvas[10] = {
      contentType:{"text":""},
      content:[
      ]}
    $scope.load = function(){

      var canvas = localStorage.getItem("canvas");
      try {
        $scope.canvas = JSON.parse(canvas);
        alert("loaded")
      }catch(e){

      }

    }


    $scope.save = function(){
      localStorage.setItem("canvas",JSON.stringify($scope.canvas));
      alert("saved")

      }


  }]);

angular.module('canvas')
  .directive('list', function () {
    return {
      restrict: 'E',
      scope : {
        i: '=',
        canvas:'=',
        placeholder:'@',
        contentType:'@',
        style:'@'
      },
      templateUrl: 'list.html',
      link: function postLink(scope, element, attrs) {
      },
      controller : ["$scope", function($scope){
        $scope.addContent = function(canvas,obj){
          $scope.canvas.content.push(angular.copy(obj));
        }
        $scope.removeContent = function(canvas,index){
          $scope.canvas.content.splice(index,1);
        }


      }]
    };
  });

angular.module('canvas').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/account.html',
    "<p>This is the account view.</p>"
  );


  $templateCache.put('views/facebook.html',
    "<div class=\"row\"> <div class=\"col-md-12\"> <h1>SINGLE IMAGE ADS</h1> fips propertyid formattedapn apnseqnbr oldapn taxaccountnumber situsstdfullstreetaddress situsstdhousenbr situsstdhousenbrsuffix situsstddirectionleft situsstdstreet situsstdmode situsstddirectionright situsstdunittype situsstdunitnbr situsstdcity situsstdstate situsstdzip5 situsstdzip4 situsstdcarriercode situslatitude situslongitude propertyclassid stdlandusecode statelandusecode countylandusecode zoning situscensustract mobilehomeind timesharecode schooldistrictname lotsizefrontagefeet lotsizedepthfeet lotsizeacres lotsizesqft ownerstd1corpind ownerstd1lastname ownerstd1firstname ownerstd1middlename ownerstd1suffix ownerstd2corpind ownerstd2lastname ownerstd2firstname ownerstd2middlename ownerstd2suffix ownerstdname1full ownerstdname2full owneroccupied ownerstd1ownershiprights mailingstdfullstreetaddress mailingstdhousenbr mailingstdhousenbrsuffix mailingstddirectionleft mailingstdstreet mailingstdmode mailingstddirectionright mailingstdunittype mailingstdunitnbr mailingstdcity mailingstdstate mailingstdzip5 mailingstdzip4 mailingstdcarriercode mailingoptout assdtotalvalue assdlandvalue assdimprovementvalue markettotalvalue marketvalueland marketvalueimprovement taxamount taxyear taxdeliquentyear1 assdyear taxratecodearea schooltaxdistrict1code schooltaxdistrict2code schooltaxdistrict3code homesteadind veteranind disabledind widowind seniorind schoolcollegeind religiousind welfareind publicutilityind cemeteryind hospitalind libraryind buildingarea buildingareaind sumbuildingsqft sumlivingareasqft sumgrossareasqft sumadjareasqft sumbasementsqft sumgaragesqft yearbuilt effectiveyearbuilt bedrooms totalrooms bathtotalcalc bathfull bathsparcialnbr bathfixturesnbr airconditioningcode basementcode buildingclasscode buildingconditioncode constructiontypecode exteriorwallscode interiorwallscode fireplacecode floorcovercode garage heatcode heatingfueltypecode siteinfluencecode garageparkingnbr drivewaycode patiocode poolcode porchcode buildingqualitycode roofcovercode rooftypecode sewercode storiesnbrcode stylecode sumresidentialunits sumbuildingsnbr sumcommercialunits watercode lotcode lotnumber landlot block section district legalunit municipality subdivisionname subdivisionphasenbr subdivisiontractnbr meridian assessorsmapref1 legaldescription currentsaletransactionid currsaleinputdocnbr currsaleinputbook currsaleinputpage currsalerecordingdate currsalecontractdate currsaledocumenttype currsalesprice currsalebuyer1fullname currsalebuyer2fullname currsaleseller1fullname currsaleseller2fullname concurrmtg1inputdocnbr concurrmtg1inputbook concurrmtg1inputpage concurrmtg1recordingdt concurrmtg1loanamt concurrmtg1lender concurrmtg1term concurrmtg1loanduedt concurrmtg1adjorfix concurrmtg1loantype concurrmtg1typefinancing concurrmtg2inputdocnbr concurrmtg2inputbook concurrmtg2inputpage concurrmtg2recordingdt concurrmtg2loanamt concurrmtg2lender concurrmtg2term concurrmtg2loanduedt concurrmtg2adjorfix concurrmtg2loantype concurrmtg2typefinancing prevsaletransactionid prevsaleinputdocnbr prevsaleinputbook prevsaleinputpage prevsalerecordingdate prevsalecontractdate prevsaledocumenttype prevsalesprice prevsalebuyer1fullname prevsalebuyer2fullname prevsaleseller1fullname prevsaleseller2fullname prevmtg1inputdocnbr prevmtg1inputbook prevmtg1inputpage prevmtg1recordingdt prevmtg1loanamt prevmtg1lender prevmtg1term prevmtg1loanduedt prevmtg1adjrider prevmtg1loantype prevmtg1typefinancing totalopenliennbr totalopenlienamt mtg1transactionid mtg1recordingdt mtg1loanamt mtg1lender mtg1loanduedt mtg1adjrider mtg1loantype mtg1typefinancing mtg1lienposition mtg2transactionid mtg2recordingdt mtg2loanamt mtg2lender mtg2loanduedt mtg2adjrider mtg2loantype mtg2typefinancing mtg2lienposition mtg3transactionid mtg3recordingdt mtg3loanamt mtg3lender mtg3loanduedt mtg3adjrider mtg3loantype mtg3typefinancing mtg3lienposition mtg4transactionid mtg4recordingdt mtg4loanamt mtg4lender mtg4loanduedt mtg4adjrider mtg4loantype mtg4typefinancing mtg4lienposition final_value low_value high_value confidencescore standarddeviation valuationdate cltv vacantflag vacantflagdate fatimestamp faucidflag <div class=\"fb desktop-news-feed\" ng-model=\"interface\" data-droplets> db.prop.count( { \"geoJson\" : {\"$exists\":true},\"mailingstdzip5\":32828,\"mailingstdcarriercode\":\"C002\" }) </div> </div> <div class=\"col-md-12\"> <h1>CAROUSEL ADS </h1> <div class=\"fb carousel-ads\" ng-model=\"interface\" data-droplets> </div> <div class=\"block no-margin no-padding\"> <div class=\"fb carousel-ads\"> </div> </div> <div class=\"block no-margin no-padding\"> <div class=\"fb carousel-ads\"> </div> </div> <div class=\"block no-margin no-padding\"> <div class=\"fb carousel-ads\"> </div> </div> <div class=\"block no-margin no-padding\"> <div class=\"fb carousel-ads\"> </div> </div> </div> <div class=\"col-md-12\"> <h1>COVER IMAGE </h1> <div class=\"fb cover-image\"> </div> </div> <div class=\"col-md-12\"> <h1>PROFILE IMAGE </h1> <div class=\"fb profile-image\"> </div> </div> </div>"
  );


  $templateCache.put('views/login.html',
    "<p>This is the login view.</p>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"col-md-12\"> <div class=\"menu pull-right\"> <a class=\"btn btn-primary btn-xl\" ng-click=\"save()\">Save Canvas</a> <a class=\"btn btn-primary btn-xl\" ng-click=\"load()\">Load Canvas</a> </div> </div> <div class=\"col-md-12 red-bg white-text\"> <h3>Define customer segments, fit into customer limitations</h3> </div> <div class=\"col-md-4 red-border box\"> <h2>1. CUSTOMER SEGMENT(S)</h2> <list i=\"0\" canvas=\"canvas[0]\" placeholder=\"Who is your customer? eg. working parents of 0-5 y.o. kids\" style=\"red\"> </list> </div> <div class=\"col-md-4 red-border box\"> <h2>6. CUSTOMER LIMITATIONS <small>EG. BUDGET, DEVICES</small></h2> <list i=\"1\" canvas=\"canvas[1]\" placeholder=\"What limits your customers to act when problem occurs?\n" +
    "Spending power, budget, no cash in the pocket? Network connection? Available devices?\" style=\"red\"> </list> </div> <div class=\"col-md-4 red-border box\"> <h2>5. AVAILABLE SOLUTIONS <small>PLUSES & MINUSES</small></h2> <list i=\"2\" canvas=\"canvas[2]\" placeholder=\"Which solutions are available to the customer when he/she is facing the problem? What had he/she tried in the past? Pluses & minuses?\" style=\"red\"> </list> </div> <div class=\"col-md-12 orange-bg white-text\"> <h3> Focus on problem, tap into behavior, understand root cause </h3> </div> <div class=\"col-md-4 orange-border box\"> <h2>2. PROBLEMS / PAINS <small>+ ITS FREQUENCY</small></h2> <list i=\"3\" canvas=\"canvas[3]\" placeholder=\"Which problem do you solve for your customer? How often There could be more than one, explore different sides.\n" +
    "    eg. existing solar solutions for private houses are not considered a good investment (1).\" style=\"orange\"> </list> </div> <div class=\"col-md-4 orange-border box\"> <h2>9. ROOT / CAUSE OF PROBLEM</h2> <list i=\"4\" canvas=\"canvas[4]\" placeholder=\"What is the root of every problem from the list?\n" +
    "eg. People think that solar panels are bad investment right now, because they are too\n" +
    "expensive (1.1), and possible changes to the law might in uence the return of investment signi cantly and diminish the bene ts (1.2).\" style=\"orange\"> </list> </div> <div class=\"col-md-4 orange-border box\"> <h2>7. BEHAVIOR <small>+ ITS INTENSITY</small> </h2> <list i=\"5\" canvas=\"canvas[5]\" placeholder=\"What does your customer do about / around / directly How often does or indirectly related to the problem?\" style=\"orange\"> </list> </div> <div class=\"col-md-12 green-bg white-text\"> <h3>Identify strong triggers & emotions</h3> </div> <div class=\"col-md-4 green-border box\"> <div class=\"row\"> <div class=\"col-md-12\"> <h2>3. TRIGGERS</h2> </div> </div> <list i=\"6\" canvas=\"canvas[6]\" placeholder=\"What triggers customer to act?\n" +
    "    <br>\n" +
    "eg. seeing their neighbor installing solar panels (1.1), reading about innovative, more beautiful and ef cient solution (1.2)\" style=\"green\"> </list> <div class=\"row\"> <div class=\"col-md-12\"> <h2>4. EMOTIONS</h2> </div> </div> <list i=\"7\" canvas=\"canvas[7]\" placeholder=\"Which emotions do people feel before/after this problem is solved?\n" +
    "Use it in your communication strategy.<br>\n" +
    "\n" +
    "eg. frustration, blocking (can’t afford it) > boost, feeling smart, be an example for others (made a smart purchase)\" style=\"green\"> </list> </div> <div class=\"col-md-4 green-border box\"> <h2>10. YOUR SOLUTION</h2> <list i=\"8\" canvas=\"canvas[8]\" placeholder=\"\n" +
    "If you are working on existing business - write down existing solution  first,  fill in the canvas and check how much does it  fit reality.\n" +
    "<br>\n" +
    "<br>\n" +
    "If you are working on a new business proposition then keep it blank until you  fill in the canvas and come up with a solution that  fits within customer limitations, solves a problem and matches customer behaviour .\n" +
    "\n" +
    "\" style=\"green\"> </list> </div> <div class=\"col-md-4 green-border box\"> <h2>8. CHANNELS OF BEHAVIOR</h2> <div class=\"row\"> <div class=\"col-md-12\"> <h2>ONLINE</h2> </div> </div> <list i=\"9\" canvas=\"canvas[9]\" placeholder=\"Extract channels from Behavior block\" style=\"green\"> </list> <div class=\"row\"> <div class=\"col-md-12\"> <h2>OFFLINE</h2> </div> </div> <list i=\"9\" canvas=\"canvas[10]\" placeholder=\"Extract channels from Behavior block and use for customer development\" style=\"green\"> </list> </div>"
  );


  $templateCache.put('views/projects.html',
    "<div class=\"row\"> <p></p> <h1>Bootstrap Table Panel with Pagination</h1> <p>A simple example of how-to put a bordered table within a panel. Responsive, place holders in header/footer for buttons or pagination.</p> <p>Follow me <a href=\"https://twitter.com/asked_io\" target=\"_new\">@asked_io</a> & <a href=\"https://asked.io/\" target=\"_new\">asked.io</a>.</p> <p> </p><p> </p> <div class=\"col-md-12\"> <div class=\"panel panel-default panel-table\"> <div class=\"panel-heading\"> <div class=\"row\"> <div class=\"col col-xs-6\"> <h3 class=\"panel-title\">Panel Heading</h3> </div> <div class=\"col col-xs-6 text-right\"> <button type=\"button\" class=\"btn btn-sm btn-primary btn-create\">Create New</button> </div> </div> </div> <div class=\"panel-body\"> <table class=\"table table-striped table-bordered table-list\"> <thead> <tr> <th><em class=\"fa fa-cog\"></em></th> <th class=\"hidden-xs\">ID</th> <th>Name</th> <th>Email</th> </tr> </thead> <tbody> <tr> <td align=\"center\"> <a class=\"btn btn-default\"><em class=\"fa fa-pencil\"></em></a> <a class=\"btn btn-danger\"><em class=\"fa fa-trash\"></em></a> </td> <td class=\"hidden-xs\">1</td> <td>John Doe</td> <td>johndoe@example.com</td> </tr> </tbody> </table> </div> <div class=\"panel-footer\"> <div class=\"row\"> <div class=\"col col-xs-4\">Page 1 of 5 </div> <div class=\"col col-xs-8\"> <ul class=\"pagination hidden-xs pull-right\"> <li><a href=\"#\">1</a></li> <li><a href=\"#\">2</a></li> <li><a href=\"#\">3</a></li> <li><a href=\"#\">4</a></li> <li><a href=\"#\">5</a></li> </ul> <ul class=\"pagination visible-xs pull-right\"> <li><a href=\"#\">«</a></li> <li><a href=\"#\">»</a></li> </ul> </div> </div> </div> </div> </div></div>"
  );


  $templateCache.put('views/signup.html',
    "<div class=\"row\"> <div class=\"col-xs-6\"> <div class=\"well\"> <form id=\"loginForm\" method=\"POST\"> <div class=\"form-group\"> <label for=\"username\" class=\"control-label\">Username</label> <input type=\"text\" class=\"form-control\" name=\"username\" value=\"\" required title=\"Please enter your username\" placeholder=\"username\"> <span class=\"help-block\"></span> </div> <div class=\"form-group\"> <label for=\"password\" class=\"control-label\">Password</label> <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\" value=\"\" required title=\"Please enter your password\"> <span class=\"help-block\"></span> </div> <div id=\"loginErrorMsg\" class=\"alert alert-error hide\">Wrong username or password</div> <div class=\"checkbox\"> <label> <input type=\"checkbox\" name=\"remember\" id=\"remember\"> Remember login </label> <p class=\"help-block\">(if this is a private computer)</p> </div> <button type=\"submit\" value=\"login\" name=\"submit\" class=\"btn btn-success btn-block\">Login</button> </form> </div> </div> <div class=\"col-xs-6\"> <p class=\"lead\">Register now for <span class=\"text-success\">FREE</span></p> <ul class=\"list-unstyled\" style=\"line-height: 2\"> <li><span class=\"fa fa-check text-success\"></span> See all your orders</li> <li><span class=\"fa fa-check text-success\"></span> Shipping is always free</li> <li><span class=\"fa fa-check text-success\"></span> Save your favorites</li> <li><span class=\"fa fa-check text-success\"></span> Fast checkout</li> <li><span class=\"fa fa-check text-success\"></span> Get a gift <small>(only new customers)</small></li> <li><span class=\"fa fa-check text-success\"></span>Holiday discounts up to 30% off</li> </ul> <p><a href=\"./Register.jsp\" class=\"btn btn-info btn-block\">Yes please, register now!</a></p> </div> </div>"
  );

}]);
