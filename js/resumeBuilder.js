var bio = {
  "name" : "Wolfgang Stöttinger",
  "role" : "Super Ninja",
  "contacts" : {
    "mobile": "+43 664 8149290",
    "email": "wolfgang.stoettinger@gmail.com",
    "github": "github.com/wstoettinger",
    "twitter": "@wo_sto",
    "location": "Vienna, Austria"
  },
  "welcomeMessage": "Create yourself :)",
  "skills": ["unknown"],
  "biopic": "images/me.jpg"
  // display function added later since functions shouldn't be part of pure JSON
};

var education = {
  "schools": [
    {
      "name": "Vienna University of Business and Economics",
      "location": "Vienna",
      "degree": "Master in Strategy, Innovation and Management Control",
      "majors": [ "Strategic Management", "Entrepreneurship", "Innovation", "Management Control" ],
      "dates": 2015,
      "url": "www.wu.ac.at"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Developer Nanodegree",
      "school": "Udacity",
      "date": 2015,
      "url": "www.udacity.com"
    }
  ]
  // display function added later since functions shouldn't be part of pure JSON
};

var work = {
  "jobs": [
    {
      "employer": "me",
      "title": "self employed", 
      "location": "Vienna, Austria",
      "dates": "01.07.2015 - now",
      "description": "just me ;)"
    },
    {
      "employer": "me",
      "title": "Job Nr 2", 
      "location": "London, UK",
      "dates": "01.01.2013 - 01.07.2015",
      "description": "also just me ;)"
    }
  ]
  // display function added later since functions shouldn't be part of pure JSON
};

var projects = {
  "projects": [
    {
      "title": "This is just a dummy",
      "dates": "01.07.2015 - now",
      "description": "too lazy to write something here",
      "images": [ "images/197x148.gif", "images/197x148.gif", "images/197x148.gif" ]
    },
    {
      "title": "And another dummy",
      "dates": "01.07.2015 - now",
      "description": "too lazy to write something here",
      "images": [ "images/197x148.gif", "images/197x148.gif" ]
    }
  ]
  // display function added later since functions shouldn't be part of pure JSON
};

//
// ### BIO
//
bio.display = function () {
  var DOMheader = $("#header");
  DOMheader.prepend(HTMLheaderRole.replace("%data%",bio.role));
  DOMheader.prepend(HTMLheaderName.replace("%data%", bio.name));

  var DOMcontacts = $("#topContacts")
  for (var contactKey in bio.contacts)  {
    DOMcontacts.append(HTMLcontactGeneric.replace("%contact%",contactKey).replace("%data%", bio.contacts[contactKey]));
  }

  DOMheader.append(HTMLbioPic.replace("%data%",bio.biopic));
  DOMheader.append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

  DOMheader.append(HTMLskillsStart);

  var DOMskills = $("#skills");
  for (var i = 0; i < bio.skills.length; i++)  {
    DOMskills.append(HTMLskills.replace("%data%",bio.skills[i]));
  }
}

//
// ### WORK
//
work.display = function () {
  var a = work.jobs; // this is just to be faster with copy & paste
  for (var i = 0; i < a.length; i++)  {
    var item = a[i];
    var HTML = 
      HTMLworkEmployer.replace("%data%", item.employer) +
      HTMLworkTitle.replace("%data%", item.title) +
      HTMLworkDates.replace("%data%", item.dates) +
      HTMLworkLocation.replace("%data%", item.location) + 
      HTMLworkDescription.replace("%data%", item.description);

    $("#workExperience").append(HTMLworkStart).children().last().append(HTML);
  }
}

//
// ### Projects
//
projects.display = function () {
  var a = projects.projects; // this is just to be faster with copy & paste
  for (var i = 0; i < a.length; i++)  {
    var item = a[i];
    var HTML = 
      HTMLprojectTitle.replace("%data%", item.title) +
      HTMLprojectDates.replace("%data%", item.dates) +
      HTMLprojectDescription.replace("%data%", item.description);
    
    for (var j = 0; j < item.images.length; j++) {
        HTML += HTMLprojectImage.replace("%data%", item.images[j]);
    }
    
    $("#projects").append(HTMLprojectStart).children().last().append(HTML);
  }
};

//
// ### Education
//
education.display = function () {

  // ## Schools
  $("#education").append(HTMLschools); // add the missing header for schools
  var a = education.schools; // this is just to be faster with copy & paste
  for (var i = 0; i < a.length; i++)  {
    var item = a[i];
    var HTML = 
      HTMLschoolName.replace("%data%", item.name) +
      HTMLschoolDegree.replace("%data%", item.degree) +
      HTMLschoolDates.replace("%data%", item.dates) +
      HTMLschoolLocation.replace("%data%", item.location);
    
    for (var j = 0; j < item.majors.length; j++) {
        HTML += HTMLschoolMajor.replace("%data%", item.majors[j]);
    }
    
    $("#education").append(HTMLschoolStart).children().last().append(HTML);
  }

  // ## Online Classes
  $("#education").append(HTMLonlineClasses); // add the missing header for online classes
  var a = education.onlineCourses; // this is just to be faster with copy & paste
  for (var i = 0; i < a.length; i++)  {
    var item = a[i];
    var HTML = 
      HTMLonlineTitle.replace("%data%", item.title) +
      HTMLonlineSchool.replace("%data%", item.school) +
      HTMLschoolDates.replace("%data%", item.date) +
      HTMLonlineURL.replace("%data%", item.url);
    
    $("#education").append(HTMLonlineClassStart).children().last().append(HTML);
  }
};


bio.display();
work.display();
projects.display();
education.display();

$("#map-div").append(googleMap);


