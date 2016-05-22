angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$location) {
  $scope.goArea=function(){
    $location.path("tab/chats");
  }
})

.controller('ChatsCtrl', function($scope, Area) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.colours=['#6eae44','44ae85','#44aaae','#446cae','#4447ae'];

  $scope.areas = Area.all();
  $scope.remove = function(chat) {
    Area.remove(area);
  };
})

.controller('ActivityCtrl', function($scope, Activity) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  console.log(Activity);
  $scope.colours=['#6eae44','44ae85','#44aaae','#446cae','#4447ae'];

  $scope.activities = Activity.all();
  $scope.remove = function(chat) {
    Activity.remove(area);
  };
})

.controller('ProblemCtrl', function($scope, Problem,$location) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.notchecked=true;
  $scope.select=function(id){ 
    //if(!($(id).hasClass("checkbox-background"))){
    $("#"+id).hide().siblings(".check").css("display","inline-block").show();
    $scope.notchecked=false;

    //}
  };



  $scope.navigate=function(){
    $location.path("tab/proof");
  };

  $scope.problems = Problem.all();
  $scope.remove = function(chat) {
    Problem.remove(area);
  };
})

.controller('ProofCtrl', function($scope, Proof, $ionicPopover) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // popover
  // .fromTemplate() method
   var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

   $scope.popover = $ionicPopover.fromTemplate(template, {
     scope: $scope
   });

   // .fromTemplateUrl() method
   $ionicPopover.fromTemplateUrl('my-popover.html', {
     scope: $scope
   }).then(function(popover) {
     $scope.popover = popover;
   });


   $scope.openPopover = function($event) {
     $scope.popover.show($event);
   };
   $scope.closePopover = function() {
     $scope.popover.hide();
   };
   //Cleanup the popover when we're done with it!
   $scope.$on('$destroy', function() {
     $scope.popover.remove();
   });
   // Execute action on hide popover
   $scope.$on('popover.hidden', function() {
     // Execute action
   });
   // Execute action on remove popover
   $scope.$on('popover.removed', function() {
     // Execute action
   });

  $scope.iterate=0;
  $scope.thrdcheck=false;
  $scope.isDisable=true;

  $scope.camera=function(){
    $("#camera-image,.capture").addClass("hide");
    $("#camera-image-hidden").removeClass("hide");
    $scope.isDisable=false;
  }

  $scope.select=function(id,key){ 
    //if(!($(id).hasClass("checkbox-background"))){
    $("#"+id).hide().siblings(".check").css("display","inline-block").show();
    if(key==2){
      $scope.thrdcheck=true;
    }

    //}
  };

  $scope.proofs = Proof.all();
  $scope.remove = function(chat) {
    Proof.remove(area);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
