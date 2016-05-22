angular.module('starter.services', [])

.factory('Area', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var areas = [{
    id: "01",
    name: 'Airlines',
    lastText: 'You on your way?',
    face: '../img/Assets/1_SelectArea/Icon_1.png',
    colour:'#6eae44'
  }, {
    id: "02",
    name: 'Banking',
    lastText: 'Hey, it\'s me',
    face: '../img/Assets/1_SelectArea/Icon_2.png',
    colour:'#44ae85'
  }, {
    id: "03",
    name: 'Cosmetics',
    lastText: 'I should buy a boat',
    face: '../img/Assets/1_SelectArea/Icon_3.png',
    colour:'#44aaae'
  }, {
    id: "04",
    name: 'E-commerce',
    lastText: 'Look at my mukluks!',
    face: '../img/Assets/1_SelectArea/Icon_4.png',
    colour:'#446cae'
  }, {
    id: "05",
    name: 'Electricity',
    lastText: 'This is wicked good ice cream.',
    face: '../img/Assets/1_SelectArea/Icon_5.png',
    colour:'#4447ae'
  }, {
    id: "06",
    name: 'Finance',
    lastText: 'This is wicked good ice cream.',
    face: '../img/Assets/1_SelectArea/Icon_6.png',
    colour:'#6444ae'
  }, {
    id: "07",
    name: 'Food',
    lastText: 'This is wicked good ice cream.',
    face: '../img/Assets/1_SelectArea/Icon_7.png',
    colour:'#9444ae'
  }, {
    id: "08",
    name: 'Product',
    lastText: 'This is wicked good ice cream.',
    face: '../img/Assets/1_SelectArea/Icon_8.png',
    colour:'#ae447b'
  }, {
    id: "09",
    name: 'Telecom',
    lastText: 'This is wicked good ice cream.',
    face: '../img/Assets/1_SelectArea/Icon_9.png',
    colour:'#ae4453'
  }];

  return {
    all: function() {
      return areas;
    },
    remove: function(area) {
      areas.splice(areas.indexOf(area), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < areas.length; i++) {
        if (areas[i].id === parseInt(chatId)) {
          return areas[i];
        }
      }
      return null;
    }
  };
})

.factory('Activity', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var activities = [{
    id: "01",
    name: 'Lodge Complaint',
    lastText: 'You on your way?',
    face: '../img/Assets/2_SelectActivity/1.png',
    colour:'#01dde4'
  }, {
    id: "02",
    name: 'Know Laws & Rules',
    lastText: 'Hey, it\'s me',
    face: '../img/Assets/2_SelectActivity/2.png',
    colour:'#05bcc2'
  }, {
    id: "03",
    name: 'Know about Cosmetics',
    lastText: 'I should buy a boat',
    face: '../img/Assets/2_SelectActivity/3.png',
    colour:'#038a8e'
  }, {
    id: "04",
    name: 'Emergency Diagnosis Tips',
    lastText: 'Emergency Diagnosis Tips',
    face: '../img/Assets/2_SelectActivity/4.png',
    colour:'#037d81'
  }];

  return {
    all: function() {
      return activities;
    },
    remove: function(acti) {
      activities.splice(activities.indexOf(acti), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < activities.length; i++) {
        if (activities[i].id === parseInt(chatId)) {
          return activities[i];
        }
      }
      return null;
    }
  };
})

.factory('Problem', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var problems = [{
    id: "01",
    name: 'Cosmetics not of standard quality',
    lastText: 'You on your way?',
    face: '../img/Assets/3_SelectProblem/1.png',
    colour:'#01dde4'
  }, {
    id: "02",
    name: 'Misbranded Cosmetics',
    lastText: 'Hey, it\'s me',
    face: '../img/Assets/3_SelectProblem/2.png',
    colour:'#01dde4'
  }, {
    id: "03",
    name: 'Spurious (Duplicate) Cosmetics',
    lastText: 'I should buy a boat',
    face: '../img/Assets/3_SelectProblem/3.png',
    colour:'#01dde4'
  }, {
    id: "04",
    name: 'Adulterated Cosmetics',
    lastText: 'Emergency Diagnosis Tips',
    face: '../img/Assets/3_SelectProblem/4.png',
    colour:'#01dde4'
  }, {
    id: "04",
    name: 'Others',
    lastText: 'Emergency Diagnosis Tips',
    face: '../img/Assets/3_SelectProblem/5.png',
    colour:'#01dde4'
  }];

  return {
    all: function() {
      return problems;
    },
    remove: function(prob) {
      problems.splice(problems.indexOf(prob), 1);
    },
    get: function(prob) {
      for (var i = 0; i < problems.length; i++) {
        if (problems[i].id === parseInt(prob)) {
          return problems[i];
        }
      }
      return null;
    }
  };
})

.factory('Proof', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var proofs = [{
    id: "01",
    name: 'Type in Description',
    lastText: 'You on your way?',
    face: '../img/Assets/4_AddProof/1.png',
    colour:'#01dde4'
  }, {
    id: "02",
    name: 'Scan QR code or Barcode',
    lastText: 'Hey, it\'s me',
    face: '../img/Assets/4_AddProof/2.png',
    colour:'#01dde4'
  }, {
    id: "03",
    name: 'Capture Picture',
    lastText: 'I should buy a boat',
    face: '../img/Assets/4_AddProof/3.png',
    colour:'#01dde4'
  }];

  return {
    all: function() {
      return proofs;
    },
    remove: function(proof) {
      proofs.splice(proofs.indexOf(proof), 1);
    },
    get: function(proof) {proof
      for (var i = 0; i < problems.length; i++) {
        if (proofs[i].id === parseInt(proof)) {
          return proofs[i];
        }
      }
      return null;
    }
  };
})


