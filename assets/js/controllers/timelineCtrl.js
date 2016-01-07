'use strict';
/**
 * controller for Timeline Trenddings
 * properties are:
 * day
 * dayName
 * month and year
 * title
 * body
 */


app.controller('timelineCtrl', ["$scope", function ($scope) {

    $scope.user = "Norms";
    $scope.setOtherId = function (value) {

        $scope.otherIdUser = value;
    };
    var exampleDate = new Date().setTime(new Date().getTime() - 240000 * 60);
    var day = exampleDate.getDay;

    $scope.timelineComments = [
      {
          id: 1,
          date: ((new Date()).getFullYear()),
            avar: 'assets/images/avatar-2-small.jpg',
            comment: 'Hello, this is really great, I have always been your admirer'
        },
      {
          id: 2,
          date: ((new Date()).getFullYear()),
          avar: 'assets/images/avatar-3-small.jpg',
          comment: 'Hello, this is really great, I have always been your admirer'
      },
      {
          id: 3,
          date: ((new Date()).getFullYear()),
          avar: 'assets/images/avatar-4-small.jpg',
          comment: 'Hello, this is really great, I have always been your admirer'
      },
      {
          id: 4,
          date: ((new Date()).getFullYear()),
          avar: 'assets/images/avatar-5-small.jpg',
          comment: 'Hello, this is really great, I have always been your admirer'
      }
    ];

    $scope.submitComment = function () {
        var newComment = {
            id: 10,
            date:((new Date()).getFullYear()),
            avar: 'assets/images/avatar-2-small.jpg',
            comment: $scope.userComment
        };
        $scope.Timelines[0].comments.push(newComment); //Add comment to the first user only
       // $scope.timelineComments.push(newComment);
        $scope.userComment = '';

    };
   

    $scope.Timelines = [
    {
        id: 1,
        avatar: "assets/images/avatar-1-small.jpg",
        day: "02",
        title: "My Story",
        date: exampleDate,
        content: "Hello world, I'm Norms and this is my story."
    + "I'm a self motivated personality with high believe in God almighty. I try as much as possible to understand my place in life,"
    + "what I stand for and what I expect of/from life on the long run.",
        user: "Norms",
        comments: [
            { user: $scope.timelineComments[2] },
            { user: $scope.timelineComments[1] }
        ]
    },
    {
        id: 2,
        avatar: "assets/images/avatar-1-small.jpg",
        day: "02",
        title: "My Story",
        date: exampleDate,
        content: "Hello world, I'm Norms and this is my story."
    + "I'm a self motivated personality with high believe in God almighty. I try as much as possible to understand my place in life,"
    + "what I stand for and what I expect of/from life on the long run.",
        user: "Norms",
        comments: [
           { user: $scope.timelineComments[1] },
           { user: $scope.timelineComments[2] }
        ]
            },
    {
        id: 3,
        avatar: "assets/images/avatar-1-small.jpg",
        day: "02",
        title: "My Story",
        date: exampleDate,
        content: "Hello world, I'm Norms and this is my story."
    + "I'm a self motivated personality with high believe in God Almighty. I try as much as possible to understand my place in life,"
    + "what I stand for and what I expect of/from life on the long run.",
        user: "Norms",
        comments: [
           { user: $scope.timelineComments[2] },
           { user: $scope.timelineComments[3] }
        ]
    },
    {
        id: 4,
        avatar: "assets/images/avatar-1-small.jpg",
        day: "02",
        title: "My Story",
        date: exampleDate,
        content: "Hello world, I'm Norms and this is my story."
    + "I'm a self motivated personality with high believe in God almighty. I try as much as possible to understand my place in life,"
    + "what I stand for and what I expect of/from life on the long run.",
        user: "Norms",
        comments: [
           { user: $scope.timelineComments[3] },
           { user: $scope.timelineComments[0] }
        ]
    }
    ];
  
    $scope.sendMessage = function () {
        var newMessage = {
            avatar: 'assets/images/avatar-1-small.jpg',
            title:'New Message',
            date: new Date(),
            content: $scope.timelineMessage,
            user: $scope.user
        };
        $scope.Timelines.push(newMessage);
        $scope.timelineMessage = '';

    };
}]);
