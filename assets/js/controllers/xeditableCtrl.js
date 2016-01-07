'use strict';
/**
 * controller for xeditable
 */

app.controller('TextSimpleCtrl', ["$scope",
function($scope) {
	$scope.example = {
		name: 'awesome user'
	};
}]);
app.controller('SelectLocalCtrl', ["$scope", "$filter",
function($scope, $filter) {
	$scope.example = {
		status: 2
	};

	$scope.statuses = [{
		value: 1,
		text: 'status1'
	}, {
		value: 2,
		text: 'status2'
	}, {
		value: 3,
		text: 'status3'
	}, {
		value: 4,
		text: 'status4'
	}];

	$scope.showStatus = function() {
		var selected = $filter('filter')($scope.statuses, {
			value: $scope.example.status
		});
		return ($scope.example.status && selected.length) ? selected[0].text : 'Not set';
	};
}]);
app.controller('TextareaCtrl', ["$scope",
function ($scope) {
    var textData="Hello world, I'm Norms and this is my story."
    +"I'm a self motivated personality with high believe in God almighty. I try as much as possible to understand my place in life,"
    +"what I stand for and what I expect of/from life on the long run. Having a clear distinction of these aforementioned facts, "
    +"I tend to focus on what's important to me, my relationship with God Almighty, my family and their happiness all day long,"
    +"my relationship with others and the impression I create of myself to every single individual I come across day in day out."
    +"I try as much as possible to be the best I can be in anything I get involved with in life.I discovered early enough that "
    +"I'm an extremist, and by this I mean whatever I do, I go extra mile with it and it doesn't require a rocket scientist to figure me out." 
    +"Understanding this simple fact, I burn my energy on the good part of me (learning, teaching researching and creating solutions or at "
    +"least brain storm on solutions) and in no time people think of me a great personality worthy of being appreciated always , "
    +"at least I get that impression on most occasions with my encounters"
	$scope.example = {
		desc: textData
	};
}]);
app.controller('SelectRemoteCtrl', ["$scope", "$filter", "$http",
function($scope, $filter, $http) {
	$scope.example = {
		group: 4,
		groupName: 'admin' // original value
	};

	$scope.groups = [];

	$scope.loadGroups = function() {
		return $scope.groups.length ? null : $http.get('assets/api/groups.js').success(function(data) {
			$scope.groups = data.groups;
		});
	};

	$scope.$watch('example.group', function(newVal, oldVal) {
		if(newVal !== oldVal) {
			var selected = $filter('filter')($scope.groups, {
				id: $scope.example.group
			});
			$scope.example.groupName = selected.length ? selected[0].text : null;
		}
	});
}]);
app.controller('CheckboxCtrl', ["$scope",
function($scope) {
	$scope.example = {
		remember: true
	};
}]);
app.controller('ChecklistCtrl', ["$scope", "$filter",
function($scope, $filter) {
	$scope.example = {
		status: [2, 3]
	};

	$scope.statuses = [{
		value: 1,
		text: 'status1'
	}, {
		value: 2,
		text: 'status2'
	}, {
		value: 3,
		text: 'status3'
	}];

	$scope.showStatus = function() {
		var selected = [];
		angular.forEach($scope.statuses, function(s) {
			if($scope.example.status.indexOf(s.value) >= 0) {
				selected.push(s.text);
			}
		});
		return selected.length ? selected.join(', ') : 'Not set';
	};

}]);
app.controller('RadiolistCtrl', ["$scope", "$filter",
function($scope, $filter) {
	$scope.example = {
		status: 2
	};

	$scope.statuses = [{
		value: 1,
		text: 'status1'
	}, {
		value: 2,
		text: 'status2'
	}];

	$scope.showStatus = function() {
		var selected = $filter('filter')($scope.statuses, {
			value: $scope.example.status
		});
		return ($scope.example.status && selected.length) ? selected[0].text : 'Not set';
	};
}]);
app.controller('BsdateCtrl', ["$scope",
function($scope) {
	$scope.example = {
		dob: new Date(1984, 4, 15)
	};
}]);
app.controller('TypeaheadCtrl', ["$scope",
function($scope) {
	$scope.user = {
		state: 'Arizona'
	};

	$scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
}]);
app.controller('TextCustomizeCtrl', ["$scope",
function($scope) {
	$scope.user = {
		name: 'awesome user'
	};
}]);
app.controller('TextBtnCtrl', ["$scope",
function($scope) {
	$scope.user = {
		name: 'awesome user'
	};
}]);
app.controller('SelectNobuttonsCtrl', ["$scope", "$filter",
function($scope, $filter) {
	$scope.user = {
		status: 2
	};

	$scope.statuses = [{
		value: 1,
		text: 'status1'
	}, {
		value: 2,
		text: 'status2'
	}, {
		value: 3,
		text: 'status3'
	}, {
		value: 4,
		text: 'status4'
	}];

	$scope.showStatus = function() {
		var selected = $filter('filter')($scope.statuses, {
			value: $scope.user.status
		});
		return ($scope.user.status && selected.length) ? selected[0].text : 'Not set';
	};
}]);
app.controller('SelectMultipleCtrl', ["$scope", "$filter",
function($scope, $filter) {
	$scope.user = {
		status: [2, 4]
	};

	$scope.statuses = [{
		value: 1,
		text: 'status1'
	}, {
		value: 2,
		text: 'status2'
	}, {
		value: 3,
		text: 'status3'
	}, {
		value: 4,
		text: 'status4'
	}];

	$scope.showStatus = function() {
		var selected = [];
		angular.forEach($scope.statuses, function(s) {
			if($scope.user.status.indexOf(s.value) >= 0) {
				selected.push(s.text);
			}
		});
		return selected.length ? selected.join(', ') : 'Not set';
	};
}]); 