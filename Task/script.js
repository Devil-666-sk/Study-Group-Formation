// Sample groups array
const groups = [
  {
    name: 'Math Study Group',
    subject: 'Math',
    level: 10,
    availability: 'Weekends',
    visibility: 'public',
  },
  {
    name: 'Physics Enthusiasts',
    subject: 'Physics',
    level: 12,
    availability: 'Weekdays',
    visibility: 'private',
  },
]

// Search Groups Function
function searchGroups() {
  const subject = document.getElementById('subject').value
  const level = document.getElementById('level').value
  const availability = document.getElementById('availability').value

  const filteredGroups = groups.filter((group) => {
    return (
      group.subject.toLowerCase().includes(subject.toLowerCase()) &&
      (level ? group.level == level : true) &&
      group.availability.toLowerCase().includes(availability.toLowerCase())
    )
  })

  displayGroups(filteredGroups)
}

// Display Groups Function
function displayGroups(groups) {
  const groupList = document.getElementById('group-list')
  groupList.innerHTML = ''

  groups.forEach((group) => {
    const groupItem = document.createElement('div')
    groupItem.textContent = `${group.name} - ${group.subject} - ${group.level} - ${group.availability} (${group.visibility})`
    groupList.appendChild(groupItem)
  })
}

// Create Group Function
function createGroup() {
  const groupName = document.getElementById('group-name').value
  const groupSize = document.getElementById('group-size').value
  const groupSubject = document.getElementById('group-subject').value
  const timeZone = document.getElementById('time-zone').value
  const visibility = document.getElementById('group-visibility').value

  const newGroup = {
    name: groupName,
    subject: groupSubject,
    level: groupSize,
    availability: timeZone,
    visibility: visibility,
  }

  groups.push(newGroup)
  displayGroups(groups)
}

// Send Message Function
function sendMessage() {
  const discussionList = document.getElementById('discussion-list')
  const input = document.getElementById('discussion-input').value

  const newMessage = document.createElement('div')
  newMessage.textContent = input

  discussionList.appendChild(newMessage)
}

// Additional functionality can be added here for other sections (e.g. virtual study rooms, progress tracking, etc.)


// function searchGroups() {
//   // Add functionality to search for groups based on the filters
//   alert('Search functionality to be implemented')
// }

// function createGroup() {
//   // Add functionality to create a new group
//   alert('Create group functionality to be implemented')
// }

// function sendMessage() {
//   // Add functionality to send a message in the discussion thread
//   alert('Send message functionality to be implemented')
// }

// function uploadFile() {
//   // Add functionality to upload a file
//   alert('Upload file functionality to be implemented')
// }

// function startWhiteboard() {
//   // Add functionality to start a whiteboard session
//   alert('Start whiteboard functionality to be implemented')
// }

// function screenShare() {
//   // Add functionality to start screen sharing
//   alert('Screen share functionality to be implemented')
// }

// function collaborativeNotes() {
//   // Add functionality for collaborative notes
//   alert('Collaborative notes functionality to be implemented')
// }

// function addMilestone() {
//   // Add functionality to add a milestone
//   alert('Add milestone functionality to be implemented')
// }
